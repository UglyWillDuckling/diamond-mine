
## important 🔴

- contains all configurations for apps
- the configurations can be overriden in [[k8s project]]


## How does it work ?

As we want to normalize all our applications, we created helm libraries charts to be shared and used in your application charts.

For example, if you look at [this Helm](https://github.com/MeilleursAgents/asg-helm-charts/blob/main/charts/b2cleadrankingapi/Chart.yaml), we set our libs as dependencies [here](https://github.com/MeilleursAgents/asg-helm-charts/blob/main/charts/b2cleadrankingapi/Chart.yaml#L8-L20).

## How to create a new Helm chart ?

If you want to create a new Helm chart for an app, you need to create files as described below :

``` tree
.
├── <app_name>
│   ├── Chart.yaml
│   ├── templates
│   │   └── <app_name>.yaml
│   └── values.yaml
```

💡 You can find blueprints of typical applications Charts in the [./blueprint directory](https://github.com/MeilleursAgents/asg-helm-charts/blob/main/blueprint).

Add your chart in the CODEOWNERS to enable notifications & validation of your team

### Chart.yaml

``` yaml
apiVersion: v2
name: <app_name>
description: <app_name> Helm chart
maintainers:
- name: <team>
type: application
version: <version>
dependencies:
- name: <helm library name>
  repository: oci://europe-west1-docker.pkg.dev/asg-registry/helm
  version: <helm library version>
- ...
```

```app_name```: The name of your application

```team```: The name of the team who manages the app

```version```: The version of your Helm chart.

```helm library name```: The name of the library you want to use in this chart.

### values.yaml

==This file will contain each default parameter for your app to work. These values can be overriden later in the [asg-apps-k8s](https://github.com/MeilleursAgents/asg-apps-k8s) repository.==

### templates/app_name.yaml

This file contains all the resources you need to include in order to launch your app.

```yaml
---
{{ include "receiver.deployment" . }}
---
{{ include "receiver.hpa" . }}
---
{{ include "receiver.pdb" . }}
---
...
```

## Cheat sheet

### Login to GCP Artifact Registry

To use GCP artifact registry, you have to login to the service ([documentation](https://cloud.google.com/artifact-registry/docs/helm/authentication)):

Prior to Helm v3.8.0, you have to authenticate with helm registry command:

```bash
gcloud auth application-default print-access-token | helm registry login -u oauth2accesstoken \
--password-stdin https://europe-west1-docker.pkg.dev
```

As of v3.8.0, Helm can use docker registry authentication file:

```bash
gcloud auth configure-docker europe-west1-docker.pkg.dev
```

### Enabling HELM OCI Support

> <https://helm.sh/docs/topics/registries/#enabling-oci-support>

Prior to Helm v3.8.0, OCI support was considered experimental and needed to be enabled. **As of v3.8.0 it is enabled by default.**

To enable OCI experimental support for Helm versions prior to v3.8.0, please set HELM_EXPERIMENTAL_OCI in the environment:

```bash
export HELM_EXPERIMENTAL_OCI=1
```

### Install chart depdencencies

```bash
cd charts/example-app
helm dependency update .
```

### Generate template

```bash
cd charts/example-app
helm template .
```
