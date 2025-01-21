---
related:
  - "[[backyard-tasks]]"
  - "[[ma cron definition]]"
---
#artifact 
- [x] check existing code that it works
- [x] update **cron definition**
	- [x] commit -> PR
	- [x] ask for review on [[matolktosre channel]]
	- [x] deploy 🚀
- [x] check if the cron is working [[#test 🧪]]
- [x] update cron definition to log to a file
---
[[ma cron definition]]

### test 🧪
- $ cron is enabled
```c
*/5 9-20 * * MON-FRI meilleursagents cd /srv/malegacy/current/ && backyard/call_athena_with_token.sh  2>&1 | mail -E -s 'Athena test script' aviv-intermerdiary-luna@aviv-group.com
```

- [x] check [[backyard tasks cron definition]]
- [x] see inside the output **results** file
- [x] look at the logs
- [x] look at email 📧

- Cannot find the **generated file**
- ~ Cannot find anything in the logs

### update cron def
- [x] add **file logging**
- [x] check the logs on VM

- ! doesn't work, [[gcloud CLI]] throws an error -> missing `python`
