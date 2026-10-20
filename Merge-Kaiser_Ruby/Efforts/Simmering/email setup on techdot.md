---
tags:
  - project
status: Backlog
---
related:: [[Efforts/_Complete/Senka 1/Persona/archive/archive/persona mail setup]]
uses:: [[second VPS]]

- [ ] #task Setup Email for [[Techdot.IO]] on [[second VPS]] 🆔 BNF5gz 🔼
	- [[email setup on techdot]]
	
### resources / related
- [[How To Set Up a Postfix E-Mail Server with Dovecot]]
- [[Efforts/_Complete/Senka 1/Persona/archive/archive/Setup hosting/setup mail server trial]]
### artifacts
[[how to setup email on unix]]
[[send a simple mail on unix]]

___

## **Prerequisites**
- [x] system update
- [x] read through the previous docs and tasks:
	- [[Efforts/_Complete/Senka 1/Persona/archive/archive/persona mail setup]] 
	- [[How To Set Up a Postfix E-Mail Server with Dovecot]]
- [x] find other relevant docs

## **tasks**

- [x] #task Setup Techdot mail  🆔 5u1PYy ✅ 2025-04-02
	- [x] install [[Postfix]] and [[dovecot]]
	- [x] install [[mailutils]]
	- [x] copy the [[Efforts/_Complete/Senka 1/Persona/Docs/Dev/Server/Mail Config]] from [[my VPS]]
	- [x] get [[SSL certificate]] for techdot.io
	- [x] copy `aliases` file
	- [x]  connect to **Techdot** mail 
	- [x] #task [[techdot docker email setup]] #docker 🆔 2jqQhk ✅ 2025-06-01

### store mail configs
1. copy over all the configuration files from [[my VPS]]
	1. postfix: /etc/postfix/{master.cf,main.cf}
	2. dovecot: /etc/dovecot.confA
2. store all the files **locally**
	1. 🤔 think about storing them **directly** in obsidian

### copy over the mail config files
`stored` at: /home/vlado/dev/docs/mail_setup

### generating the certs
> use [[Certbot]]

based on: [[How To Use Certbot to Retrieve Let's Encrypt SSL Certificates - DigitalOcean]]

```bash
certbot certonly --standalone -d techdot.io
```

### connecting the mail

try to **send** a mail

```sh
 echo 'Frfom Root Test email' | mail -s "Test" -r root@techdot.io
```

### how to test?
%% write down how to test here %%

https://www.claudiokuenzler.com/blog/1306/postfix-not-resolving-mx-host-domain-not-found-dns-server-change

### postifix fixes

1. failed to resolve DNS
	Hand to copy over the resolv.conf file to ``

2. timeout - in progress
[[Postfix - ArchWiki]]
