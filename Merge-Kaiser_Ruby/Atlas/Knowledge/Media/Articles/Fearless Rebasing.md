---
author:
  - "[[Scott Chacon]]"
created: 2025-12-08
published: 2024-10-23
source: https://blog.gitbutler.com/fearless-rebasing
about:
  - "[[git butler]]"
tags:
  - article/gitbutler
---
GitButler now supports first class conflicts, which makes rebasing much less annoying. What is "fearless rebasing"?

![[~/×/0f892494d257899bdc9afec3b0ce7cf0_MD5.webp|400]]

I have a confession to make. For most of my Git life, I have been a **merger**.

I have been asked countless times if it's better to merge or to rebase and while I never want to stir up a hornet's nest, I have always advocated merging over rebasing. Not only that, but I have nearly always done so myself when working on a project.

To me, merging has always been better. It keeps more of the history, there are by definition fewer conflicts since it only has to merge the last tree rather than every intermediate tree, it's easier to see what each series actually was, it's easier to see when it was integrated, etc.

However, let's admit it, **rebasing is sexy**.

![[~/×/b47816c2e835cf218dc5734e97691fff_MD5.png]]

> Rebasing versus merging, which is better?

I've always loved the idea of a linear history, of rewriting a series until it's perfect and getting that nice useful blame and bisecting power. Getting rid of that subway map history graph in favor of a nice simple series of patches.

But **rebasing is also a pain in the ass**.

You run `rebase --pull` and get conflict after conflict and can't do anything else until you're done. You can't save your progress if you get tired of the exercise halfway through. It's also difficult to keep your series clean anyhow - doing fix-up commits, [autosquashing](https://blog.gitbutler.com/git-autosquash/), interactive rebasing. Even those of us fairly used to the tooling mess up or get frustrated sometimes. Now compound that with the need for your *entire team* to feel comfortable with this tooling. *Heavy sigh.*

Recently, however, I have completely changed my mind. I am now an official **rebaser**.

The reason is not because I was convinced by someone that I've been wrong this whole time, nor was it because Git's tooling around rebasing got better. It's because of **Fearless Rebasing**.

## Fearless Rebasing

One of the things that GitButler has never been very good at so far is merge conflicts. We just didn't have a good story for it because we weren't sure what a good way was to handle it. What is actually an ideal (or even, *not horrible*) way to deal with merge conflicts?

When researching other tools, I ran across the Jujutsu project that is being developed at Google.

![](https://www.youtube.com/watch?v=LV0JzI8IcCY)

Jujutsu has a novel concept of " [first class conflicts](https://martinvonz.github.io/jj/latest/conflicts/) ", where it can record conflicted states in it's commit objects. Git can't do this. If Git runs into a conflict when trying to merge, rebase or cherry-pick something, it halts everything and makes you fix it before moving forward. It has no way to save the conflict for later resolution and keep going.

But [[Jujutsu]] does, which means that every time you do a rebase operation, it is ***always* successful**.

How does this work?

When Jujutsu tries to rebase commits and runs into a conflict, instead of writing the conflict out to the working directory and throwing a bunch of status files into your `.git` directory, it instead writes a specially formatted commit that lists out the trees it attempted to merge, pretends that this commit was not there and continues with the next commits.

This means that you can end up in a state like this, where you have several conflicted commits and then some commits *after* them that are not in a conflicted state.

![[~/×/fe2062e8480e02d38606f4f7aeaf217f_MD5.png]]

Then to resolve the conflicts, you can edit one of the commits and resolve it, which amends that commit and automatically rebases everything above it again.

## Fearless Rebasing in GitButler

We loved this concept so much that we decided to implement an approach that is very similar.

When working with a virtual branch, we want to empower you to think about your changes as a series of patches that you can constantly and easily change, amend, squash, split, edit and ***rebase***.

If you can do all of that fearlessly, knowing that everything is easy to do, simple to undo and much more painless to resolve, then that lets us maintain that beautiful and simple history.

In our 0.13 release of GitButler, we are introducing a very similar workflow to rebasing your commits to what Jujutsu does. If you create a series of commits and then rebase it onto new upstream work and there are conflicts, we will *always* rebase successfully but mark any problematic commits and only apply the parts of them to your working directory that do not conflict.

So let's say that you have three commits in your branch and rebase and the first two have conflict problems. Now we will partially apply them (whichever hunks do not conflict), write a special commit that has a conflicted header, then try the next one.

![[~/×/87a41bd5c2e8861fce5e42dd558930e0_MD5.png]]

Now you can solve these conflicts one by one. Even in any order - you don't have to approach the first one first, you can start with the second one if you prefer.

To solve the conflicts, you can click on a commit that is in a conflicted state and click the "Resolve Conflicts" button, which *now* checks out just those conflicts into your working directory.

![[~/×/f2b9b0ff82362d34293963a071c7dd80_MD5.png]]

It also changes your GitButler UI to let you know you are in this special state and allows you to either abort the session using the "Cancel" button or save your conflicted state and rebase the remaining commits with the "Save" button.

![[~/×/0da08d77bfd7376cc447ada17a8cac81_MD5.png]]

Now the entire rebasing workflow in Git is massively easier. You can solve conflicts whenever you prefer and you can push off the work until you're ready to work on them, even continuing to make new commits while some of your commits are in a conflicted state.

We believe that fearless rebasing is a much nicer way to deal with conflicts. If you want to try it out, download GitButler and see how it feels. Maybe we'll make a rebaser out of you too.