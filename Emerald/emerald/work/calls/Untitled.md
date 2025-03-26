This document describes the integration between Backyard, MediaAPI, and the Salesforce API used to update iris RDVVQ and MEDIA zones. The Salesforce API and provides data for automatic RDVVQ and MEDIA zones. Backyard contains a Salesforce API client implementation in Python, which fetches necessary data and updates MediaAPI to store the information in the www-db database. RDVVQ zones can also be manually added from Backyard.

Original Jira ticket: https://avivgroup.atlassian.net/browse/LUNA-346 



Components

Backyard with a Salesforce API client: Handles communication with Salesforce API.

MediaAPI: Responsible for CRUD operations on www-db.

MediaApi documentation can be found here

Salesforce API: Sends data required for RDVVQ and MEDIA zones.

Salesforce API documentation can be found here

Data flow overview

Automatic zones update

Salesforce API sends updated data.

Data received from Salesforce API follows this format: 

{"key":"promising-sellers-contract-offer-transac","blocked":false, "iris_id": ["123123","123123"]}
{"key":"promising-sellers-contract-offer-media","blocked":false, "iris_id": [12334,545425,41232423]}

The response is passed to MediaAPI via a new call added to apps/SalesforceAPI/salesforceapi/apis/realtor_v1.py in Backyard.

Route: @ns.route("/<int:realtor_id>/features_new", methods=["POST"])

Implementation: 

media_client = ma_apiclients.MediaClient()
media_client.update_zone_by_iris(realtor_id, data)


MediaAPI processes this request via the following route:

Route: @bp.route("/<int:realtor_id>/update_zone_by_iris", methods=["POST"])

Manual zones update

A manual update is performed through a form in Backyard.

The form allows users to submit a list of iris_id values.

The realtor_id is NULL for manually added entries.

The zone is automatically assigned as 'RDVVQ'.

Data is sent to MediaAPI.



Database schema

The data is stored in the mkt.realtor_zone_by_iris_id table:

CREATE TABLE mkt.realtor_zone_by_iris_id (
    realtor_id integer,
    iris_id integer NOT NULL,
    zone varchar(5) NOT NULL CHECK (zone IN ('RDVVQ', 'MEDIA')),
    created_at date DEFAULT CURRENT_DATE NOT NULL,
    is_manual_edit boolean DEFAULT false NOT NULL
);

CREATE UNIQUE INDEX unique_realtor_zone_by_iris
ON mkt.realtor_zone_by_iris_id (realtor_id, iris_id, zone)
WHERE realtor_id IS NOT NULL;

CREATE UNIQUE INDEX unique_iris_zone
ON mkt.realtor_zone_by_iris_id (iris_id, zone)
WHERE realtor_id IS NULL;

Model Implementation

The following SQLAlchemy model represents the realtor_zone_by_iris_id table:

from sqlalchemy import Boolean, CheckConstraint, Date, Integer, String, UniqueConstraint
from ma_models import db

class RealtorZoneByIrisId(db.Model):
    __tablename__ = "realtor_zone_by_iris_id"

    realtor_id = db.Column(Integer, nullable=True)
    iris_id = db.Column(Integer, primary_key=True)
    zone = db.Column(String, nullable=False)
    created_at = db.Column(Date, default=db.func.current_date(), nullable=False)
    is_manual_edit = db.Column(Boolean, default=False, nullable=False)

    __table_args__ = (
        UniqueConstraint("realtor_id", "iris_id", "zone", name="unique_realtor_iris_zone"),
        UniqueConstraint("iris_id", "zone", name="unique_iris_zone"),
        CheckConstraint("zone IN ('RDVVQ', 'MEDIA')", name="check_zone_values"),
    )

The unique constraints in the realtor_zone_by_iris_id table are designed to handle different scenarios where the realtor_id might be NULL:

unique_realtor_iris_zone: Ensures that a specific combination of realtor_id, iris_id, and zone is unique when realtor_id is not NULL. This prevents duplicate entries for the same realtor.

unique_iris_zone: Ensures that each iris_id and zone pair is unique when realtor_id is NULL. This supports cases where the data is added manually (outside of MediaAPI), ensuring that the same iris_id does not appear twice within the same zone.

check_zone_values: Ensures that the zone column only contains valid values ('RDVVQ' or 'MEDIA').

Implementation in MediaAPI

Automatic zones update

This section handles the automatic update of zones. The implementation can be found in the file mediaapi/views/realtors.py.

