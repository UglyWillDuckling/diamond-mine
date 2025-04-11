---
author:
  - "[[Scott Chacon]]"
about:
  - "[[git]]"
tags:
  - 📚Book
---
![[~/x/8dfcd8268886d8282ab786d68693cdb3_MD5.jpg]]
The most prominent and widely read book on [[git]].
https://git-scm.com/book/en/v2
___
# chapter 1 - About Version Control

What is “version control”, and why should you care? Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. For the examples in this book, you will use software source code as the files being version controlled, though in reality you can do this with nearly any type of file on a computer.

## types

- Local
- Centralized
- Distrubuted

## Distributed Version Control Systems
> ==the best==

This is where Distributed Version Control Systems (DVCSs) step in. In a DVCS (such as Git, Mercurial or Darcs), clients don’t just check out the latest snapshot of the files; rather, they fully mirror the repository, including its full history. Thus, if any server dies, and these systems were collaborating via that server, any of the client repositories can be copied back up to the server to restore it. Every clone is really a full backup of all the data.

![[~/x/1ec147ac16f49fc588589df022f748c4_MD5.jpeg|Open: distributed.png]]

Furthermore, many of these systems deal pretty well with having **several remote repositorie**s they can work with, so you can collaborate with different groups of people in different ways simultaneously within the same project. This allows you to set up several types of workflows that aren’t possible in centralized systems, such as hierarchical models.

> [!check] Collaboration 🤝
> You can collaborate with several groups of people in different ways on the **same** project

# History of Git

- started in 2005

## goals

- Speed
- **Simple** design
- Strong support for **non-linear** development (thousands of parallel **branches**)
- Fully **distributed**
- Able to handle large projects like the Linux kernel efficiently

# What is Git?

## Snapshots, Not Differences

The major difference between Git and any other VCS (Subversion and friends included) is the way Git thinks about its data. Conceptually, most other systems store information as a list of file-based changes. These other systems (CVS, Subversion, Perforce, and so on) think of the information they store as a set of files and the changes made to each file over time (this is commonly described as delta-based version control).

- **delta-based**: information as a set of files

[[~/x/f32fc30d35668a11de0a88800eb0d46f_MD5.jpeg|Open: deltas.png]]
![[~/x/f32fc30d35668a11de0a88800eb0d46f_MD5.jpeg]]

Git doesn’t think of or store its data this way. Instead, Git thinks of its data more like a series of snapshots of a miniature filesystem. With Git, every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot. To be efficient, if files have not changed, Git doesn’t store the file again, just a link to the previous identical file it has already stored. Git thinks about its data more like a stream of snapshots.

- **git**
	- `snapshots`: each difference creates another snapshot of **all** the files
		- in case a file was **not modified**, a `link` to the existing version is created

![[~/x/ac0b0728c3274b8b3c7e270fa9fb7d4d_MD5.jpeg]]

##  Nearly Every Operation Is **Local**

Most operations in Git need only local files and resources to operate — generally no information is needed from another computer on your network. o

This also means that there is very little you can’t do if you’re offline or off VPN. If you get on an airplane or a train and want to do a little work, you can commit happily (to your local copy, remember?) until you get to a network connection to upload. If you go home and can’t get your VPN client working properly, you can still work. In many other systems, doing so is either impossible or painful. 

## Git Has Integrity
Everything in Git is checksummed before it is stored and is then referred to by that checksum. This means it’s impossible to change the contents of any file or directory without Git knowing about it.

A SHA-1 hash looks something like this:
`24b9da6552252987aa493b52f8696cd6d3b00373`

You will see these hash values all over the place in Git because it uses them so much. In fact, Git stores everything in its database not by file name but by the hash value of its contents.

## Git Generally Only Adds Data

When you do actions in Git, ==nearly all of them only _add_ data to the Git database.== 

It is hard to get the system to do anything that is not undoable or to make it erase data in any way. As with any VCS, you can lose or mess up changes you haven’t committed yet, but after you commit a snapshot into Git, **it is very difficult to lose**, especially if you regularly `push your database` to another repository.

