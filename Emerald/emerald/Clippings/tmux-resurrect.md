---
author:
  - "[[Atlas/tools/dev/github]]"
created: 2025-02-18
source: https://github.com/tmux-plugins/tmux-resurrect
tags:
  - tool/dev
  - tool/tmux
part of:
  - "[[tmux 3]]"
---
- [x] remind me (@[[2025-03-07 Nuphy keyboard]])
	- works really well
	- [[key bindings for tmux-resurrect]]
___
## personal notes 🗒

**Works** really well. 

Some small bugs probably exist but nothing I would worry about.

**Will take some time to get into the habbit of using it.**

A **longer period of time** is required to **evaluate** it fully

___
## Tmux Resurrect

Restore `tmux` environment after system restart.

Tmux is great, except when you have to restart the computer. You lose all the running programs, working directories, pane layouts etc. There are helpful management tools out there, but they require initial configuration and continuous updates as your workflow evolves or you start new projects.

`tmux-resurrect` saves all the little details from your tmux environment so it can be completely restored after a system restart (or when you feel like it). No configuration is required. You should feel like you never quit tmux.

It even (optionally) [restores vim and neovim sessions](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_vim_and_neovim_sessions.md)!

Automatic restoring and continuous saving of tmux env is also possible with [tmux-continuum](https://github.com/tmux-plugins/tmux-continuum) plugin.

### Screencast

[![screencast screenshot](https://github.com/tmux-plugins/tmux-resurrect/raw/master/video/screencast_img.png)](https://vimeo.com/104763018)

### Key bindings

- `prefix + Ctrl-s` - save
- `prefix + Ctrl-r` - restore

### About

This plugin goes to great lengths to save and restore all the details from your `tmux` environment. Here's what's been taken care of:

- all sessions, windows, panes and their order
- current working directory for each pane
- **exact pane layouts** within windows (even when zoomed)
- active and alternative session
- active and alternative window for each session
- windows with focus
- active pane for each window
- "grouped sessions" (useful feature when using tmux with multiple monitors)
- programs running within a pane! More details in the [restoring programs doc](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_programs.md).

Optional:

- [restoring vim and neovim sessions](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_vim_and_neovim_sessions.md)
- [restoring pane contents](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_pane_contents.md)
- [restoring a previously saved environment](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_previously_saved_environment.md)

Requirements / dependencies: `tmux 1.9` or higher, `bash`.

Tested and working on Linux, OSX and Cygwin.

`tmux-resurrect` is idempotent! It will not try to restore panes or windows that already exist.  
The single exception to this is when tmux is started with only 1 pane in order to restore previous tmux env. Only in this case will this single pane be overwritten.

### Installation with [Tmux Plugin Manager](https://github.com/tmux-plugins/tpm) (recommended)

Add plugin to the list of TPM plugins in `.tmux.conf`:

```c
set -g @plugin 'tmux-plugins/tmux-resurrect'
```

Hit `prefix + I` to fetch the plugin and source it. You should now be able to use the plugin.

### Manual Installation

Clone the repo:

```
$ git clone https://github.com/tmux-plugins/tmux-resurrect ~/clone/path
```

Add this line to the bottom of `.tmux.conf`:

```
run-shell ~/clone/path/resurrect.tmux
```

Reload TMUX environment with: `$ tmux source-file ~/.tmux.conf`. You should now be able to use the plugin.

### Docs

- [Guide for migrating from tmuxinator](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/migrating_from_tmuxinator.md)

**Configuration**

- [Changing the default key bindings](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/custom_key_bindings.md).
- [Setting up hooks on save & restore](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/hooks.md).
- Only a conservative list of programs is restored by default:  
`vi vim nvim emacs man less more tail top htop irssi weechat mutt`.  
[Restoring programs doc](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_programs.md) explains how to restore additional programs.
- [Change a directory](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/save_dir.md) where `tmux-resurrect` saves tmux environment.

**Optional features**

- [Restoring vim and neovim sessions](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_vim_and_neovim_sessions.md) is nice if you're a vim/neovim user.
- [Restoring pane contents](https://github.com/tmux-plugins/tmux-resurrect/blob/master/docs/restoring_pane_contents.md) feature.

### Other goodies

- [tmux-copycat](https://github.com/tmux-plugins/tmux-copycat) - a plugin for regex searches in tmux and fast match selection
- [tmux-yank](https://github.com/tmux-plugins/tmux-yank) - enables copying highlighted text to system clipboard
- [tmux-open](https://github.com/tmux-plugins/tmux-open) - a plugin for quickly opening highlighted file or a url
- [tmux-continuum](https://github.com/tmux-plugins/tmux-continuum) - automatic restoring and continuous saving of tmux env

### Reporting bugs and contributing

Both contributing and bug reports are welcome. Please check out [contributing guidelines](https://github.com/tmux-plugins/tmux-resurrect/blob/master/CONTRIBUTING.md).

### Credits

[Mislav Marohnić](https://github.com/mislav) - the idea for the plugin came from his [tmux-session script](https://github.com/mislav/dotfiles/blob/2036b5e03fb430bbcbc340689d63328abaa28876/bin/tmux-session).

___
