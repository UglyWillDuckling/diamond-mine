---
related:
  - "[[investigate QSL listing connection plan]]"
  - "[[auth process.canvas|auth process]]"
---

1. get the [[jwt token]] value from [[backyard-tassk]] `gcloud auth print-identity-token`
2. `assume` the role with [[aws CLI]] 
	 `aws sts assume-role-with-web-identity --role-arn arn:aws:iam::008583020256:role/qsl-boost-gcp-role --role-session-name test --web-identity-token $GCP_TOKEN`
3. store the shell env vars 
```bash
aws sts assume-role-with-web-identity --role-arn arn:aws:iam::008583020256:role/qsl-boost-gcp-role --role-session-name test --web-identity-token $GCP_TOKEN
```

> [!important] **Export** aws session vars
> 
```bash
export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE                   
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=eu-west-1
```

> [!NOTE] Run Athena Query
```bash
aws athena start-query-execution \
   --query-string **"select count(*) from tablename;"** \
   --result-configuration OutputLocation=s3://superb-flamingo-dev-athena/qsl-boost-gcp-role/ \
   --output text
```

> [!todo] Get results
>  `aws athena get-query-results --query-execution-id $query_id`


- [/] #task automate the [[jwt token]] process and more

1. make a script to get the token (store it)
2. use the token to authenticate on [[aws CLI]]
3. query [[Amazon Athena|Athena]]

export AWS_ROLE_SESSION_NAME=test
export AWS_SESSION_TOKEN=fbuideagipzahdpoazhopzauhgpazhgpoza

query id: 5557db03-e12a-4f0c-a255-7ca2ae69faeb

[[aws auth script]]

## notes 📔

📔 it's better to split up a script