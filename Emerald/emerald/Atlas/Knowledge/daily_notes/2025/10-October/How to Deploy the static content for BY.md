---
tags:
---
## Intro

This document contains the steps required for updating the static assets version for MALegacy apps

## Summary

Updating the static version requires you to update 2 repositories, these are [https://github.com/MeilleursAgents/asg-apps-k8s](https://github.com/MeilleursAgents/asg-apps-k8s) and [https://github.com/MeilleursAgents/MeilleursAgents](https://github.com/MeilleursAgents/MeilleursAgents) .

The files have to be updated, changed, and deployed in sequence to prevent issues.

The static version will usually be the current one plus 1(+1).

Example: from3.26.0 to 3.27.0

## **Files that require updating**

[https://github.com/MeilleursAgents/MeilleursAgents](https://github.com/MeilleursAgents/MeilleursAgents)

-   MALegacy/config/config.common.inc

`define('APP_STATIC_VERSION', '3.27.12');`

[https://github.com/MeilleursAgents/asg-apps-k8s](https://github.com/MeilleursAgents/asg-apps-k8s)

-   fr/web/dev/malegacy.yaml
-   fr/web/prod/malegacy.yaml
   
`APP_STATIC_VERSION: '3.27.12'`

## Steps to update

1.  update config/config.common.inc in the **MALegacy** directory with the new static version
2.  update **k8s** static versions with the new static version
    1.  fr/web/dev/malegacy.yaml
    2.  fr/web/prod/malegacy.yaml
3.  make **PR** on [https://github.com/MeilleursAgents/MeilleursAgents](https://github.com/MeilleursAgents/MeilleursAgents)
4.  make **PR** on [https://github.com/MeilleursAgents/asg-apps-k8s](https://github.com/MeilleursAgents/asg-apps-k8s)
    
5.  merge and deploy **k8s**
6.  merge and deploy the legacy apps
   
## Important!

-   The **k8s** repo needs to be updated **before** the rest of the applications
	-   Updating the static versions on **k8s** will result in new assets getting **built** which the other apps can then use
-   The assets are built separately for each environment
