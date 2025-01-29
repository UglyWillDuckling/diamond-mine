#ticket 

parent:: [[QSL listing feature]]

- [x] add **shell** script
- [x]  **missing** icon
- [x] **bad** call in import script for [[Athena class|Athena]]
- [x] remove typed id property on model

- [x] #task **deploy** fixes to dev #tiny 🆔 zZOeT9 ⏳ 2025-01-28 📅 2025-01-28 ✅ 2025-01-29
- [x] fix the path to php script
- [ ] #task #test missing icon after deployment 🧪 🆔 9C4Tg9
	- [ ] test other stuff
	- *might* require [[static app]] deployment
- [/] #task #test [[backyard-tasks]] `script` 🆔 Vx3msw
	- [x] adjust **path** to script
	- [/] check db table content
		- [x] check with PHPstorm
		- [x] check the import **result**
	- [ ] check info on ***FE***
- [ ] #task fix Athena **bad** query state 🆔 xmj03A

### db table **test**

only **10** items exist atm

> [!question] **logging**
> maybe we should add logging for the import??


> [!NOTEj] tasks issue
> could be related to backyard tasks **general** issue
>[slack](https://kugawana.slack.com/archives/C033EHCJQCQ/p1738146083427309?thread_ts=1738072526.663619&cid=C033EHCJQCQ)

### **bad** `query state`
we sometimes get the error that the query is in a wrong state..
- $ added another **sleep** to make sure the query state is ok