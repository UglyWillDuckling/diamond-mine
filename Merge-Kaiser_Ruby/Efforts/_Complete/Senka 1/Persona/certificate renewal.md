---
type: task
exampleProperty: 2025-01-06
ssl_start: 2025-01-06
ssl_end: 2025-04-06
status: in-progress
priority: normal
dateModified: 2026-04-27T00:15:13.450+02:00
tags:
  - archived
title: certificate renewal
---
#ticket 

Ticket to implement **certificate** **renewal** process on [[Efforts/_Complete/Senka 1/Persona/Docs/Persona.hr]]

- [x] #task [[Efforts/_Complete/Senka 1/Persona/certificate renewal]] 🆔 Htr8QL ⏫ ⏳ 2025-02-08 📅 2025-02-12 ✅ 2025-02-12
	- [x] check current **status** of the **ssl** **cert** [^1] on [[Efforts/_Complete/Senka 1/Persona/Docs/Persona.hr]]
	- [x] permanently save the new cert details
	- [x] #task Implement permanent solution, cronjob 🆔 nMfbCO 🔼 ⏳ 2025-02-13 📅 2025-02-16 ✅ 2025-02-15

### cert details

Issued January 6, 2025 `INPUT[datePicker:ssl_start]`
Expires April 6, 2025 `INPUT[datePicker:ssl_end]`

## renewal
- [x] think 🤔 what would happen if we update the cert manually
	- [x] what whould happen to the mail :LiMail:?
	- [x] would it also update that cert :LiKeyRound:? 
- [x] renew cert
- [x] **check** **expiry** of web cert
- [x] see how the mail ssl cert is setup

### notes

- `certbot renew` command works
	- `--force-renewal` flag will force the renewal
- [[certbot renew process]]
- mail certs were setup by copying the web certs
- **we can  wait** for the certs to expire to see if anything will happen :LiTimer:
### changes

- web cert was **renewed**
### artifacts

[[Efforts/_Complete/Senka 1/Persona/Docs/currrent persona ssl cert]]
[[Efforts/_Complete/Senka 1/Persona/persona ssl cronjob]] :LiPickaxe:

[^1]: [[Atlas/Knowledge/Knowledge/concepts/SSL certificate]]