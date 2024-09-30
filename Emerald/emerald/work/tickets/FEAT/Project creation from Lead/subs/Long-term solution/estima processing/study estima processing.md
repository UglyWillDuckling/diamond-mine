[JIRA](Refactor and test estima processing class)
[[sequence - estima processing creation]]

---
# result

- `estima_processing`
	- `file`: share/class.**estima_processing**.inc
	- `table`: backyard::**estima_processing**

# goals 🏁
- understand what `estima_processing` is
- tigh this back to the diagram
- find key points
- list relevant code elements
- find usages 🙈

# work ⛏

## estima processing creation
### code flow
the following shows the flow of estima processing creation

`share/controller/leads.inc:1176`
```php
$estima_processing = estima_processing::from_estima_id($transaction_id);
```

`share/class.estima_processing.inc:19`
```php
public static function from_estima_id($estima_id): \estima_processing
    {
        $estima_processing = new estima_processing();

        $sql = new SQLSelect($estima_processing);
        $sql->add_filter('estima_id', $estima_id);

        try {
            $row = $sql->one();
            $estima_processing->load_row($row);
        } catch (RecordNotFoundException $caught) {
            $estima_processing->estima_processed = false;
            $estima_processing->estima_id = $estima_id;
        }

        return $estima_processing;
    }
```
``
`share/controller/leads.inc:1177`
```php
$estima_processing->set_processed(true)
```

#### diagram
![[sequence - estima processing creation#diagram]]

#### notes 📓
- as the `estima_processing` for the given ID doesn't yet exist, a new one is created
	- the `transaction id` is used for the ID value
- the `estima_processing` is updated on `share/controller/leads.inc:117`
- `estima_processing` looks to be the only table in the `backyard` **DB**

## estima_processing Usage 👐

### areas 🟧🟩
- Frontend
- ???
### questions
1. where is it used?
2. what can we <mark style="background: #FFB86CA6;">ignore</mark>? 


