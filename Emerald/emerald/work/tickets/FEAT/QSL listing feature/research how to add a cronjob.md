#research #cronjob 
[[cronjob]]

- [x] research 
	- [x] check the infra repo
	- [x] check [[Backyard Tasks app]] app
- [x] #task test out error mail 📧 ⏫ 📅 2024-12-04 ✅ 2024-12-04

## research 🔬

### backyard tasks research
- [x] open [[ma-infra]] repo
- [/] see how to add a new job
	- [/] edit file
	- [ ] make actual changes

#### add shell script
- [x] check error handling
	- [x] online status
	- [x] import, missing file
- [x] `remove` `error handling` from the online status update

- $ if the file is not found the script will abort
	- it should be possible to sent an `email` in that case 📧
- $ it is possible to add error handling in case the saving fails
	- ? should we
		- @ probably not
#### add cron
- [/] add entry
	- [/] add cron schedule
	- [ ] map to script

```yml
    cron:
      # QSL Listing
      - schedule: "0 3 * * *"
        workdir: "/srv/malegacy/current/"
        command: "./backyard/tools/diabolocom/diabolocom_update_adr.sh"
        mail_subject: "QSL error - update listing"
        mail_recipients: "hermes-it@meilleursagents.com"
        comment: "QSL Listing Update"
```
