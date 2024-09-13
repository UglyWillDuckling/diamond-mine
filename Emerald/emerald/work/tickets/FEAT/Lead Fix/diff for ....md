
missing pieces list
```php
array:5 [
  "partner" => "SELOGER"
  "item_coordinates" => "(1.903879,47.902994999984)"
]
```

- ! the `apartement` is also weird

```php
function objectToArray ($object) {
    if(!is_object($object) && !is_array($object))
        return $object;
    return array_map('objectToArray', (array) $object);
}
```