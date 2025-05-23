---
source: https://forums.docker.com/t/error-failed-to-solve-error-getting-credentials-err-exit-status-1-out/136124
author:
  - "[[Docker Community Forums]]"
published: 2023-05-20
created: 2025-01-18
tags:
  - error
  - author
related:
  - "[[Docker]]"
---
![[~/×/d558e07f5d90c2ec6a194b180bd4384f_MD5.png]]

I recently installed Docker on my Mac air m2.  
I was following the documentation for docker [setup](https://docs.docker.com/get-started/02_our_app/) but I am facing the error while building the application

```markdown
[+] Building 3.6s (2/3)                                                         
[+] Building 3.7s (3/3) FINISHED                                                
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 2B                                            0.0s
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 281B                                       0.0s
 => ERROR resolve image config for docker.io/docker/dockerfile:1           3.7st
------
 > resolve image config for docker.io/docker/dockerfile:1:
------
Dockerfile:1
--------------------
   1 | >>> # syntax=docker/dockerfile:1
   2 |     
   3 |     FROM node:18-alpine
--------------------
ERROR: failed to solve: error getting credentials - err: exit status 1, out: \`\`
```

I have logged in using the `docker login` command and it was successful. I even tried to turn off build kits but there was no change in the error.  
Can anyone please share a resolution for this.

Check your client config file: `$HOME/.docker/config.json`. You should find something like this in that file:

```json
"credsStore": "desktop",
```

or any other credStore. If it is not “desktop”, you can try to change it. This is what I use. I think the previous one was “osxkeychain”.

Some other ideas:

If you log in via SSH, you might need to unlock the keychain manually, however I don’t think that is what the error message indicates, but you can try it

```bash
security -v unlock-keychain ~/Library/Keychains/login.keychain-db
```

Another credentialrelated recent issue was when someone started to use “sudo” in front of the docker command. Docker Desktop is running on behalf of your non-root user so you don’t need sudo and that would use the credentials of the root user. In that case sudo seemed required only because somehow the docker cli was not executable without that and we had to fix it.

The config files contains the value desktop only.  
If I run docker build without sudo it gives me permission error  
`ERROR: open /Users/vineeth/.docker/buildx/activity/default: permission denied ` .  
When I run using sudo the process stops with the same error I posted earlier. Is there any other way to solve this?

This is the topic I mentioned before

Try what I described there to make the docker command executable again.

Out of curiosity, did you install Docker Desktop as root? I know HomeBrew can also install Docker desktop but if you run it as root it might break the file permissions at least from your non-root user’s point of view.

**update:**  
Of course you have a different permission issue. Sorry I answered too quickly. So just make the docker folder writable by you like this:

```bash
sudo chown -R $(id -u):$(id -g) $HOME/.docker
```

Thank you! You saved my last an hour.

MacOS - I just had to change the docker config file.  
The “credsStore” was “desktop” and changed it to “osxkeychain”.  
used nano to do it. sudo nano ~/.docker/config.json

This worked for me on macos! Thank you!

It don’t work for me on my MACOS.

I just executed: security -v unlock-keychain ~/Library/Keychains/login.keychain-db

And unlocking keychain helped? For me it was required only when I SSH-d into my MacBook from another machine.

Worked as well for me, thank you very much!

I have to say this has been a useful post. Thank you! Worked for me!

```apache
catosecurity Aug 2023
```

This worked for me as well – thanks!

Yeah it works for me!!! Thanks very much!

That works for me! I was getting this error and I changed my dockerfile a lot of times

It worked for me! thank you!!

Changing to osxkeychain in config did the job for me. Thanks

Thanks. It worked for me.