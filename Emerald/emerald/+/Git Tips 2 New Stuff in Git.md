---
author:
  - "[[Scott Chacon]]"
about:
  - "[[git]]"
created: 2025-10-07
published: 2024-02-08
previous: "[[Git Tips 1- Oldies but Goodies]]"
next: "[[Git Tips 3 Really Large Repositories]]"
source: https://blog.gitbutler.com/git-tips-2-new-stuff-in-git
tags:
  - howto/git
  - article/git
---

There are a bunch of new tricks that Git can do that were added in the last few years. How up to date are you?

![Git Tips 2: New Stuff in Git](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-15.55.24%402x.png)

Next up in our [3 part series](https://blog.gitbutler.com/__GHOST_URL__/git-tips-and-tricks/) on "Stuff you may not know about Git", we have **New Stuff**!

Here I'm going to cover 5 relatively new things in Git that you may not have heard about, because *why would you*?

We'll cover:

- [[#Some Git Branch Stuff|Some Git Branch Stuff]]
- [[#Safe Force Pushing|Safe Force Pushing]]
- [[#Commit Signing with SSH|Commit Signing with SSH]]
- [[#Push Signing|Push Signing]]
- [[#Git Maintenance|Git Maintenance]]

Let's dig in!

## Some Git Branch Stuff

This is pretty minor, but one thing that's always bugged me about Git is that I run `git branch` a lot to view what branches I have, but they're in the dumbest possible order (alphabetic) and there are a million of them after a while.

At some point I started naming my branches in a way to partially cope with this. Every branch would be something like `sc-0831-my-thing` meaning that the branch topic was "my thing", it was created on August 31st and the `sc` are my initials so I can group them by whose branch. It's a lot of stupid metadata to try to cram into a branch name just because of how it's listed.

However, now we can ask Git to do two things that help with this. We can ask it to sort by `objectsize`, `authordate`, `committerdate`, `creatordate`, or `taggerdate` with the `--sort` option and we can set it as a default with the `branch.sort` config setting.

So for example, if I want to sort by last commit date descending, I can run:

```
$ git config --global branch.sort -committerdate
```

And now the default will show the branch that I last committed to at the top.

💡

Important note: the `-committerdate` has a leading `-` but **not** a double dash. It's just a negative. I've seen people mess this up and then things break.

However, now if I have a bunch of branches, that will scroll off the screen. Sad. But now Git also has a way to take a list of branches and try to split it into columns to make better use of the screen real estate. You can do this either with the new `--column` option, or with the `column.ui` setting.

Check it out:

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-image-1.png)

Nice sorted columns for my branch output

As another sort of funny thing, in order to help with this, Git implemented it's own list to column terminal command that is sort of completely independent of anything else in Git and is it's own command called `git column`.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-image-2.png)

Just in case there is anything else you need to convert into columns that isn't Git related.

## Safe Force Pushing

The next interesting thing that Git has added somewhat recently is a way to do much safer forced pushes.

Generally most of us don't love doing forced pushes, because there is always a chance that you're overwriting someone else's commits. Let's take a scenario:

- You commit and push something to GitHub
- Someone else pulls it down, commits something and pushes it back up.
- You amend a commit, rewriting the history, and force push it, not knowing that anyone had based something off your work.
- This effectively removes what the other person had done.

What you really want to do is check to see if anyone else had pushed and only force push if the answer is no. However, there is always a bit of a race condition here because even if you check first, in the second it takes you to then push, something else could have landed from elsewhere in the meantime.

So, Git has created a new force pushing option called `--force-with-lease` that will essentially check that what you last pushed is still what's on the server before it will force the new branch update.

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-10.15.11%402x.png)

A failed --force-with-lease push

If someone has updated the remote ref (pushed in the meantime), then push now fails with a "stale info" error.

If you're amending and rebasing stuff a lot, it may be worth setting up a nice little alias for this, because it's almost *always* better than running `--force`

```
$ git config --global alias.fpush push --force-with-lease
```

May the force be with you.

## Commit Signing with SSH

We [wrote about this](https://blog.gitbutler.com/__GHOST_URL__/signing-commits-in-git-explained/) a few months ago in mind-numbing detail, because the GitButler client does this automatically for you with the flip of a config setting, but if you want to do this on the command line, read on.

Git has supported signing your commits with GPG for a while, but GPG is often pretty difficult to get working properly and completely understand if you've never used it before. Recently, OpenSSH provided a new way to sign data using your existing SSH key and Git has integrated this as an option to use instead of GPG to do the same thing. Also, importantly, GitHub and GitLab support verifying these signatures if you upload your public signing key to your user account there.

It's pretty easy to do. Just set `gpg.format` to `ssh` and tell it where your signing key is:

```
$ git config gpg.format ssh
$ git config user.signingKey ~/.ssh/id_rsa.pub
```

Now if you run `git commit -S` it will try to sign your commit with this key. If it succeeds and you upload that public key to GitHub here (under "Signing Keys"), then you'll get pretty "verified" badges on your commits:

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-s_E036A4CDB1CAE14FC00AF40FA13C8C8B49781C4FDF6B604EA9B3BFCD9F34B628_1695546510881_CleanShot-2023-09-24-at-11.08.142x.png)

Stay vigilant.

## Push Signing

I won't go into a ton of detail here because this isn't really widely used, but it might be interesting to some. Git can also now sign *pushes*, not just commits.

Since none of the major Git hosting solutions (GitHub, GitLab, Bitbucket) support this, it's only really possible to do this if you run your own server. However, if you do, you can run `git push --signed` in order to sign the ref update on the server and have the server save a transparency log with verifiable signatures somewhere.

If you're interested in this, there is a very nice [writeup](https://people.kernel.org/monsieuricon/signed-git-pushes) by [Konstantin Ryabitsev](https://people.kernel.org/monsieuricon/) over at kernel.org.

Push it real good.

## Git Maintenance

The final fun new thing I'll cover is `git maintenance`.

The maintenance command was introduced in Git 2.30 I believe. It essentially provides a way to add cronjobs that run daily, hourly and weekly maintenance tasks on your Git repositories.

You can turn it on for your Git repository by simply running:

```
$ git maintenance start
```

This will modify your `.git/config` file to add a `maintenance.strategy` value set to `incremental` which is a shorthand for the following values:

- `gc`: disabled.
- `commit-graph`: hourly.
- `prefetch`: hourly.
- `loose-objects`: daily.
- `incremental-repack`: daily.

This means that every hour it will rebuild your commit graph and do a prefetch (we will cover these concepts in the next post), and once per day it will clean up loose objects and put them in pack-files and also repack the object directory using the `multi-pack-index`  feature (read more about that in an incredible blog post from GitHub's Taylor Blau [here](https://github.blog/2021-04-29-scaling-monorepo-maintenance/#multi-pack-indexes)).

Basically it will just make lots of things faster in the background all the time automatically.

Git maintenance will schedule these cron jobs differently depending on the operating system. On Mac it will add some LaunchAgents like this:

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-10.52.26%402x.png)

If you're curious what these plist files look like, it's something like this:

![](https://d2m1ukvwmu7gz4.cloudfront.net/images/images-2024-02-CleanShot-2024-02-08-at-10.52.02%402x.png)

You can read more about git maintenance and it's various options [here](https://git-scm.com/docs/git-maintenance).