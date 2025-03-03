#solution-implementation #implementation/cronjob

related:: [[certbot renew process]]

## DOD
- cron should run **once**(1) a week
- all changes ==must== be **logged**
- no manual interventation should happen
___
## do

- @ maybe better to create a **script** for this
- -i it would be better to use a **git repo** for storing the entire project 
	- good practice for the real project too

- [x] build the [[#script]]
- [x] make the [[#schedule]]
	- [x] set the time
	- [x] call the script
	- [x] test the call
- [x] setup cron
	- [x] **install**/add cron
	- [x] test cron
- [x] schedule the **test** 🧪 of the the next cron run
	- @ [[2025-02-17]]

## result
### script

`cron/cert_renew.sh`
```bash
#!/usr/bin/bash
set -e -o pipefail # fail on error, don't hide errors
docker compose run --rm certbot renew --force-renewal
```

### schedule
- should run **once per week**
-  next at 2025-02-17 01:20:00
	- [ ] remind me Persona ssl cert cron (@2025-03-03 23:09)
#### solution

```c
#min,h,doM,mon,doW
# once a week on Monday at 01:20
20 1 * * 1 cd /root/letsencrypt/ && ./renew_cert.sh 2>&1 > renew.log
```

#### testing
```c
# every 5 minutes
*/5 * * * * cd /root/letsencrypt/ && ./renew_cert.sh 2>&1 > renew.log
```
