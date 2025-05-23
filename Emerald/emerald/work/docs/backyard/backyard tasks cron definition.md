#doc #cronjob #cron #outdated

> [!warning] Outdated

located at: `/etc/cron.d/malegacy` on the **VM**

- [x] #task update definition #tiny ⏳ 2025-05-23 📅 2025-05-23 ✅ 2025-05-22
___

```sh
# CRON Entries
# Run MALegacy async jobs

* * * * * meilleursagents cd /srv/malegacy/current/ && php -f backyard/admin/jobs/run.php > /home/meilleursagents/backyard_jobs_run.log 2>&1 | mail -E -s '[dev] Jobs errors - backyard tasks' geeks@meilleursagents.com # Send SMS notifications to realtors

*/5 8-20 * * MON-SAT meilleursagents cd /srv/malegacy/current/ && php -f backyard/admin/jobs/job.event_realtor_contact_sms.php 5 > /home/meilleursagents/job_event_realtor_contact_sms-info.log 2>&1 | mail -E -s '[dev] Calls SMS notification job error' geeks@meilleursagents.com # Sanity checks

30 8-20 * * * meilleursagents cd /srv/malegacy/current/ && php -f backyard/admin/monitoring/corejob-info.php > /home/meilleursagents/corejob-info.log 2>&1 | mail -E -s '[dev] Suspicious long-running jobs' geeks@meilleursagents.com # Diabolocom update address

20-59/15 9 * * MON-SAT meilleursagents cd /srv/malegacy/current/ && ./backyard/tools/diabolocom/diabolocom_update_adr.sh > /home/meilleursagents/diabolocom_adr_update_initial.log 2>&1 | mail -E -s 'Diabolocom error - update adr' hermes-it@meilleursagents.com # Diabolocom update address

*/15 10-19 * * MON-SAT meilleursagents cd /srv/malegacy/current/ && ./backyard/tools/diabolocom/diabolocom_update_adr.sh > /home/meilleursagents/diabolocom_adr_update.log 2>&1 | mail -E -s 'Diabolocom error - update adr' hermes-it@meilleursagents.com # QSL Listing Update

0 8 * * * meilleursagents cd /srv/malegacy/current/ && ./backyard/tools/listing/qsl_listing_update.sh > /home/meilleursagents/qsl_listing_update.log 2>&1 | mail -E -s 'QSL error - update listing' aviv-intermerdiary-luna@aviv-group.com
```