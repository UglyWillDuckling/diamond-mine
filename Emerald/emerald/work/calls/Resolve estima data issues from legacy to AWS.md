---
scheduled: 2025-04-22-11-03
about: []
---
#call/work

## who
- [[Vincent Dibiaggio]]
- [[Kristijan Rebrovic]]
- [[Teo Balen]]
- [[Yoan Haouzi]]
- me
## agenda

discuss the issue on the [[Big query]].

## fun notes 📔
- possible for multiple people to share their screens at once
- [[Big query]] allows direct queries

---
## 🗒notes
- [[Big query]]
- Estimas
- missing 68% of estimas, **all** [[Meilurs Agent]] estimasA
- [[Airflow]]
## discussion 🗨

- [x] [[Yoan Haouzi]]: data is coming from 2 different sources
	- AWS
	- legacy
	- [x] good new is?
		- we can focus on just using the legacy system since we copy the lead data into the legacy table
		- it should be possible to consume data from the legacy tables **only**

	- [x] [[Teo Balen]]: change in the data processing?
		- [x] not sure if this will be **approved**
		- [x] is it a bug fix, maintenance?
			- [x] [[Vincent Dibiaggio]]: should be fixed asap(coming from higher up)
	- [?] [[Kristijan Rebrovic]] what is the change
		- [x] [[Vincent Dibiaggio]]: we need full coverage
	- [?] [[Kristijan Rebrovic]]: need some information from [[Vladimir Sedlar]]
	- [x] [[Vincent Dibiaggio]] the connection is broken in the `projects` table
		- the connection is broken with the estima
	- [ ] [[Kristijan Rebrovic]]: we are taking data from `biz_lead` and dumping them
		- [?] could be an issue that not all estimas are taken from the users
			- [x] [[Yoan Haouzi]] shouldn't be an issue
			- [x] [[Kristijan Rebrovic]] then I will need db access
	- [?] [[Yoan Haouzi]]: we can see **ID's** coming from the ==new== table, not sure where this is coming form?
		- [x] [[Kristijan Rebrovic]] we are dumping **every** day
	- [x] [[Kristijan Rebrovic]]: I would need some access to the db
		- [x] will look into it

# resolution

Issue is with the connection between [[Big query]] and the legacy system, specifically the project information. The `estima_id` is not pulled in correctly but the data is all present in the legacy db.

- the big query is **actually** connected to the legacy db