## The Three States

Here is the **main** thing to remember about Git if you want the rest of your learning process to go smoothly. Git has three main states that your files can reside in: **modified, staged, and committed:**

- `Modified` means that you have changed the file but have ==not committed== it to your database yet.
- `Staged` means that you have marked a modified file in its current version to go into your ==next commit snapshot==.
- `Committed` means that the data is ==safely stored== in your local database.

This leads us to the three main sections of a Git project: the working tree, the staging area, and the Git directory.

![[~/x/f58bd5a9c4fd6c4d7503fd40cf6a9bdd_MD5.jpeg]]

The working tree is a single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify.

The staging area is a file, generally contained in your Git directory, that stores information about what will go into your next commit. Its technical name in Git parlance is the “index”, but the phrase “staging area” works just as well.

The Git directory (Repository) is where Git stores the metadata and object database for your project. This is the most important part of Git, and it is what is copied when you clone a repository from another computer.

The basic Git workflow goes something like this:

1. You modify files in your working tree.
2. You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the **staging area**.
3. You do a **commit**, which takes the files as they are in the staging area and stores that **snapshot** permanently to your Git directory.

## settings

### Checking Your Settings

If you want to check your configuration settings, you can use the git config --list command to list all the settings Git can find at that point:

`git config --list`

```sh
user.name=John Doe
user.email=johndoe@example.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
```

You can also check what Git thinks a specific key’s value is by typing git config \<key\>:

`git config user.name`
John Doe

Since Git might read the same configuration variable value from more than one file, it’s possible that you have an unexpected value for one of these values and you don’t know why. In cases like that, you can query Git as to the origin for that value, and it will tell you which configuration file had the final say in setting that value:

`git config --show-origin rerere.autoUpdate`
	file:/home/johndoe/.gitconfig	false

Getting Help
If you ever need help while using Git, there are three equivalent ways to get the comprehensive manual page (manpage) help for any of the Git commands:

git help \<verb\>
git \<verb\> --help
man git-\<verb\>

For example, you can get the manpage help for the git config command by running this:

`git help config`

If the manpages and this book aren’t enough and you need in-person help, you can try the #git, #github, or #gitlab channels on the [[Libera Chat]] [[IRC]] server, which can be found at https://libera.chat/. These channels are regularly filled with hundreds of people who are all very knowledgeable about Git and are often willing to help.

In addition, if you don’t need the full-blown manpage help, but just need a quick refresher on the available options for a Git command, you can ask for the more concise “help” output with the -h option, as in:

```
git add -h
usage: git add [<options>] [--] <pathspec>...

    -n, --dry-run               dry run
    -v, --verbose               be verbose

    -i, --interactive           interactive picking
    -p, --patch                 select hunks interactively
    -e, --edit                  edit current diff and apply
    -f, --force                 allow adding otherwise ignored files
    -u, --update                update tracked files
    --renormalize               renormalize EOL of tracked files (implies -u)
    -N, --intent-to-add         record only the fact that the path will be added later
    -A, --all                   add changes from all tracked and untracked files
```

# Chapter 2 - GIT BASICS

If you can read only one chapter to get going with Git, this is it. This chapter covers every basic command you need to do the vast majority of the things you’ll eventually spend your time doing with Git. By the end of the chapter, you should be able to configure and initialize a repository, begin and stop tracking files, and stage and commit changes. We’ll also show you how to set up Git to ignore certain files and file patterns, how to undo mistakes quickly and easily, how to browse the history of your project and view changes between commits, and how to push and pull from remote repositories.

## `git init`

This creates a new **subdirectory** named `.git` that contains all of your necessary repository files — ==a Git repository skeleton==. At this point, nothing in your project is tracked yet. 

If you want to start version-controlling **existing files** (as opposed to an empty directory), you should probably begin tracking those files and do an initial commit. You can accomplish that with a few `git add` commands that specify the files you want to track, followed by a git commit:

