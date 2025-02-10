---
related:
  - "[[cron]]"
  - "[[cronjob]]"
  - "[[ma-infra]]"
---
#artifact #cronjob #qsl 

- [x] #task **Add** real [[cronjob implementation]] for this #wait 🆔 OCGhML ⏫ ⏳ 2025-01-30 📅 2025-02-05 ✅ 2025-02-06
	- [x] add [[qsl cron definition]]
		- [x] make **PR**
	- [x] #task verify cron after deployment ⏫ 📅 2025-02-04
	- [x] #task redeploy with correct has 📅 2025-02-04
	- [x] #task check the cron again 🆔 Nedwws ⏫ 📅 2025-02-05 ✅ 2025-02-05
---
### definition

[ma-infra]]: `ansible/group_vars/fr_backyard_tasks/ma-cron.yml`
```yaml
  # QSL Listing
  - schedule: "0 * * * MON-SUN"
	workdir: "/srv/malegacy/current/"
	command: "./backyard/tools/listing/qsl_listing_update.sh"
	mail_subject: "QSL error - update listing"
	mail_recipients: "aviv-intermerdiary-luna@aviv-group.com"
	comment: "QSL Listing Update"
	logfile: "/home/meilleursagents/qsl_listing_update.log"
```
### verify cron on dev
`log`: /home/meilleursagents/qsl_listing_update.log

- ! check failed, will  need to redeploy tasks app

### verify cron again

**use** 
![[how to check(test) cron backyard-tasks]]

- [x] check if the cron is working after modifying to run every 15m
	- check at 15:00

> [!success] working