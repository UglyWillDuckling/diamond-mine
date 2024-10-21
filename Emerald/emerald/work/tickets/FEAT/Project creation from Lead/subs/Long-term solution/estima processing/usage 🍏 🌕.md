# questions
1. where is it used?
2. what can we <mark style="background: #FFB86CA6;">ignore</mark>? 
 

---
# pages
- **contact** page - [example](http://localhost:8001/contacts/6562017)
	- `lead` listing
	- `estima` listing

## contact page 🛂

The contact page renders 2 lists, the estima and lead list.
The 2 lists are very similiar and share allot of the rendering logic behind the scenes.

# Code

## code elements/modules {}
- `backyard/contacts/components/estimas/_table.php`
- `backyard/contacts/components/leads/_table.php`
	- both of these are used for the `meta` pages too
- `ui.contacts class` - `backyard/contacts/ui.contacts.inc`
	- `::print_estimas_list`
	- `::print_leads_list`
****
<mark style="background: #FFF3A3A6;">The _table_ php files contain the exact same logic as the `ui.contacts` class</mark>
- `leads/_table.php` == `::print_leads_list`
- `estimas/_table.php` == `::print_estimas_list`
> [!WARNING ] Different functionality
> The functionality on the **UI** does however differ

### ui.contacts class

Used to print both the estima nad lead lists...
Contains logic for loading the `estima_processing` objects and uses them to check if ...

## logic

### logic for loading estimas

- **loaded** based on the `estima_id`(transaction_id)

### processing logic

The system checks to see if the `estima` or `lead` have been **processed** yet. At the moment both entities have the same check and rely on the `estima_id` for the evaluation.

## what I've learned

We could use the lead and the estima at the same time to check whether an `estima_processing` entity exists, in other words, if a [[project]] was created from the given [[estima]] or [[lead]].
We could even leave the **same logic as is** and only use the `estima_id` DB field for both entities keys since the `lead_id` is so far ahead of `estima_id`, see [[check that lead id is ahead of estima id]].

# todo's ✔
- [x] create an **activity diagram** to show the two possible ways to fetch an [[estima_processing]] entity and
	- [x] verify if the [[estima]] or [[lead]] have been `processed` - [diagram](https://www.mermaidchart.com/app/projects/c0dfe25c-1b2a-42c9-9b77-260bc9119ec7/diagrams/36b32686-3f3c-4e48-b804-226ff894eec0/version/v0.1/edit)
- [x] update the `codebase` to support **both** `flows`
	- [x] create methods to use both lead and estima
	- [x] " test `methods`
	- [x] update the `codebase` to use the new `methods`
- [x] update code to use `lead_id` if estima doesn't exist
- [x] check other `actions` on the page
- [x] see about implementing tests
- [x] **check** <mark style="background: #FFF3A3A6;">JS</mark> to make sure it is `compatible` with the <mark style="background: #FFB86CA6;">changes</mark>

### method testing 🧪
[contact local](http://localhost:8001/contacts/6562017)

- [x] " test **methods**
	- [x] create project based on [[lead]]
		- [x] **enforce** the usage of `lead_id`
		- [x] **check** that the `lead` is marked as `read`
	- [x] create [[project]] based on [[estima]]
		- [x] **check** that the `estima` is marked as `read`
- [x] **check** other pages to see if they match

**lead testing**
**ID**:  `2082675399`
`query param`: **lead_test**

- [x] use `lead_id` to create a [[project]]
- [x] check table to see the new item added
- [x] verify the **ID** - this should be the `estima_id` field
- [x] check that the [[lead]] is now marked as `processed`

**estima testing**
**ID**: `43899054`
- [x] use `estima_id`
- [x] check table to see the new item added
- [x] verify the **ID** - this should be the `estima_id` field

### update codebase {}

**lead tables**
- [x] update the rest of the `templates` 
	- [x] lead page table

**estima tables**
- [x] update `templates`
	- [x] contacts.ui::`print_estimas_list`
	- [x] backyard/contacts/components/estimas/_table.php

**cleanup**
- [x] remove test statements -NOTE
	- [x] `ui.contacts.inc`

### other actions check ☢
- [x] **checkbox** `mark_process` ☑
- [x] **button** `Non Propriétaire` ⏏

#### mark processed ☑
- makes the estima a `processed` one by creating a new [[estima_processing]] entity item
- ! this **doesn't work on dev** for [[lead]]'s
- $ **no** **work** is needed for now
#### button 'Non Propriétaire' ⏏
- @ creates a new `estima_processing` entity for each [[estima]]
	- this makes every [[estima]]  `processed`
- ! doesn't really work with [[lead]]'s
	- $ can **probably** be left alone for now as the situation is currently like this in production


