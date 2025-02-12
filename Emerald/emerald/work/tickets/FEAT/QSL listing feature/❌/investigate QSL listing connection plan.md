---
related:
  - "[[ADR QSL Boost Automation - Tech solution - MPD - Oxygen - Confluence]]"
  - "[[QSL connection call]]"
  - "[[Athena connection]]"
tags:
  - ticket
  - active
---
 [/] #task investigate qls listing connect plan ⏫
	- [x] #task read on [[Identity and access management]] 🔼 🆔 4buwz8 ✅ 2025-02-11
	- [x] #task explore existing GCP <mark style="background: #ABF7F7A6;">connection</mark> ⏫ ✅ 2025-01-14
		- [x] #task try to connect [[GCP]] on [[backyard]] ⏫ 🆔 DlkWHJ ✅ 2025-02-06

---
## important
- we will be making a request to [[Amazon Athena|Athena]] from [[backyard]]
	- from [[ADR QSL Boost Automation - Tech solution - MPD - Oxygen - Confluence]], this would be **option 1**
	- [[ADR QSL Boost Automation - Tech solution - MPD - Oxygen - Confluence#^obsolete]]

A [[PR]] was made on axel-springer-kugawana/aviv_data-aws-base-infra to create template GCP and 
setup `AssumeRoleWithWebIdentity`

https://github.com/axel-springer-kugawana/aviv_data-aws-base-infra/pull/1362/files
`feat: create template GCP and setup AssumeRoleWithWebIdentity for QSL Boost`

Last comment from [[Marc Jonot]] on [slack](https://kugawana.slack.com/archives/C033EHCJQCQ/p1734007964623049?thread_ts=1733995431.566279&cid=C033EHCJQCQ)
> Very good question. We don't have dev data within the data platform so we are usually force to work only on live. But Since their is no PII, if we have security validation we can setup the gcp dev account to query flamingo-live account data. In any cases both dev and gcp accounts.google.com:sub will be required to test the connection in dev.

## current [[GCP]] connection
- [x] see how it works **atm**
- [x] see about secrets and the `credentials.json`

**notes**
 - done via `StorageClient`
	`vendor/google/cloud-storage/src/StorageClient.php`
 - Google API usees the `GOOGLE_APPLICATION_CREDENTIALS` env var as the credentials file

<mark style="background: #FF5582A6;">error</mark>: "Invalid **grant**: account not found"

### secrets generation
[[backyard - secrete generation]]
- `ServiceAccountCredentials` makes the request

**credentials.json**
```json
{
  "type": "service_account",
  "project_id": "ma-dev2",
  "private_key_id": "4fd639248692d62de59065d775d0764081490ce2",
  "client_email": "integration-backyard@ma-dev2.iam.gserviceaccount.com",
  "client_id": "114922287254213087532",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/integration-backyard%40ma-dev2.iam.gserviceaccount.com"
}
```
> private key is missing here

- ? what is [[GDU]]
	- @ Google Distributed Cloud
- ? what is Application Default Credentials
	- [[Application Default Credentials]]

### connecting on backyard
`backyardy/gcp_test.php`

[[Identity and access management]]

From [[Marc Jonot]]
Hi [@Vladimir Sedlar](https://kugawana.slack.com/team/U06MM6CVBJ9), it must run on GCP not locally (because we use `accounts.google.com:aud`, `accounts.google.com:oaud` and `accounts.google.com:sub` for security). 
We also need those parameters to setup the **role** for you. About credential your script should use open ID connect to get authentificated and then you get a token `$bearerToken` that will be used for the **assumed** role

[^hello]
[[connect to AWS locally]]

## connect on backyard
- [x] #task make a test connection on backyard-tasks dev ⏫ ✅ 2025-01-14
	- [x] #task **make** PR
	- [x] #task <mark style="background: #BBFABBA6;">test</mark> **PR** on dev ✅ 2025-01-14
		- both tasks and backyard itself
- [x] #task make a test [[Amazon Athena|Athena]] query on tasks ⏫ ✅ 2025-01-15
- [x] #task start working on the actual implementation 🔼 ✅ 2025-01-15

### athena test query
> I need to copy the `php script` content over to the **clone project** and test it

### actual Implementation
[var_export](https://www.php.net/manual/en/function.var-export.php)
[[php result set]]

- [x] store the result into a file
- [x] ask if the result format can be changed
- [x] start on the implementation


- [ ] ? is this done or not???

