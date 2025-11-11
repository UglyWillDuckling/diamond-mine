---
author:
  - "[[Comprendre Git]]"
created: 2025-08-21
source: https://comprendre-git.com/en/protips/git-protip-autoreword/
tags:
  - howto/git/reword
---
By Maxime Bréhin • Published on 17 October 2022 •
___

- [x] reminder [[how to quickly rewrite an old commit message]] (@[[2025-08-29]])

Just as I sometimes [forget files in a commit](https://comprendre-git.com/en/posts/git-protip-autofixup/), **I also sometimes botch commit messages** only to find out about it a while later (after a few more commits). My most common oversight is probably forgetting to [link the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) the commit refers to.

**Later, but not too late!**

Don’t tell me you’re thinking: \*“Never mind, I’ll pop open the UI and fill it in by hand!” or that you’re giving up! Maybe that’s because you don’t know about **interactive rebasing**, or are afraid to use it 😨. Honestly, you shouldn’t be, with [a little learning](https://comprendre-git.com/en/trainings/360-git/) this command proves to be a super valuable ally!

Apart from the rebase thing, do you know that you can create a commit that expresses the intent to change the message? I bet you don’t! Fortunately, I’m here 😁 to help. Let me introduce the `git commit --fixup reword:<commit-ref-to-fix>` command. This is a bit of a mouthful but who cares, we’re going to wrap it with a nice alias that looks kind of like a magic incantation 🔮. Introducing **autoreword**:

```bash
git config --global alias.autoreword '!git commit --fixup reword:$1 && GIT_EDITOR=true && git rebase --autosquash --interactive --rebase-merges $1~1 && echo "autoreword finished"'
```

What happens if you run this command?

~~🌀 An evil wormhole opens, releasing the flames of hell that reduce this world to ashes 🔥!~~*(Actually no, we don’t even need to use magic for that 😭)*

But seriously, Git will open your editor with a message starting with `amend! …` followed by the first line of the commit message you want to fix, then a line break and again the (full) commit message.

```python
amend! chore(dx): setup ESLint and Prettier

chore(dx): setup ESLint and Prettier

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch chore/automation
```

You can then change the message (but keep the very first line as-is).

```bash
amend! chore(dx): setup ESLint and Prettier

chore(dx): setup ESLint and Prettier

# Here is the reference to my issue!
Closes #42

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch chore/automation
```

Now you can save and close the file.

Git will then create the *fixup* commit and **our alias will automatically run the interactive rebase**, starting from the faulty commit’s direct ancestor. Then setting `GIT_EDITOR` environment variable temporary to `true` tells Git to not open the editor and directly runs the rebase. If you’re curious about what’s happening then, you can remove that `GIT_EDITOR=true` part so you can see that **the fixup commit is already at the right spot in the list** of actions to run, prefixed by `fixup -C`.

```bash
pick 3f0714b chore(dx): setup ESLint and Prettier
fixup -C 61eecda amend! chore(dx): setup ESLint and Prettier
pick 9a7cf39 chore(dx): setup Husky, lint-staged, precommit-checks, commitlint
```

The rebase then runs (without conflict) and **you can verify your log to see that the commit message was updated!**

*You may see in the actions list some keys like `label onto` and `reset onto`. This is a because the rebase is called with a `--rebase-merges` option that preserves your local merges while rebasing. You don’t need to worry about it 😌.*