```
git add *.c
git add LICENSE
git commit -m 'Initial project version'
```

## `clone`

If you want to get a copy of an existing Git repository — for example, a project you’d like to contribute to — the command you need is git clone.

If you want to clone the repository into a directory named something other than libgit2, you can specify the new directory name as an additional argument:

`git clone https://github.com/libgit2/libgit2 mylibgit`

## Recording Changes to the Repository

Remember that each file in your working directory can be in one of two states: **tracked** or untracked. 

**Tracked** files are files that were in the last snapshot, as well as any newly staged files; they can be **unmodified**, **modified**, or **staged**. In short, tracked files are files that Git knows about.

**Untracked** files are everything else — any files in your working directory that were not in your last snapshot and are not in your staging area. When you first clone a repository, all of your files will be tracked and unmodified because Git just checked them out and you haven’t edited anything.

- 2 states
	- **tracked**
	- **untracked**

As you edit files, Git sees them as `modified`, because you’ve changed them since your last commit. As you work, you selectively stage these modified files and then commit all those staged changes, and the cycle repeats.

[[~/x/fd767c02f62018aa8710d603c11ca878_MD5.jpeg|Open: lifecycle.png]]
![[~/x/fd767c02f62018aa8710d603c11ca878_MD5.jpeg]]

### scenario

Let’s say you add a new file to your project, a simple README file. If the file didn’t exist before, and you run git status, you see your untracked file like so:

```
$ echo 'My Project' > README
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    README

nothing added to commit but untracked files present (use "git add" to track)
```

You can see that your new README file is `untracked`.

**Untracked** basically means that Git sees a file you didn’t have in the previous `snapshot` (`commit`), and which hasn’t yet been staged. 
Git won’t start including it in your commit snapshots until you explicitly tell it to do so. 
==It does this so you don’t accidentally begin including generated binary files or other files that you did not mean to include.== 

You do want to start including `README`, so let’s start tracking the file.

In order to begin tracking a new file, you use the command[[git add]]. To begin tracking the `README` file, you can run this:

```
git add README

git status

On branch master
Your branch is up-to-date with 'origin/master'

Changes to be committed:

    new file:   README
```

You can tell that it’s **staged** because it’s under the “Changes to be committed” heading. 

Both files are staged and will go into your next commit. At this point, suppose you remember one little change that you want to make in `CONTRIBUTING.md` before you commit it. You open it again and make that change, and you’re ready to commit. However, let’s run git status one more time:

```
vim CONTRIBUTING.md
git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
    modified:   CONTRIBUTING.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

What the heck? Now CONTRIBUTING.md is listed as **both** `staged` and `unstaged`. How is that possible? It turns out that Git stages a file exactly as it is when you run the git add command. 
If you commit now, the version of `CONTRIBUTING.md` as it was when you last ran the git add command is how it will go into the commit, **not** the version of the file as it looks in your working directory when you run git commit. 

If you modify a file after you run git add, you have to run git add again to stage the latest version of the file.
### Short Status

While the git status output is pretty comprehensive, it’s also quite wordy. Git also has a short status flag so you can see your changes in a more compact way. If you run git status -s or git status --short you get a far more simplified output from the command:

```
git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

New files that aren’t tracked have a `??` next to them, new files that have been added to the staging area have an `A`, modified files have an M and so on. 

There are **two columns**: 
-  ==left-hand== column :  **staging** **area** status
- ==right-hand== column: **working tree** status

So for example in that output, the `README` file is modified in the working directory but not yet staged(`M`), while the lib/simplegit.rb file is modified and staged(`M`). 
The `Rakefile` was **modified, staged and then modified again**(`MM`), so there are changes to it that are both staged and unstaged.

## ignore

Often, you’ll have a class of files that you don’t want Git to automatically add or even show you as being untracked.

The rules for the patterns you can put in the .gitignore file are as follows:

- Blank lines or lines starting with # are ignored.

