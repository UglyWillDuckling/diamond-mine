---
~
---
## <mark style="background: #ADCCFFA6;">context</mark>
> missing

## description
Implement the qsl listing frontend display. The listings should be displayed in the [[project]]'s header **only**.
 At least for now.
The listings need to be grouped by the [[realtor]] as are the existing listings.

### <mark style="background: #FFF3A3A6;">requirements</mark>
- only ==active== listings should be shown
- all [[QSL listing]]'s should have a button indicating their [[online status]]
## <mark style="background: #BBFABBA6;">accept</mark>

- qsl listings are displayed
	- [[online status]]
	- `linked`
## note
`share/ui.project.inc`#ln-682
method: `project_contract_header`
- the new listings will need to be rendered differently
[[where the confirmed listings are printed]]
---
## work

### 🗒
- header contains the listings grouped by **id**
	- it also contains the [[realtor]]'s
- ..

**project** to work with:
id: 2081050317
link: https://backyard-dev.meilleursagents.tech/contacts/6254262/projects/2081050317/

### smaller tasks
- [/]  develop a way to retrieve listings `filtered` by [[project]], maybe by [[realtor]]
- [x] refactor the printing in order to simplify the implementation
- [x] #task update code to include [[QSL listing]]'s in the header ✅ 2024-12-09
	- [x] #task add a way of fetching project related listings

### printing 🖨
- [x] split the printing of listing
- [x] qsl listing print
	- [x] fake the data
	- [x] make it pretty

### update header
==include qsl listings==
'qsl_listings'

- [x] make a `test` for this

### add fetch by realtor/project method
- [x] test in the real world
- [/] update code that updates header info
	- [x] main update
	- [/] see about the if statement first part in `share/class.contract.inc::2630`

