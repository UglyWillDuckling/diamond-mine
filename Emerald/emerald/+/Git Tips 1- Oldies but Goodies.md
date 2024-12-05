[![GitButler](https://blog.gitbutler.com/content/images/2024/03/icon-gradient-color@3x-1.png)](https://blog.gitbutler.com)

# Git Tips 1: Oldies but Goodies

Do you know some of the cool stuff in Git that's been around for a while? All the magical -L and -C options in the Git world? Let's find out!

For the first in our [short series of Git tips](https://blog.gitbutler.com/git-tips-and-tricks/), I wanted to start with stuff that's been around for a while, but it still seems like a lot of people don't know about or don't know how to use.

None of this is new, but I find them useful and they're arguably a little obscure. I'm just going to cover:

- [Conditional Configs](#conditional-configs)
- [Git Blame and Log with Line Ranges](#git-blame-and-log-with-line-ranges)
- [Git Blame with Following](#git-blame-with-following)
- [Word Diff](#word-diff)
- [Resolution Reuse](#reuse-recorded-resolution)

Let's dig in!

## Conditional Configs

Many of you probably know this, but Git has a cool little key/value store called `git config` which will check in three places for values to use when it's running various commands.

Every Git user will have [probably been told](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup?ref=blog.gitbutler.com) to run something like this when they first set up:

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

That adds the `user.name` value to your `~.gitconfig` file. But there is also `--system` (which probably none of you have used) which writes it to a system-wide config file and `--local` (the default) that writes it to `.git/config` in whatever project you're currently in.

When Git looks for a value, it will look in that order - local, global, system - for a definition.

However, there is a _secret fourth_ place that Git can look. If you add to your global config something that looks like this:

```rb
[includeIf "gitdir:~/projects/oss"]
    path = ~/.gitconfig-oss
```

> [!attention] 
> Then Git will look in the `~/.gitconfig-oss` files for values _only if_ the project you are currently working in matches `~/projects/oss` . **So, you could have a "work" directory and have work-specific values there** (company email address, gpg signing key, etc) and an "oss" directory with values for your open source projects, etc.

But `gitdir` is not the only filter you can use. You can also put **_branch** name_ specific values as a include filter with `onbranch` or you can only include config files if the project you are currently in has a remote matching a specific URL with `hasconfig:remote.*.url` . So like if you have GitHub org specific keys or something.

Check out [the docs](https://git-scm.com/docs/git-config?ref=blog.gitbutler.com#_includes) for more.

## Git Blame and Log with Line Ranges

There are a couple of interesting options that you can use with `git blame` that most people don't know about and nearly none of the existing GUIs implement.

One is the line range option, `-L`. A lot of times, if you're running blame on the command line, you just page the whole file and find the part you're looking for. However, if you want to just display a subsection of your file, you can give it a line range, like `git blame -L 28,43 path/to/file`

![](https://blog.gitbutler.com/content/images/2024/02/CleanShot-2024-02-06-at-15.17.13@2x.png)

git blame -L

You can also use a semi-strange `:` syntax to give Git a pattern to find the beginning of a block and only blame that block. So in this same situation, I can get the same result by running `git blame -L :'class LocalFile' gitbutler-ui/src/lib/vbranches/types.ts`

Typically you can use a function name or something for that string.

The _other_ thing you can do to see similar information in a different way, is to run `git log` with similar options. This will give you all the commits filtered to those that last touched this region of the file. So for example, `git log -L28,43:gitbutler-ui/src/lib/vbranches/types.ts` will give you something like this:

![](https://blog.gitbutler.com/content/images/2024/02/CleanShot-2024-02-06-at-16.42.55@2x.png)

So instead of being ordered by lines, it sort of gathers all the commits that are shown in the blame and then shows you those commits with code that modified that block in each commit. Basically the same data, but in a different format, more like a story of how that code was put together.

## Git Blame with Following

One thing that is really not great about using blame in GUI tools is that the CLI has much more powerful tooling for finding something closer to the real story behind your code.

There are many scenarios where this is really valuable. The first is ignoring whitespace changes. Some of the GUIs do that, but not all of them. So if you go and implement a `prettierrc` file, BLAM, now you're the owner of tons of lines of code. The `git blame -w` option will ignore these types of whitespace changes.

The other great option is `-C` which will look for code movement between files in a commit. So if you refactor a function from one file to another, the normal `git blame` will simply show you as the author in the new file, but the `-C` option will follow that movement and show the last person to actually change those lines of code. Either of these scenarios could be what you're looking for, but I would argue that more often it's the latter.

If you want Git to try even harder (look for movement in multiple commits or in _all_ of your commits) you can pass `-C` up to three times.

Also, your GUI _does not_ do this (most likely, I can't speak for all of them).

So, let's look at the VS Code GitLens blame output of the previous example:

![](https://blog.gitbutler.com/content/images/2024/02/CleanShot-2024-02-06-at-15.17.36@2x.png)

git blame in GitLens VS Code plugin

Ok, looks good. Kiril wrote most of this code it appears. Let's now look at the same block with `git blame -w -C -C -C`

![](https://blog.gitbutler.com/content/images/2024/02/CleanShot-2024-02-06-at-15.17.01@2x.png)

git blame -C -C -C

Now we can see that Git has followed this hunk of code from file to file over the course of multiple renames.

Also, Kiril only really owns a few lines of code, Mattias actually wrote big hunks of it. If we want to know about those lines, it's much better to ask Mattias rather than Kiril, as our GUI blame would suggest.

## Word Diff

This is incredibly minor, and some GUIs have nice versions of this (I find GitHub's better than what I'm about to show you, since it subtly does both) but if you _ARE_ running `git diff` on the command line and there is a line change where something small changed within it, you can change Git's default format to word-based rather than line based with the `--word-diff` option.

![](https://blog.gitbutler.com/content/images/2024/02/CleanShot-2024-02-08-at-08.19.47@2x.png)

normal, line-based git diff

![](https://blog.gitbutler.com/content/images/2024/02/CleanShot-2024-02-08-at-08.19.28@2x.png)

super cool git diff --word-diff

## Reuse Recorded Resolution

Finally, if you're rebasing or cherry-picking a lot and you've ever run into the same conflict more than once, you can turn on a feature where Git memorizes the conflict and the resolution to it. If it ever sees that same conflict again, it will _automatically_ re-solve it for you.

You can easily turn it on with the config setting `rerere.enabled` and you can further ask it to automatically stage it for you with `rerere.autoUpdate`

```
$ git config --global rerere.enabled true
$ git config --global rerere.autoUpdate true
```

![](https://blog.gitbutler.com/content/images/2024/02/CleanShot-2024-02-08-at-08.21.07@2x.png)

a conflict... always remembers

Then, the next time you get a merge conflict that it's seen before, magic!

![](https://blog.gitbutler.com/content/images/2024/02/CleanShot-2024-02-08-at-08.23.20@2x.png)

automatically fix it the next time

## Up Next

Again, all of this has been in Git for a while, but if you don't know... now you know.

Next up is [New Stuff in Git](https://blog.gitbutler.com/git-tips-2-new-stuff-in-git/).

[](https://twitter.com/intent/tweet?text=Git%20Tips%201%3A%20Oldies%20but%20Goodies&url=https://blog.gitbutler.com/git-tips-1-theres-a-git-config-for-that/)[](https://www.facebook.com/sharer/sharer.php?u=https://blog.gitbutler.com/git-tips-1-theres-a-git-config-for-that/)[](javascript:)The link has been copied!

## You might also like

### [Stacked Branches with GitButler](/stacked-branches-with-gitbutler/)

[Scott Chacon](/author/scott/)

### [Git Merge 2024 Talks are Up](/git-merge-2024-talks/)

[Scott Chacon](/author/scott/)

### [Fearless Rebasing](/fearless-rebasing/)

[Scott Chacon](/author/scott/)

### [Fixing up Git with Autosquash](/git-autosquash/)

[Scott Chacon](/author/scott/)

[![Git Tips and Tricks](https://blog.gitbutler.com/git-tips-1-theres-a-git-config-for-that//content/images/size/w260/2024/02/CleanShot-2024-02-08-at-15.51.57@2x.png)](/git-tips-and-tricks/)

Newer post

### [Git Tips and Tricks](/git-tips-and-tricks/)

Older post

### [Git Tips 2: New Stuff in Git](/git-tips-2-new-stuff-in-git/)

[![Git Tips 2: New Stuff in Git](https://blog.gitbutler.com/git-tips-1-theres-a-git-config-for-that//content/images/size/w260/2024/02/CleanShot-2024-02-08-at-15.55.24@2x.png)](/git-tips-2-new-stuff-in-git/)

### Subscribe to new posts.

 Subscribe

Processing your application Great! Check your inbox and confirm your subscription There was an error sending the email

[![GitButler](https://blog.gitbutler.com/content/images/2024/03/icon-gradient-color@3x-1.png)](https://blog.gitbutler.com)

All about the GitButler product, Git itself, version control, startups and more.

[](https://twitter.com/gitbutler)

GitButler © 2024. All Right Reserved. Published with [Ghost](https://ghost.org) & [Renge](https://fueko.net).

You’ve successfully subscribed to GitButler

Welcome back! You’ve successfully signed in.

Great! You’ve successfully signed up.

Success! Your email is updated.

Your link has expired

Success! Check your email for magic link to sign-in.