- Standard **glob** patterns[^1] work, and will be applied recursively throughout the entire working tree.
- **start** patterns with a forward slash (/) to avoid recursivity.
- **end** patterns with a forward slash (/) to specify a directory.
-  **negate** a pattern by starting it with an exclamation point (!).

Glob patterns are like simplified regular expressions that shells use. An asterisk (`\*`) matches zero or more characters; [abc] matches any character inside the brackets (in this case a, b, or c); a question mark (?) matches a single character; and brackets enclosing characters separated by a hyphen ([0-9]) matches any character between them (in this case 0 through 9). You can also use two asterisks to match nested directories; a/**/z would match a/z, a/b/z, a/b/c/z, and so on.

Here is another example .gitignore file:

```sh
# ignore all .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in any directory named build
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory and any of its subdirectories
doc/**/*.pdf
```

[^1]: [[glob pattern]]

## Viewing Your Staged and Unstaged Changes

If the [[git status command]] is too vague for you — you want to know exactly what you changed, not just which files were changed — you can use the [[git diff command]]. 
We’ll cover git diff in more detail later, but you’ll probably use it most often to answer these two questions: 
1. What have you changed but not yet staged? 
2. And what have you staged that you are about to commit? 

Although git status answers those questions very generally by listing the file names, git diff shows you the exact lines added and removed — the **patch**, as it were.

Let’s say you edit and stage the `README` file again and then edit the `CONTRIBUTING`.md file without staging it. If you run your `git status` command, you once again see something like this:

```sh
git status

On branch master

Changes to be committed:

    modified:   README

Changes not staged for commit:

    modified:   CONTRIBUTING.md
```

To see what you’ve `changed` **but not yet staged**, type `git diff` with no other arguments:

`git diff`

```diff
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index 8ebb991..643e24f 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
@@ -65,7 +65,8 @@ branch directly, things can get messy.
 Please include a nice description of your changes when you submit your PR;
 if we have to read the whole diff to figure out why you're contributing
 in the first place, you're less likely to get feedback and have your change
-merged in.
+merged in. Also, split your changes into comprehensive chunks if your patch is
+longer than a dozen lines.

 If you are starting to work on a particular area, feel free to submit a PR
 that highlights your work in progress (and note in the PR title that it's
```

> [!abstract] what it does
> That command compares what is in your **working directory** with what is in your **staging** area. The result tells you the **changes** you’ve made that you haven’t yet staged.

If you want to see what you’ve staged that will go into your next commit, you can use git diff --staged. This command compares your staged changes to your last commit:

`git diff --staged`
```diff
diff --git a/README b/README
new file mode 100644
index 0000000..03902a1
--- /dev/null
+++ b/README
@@ -0,0 +1 @@
+My Project
```

> [!attention] take note
> `git diff` by itself doesn’t show all changes made since your last commit — only changes that are still unstaged. 
> 
> **If you’ve staged all of your changes, git diff will give you no output.**

### notes 📔
- and `git diff --cached` to see what you’ve staged so far (`--staged and --cached are synonyms`)

### Git Diff in an External Tool

We will continue to use the git diff command in various ways throughout the rest of the book. There is another way to look at these diffs if you prefer a graphical or external diff viewing program instead. If you run git difftool instead of git diff, you can view any of these diffs in software like emerge, vimdiff and many more (including commercial products). Run git difftool --tool-help to see what is available on your system.

## Committing Your Changes

Now that your staging area is set up the way you want it, you can commit your changes. Remember that anything that is still unstaged — any files you have created or modified that you haven’t run git add on since you edited them — won’t go into this commit. They will stay as modified files on your disk.

### notes
- For an even more explicit reminder of what you’ve modified, you can pass the -v option to git commit. Doing so also puts the diff of your change in the editor

### example

```
git commit -m "Story 182: fix benchmarks for speed"
[master 463dc4f] Story 182: fix benchmarks for speed
 2 files changed, 2 insertions(+)
 create mode 100644 README
```

