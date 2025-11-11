---
part of:
  - "[[integration  environments]]"
related:
  - "[[mactl]]"
  - "[[how to use mactl]]"
---
#ticket  

[Integration docs](https://docs.integration.meilleursagents.tech/usage/manage-environment)
## notes 🗒

- how to access to env's: see [[how are the URL's created for the env apps]]
	- [[how are the URL's created for the env apps]]
	- each env get's its own argocd: [Luna Argo](https://argocd-luna.integration.meilleursagents.tech/applications)
___

## create and update env
use [[mactl]]

1. In order to use an integration environment you will first need to create one. 
Follow [[how to use mactl#manage an env]] to do this.

2. You can verify the creation of the environment by opening it's URL on [[argocd]]. 
	The URL structure is `argocd-{env}.integration.meilleursagents.tech`
	You can also access the apps deployed by using the URL: `{app_name}-{env}.integration.meilleursagents.tech`
> 	see [[how are the URL's created for the env apps]]

3. The next step is to deploy whatever it is that you want to test. To do this you will need to update the image tag used for a specific application or applications.

	Use `mactl override add {app} --overrideTag {tag}`

4. You can then verify the changes by showing the status.
	 ![[how to use mactl#show env status]]

5. Finally, you may update variable values
	You can override environment variables for specific apps by updating the `values.yaml` file for an app. 
	The file path comes in the form: `deployments/{env}/{app}/values.yaml`
	Example: deployments/{env}/{app}/values.yaml

## reset env

![[how to use mactl#reset an env]]
