---
related:
  - "[[Athena impl..canvas|Athena impl.]]"
---
#### implemented
✅
**could return a result object `type`**
```php
	$result = $athena->wait($query_id) 
	$result->header()
	$result->rows()
	$result->numberOfItems() ...
```
#### pendiong options ⤴

**could return a result object `type`**
```php
	$result = $athena->wait($query_id) 
	$result->header()
	$result->rows()
	$result->numberOfItems() ...
```

**the returned query could be an object**
Either the returned query **or** even the passed in queries could be `objects`

**could return a [[Promise]] like object**
Athena could return a `Promise` like object instead a simple query id
```php
	$promise = $athena->query($sql)
	$promise->then(fn($result) {dd($result)})
	$promise->wait()
```
