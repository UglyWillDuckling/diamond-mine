## important 🔴

- has a dependency on the [[helm-charts project]]
	- a charts needs to first exist on 
- all apps defined have the type `argoproj`

==This repo will contain each MA application deployed with argocd.==

## Requirements

First of all, you need to verify that all the requirements have been done for deploying your new app:

[[asg-infra-tf project]]
[[asg-app-tf project]]

- [ ] SA used by the app populated in the [asg-infra-tf repository](https://github.com/MeilleursAgents/asg-infra-tf) (managed by OPS Team)
- [ ] Custom resources (buckets, pubsub, etc...) have been created in the [asg-apps-tf repository](https://github.com/MeilleursAgents/asg-apps-tf) (managed by Web/Data/Ops)
- [ ] ==Charts have been created in the [asg-helm-charts repository](https://github.com/MeilleursAgents/asg-helm-charts) (managed by **Web/Data/Ops**)==

When all these steps have been done, you can pass to the app definition here.

## App folder

Current repo organization is:
*platform*/*scope*/*env*/*<app_name>.yml*

Currently, only ```fr/web/dev``` have applications in it, but we will add more apps in the future in order to normalize our deployment method.

## App definition

Here is an example of an app defined as a **argocd application object**

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: "<app_name>"
  namespace: argocd
  labels:
    team: "<team_name>"
spec:
  destination:
    namespace: <env_namespace> (dev, staging, prod)
    server: https://kubernetes.default.svc
  project: applications
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
  source:
    repoURL: europe-west1-docker.pkg.dev/asg-registry/helm
    targetRevision: <chart_version>
    chart: "<chart_app_name>"
    helm:
      valueFiles:
      - values.yaml
      values: |
        receiver:
          ...
        worker:
          ...
```

Here is a recap of what parameters corresponds:

```name```: Name of the application you want to deploy

```team_name```: Name of the team who manages the application

```env_namespace```: Namespace where is deployed the application. The namespace is related to the current env: (dev for dev project, staging for staging, prod for prod). Same namespaces are deployed on different platforms (FR/BE/DE)

```chart_app_name```: The name of the chart used for your application. These charts are built within the [asg-helm-charts](https://github.com/MeilleursAgents/asg-helm-charts) repository.

Documentation will be added soon in this repository.

```chart_version```: The latest version of the current helm charts. As the chart_app_name you will find it in the asg-helm-charts repo, in the ```Chart.yaml``` of your chart (Example for b2cleadrankingapi [here](https://github.com/MeilleursAgents/asg-helm-charts/blob/main/charts/b2cleadrankingapi/Chart.yaml#L7)).

The ```Values``` field below contains each parameters you want to override in the current chart (as it was done before with gegen). If you want an example, you can see one [here](https://github.com/MeilleursAgents/asg-apps-k8s/blob/main/fr/web/dev/b2cleadrankingapi.yaml)
