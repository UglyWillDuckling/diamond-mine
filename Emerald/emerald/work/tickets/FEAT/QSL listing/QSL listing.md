## status
<mark style="background: #FFB8EBA6;">submitted</mark> a `draft` **PR**
working on tests
need to `commit` changes

## todos ✔
- [/] **QSL** ⏫ 🛫 2024-10-11 ⏳ 2024-11-06 #task
	- [x] start creating the **DB** [[Create DB table]] ✅ 2025-11-01 
	- [x] [[build the interface]] 🔼 ✅ 2024-11-04
	- [x] #task [[build the model]] 🎴 ⏫ 🛫 2024-11-04 📅 2024-11-07 ✅ 2024-11-08
	- [ ] #task refactor tests
		- [ ] move rendering
		- [ ] other
- [x] #task fix issue with docker-compose ✅ 2024-11-08
	- [[make test not working]]
- [x] [[write the table docs]] #task 📅 2024-11-07 ✅ 2024-11-06
- [x] #task add rendering test for the new listing 📅 2024-11-07
- [x] add missing columns #task 📅 2024-11-08 ✅ 2024-11-08
- [x] update tests to use the default data
- [x] #task [[#end date test]] 🧪 📅 2024-11-11 ✅ 2024-11-08
- [ ] commit changes ✔

### add `end_date`
- [x] add column
- [x] add method
- [x] update the db model itself

<mark style="background: #FF5582A6;">resolve the model error</mark>

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