@bp.route("/<int:realtor_id>/update_zone_by_iris", methods=["POST"])
def update_zone_by_iris(realtor_id):
    json_data = request.get_json()

    validation_result = validate_input(json_data, realtor_id)
    if validation_result:
        return validation_result

    validated_data, zone_by_key = validation_result
    existing_zones_by_key = get_existing_zones(realtor_id)

    process_zones(json_data, realtor_id, zone_by_key, existing_zones_by_key)

    db.session.commit()
    current_app.logger.info("Realtor zones by iris updated successfully.")
    return jsonify({"message": "Realtor zones by iris updated successfully"}), 200

Supporting functions

validate_input(json_data, realtor_id):

Ensures that the input data follows the expected format.

Maps key values to corresponding zones (RDVVQ or MEDIA).

Uses RealtorZoneByIrisIdSchema for validation.

get_existing_zones(realtor_id):

Fetches all existing zones for the given realtor_id.

Returns a dictionary of zones mapped to their respective iris_id values.

process_zones(json_data, realtor_id, zone_by_key, existing_zones_by_key):

Compares the new data with existing zones.

Determines which iris_id values need to be added or removed.

Calls add_new_zones and delete_old_zones accordingly.

add_new_zones(realtor_id, zone, iris_ids_to_add):

Inserts new records into realtor_zone_by_iris_id.

Marks them as is_manual_edit=False.

delete_old_zones(realtor_id, zone, iris_ids_to_delete):

Removes outdated records from realtor_zone_by_iris_id.

Manual zones update 

In addition to the automatic updates, manual zone updates can be performed by users via the following methods. You can find the methods in mediaapi/views/iris.py.

Add manual zone

Route:
@bp.route("/add_manual_zone", methods=["POST"])

This method allows users to add a manual zone for one or more iris_id values to the RDVVQ zone. The input data is validated and stored, ensuring the integrity of the database. Below is a detailed explanation of the implementation:

def add_manual_zone():
    schema = ManualIrisZoneSchema()
    json_data, errors = schema.load(request.get_json(force=True))

    if errors:
        current_app.logger.error("Invalid input data for manual zone add.")
        return jsonify({"message": "Invalid input data", "errors": errors}), 400

    iris_ids = json_data["iris_ids"]
    created_at = json_data.get("created_at", date.today())
    zone = "RDVVQ"
    is_manual_edit = True

    created_rows = []

    for iris_id in iris_ids:
        try:
            # Check for existing iris_id + zone + is_manual_edit=True combination
            existing_entry = RealtorZoneByIrisId.query.filter(
                RealtorZoneByIrisId.iris_id == iris_id,
                RealtorZoneByIrisId.zone == zone,
                RealtorZoneByIrisId.is_manual_edit == is_manual_edit,
                RealtorZoneByIrisId.realtor_id.is_(None),
            ).first()

            if existing_entry:
                current_app.logger.info("Realtor zones by iris already exists.")
                continue

            new_row = RealtorZoneByIrisId.add_new_row(
                iris_id=iris_id,
                zone=zone,
                created_at=created_at,
                is_manual_edit=is_manual_edit,
            )

            created_rows.append(
                {
                    "iris_id": new_row.iris_id,
                    "zone": new_row.zone,
                    "created_at": new_row.created_at,
                }
            )

        except Exception as e:
            current_app.logger.exception(
                "An error occurred with iris_id %s: %s", iris_id, str(e)
            )
            return jsonify(
                {"message": f"An error occurred with iris_id {iris_id}: {str(e)}"}
            ), 500

    current_app.logger.info("RDVVQ zone iris IDs added manually successfully.")
    return jsonify(
        {
            "message": "RDVVQ zone iris IDs added manually successfully",
            "created_rows": created_rows,
        }
    ), 201

Input: The input data is expected to be in JSON format, containing an array of iris_ids and an optional created_at field. The zone is set to "RDVVQ" by default, and is_manual_edit is always set to True for manual edits.

Checking for existing entries: Before inserting a new row, the method checks if an entry with the same iris_id, zone ("RDVVQ"), and is_manual_edit=True already exists in the database. If such an entry exists, it skips the insertion for that iris_id.

Inserting new rows: If the entry does not already exist, a new row is created using the add_new_row method of the RealtorZoneByIrisId model. The created rows are stored in the created_rows list.

Delete manual zone

Route:
 @bp.route("/<int:iris_id>/delete_manual_zone", methods=["DELETE"])

This method allows users to delete a manual zone entry for a specific iris_id within the RDVVQ zone. 

Fetch RDVVQ iris data 

The following route is used to fetch iris zone data for the RDVVQ zone from MediaAPI.

Route

@bp.route("/rdvvq_irises")
def get_all_rdvvq_irises():

HTTP Method: GET

Purpose: Retrieves a list of iris_id values that belong to the RDVVQ zone.

