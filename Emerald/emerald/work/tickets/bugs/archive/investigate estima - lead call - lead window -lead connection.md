---
tags:
  - ticket
  - ticket/explore
calls:
  - "[[Resolve estima data issues from legacy to AWS]]"
status:
  - finished 🏁
---
**jira_ticket**:: https://avivgroup.atlassian.net/browse/NOVA-2213

**involved**::
	- [[Yoan Haouzi]]
	- [[Vincent Dibiaggio]]

> [!note]+ from comments
> 2. Yes, the [[WLEF]] last **August** deleted any visibility on **MA estimations**. but what kind of estimations are you storing in biz_lead table ? all of them or only the legacy ones ?
> If you store all of them, isn’t there a way to **recreate** a link between the estima → lead_period → project ? because it’s all stored in BackYard.
> Even if it’s hard to do, would it be possible ?
> Thanks

___

Link between **estima** -> **lead_period** -> **project**

# options

1. use data **inside** the **`lead`**: `display_data`
2. use the `origin_estima_id` as the source

## use data from `lead`

**lead** contains `display_data`. This **should** have the `estima` it was connected to.

1. explore usage of `display data` in the codebase
2. examine what the data contains
	1. check if it has the required info
	2. check to see if the info is **always** there
3. report back to [[Vincent Dibiaggio]]

> [!warning] Nope
> this won't work. The display data isn't all that relevant.

## origin `estima id`

this can either be a link to a `lead` **or** an `estima`

# status

[[Spark Trek Team]] will remove the `city_id` filter. This should give them  **all** `project->estima` connections.

## tracking `iris_id`

| item_id    | iris_id   |
| ---------- | --------- |
| 2081126936 | 135660193 |

- [x] find iris_id
- [x] check addresses: backyard and 
	- [x] find out where the address comes from on BY
	- [x] find the iris entity
	- [x] compare the `iris` and the `item` address

**Address** on BY: 95 Route de Montrabé, 31180 Rouffiac-Tolosan

- all elements of the address on the BY are coming from the `biz_item` [^1] entity
	- it is unclear how the `iris` and the `item` are connected
- `iris_id` is essentially the `geo_place2.id` [^2]

zip: 31180



[^1]: [[biz_item]]
[^2]: [[geo_place2 table]]