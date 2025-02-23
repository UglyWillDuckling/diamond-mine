---
tags:
  - task
  - active
related:
  - "[[mail server]]"
  - "[[Postfix]]"
  - "[[SSL]]"
part of:
  - "[[Setup hosting]]"
---
## definition of done
- mair sending is working
- receiving mail is working
- multiple mailboxes are setup and working 📧
- ~ sending to [[Gmail]] works
- connecting with local [[GUI]] apps
## notes 📔
- you can use online tools to help detect DNS changes
	- https://mxtoolbox.com/SuperTool.aspx
## todo’s
- [x] install mail server program - [[Postfix]]
- [x] configure mail server
- [x] ! configure [[SSL]]
- [x] setup multiple `mailboxes`
- [x] [[#connect with local mail client]] #task ✅ 2025-01-04
    - [x] ! connect with other [[email client]]s #task ✅ 2025-01-04
- [x] try out sending emails to [[Gmail]]
- [ ] write down all the steps  to repeat this ✍
## status
- mails are now signed with the [[Atlas/Knowledge/Knowledge/concepts/SSL certificate]]([[TLS]])
- ..
---
## work
### install mail server
[[Postfix]], [[postfix config steps]]

### configure mail server
[[Install and configure Postfix]]
new: [[How To Set Up a Postfix E-Mail Server with Dovecot]]
#### artifacts
[[trial postfix config file]]
[[dovecot trial configs]]
[[how to setup email on unix]]

- [x] follow [[Install and configure Postfix]]
- [x] read [[How To Set Up a Postfix E-Mail Server with Dovecot]]
- [/] #task write [[how to setup email on unix]] 🆔 9fUocW ⏳ 2025-01-26
### add mailboxes
- [x] add user vlado
- [x] test mail
### connect with local mail client
[[Mailspring]]
- [x] try to connect
- [x] use a <mark style="background: #FFB8EBA6;">secure</mark> connection
- [/] use **multiple** clients
#### configuring dovecot
[[dovecot trial configs]]
### postfix config
[[postfix config steps]]
[[trial postfix config file]]
[[How To Set Up a Postfix E-Mail Server with Dovecot]]
## now
- [x] create senka@techdot.biz account |  ✅ 2025-02-14/21:37 
- [/] @ create more folders in [[Dovecot]]
- [x] ! reinstall [[Postfix]]
- [x] ! add [[+/SPF]] record
	[[What Is the SPF Record for Hostinger Email  Hostinger Help Center]]
- [/] investigate relationship between [[+/SPF]], [[+/DKIM]] and [[DMARC]]
	- [[What are DMARC, DKIM, and SPF]]
		- [[What are DMARC, DKIM, and SPF#How to check if an email has passed]]
- [x] fix issue with emails ending up in [[+/spam]] folder
- [x] #task store configs ✅ 2025-01-05
	- [ ] store [[Postfix]] config
	- [ ] store [[Dovecot]] config
- [x] #task create dovecot folder ✅ 2025-01-04

**postfix config**
```bash
	myhostname = mail.techdot.biz
	myorigin = /etc/mailname
	mydestination = mail.techdot.biz, techdot.biz, localhost, localhost.localdomain
	relayhost =
	mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128
	mailbox_size_limit = 0
	recipient_delimiter = +
	inet_interfaces = all
	
	alias_maps = hash:/etc/aliases
	alias_database = hash:/etc/aliases
	
	smtpd_tls_cert_file= /etc/ssl/certs/mailcert.pem
	smtpd_tls_key_file= /etc/ssl/private/mail.key
	smtpd_use_tls=yes
	smtpd_tls_session_cache_database = btree:${data_directory}/smtpd_scache
	smtp_tls_session_cache_database = btree:${data_directory}/smtp_scache
	smtpd_tls_security_level=may
	smtpd_tls_protocols = !SSLv2, !SSLv3
    
    local_recipient_maps = proxy:unix:passwd.byname $alias_maps
    smtpd_helo_required = yes
    compatibility_level = 3.6
    
    smtp_tls_CApath = /etc/ssl/certs
```
### add spf record
[[DNS record]] [[+/SPF]], [[+/DKIM]]
[[spf techdot.biz record]] for [[my VPS - techdot.biz]]
### fix spam
you can use `postconf -n` to see [[Postfix]]
[[Postfix encrypt email - How we enable this and fix the related errors]]

[[Atlas/Knowledge/Knowledge/Articles/Postfix + Gmail. Certificate verification failed]]
**error**
 `certificate verification failed for alt1.gmail-smtp-in.l.google.com`
solution:
    Had to set `smtp_tls_CApath = /etc/ssl/certs

> [!check] TLS
> The mail now has a TLS signature

### dovecot folders
[[Dovecot: autocreate plugin is deprecated, use mailbox { auto } setting]]

## persona ssl
- [x] #task setup person.hr [[Atlas/Knowledge/Knowledge/concepts/SSL certificate]] ✅ 2025-01-07
	- [x] #task check cert from backup ✅ 2025-01-06
	- [x] #task user cert for mails ✅ 2025-01-07
### use old cert
> [[Mail Config]]
- [x] find the cert
- [x] copy to server
	- [x] move to `/etc/ssl/*` dirs
- [x] use for mail |  ✅ 2025-02-14/21:37 
	- [x] postfix
	- [x] dovecot
	- [x] postfix
	- [x] dovecot