Location: Implemented in mediaapi/views/iris.py.

Database structure

All the data returned on this route is fetched from the view iris_zone_view defined in migrations/versions/V465_update_iris_zone_view.py:

CREATE OR REPLACE VIEW iris_zone_view AS (
    SELECT DISTINCT
        realtor_zone_by_iris_id.iris_id AS iris_id,
        realtor_zone_by_iris_id.created_at AS created_at,
        realtor_zone_by_iris_id.zone AS zone
    FROM mkt.realtor_zone_by_iris_id
);

The view data is fetched directly from mkt.realtor_zone_by_iris_id table.

Implementation

The method processes the incoming request, applies optional filters based on query parameters, paginates the results, and returns the filtered list of iris_id values.

Querying the database

irises_query = IrisZone.query.filter(IrisZone.zone == "RDVVQ")

A query is created to filter the IrisZone table for records where zone == "RDVVQ".

This ensures that only RDVVQ zone entries are retrieved.

Applying filters

The request allows filtering the results based on iris_id and is_manual_edit.

Filter by iris_id

iris_id = request.args.get("iris_id")
if iris_id:
    irises_query = irises_query.filter(IrisZone.iris_id == iris_id)

If iris_id is provided as a query parameter, the query is filtered to return only the record(s) matching that iris_id.

Filter by is_manual_edit

is_manual_edit = request.args.get("is_manual_edit")
if is_manual_edit is not None:
    irises_query = irises_query.filter(
        IrisZone.is_manual_edit == (is_manual_edit.lower() == "true")
    )

If is_manual_edit is specified in the request, the query is filtered to return only manually edited (True) or automatically added (False) iris zones.

The conversion is_manual_edit.lower() == "true" ensures case-insensitive matching.

Pagination

Extract Pagination Parameters

page_size = schema["page_size"]
get_total_pages = request.args.get("get_total_pages", "false").lower() == "true"

The page_size parameter determines the number of records per page.

The get_total_pages parameter checks if the total number of pages should be calculated.

Total pages

if get_total_pages:
    total_items = irises_query.count()
    total_pages = (total_items + page_size - 1) // page_size
    return jsonify({"total_pages": total_pages})

If get_total_pages=true, the function calculates the total number of pages: \text{total_pages} = \frac{\text{total_items} + \text{page_size} - 1}{\text{page_size}}

The response includes only the total pages count.

Query parameters

Parameter

Type

Required

Description

iris_id

int

Optional

Returns data for a specific iris_id.

is_manual_edit

bool

Optional

Filters by manually edited (true) or automatically added (false) entries.

page

int

Required

Specifies which page of results to retrieve.

page_size

int

Required

Defines the number of records per page.

get_total_pages

bool

Optional

If true, returns total page count instead of data.

Example API requests

1. Get all RDVVQ iris IDs (Paginated)

Request:

GET /rdvvq_irises?page=1&page_size=10

Response:

[12345, 67890, 11223, 44556]

2. Get RDVVQ iris IDs for a specific iris_id

Request:

GET /rdvvq_irises?iris_id=67890

Response:

[67890]

3. Get manually edited RDVVQ entries

Request:

GET /rdvvq_irises?is_manual_edit=true

Response:

[12345, 56789]

4. Get total pages count

Request:

GET /rdvvq_irises?page_size=20&get_total_pages=true

Response:

{"total_pages": 5}

Implementation in Backyard



Backyard interacts with MediaAPI to manage RDVVQ iris zones. The API implementation can be found in:

MALegacy/backyard/admin/scripts/rdvvq/batch.add.cities.inc

It supports both automatic and manual zone management via API calls.

Automatic RDVVQ iris zones

Get RDVVQ zones list

function get_rdvvq_zones_list($pageSize, $page)

Fetches a paginated list of RDVVQ iris zones.

Search RDVVQ zones by iris_id

function search_rdvvq_zones_list($iris_id, $pageSize, $page)

Searches for an RDVVQ iris zone by iris_id.

Get total pages

function rdvvq_zones_total_pages($iris_id, $pageSize)

Retrieves the total number of pages for RDVVQ iris zones.

Manual RDVVQ iris zones

Retrieve Manually Added RDVVQ Zones

function get_manual_rdvvq_zones_list()

Fetches all manually added RDVVQ zones.

Add Manual RDVVQ Zones

function add_manual_rdvvq_zones()

Adds manual RDVVQ iris zones.

Delete a Manual RDVVQ Zone

function delete_manual_rdvvq_zone($iris_id)

Deletes a manually added RDVVQ zone for a specific iris_id.

Frontend implementation can be found in MALegacy/backyard/admin/scripts/rdvvq/batch.add.cities.php

