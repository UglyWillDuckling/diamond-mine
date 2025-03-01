based_on:: https://github.com/MariaSolOs/dotfiles/tree/82a9d94c3c2e124a988bb98b532a9192084bd09e/.config/nvim

basing it on https://github.com/MariaSolOs/dotfiles/tree/82a9d94c3c2e124a988bb98b532a9192084bd09e/.config/nvim, **for now**.

path on system: /home/vsedlar/dev/dotfiles/nvim/new_nvim/lua
___

I would like to keep my old config and be able to switch back and fort whenever I want to.
I will create a new directory for the wip configuration. 
I just need a way to quickly switch between the old the new config.

## info

### folder structure
```
	├── colors
	│   └── miss-dracula.lua
	├── filetype.lua
	├── init.lua
	├── lazylock.json
	├── lua
	│   ├── autocmds.lua
	│   ├── commands.lua
	│   ├── icons.lua
	│   ├── keymaps.lua
	│   ├── lsp.lua
	│   ├── settings.lua
	│   └── statusline.lua
	└── stylua.toml
	3 directories, 12 files
```

## status

looking 👀 at the **status line**

just lost all my changes because of a git conflict, I should **commit at the start** to avoid this.

- [ ] git clone the repo
- [ ] copy over the files
