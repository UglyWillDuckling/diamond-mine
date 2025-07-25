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