
## questions


1. could we save the entity from the data source?

```php

function save($source ) {
	if(exists($source)) {
		update($source)
	} else {
		create($source)
	}
}
```