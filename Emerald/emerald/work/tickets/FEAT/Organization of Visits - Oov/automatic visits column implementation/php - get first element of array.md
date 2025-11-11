#howto/php

Original answer, but costly (O(n)):
```php
array_shift(array_values($array));
```

In O(1):
```
array_pop(array_reverse($array));
```

Other use cases, etc...

If modifying (in the sense of resetting array pointers) of $array is not a problem, you might use:

reset($array);
This should be theoretically more efficient, if a array "copy" is needed:

array_shift(array_slice($array, 0, 1));
With PHP 5.4+ (but might cause an index error if empty):

array_values($array)[0];