
### notes
**Appel type entrant**

'status_detail'
'conversation' type is the one we want

**sql**
- query filters by username
	- pbx_extension field on users `hdata`
* filtering also by time range
	* filed `date`
		* upper and lower bounds

`diabolocom_adr` model
```php
public const SCHEMA = 'diabolocom';
public const DATABASE = 'backyard';
```

**status_detail** list

 * login
 * campaign_dialing
 * intercall
 * pause
 * inbound_call_missed
 * free_call_missed
 * free_number_offered
 * preview
 * logout
 * away
 * conversation
 * inbound_call_offered
 * available
 * wrapup
 * outbound_call_offered
 * outbound_call_missed
 * free_number_dialing

**list of statuses to be used for duree calculation**
- [ ] conversation
		how long was the person in a call
- [ ] ???


## Current!

- there are **two** tables tracking the call information
	- adr
	- call
- they seem to be out of sync

==sql filter query==

```sql
user_name='mwafir' and date >= '2025-05-14' and date <= '2024-05-14 23:59:59'
```

- the duration is in **seconds**
- the type of call is likely tracked with the **channel** field

**current call** 📞
id: 6472069

|     |                       |                            |
| --- | :-------------------- | :------------------------- |
|     | **id**                | 6472069                    |
|     | **created**           | 2024-05-14 15:37:11.000000 |
|     | **version**           | 2024-05-14 15:51:10.000000 |
|     | **created\_by**       | null                       |
|     | **version\_by**       | null                       |
|     | **enabled**           | true                       |
|     | **call\_id**          | 44410016                   |
|     | **channel**           | inbound                    |
|     | **started\_at**       | 2024-05-14 13:37:11.768000 |
|     | **finished\_at**      | 2024-05-14 13:51:07.274000 |
|     | **duration**          | null                       |
|     | **dialing\_duration** | 0                          |
|     | **ivr\_duration**     | null                       |
|     | **wait\_duration**    | null                       |
|     | **talk\_duration**    | 835                        |
|     | **hold\_duration**    | null                       |
|     |                       |                            |
|     | **wrapup\_duration**  | 3                          |
|     | **contact\_phone**    | +33627023250               |
|     | **agents\_id**        | 37847                      |
|     | **agents\_name**      | mwafir                     |
|     | **wrapups\_id**       | 13716                      |
|     | **wrapups\_name**     | Propriétaire               |
|     | **bi\_id**            |                            |

<mark style="background: #FF5582A6;">The two table are most likely out of sync in temporal terms
Their timstamp don't match up, probably due to timezones</mark>
- the difference is 2 hours
- conversation's from `adr` are most likely the calls form `call`

adr id: 33073032

The inbound calls do seem to be taken into account when the calculations are made...

==Needs further investigation==