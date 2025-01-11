---
title: "Versent/saml2aws: CLI tool which enables you to login and retrieve AWS temporary credentials using a SAML IDP"
source: https://github.com/Versent/saml2aws/issues/1203
author:
  - "[[GitHub]]"
published: 
created: 2025-01-09
description: CLI tool which enables you to login and retrieve AWS temporary credentials using a SAML IDP - Versent/saml2aws
tags:
  - clippings
  - error
related:
  - "[[AWS]]"
  - "[[saml2aws]]"
  - "[[connect to AWS locally]]"
---
## OBSERVED BEHAVIOR

Firefox is launched, but no page shows up. After 2 to 3s firefox closes itself.

[Here is a video showing the behavior](https://we.tl/t-PdAJjTXTdI)

## HOW TO REPRODUCE

system

```
firefox 121.0.1 (64-bit)
sonoma 14.2.1 (23C71) on macbookpro m3 max
```

saml2aws config:

```
[default]
name                 = default
app_id               =
url                  = https://accounts.google.com/AccountChooser/signinchooser?...
provider             = Browser
mfa                  = Auto
aws_urn              = urn:amazon:webservices
aws_session_duration = 43200
aws_profile          = whatever
download_browser_driver = true
```

cmde:

```rb
SAML2AWS_BROWSER_TYPE=firefox  SAML2AWS_BROWSER_EXECUTABLE_PATH=/opt/homebrew/bin/firefox  saml2aws login
```

output:

```
SAML2AWS_BROWSER_TYPE=firefox  SAML2AWS_BROWSER_EXECUTABLE_PATH=/Applications/Firefox.app/Contents/MacOS/firefox saml2aws --verbose login
DEBU[0000] Running                                       command=login
DEBU[0000] Check if creds exist.                         command=login
DEBU[0000] Expand                                        name=/Users/rmasclef/.aws/credentials pkg=awsconfig
DEBU[0000] resolveSymlink                                name=/Users/rmasclef/.aws/credentials pkg=awsconfig
DEBU[0000] ensureConfigExists                            filename=/Users/rmasclef/.aws/credentials pkg=awsconfig
Using IdP Account default to access Browser https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Faccounts.google.com%2Fo%2Fsaml2%2Finitsso%3Fidpid%3DC04hk6d4h%26spid%3D573628210997%26forceauthn%3Dfalse%26from_login%3D1%26as%3DjVuni5VWJF_D1Ro7vKDp24fsh3Sqwxuue6E-TohK2OU&ltmpl=popup&btmpl=authsub&scc=1&oauth=1&flowName=GlifWebSignIn&flowEntry=AccountChooser
DEBU[0000] Get credentials                               helper=osxkeychain serverURL="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Faccounts.google.com%2Fo%2Fsaml2%2Finitsso%3Fidpid%3DC04hk6d4h%26spid%3D573628210997%26forceauthn%3Dfalse%26from_login%3D1%26as%3DjVuni5VWJF_D1Ro7vKDp24fsh3Sqwxuue6E-TohK2OU&ltmpl=popup&btmpl=authsub&scc=1&oauth=1&flowName=GlifWebSignIn&flowEntry=AccountChooser"
DEBU[0000] Get credentials                               helper=osxkeychain user=
To use saved password just hit enter.
? Username
? Password

DEBU[0001] building provider                             command=login idpAccount="account {\n  URL: https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Faccounts.google.com%2Fo%2Fsaml2%2Finitsso%3Fidpid%3DC04hk6d4h%26spid%3D573628210997%26forceauthn%3Dfalse%26from_login%3D1%26as%3DjVuni5VWJF_D1Ro7vKDp24fsh3Sqwxuue6E-TohK2OU&ltmpl=popup&btmpl=authsub&scc=1&oauth=1&flowName=GlifWebSignIn&flowEntry=AccountChooser\n  Username: \n  Provider: Browser\n  MFA: Auto\n  SkipVerify: false\n  AmazonWebservicesURN: urn:amazon:webservices\n  SessionDuration: 43200\n  Profile: rzc-google\n  RoleARN: \n  Region: \n}"
Authenticating as  ...
INFO[0002] Setting browser type: firefox                 provider=browser
INFO[0002] Setting browser executable path: /Applications/Firefox.app/Contents/MacOS/firefox  provider=browser
could not send message: Browser closed.
==================== Browser output: ====================
<launching> /Applications/Firefox.app/Contents/MacOS/firefox -no-remote -wait-for-browser -foreground -profile /var/folders/km/qbnnqyrs6g92mrrqstg2gk8r0000gn/T/playwright_firefoxdev_profile-Vu72Hh -juggler-pipe -silent
<launched> pid=27368
[pid=27368] <process did exit: exitCode=0, signal=null>
[pid=27368] starting temporary directories cleanup
=========================== logs ===========================
<launching> /Applications/Firefox.app/Contents/MacOS/firefox -no-remote -wait-for-browser -foreground -profile /var/folders/km/qbnnqyrs6g92mrrqstg2gk8r0000gn/T/playwright_firefoxdev_profile-Vu72Hh -juggler-pipe -silent
<launched> pid=27368
[pid=27368] <process did exit: exitCode=0, signal=null>
[pid=27368] starting temporary directories cleanup
============================================================
Error authenticating to IdP.
github.com/versent/saml2aws/v2/cmd/saml2aws/commands.Login
	github.com/versent/saml2aws/v2/cmd/saml2aws/commands/login.go:109
main.main
	github.com/versent/saml2aws/v2/cmd/saml2aws/main.go:195
runtime.main
	runtime/proc.go:267
runtime.goexit
	runtime/asm_arm64.s:1197
```

## NOTES

I launched saml2aws on Golang using step by step debug mode and here is the error message that is not logged by saml2aws occuring here : [https://github.com/Versent/saml2aws/blob/master/pkg/provider/browser/browser.go#L109](https://github.com/Versent/saml2aws/blob/master/pkg/provider/browser/browser.go#L109)

```
TargetClosedError: Target page, context or browser has been closed
Browser logs:

<launching> /opt/homebrew/bin/firefox -no-remote -wait-for-browser -foreground -profile /var/folders/km/qbnnqyrs6g92mrrqstg2gk8r0000gn/T/playwright_firefoxdev_profile-rKSlWy -juggler-pipe -silent
<launched> pid=27235
[pid=27235] <process did exit: exitCode=0, signal=null>
[pid=27235] starting temporary directories cleanup
    at DispatcherConnection.dispatch (/Users/rmasclef/Library/Caches/ms-playwright-go/1.40.1/package/lib/server/dispatchers/dispatcher.js:364:15)
```

---

I genuinely don't know how to dig more at this stage 😬

Let me know if I can help on anything 👍