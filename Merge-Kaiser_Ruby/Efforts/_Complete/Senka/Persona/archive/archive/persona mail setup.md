---
related:
  - "[[persona ssl setup]]"
status: doesn't work due to
previewLink:
---

- [x] #task Setup Persona mail ✅ 2025-01-07
	- [x] #task copy the [[Mail Config]] ✅ 2025-01-05
		- [x] [[Postfix]]
		- [x] [[Dovecot]]
	- [x] copy `aliases` file
	- [x] #task connect to **Persona** mail ✅ 2025-01-06
	- [x] #task migrate mail `folders` ✅ 2025-01-06
	- [x] #task connect to Persona mail ⏫ ✅ 2025-01-07
___
### connect to persona mail
[[Persona VPS]]
doesn't work due to **ssl error** [[persona ssl setup]]
### migrate mail folders
- $ migrated
	- cur
	- archive
	- sent
	- drafts
- [x] kopiraj foldere i otpakiraj

```bash
	tar -xzf ./*tar.gz  --directory=where/to
```

### connect to senka mail 📧
[[Persona VPS]]
<mark style="background: #FFB8EBA6;">📔 try to always switch to the user who has the ownership of the files</mark>

- [x] #task connect to senka the account via mail client
	- [x] #task #test mail sending ✅ 2025-01-06
	- [x] #task #test mail receiving ✅ 2025-01-06

#### **receiving** mail
error: cannot resolve name
✅ needed to run [[newaliases command]]

error: `cannot update mailbox /var/mail/vlado for user vlado. cannot open file: Is a directory)`

[[Postfix]] needs to use `maildir` as the mail format. I think 🤔

Had to set
```bash
home_mailbox = mail/
```
> this puts the  new mails into the `mail` folder under the `home` folder

**Receiving still not working**
mails go to `new` folder in `mail`
Dovecot/Nautilus

- [x] check if any **synchronization** is working
	- $ syncing is working for the rest

```
mail_location = maildir:~/mail
```
✅ works

**Next error**
Directories contain directory separators

### fix dovecot folder structure

> [!success] Working
> This is working 🧀 🧁 🎆

📔<mark style="background: #FFB86CA6;">all we had to do was to remove the . from the folder name in</mark>  [[Mail Config#Dovecot]]

- [x] #task fix [[Dovecot]] folder structure again ⏫ ✅ 2025-01-07
	- dot issue(.)
	- [x] match the directories between monkey and senka
	- [x] #task try this out with senka's account ✅ 2025-01-07
	- [x] #task [[#try other clients]] ✅ 2025-01-07

### try other clients
- [x] [[Mailspring]]
- [x] [[Nautilus mail]]

[[solution to update mail certs on Persona]]