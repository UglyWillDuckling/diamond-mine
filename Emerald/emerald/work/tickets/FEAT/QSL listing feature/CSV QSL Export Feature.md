#task #work #work/task

## <mark style="background: #ABF7F7A6;">requirements</mark>

1. route should return a CSV file containing [[QSL listing]]s ✅
2. CSV should contain relevant fields ✅ see [[Daily Csv QSL Listing Export#fields]]
3. should be on a **separate** route
4. naming convetion `= [[Daily Csv QSL Listing Export]].naming_convetion`

---
## notes 📔
- uses  https://csv.thephpleague.com/9.0
- **artifact** [[Daily Csv QSL Listing Export]]

## ideas
- $ maybe the export itself could done as an object with more capabilities | [[capability]]
	- & it could perhaps have the output method on itself instead of returing the `Writer`
## ✔ tasks

%%  we should maybe  split the completed taskl%%
- [x] start with basic implementation
	- [x] develop the CSV generator first
	- [x] return a [[CSV]] file - have it contain everything to start with
- [x] make a list of fields that need to be included
- [x] #task develop **CSV** export 🆔 Z2OmXI 🔼 📅 2025-01-29 ✅ 2025-01-29
	- [x] main export
	- [x] #task add [[#export button]] 🔼 ⏳ 2025-01-29 📅 2025-01-29 🆔 uW6CLZ
	- [x] #task implement export CSV route 🆔 cmQtVf ⏫ 📅 2025-01-29 ✅ 2025-01-29
	- [/] adjust csv export name format 🆔 30ZWFm
- [ ] #task write #test for backyard csv export 🧪 🆔 QyBoz0 🔼 ⏳ 2025-01-30 📅 2025-01-30

### new **route**
- % should be under listings, qsl
- should just output the **CSV** file
### **export** button
[ticket LUNA-388](https://avivgroup.atlassian.net/browse/LUNA-388)
- [x] check naming

WHEN the user clicks on the clickable label “Annonces SL fiche quotidien”which can be seen on the page when he clicks on Mandats à signer..

page: **Mandats à signer**
**title**: `Annonces SL fiche quotidien`
[local test link](http://localhost:8001/projects/rev?status=0%26group_id&group_id=0&manager_id=0&subregion_id=0&salesman_in_id=0)

### export **content**

![[Daily Csv QSL Listing Export#fields]]

- [x] `implement`
- [x] send to [[Natasa]] and the team
- [x] commit  and **PR**
