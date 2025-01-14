---
title: gcloud compute execute command remotely
source: https://stackoverflow.com/questions/39098341/gcloud-compute-execute-command-remotely
author:
  - "[[Stack Overflow]]"
published: 2016-08-23
created: 2025-01-13
description: Currently, if I want to execute something on a VM, I copy files over like this:gcloud compute --project &lt;project_id&gt; copy-files --zone &lt;zone_name&gt; /home/roman/source/dir roman@&lt;vm_...
tags:
  - clippings
  - gcloud
related:
  - "[[gcloud CLI]]"
  - "[[gcloud]]"
---
Currently, if I want to execute something on a VM, I copy files over like this:

```
gcloud compute --project <project_id> copy-files --zone <zone_name> /home/roman/source/dir roman@<vm_name>:/some/path
```

Then I need to SSH into it manually like this:

```
gcloud compute --project <project_id> ssh --zone <zone_name> <vm_name>
```

And then go and run some command:

```
cd /some/path
python example.py
```

How do I combine step 2 and 3 together and execute a command remotely?

Note: I want to use gcloud or the python api. I don't want to use 3rd party packages like Fabric.

asked Aug 23, 2016 at 10:13

[

![Roman's user avatar](https://i.sstatic.net/myqs7.jpg?s=64)

](https://stackoverflow.com/users/3421652/roman)

```
$ gcloud compute ssh --zone ZONE INSTANCE -- 'cd /tmp && python some.py'
```

From `gcloud compute ssh --help`:

```
 [-- IMPLEMENTATION-ARGS ...]
    Flags and positionals passed to the underlying ssh implementation.

    The '--' argument must be specified between gcloud specific args on the
    left and IMPLEMENTATION-ARGS on the right. Example:

        $ gcloud compute ssh example-instance --zone us-central1-a -- -vvv \
            -L 80:%INSTANCE%:80
```

answered Aug 23, 2016 at 15:10

[

![Zachary Newman's user avatar](https://lh6.googleusercontent.com/-eotxc8Z9h68/AAAAAAAAAAI/AAAAAAAAAEY/yFvQ6DayB3M/photo.jpg?sz=64)

](https://stackoverflow.com/users/4922212/zachary-newman)

[Zachary Newman](https://stackoverflow.com/users/4922212/zachary-newman)Zachary Newman

21.3k4 gold badges40 silver badges37 bronze badges

2

A gcloud update that landed a week ago blocked passing ssh commands after '--' and effectively forces use of `--command` option for this. In this case use:

`gcloud compute ssh --zone ZONE INSTANCE --command 'cd /tmp && python some.py'`.

answered May 10, 2017 at 19:06

[

![Doru C.'s user avatar](https://www.gravatar.com/avatar/474f366179afa508313d8b30bdcea803?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/4609056/doru-c)

[Doru C.](https://stackoverflow.com/users/4609056/doru-c)Doru C.

9009 silver badges7 bronze badges

Did it with a bit of a tangent; using the normal ssh client instead of `gcloud compute`:

```
ssh -i ~/.ssh/google_compute_engine roman@<vm_IP> 'python /some/path/example.py'
```

The gcloud ssh key is located at `~/.ssh/google_compute_engine`, which it uses. It also requires the external IP address of the instance instead of its name.

answered Aug 23, 2016 at 11:07

[

![Roman's user avatar](https://i.sstatic.net/myqs7.jpg?s=64)

](https://stackoverflow.com/users/3421652/roman)

[Roman](https://stackoverflow.com/users/3421652/roman)Roman

9,42110 gold badges70 silver badges110 bronze badges

2