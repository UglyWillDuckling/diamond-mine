---
related:
  - "[[persona mail setup]]"
  - "[[Persona]]"
---
- [x] #task setup person.hr [[SSL certificate]] ✅ 2025-01-06
	- [x] #task check cert from backup ✅ 2025-01-06
### use old cert
> [[Mail Config]]
- [x] find the cert
- [x] copy to server
	- [x] move to `/etc/ssl/*` dirs
- [x] use for mail
	- [x] postfix
	- [x] dovecot

**ssl certificate isn't working**, will need to generate a new one. `Blocks` [[persona mail setup]]

- [x] #task generate new [[SSL certificate]] for [[Persona.hr]] ✅ 2025-01-06
	- [x] #task [[#setup Let's Encrypt on Persona]] ✅ 2025-01-06
	- [x] #task create [[SSL certificate]] ✅ 2025-01-06
		- [x] #task use the new cert for mail ✅ 2025-01-06

### setup [[Let's Encrypt]] on Persona
- [x] copy over the files from VPS or local
- [x] turn off current nginx
- [x] start new server
- [x] run a test 🧪

### create ssl cert
> using [[Let's Encrypt]]

[[Automating Ssl Renewal Certbot In A Docker Environment]]
```bash
docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d persona.hr
```

- [x] map the certs folder
- [x] copy the files to the `etc/ssl/` directories
- [x] #task use new ssl certs for mail ✅ 2025-01-06
	- [x] test mail connection
- [x] #task update file permissions
- [>] #task renew the certificate
#### mail connection test
1. Unable to access, wrong permission on the /home directories.
	1. $ fixed by changing permissions
2. Permission errors, need to add useres to the `mail` group
	1. $ added vlado to mail group ` adduser senka@techdot.biz mail`
