[[check the diagram from Paulo]]

## in short
- find new columns
- add columns
- update the model and logic
- update the schema scripts
- update tests
- play around with the new data
- see about edge cases

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
	- [/] entity fields
- [ ] test creation 
	- [x] direct
	- [x] create entity
- [ ] 
