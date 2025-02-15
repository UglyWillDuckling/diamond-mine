#howto/work/backyard

about:: [[backyard-tasks]]

```bash
 ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ProxyCommand='gcloud compute start-iap-tunnel backyard-tasks-prod-1d-0 %p --listen-on-stdin --zone europe-west1-d --project ma-prod' vladimir.sedlar-ext@10.60.0.230
```