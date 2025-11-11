---
related:
  - "[[Install and Set Up kubectl on Linux]]"
---
[[pg bouncer www db service]]

Errors with pgbouncer image https://hub.docker.com/r/bitnami/pgbouncer
[MA Integration docs](https://docs.integration.meilleursagents.tech/usage/setup-computer/)
___

[[Taulant Hasi]]
You need to add 
- image.repository and 
- image.tag

https://github.com/MeilleursAgents/asg-apps-k8s/blob/main/fr/web/dev/pgbouncer-www-db.yaml
```yaml
values: |
	image:
	  repository: bitnamilegacy/pgbouncer
	  tag: 1.21.0-debian-11-r7
```

- maybe used by other teams

- hosted on [[k8s]]
- it is on the dev env
	- visible on [argo dev](https://argocd.meilleursagents.tech/applications/argocd/pgbouncer-www-db)

- [x] where is this setup?
	- [x] check argocd
	- [x] check the repo, how does it work?
- [x] is anybody else using this? Ma
- [x] update [[k8s]] with suggested changes

`!:  error`
 Back-off pulling image "bitnami/pgbouncer:1.21.0-debian-11-r7", back-off 5m0s restarting failed

 <mark style="background: #BBFABBA6;">working</mark>
 