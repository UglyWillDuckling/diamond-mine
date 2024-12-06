---
~
---
[[where the confirmed listings are printed]]

## context



## description
Implement the qsl listing frontend display. The listings should be displayed in the [[project]]'s header **only**.
 At least for now.
The listings need to be grouped by the [[realtor]] as are the existing listings.

### <mark style="background: #FFF3A3A6;">requirements</mark>
- only ==active== listings should be shown
- all [[QSL listing]]'s should have a button indicating their [[online status]]
## <mark style="background: #BBFABBA6;">accept</mark>

---
## note
`share/ui.project.inc`#ln-682
method: `project_contract_header`

- the new listings will need to be rendered differently

---

## work

### notes

- header contains the listings grouped by **id**
	- it also contains the [[realtor]]'s
- ..

**project** to work with:
id: 2081050317
link: https://backyard-dev.meilleursagents.tech/contacts/6254262/projects/2081050317/

### smaller tasks
- [ ]  develop a way to retrieve listings `filtered` by [[project]], maybe by [[realtor]]
- [ ] ..