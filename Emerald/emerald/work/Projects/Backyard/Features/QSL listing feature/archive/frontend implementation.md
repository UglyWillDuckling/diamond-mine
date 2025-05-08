---
~
---
## <mark style="background: #FFB86CA6;">description</mark>

Implement the qsl listing frontend display. The listings should be displayed in the [[Real Estate Project]]'s header **only**.
 At least for now.
The listings need to be grouped by the [[realtor]] as are the existing listings.
## <mark style="background: #BBFABBA6;">accept</mark>

- qsl listings are <mark style="background: #FFB8EBA6;">displayed</mark>
	- [[online status]], link
## note 📔
`share/ui.project.inc`#ln-682
method: `project_contract_header`
- the new listings will need to be rendered differently
[[where the confirmed listings are printed]]
---
## work

### 🗒
- header contains the listings grouped by **id**
	- it also contains the [[realtor]]'s

**project** to work with:
 id: 2081050317
 link: https://backyard-dev.meilleursagents.tech/contacts/6254262/projects/2081050317/

### smaller tasks
- [x] #task update code to include [[QSL listing]]'s in the header ✅ 2024-12-09
- [x] #task 👁 with multiple [[QSL listing]]'s on a single [[realtor]] | agency ✅ 2025-01-07
- [x] #task [[#write a test for fetching and printing the listing]] 🆔 auEPL7 ✅ 2025-04-14

### update header
==include qsl listings==
'qsl_listings'

### add fetch by realtor/project method
- [x] test in the real world
- [x] update code that updates header info
	- [x] main update
	- [x] see about the if statement first part in `share/class.contract.inc::2630`
### write a test for fetching and printing the listing
- [x] write the `render logic`
- [ ] add [[test expecation|expectation]]s to the test
