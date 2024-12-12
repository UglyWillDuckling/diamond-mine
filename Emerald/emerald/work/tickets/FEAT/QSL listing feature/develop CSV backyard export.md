#task #work #work/task

## <mark style="background: #ABF7F7A6;">requirements</mark>
- [ ] should be on a separate route
- [ ] route should return a CSV file containing [[QSL listing]]s
- [ ] CSV should contain relevant fields
---
## ✔
- [ ] start with basic implementation
	- [ ] develop the CSV generator first
	- [ ] create the [[route]]
	- [ ] return a [[CSV]] file - have it contain everything to start with
- [ ] <mark style="background: #FFF3A3A6;">specify</mark> the `logic` for fetching the listings
	- [[sorting]], [[filtering]]
	- find out if anything else is important
- [ ] make a list of fields that need to be included
- [ ] check for dependencies 🔽
- [ ] #task write test for backyard csv export 

### specify logic for fetching

## notes 📔
https://csv.thephpleague.com/9.0
- no rules for filtering or sorting come to mind
- the `CSV` export logic **should** go into a separate [[module]]

## ideas
- $ maybe the export itself could done as an object with more capabilities | [[capability]]
	- & it could perhaps have the output method on itself instead of returing the `Writer`
		```php
		<?php $export->output();
```