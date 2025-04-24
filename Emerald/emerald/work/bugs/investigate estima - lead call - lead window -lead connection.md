---
tags:
  - ticket
  - ticket/explore
calls:
  - "[[Resolve estima data issues from legacy to AWS]]"
status:
  - In Progress
---
**jira_ticket**:: https://avivgroup.atlassian.net/browse/NOVA-2213

**involved**::
	- [[Yoan Haouzi]]
	- [[Vincent Dibiaggio]]

> [!note] from comments
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

[[Star Trek Team]] will remove the `city_id` filter. This should give them 
**all** `project->estima` connections.
