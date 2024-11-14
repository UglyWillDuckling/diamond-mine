## status
<mark style="background: #FFB8EBA6;">submitted</mark> a `draft` **PR**
working on tests
need to `commit` changes

## todos ✔
- [ ] #task update table docs - missing `columns`
- [/] #task **QSL** ⏫ 🛫 2024-10-11 ⏳ 2024-11-06 📅 2024-11-12
	- [x] start creating the **DB** [[Create DB table]] ✅ 2025-11-01 
	- [x] [[build the interface]] 🔼 ✅ 2024-11-04
	- [x] #task [[build the model]] 🎴 ⏫ 🛫 2024-11-04 📅 2024-11-07 ✅ 2024-11-08
	- [x] #task refactor tests ✅ 2024-11-12
		- [x] move `rendering`
	- [x] #task [[#end date test]] ✅ 2024-11-12
	- [x] #task add rendering test for the new listing 📅 2024-11-07
	- [x] add missing columns #task 📅 2024-11-08 ✅ 2024-11-08
	- [ ] URL generation [[how to create links for Se Loger]]
- [x] #task fix issue with docker-compose ✅ 2024-11-08
	- [[make test not working]]
- [x] [[write the table docs]] #task 📅 2024-11-07 ✅ 2024-11-06
- [/] #task [[study CSV export]] 📅 2024-11-13 
	- [x] add new columns #task ✅ 2024-11-13
	- [x] update existing logic, tests #task ✅ 2024-11-13
	- [ ] #task [[check the diagram from [[Paulo]]]]
- [x] see 🙈 if we could use the [[project]] as the source for the [[place]] entity
- [ ] support for `optional` fields #task 📅 2024-11-14 
	- [/] #task update constructor and creation
	- [ ] #task update relevant methods
		- 'i try to use data that is **always there**
	- [!] update tests again
- [ ] #task `picture data` method
- [/] 't update tests with correct values from DB #task
	- data needs to match with **actual** entities
	- the entities should also be **linked** properly

### end date test 📆
```php
expect($listing->is_online())->toBeFalse();
expect($listing->is_offline())->toBeTrue();
```
- [x] add the opposite test ◀

### <mark style="background: #FFB8EBA6;">current</mark>

- [x] commit place related changes
- [/] start work on `optional` stuff
	- @ use what constant fields you can

