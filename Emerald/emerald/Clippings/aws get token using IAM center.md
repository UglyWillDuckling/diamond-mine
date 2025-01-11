---
title: Getting AWS Credentials with AVIV SSO - Product and Technology - Confluence
source: https://avivgroup.atlassian.net/wiki/spaces/ProDev/pages/223639024/Getting+AWS+Credentials+with+AVIV+SSO
author: 
published: 
created: 2025-01-09
description: 
tags:
  - clippings
related:
  - "[[connect to AWS locally]]"
  - "[[Getting AWS Credentials with AVIV SSO]]"
---
## CLI: Get an AWS STS token via AVIV SSO (AWS SSO) – using AWS IAM Identity Center credentials

## Prerequisites

- AWS CLI is installed
- Okta Account is working and AWS is enabled (see screenshots)

## Configuration

Run the following command. Name the profile like it is named e.g. in [[Okta]] (example follows)

Get the information from the aws information page after clicking points 1-3 from the second screenshot, using the information 4 and 5 from the third screenshot.

![](https://api.media.atlassian.com/file/8bc0f140-24a2-473f-9719-3cb412900750/image?mode=full-fit&client=72a643fe-31c8-4be5-a3d2-4916e35c0f71&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI3MmE2NDNmZS0zMWM4LTRiZTUtYTNkMi00OTE2ZTM1YzBmNzEiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjhiYzBmMTQwLTI0YTItNDczZi05NzE5LTNjYjQxMjkwMDc1MCI6WyJyZWFkIl19LCJleHAiOjE3MzY0Mzc3OTQsIm5iZiI6MTczNjQzNDQ5NH0.9AK9H34zmRihOVGW8fBRJSrm1zxkrjh1DZRvTXCfGHQ)

Redo the configuration for every account you would like to use. In the end your config file ~/.aws/config should look like this:

```bash
[sso-session iw-napoleon-dev]
role_arn       = arn:aws:iam::<accountID>:role/AdministratorAccess-Role
source_profile = iw-napoleon-dev
region         = eu-central-1

[sso-session iw-napoleon-preview]
role_arn       = arn:aws:iam::<accountID>:role/AdministratorAccess-Role
source_profile = iw-napoleon-preview
region         = eu-central-1


[sso-session iw-napoleon-live]
role_arn       = arn:aws:iam::<accountID>:role/AdministratorAccess-Role
source_profile = iw-napoleon-live
region         = eu-central-1

[profile iw-napoleon-live]
sso_start_url = https://<host>.awsapps.com/start#
sso_region = eu-west-1
sso_account_id = <accountID>
sso_role_name = iwt_AdministratorAccess
region = eu-central-1
output = json

[profile iw-napoleon-preview]
sso_start_url = https://<hostname>.awsapps.com/start#
sso_region = eu-west-1
sso_account_id = <accountID>
sso_role_name = iwt_AdministratorAccess
region = eu-central-1
output = json

[profile iw-napoleon-dev]
sso_start_url = https://<hostname>.awsapps.com/start#
sso_region = eu-west-1
sso_account_id = <acountID>
sso_role_name = iwt_AdministratorAccess
region = eu-central-1
output = json
```
