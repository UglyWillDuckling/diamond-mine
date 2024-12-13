#task #work #work/task

## <mark style="background: #ABF7F7A6;">requirements</mark>
- [x] route should return a CSV file containing [[QSL listing]]s
- [x] CSV should contain relevant fields
- [ ] should be on a separate route
---
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

## ✔
- [x] start with basic implementation
	- [x] develop the CSV generator first
	- [x] return a [[CSV]] file - have it contain everything to start with
	- [ ] create the [[route]]
- [x] <mark style="background: #FFF3A3A6;">specify</mark> the `logic` for fetching the listings
	- [[sorting]], [[filtering]]
	- find out if anything else is important
- [x] make a list of fields that need to be included
- [x] check for dependencies 🔽
- [ ] #task write test for backyard csv export 🧪 

### new route
📔we also need to place a link to this somewhere
- % should be under listings, qsl
- should just output the CSV file


