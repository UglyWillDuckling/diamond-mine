---
source: https://wiki.archlinux.org/title/Neovim
author: 
published: 
created: 2025-02-11
tags:
  - howto/arch
  - howto/nvim
---
[Neovim](https://neovim.io/) is a fork of [Vim](https://wiki.archlinux.org/title/Vim "Vim") aiming to improve the codebase, allowing for easier implementation of APIs, improved user experience and plugin implementation. Neovim inspired editors like [Helix](https://wiki.archlinux.org/title/Helix "Helix").

## Installation

[Install](https://wiki.archlinux.org/title/Install "Install") the [neovim](https://archlinux.org/packages/?name=neovim) package, or [neovim-git](https://aur.archlinux.org/packages/neovim-git/)<sup><small>AUR</small></sup> for the latest development version, which strongly encourages the use of [Lua](https://wiki.archlinux.org/title/Lua "Lua") as its main configuration language. To make the system clipboard work with Neovim, you may need to install [xclip](https://archlinux.org/packages/?name=xclip) (X11) or [wl-clipboard](https://archlinux.org/packages/?name=wl-clipboard) (Wayland).

**Note:** With neovim, some of its features are delegated to external "providers". For Python providers, use [python-pynvim](https://archlinux.org/packages/?name=python-pynvim). For clipboard providers, see [provider-clipboard](https://neovim.io/doc/user/provider.html#provider-clipboard) or the `:help provider-clipboard` neovim command.

It is also possible to install one of [many GUIs and other related projects](https://github.com/neovim/neovim/wiki/Related-projects):

- **[neovim-qt](https://archlinux.org/packages/?name=neovim-qt)** — Fast, lightweight, and customizable Qt GUI. Provides a modern interface, including support for multiple tabs, split windows, and customizable themes.

[https://github.com/equalsraf/neovim-qt](https://github.com/equalsraf/neovim-qt) || [neovim-qt](https://archlinux.org/packages/?name=neovim-qt)

- **[neovim-gtk](https://aur.archlinux.org/packages/neovim-gtk/)<sup><small>AUR</small></sup>** — GTK GUI. Provides a modern, customizable interface, including support for split windows, multiple tabs, and customizable themes.

[https://github.com/Lyude/neovim-gtk](https://github.com/Lyude/neovim-gtk) || [neovim-gtk](https://aur.archlinux.org/packages/neovim-gtk/)<sup><small>AUR</small></sup>

- **[uivonim-git](https://aur.archlinux.org/packages/uivonim-git/)<sup><small>AUR</small></sup>** — ([Inactive](https://aur.archlinux.org/packages/uivonim-git#comment-888471)) Simple and lightweight GTK GUI. Provides a minimalistic interface, including support for split windows and customizable themes.

[uivonim-git](https://aur.archlinux.org/packages/uivonim-git/)<sup><small>AUR</small></sup> || [uivonim-git](https://aur.archlinux.org/packages/uivonim-git/)<sup><small>AUR</small></sup>

- **[neovide](https://archlinux.org/packages/?name=neovide)** — Rust GUI.

[https://github.com/neovide/neovide](https://github.com/neovide/neovide) || [neovide](https://archlinux.org/packages/?name=neovide)

- **[neoray-git](https://aur.archlinux.org/packages/neoray-git/)<sup><small>AUR</small></sup>** — Go GUI.

[https://github.com/hismailbulut/neoray](https://github.com/hismailbulut/neoray) || [neoray-git](https://aur.archlinux.org/packages/neoray-git/)<sup><small>AUR</small></sup>

- **[gnvim](https://aur.archlinux.org/packages/gnvim/)<sup><small>AUR</small></sup>** — GTK GUI.

[https://github.com/vhakulinen/gnvim](https://github.com/vhakulinen/gnvim) || [gnvim](https://aur.archlinux.org/packages/gnvim/)<sup><small>AUR</small></sup>

- **[fvim](https://aur.archlinux.org/packages/fvim/)<sup><small>AUR</small></sup>** — F# GUI.

[https://github.com/yatli/fvim](https://github.com/yatli/fvim) || [fvim](https://aur.archlinux.org/packages/fvim/)<sup><small>AUR</small></sup>

## Configuration

Nvim's user-specific configuration file is located at `$XDG_CONFIG_HOME/nvim/init.vim`, by default `~/.config/nvim/init.vim`. The system-wide configuration file is located at `$XDG_CONFIG_DIRS/nvim/sysinit.vim`, by default `/etc/xdg/nvim/sysinit.vim`. When the system-wide configuration file does not exist, Nvim checks for `/usr/share/nvim/sysinit.vim`, which is not intended to be edited by users.[\[1\]](https://github.com/neovim/neovim/blob/master/runtime/doc/starting.txt#L439) By default, the former global configuration file does not exist. If you create the former file, you may wish to have it source the latter if you still want the functionality it provides, which is allowing pacman-installed vim packages to work with Nvim.

Nvim is compatible with most of Vim's options; however, there are options specific to Nvim. For a complete list of Nvim options, see Neovim's [help file](https://neovim.io/doc/user/options.html).

Nvim's data directory is located in `~/.local/share/nvim/` and contains swap for open files, the [ShaDa](https://neovim.io/doc/user/starting.html#shada) (Shared Data) file, and the site directory for plugins.

Starting from Nvim's version 0.5, it is possible to setup Nvim via Lua, by default `~/.config/nvim/init.lua`, the API is still young, but common configurations work out-of-the-box without much more steps. See [\[2\]](https://github.com/nanotee/nvim-lua-guide) for suggestions on how to convert your current configuration. At the moment, there is not much of an advantage when using `init.lua` vs the common `init.vim`, but when correctly done, Lua provides a small improvement in startup times, and it becomes specially useful when using several plugins written in Lua, due to ease of configuration.

### Migrating from Vim

If you wish to migrate your existing Vim configuration to Nvim, simply copy your `~/.vimrc` to `~/.config/nvim/init.vim`. If applicable, copy the contents of `~/.vim/autoload/` to `~/.local/share/nvim/site/autoload/`.

### Shared configuration between Vim and Nvim

Neovim uses `$XDG_CONFIG_HOME/nvim` instead of `~/.vim` as its main configuration directory and `$XDG_CONFIG_HOME/nvim/init.vim` instead of `~/.vimrc` as its main configuration file.

If you wish to continue using Vim and wish to source your existing Vim configuration in Nvim, see [nvim-from-vim](https://neovim.io/doc/user/nvim.html#nvim-from-vim) or the `:help nvim-from-vim` neovim command.

#### Loading plugins

Vim/Nvim plugins installed from [official repositories](https://wiki.archlinux.org/title/Official_repositories "Official repositories") or [AUR](https://wiki.archlinux.org/title/AUR "AUR") get automatically sourced by `/etc/xdg/nvim/sysinit.vim`, so there is no need to take any extra steps. A vast amount of plugins can be found on both places, but the most recommended way to add plugins is by using a plugin manager, most commonly used are [vim-plug](https://aur.archlinux.org/packages/vim-plug/)<sup><small>AUR</small></sup> which works for both Vim and Nvim, and [lazy.nvim](https://github.com/folke/lazy.nvim) which only works on Nvim and is written in Lua. Both of them allow for expressive configurations, ranging from github branch to runtime commands.

Most plugins written for vim work without much effort on Nvim, but not every plugin written for Nvim works for Vim, so if your intention is to ensure a compatible configuration, stick to a traditional `init.vim` or `.vimrc`

## Tips and tricks

### Replacing vi and vim with neovim

Setting `$VISUAL` and `$EDITOR` [environment variables](https://wiki.archlinux.org/title/Environment_variables "Environment variables") should be sufficient in most cases.

Some applications may hardcode vi or vim as default editor; to use *neovim* in their place, install [neovim-symlinks](https://aur.archlinux.org/packages/neovim-symlinks/)<sup><small>AUR</small></sup> or [neovim-drop-in](https://aur.archlinux.org/packages/neovim-drop-in/)<sup><small>AUR</small></sup>.

### Symlinking init.vim to .vimrc

As neovim is *mostly* compatible with standard vim, you can symlink `nvim/init.vim` to your old `.vimrc` to keep old configuration options:

```
$ ln -s ~/.vimrc ~/.config/nvim/init.vim
```

If you want some lines to be specific to each version, you can use an `if` block:

```
.vimrc
```
```
if has('nvim')
    " Neovim specific commands
else
    " Standard vim specific commands
endif
```

### True color support

The `READMEs` of [this project](https://github.com/CarloWood/neovim-true-color-scheme-editor) explain how to add 24-bits "True Color" support to your syntax highlighting and how to use a color picker to see how it looks in real-time. Comes with the syntax highlighting of the author (if installed) for C++.

### Lastplace cursor support

If you like to keep your last position of cursor to be saved, [lastplace.lua](https://github.com/neovim/neovim/issues/16339#issuecomment-1348133829) is quite useful. It just needs to be placed in `~/.config/nvim/plugin/` or in the system-wide directory `/usr/share/nvim/runtime/plugin/`.

### Language Server Protocol

Neovim contains a built-in [Language Server Protocol](https://microsoft.github.io/language-server-protocol) client and the [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) plugin provides common configurations for it.

See [Language Server Protocol](https://wiki.archlinux.org/title/Language_Server_Protocol "Language Server Protocol") for a list of Arch packages.

You can use the `:Man` command to open manual pages. To open all manual pages with neovim set the `MANPAGER` [environment variable](https://wiki.archlinux.org/title/Environment_variable "Environment variable") to `nvim +Man!`.

For other pager support install either the [nvimpager](https://aur.archlinux.org/packages/nvimpager/)<sup><small>AUR</small></sup> or the [nvimpager-git](https://aur.archlinux.org/packages/nvimpager-git/)<sup><small>AUR</small></sup> package and set the `PAGER` [environment variable](https://wiki.archlinux.org/title/Environment_variable "Environment variable") to `nvimpager`.

You can also try [page](https://github.com/I60R/page), packaged in [page-git](https://aur.archlinux.org/packages/page-git/)<sup><small>AUR</small></sup>.

## Troubleshooting

### Cursor is not restored to previous state after exit

If the cursor keeps blinking after exiting neovim, see the solution in the [neovim FAQ](https://github.com/neovim/neovim/wiki/FAQ#cursor-style-isnt-restored-after-exiting-or-suspending-and-resuming-nvim).

## See also

- [Github repository](https://github.com/neovim/neovim)
- [Github wiki](https://github.com/neovim/neovim/wiki)