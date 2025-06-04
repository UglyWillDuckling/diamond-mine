## Elevator Pitch

Rant time: You've heard it before, git is *powerful*, but what good is that power when everything is so damn hard to do? Interactive rebasing requires you to edit a goddamn TODO file in your editor? *Are you kidding me?* To stage part of a file you need to use a command line program to step through each hunk and if a hunk can't be split down any further but contains code you don't want to stage, you have to edit an arcane patch file *by hand*? *Are you KIDDING me?!* Sometimes you get asked to stash your changes when switching branches only to realise that after you switch and unstash that there weren't even any conflicts and it would have been fine to just checkout the branch directly? *YOU HAVE GOT TO BE KIDDING ME!*

If you're a mere mortal like me and you're tired of hearing how powerful git is when in your daily life it's a powerful pain in your ass, lazygit might be for you.

- [Sponsors](https://github.com/jesseduffield/#sponsors)
- [Elevator Pitch](https://github.com/jesseduffield/#elevator-pitch)
- [Table of contents](https://github.com/jesseduffield/#table-of-contents)
- [Features](https://github.com/jesseduffield/#features)
	- [Stage individual lines](https://github.com/jesseduffield/#stage-individual-lines)
	- [Interactive Rebase](https://github.com/jesseduffield/#interactive-rebase)
	- [Cherry-pick](https://github.com/jesseduffield/#cherry-pick)
	- [Bisect](https://github.com/jesseduffield/#bisect)
	- [Nuke the working tree](https://github.com/jesseduffield/#nuke-the-working-tree)
	- [Amend an old commit](https://github.com/jesseduffield/#amend-an-old-commit)
	- [Filter](https://github.com/jesseduffield/#filter)
	- [Invoke a custom command](https://github.com/jesseduffield/#invoke-a-custom-command)
	- [Worktrees](https://github.com/jesseduffield/#worktrees)
	- [Rebase magic (custom patches)](https://github.com/jesseduffield/#rebase-magic-custom-patches)
	- [Rebase from marked base commit](https://github.com/jesseduffield/#rebase-from-marked-base-commit)
	- [Undo](https://github.com/jesseduffield/#undo)
	- [Commit graph](https://github.com/jesseduffield/#commit-graph)
	- [Compare two commits](https://github.com/jesseduffield/#compare-two-commits)
- [Tutorials](https://github.com/jesseduffield/#tutorials)
- [Installation](https://github.com/jesseduffield/#installation)
	- [Binary Releases](https://github.com/jesseduffield/#binary-releases)
	- [Homebrew](https://github.com/jesseduffield/#homebrew)
	- [MacPorts](https://github.com/jesseduffield/#macports)
	- [Void Linux](https://github.com/jesseduffield/#void-linux)
	- [Scoop (Windows)](https://github.com/jesseduffield/#scoop-windows)
	- [Arch Linux](https://github.com/jesseduffield/#arch-linux)
	- [Fedora and RHEL](https://github.com/jesseduffield/#fedora-and-rhel)
	- [Solus Linux](https://github.com/jesseduffield/#solus-linux)
	- [Debian and Ubuntu](https://github.com/jesseduffield/#debian-and-ubuntu)
	- [Funtoo Linux](https://github.com/jesseduffield/#funtoo-linux)
	- [Gentoo Linux](https://github.com/jesseduffield/#gentoo-linux)
	- [FreeBSD](https://github.com/jesseduffield/#freebsd)
	- [Termux](https://github.com/jesseduffield/#termux)
	- [Conda](https://github.com/jesseduffield/#conda)
	- [Go](https://github.com/jesseduffield/#go)
	- [Chocolatey (Windows)](https://github.com/jesseduffield/#chocolatey-windows)
	- [Winget (Windows 10 1709 or later)](https://github.com/jesseduffield/#winget-windows-10-1709-or-later)
	- [Manual](https://github.com/jesseduffield/#manual)
- [Usage](https://github.com/jesseduffield/#usage)
	- [Keybindings](https://github.com/jesseduffield/#keybindings)
	- [Changing Directory On Exit](https://github.com/jesseduffield/#changing-directory-on-exit)
	- [Undo/Redo](https://github.com/jesseduffield/#undoredo)
- [Configuration](https://github.com/jesseduffield/#configuration)
	- [Custom Pagers](https://github.com/jesseduffield/#custom-pagers)
	- [Custom Commands](https://github.com/jesseduffield/#custom-commands)
	- [Git flow support](https://github.com/jesseduffield/#git-flow-support)
- [Contributing](https://github.com/jesseduffield/#contributing)
	- [Debugging Locally](https://github.com/jesseduffield/#debugging-locally)
- [Donate](https://github.com/jesseduffield/#donate)
- [FAQ](https://github.com/jesseduffield/#faq)
	- [What do the commit colors represent?](https://github.com/jesseduffield/#what-do-the-commit-colors-represent)
- [Shameless Plug](https://github.com/jesseduffield/#shameless-plug)
- [Alternatives](https://github.com/jesseduffield/#alternatives)

Lazygit is not my fulltime job but it is a hefty part time job so if you want to support the project please consider [sponsoring me](https://github.com/sponsors/jesseduffield)

## Features

Press space on the selected line to stage it, or press `v` to start selecting a range of lines. You can also press `a` to select the entirety of the current hunk.

[![stage_lines](https://github.com/jesseduffield/lazygit/raw/assets/demo/stage_lines-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/stage_lines-compressed.gif)

### Interactive Rebase

Press `i` to start an interactive rebase. Then squash (`s`), fixup (`f`), drop (`d`), edit (`e`), move up (`ctrl+k`) or move down (`ctrl+j`) any of TODO commits, before continuing the rebase by bringing up the rebase options menu with `m` and then selecting `continue`.

You can also perform any these actions as a once-off (e.g. pressing `s` on a commit to squash it) without explicitly starting a rebase.

This demo also uses shift+down to select a range of commits to move and fixup.

[![interactive_rebase](https://github.com/jesseduffield/lazygit/raw/assets/demo/interactive_rebase-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/interactive_rebase-compressed.gif)

### Cherry-pick

Press `shift+c` on a commit to copy it and press `shift+v` to paste (cherry-pick) it.

[![cherry_pick](https://github.com/jesseduffield/lazygit/raw/assets/demo/cherry_pick-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/cherry_pick-compressed.gif)

### Bisect

Press `b` in the commits view to mark a commit as good/bad in order to begin a git bisect.

[![bisect](https://github.com/jesseduffield/lazygit/raw/assets/demo/bisect-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/bisect-compressed.gif)

For when you really want to just get rid of anything that shows up when you run `git status` (and yes that includes dirty submodules) [kidpix style](https://www.youtube.com/watch?v=N4E2B_k2Bss), press `shift+d` to bring up the reset options menu and then select the 'nuke' option.

[![Nuke working tree](https://github.com/jesseduffield/lazygit/raw/assets/demo/nuke_working_tree-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/nuke_working_tree-compressed.gif)

Pressing `shift+a` on any commit will amend that commit with the currently staged changes (running an interactive rebase in the background).

[![amend_old_commit](https://github.com/jesseduffield/lazygit/raw/assets/demo/amend_old_commit-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/amend_old_commit-compressed.gif)

### Filter

You can filter a view with `/`. Here we filter down our branches view and then hit `enter` to view its commits.

[![filter](https://github.com/jesseduffield/lazygit/raw/assets/demo/filter-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/filter-compressed.gif)

Lazygit has a very flexible [custom command system](https://github.com/jesseduffield/lazygit/blob/master/docs/Custom_Command_Keybindings.md). In this example a custom command is defined which emulates the built-in branch checkout action.

[![custom_command](https://github.com/jesseduffield/lazygit/raw/assets/demo/custom_command-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/custom_command-compressed.gif)

### Worktrees

You can create worktrees to have multiple branches going at once without the need for stashing or creating WIP commits when switching between them. Press `w` in the branches view to create a worktree from the selected branch and switch to it.

[![worktree_create_from_branches](https://github.com/jesseduffield/lazygit/raw/assets/demo/worktree_create_from_branches-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/worktree_create_from_branches-compressed.gif)

You can build a custom patch from an old commit and then remove the patch from the commit, split out a new commit, apply the patch in reverse to the index, and more.

In this example we have a redundant comment that we want to remove from an old commit. We hit `<enter>` on the commit to view its files, then `<enter>` on a file to focus the patch, then `<space>` to add the comment line to our custom patch, and then `ctrl+p` to view the custom patch options; selecting to remove the patch from the current commit.

Learn more in the [Rebase magic Youtube tutorial](https://youtu.be/4XaToVut_hs).

[![custom_patch](https://github.com/jesseduffield/lazygit/raw/assets/demo/custom_patch-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/custom_patch-compressed.gif)

Say you're on a feature branch that was itself branched off of the develop branch, and you've decided you'd rather be branching off the master branch. You need a way to rebase only the commits from your feature branch. In this demo we check to see which was the last commit on the develop branch, then press `shift+b` to mark that commit as our base commit, then press `r` on the master branch to rebase onto it, only bringing across the commits from our feature branch. Then we push our changes with `shift+p`.

[![rebase_onto](https://github.com/jesseduffield/lazygit/raw/assets/demo/rebase_onto-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/rebase_onto-compressed.gif)

### Undo

You can undo the last action by pressing 'z' and redo with `ctrl+z`. Here we drop a couple of commits and then undo the actions. Undo uses the reflog which is specific to commits and branches so we can't undo changes to the working tree or stash.

[More info](https://github.com/jesseduffield/lazygit/blob/master/docs/Undoing.md)

[![undo](https://github.com/jesseduffield/lazygit/raw/assets/demo/undo-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/undo-compressed.gif)

### Commit graph

When viewing the commit graph in an enlarged window (use `+` and `_` to cycle screen modes), the commit graph is shown. Colours correspond to the commit authors, and as you navigate down the graph, the parent commits of the selected commit are highlighted.

[![commit_graph](https://github.com/jesseduffield/lazygit/raw/assets/demo/commit_graph-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/commit_graph-compressed.gif)

If you press `shift+w` on a commit (or branch/ref) a menu will open that allows you to mark that commit so that any other commit you select will be diffed against it. Once you've selected the second commit, you'll see the diff in the main view and if you press `<enter>` you'll see the files of the diff. You can press `shift+w` to view the diff menu again to see options like reversing the diff direction or exiting diff mode. You can also exit diff mode by pressing `<escape>`.

[![diff_commits](https://github.com/jesseduffield/lazygit/raw/assets/demo/diff_commits-compressed.gif)](https://github.com/jesseduffield/lazygit/blob/assets/demo/diff_commits-compressed.gif)

## Tutorials

[![](https://camo.githubusercontent.com/c24063933d40509e109ec760b5b4bcd747f4683884e6e80dc6f0c31cb8d572ce/68747470733a2f2f692e696d6775722e636f6d2f7356456b74446e2e706e67)](https://youtu.be/CPLdltN7wgE)

- [15 Lazygit Features in 15 Minutes](https://youtu.be/CPLdltN7wgE)
- [Basics Tutorial](https://youtu.be/VDXvbHZYeKY)
- [Rebase Magic Tutorial](https://youtu.be/4XaToVut_hs)

## Usage

Call `lazygit` in your terminal inside a git repository.

```
$ lazygit
```

If you want, you can also add an alias for this with `echo "alias lg='lazygit'" >> ~/.zshrc` (or whichever rc file you're using).

### Keybindings

You can check out the list of keybindings [here](https://github.com/jesseduffield/lazygit/blob/master/docs/keybindings).

If you change repos in lazygit and want your shell to change directory into that repo on exiting lazygit, add this to your `~/.zshrc` (or other rc file):
h
```sh
lg()
{
    export LAZYGIT_NEW_DIR_FILE=~/.lazygit/newdir

    lazygit "$@"

    if [ -f $LAZYGIT_NEW_DIR_FILE ]; then
            cd "$(cat $LAZYGIT_NEW_DIR_FILE)"
            rm -f $LAZYGIT_NEW_DIR_FILE > /dev/null
    fi
}
```

Then `source ~/.zshrc` and from now on when you call `lg` and exit you'll switch directories to whatever you were in inside lazygit. To override this behaviour you can exit using `shift+Q` rather than just `q`.

### Undo/Redo

See the [docs](https://github.com/jesseduffield/lazygit/blob/master/docs/Undoing.md)

## Configuration

Check out the [configuration docs](https://github.com/jesseduffield/lazygit/blob/master/docs/Config.md).
