---
related:
  - "[[ADR QSL Boost Automation - Tech solution - MPD - Oxygen - Confluence]]"
  - "[[QSL connection call]]"
tags:
  - ticket
  - active
---
- [/] #task investigate qls listing connect plan
	- [/] #task explore existing GCP <mark style="background: #ABF7F7A6;">connection</mark>
---

## important

fsdfd
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
- [/] see how it works **atm**
- [x] see about secrets and the `credentials.json`
- [ ] ..

**notes**
 - done via `StorageClient`
	`vendor/google/cloud-storage/src/StorageClient.php`
 - Google API usees the `GOOGLE_APPLICATION_CREDENTIALS` env var as the credentials file

<mark style="background: #FF5582A6;">error</mark>: "Invalid **grant**: account not found"

### secrets generation

> see the `credentials.json` line
```makefile
generate-secrets:
	berglas access sm://ma-dev2/backyard-google-application-credentials\#1 > credentials.json
	berglas access sm://ma-dev2/pgpass-malegacy\#4 > .pgpass-malegacy
	# Postgres client only load .pgpass-malegacy file if he has 600 rights level
	chmod 600 .pgpass-malegacy
```

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
