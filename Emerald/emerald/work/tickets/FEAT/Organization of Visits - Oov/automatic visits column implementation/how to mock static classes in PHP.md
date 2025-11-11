#howto/php/tests 

we use [[Mockery]] for php

- create the mock with `Mockery::mock`
- you may store the reference to it in a field
- you can put expecations on it and return values as usual

### example 

```php
$mock = Mockery::mock('alias:log')

$mock->shouldReceive('single_log')->once();
```
