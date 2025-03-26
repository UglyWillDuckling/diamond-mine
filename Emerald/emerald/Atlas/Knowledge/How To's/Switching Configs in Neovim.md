---
author:
  - "[[Michael Uloth]]"
published: 
created: 2025-03-19
source: https://michaeluloth.com/neovim-switch-configs/
tags:
  - howto/nvim
---
Sep 7, 2023 \- Jan 2, 2025

![A ratchet set in its case, showing signs of age and rust.](https://res.cloudinary.com/ooloth/image/upload/c_scale,f_auto,q_auto,w_1440/v1/mu/ratchet-set?_a=BAMCkGIL0)

Photo by Elena Mozhvilo

Learning how to configure [Neovim](https://neovim.io/) can be overwhelming. One way to get started is to install a few pre-built configurations (like [LazyVim](https://www.lazyvim.org/), [NvChad](https://nvchad.com/), [AstroNvim](https://astronvim.com/), [LunarVim](https://www.lunarvim.org/) or the official Neovim [Kickstart](https://github.com/nvim-lua/kickstart.nvim)) and see what you like.

Most installation instructions [will](https://astronvim.com/#installation) [tell](https://www.lazyvim.org/installation) [you](https://nvchad.com/docs/quickstart/install) to replace everything in your `~/.config/nvim` directory with the new configuration. But once you do, you lose the ability to launch Neovim with your previous config.

With that approach, you can only have one Neovim config installed at a time.

But what if you want to compare two configs? Or maintain different configs for different purposes (e.g. one for work and one for personal projects)?

## Install each config in its own directory

To be able to use more than one config, you’ll need to make a couple changes to your setup:

1. Instead of installing a new configuration in `~/.config/nvim`, install it in a custom `~/.config` subdirectory
2. Each time you open Neovim, specify which config you want by setting the `NVIM_APPNAME` environment variable in your launch command

For example, assuming you’ve installed [LazyVim](https://www.lazyvim.org/) in `~/.config/nvim-lazyvim`, you’d launch it with this command:

```markdown
$ NVIM_APPNAME=nvim-lazyvim nvim
```

Neovim uses `NVIM_APPNAME` to determine which config directory to load. If you don’t include it (or set it to an invalid value), Neovim will use the default config in `~/.config/nvim`.

## Switching configs using `alias`, `select` or `fzf`

Lets assume your `~/.config` directory includes these subdirectories:

```markdown
~/.config
├── nvim-astrovim
│   └── init.lua
├── nvim-kickstart
│   ├── init.lua
│   └── lua
│       ├── custom
│       └── kickstart
├── nvim-lazyvim
│   ├── init.lua
│   └── lua
│       ├── config
│       └── plugins
├── nvim-lunarvim
│   └── config.lua
└── nvim-nvchad
│   ├── init.lua
│   └── lua
│       ├── core
│       ├── custom
│       └── plugins
└── nvim
```

To quickly open Neovim using each config, you could create an `alias` for each launch command:

~/.zshrc

```markdown
alias v='nvim' # default Neovim config
alias vz='NVIM_APPNAME=nvim-lazyvim nvim' # LazyVim
alias vc='NVIM_APPNAME=nvim-nvchad nvim' # NvChad
alias vk='NVIM_APPNAME=nvim-kickstart nvim' # Kickstart
alias va='NVIM_APPNAME=nvim-astrovim nvim' # AstroVim
alias vl='NVIM_APPNAME=nvim-lunarvim nvim' # LunarVim
```

Or use `select` to list your configs so you can choose one:

~/.zshrc

```markdown
vv() {
  select config in lazyvim kickstart nvchad astrovim lunarvim
  do NVIM_APPNAME=nvim-$config nvim $@; break; done
}
```

Which would produce a menu like this:

![A terminal after running the command "vv", showing the options "1) lazyvim 2) kickstart 3) nvchad 4) astrovim 5) lunarvim".](https://res.cloudinary.com/ooloth/image/upload/c_scale,f_auto,q_auto,w_1440/v1/mu/nvim-config-switcher-select?_a=BAMCkGIL0)

Or you could get fancy and use a fuzzy finder like [fzf](https://github.com/junegunn/fzf) to do the same thing:

~/.zshrc

```markdown
vv() {
  # Assumes all configs exist in directories named ~/.config/nvim-*
  local config=$(fd --max-depth 1 --glob 'nvim-*' ~/.config | fzf --prompt="Neovim Configs > " --height=~50% --layout=reverse --border --exit-0)
 
  # If I exit fzf without selecting a config, don't open Neovim
  [[ -z $config ]] && echo "No config selected" && return
 
  # Open Neovim with the selected config
  NVIM_APPNAME=$(basename $config) nvim $@
}
```

Feel free to use 'find' or 'ls' instead of 'fd'.

Here’s what that `fzf` menu would look like:

![A terminal after running the command "vv", showing a menu with the options "nvim-lazyvim", "nvim-kickstart", "nvim-nvchad", "nvim-astrovim" and "nvim-lunarvim".](https://res.cloudinary.com/ooloth/image/upload/c_scale,f_auto,q_auto,w_1440/v1/mu/nvim-config-switcher-fzf?_a=BAMCkGIL0)

## Conclusion

Configuring Neovim can be daunting, but being able to install a few configs and compare them is a great way to gather inspiration for your own custom config.

Good luck!

## Further Reading

- [NVIM\_APPNAME](https://neovim.io/doc/user/starting.html#%24NVIM_APPNAME) • Neovim docs 📚
- [Neovim Config Switcher](https://www.youtube.com/watch?v=LkHjJlSgKZY) • Elijah Manor 📺
- [Neovim Switcher Gist](https://gist.github.com/elijahmanor/b279553c0132bfad7eae23e34ceb593b) • Elijah Manor 👩‍💻
- [Lazyman: Neovim Configuration Manager](https://lazyman.dev/) • Ronald Record 🛠️
- [You Should Use a Neovim Distro If You Are New](https://www.youtube.com/watch?v=6qSzFWRz6Ck) • ThePrimeagen 📺