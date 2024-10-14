- ! this will throw an error if the connection fails

```php
require_once __DIR__ . '/../share/global.backyard.inc';

$contact_ids = [6562017];

$estimas = transaction::get_estimas_from_user_ids(...$contact_ids);

$estima_processed = estima_processing::is_estima_processed($estimas[0]);
```
<mark style="background: #FFF3A3A6;">backyard/test_backyard_db.php</mark>
