---
author: 
created: 2025-04-10
published: 
source: https://samuelmullen.com/articles/using-vimdiff-with-git-diff
tags:
  - howto/vim
  - howto/git
---
While perusing the post, “ [A few of my Git tricks, tips and workflows](http://nuclearsquid.com/writings/git-tricks-tips-workflows.html) ” I saw the author output his git diff information to an external tool. I wanted to do the same thing, but to vimdiff. After a very short googling, I ran across the following solution on [StackOverflow](http://stackoverflow.com/):

```bash
git config --global diff.tool vimdiff
git config --global difftool.prompt false
git config --global alias.d difftool[/code]
```

Setting it up this way allows you to use “git diff” as normal, but if you want see the diff in Vim, use “git d” instead of “git diff”.

- [Git and Vimdiff](http://usevim.com/2012/03/21/git-and-vimdiff/)
- [http://nuclearsquid.com/writings/git-tricks-tips-workflows.html](http://nuclearsquid.com/writings/git-tricks-tips-workflows.html)
- [http://stackoverflow.com/questions/3713765/viewing-all-git-diffs-with-vimdiff](http://stackoverflow.com/questions/3713765/viewing-all-git-diffs-with-vimdiff)