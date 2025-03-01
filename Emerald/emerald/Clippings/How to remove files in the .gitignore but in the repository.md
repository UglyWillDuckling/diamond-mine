---
created: 2025-02-19
published: 2012-11-24
source: https://stackoverflow.com/questions/13541615/how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor#13541721
tags:
  - howto/git/ignore
---
You can remove them from the repository **manually**:

`git rm --cached file1 file2 dir/file3`

**Or**, if you have a lot of files:

```bash
git rm --cached `git ls-files -i -c --exclude-from=.gitignore`
```
___
- [x] remind me (@[[2025-02-25]] 11:09)
- [ ] monthly (@[[2025-03-17]])
