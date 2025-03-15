## prepare for migration
> continues from [[setup mail server trial]]

- [x] #task prepare for migration ✅ 2025-01-07
	- [x] #task mail configs
	- [x] #task [[#mail migration trial]] ✅ 2025-01-05
	- [x] #task plan migration steps ✅ 2025-01-07

### mail configs
> based on [[setup mail server trial]]

stored at [[Mail Config]]

### mail migration trial
[[Migrating mailboxes — Dovecot documentation]]
- [x] investigate the migration **online**
- [x] make the **migration** using [[Senka]]s `backup`
### plan migration
- [ ] #task ✏ write a [[migration plan]] in the end 🆔 lW2Ako
- [x] ! check folder structure: `/home/user/mail/`
- [x] check default folders
- [x] #task try a basic migration ✅ 2025-01-05
#### basic migration
> [[Migrating mailboxes — Dovecot documentation]]

- & once done, all mail accounts should be checked to make sure they work 
- [x] login as Senka via email client
- [x] match the directory structure
- [x] copy over all the files from the backup
- [x] **examine** the mail format
- [x] #task switch mail format to `maildir`
	- [x] update **new** [[Mail Config]]
	
- @ managed to get the connection via Senka accocunt
	-  senka@techdot.biz

📧
> [!NOTE] Mailbox Formats
> Looks like we might have a difference in the mail format configuration
> We should go from mbox to maildir

[[migrating emails from old server to new server answer]]
[[Mailbox Formats — Dovecot documentation]]

✅**Switching** the mail format to `maildir` [[Mailbox Formats — Dovecot documentation]]
	Update [[Mail Config]]
