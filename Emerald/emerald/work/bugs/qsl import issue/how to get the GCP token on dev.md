## how to get the GCP token on dev

```sh
gcloud compute ssh --zone "europe-west1-c" "backyard-tasks-dev-1c-0" --project "ma-dev2" --command 'sudo su - meilleursagents gcloud auth print-identity-token'
```
