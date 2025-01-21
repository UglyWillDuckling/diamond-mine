---
updated: 2025-01-20
---
capture [[2025-01-20]]

`ansible/group_vars/fr_backyard_tasks/ma-cron.yml`
```yaml
#...
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
      # AWS Athena test script
      - schedule: "*/5 9-20 * * MON-FRI"
        workdir: "/srv/malegacy/current/"
        command: "backyard/call_athena_with_token.sh"
        mail_subject: "Athena test script"
        mail_recipients: "aviv-intermerdiary-luna@aviv-group.com"
        comment: "Athena AWS test"
```
