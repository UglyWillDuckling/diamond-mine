
# doc

## Constraints

• qsl_listing_pkey : A primary key constraint on the id column, ensuring
the uniqueness of each listing.

## Sequence

• qsl_listing_seq : A sequence that generates default values for the id
column.

## Table

| COLUMN NAME  | DATA TYPE                   | DESCRIPTION                                                                                                               |
| ------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| id           | bigint                      | The unique identifier for the listing. This is the primary key of the table.                                              |
| enabled      | boolean                     | A flag indicating whether the listing is currently enabled or disabled. The default value is true.                        |
| created      | timestamp without time zone | The timestamp indicating when the listing was created. The default value is the current timestamp.                        |
| version      | timestamp without time zone | The timestamp indicating when the listing was last updated. The default value is the current timestamp.                   |
| contact\_id  | integer                     | The unique identifier of the contact associated with the listing. This is a foreign key referencing the contacts table.   |
| project\_id  | integer                     | The unique identifier of the project associated with the listing. This is a foreign key referencing the projects table.   |
| contract\_id | integer                     | The unique identifier of the contract associated with the listing. This is a foreign key referencing the contracts table. |
| realtor\_id  | integer                     | The unique identifier of the realtor associated with the listing. This is a foreign key referencing the realtors table.   |
| price        | double precision            | The price of the listing.                                                                                                 |
| title        | text                        | The title of the listing.                                                                                                 |
| description  | text                        | The description of the listing.                                                                                           |
| url          | text                        | The URL of the listing.                                                                                                   |
| start\_date  | timestamp without time zone | The start date of the listing.                                                                                            |