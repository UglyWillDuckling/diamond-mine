---
author:
  - "[[Scott Chacon]]"
about:
  - "[[git]]"
created: 2025-10-07
published: 2024-02-08
source: https://blog.gitbutler.com/git-tips-3-really-large-repositories
previous: "[[Git Tips 2 New Stuff in Git]]"
next: "[[Git Tips 1- Oldies but Goodies]]"
tags:
  - howto/git
  - article/git
---
by

8 min read

Did you know that Git can handle enormous monorepos like Windows? Let's take a look at how.

![Git Tips 3: Really Large Repositories](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-15.55.00%402x.png)

In our third and final section of our [Git Tips series](https://blog.gitbutler.com/__GHOST_URL__/git-tips-and-tricks/), we're going to talk about how well Git now handles **very large** repositories and monorepos.

Do you want to use vanilla Git today to manage a 300GB repo of 3.5M files receiving a push every 20 seconds from 4000 developers without problems? **Read on!**

Here is our blog agenda. Our blogenda.

- [Prefetching](https://blog.gitbutler.com/#prefetching)
- [Commit Graph](https://blog.gitbutler.com/#commit-graph)
- [Filesystem Monitor](https://blog.gitbutler.com/#filesystem-monitor)
- [Partial Cloning](https://blog.gitbutler.com/#partial-cloning)
- [Sparse Checkouts](https://blog.gitbutler.com/#sparse-checkouts)
- [Scalar](https://blog.gitbutler.com/#scalar)

## First, Let's Thank Windows

Before we get started though, the first thing we have to do is thank Microsoft for nearly all of this.

In 2017, Microsoft successfully moved the Windows codebase to Git. Brian Harry wrote a really great blog post about it called [The Largest Git Repo on the Planet](https://devblogs.microsoft.com/bharry/the-largest-git-repo-on-the-planet/) that you should read if you're interested, but the size and scope of this repository is astounding.

- **3.5M** files
	- for reference, the Linux kernel is about 80k files, or 2% of that
- **300GB** repository (vs ~4.5G Linux kernel)
- **4,000** active developers
- **8,421** pushes per day (on average)
- **4,352** active topic branches

In order to get that to work in any possible way, Microsoft had a lot of work to do. With vanilla Git at that time, a lot of commands (ie, `git status`) would take hours if they ever finished at all. They needed to make every command close to as fast as Source Depot was.

The first solution to this problem was a new project called [VFS for Git](https://github.com/microsoft/VFSForGit) which was a virtual filesystem layer that did virtual checkouts and then requested files from a central server on demand.

Eventually they moved more and more of the solutions they developed to the [Scalar](https://github.com/microsoft/scalar) project, which got rid of the virtualization layer, and would instead request file contents on checkout rather than on demand.

Then they moved everything, piece by piece, into the [Microsoft Git](https://github.com/microsoft/git) fork and then finally every part of *that* was moved into [core Git](https://git-scm.com/docs/scalar).

So, as promised, if you want to use Git out of the box today to manage a 300GB repo of 3.5M files receiving a push every 20 seconds from 4000 developers, you can *100%* do so.

Let's get into everything they added for us.

## Prefetching

So, in the last blog post I talked about how running `git maintenance` on a repository will run prefetching and maintain your commit graph every hour. Let's cover the first of those. What is "prefetching"?

One of the things that the Windows devs found annoying was that fetches would often be slow because there was *so much* activity going on all the time. Whenever they would fetch, they have to get *all* the data since whatever the last time they manually fetched.

So in the cronjob, they added something called "prefetching", which will essentially run a fetch command every hour automatically for you.

However, it does not update your remote references like it normally would, instead it populates a special `refs/prefetch` area of your references.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-image-3.png)

These references aren't shown normally, even if you run something like `git log --all`, they are quite hidden from you. However, they are used in the remote server negotiation, which means that if you have this turned on, whenever you go to fetch, your computer is never more than 1 hour of pushes behind, data-wise.

Basically it makes manual fetches fast.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-14.41.05%402x.png)

Joke stolen from Martin Woodward:)

## Commit Graph

The other thing that `git maintenance` does every hour is update your commit graph data. What does that mean exactly?

Well, essentially, it makes walking your commit history faster.

Instead of opening up one commit object at a time to see what it's parent is, then opening up that object to see what it's parent is, etc, the commit graph is basically an index of all that information that can be quickly read in one go. This makes things like `git log --graph` or `git branch --contains` much, much faster. For most repositories this probably isn't a horrible problem, but when you start getting into millions of commits, it makes a huge difference.

Here's a benchmark of some log related subcommands run on the Linux kernel codebase with and without the commit graph data (from the [GitHub blog](https://github.blog/2022-08-30-gits-database-internals-ii-commit-history-queries/#the-commit-graph))

**Command**

**Without `commit-graph`**

**With `commit-graph`**

`git rev-list v5.19`

6.94s

0.98s

`git rev-list v5.0..v5.19`

2.51s

0.30s

`git merge-base v5.0 v5.19`

2.59s

0.24s

Here is a quick test that I did on the same Linux repo running `git log --graph --oneline` before and after writing a commit graph file.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-14.52.44%402x.png)

Again, if you have your `maintenance` cron jobs running, this is just magically done for you constantly, you don't really have to do anything explicit.

## Filesystem Monitor

One of the things that VFS for Git needed was a filesystem monitor so that it could detect when virtual file contents were being requested and fetch them from a central server if needed.

This monitor was eventually utilized to speed up the `git status` command by updating the index based on filesystem modification events rather than running `stat` on every file, every time when you run it.

While the former became unnecessary when the virtualization layer was abandoned, the latter was integrated into Git core. If you want much, much faster `git status` runs for very large working directories, the new Git filesystem monitor is a lifesaver.

Basically you just set these config settings:

```
$ git config core.fsmonitor true
```

What this will do is add a setting that the `git status` command will see when it runs, indicating that it should be using the [fsmonitor-daemon](https://git-scm.com/docs/git-fsmonitor--daemon). If this daemon is not running, it will start it.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-14.59.36%402x.png)

fsmonitor on Chromium makes status 20x faster

So, the first time you run `status` after setting the config setting, it won't be much faster. But every time after that it will be massively faster.

Again, there's nothing really to explicitly do after setting the value, things just get faster.

## Partial Cloning

Another big issue with large repositories is clone size. As you probably know, by default Git will fetch everything. You don't even need to have a 300GB repository for this to be a problem. [Linux](https://github.com/torvalds/linux) is over 4GB, [Chromium](https://github.com/chromium/chromium) is over 20GB. A full Chromium clone can easily take an hour, even over a pretty fast connection.

Now, for a long time Git has had shallow clones. You could almost always run something like `git clone --depth=1` to get only the last commit and the objects it needs and then `git fetch --unshallow` to get the rest of the history later if needed. But it did break lots of things. You can't `blame`, you can't `log`, etc.

However, now Git has both blobless and treeless clones. So you do get the whole history (all of the commits), but you don't locally have the actual content. Let's ignore the treeless clones for now because it's not generally recommended, but the blobless clone is.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-15.12.29%402x.png)

A full clone of the Linux repository is 4.6G, or (for me) a 20 min process

If you want to do a blobless clone, you just pass `--filter=blob:none`

This will change the process a little. It will download all the commits and trees, which in the case of cloning the Linux kernel reduces 4.6G to 1.4G, and it will then do a *second* object fetch for just the blobs that it needs in order to populate the checkout.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-15.14.06%402x.png)

So you can see that instead of 20 minutes for the clone, it took me 4.5 minutes. You can also see that it did two fetches, one for the 1.4GBs of commit and tree data, and a second for the 243MB of files it needs for my local checkout.

Now, there are downsides to this too. If you want to run a command that needs data that is not there, Git will have to go back to the server and request those objects. Luckily, it does this on-demand as it needs the objects, but it can make something like `blame` do a bunch of roundtrips.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-15.17.14%402x.png)

round and round we go

In the case of Linux, my tests showed that a normal file blame might take 4 seconds now takes 45 seconds. But that's only the first time you need to do it.

## Sparse Checkouts

The last big thing to look at is not only useful for large repositories, but specifically for monorepos. That is, repositories that contain multiple projects in subdirectories.

For example, at GitButler, our web services are in a monorepo, with each service we run on AWS in a subdirectory.

```
❯ tree -L 1
.
├── Gemfile
├── Gemfile.lock
├── README.md
├── auth-proxy
├── butler
├── chain
├── check.rb
├── copilot
└── git

6 directories, 4 files
```

If each of those subdirectories was huge, this could be annoying to manage. Instead, we can use sparse checkouts to filter the checkouts to just specified directories.

To do this, we run `git sparse-checkout set [dir1] [dir2] ...`

```
❯ git sparse-checkout set butler copilot
❯ tree -L 1
.
├── Gemfile
├── Gemfile.lock
├── README.md
├── butler
├── check.rb
└── copilot
```

So we still have the top level files, but only the two subdirectories that we specified. This is called "cone mode" and tends to be pretty fast. It also makes `status` and related commands faster because there are fewer files to care about. You can also however, set patterns rather than subdirectories, but it's more complicated.

Here's a local test I did with the Chromium repository:

```
❯ time git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

real    0m5.931s

❯ git sparse-checkout set build base

❯ time git status
On branch main
Your branch is up to date with 'origin/main'.

You are in a sparse checkout with 2% of tracked files present.

nothing to commit, working tree clean

real    0m0.386s
```

This is without the `fsmonitor` stuff. You can see that `status` went from 6 seconds to run down to 0.3 seconds because there just aren't as many files.

If you're using large monorepos, this means you can do a blobless clone to have a much smaller local database (you can also run `clone --no-checkout` to skip the initial checkout), then do a `sparse-checkout` to filter to the directories you need and everything is massively faster.

## Scalar

Finally, Git now (since Oct 2022, Git 2.38) ships with an *alternative* command line invocation that wraps some of this stuff.

This command is called `scalar`. Just go ahead and type it:

```
❯ scalar
usage: scalar [-C <directory>] [-c <key>=<value>] <command> [<options>]

Commands:
    clone
    list
    register
    unregister
    run
    reconfigure
    delete
    help
    version
    diagnose
```

[Scalar](https://git-scm.com/docs/scalar) is mostly just used to clone with the correct defaults and config settings (blobless clone, no checkout by default, setting up maintenance properly, etc).

If you are managing large repositories, cloning with this negates the need to run `git maintenance start` and send the `--no-checkout` command and remember `--filter=tree:0` and whatnot.

Now you're ready to scale!...-ar.

If you want to read about all of this in great detail, GitHub has done an amazing job covering lots of this too:

- [The Commit Graph](https://github.blog/2022-08-30-gits-database-internals-ii-commit-history-queries/#the-commit-graph)
- [Sparse checkout](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)
- [Filesystem Monitor](https://github.blog/2022-06-29-improve-git-monorepo-performance-with-a-file-system-monitor/)
- [Sparse index](https://github.blog/2021-11-10-make-your-monorepo-feel-small-with-gits-sparse-index/)
- [Partial and shallow clone](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/)
- [The Story of Scalar](https://github.blog/2022-10-13-the-story-of-scalar/)

There is also a ton more fascinating information on this from [Derrick Stolee](https://stolee.dev/), who did a lot of work on these projects.

Ok, that's it for our Git Tips series! Hope you enjoyed it and let us know in Discord if you have any questions or comments, or would like to see us do any other topics in Git land.

Thanks!

Written by Scott Chacon

Scott Chacon is a co-founder of GitHub and GitButler, where he builds innovative tools for modern version control. He has authored Pro Git and spoken globally on Git and software collaboration.

[Website](https://scottchacon.com/) | [X](https://twitter.com/chacon)

### Table of Contents

- [First, Let's Thank Windows](https://blog.gitbutler.com/#first-let-s-thank-windows)
- [Prefetching](https://blog.gitbutler.com/#prefetching)
- [Commit Graph](https://blog.gitbutler.com/#commit-graph)
- [Filesystem Monitor](https://blog.gitbutler.com/#filesystem-monitor)
- [Partial Cloning](https://blog.gitbutler.com/#partial-cloning)
- [Sparse Checkouts](https://blog.gitbutler.com/#sparse-checkouts)
- [Scalar](https://blog.gitbutler.com/#scalar)
- [Some More Reading](https://blog.gitbutler.com/#some-more-reading)