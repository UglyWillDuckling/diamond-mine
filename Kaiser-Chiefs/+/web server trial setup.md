---
~
---
#ticket #active 

# notes
- a [[cronjob]] is needed to renew certificates with [[Let's Encrypt]]
	- TTL is 3 months
- I did this kind of setup already, on the [[Elk Project]]
- …
# tasks 
- [ ] [[#SSL certificate setup]]
---
## [[SSL certificate]] setup
related: [[Configuring self-signed SSL certificates for local development]]
- [x] check for guides on the [[web]]
### start using ssl on the webserver
[[Nginx Beginner’s Guide]]
[[nginx setup steps for static site]]

- [/] setup [[#real ssl cert]]
- [ ] #task [[write down how to setup local ssl certificate]] 🆔 MkV3XO 🔼 ⏳ 2025-02-08 📅 2025-02-08

### real ssl cert
- [x] check the basic wordpress installation [[Let's Encrypt]]
- [x] check online
- [x] ask AI
- [x] investigate [[Let's Encrypt]] automatic setup
- [x] try to implement [[Let's Encrypt]] `locally` via [[docker]]
- [x] implement [[Let's Encrypt]] on [[my VPS]]
- [x] combine [[Let's Encrypt]] with a simple static site
- [ ] #task implement a [[cronjob]] for the certificate <mark style="background: #FFF3A3A6;">renewal</mark> 🆔 AgeYMR 🔼 ⏳ 2025-01-26
- [/] #task write web server setup documentation #docs 🆔 yEcJuz

#### implement on [[my VPS]]
 [[How to Set Up letsencrypt with Nginx on Docker]]

[[lets encrypt requests]]

#### combine LetsEncrypt with a static site
- [x] implement locally
- [/] do it on the VPS
