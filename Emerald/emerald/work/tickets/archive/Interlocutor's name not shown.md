#bug
#interlocutor
#call

## Description
> Mon Espace > Mes Appels > Appels entrant

**Interlocutor**’s name is not shown in the “**Incoming call**s" section (Mon Espace > Mes Appels > Appels entrant)

### Relates to
[[Ma Perf - take into account incoming calls (Appels entrant)]]

### reproduce
[LINK](http://localhost:8001/my/calls?call_date=14%2F05%2F2024&user_id=5464267)

---

## Notes 📔

- the data is simply missing
	- we would need to see if this data can be added to the call entry **or**, if the data can be retreived in some other way
- current local performance is ~ 4.5s
- I would need to check performance after the changes have been made

**unrelated**
- button Propriétaire (Owner) oznacava da je taj lead zapravo vlasnik te nekretnine i klikom na taj gumb, sales potvrdjuje da je on owner i stavlja ga sebi u portfolio (da bude od tog trenutka pa na dalje u njegovom portfoliu)
[[Follow up call on estimation funnel]]

## Current tasks ✔
- wait time is doubled when using search

- [x] measure performance locally
- [x] commit search changes and deploy to **dev**
- [ ] test performance on **dev**
---

Deployment is on...

## ideas
- make the algorithms for finding the call data `strategies`
	- then organize them in a `chain of responsibility`
		- each `strategy` should inform the `Context` if it will process the command or be able to return a valid result
		- if this is not the case, the next `strategy` should be invoked
- maybe using a direct db query instead of the search would be more optimal
 `/home/vsedlar/dev/projects/MeilleursAgents/MALegacy/share/class.user.inc::670`
```php
public static function get_user_from_comm($user_type, $comm_type, $value)
// new method
public static function get_user_from_phone($user_type, $phone): ?\user
```

### use direct query

==this is working great and the performance is much better==

- added new method to the user class itself(`static` method)
	- find by ☎ - `get_user_from_phone`
- modify diabolocom call class to use it(`static` method)
