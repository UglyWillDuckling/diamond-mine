### short list
```typescript
type response = {
	classified_id: number,
	project_id: number,
	realtor_id: number,
	contract_id: number,
	?offline: boolean | 0 | 1, // Is the listing still active?
	title: string,
	price: number | string | object,
	start_date: datetime | string,
	end_date: datetime | string,
	?created: date | string, // created at timestamp
	?version: date | string, // this represents the last updated timestamp
	?ref: string | any, // represents a reference back to Se Loger
	?picture_data: string | object,
	?description: string,
}
```


### fields in detail

#### classified id

the id of the **listing**(classified)

#### project_id

Id of the project associated with the listing

<mark style="background: #FFB8EBA6;">**needs to match the id in the backyard**</mark>

#### realtor_id

id of the realtor(agency) associated with the listing and the project
#### contract_id

the contract id associated with the give listing

**needs to match the id in the backyard**

#### offline
*not required*

a boolean value specifying if the given listing is still active or not

for the existing **MA** listings, this value is calculated dynamically using the `start_date` and `end_date` fields
#### title

A string value containing the listings title to be displayed
#### price

- represents the current listings price

examples: 
- 335.500
- 200.000
- 550.800
#### start_date

date value representing the starting date of the listing
#### end_date

date value representing the listings end date. 

shouldn't exist if the listing is still active

#### place_id
*optional*

- an ID field referencing a place entity
- not required as the listings can be displayed without it
- might be useful to make connections between listings and actual places

#### created
*optional*

datetime value, represents the creation time of the listing in the database
#### version
*optional*

datetime value, represents the listings last updated time
#### ref
*optional*

represents the connection to the **Se Loger**  website
#### picture_data
*optional*
* contains picture information associated with the listing
* the listings from **MA** contain a hash that is then transformed into a `URL`
* **ideally**, this would just be a `URL` value

<mark style="background: #BBFABBA6;">not mandatory as the listing can be displayed without it</mark>
#### description
*optional*
- a text field that contains the listings description

---

# <mark style="background: #FFF3A3A6;">Done</mark>
