---
related:
  - "[[ADR QSL Boost Automation - Tech solution - MPD - Oxygen - Confluence]]"
  - "[[QSL connection call]]"
tags:
  - ticket
  - active
---
- [/] #task investigate qls listing connect plan
- [ ] .
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

