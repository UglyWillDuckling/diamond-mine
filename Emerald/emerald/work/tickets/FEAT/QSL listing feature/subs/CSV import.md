https://csv.thephpleague.com/9.0/reader/

## notes 📔
- reading the file is fast ⏩
- `price` can easily be `null`
- ! major refactorings should be done via [[Phpstorm]]
- ~ entity saving logic should be localized
	- the same code should decide when to update and when to create a new entity

## tasks
- [x] #task data source - standard data source ✅ 2024-11-27
	- [x] data object for import
	- [x] examine the objects data
		- [x] ids
		- [x] price
		- [x] picture data
- [x] #task start importing the entities ✅ 2024-11-27
	- [x] create
	- [x] create mulitple
- [x] #task update db constraints ✅ 2024-11-27
	- [x] unique `classified_id`
	- [-] unique `project_id`
- [x] #task get back the `start date` ✅ 2024-11-27
- [/] #task [[#entity import]] ✅ 2024-11-27
	- [x] #task develop a new way of saving entities #encapsulation #abstraction ✅ 2024-11-27
	- [x] #test add import tests #test
		- [x] #task create test for `CsvDataSource` construction ✅ 2024-11-26
	- [!] #task write the **real** import ⏫ 📅 2024-11-28
- [x] #task support for `created` time csv field 🔼 ✅ 2024-11-27
- [>] #task research how to add a `cronjob`
- [ ] #task modify tests to be smaller and quicker
### data source
- [x] explore `iterators`
- [>] picture data 
#### picture data

### entity import
- [x] run basic create
- [x] run on all data
- [x] check data in `db`
	- [x] count
	- [x] `load` entity
- [x] research how to best update  and new entities
	- [x] new repo class
	- [x] existing code on backyard
	- [x] using the model
	- [x] using the entity
	- [x] using the class
- [>] create `script` to run a **real** import
	- [ ] view data in **real** db

#### saving entities

##### discussion 
- the same<mark style="background: #ABF7F7A6;"> piece of code </mark>should be <mark style="background: #FFF3A3A6;">responsible</mark> for this
	- it should decide on weather it needs to this entity already exists or a new one should be created
	- the rules for this should be kept **hidden**
```php
static function save($listing) {
	if(existsInDb($listing))) {
		update($listing);
	} else {
		create($listing);
	}
}
```

##### **<mark style="background: #BBFABBA6;">acceptance</mark>**
- [x] the logic should be encapsulated
- [x] it should always apply
- [x] it has to enforce rules and constraints #invariant
##### todo's
- [x] create new save static method
- [x] create a new load by classified id method
	- [i] maybe remove the current load by id
- [x] create a new method to create entities from `data source`
- [>] think about splitting this into a #repository class 🤔 #task

**thoughts**

<mark style="background: #FFF3A3A6;">making the repository a separate class would likely make things much clearer</mark>


---
## active ✔
```tasks
not done
path includes {{query.file.path}}
show tree
```
