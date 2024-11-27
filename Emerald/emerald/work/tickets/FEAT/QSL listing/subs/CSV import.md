https://csv.thephpleague.com/9.0/reader/
## notes
- reading the file is fast ⏩
- `price` can easily be `null`
- ! refactoring should be done via [[Phpstorm]]
- ~ entity saving logic should be localized
	- the same code should decide when to update and when to create a new entity

## tasks
- [/] #task data source - standard data source
	- [x] data object for import
	- [/] examine the objects data
		- [x] ids
		- [x] price
		- [>] picture data
- [/] #test add import tests #test
- [ ] #task research how to add a cronjob
- [x] #task create test for `CsvDataSource` construction ✅ 2024-11-26
- [/] #task start importing the entities
	- [x] create
	- [x] create mulitple
- [ ] #task update db constraints
	- [x] unique `classified_id`
	- [ ] unique `project_id`
- [ ] #task remove skips
### data source
- [/] explore `iterators`
- [>] picture data 
#### picture data

### entity import
- [x] run basic create
- [x] run on all data
- [x] check data in `db`
	- [x] count
	- [x] `load` entity
- [/] research how to best update  and new entities
- [>] create script to run
	- [ ] view data in **main** db

### discussion on save,update,create

- the same piece of code should be responsible for this
	- it should decide on weather it needs to this entity already exists or a new one should be created
	- the rules for this should be kept hidden
	- ...