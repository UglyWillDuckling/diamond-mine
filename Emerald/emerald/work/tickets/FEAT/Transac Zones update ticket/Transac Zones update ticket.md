---
tags:
  - ticket/feature
status:
  - In Progress
done:
---
related:: 
- [[call s Danijelom - handover]]
- [[Transac zone update by Danijela]]

- [x] #task fix [[SalesForceApi]] to send data to `media` #work 🆔 O0ejus ⏫ 📅 2025-06-03 ✅ 2025-06-04
- [/] #task implement [[Transac Zones update ticket]] 🆔 pcSar3 ⏳ 2025-07-02 📅 2025-07-09
	- [x] #task [[Handle usage of biz_product_coverage table]] #work 🆔 mjQoyM ⏫ ⏳ 2025-05-28 📅 2025-06-30 ✅ 2025-06-27
	- [x] [[implement new changes to transac]]
	- [x] add [[transac model test]]
	- [x] #task fix all tests and style errors 🆔 OASde7 ✅ 2025-07-08
		- [x] style
		- [x] tests - **previous** tests
	- [ ] update [[roadie documentation]] #after
___
## status

workin on **fixing old test** 🧪

Db test `not` `passing`

## update salesforce API to limit the number of requests to `media`

```js
 docker compose exec app pytest tests/apis/test_realtor_v1.py
```

- [x]  prevent request submission in case the data is missing
	- [x] empty `iris_id` list
	- [x] by key
- [/] write tests
	- [x] success test
	- [x] negative test 
	- [x] `refactor` tests, make a map that `list` that will map inputs to test `assertions`. will take time [^2]  [^3]
		- [x] see [[Tips for Writing Better Unit Tests for Your Python Code#6 . Use Parametrized Tests to Avoid Repetition]]

by route: https://backyard.meilleursagents.com/admin/scripts/rdvvq/batch.add.cities.php

[^1]: [[foreign key]]
[^2]: [[refactoring]]
[^3]: [[Tips for Writing Better Unit Tests for Your Python Code]]