title: **Prendre l'identité sur www**
[example contact](https://backyard-dev.meilleursagents.tech/realtors/39300/users/1230841/)

---
## notes 📔
- works `locally` - redirects to the default [[luna team]] `env`
- URL used on dev: https://www.meilleursagents.tech
- unable to determine the env var for this on [[argocd]]

## important
- **defined** in `config/config.common.inc#L54`
- $ based on  `APP_URL_HOST`
	- defined for **dev** in `config/config.dev.inc`

## changes 💱
 updated **dev** config on [k8s repo](https://github.com/MeilleursAgents/asg-apps-k8s)
https://github.com/MeilleursAgents/asg-apps-k8s/pull/10267
