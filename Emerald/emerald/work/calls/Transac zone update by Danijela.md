> Implemented by [[Danijela]].

related:: 
- [[call s Danijelom - handover]] 🤝
- [[Transac Zones update ticket]] 🎫
___

**TOC**
- [[#automatic zone updated]]
- [[#Manual zones update]]
- [[#Fetching zones]]

# Automatic zone updated

Used by [[SalesForceApi]] to automatically updated zones.

### used by
- [[SalesForceApi]]

# Manual zones update

Providees the ability to add and delete zones manually. These types of entires have the `is_manual_edit` **flag** set to 1.

### supports
- `delete`
- `add`

### 🗒 **notes**

- all entries are assigned the **RDVVQ** zone
- entries are marked as `is_manual_edit`
- used by [[backyard]] **only**

# Fetching zones

## suports

- **pagination**
- **filtering**
		- by `iris_id`
		- by `is_manual_edit`

## Implementation

Uses a **distinct** [[database view]], [[iris_zone_view]], to do the operation.

The method processes the incoming request, applies optional filters based on query **parameters**, **paginates** the results, and returns the **filtered** list of `iris_id` values.

### **Params**
| Parameter         | Type | Required | Description                                                               |
| ----------------- | ---- | -------- | ------------------------------------------------------------------------- |
| iris\_id          | int  | Optional | Returns data for a specific iris\_id.                                     |
| is\_manual\_edit  | bool | Optional | Filters by manually edited (true) or automatically added (false) entries. |
| page              | int  | Required | Specifies which page of results to retrieve.                              |
| page\_size        | int  | Required | Defines the number of records per page.                                   |
| get\_total\_pages | bool | Optional | If true, returns total page count instead of data.                        |

### **Backyard**

`MALegacy/backyard/admin/scripts/rdvvq/batch.add.cities.inc`
-  `function get_rdvvq_zones_list($pageSize, $page)`
- `function search_rdvvq_zones_list($iris_id, $pageSize, $page)`

**Frontend**: `MALegacy/backyard/admin/scripts/rdvvq/batch.add.cities.php`

## Examples {}

1. Get all RDVVQ iris IDs (Paginated)

**Request**: `/rdvvq_irises?page=1&page_size=10`
**Response** = [12345, 67890, 11223, 44556, ...]

2. Get RDVVQ iris IDs for a specific iris_id

**Request**: `/rdvvq_irises?iris_id=67890`
**Response**: [67890]

3. Get manually edited RDVVQ entries

**Request**: `/rdvvq_irises?is_manual_edit=true`
**Response**: `[12345, 56789,...]`

4. Get total pages count

**Request**: `/rdvvq_irises?page_size=20&get_total_pages=true`
**Response**: `{"total_pages": 5}`