### **Skipping** the **Staging** Area

Although it can be amazingly useful for crafting commits exactly how you want them, the staging area is sometimes a bit more complex than you need in your workflow.

Adding the -a option to the git commit command makes Git automatically stage every file **that is already** tracked before doing the commit, letting you skip the git add part:

```
git status

On branch master
Your branch is up-to-date with 'origin/master'

Changes not staged for commit:

    modified:   CONTRIBUTING.md

no changes added to commit (use "git add" and/or "git commit -a")

git commit -a -m 'Add new benchmarks'
[master 83e38c7] Add new benchmarks
 1 file changed, 5 insertions(+), 0 deletions(-)
```

- use `git commit -a -m ` to commit **all** changes
	- **only tracked** files will be included

Notice how you don’t have to run git add on the `CONTRIBUTING`.md file in this case before you commit. That’s because the -a flag includes all changed files. This is convenient, but be careful; sometimes this flag will cause you to include unwanted changes.

### **Removing** Files

To remove a file from Git, you have to remove it from your tracked files (more accurately, remove it from your staging area) and then commit. The [[git rm command]] does that, and also removes the file from your working directory so you don’t see it as an untracked file the next time around.

If you simply remove the file from your working directory, it shows up under the “Changes not staged for commit” (that is, unstaged) area of your git status output:

```
rm PROJECTS.md

git status
On branch master

Changes not staged for commit:

        deleted:    PROJECTS.md
```

Then, if you run git rm, it stages the file’s removal:

```
git rm PROJECTS.md
rm 'PROJECTS.md'
git status
On branch master

Changes to be committed:

    deleted:    PROJECTS.md
```

==The next time you `commit`, the file will be gone and no longer tracked.== 

If you modified the file or had already added it to the staging area, you must force the removal with the `-f` option. 
This is a safety feature to prevent accidental removal of data that hasn’t yet been recorded in a snapshot and that can’t be recovered from Git.

Another useful thing you may want to do is to keep the file in your working tree but remove it from your staging area. In other words, you may want to keep the file on your hard drive but not have Git track it anymore. 
This is particularly useful if you forgot to add something to your .gitignore file and accidentally staged it, like a large log file or a bunch of .a compiled files. 

To do this, use the `--cached` option: `git rm --cached README`

You can pass files, directories, and file-glob patterns to the git rm command. That means you can do things such as:

`git rm log/\*.log`

📔Note the backslash (\) in front of the \*. This is necessary because Git does its own filename expansion in addition to your shell’s filename expansion.

`git rm \*~` this removes all files whose names end with a ~

### **Moving** Files

Unlike many other VCSs, Git doesn’t explicitly track file movement. If you rename a file in Git, no metadata is stored in Git that tells it you renamed the file. However, Git is pretty smart about figuring that out after the fact — we’ll deal with detecting file movement a bit later.

Thus it’s a bit confusing that Git has a mv command. If you want to rename a file in Git, you can run something like:

git mv file_from file_to

and it works fine. In fact, if you run something like this and look at the status, you’ll see that Git considers it a renamed file:

```sh
git mv README.md README

git status
On branch master

Changes to be committed:
    renamed:    README.md -> README
```

However, this is **equivalent** to running something like this:

```
mv README.md README
git rm README.md
git add README
```

Git figures out that it’s a rename implicitly, so it doesn’t matter if you rename a file that way or with the mv command. The only real difference is that git mv is one command instead of three — it’s a convenience function. More importantly, you can use any tool you like to rename a file, and address the add/rm later, before you commit.

## Viewing the Commit History

One of the more helpful options is -p or --patch, which shows the difference (the patch output) introduced in each commit. You can also limit the number of log entries displayed, such as using -2 to show only the last two entries.

These examples use a very simple project called `simplegit`.

`git clone https://github.com/schacon/simplegit-progit`

One of the more helpful options is -p or `--patch`, which shows the difference (the patch output) introduced in each commit. You can also limit the number of log entries displayed, such as using `-2` to show only the last two entries.

