#howto/git

- [x] reminder [[how to git revert on a specific file]] (@2025-11-03)
- [ ] reminder [[how to git revert on a specific file]]  (@2025-11-28)
___

Reverting a File to a Previous Commit
To revert a file to a specific version from a previous commit:

Check the commit history: Use git log to view the commit history of the file and identify the commit hash.

git log `<filename>`
Revert the file: Use git checkout or git restore to replace the current version of the file with the version from the specified commit.

git checkout `<commit-hash> <filename>`
**or**
git restore --source=`<commit-hash> <filename>`
Commit the change: After reverting the file, stage and commit the changes to record the reversion.

git commit -m "Revert `<filename>` to `<commit-hash>`"
To revert style.css to a previous commit (for example, commit hash a1b2c3d):

```sh
git log style.css
git checkout a1b2c3d style.css
git commit -m "Revert style.css to a1b2c3d"
```