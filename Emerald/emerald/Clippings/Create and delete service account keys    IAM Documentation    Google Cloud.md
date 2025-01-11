---
title: "Create and delete service account keys  |  IAM Documentation  |  Google Cloud"
source: "https://cloud.google.com/iam/docs/keys-create-delete#creating"
author:
  - "[[Google Cloud]]"
published:
created: 2025-01-09
description: "How to create and delete service account keys."
tags:
  - "clippings"
---
This page explains how to create and delete service account keys using the Google Cloud console, the [Google Cloud CLI](https://cloud.google.com/sdk/gcloud), the [Identity and Access Management API](https://cloud.google.com/iam/docs/reference/rest), or one of the [Google Cloud Client Libraries](https://cloud.google.com/apis/docs/cloud-client-libraries).

## Before you begin

- Enable the IAM API.

[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=iam.googleapis.com&redirect=https://console.cloud.google.com)
- Set up authentication.

Select the tab for how you plan to use the samples on this page:

When you use the Google Cloud console to access Google Cloud services and APIs, you don't need to set up authentication.

In one of the following development environments, set up the gcloud CLI:

- **Cloud Shell**: to use an online terminal with the gcloud CLI already set up, activate Cloud Shell.

At the bottom of this page, a Cloud Shell session starts and displays a command-line prompt. It can take a few seconds for the session to initialize.
- **Local shell**: to use a local development environment, [install](https://cloud.google.com/sdk/docs/install) and [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI.

To use the .NET samples on this page in a local development environment, install and initialize the gcloud CLI, and then set up Application Default Credentials with your user credentials.

1. [Install](https://cloud.google.com/sdk/docs/install) the Google Cloud CLI.
2. To [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI, run the following command:

```
gcloud init
```
3. If you're using a local shell, then create local authentication credentials for your user account:

```
gcloud auth application-default login
```

You don't need to do this if you're using Cloud Shell.

For more information, see [Set up ADC for a local development environment](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment) in the Google Cloud authentication documentation.

To use the C++ samples on this page in a local development environment, install and initialize the gcloud CLI, and then set up Application Default Credentials with your user credentials.

1. [Install](https://cloud.google.com/sdk/docs/install) the Google Cloud CLI.
2. To [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI, run the following command:

```
gcloud init
```
3. If you're using a local shell, then create local authentication credentials for your user account:

```
gcloud auth application-default login
```

You don't need to do this if you're using Cloud Shell.

For more information, see [Set up ADC for a local development environment](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment) in the Google Cloud authentication documentation.

To use the Go samples on this page in a local development environment, install and initialize the gcloud CLI, and then set up Application Default Credentials with your user credentials.

1. [Install](https://cloud.google.com/sdk/docs/install) the Google Cloud CLI.
2. To [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI, run the following command:

```
gcloud init
```
3. If you're using a local shell, then create local authentication credentials for your user account:

```
gcloud auth application-default login
```

You don't need to do this if you're using Cloud Shell.

For more information, see [Set up ADC for a local development environment](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment) in the Google Cloud authentication documentation.

To use the Java samples on this page in a local development environment, install and initialize the gcloud CLI, and then set up Application Default Credentials with your user credentials.

1. [Install](https://cloud.google.com/sdk/docs/install) the Google Cloud CLI.
2. To [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI, run the following command:

```
gcloud init
```
3. If you're using a local shell, then create local authentication credentials for your user account:

```
gcloud auth application-default login
```

You don't need to do this if you're using Cloud Shell.

For more information, see [Set up ADC for a local development environment](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment) in the Google Cloud authentication documentation.

To use the Python samples on this page in a local development environment, install and initialize the gcloud CLI, and then set up Application Default Credentials with your user credentials.

1. [Install](https://cloud.google.com/sdk/docs/install) the Google Cloud CLI.
2. To [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI, run the following command:

```
gcloud init
```
3. If you're using a local shell, then create local authentication credentials for your user account:

```
gcloud auth application-default login
```

You don't need to do this if you're using Cloud Shell.

For more information, see [Set up ADC for a local development environment](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment) in the Google Cloud authentication documentation.

To use the REST API samples on this page in a local development environment, you use the credentials you provide to the gcloud CLI.

[Install](https://cloud.google.com/sdk/docs/install) the Google Cloud CLI, then [initialize](https://cloud.google.com/sdk/docs/initializing) it by running the following command:

```
gcloud init
```

For more information, see [Authenticate for using REST](https://cloud.google.com/docs/authentication/rest) in the Google Cloud authentication documentation.
- Understand [service account credentials](https://cloud.google.com/iam/docs/service-account-creds).

### Required roles

To get the permissions that you need to create and delete service account keys, ask your administrator to grant you the [Service Account Key Admin](https://cloud.google.com/iam/docs/understanding-roles#iam.serviceAccountKeyAdmin) (`roles/iam.serviceAccountKeyAdmin`) IAM role on the project, or the service account whose keys you want to manage. For more information about granting roles, see [Manage access to projects, folders, and organizations](https://cloud.google.com/iam/docs/granting-changing-revoking-access).

You might also be able to get the required permissions through [custom roles](https://cloud.google.com/iam/docs/creating-custom-roles) or other [predefined roles](https://cloud.google.com/iam/docs/understanding-roles).

For more information, see [Service Accounts roles](https://cloud.google.com/iam/docs/understanding-roles#service-accounts-roles).

Depending on your organization policy configuration, you might also need to [allow service account keys to be created](https://cloud.google.com/iam/docs/#allow-creation) in your project before creating a key.

To get the permissions that you need to allow service account keys to be created in a project, ask your administrator to grant you the following IAM roles on your organization:

- [Organization Policy Administrator](https://cloud.google.com/iam/docs/understanding-roles#orgpolicy.policyAdmin) (`roles/orgpolicy.policyAdmin`)
- [Organization Viewer](https://cloud.google.com/iam/docs/understanding-roles#resourcemanager.organizationViewer) (`roles/resourcemanager.organizationViewer`)
- [Tag Administrator](https://cloud.google.com/iam/docs/understanding-roles#resourcemanager.tagAdmin) (`roles/resourcemanager.tagAdmin`)

For more information about granting roles, see [Manage access to projects, folders, and organizations](https://cloud.google.com/iam/docs/granting-changing-revoking-access).

These predefined roles contain the permissions required to allow service account keys to be created in a project. To see the exact permissions that are required, expand the **Required permissions** section:

#### Required permissions

The following permissions are required to allow service account keys to be created in a project:

- `  orgpolicy.constraints.list  `
- `  orgpolicy.customConstraints.create  `
- `   orgpolicy.customConstraints.delete  `
- `  orgpolicy.customConstraints.get  `
- `   orgpolicy.customConstraints.list  `
- `  orgpolicy.customConstraints.update  `
- `   orgpolicy.policies.create  `
- `  orgpolicy.policies.delete  `
- `   orgpolicy.policies.list  `
- `  orgpolicy.policies.update  `
- `  orgpolicy.policy.get  `
- `   orgpolicy.policy.set  `
- `  resourcemanager.organizations.get  `
- `   resourcemanager.projects.listTagBindings  `
- `   resourcemanager.projects.listEffectiveTags  `
- `  resourcemanager.tagKeys.get  `
- `   resourcemanager.tagKeys.list  `
- `  resourcemanager.tagValues.list  `
- `  resourcemanager.tagValues.get`

You might also be able to get these permissions with [custom roles](https://cloud.google.com/iam/docs/creating-custom-roles) or other [predefined roles](https://cloud.google.com/iam/docs/understanding-roles).

## Allow service account key creation

Before you create a service account key, make sure that the `iam.disableServiceAccountKeyCreation` organization policy constraint isn't enforced for your project. If this constraint is enforced for your project, you can't create service account keys in that project.

We recommend enforcing this constraint for most projects and only exempting projects that truly require service account keys. For more information about alternative authentication methods, see [Choose the right authentication method for your use case](https://cloud.google.com/docs/authentication#auth-decision-tree).

To exempt a project from the `iam.disableServiceAccountKeyCreation` organization policy constraint, ask an organization policy administrator to do the following:

1. At the organization level, create a tag key and tag value that you will use to define whether a resource should be exempt from the organization policy. We recommend creating a tag with the key `disableServiceAccountKeyCreation` and the values `enforced` and `not_enforced`.

To learn how to create tag keys and tag values, see [Creating and defining a new tag](https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#creating).
2. Attach the `disableServiceAccountKeyCreation` tag to the organization and set its value to `enforced`. All resources in the organization inherit this tag value, unless it's overwritten with a different tag value.

To learn how to attach tags to resources, see [Attaching tags to resources](https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#attaching).
3. For each project or folder that you want to exempt from the organization policy, attach the `disableServiceAccountKeyCreation` tag and set its value to `not_enforced`. Setting a tag value for a project or folder in this way overrides the tag value inherited from the organization.
4. [Create or update the organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-policies) that prevents the creation of service account keys so that it doesn't enforce the constraint for exempt resources. This policy should have the following rules:

- Configure the `iam.disableServiceAccountKeyCreation` constraint to not be enforced on any resources with the `disableServiceAccountKeyCreation:           not_enforced` tag. The condition in this rule should look like the following:

```
"resource.matchTag('ORGANIZATION_ID/disableServiceAccountKeyCreation', 'not_enforced')"
```
- Configure the `iam.disableServiceAccountKeyCreation` constraint to be enforced on all other resources.

## Create a service account key

To use a service account from outside of Google Cloud, such as on other platforms or on-premises, you must first establish the identity of the service account. Public/private key pairs provide a secure way of accomplishing this goal. When you create a service account key, the public portion is stored on Google Cloud, while the private portion is available only to you. For more information about public/private key pairs, see [Service account keys](https://cloud.google.com/iam/docs/service-account-creds#key-types).

You can create a [service account key](https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts.keys) using the Google Cloud console, the gcloud CLI, the [`serviceAccounts.keys.create()`](https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts.keys/create) method, or one of the [client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries). A service account can have up to 10 keys.

By default, service account keys never expire. You can use an [organization policy constraint](https://cloud.google.com/resource-manager/docs/organization-policy/restricting-service-accounts#limit_key_expiry) to specify the length of time for which a service account key is valid. For details, see [Expiry times for user-managed keys](https://cloud.google.com/iam/docs/service-account-creds#key-expiry).

In the examples below, `SA_NAME` is the name of your service account, and `PROJECT_ID` is the ID of your Google Cloud project. You can retrieve the `SA_NAME@PROJECT_ID.iam.gserviceaccount.com` string from the [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts/) page in the Google Cloud console.

1. In the Google Cloud console, go to the **Service accounts** page.

[Go to Service accounts](https://console.cloud.google.com/iam-admin/serviceaccounts?walkthrough_id=iam--create-service-account-keys&start_index=1#step_index=1)

The remaining steps appear in the Google Cloud console.
2. Select a project.
3. Click the email address of the service account that you want to create a key for.
4. Click the **Keys** tab.
5. Click the **Add key** drop-down menu, then select **Create new key**.
6. Select **JSON** as the **Key type** and click **Create**.

Clicking **Create** downloads a service account key file. After you download the key file, you cannot download it again.

The downloaded key has the following format, where `PRIVATE_KEY` is the private portion of the public/private key pair:

```
{
  "type": "service_account",
  "project_id": "PROJECT_ID",
  "private_key_id": "KEY_ID",
  "private_key": "-----BEGIN PRIVATE KEY-----\nPRIVATE_KEY\n-----END PRIVATE KEY-----\n",
  "client_email": "SERVICE_ACCOUNT_EMAIL",
  "client_id": "CLIENT_ID",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/SERVICE_ACCOUNT_EMAIL"
}
```

Make sure to store the key file securely, because it can be used to authenticate as your service account. You can move and rename this file however you would like.

You can use service account key files to [authenticate an application as a service account](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment#local-key).

Execute the [`gcloud iam service-accounts keys create`](https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/keys/create) command to create service account keys.

Replace the following values:

- `KEY_FILE`: The path to a new output file for the private key—for example, `~/sa-private-key.json`.
- `SA_NAME`: The name of the service account to create a key for.
- `PROJECT_ID`: Your Google Cloud project ID.

```
gcloud iam service-accounts keys create KEY_FILE \
    --iam-account=SA_NAME@PROJECT_ID.iam.gserviceaccount.com
```

Output:

```
created key [e44da1202f82f8f4bdd9d92bc412d1d8a837fa83] of type [json] as
[/usr/home/username/KEY_FILE] for
[SA_NAME@PROJECT_ID.iam.gserviceaccount.com]
```

The service account key file is now downloaded to your machine. After you download the key file, you cannot download it again.

The downloaded key has the following format, where `PRIVATE_KEY` is the private portion of the public/private key pair:

```
{
  "type": "service_account",
  "project_id": "PROJECT_ID",
  "private_key_id": "KEY_ID",
  "private_key": "-----BEGIN PRIVATE KEY-----\nPRIVATE_KEY\n-----END PRIVATE KEY-----\n",
  "client_email": "SERVICE_ACCOUNT_EMAIL",
  "client_id": "CLIENT_ID",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/SERVICE_ACCOUNT_EMAIL"
}
```

Make sure to store the key file securely, because it can be used to authenticate as your service account. You can move and rename this file however you would like.

You can use service account key files to [authenticate an application as a service account](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment#local-key).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM C++ API reference documentation](https://cloud.google.com/cpp/docs/reference/iam/latest).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM C# API reference documentation](https://developers.google.com/api-client-library/dotnet/apis/iam/v1).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM Go API reference documentation](https://godoc.org/google.golang.org/genproto/googleapis/iam/admin/v1).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM Java API reference documentation](https://developers.google.com/api-client-library/java/apis/iam/v1).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM Python API reference documentation](https://developers.google.com/api-client-library/python/apis/iam/v1).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

The `[projects.serviceAccounts.keys.create](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts.keys/create)` method creates a key for a service account.

Before using any of the request data, make the following replacements:

- `PROJECT_ID`: Your Google Cloud project ID. Project IDs are alphanumeric strings, like `my-project`.
- `SA_NAME`: The name of the service account that you want to create a key for.
- `KEY_ALGORITHM`: Optional. The key algorithm to use for the key. The default, which is subject to change, is a 2,048-bit RSA key. For a list of all possible values, see the [`ServiceAccountKeyAlgorithm` reference](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts.keys#ServiceAccountKeyAlgorithm).

HTTP method and URL:

```
POST https://iam.googleapis.com/v1/projects/PROJECT_ID/serviceAccounts/SA_NAME@PROJECT_ID.iam.gserviceaccount.com/keys
```

Request JSON body:

```
{
  "keyAlgorithm": "KEY_ALGORITHM"
}
```

To send your request, expand one of these options:

#### curl (Linux, macOS, or Cloud Shell)

Save the request body in a file named `request.json`, and execute the following command:

```
curl -X POST \     -H "Authorization: Bearer $(gcloud auth print-access-token)" \     -H "Content-Type: application/json; charset=utf-8" \     -d @request.json \     "https://iam.googleapis.com/v1/projects/PROJECT_ID/serviceAccounts/SA_NAME@PROJECT_ID.iam.gserviceaccount.com/keys"
```

#### PowerShell (Windows)

Save the request body in a file named `request.json`, and execute the following command:

```
$cred = gcloud auth print-access-token$headers = @{ "Authorization" = "Bearer $cred" }Invoke-WebRequest \`    -Method POST \`    -Headers $headers \`    -ContentType: "application/json; charset=utf-8" \`    -InFile request.json \`    -Uri "https://iam.googleapis.com/v1/projects/PROJECT_ID/serviceAccounts/SA_NAME@PROJECT_ID.iam.gserviceaccount.com/keys" | Select-Object -Expand Content
```

#### APIs Explorer (browser)

Copy the request body and open the [method reference page](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts.keys/create). The APIs Explorer panel opens on the right side of the page. You can interact with this tool to send requests. Paste the request body in this tool, complete any other required fields, and click **Execute**.

The response contains a key for your service account. The returned key has the following format, where `ENCODED_PRIVATE_KEY` is the private portion of the public/private key pair, encoded in base64.

```
{
  "name": "projects/PROJECT_ID/serviceAccounts/SERVICE_ACCOUNT_EMAIL/keys/KEY_ID",
  "privateKeyType": "TYPE_GOOGLE_CREDENTIALS_FILE",
  "privateKeyData": "ENCODED_PRIVATE_KEY",
  "validAfterTime": "DATE",
  "validBeforeTime": "DATE",
  "keyAlgorithm": "KEY_ALG_RSA_2048"
}
```

To create a key file that you can use to authenticate as the service account, decode the private key data and save it in a file:

Run the following command:

```
echo 'ENCODED_PRIVATE_KEY' | base64 --decode > PATH
```

Replace `PATH` with the path of the file that you want to save the key to. Use the `.json` file extension.

Run the following command:

```
echo 'ENCODED_PRIVATE_KEY' | base64 --decode > PATH
```

Replace `PATH` with the path of the file that you want to save the key to. Use the `.json` file extension.

1. Save the encoded private key data (`ENCODED_PRIVATE_KEY`) in a file.
2. Use `certutil` to decode the file:

```
certutil -decode ENCODED_FILE DECODED_FILE
```

Replace the following values:

- `ENCODED_FILE`: the path to the file containing the encoded private key data.
- `DECODED_FILE`: the path of the file that you want to save the key to. Use the `.json` file extension.

Make sure to store the key data securely, because it can be used to authenticate as your service account.

You can use service account key files to [authenticate an application as a service account](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment#local-key).

## Delete a service account key

Deleting a service account key permanently prevents you from using the key to authenticate with Google APIs.

You cannot undelete a deleted key. Before you delete a key, we recommend that you [disable the key](https://cloud.google.com/iam/docs/keys-disable-enable#disabling), then wait until you are sure that the key is no longer needed. You can then delete the key.

As a best practice, rotate your service account keys regularly. To learn more about rotating service account keys, see [Service account key rotation](https://cloud.google.com/iam/docs/key-rotation).

1. In the Google Cloud console, go to the **Service accounts** page.

[Go to Service accounts](https://console.cloud.google.com/iam-admin/serviceaccounts?walkthrough_id=iam--delete-service-account-keys&start_index=1#step_index=1)

The remaining steps appear in the Google Cloud console.
2. Select a project.
3. On the **Service accounts** page, click the email address of the service account whose key you want to delete.
4. Click the **Keys** tab.
5. From the list of keys, click **Delete** for each key you'd like to delete.

Execute the [`gcloud iam service-accounts keys delete`](https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/keys/delete) command to delete service account keys.

Replace the following values:

- `KEY_ID`: The ID of the key to delete. To find the key's ID, [list all keys for the service account](https://cloud.google.com/iam/docs/keys-list-get#list-keys), identify the key that you want to delete, and then copy its ID.
- `SA_NAME`: The name of the service account that the key belongs to.
- `PROJECT_ID`: Your Google Cloud project ID.

```
gcloud iam service-accounts keys delete KEY_ID \
    --iam-account=SA_NAME@PROJECT_ID.iam.gserviceaccount.com
```

Output:

```
Deleted key [KEY_ID] for service account
[SA_NAME@PROJECT_ID.iam.gserviceaccount.com]
```

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM C++ API reference documentation](https://cloud.google.com/cpp/docs/reference/iam/latest).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM C# API reference documentation](https://developers.google.com/api-client-library/dotnet/apis/iam/v1).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM Go API reference documentation](https://godoc.org/google.golang.org/genproto/googleapis/iam/admin/v1).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM Java API reference documentation](https://developers.google.com/api-client-library/java/apis/iam/v1).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

To learn how to install and use the client library for IAM, see [IAM client libraries](https://cloud.google.com/iam/docs/reference/libraries). For more information, see the [IAM Python API reference documentation](https://developers.google.com/api-client-library/python/apis/iam/v1).

To authenticate to IAM, set up Application Default Credentials. For more information, see [Before you begin](https://cloud.google.com/iam/docs/#before-you-begin).

The `[projects.serviceAccounts.keys.delete](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts.keys/delete)` method deletes a service account key.

Before using any of the request data, make the following replacements:

- `PROJECT_ID`: Your Google Cloud project ID. Project IDs are alphanumeric strings, like `my-project`.
- `SA_NAME`: The name of the service account whose key you want to delete.
- `KEY_ID`: The ID of the key that you want to delete. To find the key's ID, [list all keys for the service account](https://cloud.google.com/iam/docs/#list-keys), identify the key that you want to delete, and then copy its ID from the end of the `name` field. The key's ID is everything after `keys/`.

HTTP method and URL:

```
DELETE https://iam.googleapis.com/v1/projects/PROJECT_ID/serviceAccounts/SA_NAME@PROJECT_ID.iam.gserviceaccount.com/keys/KEY_ID
```

To send your request, expand one of these options:

#### curl (Linux, macOS, or Cloud Shell)

Execute the following command:

```
curl -X DELETE \     -H "Authorization: Bearer $(gcloud auth print-access-token)" \     "https://iam.googleapis.com/v1/projects/PROJECT_ID/serviceAccounts/SA_NAME@PROJECT_ID.iam.gserviceaccount.com/keys/KEY_ID"
```

#### PowerShell (Windows)

Execute the following command:

```
$cred = gcloud auth print-access-token$headers = @{ "Authorization" = "Bearer $cred" }Invoke-WebRequest \`    -Method DELETE \`    -Headers $headers \`    -Uri "https://iam.googleapis.com/v1/projects/PROJECT_ID/serviceAccounts/SA_NAME@PROJECT_ID.iam.gserviceaccount.com/keys/KEY_ID" | Select-Object -Expand Content
```

#### APIs Explorer (browser)

Open the [method reference page](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts.keys/delete). The APIs Explorer panel opens on the right side of the page. You can interact with this tool to send requests. Complete any required fields and click **Execute**.

You should receive a JSON response similar to the following:

```
{
}
```

## What's next

- Learn how to [list and get service account keys](https://cloud.google.com/iam/docs/keys-list-get).
- Learn how to [upload your own public service account keys](https://cloud.google.com/iam/docs/keys-upload).
- Understand the [best practices for managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
- Learn about [alternatives to service account keys for authentication](https://cloud.google.com/docs/authentication#auth-decision-tree).

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-01-08 UTC.