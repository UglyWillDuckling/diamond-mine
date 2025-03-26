---
date: 2025-02-21T10:16:00
related:
  - "[[Error 24 - unix]]"
---
#issue/gitbutler 

about:: [[git butler]]
caused_by:: [[inotify max_user_instances]]
when:: [[2025-02-21]]
___
## fix

The fix was to increase the [[inotify]] limit. The limit was set to 128.

Updated to **10240**
```bash
echo 10240 | sudo tee /proc/sys/fs/inotify/max_user_instances
```