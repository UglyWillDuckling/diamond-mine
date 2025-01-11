---
related:
  - "[[AWS]]"
  - "[[aws CLI]]"
  - "[[connect to AWS locally]]"
---
Holds the account information for aws.
Information is groupped by accounts.

Usually generated using the `aws configure sso` command

## local example
```rb
[profile jumpy-parrot-administrator]
sso_session = hello
sso_account_id = 061039773222
sso_role_name = AvivAdministratorAccessReadWrite
region = eu-central-1
[sso-session hello]
sso_start_url = https://d-93670866e1.awsapps.com/start/#
sso_region = eu-west-1
sso_registration_scopes = sso:account:access

```