---
related:
  - "[[AWS connection]]"
  - "[[frontend implementation]]"
  - "[[QSL listing]]"
---
```tasks
 not done
 path includes {{query.file.folder}}
 short mode
 show tree
```

## done ✔
- [x] #task [[research how to add a cronjob]] ⏫ ✅ 2025-01-06
- [x] #task [[Online status update]] ⏫ ✅ 2025-01-06
- [>] #task update table docs - missing `columns` 🔽 🆔 eRZtkg
- [x] #task **QSL** ⏫ 🛫 2024-10-11 ⏳ 2024-11-06 📅 2024-11-12 ✅ 2024-11-20
	- [x] start creating the **DB** [[Create DB table]] ✅ 2025-11-01 
	- [x] [[build the interface]] 🔼 ✅ 2024-11-04
	- [x] #task [[build the model]] 🎴 ⏫ 🛫 2024-11-04 📅 2024-11-07 ✅ 2024-11-08
	- [x] #task refactor tests ✅ 2024-11-12
		- [x] move `rendering`
	- [x] #task [[#end date test]] ✅ 2024-11-12
	- [x] #task add rendering test for the new listing 📅 2024-11-07
	- [x] add missing columns #task 📅 2024-11-08 ✅ 2024-11-08
	- [x] URL generation [[how to create links for Se Loger]] #task ✅ 2024-12-04
	- [x] update schema #task with nullables ✅ 2024-11-14
- [x] #task fix issue with docker-compose ✅ 2024-11-08
	- [[make test not working]]
- [x] [[table docs]] #task 📅 2024-11-07 ✅ 2024-11-06
- [x] #task [[study CSV export]] 📅 2024-11-13 ✅ 2024-12-06
	- [x] add new columns #task ✅ 2024-11-13
	- [x] update existing logic, tests #task ✅ 2024-11-13
	- [x] #task [[check the diagram from [[Paulo]]]] 🔽 ✅ 2025-01-17
- [x] see 🙈 if we could use the [[project]] as the source for the [[place]] entity
- [x] support for `optional` fields #task 📅 2024-11-14 ✅ 2024-11-20
	- [x] #task update constructor and creation ✅ 2024-11-14
	- [x] #task update relevant methods ✅ 2024-11-14
		- 'i try to use data that is **always there**
- [x] 't update tests with correct values from DB #task ✅ 2024-11-26
	- data needs to match with **actual** entities
	- the entities should also be **linked** properly
- [x] #task add back `start_date` ⏫ ✅ 2024-11-27
- [x] #task [[CSV import]] ⏫ ✅ 2024-12-02
- [x] #task [[create real table]] ✅ 2024-12-02
- [x] #task [[frontend implementation]]
- [x] #task [[CSV QSL Export Feature]] ✅ 2025-01-17
- [x] #task send [[Natasa]] images of [[QSL listing]] ⏫ ✅ 2025-01-16
- [x] #task write [[test script for AWS connection on backyard]] to verify [[AWS]] connection ⏫

---
## *active*

[[AWS connection]] [[AWS import]]

- [x] #task apply  python` fix to **prod** on [[ma-infra]] ⏫ 📅 2025-01-24 🆔 ixD96M ✅ 2025-01-28
- [x] #task [[cronjob test]] 🆔 y7tDlU ⏫ 📅 2025-01-20 ✅ 2025-01-21
- [x] #task make a **PR** for dev 🆔 cHk56r ⛔ WNbW5S ⏫ 📅 2025-01-23 ✅ 2025-01-23

- [x] #task *deploy and test* [[AWS import]] 🆔 YD2vvB ⏫ ⏳ 2025-01-24 📅 2025-01-29 ✅ 2025-01-29
	- [x] #task [[qsl dev aws import test]] ⏫ ⏳ 2025-01-28 📅 2025-01-28 🆔 Rh81AG ✅ 2025-01-28
	- [x] #task **implement** [[aws import fixes]] 🆔 nzQSnw ⏫ 📅 2025-01-28 ✅ 2025-01-29
	- [x] #task make **test** on dev with the **big** `dataset` 🆔 pOGR5Y ⏫ ⏳ 2025-01-29 📅 2025-01-29 ✅ 2025-01-29A
- [x] #task #fix [[missing icon]] 🆔 gl4dL9 ⏫ ⏳ 2025-01-30 📅 2025-01-31 ✅ 2025-01-30
- [/] #task **wait** for [[Frederic Dalessandro]] to finish security #wait ⏫ 🆔 jXzU9o

**Later**
 - [ ] #task create [[GCP connection doc]] 🔽 🆔 FllC8n
 - [ ] #task cleanup tests 🆔 QdOsoU 🔽

Test locally
http://localhost:8001/contacts/7008421/projects/2081042895