```diff
git log -p -2
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

diff --git a/Rakefile b/Rakefile
index a874b73..8f94139 100644
--- a/Rakefile
+++ b/Rakefile
@@ -5,7 +5,7 @@ require 'rake/gempackagetask'
 spec = Gem::Specification.new do |s|
     s.platform  =   Gem::Platform::RUBY
     s.name      =   "simplegit"
-    s.version   =   "0.1.0"
+    s.version   =   "0.1.1"
     s.author    =   "Scott Chacon"
     s.email     =   "schacon@gee-mail.com"
     s.summary   =   "A simple gem for using Git in Ruby code."

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 16:40:33 2008 -0700

    Remove unnecessary test

diff --git a/lib/simplegit.rb b/lib/simplegit.rb
index a0a60ae..47c6340 100644
--- a/lib/simplegit.rb
```

**parts**
- commit hash
- commit message
- commit info
- diff

**notes 📔**
- the `-2` at the end will limit the log to the first **2** entries 🎯

You can also use a series of summarizing options with git log. For example, if you want to see some **abbreviated** stats for each commit, you can use the `--stat` option:

```sh
git log --stat
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

 Rakefile | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 16:40:33 2008 -0700

Remove unnecessary test

 lib/simplegit.rb | 5 -----
 1 file changed, 5 deletions(-)

commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 10:31:28 2008 -0700

    Initial commit

 README           |  6 ++++++
 Rakefile         | 23 +++++++++++++++++++++++--
 lib/simplegit.rb | 25 +++++++++++++++++++++++++-
 3 files changed, 54 insertions(+)
```

🗒the file list for each commit with number of added/removed lines

Another really useful option is `--pretty` [^3]. This option changes the log output to formats other than the default. A few prebuilt option values are available for you to use. The **oneline** value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits. In addition, the **short**, full, and **fuller** values show the output in roughly the same format but with less or more information, respectively:

- options
	- **oneline**
	- short
	- full
	- fuller

```
git log --pretty=oneline
ca82a6dff817ec66f44342007202690a93763949 Change version number
085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 Remove unnecessary test
a11bef06a3f659402fe7563abf99ad00de2209e6 Initial commit
```

The most interesting option value is format, which allows you to specify your own log output format. This is especially useful when you’re generating output for machine parsing.

```
git log --pretty=format:"%h - %an, %ar : %s"
ca82a6d - Scott Chacon, 6 years ago : Change version number
085bb3b - Scott Chacon, 6 years ago : Remove unnecessary test
a11bef0 - Scott Chacon, 6 years ago : Initial commit
```

Here is the Markdown table based on the input:

| Specifier | Description of Output                           |
| --------- | ----------------------------------------------- |
| `%H`      | Commit hash                                     |
| `%h`      | Abbreviated commit hash                         |
| `%T`      | Tree hash                                       |
| `%t`      | Abbreviated tree hash                           |
| `%P`      | Parent hashes                                   |
| `%p`      | Abbreviated parent hashes                       |
| `%an`     | Author name                                     |
| `%ae`     | Author email                                    |
| `%ad`     | Author date (format respects the --date=option) |
| `%ar`     | Author date, relative                           |
| `%cn`     | Committer name                                  |
| `%ce`     | Committer email                                 |
| `%cd`     | Committer date                                  |
| `%cr`     | Committer date, relative                        |
| `%s`      | Subject                                         |
The **oneline** and **format** option values are particularly useful with another log option called `--graph`. This option adds a nice little ASCII[^2] graph showing your branch and merge history:

**graph**

```
git log --pretty=format:"%h %s" --graph
* 2d3acf9 Ignore errors from SIGCHLD on trap
*  5e3ee11 Merge branch 'master' of https://github.com/dustin/grit.git
|\
| * 420eac9 Add method for getting the current branch
* | 30e367c Timeout code and tests
* | 5a09431 Add timeout protection to grit
* | e1193f8 Support for heads with slashes in them
|/
* d6016bc Require time for xmlschema
*  11d191e Merge branch 'defunkt' into local
```


