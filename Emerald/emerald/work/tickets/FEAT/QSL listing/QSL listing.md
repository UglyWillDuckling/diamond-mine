## status
<mark style="background: #FFB8EBA6;">submitted</mark> a `draft` **PR**
working on tests
need to `commit` changes

## todos ✔
- [/] #task **QSL** ⏫ 🛫 2024-10-11 ⏳ 2024-11-06 📅 2024-11-12
	- [x] start creating the **DB** [[Create DB table]] ✅ 2025-11-01 
	- [x] [[build the interface]] 🔼 ✅ 2024-11-04
	- [x] #task [[build the model]] 🎴 ⏫ 🛫 2024-11-04 📅 2024-11-07 ✅ 2024-11-08
	- [x] #task refactor tests ✅ 2024-11-12
		- [x] move `rendering`
	- [x] #task [[#end date test]] ✅ 2024-11-12
	- [x] #task add rendering test for the new listing 📅 2024-11-07
	- [x] add missing columns #task 📅 2024-11-08 ✅ 2024-11-08
- [x] #task fix issue with docker-compose ✅ 2024-11-08
	- [[make test not working]]
- [x] [[write the table docs]] #task 📅 2024-11-07 ✅ 2024-11-06
- [ ] #task update table docs - missing `columns`
- [ ] #task [[study CSV export]] 📅 2024-11-13 
	- [ ] add new columns #task
	- [ ] update existing logic, tests #task
	- [ ] #task [[check the diagram from [[Paulo]]]]

### add `end_date`
- [x] add column
- [x] add method
- [x] update the db model itself

### rendering test
- [x] start writing the test
- [x] setup real data
- [x] render the content
- [x] add [[asertion]]'s

### end date test
```php
expect($listing->is_online())->toBeFalse();
expect($listing->is_offline())->toBeTrue();
```
- [x] add the opposite test ◀
### study csv export

