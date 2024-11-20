---
title: "Git sign off previous commits?"
source: "https://stackoverflow.com/questions/13043357/git-sign-off-previous-commits"
author:
  - "[[Stack Overflow]]"
published: 2012-10-24
created: 2024-11-20
description: "I was wondering how to sign(-s) off previous commits that I have made in the past in git?CLARIFICATION: Git has confusingly similarly named conceptsgit commit -s, --signoff (lower case -s) and git"
tags:
  - "clippings"
---
To signoff the previous commit, use amend option:

```bash
git commit --amend --signoff
```

Since [Git 2.13](https://github.com/git/git/blob/master/Documentation/RelNotes/2.13.0.txt), you can use the `--signoff` rebase option to specify range of commits to signoff (credits to [@sschuberth](https://stackoverflow.com/users/1127485/sschuberth)). Example to signoff last two commits:

```bash
git rebase --signoff HEAD~2
```

To signoff multiple commits using Git prior to version 2.13, use `filter-branch` and `interpret-trailers` as suggested by [@vonc](https://stackoverflow.com/users/6309/vonc) et. al. Here is what worked for me.

First, configure git to replace the token `sign` by `Signed-off-by`. This has to be done only once and is needed in the next step.

```bash
git config trailer.sign.key "Signed-off-by"
```

The command `git filter-branch` with the switch `--msg-filter` will eval the filter once for each commit. The filter can be any shell command that receives the commit message on stdin and outputs on stdout. You can write your own filter, or use `git interpret-trailers`, which is indepotent. Here is an example that will signoff the latest two commits of the current branch using the current user and email:

```bash
export SIGNOFF="sign: $(git config --get user.name) <$(git config --get user.email)>"
git filter-branch -f --msg-filter \
    "git interpret-trailers --trailer \"$SIGNOFF\"" \
     HEAD~2..HEAD
```

Note 1) Modifying commit messages change the commit id, which means pushing over already published branches will have to be forced either with `--force` or better [\--force-with-lease](https://blog.developer.atlassian.com/force-with-lease/).

Note 2) if you intend to write your custom script, beware that `git filter-branch` changes the current directory to `<repo>/.git-rewrite/t`. Using a relative path to the script won't usually work. Instead, the script should be in your `$PATH` or provided as an absolute path.