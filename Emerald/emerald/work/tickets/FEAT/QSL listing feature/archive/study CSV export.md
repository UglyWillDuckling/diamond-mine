[[check the diagram from Paulo]]

- 460 rows
- includes picture data

## new fields
- classified_id integer NOT NULL,
- region_id integer NOT NULL,
- subregion_id integer NOT NULL,
- city_id integer NOT NULL,
- picture_data text NOT NULL,

## todo

- [x] add columns to db script
	- [?] add indices 
- [x] update model and entity with new fields
	- [x] constructor
	- [x] factory method
	- [x] model fields
	- [x] entity fields
	- [ ] update methods to use the new fields
- [ ] test creation
	- [x] direct
	- [x] create entity
	- [/] check if entity is added to db with proper info
- [ ] add some of the CSV rows **directly** into the DB 
	- [ ] try to load them
	- [ ] verify `float` values
	- [ ] check for `null's`
- [i]  import the data directly into postgres db using [[csvkit]]
- [ ] update entity to support contract being null