Table 2. Common options to git log

Here is the converted table in Markdown format:

| Option            | Description                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-p`              | Show the patch introduced with each commit.                                                                                                        |
| `--stat`          | Show statistics for files modified in each commit.                                                                                                 |
| `--shortstat`     | Display only the changed/insertions/deletions line from the `--stat` command.                                                                      |
| `--name-only`     | Show the list of files modified after the commit information.                                                                                      |
| `--name-status`   | Show the list of files affected with added/modified/deleted information as well.                                                                   |
| `--abbrev-commit` | Show only the first few characters of the SHA-1 checksum instead of all 40.                                                                        |
| `--relative-date` | Display the date in a relative format (for example, “2 weeks ago”) instead of using the full date format.                                          |
| `--graph`         | Display an ASCII graph of the branch and merge history beside the log output.                                                                      |
| `--pretty`        | Show commits in an alternate format. Option values include `oneline`, `short`, `full`, `fuller`, and `format` (where you specify your own format). |
| `--oneline`       | Shorthand for `--pretty=oneline --abbrev-commit` used together.                                                                                    |

[^2]: [[ASCII]]
[^3]: [[Git - pretty-formats Documentation]]

### **Limiting** Log Output

In addition to output-formatting options, git log takes a number of useful limiting options; that is, options that let you show only a subset of commits. You’ve seen one such option already — the -2 option, which displays only the last two commits. In fact, you can do -n, where n is any integer to show the last n commits. 

In reality, you’re unlikely to use that often, because Git by default pipes all output through a pager so you see only one page of log output at a time.

However, the time-limiting options such as --since and --until are very useful. For example, this command gets the list of commits made in the last two weeks:

```
git log --since=2.weeks
```

This command works with lots of formats — you can specify a specific date like "2008-01-15", or a relative date such as "2 years 1 day 3 minutes ago".

You can also filter the list to commits that match some search criteria. The --`author` option allows you to filter on a specific author, and the --`grep` option lets you search for keywords in the commit messages.

🗒
	You can specify more than one instance of both the --author and --grep search criteria, which will limit the commit output to commits that match any of the --author patterns and any of the --grep patterns; however, adding the --all-match option further limits the output to just those commits that match all --grep patterns.

Another really helpful filter is the `-S` option (colloquially referred to as Git’s “pickaxe” option [^4]), which takes a string and shows only those commits that **changed the number of occurrences of that string**. 
For instance, if you wanted to find the last commit that added or removed a reference to a specific function, you could call:

```
git log -S function_name
```

The last really useful option to pass to git log as a filter is a path. If you specify a directory or file name, you can limit the log output to commits that introduced a change to those files. This is always the last option and is generally preceded by double dashes (--) to separate the paths from the options:

```
git log -- path/to/file
```

**Table 3**. Options to limit the output of git log

| Option                | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| `-<n>`                | Show only the last n commits.                                                |
| `--since`, `--after`  | Limit the commits to those made **after** the specified date.                |
| `--until`, `--before` | Limit the commits to those made **before** the specified date.               |
| `--author`            | Only show commits in which the author entry matches the specified string.    |
| `--committer`         | Only show commits in which the committer entry matches the specified string. |
| `--grep`              | Only show commits with a commit message containing the string.               |
| `-S`                  | Only show commits adding or removing code matching the string.               |

For `example`, if you want to see which commits modifying test files in the Git source code history were committed by Junio Hamano in the **month of October 2008** and are not merge commits, you can run something like this:

```
git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/

