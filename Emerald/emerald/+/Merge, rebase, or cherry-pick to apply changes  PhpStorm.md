---
author:
  - "[[PhpStorm Help]]"
created: 2025-10-07
published:
source: https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html
part of:
  - "[[Phpstorm]]"
tags:
  - howto/phpstorm
---
## Merge, rebase, or cherry-pick to apply changes

Last modified:20 August 2025

In Git, there are several ways to integrate changes from one branch into another:

- [Merge branches](https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html#merge)
- [Rebase branches](https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html#rebase-branch)
- [Cherry-pick separate commits](https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html#cherry-pick)
- [Apply separate changes from a commit](https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html#apply-separate-changes)
- [Apply specific file to a branch](https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html#copy-files-to-branch)

## Merge branches

Suppose you have created a feature branch to work on a specific task, and want to integrate the results of your work (`F1`, `F2`, `F3`) into the main code base after you have completed and tested your feature:

<svg aria-roledescription="gitGraph" role="graphics-document document" viewBox="-111.05806732177734 -18 419.0580749511719 148.91017150878906" xmlns="http://www.w3.org/2000/svg" width="100%" id="mermaid" class="h2-related" style="max-width: 419.058px;"><g></g><g class="commit-bullets"></g><g class="commit-labels"></g><g><line class="branch branch0" y2="0" x2="300" y1="0" x1="0"></line><rect transform="translate(-19, -8.5)" height="21" width="52.78125" y="-0.5" x="-68.78125" ry="4" rx="4" class="branchLabelBkg label0"></rect><g class="branchLabel"><g transform="translate(-78.78125, -9.5)" class="label branch-label0"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">main</tspan></text></g></g> <line class="branch branch1" y2="90" x2="300" y1="90" x1="0"></line><rect transform="translate(-19, 81.5)" height="21" width="68.05806732177734" y="-0.5" x="-84.05806732177734" ry="4" rx="4" class="branchLabelBkg label1"></rect><g class="branchLabel"><g transform="translate(-94.05806732177734, 80.5)" class="label branch-label1"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">feature</tspan></text></g></g></g> <g class="commit-arrows"><path class="arrow arrow0" d="M 10 0 L 60 0"></path><path class="arrow arrow0" d="M 60 0 L 110 0"></path><path class="arrow arrow1" d="M 110 0 L 110 70 A 20 20, 0, 0, 0, 130 90 L 160 90"></path><path class="arrow arrow1" d="M 160 90 L 210 90"></path><path class="arrow arrow1" d="M 210 90 L 260 90"></path></g><g class="commit-bullets"><circle class="commit C1 commit0" r="10" cy="0" cx="10"></circle><circle class="commit C2 commit0" r="10" cy="0" cx="60"></circle><circle class="commit C3 commit0" r="10" cy="0" cx="110"></circle><circle class="commit F1 commit1" r="10" cy="90" cx="160"></circle><circle class="commit F2 commit1" r="10" cy="90" cx="210"></circle><circle class="commit F3 commit1" r="10" cy="90" cx="260"></circle></g><g class="commit-labels"><g transform="translate(-16.33335834503174, 14.50353115081787) rotate(-45, 0, 0)"><rect height="15" width="17.24567985534668" y="13.5" x="1.3771600723266602" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="3.37716007232666">C1</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 50, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="51.377159118652344" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="53.377159118652344">C2</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 100, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="101.37715911865234" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="103.37715911865234">C3</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 150, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="151.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="153.93379974365234">F1</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 200, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="201.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="203.93379974365234">F2</text></g> <g transform="translate(-15.910306396484375, 14.125010986328125) rotate(-45, 250, 90)"><rect height="15" width="16.13238525390625" y="103.5" x="251.93380737304688" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="253.93380737304688">F3</text></g></g></svg>

Merging your branch into `main` is the most common way to do this.

It is very common that while you are working in your feature branch, your teammates continue to commit their work (`C4`, `C5`) to `main`:

<svg aria-roledescription="gitGraph" role="graphics-document document" viewBox="-111.05806732177734 -18 519.0580749511719 148.91017150878906" xmlns="http://www.w3.org/2000/svg" width="100%" id="mermaid" class="h2-related" style="max-width: 519.058px;"><g></g><g class="commit-bullets"></g><g class="commit-labels"></g><g><line class="branch branch0" y2="0" x2="400" y1="0" x1="0"></line><rect transform="translate(-19, -8.5)" height="21" width="52.78125" y="-0.5" x="-68.78125" ry="4" rx="4" class="branchLabelBkg label0"></rect><g class="branchLabel"><g transform="translate(-78.78125, -9.5)" class="label branch-label0"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">main</tspan></text></g></g> <line class="branch branch1" y2="90" x2="400" y1="90" x1="0"></line><rect transform="translate(-19, 81.5)" height="21" width="68.05806732177734" y="-0.5" x="-84.05806732177734" ry="4" rx="4" class="branchLabelBkg label1"></rect><g class="branchLabel"><g transform="translate(-94.05806732177734, 80.5)" class="label branch-label1"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">feature</tspan></text></g></g></g> <g class="commit-arrows"><path class="arrow arrow0" d="M 10 0 L 60 0"></path><path class="arrow arrow0" d="M 60 0 L 110 0"></path><path class="arrow arrow1" d="M 110 0 L 110 70 A 20 20, 0, 0, 0, 130 90 L 160 90"></path><path class="arrow arrow1" d="M 160 90 L 210 90"></path><path class="arrow arrow1" d="M 210 90 L 260 90"></path><path class="arrow arrow0" d="M 110 0 L 310 0"></path><path class="arrow arrow0" d="M 310 0 L 360 0"></path></g><g class="commit-bullets"><circle class="commit C1 commit0" r="10" cy="0" cx="10"></circle><circle class="commit C2 commit0" r="10" cy="0" cx="60"></circle><circle class="commit C3 commit0" r="10" cy="0" cx="110"></circle><circle class="commit F1 commit1" r="10" cy="90" cx="160"></circle><circle class="commit F2 commit1" r="10" cy="90" cx="210"></circle><circle class="commit F3 commit1" r="10" cy="90" cx="260"></circle><circle class="commit C4 commit0" r="10" cy="0" cx="310"></circle><circle class="commit C5 commit0" r="10" cy="0" cx="360"></circle></g><g class="commit-labels"><g transform="translate(-16.33335834503174, 14.50353115081787) rotate(-45, 0, 0)"><rect height="15" width="17.24567985534668" y="13.5" x="1.3771600723266602" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="3.37716007232666">C1</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 50, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="51.377159118652344" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="53.377159118652344">C2</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 100, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="101.37715911865234" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="103.37715911865234">C3</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 150, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="151.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="153.93379974365234">F1</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 200, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="201.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="203.93379974365234">F2</text></g> <g transform="translate(-15.910306396484375, 14.125010986328125) rotate(-45, 250, 90)"><rect height="15" width="16.13238525390625" y="103.5" x="251.93380737304688" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="253.93380737304688">F3</text></g> <g transform="translate(-16.333353271484377, 14.503526611328125) rotate(-45, 300, 0)"><rect height="15" width="17.24566650390625" y="13.5" x="301.3771667480469" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="303.3771667480469">C4</text></g> <g transform="translate(-16.333353271484377, 14.503526611328125) rotate(-45, 350, 0)"><rect height="15" width="17.24566650390625" y="13.5" x="351.3771667480469" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="353.3771667480469">C5</text></g></g></svg>

When you [merge](https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html#merge-branches) your feature branch into `main`, the changes from your feature branch are integrated into the HEAD of the target branch:

<svg aria-roledescription="gitGraph" role="graphics-document document" viewBox="-111.05806732177734 -18 569.05810546875 148.91017150878906" xmlns="http://www.w3.org/2000/svg" width="100%" id="mermaid" class="h2-related" style="max-width: 569.058px;"><g></g><g class="commit-bullets"></g><g class="commit-labels"></g><g><line class="branch branch0" y2="0" x2="450" y1="0" x1="0"></line><rect transform="translate(-19, -8.5)" height="21" width="52.78125" y="-0.5" x="-68.78125" ry="4" rx="4" class="branchLabelBkg label0"></rect><g class="branchLabel"><g transform="translate(-78.78125, -9.5)" class="label branch-label0"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">main</tspan></text></g></g> <line class="branch branch1" y2="90" x2="450" y1="90" x1="0"></line><rect transform="translate(-19, 81.5)" height="21" width="68.05806732177734" y="-0.5" x="-84.05806732177734" ry="4" rx="4" class="branchLabelBkg label1"></rect><g class="branchLabel"><g transform="translate(-94.05806732177734, 80.5)" class="label branch-label1"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">feature</tspan></text></g></g></g> <g class="commit-arrows"><path class="arrow arrow0" d="M 10 0 L 60 0"></path><path class="arrow arrow0" d="M 60 0 L 110 0"></path><path class="arrow arrow1" d="M 110 0 L 110 70 A 20 20, 0, 0, 0, 130 90 L 160 90"></path><path class="arrow arrow1" d="M 160 90 L 210 90"></path><path class="arrow arrow1" d="M 210 90 L 260 90"></path><path class="arrow arrow0" d="M 110 0 L 310 0"></path><path class="arrow arrow0" d="M 310 0 L 360 0"></path><path class="arrow arrow0" d="M 360 0 L 410 0"></path><path class="arrow arrow1" d="M 260 90 L 390 90 A 20 20, 0, 0, 0, 410 70 L 410 0"></path></g><g class="commit-bullets"><circle class="commit C1 commit0" r="10" cy="0" cx="10"></circle><circle class="commit C2 commit0" r="10" cy="0" cx="60"></circle><circle class="commit C3 commit0" r="10" cy="0" cx="110"></circle><circle class="commit F1 commit1" r="10" cy="90" cx="160"></circle><circle class="commit F2 commit1" r="10" cy="90" cx="210"></circle><circle class="commit F3 commit1" r="10" cy="90" cx="260"></circle><circle class="commit C4 commit0" r="10" cy="0" cx="310"></circle><circle class="commit C5 commit0" r="10" cy="0" cx="360"></circle><circle class="commit 8-1c2d614 commit0" r="9" cy="0" cx="410"></circle><circle class="commit commit-merge 8-1c2d614 commit0" r="6" cy="0" cx="410"></circle></g><g class="commit-labels"><g transform="translate(-16.33335834503174, 14.50353115081787) rotate(-45, 0, 0)"><rect height="15" width="17.24567985534668" y="13.5" x="1.3771600723266602" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="3.37716007232666">C1</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 50, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="51.377159118652344" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="53.377159118652344">C2</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 100, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="101.37715911865234" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="103.37715911865234">C3</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 150, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="151.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="153.93379974365234">F1</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 200, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="201.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="203.93379974365234">F2</text></g> <g transform="translate(-15.910306396484375, 14.125010986328125) rotate(-45, 250, 90)"><rect height="15" width="16.13238525390625" y="103.5" x="251.93380737304688" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="253.93380737304688">F3</text></g> <g transform="translate(-16.333353271484377, 14.503526611328125) rotate(-45, 300, 0)"><rect height="15" width="17.24566650390625" y="13.5" x="301.3771667480469" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="303.3771667480469">C4</text></g> <g transform="translate(-16.333353271484377, 14.503526611328125) rotate(-45, 350, 0)"><rect height="15" width="17.24566650390625" y="13.5" x="351.3771667480469" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="353.3771667480469">C5</text></g></g></svg>

Git creates a new commit that is referred to as a merge commit that results from combining the changes from your feature branch and `main` from the point where the two branches diverged.

The major benefit of merging is full traceability, as commits merged into the `main` code base preserve their original hash and author, and all commits that are part of one feature can be grouped together.

This workflow is good for projects where committing changes to the `main` code base involves [pull](https://www.jetbrains.com/help/phpstorm/work-with-github-pull-requests.html#create-pull-request) or [merge requests](https://www.jetbrains.com/help/phpstorm/work-with-gitlab-merge-requests.html), or a hierarchical approval procedure, as existing branches are not changed in any way.

The main drawback of this approach is that extraneous merge commits are created each time you need to incorporate changes, which intensely pollutes project history and makes it difficult to read.

### Merge branches

1. In the [Branches](https://www.jetbrains.com/help/phpstorm/manage-branches.html) popup (main menu Git | Branches) or in the Branches pane of the Git tool window, select the target branch that you want to integrate the changes to, and choose Checkout from the context menu to switch to that branch.
2. Do one of the following:
	- If you do not need to specify options for the merge, select the branch that you want to merge into the current branch and choose Merge <branch\_name> into <target\_branch> from the submenu.
		![Merge branches](https://resources.jetbrains.com/help/img/idea/2025.2/merge_branches_popup.png)
		Merge branches
	- If you need to specify merge options, from the main menu choose Git | Merge to open the Merge dialog:
		![The Merge dialog](https://resources.jetbrains.com/help/img/idea/2025.2/merge_dialog.png)
		The Merge dialog
		Select the branch that you want to merge into the current branch, click Modify options and choose from the following:
		- `--no-ff`: a merge commit will be created in all cases, even if the merge could be resolved as a fast-forward.
		- `--ff-only`: the merge will be resolved only if it is possible to fast-forward.
		- `--squash`: a single commit with all pulled changes will be created on top of the current branch.
		- `-m`: you will be able to edit the message for the merge commit.
		- `--no-commit`: a merge will be performed, but a merge commit will not be created so that you can inspect the result of the merge before committing.
		- `--no-verify`: performs the merge while bypassing the pre-merge and commit-message hooks that normally run by default.
		- `--allow-unrelated-histories`: performs a merge, overriding the safety rule that refuses to merge histories without a common ancestor.
	Click Merge.

If your working tree is clean (which means you have no uncommitted changes), and no conflicts occur between your feature branch and the target branch, Git will merge the two branches, and the merge commit will appear in the Log tab of the Git tool window Alt 0 9:

![merge commit](https://resources.jetbrains.com/help/img/idea/2025.2/merge_commit.png)

merge commit

If conflicts occur between your branch and the target branch, you will be prompted to resolve them (refer to [Resolve conflicts](https://www.jetbrains.com/help/phpstorm/resolve-conflicts.html)). If there are unresolved conflicts left after a merge, the Merge Conflicts node will appear in the corresponding changelist in the Commit tool window Alt 0 0 with a link to resolve them.

If you have local changes that will be overwritten by merge, PhpStorm will suggest performing Smart merge. If you select this option, PhpStorm will [stash](https://www.jetbrains.com/help/phpstorm/shelving-and-unshelving-changes.html#stash) uncommitted changes, perform merge, and then unstash the changes.

> ### note
> 
> You can cancel an unfinished merge operation by selecting the Abort action from the Git Branches popup.

## Rebase branches (git-rebase)

When you `rebase` a branch onto another branch, you apply the commits from the first branch on top of the HEAD commit in the second branch.

Suppose you have created a feature branch to work on a specific task and make several commits to that branch (`F1`, `F2`, `F3`):

<svg aria-roledescription="gitGraph" role="graphics-document document" viewBox="-111.05806732177734 -18 419.0580749511719 148.91017150878906" xmlns="http://www.w3.org/2000/svg" width="100%" id="mermaid" class="h2-related" style="max-width: 419.058px;"><g></g><g class="commit-bullets"></g><g class="commit-labels"></g><g><line class="branch branch0" y2="0" x2="300" y1="0" x1="0"></line><rect transform="translate(-19, -8.5)" height="21" width="52.78125" y="-0.5" x="-68.78125" ry="4" rx="4" class="branchLabelBkg label0"></rect><g class="branchLabel"><g transform="translate(-78.78125, -9.5)" class="label branch-label0"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">main</tspan></text></g></g> <line class="branch branch1" y2="90" x2="300" y1="90" x1="0"></line><rect transform="translate(-19, 81.5)" height="21" width="68.05806732177734" y="-0.5" x="-84.05806732177734" ry="4" rx="4" class="branchLabelBkg label1"></rect><g class="branchLabel"><g transform="translate(-94.05806732177734, 80.5)" class="label branch-label1"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">feature</tspan></text></g></g></g> <g class="commit-arrows"><path class="arrow arrow0" d="M 10 0 L 60 0"></path><path class="arrow arrow0" d="M 60 0 L 110 0"></path><path class="arrow arrow1" d="M 110 0 L 110 70 A 20 20, 0, 0, 0, 130 90 L 160 90"></path><path class="arrow arrow1" d="M 160 90 L 210 90"></path><path class="arrow arrow1" d="M 210 90 L 260 90"></path></g><g class="commit-bullets"><circle class="commit C1 commit0" r="10" cy="0" cx="10"></circle><circle class="commit C2 commit0" r="10" cy="0" cx="60"></circle><circle class="commit C3 commit0" r="10" cy="0" cx="110"></circle><circle class="commit F1 commit1" r="10" cy="90" cx="160"></circle><circle class="commit F2 commit1" r="10" cy="90" cx="210"></circle><circle class="commit F3 commit1" r="10" cy="90" cx="260"></circle></g><g class="commit-labels"><g transform="translate(-16.33335834503174, 14.50353115081787) rotate(-45, 0, 0)"><rect height="15" width="17.24567985534668" y="13.5" x="1.3771600723266602" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="3.37716007232666">C1</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 50, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="51.377159118652344" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="53.377159118652344">C2</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 100, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="101.37715911865234" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="103.37715911865234">C3</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 150, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="151.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="153.93379974365234">F1</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 200, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="201.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="203.93379974365234">F2</text></g> <g transform="translate(-15.910306396484375, 14.125010986328125) rotate(-45, 250, 90)"><rect height="15" width="16.13238525390625" y="103.5" x="251.93380737304688" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="253.93380737304688">F3</text></g></g></svg>

While you develop in your branch, your teammates continue to commit their work (`C4`, `C5`) to `main`:

<svg aria-roledescription="gitGraph" role="graphics-document document" viewBox="-111.05806732177734 -18 519.0580749511719 148.91017150878906" xmlns="http://www.w3.org/2000/svg" width="100%" id="mermaid" class="h2-related" style="max-width: 519.058px;"><g></g><g class="commit-bullets"></g><g class="commit-labels"></g><g><line class="branch branch0" y2="0" x2="400" y1="0" x1="0"></line><rect transform="translate(-19, -8.5)" height="21" width="52.78125" y="-0.5" x="-68.78125" ry="4" rx="4" class="branchLabelBkg label0"></rect><g class="branchLabel"><g transform="translate(-78.78125, -9.5)" class="label branch-label0"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">main</tspan></text></g></g> <line class="branch branch1" y2="90" x2="400" y1="90" x1="0"></line><rect transform="translate(-19, 81.5)" height="21" width="68.05806732177734" y="-0.5" x="-84.05806732177734" ry="4" rx="4" class="branchLabelBkg label1"></rect><g class="branchLabel"><g transform="translate(-94.05806732177734, 80.5)" class="label branch-label1"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">feature</tspan></text></g></g></g> <g class="commit-arrows"><path class="arrow arrow0" d="M 10 0 L 60 0"></path><path class="arrow arrow0" d="M 60 0 L 110 0"></path><path class="arrow arrow1" d="M 110 0 L 110 70 A 20 20, 0, 0, 0, 130 90 L 160 90"></path><path class="arrow arrow1" d="M 160 90 L 210 90"></path><path class="arrow arrow1" d="M 210 90 L 260 90"></path><path class="arrow arrow0" d="M 110 0 L 310 0"></path><path class="arrow arrow0" d="M 310 0 L 360 0"></path></g><g class="commit-bullets"><circle class="commit C1 commit0" r="10" cy="0" cx="10"></circle><circle class="commit C2 commit0" r="10" cy="0" cx="60"></circle><circle class="commit C3 commit0" r="10" cy="0" cx="110"></circle><circle class="commit F1 commit1" r="10" cy="90" cx="160"></circle><circle class="commit F2 commit1" r="10" cy="90" cx="210"></circle><circle class="commit F3 commit1" r="10" cy="90" cx="260"></circle><circle class="commit C4 commit0" r="10" cy="0" cx="310"></circle><circle class="commit C5 commit0" r="10" cy="0" cx="360"></circle></g><g class="commit-labels"><g transform="translate(-16.33335834503174, 14.50353115081787) rotate(-45, 0, 0)"><rect height="15" width="17.24567985534668" y="13.5" x="1.3771600723266602" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="3.37716007232666">C1</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 50, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="51.377159118652344" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="53.377159118652344">C2</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 100, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="101.37715911865234" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="103.37715911865234">C3</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 150, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="151.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="153.93379974365234">F1</text></g> <g transform="translate(-15.910312194824218, 14.125016174316407) rotate(-45, 200, 90)"><rect height="15" width="16.132400512695312" y="103.5" x="201.93379974365234" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="203.93379974365234">F2</text></g> <g transform="translate(-15.910306396484375, 14.125010986328125) rotate(-45, 250, 90)"><rect height="15" width="16.13238525390625" y="103.5" x="251.93380737304688" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="253.93380737304688">F3</text></g> <g transform="translate(-16.333353271484377, 14.503526611328125) rotate(-45, 300, 0)"><rect height="15" width="17.24566650390625" y="13.5" x="301.3771667480469" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="303.3771667480469">C4</text></g> <g transform="translate(-16.333353271484377, 14.503526611328125) rotate(-45, 350, 0)"><rect height="15" width="17.24566650390625" y="13.5" x="351.3771667480469" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="353.3771667480469">C5</text></g></g></svg>

To integrate the changes made by your teammates (`C4`, `C5`) to your feature branch, you can [rebase](https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html#rebase-branch-onto-another-branch) your branch onto `main`. By doing this, you will apply your commits on top of the current HEAD commit in `main`:

<svg aria-roledescription="gitGraph" role="graphics-document document" viewBox="-111.05806732177734 -18 519.0580749511719 150.0098114013672" xmlns="http://www.w3.org/2000/svg" width="100%" id="mermaid" class="h2-related" style="max-width: 519.058px;"><g></g><g class="commit-bullets"></g><g class="commit-labels"></g><g><line class="branch branch0" y2="0" x2="400" y1="0" x1="0"></line><rect transform="translate(-19, -8.5)" height="21" width="52.78125" y="-0.5" x="-68.78125" ry="4" rx="4" class="branchLabelBkg label0"></rect><g class="branchLabel"><g transform="translate(-78.78125, -9.5)" class="label branch-label0"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">main</tspan></text></g></g> <line class="branch branch1" y2="90" x2="400" y1="90" x1="0"></line><rect transform="translate(-19, 81.5)" height="21" width="68.05806732177734" y="-0.5" x="-84.05806732177734" ry="4" rx="4" class="branchLabelBkg label1"></rect><g class="branchLabel"><g transform="translate(-94.05806732177734, 80.5)" class="label branch-label1"><text><tspan class="row" x="0" dy="1em" xml:space="preserve">feature</tspan></text></g></g></g> <g class="commit-arrows"><path class="arrow arrow0" d="M 10 0 L 60 0"></path><path class="arrow arrow0" d="M 60 0 L 110 0"></path><path class="arrow arrow0" d="M 110 0 L 160 0"></path><path class="arrow arrow0" d="M 160 0 L 210 0"></path><path class="arrow arrow1" d="M 210 0 L 210 70 A 20 20, 0, 0, 0, 230 90 L 260 90"></path><path class="arrow arrow1" d="M 260 90 L 310 90"></path><path class="arrow arrow1" d="M 310 90 L 360 90"></path></g><g class="commit-bullets"><circle class="commit C1 commit0" r="10" cy="0" cx="10"></circle><circle class="commit C2 commit0" r="10" cy="0" cx="60"></circle><circle class="commit C3 commit0" r="10" cy="0" cx="110"></circle><circle class="commit C4 commit0" r="10" cy="0" cx="160"></circle><circle class="commit C5 commit0" r="10" cy="0" cx="210"></circle><circle class="commit F1' commit1" r="10" cy="90" cx="260"></circle><circle class="commit F2' commit1" r="10" cy="90" cx="310"></circle><circle class="commit F3' commit1" r="10" cy="90" cx="360"></circle></g><g class="commit-labels"><g transform="translate(-16.33335834503174, 14.50353115081787) rotate(-45, 0, 0)"><rect height="15" width="17.24567985534668" y="13.5" x="1.3771600723266602" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="3.37716007232666">C1</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 50, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="51.377159118652344" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="53.377159118652344">C2</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 100, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="101.37715911865234" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="103.37715911865234">C3</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 150, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="151.37715911865234" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="153.37715911865234">C4</text></g> <g transform="translate(-16.33335906982422, 14.503531799316406) rotate(-45, 200, 0)"><rect height="15" width="17.245681762695312" y="13.5" x="201.37715911865234" class="commit-label-bkg"></rect><text class="commit-label" y="25" x="203.37715911865234">C5</text></g> <g transform="translate(-16.51281188964844, 14.664094848632812) rotate(-45, 250, 90)"><rect height="15" width="17.717926025390625" y="103.5" x="251.1410369873047" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="253.1410369873047">F1'</text></g> <g transform="translate(-16.51281188964844, 14.664094848632812) rotate(-45, 300, 90)"><rect height="15" width="17.717926025390625" y="103.5" x="301.1410369873047" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="303.1410369873047">F2'</text></g> <g transform="translate(-16.51281188964844, 14.664094848632812) rotate(-45, 350, 90)"><rect height="15" width="17.717926025390625" y="103.5" x="351.1410369873047" class="commit-label-bkg"></rect><text class="commit-label" y="115" x="353.1410369873047">F3'</text></g></g></svg>

The major benefit of rebasing is that you get a clean project history that is easy for others to read and understand. Your log does not contain unnecessary merge commits produced by the `merge` operation, and you get linear history that is easy to navigate and search through.

When deciding to adopt this workflow, you should keep in mind, however, that `rebase` rewrites project history as it creates new commits for each commit in the original feature branch (`F1'` instead of `F1`), so they will have different hashes, which obstructs traceability.

### Rebase a branch on top of another branch

1. From the main menu select Git | Rebase
	![Git rebase dialog](https://resources.jetbrains.com/help/img/idea/2025.2/git_rebase_dialog.png)
	Git rebase dialog
2. From the list, select the target branch onto which you want to rebase the current branch:
	![Choose target branch in the Git rebase dialog](https://resources.jetbrains.com/help/img/idea/2025.2/git_rebase_choose_target_branch_no_interactive.png)
	Choose target branch in the Git rebase dialog
3. If you need to rebase the source branch starting from a particular commit instead of rebasing the entire branch, click Modify options and choose \--onto.
	In the source branch field, enter the hash of the commit starting from which you want to apply the current branch to the new base:
	![Specify commit hash with --onto](https://resources.jetbrains.com/help/img/idea/2025.2/git_rebase_specify_commit_no_interactive.png)
	Specify commit hash with --onto
	> ### tip
	> 
	> To copy a commit hash, select it in the Log, right-click it and choose Copy Revision Number.
4. If the branch you want to rebase is not currently checked out, click Modify options, click Select another branch to rebase, and choose a branch from the list that appears:
	![Choose the branch you want to rebase](https://resources.jetbrains.com/help/img/idea/2025.2/git_rebase_choose_source_branch_no_interactive.png)
	Choose the branch you want to rebase
	PhpStorm will check out this branch before starting the rebase operation.
5. Depending on your particular case, choose other options from the Modify options list:
	- `--rebase-merges`: preserve the branching structure within the commits that are to be rebased.
		Note that any resolved merge conflicts or manual amendments in these merge commits will have to be resolved or reapplied manually.
	- `--keep-empty`: keep empty commits, which are commits that do not change anything from their parent.
	- `--root`: rebase all commits reachable in the branch.
	- `--update-refs`: automatically force-update any branches that point to commits that are being rebased.
	> ### tip
	> 
	> For more information on these options, refer to [git-rebase](https://git-scm.com/docs/git-rebase)
6. Click Rebase.

> ### note
> 
> You can cancel an unfinished rebase operation or resume an interrupted rebase by selecting the Abort or Continue actions respectively from the top of the Git Branches popup.

If you do not need to specify options for the rebase, you can initiate a rebase without invoking the rebase dialog. In the Branches popup or in the [Branches pane](https://www.jetbrains.com/help/phpstorm/log-tab.html#branches_pane_context_menu) of the [Git](https://www.jetbrains.com/help/phpstorm/version-control-tool-window.html) tool window select a branch and choose one of the following actions:

![Rebase options](https://resources.jetbrains.com/help/img/idea/2025.2/rebase_options.png)

Rebase options

- Checkout and Rebase onto <current\_branch\_name> (for both remote and local branches) to check out the selected branch and rebase it on top of the branch that is currently checked out. If the remote branch doesn't exist locally, PhpStorm will silently create a tracked local branch, checkout into it and rebase.
- Rebase <current\_branch\_name> onto <selected\_branch\_name> (for both remote and local branches) to rebase the branch that is currently checked out on top of the selected.
- Pull into <current\_branch\_name> Using Rebase (for remote branches) to [fetch](https://www.jetbrains.com/help/phpstorm/sync-with-a-remote-repository.html#fetch) changes from the selected branch and rebase the current branch on top of these changes.

Watch this video to get a better view on how rebase operation can be performed:

### Edit Git history by performing interactive rebase

With Git integration in PhpStorm, you can edit history for the sake of making it linear and meaningful by performing interactive rebase. This allows you to clean up the history of commits by altering individual commits, changing their order, squashing commits into one, skipping commits that contain extraneous changes, and so on before you integrate changes from your feature branch to another branch.

### Edit the history of the current branch

PhpStorm allows you to edit the commits history in the current branch before you apply the changes to a different branch.

1. Open the Git tool window Alt 0 9 and switch to the Log tab.
2. Filter the log so that it only displays commits from the current branch:
	![Filter log by branch](https://resources.jetbrains.com/help/img/idea/2025.2/VCS_log_branch_filter.png)
	Filter log by branch
3. Select the oldest commit in the series of commits that you want to edit, right-click it and choose Interactively Rebase from Here.
	The Interactive Rebase dialog will be displayed containing the list of all commits in the current branch that were made after the selected commit:
	![Interactive Rebase dialog](https://resources.jetbrains.com/help/img/idea/2025.2/VCS_interactive_rebase_dialog.png)
	Interactive Rebase dialog
	If the Interactively Rebase from Here option is disabled, this may be due to one of the following reasons:
	- the selected commit has several parents
	- the selected commit is not in the current branch
	- the selected commit is pushed to a [protected branch](https://www.jetbrains.com/help/phpstorm/edit-project-history.html#protected-branch)
	To identify the reason, hover over the action in the context menu and look for the message in the status bar:
	![Status bar message](https://resources.jetbrains.com/help/img/idea/2025.2/VCS_interactive_rebase_disabled.png)
	Status bar message
	> ### tip
4. You can perform the following changes to the branch history:
	- Change the order in which commits should be applied: use the and buttons to move commits up and down the list.
	- Pick a commit: this is the default state for all commits. If you need to undo an action you've already taken on a commit, click Pick so that this commit is applied as is.
	- Edit: click Stop to Edit so that when you start the rebase, you stop at this commit to be able to edit it.
		When rebase is stopped at a commit, a notification pops up in the bottom-right corner of the PhpStorm window letting you continue or abort the rebase:
		![the rebase status notification](https://resources.jetbrains.com/help/img/idea/2025.2/continue_rebase_notification.png)
		the rebase status notification
		You can modify this commit using the context actions (such as Revert, Undo, Amend, and so on before continuing the rebase. If you do not perform any actions, this commit will be applied as is.
		If you've closed the notification, from the main menu choose Git | Continue rebase to resume it.
	- Reword the commit message: click Reword or double-click a commit and edit the text in the mini-editor that opens.
	- Combine two commits into one: select the commit you want to meld into the previous one and click Squash or the arrow next to the Squash button and then Fixup.
		If you click Squash, by default the messages from the two commits will be combined, so if you do not modify the resulting commit message, this action will be reflected in the branch history.
		If you click Fixup, the commit message of the fixup commit will be discarded, so this change will be invisible in the branch history.
		In both cases, you will be able to edit the commit message in the mini editor that opens when you apply one of these actions.
	- Ignore a commit: click Drop so that the changes from the selected commit are not applied.
	- Undo all changes: click Reset to discard all actions you've applied to the commits.
	As a result, the Rebasing Commits dialog shows a graph illustrating all actions you've applied to commits in your branch so that you can review them before starting the rebase:
	![Interactive Rebase graph](https://resources.jetbrains.com/help/img/idea/2025.2/VCS_interactive_rebase_graph.png)
	Interactive Rebase graph
5. Click Start Rebasing.

### Edit a branch history and integrate it into another branch

PhpStorm allows you to [rebase](https://www.jetbrains.com/help/phpstorm/apply-changes-from-one-branch-to-another.html#rebase-branch) a branch on top of another branch and edit the source branch history before you apply the changes.

1. From the main menu select Git | Rebase
	![Git rebase dialog](https://resources.jetbrains.com/help/img/idea/2025.2/git_rebase_dialog.png)
	Git rebase dialog
2. Click Modify options and choose \--interactive.
3. From the list, select the target branch onto which you want to rebase the current branch:
	![Choose target branch in the Git rebase dialog](https://resources.jetbrains.com/help/img/idea/2025.2/git_rebase_choose_branch.png)
	Choose target branch in the Git rebase dialog
4. If you need to rebase the source branch starting from a particular commit instead of rebasing the entire branch, click Modify options and choose \--onto.
	In the source branch field, enter the hash of the commit starting from which you want to apply the current branch to the new base:
	![Specify commit hash with --onto](https://resources.jetbrains.com/help/img/idea/2025.2/git_rebase_specify_commit.png)
	Specify commit hash with --onto
	> ### tip
	> 
	> To copy a commit hash, select it in the Log, right-click it and choose Copy Revision Number.
5. If the branch you want to rebase is not currently checked out, click Modify options, click Select another branch to rebase, and choose a branch from the list that appears:
	![Choose the branch you want to rebase](https://resources.jetbrains.com/help/img/idea/2025.2/git_rebase_choose_source_branch.png)
	Choose the branch you want to rebase
	PhpStorm will check out this branch before starting the rebase operation.
6. Depending on your particular case, choose other options from the Modify options list:
	- `--rebase-merges`: preserve the branching structure within the commits that are to be rebased.
		Note that any resolved merge conflicts or manual amendments in these merge commits will have to be resolved or reapplied manually.
	- `--keep-empty`: keep empty commits, which are commits that do not change anything from their parent.
	- `--root`: rebase all commits reachable in the branch.
	- `--update-refs`: automatically force-update any branches that point to commits that are being rebased.
	> ### tip
	> 
	> For more information on these options, refer to [git-rebase](https://git-scm.com/docs/git-rebase)
7. Click Rebase.
	The Interactive Rebase dialog will be displayed containing the list of all commits in the current branch that were made after the selected commit.
	![Interactive Rebase dialog](https://resources.jetbrains.com/help/img/idea/2025.2/VCS_interactive_rebase_dialog.png)
	Interactive Rebase dialog
8. You can perform the following changes to the branch history:
	- Change the order in which commits should be applied: use the and buttons to move commits up and down the list.
	- Pick a commit: this is the default state for all commits. If you need to undo an action you've already taken on a commit, click Pick so that this commit is applied as is.
	- Edit: click Stop to Edit so that when you start the rebase, you stop at this commit to be able to edit it.
		When rebase is stopped at a commit, a notification pops up in the bottom-right corner of the PhpStorm window letting you continue or abort the rebase:
		![the rebase status notification](https://resources.jetbrains.com/help/img/idea/2025.2/continue_rebase_notification.png)
		the rebase status notification
		You can modify this commit using the context actions (such as Revert, Undo, Amend, and so on before continuing the rebase. If you do not perform any actions, this commit will be applied as is.
		If you've closed the notification, from the main menu choose Git | Continue rebase to resume it.
	- Reword the commit message: click Reword or double-click a commit and edit the text in the mini-editor that opens.
	- Combine two commits into one: select the commit you want to meld into the previous one and click Squash or the arrow next to the Squash button and then Fixup.
		If you click Squash, by default the messages from the two commits will be combined, so if you do not modify the resulting commit message, this action will be reflected in the branch history.
		If you click Fixup, the commit message of the fixup commit will be discarded, so this change will be invisible in the branch history.
		In both cases, you will be able to edit the commit message in the mini editor that opens when you apply one of these actions.
	- Ignore a commit: click Drop so that the changes from the selected commit are not applied.
	- Undo all changes: click Reset to discard all actions you've applied to the commits.
	As a result, the Rebasing Commits dialog shows a graph illustrating all actions you've applied to commits in your branch so that you can review them before starting the rebase:
	![Interactive Rebase graph](https://resources.jetbrains.com/help/img/idea/2025.2/VCS_interactive_rebase_graph.png)
	Interactive Rebase graph
9. Click Start Rebasing.

## Cherry-pick separate commits

Sometimes you only need to apply a single commit to a different branch instead of rebasing or merging an entire branch. This may be useful, for example, if you are working in a feature branch and want to integrate a hotfix from `main` that was committed after the two branches have diverged. Or you may want to backport a fix to a previous release branch. You can do so by using the Cherry-pick action.

The status of a cherry-pick operation is displayed in the status bar. You can always abort an ongoing cherry-pick by selecting Abort Cherry-Pick in the Git Branches popup.

![Cherry pick operation status](https://resources.jetbrains.com/help/img/idea/2025.2/cherry_pick_status.png)

Cherry pick operation status

### Apply a commit to another branch

1. In the [Branches](https://www.jetbrains.com/help/phpstorm/manage-branches.html) popup (main menu Git | Branches), select the target branch that you want to integrate the changes to and choose Checkout from the popup menu to switch to that branch.
2. Open the Git tool window Alt 0 9 and switch to the Log tab.
3. Locate the commit containing the changes you want to cherry-pick.
	You can filter commits by branch, user or date. You can also click on the toolbar and select Highlight | Non-Picked Commits option to grey out the commits that have already been applied to the current branch. If you know the commit hash, or are looking for a tagged commit, you can also use the Go to Hash / Branch / Tag action (press Ctrl 0 F in the Log tab of the Git tool window Alt 0 9, or click on the toolbar).
4. Select the required commit. Use the information in the Commit Details area to make sure these are the changes you want to transfer to another branch.
5. Click Cherry-pick on the toolbar. PhpStorm will apply and commit changes to the target branch.
6. If the cherry-pick failed with conflicts, the selected changes will appear in the Changes area that you can see in the Commit tool window Alt 0 0. You can review these changes and commit them later if necessary.
	If you want PhpStorm to create changelists automatically in case of cherry-pick fail, switch on the corresponding setting in Settings | Version Control | Changelists.
7. Push the changes to the target branch.

The following video will help you see how cherry-pick works:

## Apply separate changes

Imagine you've made some changes to a file that you want to apply to a different branch, but these changes were committed together with other modified files. PhpStorm lets you apply separate changes instead of cherry-picking an entire commit.

1. In the [Branches](https://www.jetbrains.com/help/phpstorm/manage-branches.html) popup (main menu Git | Branches), select the target branch that you want to integrate the changes to and choose Checkout from the popup menu to switch to that branch.
2. Open the Git tool window Alt 0 9 and switch to the Log tab.
3. Locate the commit that contains the changes that you want to apply.
	You can filter commits by branch, user or date. You can also click on the toolbar and select Highlight | Non-Picked Commits option to grey out the commits that have already been applied to the current branch. If you know the commit hash, or are looking for a tagged commit, you can also use the Go to Hash / Branch / Tag action (press Ctrl 0 F in the Log tab of the Git tool window Alt 0 9, or click on the toolbar).
4. In the Commit details pane on the right, select the files containing the changes you want to apply to the target branch and select Cherry-Pick Selected Changes from the context menu.
5. In the dialog that opens, select an existing changelist or enter the name for a new changelist and click OK.
6. Commit the changes and then push them to the target branch.

## Apply separate files

In addition to applying separate changes to a single file, you can copy an entire file's contents to a different branch. This may be useful, for example, if the file you want to apply doesn't exist in the target branch, or if changes to it were made within several commits.

1. [Switch](https://www.jetbrains.com/help/phpstorm/manage-branches.html#switch-branches) to the branch to which the changes will be applied.
2. In the [Branches](https://www.jetbrains.com/help/phpstorm/manage-branches.html) popup (main menu Git | Branches) or in the Branches pane of the Git tool window, select the branch that contains the file you want to apply and choose Show Diff with Working Tree from the context menu.
	The Changes tool window that opens shows a list of all files that are different in the selected branch compared with the branch that is currently checked out:
	![Show diff between selected branch and current working tree](https://resources.jetbrains.com/help/img/idea/2025.2/ps_git_branches_diff.png)
	Show diff between selected branch and current working tree
	- Files that exist in the selected branch and are missing in the current branch are marked with gray.
	- Files that exist in the current branch but are missing in the selected branch are marked with green.
	- Files that contain differences between the selected and the current branch are marked with blue.
	You can click the Swap Branches link to change which branch is considered as a base against which you are comparing the other branch.
3. Select the file that you want to apply to the current branch, and choose Get from Branch from the context menu or click on the toolbar.
4. Commit and push the changes. PhpStorm will copy the entire contents of the file to the current branch.

> ### note
> 
> You can also apply a file to another branch from the Project view: select the folder containing the file you want to copy, and choose Git | Compare with Branch | <branch\_name> from the context menu, then click the Get icon on the toolbar.

Thanks for your feedback!

Was this page helpful?

### See also

#### External Links

- [git-rebase official documentation](https://git-scm.com/docs/git-rebase)