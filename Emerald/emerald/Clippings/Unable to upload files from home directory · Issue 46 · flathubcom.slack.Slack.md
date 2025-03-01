---
title: "Unable to upload files from home directory · Issue #46 · flathub/com.slack.Slack"
source: https://github.com/flathub/com.slack.Slack/issues/46
author:
  - "[[github]]"
published: 
created: 2025-01-16
description: "The current sandbox permissions does not include home, which means that it is impossible to upload files from say ~/workspace. Only specific folders like Documents or Downloads are included in the permissions right now. Expected: That I ..."
tags:
  - error
  - issue
  - github
  - slack
related:
  - "[[Slack]]"
---
## Description

![@lentzi90](https://avatars.githubusercontent.com/u/9117693?u=21b22fb60ea54a66d0453203cea1d9643e43d8a2&v=4&size=48)

The current [sandbox permissions](https://github.com/flathub/com.slack.Slack/blob/master/com.slack.Slack.json#L16) does not include `home`, which means that it is impossible to upload files from say `~/workspace`. Only specific folders like `Documents` or `Downloads` are included in the permissions right now.

**Expected:** That I can upload a file from `~/workspace`.

**Actual:** Uploading fails with a message about the file type not being supported. If I move the file to `~/Documents` and retry, it works without problem.  
This is for drag and drop. If you instead try to use the file chooser, you won't be able to see or open all folders, only those currently covered in the filesystem sandbox permissions.
