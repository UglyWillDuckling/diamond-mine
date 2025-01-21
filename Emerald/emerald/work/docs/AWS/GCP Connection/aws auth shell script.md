---
tags:
  - script
  - auth
  - aws
  - shell
related:
  - "[[aws CLI]]"
  - "[[AWS auth process]]"
  - "[[auth process.canvas|auth process]]"
  - "[[call - qsl - GCP access]]"
  - "[[shell script]]"
  - "[[shell]]"
  - "[[bash]]"
---
created with the **help** of [[Marc Jonot]]

```bash
#!/usr/bin/env bash

echo Getting the GCP token
GCP_TOKEN=$(gcloud compute ssh --zone "europe-west1-c" "backyard-tasks-dev-1c-0" --project "ma-dev2" -- gcloud auth print-identity-token)

echo Assuming web identity

aws sts assume-role-with-web-identity --role-arn arn:aws:iam::008583020256:role/qsl-boost-gcp-role --role-session-name test --web-identity-token "$GCP_TOKEN"

AccessKeyId=$(<identity.json jq -r '.Credentials.AccessKeyId')
AccessKey=$(<identity.json jq  -r '.Credentials.SecretAccessKey')
SessionToken=$(<identity.json jq -r '.Credentials.SessionToken')
Region='eu-west-1'
SessionName='test'

echo Setting environment variables: "$AccessKeyId" "$AccessKey" "$SessionToken"

export AWS_ACCESS_KEY_ID=$AccessKeyId
export AWS_SECRET_ACCESS_KEY=$AccessKey
export AWS_SESSION_TOKEN=$SessionToken
export AWS_DEFAULT_REGION=$Region
export AWS_ROLE_SESSION_NAME=$SessionName

echo Querying Athena
query_id=$(aws athena start-query-execution \
  --query-string "select count(*) from tablename;" \
  --result-configuration OutputLocation=s3://superb-flamingo-dev-athena/qsl-boost-gcp-role/ \
  --output text \
  --work-group gcpworkgroup)

echo Waiting for the query to finish
sleep 5

echo Query results
aws athena get-query-execution --query-execution-id "$query_id"
```
