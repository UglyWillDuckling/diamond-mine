#doc #cronjob #cron

> [!NOTE] can be found at `/etc/cron.d/malegacy`

```bash
# CRON Entries  
# Run MALegacy async jobs  
  
* * * * * meilleursagents cd /srv/malegacy/current/ && php -f backyard/admin/jobs/run.php > /home/meilleursagents/backyard_jobs_run.log 2>&1 | mail -E -s '[dev] Jobs errors - backyard tasks' geeks@meilleursagents.com # Send SMS no  
tifications to realtors  
  
*/5 8-20 * * MON-SAT meilleursagents cd /srv/malegacy/current/ && php -f backyard/admin/jobs/job.event_realtor_contact_sms.php 5 > /home/meilleursagents/job_event_realtor_contact_sms-info.log 2>&1 | mail -E -s '[dev] Calls SMS not  
ification job error' geeks@meilleursagents.com # Sanity checks  
  
30 8-20 * * * meilleursagents cd /srv/malegacy/current/ && php -f backyard/admin/monitoring/corejob-info.php > /home/meilleursagents/corejob-info.log 2>&1 | mail -E -s '[dev] Suspicious long-running jobs' geeks@meilleursagents.com  
# Diabolocom update address  
  
20-59/15 9 * * MON-SAT meilleursagents cd /srv/malegacy/current/ && ./backyard/tools/diabolocom/diabolocom_update_adr.sh  2>&1 | mail -E -s 'Diabolocom error - update adr' hermes-it@meilleursagents.com # Diabolocom update address  
  
*/15 10-19 * * MON-SAT meilleursagents cd /srv/malegacy/current/ && ./backyard/tools/diabolocom/diabolocom_update_adr.sh  2>&1 | mail -E -s 'Diabolocom error - update adr' hermes-it@meilleursagents.com # Athena AWS test  
  
*/5 9-20 * * MON-FRI meilleursagents cd /srv/malegacy/current/ && backyard/call_athena_with_token.sh  2>&1 | mail -E -s 'Athena test script' aviv-intermerdiary-luna@aviv-group.com
```
