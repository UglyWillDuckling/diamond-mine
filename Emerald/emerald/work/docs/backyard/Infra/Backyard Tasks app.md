
## description

backyard tasks is used to manage cron jobs on the [[backyard]] 
(backyard task is deployed on a compute engine VM not kubernetes that why we use ansible)

4:16
for what I know backyard task is used for cron tasks related to backyard
- Backyard tasks is deployed on a **VM**
- used to mange cron jobs on the backyard

## how to

### check existing jobs
```sql
select * FROM core_job;
```

## config
[[ma-infra]]

ansible/group_vars/fr_backyard_tasks/ma-cron.yml
```yaml
    cron:
      - schedule: "* * * * *"
        workdir: "/srv/malegacy/current/"
        command: "php -f backyard/admin/jobs/run.php"
        mail_subject: "[{{ env }}] Jobs errors - backyard tasks"
        mail_recipients: "{{ admin_email }}"
        logfile: "/home/meilleursagents/backyard_jobs_run.log"
        comment: "Run MALegacy async jobs"
      - schedule: "*/5 8-20 * * MON-SAT"
        workdir: "/srv/malegacy/current/"
        command: "php -f backyard/admin/jobs/job.event_realtor_contact_sms.php 5"
        mail_subject: "[{{ env }}] Calls SMS notification job error"
        mail_recipients: "{{ admin_email }}"
        logfile: "/home/meilleursagents/job_event_realtor_contact_sms-info.log"
        comment: "Send SMS notifications to realtors"
      - schedule: "30 8-20 * * *"
        workdir: "/srv/malegacy/current/"
        command: "php -f backyard/admin/monitoring/corejob-info.php"
        mail_subject: "[{{ env }}] Suspicious long-running jobs"
        mail_recipients: "{{ admin_email }}"
        logfile: "/home/meilleursagents/corejob-info.log"
        comment: "Sanity checks"

      # Diabolocom
      - schedule: "20-59/15 9 * * MON-SAT"
        workdir: "/srv/malegacy/current/"
        command: "./backyard/tools/diabolocom/diabolocom_update_adr.sh"
        mail_subject: "Diabolocom error - update adr"
        mail_recipients: "hermes-it@meilleursagents.com"
        comment: "Diabolocom update address"
      - schedule: "*/15 10-19 * * MON-SAT"
        workdir: "/srv/malegacy/current/"
        command: "./backyard/tools/diabolocom/diabolocom_update_adr.sh"
        mail_subject: "Diabolocom error - update adr"
        mail_recipients: "hermes-it@meilleursagents.com"
        comment: "Diabolocom update address"
```