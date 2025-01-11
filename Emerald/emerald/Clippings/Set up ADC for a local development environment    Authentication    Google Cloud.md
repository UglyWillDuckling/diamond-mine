---
title: Set up ADC for a local development environment  |  Authentication  |  Google Cloud
source: https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment
author:
  - "[[Google Cloud]]"
published: 
created: 2025-01-09
description: Discover how to set up Application Default Credentials for Cloud Client Libraries, Google API Client Libraries, and other environments.
tags:
  - clippings
  - howto
  - google
  - gcp
related:
  - "[[Application Default Credentials|ADC]]"
  - "[[GCP]]"
---
[[Application Default Credentials|ADC]]
You can provide either [your user credentials](https://cloud.google.com/docs/authentication/#local-user-cred) or [service account credentials](https://cloud.google.com/docs/authentication/#service-account) to ADC in a local development environment.

## User credentials

When your code is running in a local development environment, such as a development workstation, the best option is to use the credentials associated with your [user account](https://cloud.google.com/docs/authentication#user-accounts).

How you configure ADC with your user account depends on whether your [user account](https://cloud.google.com/docs/authentication#user-accounts) is managed by Google—in other words, it is a Google Account—or by another identity provider (IdP), and federated by using [Workforce Identity Federation](https://cloud.google.com/iam/docs/workforce-identity-federation).

### Configure ADC with your Google Account

To configure ADC with a Google Account, you use the Google Cloud CLI:

1. [Install](https://cloud.google.com/sdk/docs/install) the Google Cloud CLI, then [initialize](https://cloud.google.com/sdk/docs/initializing) it by running the following command:

```bash
gcloud init
```
2. If you're using a local shell, then create local authentication credentials for your user account:

```bash
gcloud auth application-default login
```

You don't need to do this if you're using Cloud Shell.

A sign-in screen appears. After you sign in, your credentials are stored in the [local credential file used by ADC](https://cloud.google.com/docs/authentication/application-default-credentials#personal).

### Configure ADC with an account managed by an external IdP

To configure ADC for a user account managed by an external IdP and federated with [Workforce Identity Federation](https://cloud.google.com/iam/docs/workforce-identity-federation):

1. After [installing](https://cloud.google.com/sdk/docs/install) the Google Cloud CLI, [configure the gcloud CLI to use your federated identity](https://cloud.google.com/iam/docs/workforce-obtaining-short-lived-credentials#browser-based-sign-in) and then [initialize](https://cloud.google.com/sdk/docs/initializing) it by running the following command:

```
gcloud init
```
2. If you're using a local shell, then create local authentication credentials for your user account:

```
gcloud auth application-default login
```

You don't need to do this if you're using Cloud Shell.

If an authentication error is returned, confirm that you have [configured the gcloud CLI to use Workforce Identity Federation](https://cloud.google.com/iam/docs/workforce-obtaining-short-lived-credentials#browser-based-sign-in)

### Tips for configuring ADC with your user credentials

When you configure [[Application Default Credentials]] with your user account, you should be aware of the following facts:

- ADC configured with a user account might not work for some APIs without extra configuration steps. If you see an error message about the API not being enabled in the project, or that there is no quota project available, see [User credentials not working](https://cloud.google.com/docs/authentication/troubleshoot-adc#user-creds-client-based).
- The local ADC file contains your refresh token. Any user with access to your file system can use it to get a valid access token. If you no longer need these local credentials, you can revoke them by using the [`gcloud auth application-default revoke` command](https://cloud.google.com/sdk/gcloud/reference/auth/application-default/revoke).
- Your local ADC file is associated with your user account, not your gcloud CLI configuration. 
	 ==Changing to a different [[gcloud CLI ]]configuration might change the identity used by the gcloud CLI, but it does not affect your local ADC file or the ADC configuration==.

## Service account credentials

You can configure ADC with credentials from a [service account](https://cloud.google.com/docs/authentication#service-accounts) by using [[service account impersonation]] or by using a service account key.

### Service account impersonation

You can use service account impersonation to set up a local Application Default Credentials (ADC) file. Client libraries that support impersonation can use those credentials automatically. Local ADC files created by using impersonation are supported in the following languages:

- C#
- Go
- Java
- Node.js
- Python

You must have the Service Account Token Creator (`roles/iam.serviceAccountTokenCreator`) IAM role on the service account you are impersonating. For more information, see [Required roles](https://cloud.google.com/docs/authentication/use-service-account-impersonation#required-roles).

Use service account impersonation to create a local ADC file:

```rb
gcloud auth application-default login --impersonate-service-account SERVICE_ACCT_EMAIL
```

You can now use client libraries using the supported languages the same way you would after setting up a local ADC file with user credentials. 
<mark style="background: #BBFABBA6;">Credentials are automatically found by the authentication libraries.</mark> For more information, see [Authenticate for using client libraries](https://cloud.google.com/docs/authentication/client-libraries).

Credentials from a local ADC file generated by using[[service account impersonation]] 
are <mark style="background: #FFB8EBA6;">not supported</mark> by all of the authentication libraries, [Error returned for local credentials from service account impersonation](https://cloud.google.com/docs/authentication/troubleshoot-adc#local-impersonated).

### Service account keys

If you cannot use a user account or service account impersonation for local development, you can use a service account key.

To create a service account key and make it available to ADC:

1. Create a service account with the roles your application needs, and a key for that service account, by following the instructions in [Creating a service account key](https://cloud.google.com/iam/docs/keys-create-delete#creating).
2. Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to the path of the JSON file that contains your credentials. This variable applies only to your current shell session, so if you open a new session, set the variable again.

**Example:** Linux or macOS

```
KEY_PATH
```

Replace `KEY_PATH` with the path of the JSON file that contains your credentials.

For example:

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

**Example:** Windows

For PowerShell:

```
KEY_PATH
```

Replace `KEY_PATH` with the path of the JSON file that contains your credentials.

For example:

```
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
```

For command prompt:

```
KEY_PATH
```

Replace `KEY_PATH` with the path of the JSON file that contains your credentials.

## What's next

- Understand best practices for using [service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
- Learn more about [how ADC finds credentials](https://cloud.google.com/docs/authentication/application-default-credentials).
- [Authenticate for using Cloud Client Libraries](https://cloud.google.com/docs/authentication/client-libraries).
- [Authenticate for using REST](https://cloud.google.com/docs/authentication/rest).
- Explore [authentication methods](https://cloud.google.com/docs/authentication).