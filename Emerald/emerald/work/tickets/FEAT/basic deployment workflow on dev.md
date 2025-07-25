---
~
---
continues somewhat from [[basic git workflow]]
___

1. **merge** PR: this will trigger a `new version build`, once the build finishes ...
2. you will receive links to the **auto** PR-s from [[serge]]: dev and prodA
		🗒the links are on `k8s` repository
3. **merge** the dev PR: will trigger a deployment on [[argocd]]
	1. add a **review**
	2. click merge
4. monitor the deployment on argo, after it's done...
5. test on dev and inform anyone involved

### standard [[serge]] success message for auto PR-s

mediaapi is successful 🎉
🏗 Artifact name
`1.0.0-033e06f0`
**Next step**: Staging :astronaut:
You can find auto PRs in asg-apps-k8s
• 👨‍💻 Don't forget potential infrastructure-as-code changes

### PR's on [[k8s]]
`note: todo`
