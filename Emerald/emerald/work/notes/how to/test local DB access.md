- ! this will throw an error if the connection fails

`backyard/test_backyard_db.php`
```php
require_once __DIR__ . '/../share/global.backyard.inc';

$contact_ids = [6562017];
$estimas = transaction::get_estimas_from_user_ids(...$contact_ids);
```
