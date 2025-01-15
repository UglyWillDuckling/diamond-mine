#### alternatives / options

**the returned query could be an object**
Either the returned query **or** even the passed in queries could be `objects`

**could return a Promise like object**
Athena could return a `Promise` like object instead a simple query id
```php
$promise = $athena->query($sql)
$promise->then(fn($result) {dd($result)})
$promise->wait()
```

**could return a result object `type`**
```php
$result = $athena->wait($query_id) 
$result->header()
$result->rows()
$result->numberOfItems() ...
```

> [!check] the result object could convert the results into an associative array by itself
> we could eliminate the need for the `header()` this way
