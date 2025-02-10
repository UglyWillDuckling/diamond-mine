
#ticket 

- [/] #task **plan** out [[qsl production deployment|prod deployment]] ⏫ ⏳ 2025-02-10 📅 2025-02-10
	- [x] deployment
	- [x] testing
### the plan

1. ==deploy== [[backyard-tasks]] app
		1. **cron**: [[how to check(test) cron backyard-tasks]] 
			- [[how to steps to run the qsl import on tasks]]
			- cron should run every **15 minutes**
		2. **DB** entries look ok and are all accounted for
2. ==deploy== [[backyard]] 
	1. **test** the **FE**: CSV Export, button, [[#Project Header]] info
	2. **verify** the `online status` update script

## testing

### DB entries
- & there should be around **700** listings
### Project header 🤯

- Should **contain** the **seloger** icon
- The icon should give an accurate `online status`
- should **link** to the project on [[Se Loger]]
### Online status update script 📡

- & **should** run with the [[qsl cron]] 
- checks and updates the status of each [[QSL listing]] according to the its online availability

