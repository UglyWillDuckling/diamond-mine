---
title: Access AWS using a Google Cloud Platform native workload identity | Amazon Web Services
source: https://aws.amazon.com/fr/blogs/security/access-aws-using-a-google-cloud-platform-native-workload-identity/
author:
  - "[[Amazon Web Services]]"
published: 2023-12-22
created: 2025-01-10
description: Organizations undergoing cloud migrations and business transformations often find themselves managing IT operations in hybrid or multicloud environments. This can make it more complex to safeguard workloads, applications, and data, and to securely handle identities and permissions across Amazon Web Services (AWS), hybrid, and multicloud setups. In this post, we show you how to assume […]
tags:
  - clippings
  - article
  - howto
  - aws
---
Organizations undergoing cloud migrations and business transformations often find themselves managing IT operations in hybrid or multicloud environments. This can make it more complex to safeguard workloads, applications, and data, and to securely handle identities and permissions across [Amazon Web Services (AWS)](https://aws.amazon.com/), hybrid, and multicloud setups.

In this post, we show you how to assume an [AWS Identity and Access Management (IAM)](https://aws.amazon.com/iam/) role in your AWS accounts to securely issue temporary credentials for applications that run on the [Google Cloud Platform (GCP)](https://cloud.google.com/). We also present best practices and key considerations in this authentication flow. Furthermore, this post provides references to supplementary GCP documentation that offer additional context and provide steps relevant to setup on GCP.

## Access control across security realms

As your multicloud environment grows, managing access controls across providers becomes more complex. By implementing the right access controls from the beginning, you can help scale your cloud operations effectively without compromising security. When you deploy apps across multiple cloud providers, you should implement a homogenous and consistent authentication and authorization mechanism across both cloud environments, to help maintain a secure and cost-effective environment. In the following sections, you’ll learn how to enforce such objectives across AWS and workloads hosted on GCP, as shown in Figure 1.

![Figure 1: Authentication flow between GCP and AWS](https://d2908q01vomqb2.cloudfront.net/22d200f8670dbdb3e253a90eee5098477c95c23d/2023/12/21/img1-3.png)

Figure 1: Authentication flow between GCP and AWS

## Prerequisites

To follow along with this walkthrough, complete the following prerequisites.

1. [Create a service account in GCP](https://cloud.google.com/iam/docs/service-accounts-create). Resources in GCP use service accounts to make API calls. When you create a GCP resource, such as a compute engine instance in GCP, a [default service account](https://cloud.google.com/iam/docs/service-account-types#default) gets created automatically. Although you can use this default service account in the solution described in this post, we recommend that you create a dedicated user-managed service account, because you can control what permissions to assign to the service account within GCP.

To learn more about best practices for service accounts, see [Best practices for using service accounts](https://cloud.google.com/iam/docs/best-practices-service-accounts) in the Google documentation. In this post, we use a GCP virtual machine (VM) instance for demonstration purposes. To attach service accounts to other GCP resources, see [Attach service accounts to resources](https://cloud.google.com/iam/docs/attach-service-accounts).
2. [Create a VM instance in GCP](https://cloud.google.com/compute/docs/instances/create-start-instance) and attach the service account that you created in Step 1. Resources in GCP store their metadata information in a [metadata server](https://cloud.google.com/compute/docs/metadata/overview), and you can [request an instance’s identity token from the server](https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature). You will use this identity token in the authentication flow later in this post.
3. [Install the AWS Command Line Interface (AWS CLI)](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) on the GCP VM instance that you created in Step 2.
4. Install [jq](https://jqlang.github.io/jq/download/) and [curl](https://curl.se/docs/install.html).

## GCP VM identity authentication flow

Obtaining temporary AWS credentials for workloads that run on GCP is a multi-step process. In this flow, you use the identity token from the GCP compute engine [metadata server](https://cloud.google.com/compute/docs/metadata/overview) to call the [AssumeRoleWithWebIdentity](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html) API to request AWS temporary credentials. This flow gives your application greater flexibility to request credentials for an IAM role that you have configured with a sufficient trust policy, and the corresponding Amazon Resource Name (ARN) for the IAM role must be known to the application.

### Define an IAM role on AWS

Because AWS already supports [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) federation, you can use the OIDC token provided in GCP as described in [Step 2 of the Prerequisites](https://aws.amazon.com/fr/blogs/security/access-aws-using-a-google-cloud-platform-native-workload-identity/#Prerequisites_step2), and you don’t need to create a separate OIDC provider in your AWS account. Instead, to create an IAM role for OIDC federation, follow the steps in [Creating a role for web identity or OpenID Connect Federation (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html). Using an OIDC principal without a condition can be overly permissive. To make sure that only the intended identity provider assumes the role, you need to provide a StringEquals condition in the trust policy for this IAM role. Add the condition keys [accounts.google.com:aud](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_wif-aud), [accounts.google.com:oaud](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_oaud), and [accounts.google.com:sub](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_wif-sub) to the role’s trust policy, as shown in the following.

Make sure to replace the <placeholder values> with your values from the [Google ID Token](https://cloud.google.com/compute/docs/instances/verifying-instance-identity#token_format). The ID token issued for the service accounts has the azp (AUTHORIZED\_PARTY) field set, so condition keys are mapped to the Google ID Token fields as follows:

- accounts.google.com:oaud condition key matches the aud (AUDIENCE) field on the Google ID token.
- accounts.google.com:aud condition key matches the azp (AUTHORIZED\_PARTY) field on the Google ID token.
- accounts.google.com:sub condition key matches the sub (SUBJECT) field on the Google ID token.

For more information about the Google aud and azp fields, see the [Google Identity Platform OpenID Connect](https://developers.google.com/identity/protocols/OpenIDConnect) guide.

### Authentication flow

The authentication flow for the scenario is shown in Figure 2.

![Figure 2: Detailed authentication flow with AssumeRoleWithWebIdentity API](https://d2908q01vomqb2.cloudfront.net/22d200f8670dbdb3e253a90eee5098477c95c23d/2023/12/21/img2-2.png)

Figure 2: Detailed authentication flow with AssumeRoleWithWebIdentity API

The authentication flow has the following steps:

1. On AWS, you [can source external credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sourcing-external.html) by configuring the credential\_process setting in the config file. For the syntax and operating system requirements, see [Source credentials with an external process](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sourcing-external.html). For this post, we have created a custom profile TeamA-S3ReadOnlyAccess as follows in the config file:

To use different settings, you can [create and reference additional profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).
2. Specify a program or a script that credential\_process will invoke. For this post, credential\_process invokes the script /opt/bin/credentials.sh which has the following code. Make sure to replace <111122223333> with your own account ID.

The script performs the following steps:

1. [Google generates a new unique instance identity token](https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature) in the JSON Web Token (JWT) format.

The [payload of the token](https://cloud.google.com/compute/docs/instances/verifying-instance-identity#token_format) includes several details about the instance and the audience URI, as shown in the following.

The IAM trust policy uses the aud (AUDIENCE), azp (AUTHORIZED\_PARTY) and sub (SUBJECT) values from the JWT token to help ensure that the IAM role defined in the section [Define an IAM role in AWS](https://aws.amazon.com/fr/blogs/security/access-aws-using-a-google-cloud-platform-native-workload-identity/#define_IAM_role) can be assumed only by the intended GCP service account.
2. The script invokes the AssumeRoleWithWebIdentity API call, passing in the identity token from the previous step and specifying which IAM role to assume. The script uses the Identity subject claim as the session name, which can facilitate auditing or forensic operations on this AssumeRoleWithWebIdentity API call. [AWS verifies the authenticity of the token](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity) before returning temporary credentials. In addition, you can verify the token in your credential program by using the process described at [Obtaining the instance identity token](https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature).

The script then returns the temporary credentials to the credential\_process as the JSON output on STDOUT; we used jq to parse the output in the desired JSON format.

The following is an example of temporary credentials returned by the credential\_process script:

Note that AWS SDKs store the returned AWS credentials in memory when they call credential\_process. AWS SDKs keep track of the [credential expiration](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html) and generate new AWS session credentials through the credential process. In contrast, the AWS CLI doesn’t cache external process credentials; instead, the AWS CLI calls the credential\_process for every CLI request, which creates a new role session and could result in slight delays when you run commands.

### Test access in the AWS CLI

After you configure the config file for the credential\_process, verify your setup by running the following command.

The output will look similar to the following.

[Amazon CloudTrail](https://aws.amazon.com/cloudtrail/) logs the AssumeRoleWithWebIdentity API call, as shown in Figure 3. The log captures the audience in the identity token as well as the IAM role that is being assumed. It also captures the session name with a reference to the Identity subject claim, which can help simplify auditing or forensic operations on this AssumeRoleWithWebIdentity API call.

![Figure 3: CloudTrail event for AssumeRoleWithWebIdentity API call from GCP VM](https://d2908q01vomqb2.cloudfront.net/22d200f8670dbdb3e253a90eee5098477c95c23d/2023/12/21/img3-1.png)

Figure 3: CloudTrail event for AssumeRoleWithWebIdentity API call from GCP VM

### Test access in the AWS SDK

The next step is to test access in the AWS SDK. The following Python program shows how you can refer to the custom profile configured for the credential process.

Before you run this program, run pip install boto3. Create an IAM role that has the AmazonS3ReadOnlyAccess policy attached to it. This program prints the names of the existing S3 buckets in your account. For example, if your AWS account has two S3 buckets named DOC-EXAMPLE-BUCKET1 and DOC-EXAMPLE-BUCKET2, then the output of the preceding program shows the following:

If you don’t have an existing S3 bucket, then [create an S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) before you run the preceding program.

The list\_bucket API call is also logged in CloudTrail, capturing the identity and source of the calling application, as shown in Figure 4.

![Figure 4: CloudTrail event for S3 API call made with federated identity session](https://d2908q01vomqb2.cloudfront.net/22d200f8670dbdb3e253a90eee5098477c95c23d/2023/12/21/img4-1.png)

Figure 4: CloudTrail event for S3 API call made with federated identity session

## Clean up

If you don’t need to further use the resources that you created for this walkthrough, delete them to avoid future charges for the deployed resources:

- Delete the VM instance and service account created in GCP.
- Delete the resources that you provisioned on AWS to test the solution.

## Conclusion

In this post, you learned how to exchange the identity token of a virtual machine running on a GCP compute engine to assume a role on AWS, so that you can seamlessly and securely access AWS resources from GCP hosted workloads.

We walked you through the steps required to set up the credential process and shared best practices to consider in this authentication flow. You can also apply the same pattern to workloads deployed on GCP functions or Google Kubernetes Engine (GKE) when they request access to AWS resources.

   
If you have feedback about this post, submit comments in the **Comments** section below. If you have questions about this post, [contact AWS Support](https://console.aws.amazon.com/support/home).

**Want more AWS Security news? Follow us on [Twitter](https://twitter.com/AWSsecurityinfo "Twitter").**