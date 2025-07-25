---
author:
created: 2025-07-16
published:
source: https://docs.integration.meilleursagents.tech/usage/setup-computer/
tags:
  - work/howto/gcloud
---
## Kubernetes setup

### kubectl: the kubernetes CLI

[kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) is a CLI to interact with Kubernetes clusters.

Installing `kubectl` using `brew`:

```js
brew install kubectl
```

Updating your packages lists and install the dependencies:

```js
sudo apt update
sudo apt install -y apt-transport-https
```

Installing `kubectl`:

```js
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
sudo touch /etc/apt/sources.list.d/kubernetes.list
echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt update
sudo apt-get install -y kubectl
```

#### krew: a plugins manager for kubectl (optional but quite useful)

Installation guide: [https://krew.sigs.k8s.io/docs/user-guide/setup/install/](https://krew.sigs.k8s.io/docs/user-guide/setup/install/)

Installing recommended plugins:

```js
kubectl krew install ctx neat node-shell ns tree
```

### The Visual Studio Code extension

Visual Studio Code uses an extension to improve Kubernetes integration: [Kubernetes extension](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools).

___
## gcloud CLI setup

### Prerequisites

You need Python 3 on your computer. To check your Python version:

```js
python -V
```

Visit [this page](https://cloud.google.com/sdk/docs/install#mac) and dowload the `.tar.gz` archive that matches your computer specifications. Extract the archive in your home, and use a terminal to launch the following command:

```js
~/google-cloud-sdk/install.sh
```

When installation is done, launch:

```js
~/google-cloud-sdk/bin/gcloud init
```

And:

Add Google Cloud SDK as a new packages source and import the public key:

Update your system dependencies and install the SDK:

```js
sudo apt update && sudo apt install -y google-cloud-sdk
```

When installation is done, launch:

```js
gcloud init
```

And:

Follow the instructions displayed in your terminal. Select the `ma-dev2` project, and the `europe-west1` region.

## Getting cluster accesses

Open your terminal and launch:

```js
gcloud components install gke-gcloud-auth-plugin
gcloud container clusters get-credentials ma-integration-2 --zone=europe-west1 --project=ma-dev2
```

```js
sudo apt update && sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin
gcloud container clusters get-credentials ma-integration-2 --zone=europe-west1 --project=ma-dev2
```

To check the installation, you can use the following commands:

```js
kubectl config set-context --current --namespace=<your-team-namespace>
kubectl get svc
```

## Local development tools setup

### envsubst

If you are an Ubuntu user, it is already installed. On macOS, you must install it using the following commands:

```js
brew install gettext
brew link --force gettext
```

### docker-compose

You can follow the official documentation for your OS and install the last `docker-compose` version >= 1.29: [docker-compose](https://docs.docker.com/compose/install/)

Version

If you have a version prior to 1.29, you might have issues to launch some applications.

### berglas

[berglas](https://github.com/GoogleCloudPlatform/berglas) is a CLI to access secrets registered in the Google Cloud Platform Secret Manager.

Install `berglas` using `brew`:

```js
brew install berglas
```

Download the binary and turn it to an executable file:

```js
sudo curl https://storage.googleapis.com/berglas/main/linux_amd64/berglas -o /usr/local/bin/berglas
sudo chmod +x /usr/local/bin/berglas
```

You can test the installation by trying to grab the `PACKAGECLOUD_TOKEN` secret:

```js
berglas access sm://ma-dev2/packagecloud-token#1
```