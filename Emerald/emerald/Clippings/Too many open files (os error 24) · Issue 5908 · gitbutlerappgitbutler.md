---
source: https://github.com/gitbutlerapp/gitbutler/issues/5908
created: 2025-02-04
related:
  - "[[git]]"
  - "[[git butler]]"
  - "[[Too many open files (os error 24) · Issue 5908 · gitbutlerappgitbutler]]"
  - "[[Errno 24 Too many open files...]]"
tags:
  - git-butler
---
Thanks a lot for reporting, and I am glad `git gc` fixed it!

When traversing Git commit graphs and reading objects, pack files will have to be mapped which takes away file handles. `git2` will fail, but `gitoxide` should eventually be able to unmap less recently used pack files to free file handles, and have a better chance of working around that problem.

There are also no-win scenarios where the file handle limit is too low to get the work done, and maybe there could also be a way to warn about it if the issue arises, or at least point out possible solutions more clearly in the user interface as certain classes of errors are hit.