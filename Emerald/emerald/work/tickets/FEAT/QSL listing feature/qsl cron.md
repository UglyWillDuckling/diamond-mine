#feature/cronjob

developed_in:: [[QSL listing feature]]
### *notes*

- [[#definition]] is stored/located in [[ma-infra]] repo

### description

The purpose of this cronjob is to automaticaly run the [[QSL listing]] updates. These primarily include fetching new listings and updating existing ones via [[#qsl import script]].
Additionally, it runs the [[#qsl online status update script]].

**2** scripts are being run sequentially:
- [[#qsl import script]]
- [[#qsl online status update script]]

### definition

[ma-infra]]:  `ansible/group_vars/fr_backyard_tasks/ma-cron.yml`

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

#### qsl import script
%% could be moved to a separate note %%

####  qsl online status update script
%% could be moved to a separate note %%
