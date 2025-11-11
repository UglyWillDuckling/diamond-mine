---
author:
  - "[[hemanth]]"
  - "[[Amend author.]]"
  - "[[Reset author]]"
  - "[[after author has been changed in the global config.]]"
  - "[[Show the author]]"
  - "[[time and last revision made to each line of a given file]]"
  - "[[Group commits by authors and title]]"
  - "[[Show how many lines does an author contribute]]"
  - "[[Exclude author from logs]]"
created: 2025-10-07
published:
source: https://github.com/git-tips/tips
tags:
  - howto/git
  - tips/git
---

> Collection of `git-tips`, want to add your tips? Checkout [contributing.md](https://github.com/git-tips/tips/blob/master/contributing.md)

### Tools:

- [git-tip](https://www.npmjs.com/package/git-tip) - A handy CLI to make optimum use of these tips. ([Here in Docker container](https://github.com/djoudi5/docker-git-tip))

P.S: All these commands are tested on `git version 2.7.4 (Apple Git-66)`.

- [Everyday Git in twenty commands or so](https://github.com/git-tips/#everyday-git-in-twenty-commands-or-so)
- [Show helpful guides that come with Git](https://github.com/git-tips/#show-helpful-guides-that-come-with-git)
- [Search change by content](https://github.com/git-tips/#search-change-by-content)
- [Show changes over time for specific file](https://github.com/git-tips/#show-changes-over-time-for-specific-file)
- [Remove sensitive data from history, after a push](https://github.com/git-tips/#remove-sensitive-data-from-history-after-a-push)
- [Sync with remote, overwrite local changes](https://github.com/git-tips/#sync-with-remote-overwrite-local-changes)
- [List of all files till a commit](https://github.com/git-tips/#list-of-all-files-till-a-commit)
- [Git reset first commit](https://github.com/git-tips/#git-reset-first-commit)
- [Reset: preserve uncommitted local changes](https://github.com/git-tips/#reset-preserve-uncommitted-local-changes)
- [List all the conflicted files](https://github.com/git-tips/#list-all-the-conflicted-files)
- [List of all files changed in a commit](https://github.com/git-tips/#list-of-all-files-changed-in-a-commit)
- [Unstaged changes since last commit](https://github.com/git-tips/#unstaged-changes-since-last-commit)
- [Changes staged for commit](https://github.com/git-tips/#changes-staged-for-commit)
- [Show both staged and unstaged changes](https://github.com/git-tips/#show-both-staged-and-unstaged-changes)
- [List all branches that are already merged into master](https://github.com/git-tips/#list-all-branches-that-are-already-merged-into-master)
- [Quickly switch to the previous branch](https://github.com/git-tips/#quickly-switch-to-the-previous-branch)
- [Remove branches that have already been merged with master](https://github.com/git-tips/#remove-branches-that-have-already-been-merged-with-master)
- [List all branches and their upstreams, as well as last commit on branch](https://github.com/git-tips/#list-all-branches-and-their-upstreams-as-well-as-last-commit-on-branch)
- [Track upstream branch](https://github.com/git-tips/#track-upstream-branch)
- [Delete local branch](https://github.com/git-tips/#delete-local-branch)
- [Delete remote branch](https://github.com/git-tips/#delete-remote-branch)
- [Create local tag](https://github.com/git-tips/#create-local-tag)
- [Delete local tag](https://github.com/git-tips/#delete-local-tag)
- [Delete remote tag](https://github.com/git-tips/#delete-remote-tag)
- [Undo local changes with the last content in head](https://github.com/git-tips/#undo-local-changes-with-the-last-content-in-head)
- [Revert: Undo a commit by creating a new commit](https://github.com/git-tips/#revert-undo-a-commit-by-creating-a-new-commit)
- [Reset: Discard commits, advised for private branch](https://github.com/git-tips/#reset-discard-commits-advised-for-private-branch)
- [Reword the previous commit message](https://github.com/git-tips/#reword-the-previous-commit-message)
- [See commit history for just the current branch](https://github.com/git-tips/#see-commit-history-for-just-the-current-branch)
- [Changing a remote's URL](https://github.com/git-tips/#changing-a-remotes-url)
- [Get list of all remote references](https://github.com/git-tips/#get-list-of-all-remote-references)
- [Get list of all local and remote branches](https://github.com/git-tips/#get-list-of-all-local-and-remote-branches)
- [Get only remote branches](https://github.com/git-tips/#get-only-remote-branches)
- [Stage parts of a changed file, instead of the entire file](https://github.com/git-tips/#stage-parts-of-a-changed-file-instead-of-the-entire-file)
- [Get git bash completion](https://github.com/git-tips/#get-git-bash-completion)
- [What changed since two weeks?](https://github.com/git-tips/#what-changed-since-two-weeks)
- [See all commits made since forking from master](https://github.com/git-tips/#see-all-commits-made-since-forking-from-master)
- [Pick commits across branches using cherry-pick](https://github.com/git-tips/#pick-commits-across-branches-using-cherry-pick)
- [Find out branches containing commit-hash](https://github.com/git-tips/#find-out-branches-containing-commit-hash)
- [Git Aliases](https://github.com/git-tips/#git-aliases)
- [Saving current state of tracked files without commiting](https://github.com/git-tips/#saving-current-state-of-tracked-files-without-commiting)
- [Saving current state of unstaged changes to tracked files](https://github.com/git-tips/#saving-current-state-of-unstaged-changes-to-tracked-files)
- [Saving current state including untracked files](https://github.com/git-tips/#saving-current-state-including-untracked-files)
- [Saving current state with message](https://github.com/git-tips/#saving-current-state-with-message)
- [Saving current state of all files (ignored, untracked, and tracked)](https://github.com/git-tips/#saving-current-state-of-all-files-ignored-untracked-and-tracked)
- [Show list of all saved stashes](https://github.com/git-tips/#show-list-of-all-saved-stashes)
- [Show the contents of any stash in patch form](https://github.com/git-tips/#show-the-contents-of-any-stash-in-patch-form)
- [Apply any stash without deleting from the stashed list](https://github.com/git-tips/#apply-any-stash-without-deleting-from-the-stashed-list)
- [Apply last stashed state and delete it from stashed list](https://github.com/git-tips/#apply-last-stashed-state-and-delete-it-from-stashed-list)
- [Delete all stored stashes](https://github.com/git-tips/#delete-all-stored-stashes)
- [Grab a single file from a stash](https://github.com/git-tips/#grab-a-single-file-from-a-stash)
- [Show all tracked files](https://github.com/git-tips/#show-all-tracked-files)
- [Show all untracked files](https://github.com/git-tips/#show-all-untracked-files)
- [Show all ignored files](https://github.com/git-tips/#show-all-ignored-files)
- [Create new working tree from a repository (git 2.5)](https://github.com/git-tips/#create-new-working-tree-from-a-repository-git-25)
- [Create new working tree from HEAD state](https://github.com/git-tips/#create-new-working-tree-from-head-state)
- [Untrack files without deleting](https://github.com/git-tips/#untrack-files-without-deleting)
- [Before deleting untracked files/directory, do a dry run to get the list of these files/directories](https://github.com/git-tips/#before-deleting-untracked-filesdirectory-do-a-dry-run-to-get-the-list-of-these-filesdirectories)
- [Forcefully remove untracked files](https://github.com/git-tips/#forcefully-remove-untracked-files)
- [Forcefully remove untracked directory](https://github.com/git-tips/#forcefully-remove-untracked-directory)
- [Update all the submodules](https://github.com/git-tips/#update-all-the-submodules)
- [Show all commits in the current branch yet to be merged to master](https://github.com/git-tips/#show-all-commits-in-the-current-branch-yet-to-be-merged-to-master)
- [Rename a branch](https://github.com/git-tips/#rename-a-branch)
- [Rebases 'feature' to 'master' and merges it in to master](https://github.com/git-tips/#rebases-feature-to-master-and-merges-it-in-to-master)
- [Archive the `master` branch](https://github.com/git-tips/#archive-the-master-branch)
- [Modify previous commit without modifying the commit message](https://github.com/git-tips/#modify-previous-commit-without-modifying-the-commit-message)
- [Prunes references to remove branches that have been deleted in the remote.](https://github.com/git-tips/#prunes-references-to-remove-branches-that-have-been-deleted-in-the-remote)
- [Delete local branches that has been squash and merged in the remote.](https://github.com/git-tips/#delete-local-branches-that-has-been-squash-and-merged-in-the-remote)
- [Retrieve the commit hash of the initial revision.](https://github.com/git-tips/#retrieve-the-commit-hash-of-the-initial-revision)
- [Visualize the version tree.](https://github.com/git-tips/#visualize-the-version-tree)
- [Visualize the tree including commits that are only referenced from reflogs](https://github.com/git-tips/#visualize-the-tree-including-commits-that-are-only-referenced-from-reflogs)
- [Deploying git tracked subfolder to gh-pages](https://github.com/git-tips/#deploying-git-tracked-subfolder-to-gh-pages)
- [Adding a project to repo using subtree](https://github.com/git-tips/#adding-a-project-to-repo-using-subtree)
- [Get latest changes in your repo for a linked project using subtree](https://github.com/git-tips/#get-latest-changes-in-your-repo-for-a-linked-project-using-subtree)
- [Export a branch with history to a file.](https://github.com/git-tips/#export-a-branch-with-history-to-a-file)
- [Import from a bundle](https://github.com/git-tips/#import-from-a-bundle)
- [Get the name of current branch.](https://github.com/git-tips/#get-the-name-of-current-branch)
- [Ignore one file on commit (e.g. Changelog).](https://github.com/git-tips/#ignore-one-file-on-commit-eg-changelog)
- [Stash changes before rebasing](https://github.com/git-tips/#stash-changes-before-rebasing)
- [Fetch pull request by ID to a local branch](https://github.com/git-tips/#fetch-pull-request-by-id-to-a-local-branch)
- [Show the most recent tag on the current branch.](https://github.com/git-tips/#show-the-most-recent-tag-on-the-current-branch)
- [Show inline word diff.](https://github.com/git-tips/#show-inline-word-diff)
- [Show changes using common diff tools.](https://github.com/git-tips/#show-changes-using-common-diff-tools)
- [Don’t consider changes for tracked file.](https://github.com/git-tips/#dont-consider-changes-for-tracked-file)
- [Undo assume-unchanged.](https://github.com/git-tips/#undo-assume-unchanged)
- [Clean the files from `.gitignore`.](https://github.com/git-tips/#clean-the-files-from-gitignore)
- [Restore deleted file.](https://github.com/git-tips/#restore-deleted-file)
- [Restore file to a specific commit-hash](https://github.com/git-tips/#restore-file-to-a-specific-commit-hash)
- [Always rebase instead of merge on pull.](https://github.com/git-tips/#always-rebase-instead-of-merge-on-pull)
- [List all the alias and configs.](https://github.com/git-tips/#list-all-the-alias-and-configs)
- [Make git case sensitive.](https://github.com/git-tips/#make-git-case-sensitive)
- [Add custom editors.](https://github.com/git-tips/#add-custom-editors)
- [Auto correct typos.](https://github.com/git-tips/#auto-correct-typos)
- [Check if the change was a part of a release.](https://github.com/git-tips/#check-if-the-change-was-a-part-of-a-release)
- [Dry run. (any command that supports dry-run flag should do.)](https://github.com/git-tips/#dry-run-any-command-that-supports-dry-run-flag-should-do)
- [Marks your commit as a fix of a previous commit.](https://github.com/git-tips/#marks-your-commit-as-a-fix-of-a-previous-commit)
- [Squash fixup commits normal commits.](https://github.com/git-tips/#squash-fixup-commits-normal-commits)
- [Skip staging area during commit.](https://github.com/git-tips/#skip-staging-area-during-commit)
- [Interactive staging.](https://github.com/git-tips/#interactive-staging)
- [List ignored files.](https://github.com/git-tips/#list-ignored-files)
- [Status of ignored files.](https://github.com/git-tips/#status-of-ignored-files)
- [Commits in Branch1 that are not in Branch2](https://github.com/git-tips/#commits-in-branch1-that-are-not-in-branch2)
- [List n last commits](https://github.com/git-tips/#list-n-last-commits)
- [Reuse recorded resolution, record and reuse previous conflicts resolutions.](https://github.com/git-tips/#reuse-recorded-resolution-record-and-reuse-previous-conflicts-resolutions)
- [Open all conflicted files in an editor.](https://github.com/git-tips/#open-all-conflicted-files-in-an-editor)
- [Count unpacked number of objects and their disk consumption.](https://github.com/git-tips/#count-unpacked-number-of-objects-and-their-disk-consumption)
- [Prune all unreachable objects from the object database.](https://github.com/git-tips/#prune-all-unreachable-objects-from-the-object-database)
- [Instantly browse your working repository in gitweb.](https://github.com/git-tips/#instantly-browse-your-working-repository-in-gitweb)
- [View the GPG signatures in the commit log](https://github.com/git-tips/#view-the-gpg-signatures-in-the-commit-log)
- [Remove entry in the global config.](https://github.com/git-tips/#remove-entry-in-the-global-config)
- [Checkout a new branch without any history](https://github.com/git-tips/#checkout-a-new-branch-without-any-history)
- [Extract file from another branch.](https://github.com/git-tips/#extract-file-from-another-branch)
- [List only the root and merge commits.](https://github.com/git-tips/#list-only-the-root-and-merge-commits)
- [Change previous two commits with an interactive rebase.](https://github.com/git-tips/#change-previous-two-commits-with-an-interactive-rebase)
- [List all branch is WIP](https://github.com/git-tips/#list-all-branch-is-wip)
- [Find guilty with binary search](https://github.com/git-tips/#find-guilty-with-binary-search)
- [Bypass pre-commit and commit-msg githooks](https://github.com/git-tips/#bypass-pre-commit-and-commit-msg-githooks)
- [List commits and changes to a specific file (even through renaming)](https://github.com/git-tips/#list-commits-and-changes-to-a-specific-file-even-through-renaming)
- [Clone a single branch](https://github.com/git-tips/#clone-a-single-branch)
- [Create and switch new branch](https://github.com/git-tips/#create-and-switch-new-branch)
- [Ignore file mode changes on commits](https://github.com/git-tips/#ignore-file-mode-changes-on-commits)
- [Turn off git colored terminal output](https://github.com/git-tips/#turn-off-git-colored-terminal-output)
- [Specific color settings](https://github.com/git-tips/#specific-color-settings)
- [Show all local branches ordered by recent commits](https://github.com/git-tips/#show-all-local-branches-ordered-by-recent-commits)
- [Find lines matching the pattern (regex or string) in tracked files](https://github.com/git-tips/#find-lines-matching-the-pattern-regex-or-string-in-tracked-files)
- [Clone a shallow copy of a repository](https://github.com/git-tips/#clone-a-shallow-copy-of-a-repository)
- [Search Commit log across all branches for given text](https://github.com/git-tips/#search-commit-log-across-all-branches-for-given-text)
- [Get first commit in a branch (from master)](https://github.com/git-tips/#get-first-commit-in-a-branch-from-master)
- [Unstaging Staged file](https://github.com/git-tips/#unstaging-staged-file)
- [Force push to Remote Repository](https://github.com/git-tips/#force-push-to-remote-repository)
- [Adding Remote name](https://github.com/git-tips/#adding-remote-name)
- [List all currently configured remotes](https://github.com/git-tips/#list-all-currently-configured-remotes)
- [Forced push but still ensure you don't overwrite other's work](https://github.com/git-tips/#forced-push-but-still-ensure-you-dont-overwrite-others-work)
- [Revert: Reverting an entire merge](https://github.com/git-tips/#revert-reverting-an-entire-merge)
- [Number of commits in a branch](https://github.com/git-tips/#number-of-commits-in-a-branch)
- [Alias: git undo](https://github.com/git-tips/#alias-git-undo)
- [Add object notes](https://github.com/git-tips/#add-object-notes)
- [Show all the git-notes](https://github.com/git-tips/#show-all-the-git-notes)
- [Apply commit from another repository](https://github.com/git-tips/#apply-commit-from-another-repository)
- [Specific fetch reference](https://github.com/git-tips/#specific-fetch-reference)
- [Find common ancestor of two branches](https://github.com/git-tips/#find-common-ancestor-of-two-branches)
- [List unpushed git commits](https://github.com/git-tips/#list-unpushed-git-commits)
- [Add everything, but whitespace changes](https://github.com/git-tips/#add-everything-but-whitespace-changes)
- [Edit \[local/global\] git config](https://github.com/git-tips/#edit-localglobal-git-config)
- [blame on certain range](https://github.com/git-tips/#blame-on-certain-range)
- [Show a Git logical variable.](https://github.com/git-tips/#show-a-git-logical-variable)
- [Preformatted patch file.](https://github.com/git-tips/#preformatted-patch-file)
- [Get the repo name.](https://github.com/git-tips/#get-the-repo-name)
- [logs between date range](https://github.com/git-tips/#logs-between-date-range)
- [Generates a summary of pending changes](https://github.com/git-tips/#generates-a-summary-of-pending-changes)
- [List references in a remote repository](https://github.com/git-tips/#list-references-in-a-remote-repository)
- [Backup untracked files.](https://github.com/git-tips/#backup-untracked-files)
- [List all git aliases](https://github.com/git-tips/#list-all-git-aliases)
- [Show git status short](https://github.com/git-tips/#show-git-status-short)
- [Checkout a commit prior to a day ago](https://github.com/git-tips/#checkout-a-commit-prior-to-a-day-ago)
- [Push the current branch to the same name on the remote repository](https://github.com/git-tips/#push-the-current-branch-to-the-same-name-on-the-remote-repository)
- [Push a new local branch to remote repository and track](https://github.com/git-tips/#push-a-new-local-branch-to-remote-repository-and-track)
- [Change a branch base](https://github.com/git-tips/#change-a-branch-base)
- [Use SSH instead of HTTPs for remotes](https://github.com/git-tips/#use-ssh-instead-of-https-for-remotes)
- [Update a submodule to the latest commit](https://github.com/git-tips/#update-a-submodule-to-the-latest-commit)
- [Prevent auto replacing LF with CRLF](https://github.com/git-tips/#prevent-auto-replacing-lf-with-crlf)
```
git help everyday
```
```
git help -g
```
```
git log -S'<a term in the source>'
```
```
git log -p <file_name>
```
```
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch <path-to-your-file>' --prune-empty --tag-name-filter cat -- --all && git push origin --force --all
```
```
git fetch origin && git reset --hard origin/master && git clean -f -d
```
```
git ls-tree --name-only -r <commit-ish>
```
```
git update-ref -d HEAD
```
```
git reset --keep <commit>
```
```
git diff --name-only --diff-filter=U
```
```
git diff-tree --no-commit-id --name-only -r <commit-ish>
```
```
git diff
```
```
git diff --cached
```

**Alternatives:**

```
git diff --staged
```
```
git diff HEAD
```
```
git branch --merged master
```
```
git checkout -
```

**Alternatives:**

```
git checkout @{-1}
```
```
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```

**Alternatives:**

```
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d # will not delete master if master is not checked out
```
```
git branch -vv
```
```
git branch -u origin/mybranch
```
```
git branch -d <local_branchname>
```
```
git push origin --delete <remote_branchname>
```

**Alternatives:**

```
git push origin :<remote_branchname>
```
```
git branch -dr <remote/branch>
```
```
git tag <tag-name>
```
```
git tag -d <tag-name>
```
```
git push origin :refs/tags/<tag-name>
```
```
git checkout -- <file_name>
```
```
git revert <commit-ish>
```
```
git reset <commit-ish>
```
```
git commit -v --amend
```
```
git cherry -v master
```

## Amend author.

```
git commit --amend --author='Author Name <email@address.com>'
```
```
git commit --amend --reset-author --no-edit
```
```
git remote set-url origin <URL>
```
```
git remote
```

**Alternatives:**

```
git remote show
```
```
git branch -a
```
```
git branch -r
```
```
git add -p
```
```
curl -L http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```
```
git log --no-merges --raw --since='2 weeks ago'
```

**Alternatives:**

```
git whatchanged --since='2 weeks ago'
```
```
git log --no-merges --stat --reverse master..
```
```
git checkout <branch-name> && git cherry-pick <commit-ish>
```
```
git branch -a --contains <commit-ish>
```

**Alternatives:**

```
git branch --contains <commit-ish>
```

## Git Aliases

```
git config --global alias.<handle> <command> 
git config --global alias.st status
```
```
git stash
```

**Alternatives:**

```
git stash push
```
```
git stash -k
```

**Alternatives:**

```
git stash --keep-index
```
```
git stash push --keep-index
```
```
git stash -u
```

**Alternatives:**

```
git stash push -u
```
```
git stash push --include-untracked
```
```
git stash push -m <message>
```

**Alternatives:**

```
git stash push --message <message>
```
```
git stash -a
```

**Alternatives:**

```
git stash --all
```
```
git stash push --all
```
```
git stash list
```
```
git stash show -p <stash@{n}>
```
```
git stash apply <stash@{n}>
```
```
git stash pop
```

**Alternatives:**

```
git stash apply stash@{0} && git stash drop stash@{0}
```
```
git stash clear
```

**Alternatives:**

```
git stash drop <stash@{n}>
```
```
git checkout <stash@{n}> -- <file_path>
```

**Alternatives:**

```
git checkout stash@{0} -- <file_path>
```
```
git ls-files -t
```
```
git ls-files --others
```
```
git ls-files --others -i --exclude-standard
```
```
git worktree add -b <branch-name> <path> <start-point>
```
```
git worktree add --detach <path> HEAD
```
```
git rm --cached <file_path>
```

**Alternatives:**

```
git rm --cached -r <directory_path>
```
```
git clean -n
```
```
git clean -f
```
```
git clean -f -d
```
```
git submodule foreach git pull
```

**Alternatives:**

```
git submodule update --init --recursive
```
```
git submodule update --remote
```
```
git cherry -v master
```

**Alternatives:**

```
git cherry -v master <branch-to-be-merged>
```
```
git branch -m <new-branch-name>
```

**Alternatives:**

```
git branch -m [<old-branch-name>] <new-branch-name>
```
```
git rebase master feature && git checkout master && git merge -
```
```
git archive master --format=zip --output=master.zip
```
```
git add --all && git commit --amend --no-edit
```
```
git fetch -p
```

**Alternatives:**

```
git remote prune origin
```
```
git branch -vv | grep ': gone]' | awk '{print <!-- @doxie.inject start -->}' | xargs git branch -D
```
```
git rev-list --reverse HEAD | head -1
```

**Alternatives:**

```
git rev-list --max-parents=0 HEAD
```
```
git log --pretty=oneline | tail -1 | cut -c 1-40
```
```
git log --pretty=oneline --reverse | head -1 | cut -c 1-40
```
```
git log --pretty=oneline --graph --decorate --all
```

**Alternatives:**

```
gitk --all
```
```
git log --graph --pretty=format:'%C(auto) %h | %s | %an | %ar%d'
```
```
git log --graph --decorate --oneline $(git rev-list --walk-reflogs --all)
```
```
git subtree push --prefix subfolder_name origin gh-pages
```
```
git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```
```
git subtree pull --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```
```
git bundle create <file> <branch-name>
```
```
git clone repo.bundle <repo-dir> -b <branch-name>
```
```
git rev-parse --abbrev-ref HEAD
```
```
git update-index --assume-unchanged Changelog; git commit -a; git update-index --no-assume-unchanged Changelog
```
```
git rebase --autostash
```
```
git fetch origin pull/<id>/head:<branch-name>
```

**Alternatives:**

```
git pull origin pull/<id>/head:<branch-name>
```
```
git describe --tags --abbrev=0
```
```
git diff --word-diff
```
```
git difftool [-t <tool>] <commit1> <commit2> <path>
```
```
git update-index --assume-unchanged <file_name>
```

## Undo assume-unchanged.

```
git update-index --no-assume-unchanged <file_name>
```
```
git clean -X -f
```
```
git checkout <deleting_commit> -- <file_path>
```
```
git checkout <commit-ish> -- <file_path>
```
```
git config --global pull.rebase true
```

**Alternatives:**

```
#git < 1.7.9
git config --global branch.autosetuprebase always
```
```
git config --list
```
```
git config --global core.ignorecase false
```
```
git config --global core.editor '$EDITOR'
```
```
git config --global help.autocorrect 1
```
```
git name-rev --name-only <SHA-1>
```
```
git clean -fd --dry-run
```
```
git commit --fixup <SHA-1>
```
```
git rebase -i --autosquash
```
```
git commit --only <file_path>
```

## Interactive staging.

```
git add -i
```
```
git check-ignore *
```
```
git status --ignored
```
```
git log Branch1 ^Branch2
```
```
git log -<n>
```

**Alternatives:**

```
git log -n <n>
```
```
git config --global rerere.enabled 1
```
```
git diff --name-only | uniq | xargs $EDITOR
```
```
git count-objects --human-readable
```
```
git gc --prune=now --aggressive
```
```
git instaweb [--local] [--httpd=<httpd>] [--port=<port>] [--browser=<browser>]
```
```
git log --show-signature
```
```
git config --global --unset <entry-name>
```
```
git checkout --orphan <branch_name>
```
```
git show <branch_name>:<file_name>
```
```
git log --first-parent
```
```
git rebase --interactive HEAD~2
```
```
git checkout master && git branch --no-merged
```
```
git bisect start                    # Search start 
git bisect bad                      # Set point to bad commit 
git bisect good v2.6.13-rc2         # Set point to good commit|tag 
git bisect bad                      # Say current state is bad 
git bisect good                     # Say current state is good 
git bisect reset                    # Finish search
```
```
git commit --no-verify
```
```
git log --follow -p -- <file_path>
```
```
git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```
```
git checkout -b <branch-name>
```

**Alternatives:**

```
git branch <branch-name> && git checkout <branch-name>
```
```
git switch -c <branch-name>
```
```
git config core.fileMode false
```
```
git config --global color.ui false
```
```
git config --global <specific command e.g branch, diff> <true, false or always>
```
```
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/
```
```
git grep --heading --line-number 'foo bar'
```
```
git clone https://github.com/user/repo.git --depth 1
```
```
git log --all --grep='<given-text>'
```
```
git log --oneline master..<branch-name> | tail -1
```

**Alternatives:**

```
git log --reverse master..<branch-name> | head -6
```
```
git reset HEAD <file-name>
```
```
git push -f <remote-name> <branch-name>
```
```
git remote add <remote-nickname> <remote-url>
```
```
git remote -v
```
```
git blame <file-name>
```
```
git shortlog
```
```
git push --force-with-lease <remote-name> <branch-name>
```
```
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | gawk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s removed lines: %s total lines: %s
", add, subs, loc }' -
```

**Alternatives:**

```
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | awk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s, removed lines: %s, total lines: %s
", add, subs, loc }' - # on Mac OSX
```
```
git revert -m 1 <commit-ish>
```
```
git rev-list --count <branch-name>
```
```
git config --global alias.undo '!f() { git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'
```
```
git notes add -m 'Note on the previous commit....'
```
```
git log --show-notes='*'
```
```
git --git-dir=<source-dir>/.git format-patch -k -1 --stdout <SHA1> | git am -3 -k
```
```
git fetch origin master:refs/remotes/origin/mymaster
```
```
git merge-base <branch-name> <other-branch-name>
```
```
git log --branches --not --remotes
```

**Alternatives:**

```
git log @{u}..
```
```
git cherry -v
```
```
git diff --ignore-all-space | git apply --cached
```
```
git config [--global] --edit
```
```
git blame -L <start>,<end>
```
```
git var -l | <variable>
```
```
git format-patch -M upstream..topic
```
```
git rev-parse --show-toplevel
```
```
git log --since='FEB 1 2017' --until='FEB 14 2017'
```
```
git log --perl-regexp --author='^((?!excluded-author-regex).*)
```
```
git request-pull v1.0 https://git.ko.xz/project master:for-linus
```
```
git ls-remote git://git.kernel.org/pub/scm/git/git.git
```
```
git ls-files --others -i --exclude-standard | xargs zip untracked.zip
```
```
git config -l | grep alias | sed 's/^alias\.//g'
```

**Alternatives:**

```
git config -l | grep alias | cut -d '.' -f 2
```
```
git status --short --branch
```
```
git checkout master@{yesterday}
```
```
git push origin HEAD
```
```
git push -u origin <branch_name>
```
```
git rebase --onto <new_base> <old_base>
```
```
git config --global url.'git@github.com:'.insteadOf 'https://github.com/'
```
```
cd <path-to-submodule>
git pull origin <branch>
cd <root-of-your-main-project>
git add <path-to-submodule>
git commit -m "submodule updated"
```
```
git config --global core.autocrlf false
```

## Releases

No releases published

## Packages

No packages published  

## Languages

- [JavaScript 100.0%](https://github.com/git-tips/tips/search?l=javascript)