---
author:
  - "[[Atlas/tools/dev/github]]"
published:
created: 2025-03-14
source: https://github.com/kylechui/nvim-surround
tags:
  - plugin/nvim
---
## nvim-surround

Surround selections, stylishly 😎

README\_demo\_3.mp4<video src="https://private-user-images.githubusercontent.com/48545987/178679494-c7d58bdd-d8ca-4802-a01c-a9444b8b882f.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE5NjM3ODEsIm5iZiI6MTc0MTk2MzQ4MSwicGF0aCI6Ii80ODU0NTk4Ny8xNzg2Nzk0OTQtYzdkNThiZGQtZDhjYS00ODAyLWEwMWMtYTk0NDRiOGI4ODJmLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzE0VDE0NDQ0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzMzQzYzhkNTQ0YjQ4ZDJlMGYyODZjMmIwMjE4YWY3ZTlmZDI0MzAwZDllY2ZkNjdmYzllZDRiMDk0ZTc4ZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ejjl3IL4Xe7zhtmpNFgHhw2-m5NVXM7-gOBrqApB6po" data-canonical-src="https://private-user-images.githubusercontent.com/48545987/178679494-c7d58bdd-d8ca-4802-a01c-a9444b8b882f.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE5NjM3ODEsIm5iZiI6MTc0MTk2MzQ4MSwicGF0aCI6Ii80ODU0NTk4Ny8xNzg2Nzk0OTQtYzdkNThiZGQtZDhjYS00ODAyLWEwMWMtYTk0NDRiOGI4ODJmLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzE0VDE0NDQ0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzMzQzYzhkNTQ0YjQ4ZDJlMGYyODZjMmIwMjE4YWY3ZTlmZDI0MzAwZDllY2ZkNjdmYzllZDRiMDk0ZTc4ZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ejjl3IL4Xe7zhtmpNFgHhw2-m5NVXM7-gOBrqApB6po" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit"></video>

## ✨ Features

- Add/delete/change surrounding pairs
- Function calls and HTML tags out-of-the-box
- Dot-repeat previous actions
- Set buffer-local mappings and surrounds
- Jump to the *nearest* surrounding pair for modification
- Use a single character as an alias for several text-objects
- E.g. `q` is aliased to `` `,'," ``, so `csqb` replaces the *nearest* set of quotes with parentheses
- Surround using powerful pairs that depend on user input
- Modify custom surrounds
- First-class support for Vim motions, Lua patterns, and Tree-sitter nodes
- Highlight selections for visual feedback

## 🔒 Requirements

- [Neovim 0.8+](https://github.com/neovim/neovim/releases)
- \[Recommended\] If [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) is installed, then Tree-sitter nodes may be surrounded and modified, in addition to just Vim motions and Lua patterns
- \[Recommended\] If [nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) is installed, then Tree-sitter text-objects can be used to define surrounds, simplifying configuration

## 📦 Installation

Install this plugin using your favorite plugin manager, and then call `require("nvim-surround").setup()`.

### [lazy.nvim](https://github.com/folke/lazy.nvim)

```
{
    "kylechui/nvim-surround",
    version = "^3.0.0", -- Use for stability; omit to use \`main\` branch for the latest features
    event = "VeryLazy",
    config = function()
        require("nvim-surround").setup({
            -- Configuration here, or leave empty to use defaults
        })
    end
}
```

### [packer.nvim](https://github.com/wbthomason/packer.nvim)

```
use({
    "kylechui/nvim-surround",
    tag = "*", -- Use for stability; omit to use \`main\` branch for the latest features
    config = function()
        require("nvim-surround").setup({
            -- Configuration here, or leave empty to use defaults
        })
    end
})
```

## 🚀 Usage

The three "core" operations of `add`/`delete`/`change` can be done with the keymaps `ys{motion}{char}`, `ds{char}`, and `cs{target}{replacement}`, respectively. For the following examples, `*` will denote the cursor position:

```
    Old text                    Command         New text
--------------------------------------------------------------------------------
    surr*ound_words             ysiw)           (surround_words)
    *make strings               ys$"            "make strings"
    [delete ar*ound me!]        ds]             delete around me!
    remove <b>HTML t*ags</b>    dst             remove HTML tags
    'change quot*es'            cs'"            "change quotes"
    <b>or tag* types</b>        csth1<CR>       <h1>or tag types</h1>
    delete(functi*on calls)     dsf             function calls
```

Detailed information on how to use this plugin can be found in [`:h nvim-surround.usage`](https://github.com/kylechui/nvim-surround/blob/main/doc/nvim-surround.txt).

## ⚙️ Configuration

The default configuration is found [here](https://github.com/kylechui/nvim-surround/blob/main/lua/nvim-surround/config.lua). Simply call `require("nvim-surround").setup` or `require("nvim-surround").buffer_setup` with the desired options.

More information on how to configure this plugin can be found in [`:h nvim-surround.configuration`](https://github.com/kylechui/nvim-surround/blob/main/doc/nvim-surround.txt).

## Contributing

See [the contributing file](https://github.com/kylechui/nvim-surround/blob/main/CONTRIBUTING.md).

## Shoutouts

- [vim-surround](https://github.com/tpope/vim-surround)
- [mini.surround](https://github.com/echasnovski/mini.surround)
- [vim-sandwich](https://github.com/machakann/vim-sandwich)
- Like this project? Give it a ⭐ to show your support!