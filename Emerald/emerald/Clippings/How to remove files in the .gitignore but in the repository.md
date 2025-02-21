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

`git rm --cached \`git ls-files -i -c --exclude-from=.gitignore\``

```
git rm --cached \`git ls-files -i -c --exclude-from=.gitignore\`
```

But this doesn't seem to work in Git Bash on Windows. It produces an error message. The following works better (-d '\n' to split input line by line):

git ls-files -i -c --exclude-from=.gitignore | xargs -d '\n' git rm --cached  
If you are using PowerShell on Windows this works too (handles spaces in path and filenames):

git ls-files -i -c --exclude-from=.gitignore | %{git rm --cached $_}
Regarding rewriting the whole history without these files, I highly doubt there's an automatic way to do it.
And we all know that rewriting the history is bad, don't we? :)

___
- [ ] remind me (@[[2025-02-24]])
