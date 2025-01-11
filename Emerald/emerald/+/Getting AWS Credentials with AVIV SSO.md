---
title: Getting AWS Credentials with AVIV SSO - Product and Technology - Confluence
source: https://avivgroup.atlassian.net/wiki/spaces/ProDev/pages/223639024/Getting+AWS+Credentials+with+AVIV+SSO
author: 
published: 
created: 2025-01-09
description: 
tags:
  - access
  - auth
  - confluence
  - doc
related:
  - "[[AWS]]"
  - "[[saml2aws]]"
---
## UI: Login to the AWS Management Console

To log in to the AWS Console, simply navigate to the SSO login page and follow the redirects:

[https://sso.aviv\-group.eu/auth/realms/aviv/protocol/saml/clients/amazon-aws\-iwt](https://sso.aviv-group.eu/auth/realms/aviv/protocol/saml/clients/amazon-aws-iwt "https://sso.aviv-group.eu/auth/realms/aviv/protocol/saml/clients/amazon-aws-iwt")

For detailed step-by-step instructions and background information refer to [AWS Single-Sign-On (SSO) through AVIV](https://avivgroup.atlassian.net/wiki/spaces/ProDev/pages/223634801 "/wiki/spaces/ProDev/pages/223634801").

## CLI: Get an AWS STS token via AVIV SSO (Keycloak) – using saml2aws

## Install [saml2aws](https://github.com/Versent/saml2aws "https://github.com/Versent/saml2aws")

See the official project for the latest installation instructions: [https://github.com/Versent/saml2aws](https://github.com/Versent/saml2aws "https://github.com/Versent/saml2aws")

macOS

`# saml2aws depends on awsclibrew install awscli brew install saml2aws`

Windows

`# If you do not want to use the Chocolatey package manager# Download the smal2aws binary (https://github.com/Versent/saml2aws/releases)# and add the binary path to the Windows PATH environemnt variable# saml2aws depends on awsclichoco install awscli choco install saml2aws`

Linux

==Depends== on your distribution �� Do not forget to install the AWS CLI!

`# Without package managerCURRENT_VERSION=$(curl -Ls https://api.github.com/repos/Versent/saml2aws/releases/latest |grep'tag_name'|cut -d'v' -f2 |cut -d'"' -f1)wget -c https://github.com/Versent/saml2aws/releases/download/v${CURRENT_VERSION}/saml2aws_${CURRENT_VERSION}_linux_amd64.tar.gz -O - |tar -xzv -C ~/.local/bin chmod u+x ~/.local/bin/saml2aws hash -r saml2aws --version`

## Configure [[saml2aws]]

This code snippet configures saml2aws profiles for all assumeable IAM roles

- iwt-sso-asp (IWT\_SSO\_AccountSpecificPermissions\_role)
- iwt-sso-ro (IWT\_SSO\_GlobalReadOnly\_role)
- iwt-sso-pga (IWT_SSO_PlaygroundsAdmin_role)

> [!NOTE] copy&paste
> Of course, other profile names can be chosen (For a quick copy-paste configuration, pre-selected profile names make things easier)

For the role IWT\_SSO\_GlobalReadOnly\_role you can **extend your session to 8 hours,** using the option `--session-duration 28800` within the `configure` command

```bash
# Global parameters
REGION="eu-central-1"
URL="https://sso.aviv-group.eu/auth/realms/aviv/protocol/saml/clients/amazon-aws-iwt?kc_idp_hint=aviv-sso-iw"

# IWT_SSO_AccountSpecificPermissions_role
PROFILE="iwt-sso-asp"
ROLE="arn:aws:iam::260451525041:role/aviv-sso/IWT_SSO_AccountSpecificPermissions_role"

# IWT_SSO_GlobalReadOnly_role
PROFILE="iwt-sso-ro"
ROLE="arn:aws:iam::260451525041:role/aviv-sso/IWT_SSO_GlobalReadOnly_role"

# IWT_SSO_PlaygroundsAdmin_role
PROFILE="iwt-sso-pga"
ROLE="arn:aws:iam::260451525041:role/aviv-sso/IWT_SSO_PlaygroundsAdmin_role"

# Express lane (without prompt conformation)
saml2aws configure --skip-prompt --idp-provider Browser --idp-account "${PROFILE}" --role "${ROLE}" --region "${REGION}" --url "${URL}" --profile "${PROFILE}" --session-duration 28800

# Slow lane ;)
# saml2aws configure --idp-provider Browser --idp-account "${PROFILE}" --role "${ROLE}" --region "${REGION}" --url "${URL}" --profile "${PROFILE}"
```
## Get AWS STS credentials

The following command retrieves AWS STS credentials for one of the above-created smal2aws profiles.

```bash
# Configured saml2aws profiles
# 
# iwt-sso-asp (IWT_SSO_AccountSpecificPermissions_role)
# iwt-sso-ro (IWT_SSO_GlobalReadOnly_role)
# iwt-sso-pga (IWT_SSO_PlaygroundsAdmin_role)

saml2aws login --skip-prompt -a ${SAML2AWS_PROFILE}
```

If a saml2aws default profile was **configured**, the profile option can be omitted.

```bash
## To login with the default profile use
saml2aws login --skip-prompt
# To refresh credentials even if not expired
saml2aws login --skip-prompt --forceml2aws login --skip-prompt
# To refresh credentials even if not expired
saml2aws login --skip-prompt --force
```

This will open a browser window that will ask for your Active Directory credentials and stores the received AWS credentials inside your `~/.aws/credential` file with the specified profile.

For more complex use-cases take a look at the [Documentation](https://github.com/Versent/saml2aws "https://github.com/Versent/saml2aws")

### AWS CLI sample configuration for a team-specific read-only role

#### ~/.aws/config
```bash
# Profile name can be chosen individually!
[profile ${TEAM_NAME}-dev-ro]region = eu-central-1
```
#### ~/.aws/credentials
```bash
# Profile name must be the same as chosen in ~/.aws/config
# The source profile must be able to assume the configured role!

[${TEAM_NAME}-dev-ro]
role_arn       = arn:aws:iam::${AWS_ACCOUNT_ID}:role/ReadOnlyAccess-Role
source_profile = iwt-sso-ro
```