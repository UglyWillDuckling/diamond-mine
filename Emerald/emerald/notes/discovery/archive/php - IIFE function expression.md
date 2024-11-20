> - same as in [[javascript]]

## example

```php
$reflections = null;
$node = null;
$memberTypes = (function (ReflectionClassLike $reflection) use ($node) {
	if ($node instanceof ScopedPropertyAccessExpression) {
		$types = [ReflectionMember::TYPE_CONSTANT];

		if ($reflection instanceof ReflectionEnum) {
			$types[] = ReflectionMember::TYPE_CASE;
		}

		return $types;
	}
	return [ReflectionMember::TYPE_METHOD];
})($reflection);
```

- [x] remind (@[[2024-11-06]])
