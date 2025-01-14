---
date: Jan 5, 2025
related:
  - "[[investigate QSL listing connection plan]]"
  - "[[gcloud compute execute command remotely]]"
---
#work #work/call #call

### who
- [[Marc Jonot]]

## gcloud auth cli

[[gcloud CLI]]
https://github.com/MeilleursAgents/Airflow-Data/blob/6c7e142756640078c8fa553bfec0e4bf82774137/airflow_data/dags/export_schema_to_aws.py#L177
https://github.com/axel-springer-kugawana/aviv_dsgp_data_infra/blob/main/terraform/environments/live/poetic-sunfish/data.tf#L61-L122
[GCP IAM  account link ](https://console.cloud.google.com/iam-admin/iam?authuser=1&inv=1&invt=AbmevQ&project=ma-dev2)
https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif

- $ ID could be the **subId**
- https://www.jhanley.com/blog/google-cloud-application-default-credentials-php/
- & service account is  integration-malegacy@ma-dev2.iam.gserviceaccount.com 

[[Access AWS using a Google Cloud Platform native workload identity  Amazon Web Services]]

```bash
curl -H "Metadata-Flavor: Google" 'http://metadata/computeMetadata/v1/instance/service-accounts/default/identity?audience=AUDIENCE&format=FORMAT&licenses=LICENSES'

curl -H "Metadata-Flavor: Google" 'http://metadata/computeMetadata/v1/instance/service-accounts/default/identity?audience=AUDIENCE&format=full'
```


curl -H "Metadata-Flavor: Google" 'http://metadata/computeMetadata/v1/instance/service-accounts/default/identity?audience=AUDIENCE&format=full'

### curl mappings

oaud: aud (AUDIENCE)
aud: azp (AUTHORIZE_PARTY)
sub: sub (SUBJECT)

accounts.google.com:oaud condition key matches the aud (AUDIENCE) field on the Google ID token.
accounts.google.com:aud condition key matches the azp (AUTHORIZED_PARTY) field on the Google ID token.
accounts.google.com:sub condition key matches the sub (SUBJECT) field on the Google ID token.

✔saved the auth info  at[[gcloud auth info]]
![[gcloud auth info]]

- ! the app is located at `/srv/malegacy/current`

from [[Marc Jonot]]
1. get [[GCP]] token
2. then assume the role on [[AWS]]
3. then query [[Amazon Athena|Athena]]

> [!NOTE]
> [[Paulo]] managed to assume the 

We can connect locally then via the **CLI**

From Marc
```bash
export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=eu-west-1
```
%% these values should all come from the assume role command %%

athena query ^athena-query
```bash
aws athena start-query-execution \
   --query-string **"select count(*) from tablename;"** \
   --result-configuration OutputLocation=s3://superb-flamingo-dev-athena/qsl-boost-gcp-role/ \
   --output text
```

```bash
aws sts assume-role-with-web-identity --role-arn arn:aws:iam::008583020256:role/qsl-boost-gcp-role --role-session-name test --web-identity-token $GCP_TOKEN 
```

[[AWS auth process]]

**current query id**
443bb750-0800-4fd6-9aa3-6a8b3fd8f957

> [!NOTEj] [[Marc Jonot]]: it will work on next monday [[2025-01-13]]

- [ ] #task [[Marc Jonot]] would like some **docs** for this
