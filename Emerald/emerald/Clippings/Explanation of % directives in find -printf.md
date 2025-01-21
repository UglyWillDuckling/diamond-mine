---
title: Explanation of % directives in find -printf
source: https://unix.stackexchange.com/questions/215234/explanation-of-directives-in-find-printf#215236
author:
  - "[[Unix & Linux Stack Exchange]]"
published: 2015-07-11
created: 2025-01-20
description: |-
  find /tmp -printf '%s %p
  ' |sort -n -r | headThis command is working fine but what are the %s %p options used here? Are there any other options that can be used?
tags:
  - clippings
  - find
  - howto
related:
  - "[[Find Command]]"
---
**example**
```bash
find /tmp -printf '%s %p\n' |sort -n -r | head
```

### options

> **%s** File's size in bytes.
> 
> **%p** File's name.

> **%n** Number of hard links to file.
> 
> **%p** File's name.
> 
> **%P** File's name with the name of the starting-point under which it was found removed.
> 
> **%s** File's size in bytes.
> 
> **%t** File's last modification time in the format returned by the C \`ctime' function.
