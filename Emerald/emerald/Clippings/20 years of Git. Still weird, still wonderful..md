---
author:
  - "[[GitButler]]"
created: 2025-04-09
published: 2025-04-07
source: https://blog.gitbutler.com/20-years-of-git/
tags:
  - article/git
interest: 8
---
![20 years of Git. Still weird, still wonderful.](https://blog.gitbutler.com/content/images/size/w500/2025/04/20-yaers-of-git.webp)

by — 11 min read

Twenty years ago, Git was born. How did this unlikely "information manager" take over the world?

Twenty years ago today, Linus Torvalds made the [very first commit](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290?ref=blog.gitbutler.com) to Git, the information manager from hell.

![](https://blog.gitbutler.com/content/images/2025/04/CleanShot-2025-04-05-at-07.58.54@2x.png)

Over these last 20 years, Git went from a small, simple, personal project to the most massively dominant version control system ever built.

I have personally had a hell of a ride on this particular software roller coaster.

I started using Git for something you might not imagine it was intended for, only a few months after it’s first commit. I then went on to cofound [GitHub](https://github.com/?ref=blog.gitbutler.com), write arguably the most widely read [book on Git](https://git-scm.com/book/en/v2?ref=blog.gitbutler.com), build the [official website](https://lore.kernel.org/git/d411cc4a0807251035i7aed2ec9wef7e8f1b3ae4c585@mail.gmail.com/?ref=blog.gitbutler.com) of the project, start the [annual developer conference](https://github.blog/news-insights/the-library/git-merge-berlin-2013/?ref=blog.gitbutler.com), etc - this little project has changed the world of software development, but more personally, it has massively changed the course of my life.

I thought it would be fun today, as the Git project rolls into it’s third *decade*, to remember the earliest days of Git and explain a bit why I find this project so endlessly fascinating.

Enjoy Kiril and I drinking wine and building the very first commit of Git, exploring what it could do from the very beginning.

## Patches and Tarballs

Before we get into the history of Git and my relationship with it, I want to start with why Git exists and the mindset that it was started with.

Git started from frustration in the Linux kernel development community over version control and collaboration.

The kernel community has always used mailing lists for collaboration. It’s actually a pretty fascinating method of collaboration - it is massively scalable, highly distributed, local first, capable of fine grained discussion of patches, cryptographically securable, etc.

The gist of the mailing list collaboration flow is:

- publish a tarball (sort of zip file) of a known state of the project
- people download that and expand it locally
- modify it with whatever feature or fix they want to change
- run [GNU diff](https://www.gnu.org/software/diffutils/?ref=blog.gitbutler.com) on it to create a patch that the maintainer can apply to that initial known state to add that feature
- email that patch or a series of them to a mailing list
- the list discusses the changes
- the maintainer applies the patch for the next tarball release or asks for changes
- repeat

I would love to do a whole blog post about how mailing list collaboration works and how cool various aspects of it are, but that’s for another time.

However, in this world, the version control systems of the time were simply not helpful - they seemed like a step backward in functionality. They had clunky access control mechanisms, they weren’t distributed, they were incredibly slow.

The community worked primarily with **patches and tarballs** and existing SCMs were just not good enough.

If you think about it, the patches and tarballs workflow is sort of the first *distributed* version control system - everyone has a local copy, the changes can be made locally, access to "merge" is whomever can push a new tarball to the server.

However, the process was still a bit cumbersome - managing the patches, remembering what was applied and who contributed it, keeping multiple series in flight, dealing with conflicts or rebasing changes.

The [Bitkeeper](https://www.bitkeeper.org/?ref=blog.gitbutler.com) tool was developed specifically for the kernel's use case to try to build a version control system that worked for this workflow and Linus did like it, but the licensing they wanted to use didn’t vibe with the community it was built for.

If you want to learn more about Bitkeeper, check out this Bits and Booze episode where we set it up and show you how it was used.

It’s important to understand that this is why Git was created. Not to be a version control system really, but fundamentally to be a better way to do patches and tarballs - snapshot a set of files and show differences that can be discussed.

This is primarily how it’s data structure was designed (linked lists of trees of files, content addressable blob storage) and that structure is fundamentally unchanged, from the first commit to this very day.

## The First Commit

Since we're on the topic, what did the [first commit](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290?ref=blog.gitbutler.com) look like? What could Git do from it’s first moment of existence?

Well, it was a **stupid content tracker**. As Linus himself put it [from day one](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290?ref=blog.gitbutler.com#diff-2b7814d3fca2e99e56c51b6ff2aa313ea6e9da6424804240aa8ad891fdfe0900R15-R17):

> This is a stupid (but extremely fast) directory content manager. It doesn't do a whole lot, but what it *does* do is track directory contents efficiently.

The first commit was a collection of seven simple stand alone tools. They weren’t things like `git commit`, they were very low level database tools like `write-tree` and `commit-tree` ( [this changed](https://lore.kernel.org/git/Pine.LNX.4.58.0504291416190.18901@ppc970.osdl.org/?ref=blog.gitbutler.com) a few weeks into the project, when everything started being prefixed with `git-` ).

Some of them evolved into the plumbing commands that still exist to this day, like [`git cat-file`](https://git-scm.com/docs/git-cat-file?ref=blog.gitbutler.com) and [`git write-tree`](https://git-scm.com/docs/git-write-tree?ref=blog.gitbutler.com), others were fundamentally different (for example, `git read-tree` is a current Git plumbing command but the original `read-tree` was more like the current [`git ls-files`](https://git-scm.com/docs/git-ls-files?ref=blog.gitbutler.com) ), however, at a low level the concepts all exist still.

Essentially, with the very first commit, Git could:

- Build up a “snapshot” by using `update-cache` to build a cache of contents (essentially a tarball), and `write-tree` to write it as an object to the database.
- Write a "changeset" (commit) with `commit-tree` that commented on the changes introduced with a new tarball and the parent it was based on in order to setup a history of “tarballs”.
- Read out those database structures with `cat-file` (pull an object out of the database), `read-tree` (list out what the cache looks like) and `show-diff` (show the diff of the cache to the working directory).

From the very first days, Linus [mentions](https://lore.kernel.org/git/Pine.LNX.4.58.0504170916080.7211@ppc970.osdl.org/?ref=blog.gitbutler.com) that he really only wanted to build this plumbing and have it be the backend for some UI (“porcelain”) be scripted on top of it.

> That was really what I always personally saw "git" as, just the plumbing beneath the surface. For example, something like arch, which is based on "patches and tar-balls" (I think darcs is similar in that respect), could use git as a \_hell\_ of a better "history of tar-balls". - Linus

He meant to build an efficient tarball history database toolset, not really a version control system. He assumed that someone else would write that layer.

More on that in a minute. But first…

## Scott Meets Git

I was personally first introduced to Git around this point in the timeline by my friend and coworker, Nick Hengeveld at the ill fated startup we both worked at called [Reactrix](https://www.flickr.com/photos/khoyt/145320693?ref=blog.gitbutler.com).

Nick and I were in charge of getting the assets for these interactive ads to computers all over the country in malls and theaters.

Interestingly, we used Git more in the way that Linus thought of the tools - as a distributed content tracker - rather than as the version control system that you probably mainly think of it as today.

We essentially worked for an advertising company that managed a bunch of digital signage displays with rather heavy-weight assets. Each of our hundreds of displays had a unique combination of ads they needed to run, most were on slow cell data uplinks, and the ads changed a lot. So we needed an efficient way to say “for machine A, we need ads 1, 2 and 3 (v1). for machine B, we need ads 2, 3 (v2) and 4” and incrementally update them if there were new versions of an existing ad.

We used Git - not to track changes in source code, but as a content distribution mechanism. We would use a script to look at the upcoming scheduling, write out unique trees of only the ads that each machine needed, commit that tree to a branch for the machine and then have each machine fetch and hard checkout every night.

This approach had a bunch of interesting advantages.

- If an ad updated, we only transferred the changed files and the changes were delta compressed against an object that was potentially already on the machine.
- All the shared assets had a single blob that could be checked out in multiple contexts - the content addressable filesystem aspect of Git was great for this.
- We could have thousands of combinations of hundreds of assets without storing any content twice anywhere or transferring the same thing over the network more than once.

Nick was a fairly heavy contributor to the early Git project to get it to work for our use case (adding SSL support to http-fetch, adding resumable and parallel HTTP transfers, the first HTTP based push solution, etc). His [first patch](https://lore.kernel.org/git/20050926175148.GA9410@reactrix.com/?ref=blog.gitbutler.com) was in September, a mere 6 months after Linus’s first commit.

His introduction of Git to me, my struggle to grasp it, and my eventual lightbulb moment of thinking it was pretty cool was what motivated me to write about it and try to make it easier for people to learn.

This pushed me to compile the [Git Community Book](https://lore.kernel.org/git/d411cc4a0809051208k2a15c4a7te09a6979929e52f7@mail.gmail.com/?ref=blog.gitbutler.com), the [Git Internals Peepcode PDF](https://github.com/pluralsight/git-internals-pdf?ref=blog.gitbutler.com), build the [git-scm.com website](https://lore.kernel.org/git/d411cc4a0807251035i7aed2ec9wef7e8f1b3ae4c585@mail.gmail.com/?ref=blog.gitbutler.com) and write the [Pro Git book](https://git-scm.com/book/en/v2?ref=blog.gitbutler.com) - all of which eventually led me to GitHub.

![](https://blog.gitbutler.com/content/images/2025/04/CleanShot-2025-04-05-at-08.30.42@2x.png)

The version of git-scm.com that I first put up in 2008. It's a "blob" eating "trees".

## Git Lore

So, how did this stupid content tracker become the most widely used SCM in the world?

Well, I go over a lot of the reasons I think Git and GitHub “won” in a [previous blog post](https://blog.gitbutler.com/why-github-actually-won/), but I do think it’s worth a quick glance at why Git itself ended up looking the way that it does today. Also maybe tell some fun anecdotes about the origins of stuff you know and love along the way.

As you may have deduced by the occasionally unfriendly, obscure or inconsistent nature of the Git commands, this wasn’t a system that someone sat down and meticulously designed from a usability standpoint from day one.

For the first several months, the git commands were all incredibly low level - even if you know the existing plumbing commands, you may not recognize a [single one of the commands](https://lore.kernel.org/git/20050601055833.GA14231@port.evillabs.net/?ref=blog.gitbutler.com) that existed in June of 2005 ( `rev-tree`, `mkdelta`, `tar-tree`?)

It was fairly clear from the [very beginning](https://lore.kernel.org/git/200504141442.17235.elenstev@mesatop.com/?ref=blog.gitbutler.com) that the approach was that Git would just be this very low level database/filesystem type toolset and that (possibly several) other tools would use Git as their infrastructure.

> Differentiating the SCM built on top of git from git itself is probably worthwhile to avoid confusion. Other SCMs may be developed later, built on git, and these can come up with their own clever names. - [Steven Cole](https://lore.kernel.org/git/200504141442.17235.elenstev@mesatop.com/?ref=blog.gitbutler.com)

So if Linus and the early Git team didn’t initially imagine Git being an actual version control tool and just wanted to build the plumbing, where did the “porcelain“ commands that we know today actually come from?

The answer is that they sort of slowly eked their way in over several years, mostly as shell scripts that evolved to scratch a series of itches.

In the early days, there were a number of user interfaces that scripted Linus’s backend tooling to be more user friendly. The earliest and for the first few years the most popular was `git-pasky`, which quickly became “ [Cogito](https://lore.kernel.org/git/20050414210120.GG22699@pasky.ji.cz/?ref=blog.gitbutler.com) ” by Petr Baudis. The first version of these scripts were released [only days after Git](https://marc.info/?l=linux-kernel&m=111315057710062&w=2&ref=blog.gitbutler.com).

In [early](https://lore.kernel.org/git/20050420205633.GC19112@pasky.ji.cz/?ref=blog.gitbutler.com) [release](https://lore.kernel.org/git/20050424005923.GA8859@pasky.ji.cz/?ref=blog.gitbutler.com) [announcements](https://lore.kernel.org/git/20050426032422.GQ13467@pasky.ji.cz/?ref=blog.gitbutler.com), you can get a feeling for the tooling that would start to become Git.

A few months in, trying to keep the line between porcelain and plumbing [begins to break down](https://lore.kernel.org/git/7vek9yirdi.fsf@assigned-by-dhcp.cox.net/?ref=blog.gitbutler.com) as tooling in git starts to compete with tooling in the porcelan scripts.

> This trend started when "git diff", "git commit" and friends were added for the sake of usability of the bare Plumbing. These basic commands are a must and I do not have any objection to have them in the "core GIT" suite, but at the same time I think the core should not be competing with Porcelains, and feel that a line should be drawn somewhere. - Junio

Over the next year or two, more and more scripts continued to make their way into the core Git code until it eventually became clear that people’s time would be better spent working on the tools distributed with Git rather than trying to maintain this plumbing/porcelain distinction in the tooling.

In 2007, Cogito finally got “ [put up for sale](https://lore.kernel.org/git/20070419124648.GL4489@pasky.or.cz/?ref=blog.gitbutler.com) ” and the idea of some other porcelain being the main way that Git was used was more or less abandoned.

Looking back through these commits and emails from 20 years ago, it’s fascinating to see the birth of some of the infamous tools that many of us use every day.

### The first git log

The [first version](https://github.com/git/git/commit/e764b8e8b3c50b131be825532ba26fa346d6586e?ref=blog.gitbutler.com) of `git log` was a wrapper script that called `git-rev-list --pretty`, piped it through a pager and was hard-coded to start at `HEAD`. Here is the original "git log" program in it's entirety:

```bash
#!/bin/sh
 git-rev-list --pretty HEAD | LESS=-S ${PAGER:-less}
```
💡

If you have not heard of `rev-list`, it was a [simple walker](https://github.com/git/git/commit/64745109c41a5c4a66b9e3df6bca2fd4abf60d48?ref=blog.gitbutler.com) that just printed out shas. It still exists - you can still run `git rev-list` in your project right now.

Actually, a *lot* of the current commands started out this way - a few lines long shell or Perl script that ran some core plumbing commands. Eventually almost everything has been rewritten in C as builtins for portability, but there was a lot of first versions of commands in these scripting languages.

```
$ git-log-script
commit d9f3be7e2e4c9b402bbe6ee6e2b39b2ee89132cf
Author: Junio C Hamano <gitster@pobox.com>
Date:   Fri Apr 5 12:34:56 2024 -0700

    Fix bug
```

The first "git log" would have looked pretty familiar.

### The first git rebase

There are lots of these “firsts”, but I’ll just do one more because I find it so interesting. The infamous “rebase” command was [born from a conversation](https://lore.kernel.org/git/Pine.LNX.4.58.0506211452110.2353@ppc970.osdl.org/?ref=blog.gitbutler.com) about workflow between Junio and Linus in June 2005.

Junio tells Linus what his workflow has been:

> FYI, here is what I have been doing:  
>   
> (1) Start from Linus HEAD.  
> (2) Repeat develop-and-commit cycle.  
> (3) Run "git format-patch" (not in Linus tree) to generate patches.  
> (4) Send them out and wait to see which one sticks.  
> (5) Pull from Linus.  
> (6) Throw away my HEAD, making Linus HEAD my HEAD, while preserving changes I have made since I forked from him. I use "jit-rewind" for this.  
> (7) Examine patches that Linus rejected, and apply ones that I still consider good, making one commit per patch. I use "jit-patch" and "jit-commit -m" for this.  
> (8) Go back to step 2.

Linus comments that the type of merge that developers really want here is to “re-base” the work:

> It would be somewhat akin to the current git-merge-script, but instead of merging it based on the common parent, it would instead try to re-base all the local commits from the common parent onwards on top of the new remote head. That often makes more sense from the standpoint of a individual developer who wants to update his work to the remote head.

Junio then [responds with a simple script](https://lore.kernel.org/git/7v4qbofym7.fsf_-_@assigned-by-dhcp.cox.net/?ref=blog.gitbutler.com) to use a new command called `git cherry` to “re-base” a series of commits.

As far as I can tell, this is the first time the phrase “rebase” was used in version control. It’s fun to see history born.

### How did an "octopus" become part of Git?

I've been asked many times where GitHub came up with the "Octocat" and the answer also lies in these early archives.

![](https://blog.gitbutler.com/content/images/2025/04/CleanShot-2025-04-05-at-11.09.39@2x-1.png)

The original (ish) Octocat

The first usage of the word "octopus" that I've seen in the Git mailing list is [Junio telling Linus](https://lore.kernel.org/git/7vhdhgeuj1.fsf@assigned-by-dhcp.cox.net/?ref=blog.gitbutler.com) that his patches were applied sequentially, not "octopus".

This referred to creating a [merge commit](https://github.com/git/git/commit/d9f3be7e2e4c9b402bbe6ee6e2b39b2ee89132cf?ref=blog.gitbutler.com) with multiple parents, which is the other way the different patches could have been merged. Eventually, "octopus merge" became one of the valid [merge strategies](https://cameronmcefee.com/work/the-octocat/?ref=blog.gitbutler.com) that Git had in it's quiver. (fun fact, Git once had “ [stupid](https://github.com/git/git/commit/2276aa6c098a0337bc2bec49742e332bdd1b802c?ref=blog.gitbutler.com#diff-55b108d9d72fcd97b37680bd7b86f5cd7be9f60abe469b3637c844a658adf9c4) ” as a merge strategy)

At some point in the very, very early days of GitHub, Tom was looking for anything that could be anthropomorphically used as a Git totem and "Octopus" was the only term in the Git lexicon that seemed to fit the bill. Tom searched for clipart that featured an "octopus" and [this Simon Oxley image](https://cameronmcefee.com/work/the-octocat/?ref=blog.gitbutler.com) was the cutest that fit the bill. So the " [octocat](https://cameronmcefee.com/work/the-octocat/?ref=blog.gitbutler.com) " was born.

## The Future of Git

Twenty years and a day later, one might ask what the future of this unlikely hero is.

The funny thing is that I'm still using Git in some ways in the same way that it was originally intended. GitButler uses Git not only to do normal commits for tracking code changes, but also uses the git database to [track the history of your project](https://docs.gitbutler.com/features/timeline?ref=blog.gitbutler.com). In the end, it's still a damn good stupid content tracker, as Linus first intended.

So, happy birthday Git. You are still weird. You are still wonderful. Thanks for all the fish.