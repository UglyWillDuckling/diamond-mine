
## steps
1. go to [[ma-infra]]
2. open ansible/group_vars/fr_backyard_tasks/ma-cron.yml
3. add new entry to the cron section

### new entry
==add another schedule entry==

```yml
 # QSL Listing
	- cron
      - schedule: "20-59/15 9 * * MON-SAT"
        workdir: "/srv/malegacy/current/"
        command: "./backyard/tools/diabolocom/diabolocom_update_adr.sh"
        mail_subject: "QSL error - update listing"
        mail_recipients: "hermes-it@meilleursagents.com"
        comment: "QSL Listing Update"
```
