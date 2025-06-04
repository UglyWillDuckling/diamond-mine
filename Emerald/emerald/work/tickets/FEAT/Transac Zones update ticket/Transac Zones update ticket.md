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
- [/] #task [[#Handle usage of biz_product_coverage table]] #work 🆔 mjQoyM ⏫ ⏳ 2025-05-28 📅 2025-06-06
	- [ ] [[#Handle usage of biz_product_coverage table]]: sync feature
___
## status

- [/] update [[SalesForceApi]] to only update items with relevant data
	- ! don't send invalid requests to [[Media API]]

## Handle usage of biz_product_coverage table

- [[coverage table creation def]]
- [[call with Paulo -transac zones table]]

- [/] **plan** a new solution to update the **coverage** table based on changes made to ???
	- [/] update diagram to match the changes

### **check** transac diagram in relation to the table

This `city_id` is only used as a **filter**. It takes all irises for **one** city from the `geo` table  
 and performs an insert into `coverage`. The Backyard is just a way to <mark style="background: #FF5582A6;">trigger</mark> an update of  certain cities.

- ? Not sure what is the relation(mapping) between the different `id` fields in the coverage table.

- & **Place** **id** **is** **the id** from the `geo_place2` table
	- it functions as a `foreign key`[^1]

## update salesforce API to limit the number of requests to `media`

```js
 docker compose exec app pytest tests/apis/test_realtor_v1.py
```

- [x]  prevent request submission in case the data is missing
	- [x] empty `iris_id` list
	- [x] by key
- [/] write test
	- [x] success test
	- [x] negative test 
	- [x] `refactor` tests, make a map that `list` that will map inputs to test `assertions`. will take time [^2]  [^3]
		- [x] see [[Tips for Writing Better Unit Tests for Your Python Code#6 . Use Parametrized Tests to Avoid Repetition]]
	- [ ] take another look 👀 👓


[^1]: [[foreign key]]
[^2]: [[refactoring]]
[^3]: [[Tips for Writing Better Unit Tests for Your Python Code]]