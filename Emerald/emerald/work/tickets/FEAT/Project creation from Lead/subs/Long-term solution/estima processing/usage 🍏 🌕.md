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

# files / UI logic

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

We could use the lead and the estima at the same time to check whether an `estima_processing` entity exists, in other words, if a [[lead project]] was created from the given [[estima]] or [[lead]].
We could even leave the **same logic as is** and only use the `estima_id` DB field for both entities keys since the `lead_id` is so far ahead of `estima_id`, see [[check that lead id is ahead of estima id]].

## todo's after ✔
- [x] create an **activity diagram** to show the two possible ways to fetch an [[estima_processing]] entity and
	- [ ] verify if the [[estima]] or [[lead]] have been `processed` - [diagram](https://www.mermaidchart.com/app/projects/c0dfe25c-1b2a-42c9-9b77-260bc9119ec7/diagrams/36b32686-3f3c-4e48-b804-226ff894eec0/version/v0.1/edit)
- [ ] update the `codebase` to support **both** `flows`
	- [x] create methods to use both lead and estima
	- [ ] " test `methods`
	- [ ] update the codebase to use the new `methods`

### method testing 🧪
[contact local](http://localhost:8001/contacts/6562017)

#### checklist ☑
- [ ] " test **methods**
	- [ ] create project based on [[lead]]
		- [ ] enforce the usage of `lead_id`
		- [ ] check that the `lead` is marked as `read`
	- [ ] create [[lead project]] based on [[estima]]
		- [ ] check that the `estima` is marked as `read`

**lead testing**
**ID**:  
16 sep. 

`query param`: **use_lead**
