---
author:
  - "[[Marcin Wosinek]]"
created: 2025-04-11
published: 2022-11-09
source: https://how-to.dev/the-detached-head-state-in-git-what-it-is-and-how-to-fix-it
tags:
  - article/git/head
about:
  - "[[detached head]]"
---
![The "detached HEAD" state in Git: What it is and how to fix it](https://cdn.hashnode.com/res/hashnode/image/upload/v1667986343922/xiiqOw5aU.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)

The "detached HEAD" state in Git: What it is and how to fix it

[Marcin Wosinek](https://hashnode.com/@marcin-wosinek)

·

6 min read

A common source of confusion when using Git is not knowing what it all means when you see an output like this:

```shell
You are in 'detached HEAD' state. You can look around, make 
experimental changes and commit them, and you can discard any 
commits you make in thisstate without impacting any branches 
by switching back to a branch.
```

## What does it all mean?

To really understand what is happening, we need to look inside Git.

Git commits are immutable—meaning you can create new ones, but what’s already inside will never be changed. This is how our repository keeps data safe for us. The only way of making changes to the repository is by creating new commits.

Git commits gives us a stable, complete history of the changes to the repository. On top of this stable base, we have a dynamic part: branches. What can be surprising at first is that branches are just labels. They are pointing to one commit. They literally have no other data than the name and its position.

Anything besides that—for example,

- special meaning of main or master,
- patterns such as `feature/<info>`, or `<branch-owner>/<description>` —is just a convention the teams are using. From Git’s point of view, your `main` or `master` branch is no different than `lorem-ipsum`.

### Current commit

HEAD is a pointer to the current commit—the place where you are in the repository right now. It is used as:

- a reference point when you want to see the last changes to your working copy with `git diff`
- a commit that will be used as a parent when you create a new commit

Your HEAD is a central piece of the state of your repository.

### Normal state

The typical workflow with Git is as follows:

- you are on some branch,
- you create new commit, and
- Git moves your branch to this new commit.

If you limit yourself to checking branches only, you will never leave this state. When you run `git status`, it tells you what branch you are on:

```shell
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

### Detached HEAD

So far, HEAD (current commit) and branch were in a normal, aligned state. Things get complicated when you check out something that is not a branch—for example, when you switch to a commit by its ID:

```shell
$ git checkout abc01e7
```

where `abc01e7` is an ID of any commit in the repository—it can be inside of any of the branches, on top of one of them, or in another place of the repository history.

Because you are not on a branch anymore, the `git status` changes to:

```shell
$ git status
HEAD detached at abc01e7
nothing to commit, working tree clean
```

To call your attention to this situation, Git colors `HEAD detached` to red.

## Why would you switch to commit instead of branch?

Because you can, and it can be sometimes useful. A common scenario is to see how the application worked a few commits earlier—for example, for troubleshooting. We noticed something wrong, such as a feature not working as expected, and we check out the last commit that we expect to work OK. In this way, we can pinpoint when exactly the issue was introduced.

## How does it impact the work?

Because you are not on a branch, Git doesn’t have a branch to update when you create a new commit. So all the commits you a create there are **stored** but are left dangling: there is no way to easily reach them, and, as such, they are assumed to be unimportant. At some point, the garbage collector will remove them permanently from the repository.

## How did it happen?

You left the branch and moved your HEAD elsewhere. It could happen:

- by checkout of non-branch reference:
	- `git checkout <commit ID>` —as above
	- `git checkout HEAD^` —the last commit
	- `git checkout <tag>` —tags are similar to branches, but they are meant to be immutable and are not updated as branches
- while your `git rebase` stopped halfway—due to conflict or to let you make changes to the commits,
- during `git bisect`

## How to fix it

Luckily, you get a bit of instruction directly in the CLI when you check out non-branch reference:

```shell
$ git checkout abc01e7
Note: switching to 'abc01e7'.

You are in 'detached HEAD' state. You can look around, make 
experimental changes and commit them, and you can discard any 
commits you make in this state without impacting any branches 
by switching back to a branch.

If you want to create a new branch to retain commits you 
create, you may do so (now or later) by using -c with the 
switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable 
advice.detachedHead to false
```

### Create a new branch

You can create a new branch, exactly in the point where you are—including all the commits that you maybe created from there. You can create the branch with the following syntax:

```shell
git switch -c <new-branch-name>
```

or the command form Git versions older then 2.23:

```shell
git checkout -b <new-branch-name>
```

Those commands **create** a new branch, and set it as your current branch.

Alternatively, you can just create a new branch on you current commit and stay in the detached HEAD state:

```shell
git branch <new-branch-name>
```

### Switch to a branch and merge your commits

Alternatively, you can pick an existing branch and either merge your dangling commits or cherry-pick them. If you are not sure what those terms mean, then stick to creating a new branch, because it will allow you to do the same things, but in a less confusing setup.

## How does it look in the tools

Besides the `git status`, how can you see this state?

### You can see it on your Git tree graph

If you use `git log --oneline --graph --decorate --all` (something [I recommend](https://how-to.dev/how-to-display-git-branches-as-a-tree-in-cli) to define as a `git tree` alias) it will show your HEAD differently. When it’s on branch, the output looks like this:

```shell
$ git tree
* abc01e7 (HEAD -> main, origin/main) Add lorem ipsum to readme
* edd3504 Add readme
```

The `HEAD` points to the branch you are on with an arrow. When you are in “detached HEAD” state, `main` and `HEAD` are displayed separately, as an unrelated reference:

```shell
$ git tree
* abc01e7 (HEAD, origin/main, main) Add lorem ipsum to readme
* edd3504 Add readme
```

The difference is subtle but obvious when you know why you should pay attention to it.

### GitHub desktop

At `main` branch:

![Image description](https://cdn.hashnode.com/res/hashnode/image/upload/v1667986225982/kUOJi_YRg.png?auto=compress,format&format=webp)

“Detached head” state:

![Image description](https://cdn.hashnode.com/res/hashnode/image/upload/v1667986228283/HRah2re6x.png?auto=compress,format&format=webp)

Can you see the difference in the middle part of the header? One is showing "Current branch"; while the other “Detached HEAD”.

### Source tree

At `main` branch:

![Image description](https://cdn.hashnode.com/res/hashnode/image/upload/v1667986230276/r3jCbdL4L.png?auto=compress,format&format=webp)

“Detached head” state:

![Image description](https://cdn.hashnode.com/res/hashnode/image/upload/v1667986232314/5_d4tQ2bm.png?auto=compress,format&format=webp)

It shows as the current branch HEAD.

## Want to learn more?

Git has many confusing parts when you start using it, but it gets way simpler once you understand better the [way it stores its data](https://how-to.dev/how-git-stores-data). If you are interested in learning more about Git, sign up below to get updates about my Git-focused content:

### Written by

## Marcin Wosinek

I'm JS developer with 13 years of professional experience. I'm always happy to teach my craft.

### Published on

## How to dev

Articles about programming. JavaScript and general advice for beginners in the industry.