5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch
```

- limit to specific month(`since`, `before`)
- filter by author (`--author`)
- no merges
- `t/` directory (`-- t/` at the end)

[^4]: [[The git pickaxe]]

## **Undoing** Things

At any stage, you may want to undo something. Here, we’ll review a few basic tools for undoing changes that you’ve made. Be careful, because you can’t always undo some of these undos. 

- ! **This is one of the few areas in Git where you may lose some work if you do it wrong.**

One of the common undos takes place when you commit too early and possibly forget to add some files, or you mess up your commit message. 
If you want to redo that commit, make the additional changes you forgot, stage them, and commit again using the `--amend` option:

```
git commit --amend
```

If you’ve made no changes since your last commit (for instance, you run this command immediately after your previous commit), then your snapshot will look exactly the same, and **all you’ll change is your commit message.**

As an example, if you commit and then realize you forgot to stage the changes in a file you wanted to add to this commit, you can do something like this:

```
git commit -m 'Initial commit'
git add forgotten_file
git commit --amend
```
You end up with a **single commit** — the second commit ==replaces== the results of the first

🗒
	It’s important to understand that when you’re `amending` your last commit, you’re not so much fixing it as **replacing** it entirely with a ==<mark style="background: #BBFABBA6;">new, improved</mark>== commit that pushes the old commit out of the way and puts the new commit in its place. Effectively, it’s as if the previous commit never happened, and it won’t show up in your repository history.

- amending is **replacing**

### **Unstaging** a Staged File

The next two sections demonstrate how to work with your staging area and working directory changes. 

For example, let’s say you’ve changed two files and want to commit them as two separate changes, but you accidentally type git add * and stage them both. How can you unstage one of the two?

```sh
git add *

git status
On branch master

Changes to be committed:

    renamed:    README.md -> README
    modified:   CONTRIBUTING.md

git reset HEAD CONTRIBUTING.md

Unstaged changes after reset:
M	CONTRIBUTING.md

git status
On branch master

Changes to be committed:

    renamed:    README.md -> README

Changes not staged for commit:

    modified:   CONTRIBUTING.md
```

The command is a bit strange, but it works. The `CONTRIBUTING`.md file is modified but once again **unstaged**. [^5]

[^5]: [[git reset command]]

### **Unmodifying** a Modified File

What if you realize that you don’t want to keep your changes to the `CONTRIBUTING`.md file? How can you easily **unmodify** it — revert it back to what it looked like when you last committed (or initially cloned, or however you got it into your working directory)? 

```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md


git checkout -- CONTRIBUTING.md

git status
On branch master

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README
```

❗
	It’s important to understand that `git checkout -- <file>` [^6] is a dangerous command. Any local changes you made to that file are gone — Git just replaced that file with the last staged or committed version. Don’t ever use this command unless you absolutely know that you don’t want those unsaved local changes.

[^6]: [[git checkout]]

### Undoing things with git **restore**

Git version `2.23.0` introduced a new command: git restore. It’s basically an alternative to git reset which we just covered.

Let’s retrace our steps, and undo things with git restore instead of git reset. [^7]

#### Unstaging a Staged File with git **restore**

```
$ git add *
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   CONTRIBUTING.md
	renamed:    README.md -> README
```

```
git restore --staged CONTRIBUTING.md
git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	renamed:    README.md -> README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   CONTRIBUTING.md
```

#### Unmodifying a Modified File with git **restore**

```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   CONTRIBUTING.md
```

```
$ git restore CONTRIBUTING.md
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	renamed:    README.md -> README
```

- you can revert changes to files with [[git restore]]
	- for unstaged files just use the command 
	- for staged files use the flag `--staged`

[^7]: [[git restore]]

## Working with **Remotes**

To be able to collaborate on any Git project, you need to know how to manage your remote repositories. **Remote repositories are versions of your project that are hosted on the Internet or network somewhere.** 

You can have **several** of them, each of which generally is either read-only or read/write for you. Collaborating with others involves managing these remote repositories and pushing and pulling data to and from them when you need to share work. 

Managing remote repositories includes knowing how to add remote repositories, remove remotes that are no longer valid, manage various remote branches and define them as being **tracked** or not, and more.

- add 
- remove
- manage branches - remote tracking
- ..

