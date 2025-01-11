---
related:
  - "[[Getting AWS Credentials with AVIV SSO]]"
  - "[[AWS]]"
  - "[[aws CLI]]"
  - "[[AWS Security Token Service|AWS STS]]"
  - "[[aws-config]]"
---
- [x] #task connect to [[AWS]] locally 🔼 ✅ 2025-01-09
	- [x] #task **follow** [[Getting AWS Credentials with AVIV SSO]] ✅ 2025-01-09
	- [x] #task login using [[sso]] [[#sso login]] ✅ 2025-01-09
	- [x] #task see about [[#saml login]] ✅ 2025-01-09

> [!info] access keys
> Access keys are located inside the [aws accounts](https://d-93670866e1.awsapps.com/start/#/?tab=accounts)  -> {{select account}} -> **Access keys**

- ~ [[sso]] information is stored inside ` ~/.aws/config` file [[aws-config]]
### sso login
>  see [[Getting AWS Credentials with AVIV SSO]]
Use information from the [[AWS]] access portal

use the command `aws configure sso`
### saml login
> [[saml2aws]]

- ~ this will store info at `~/.aws/credentials`

> [!done] SSO login is the only thing that's required
