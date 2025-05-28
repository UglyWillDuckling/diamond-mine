---
author:
  - "[[LintaoAmons]]"
created: 2025-05-27
published:
source: "https://github.com/LintaoAmons/scratch.nvim"
tags:
---
**[scratch.nvim](https://github.com/LintaoAmons/scratch.nvim)** Public

Create temporary playground files effortlessly. Find them later without worrying about filenames or locations.

[View license](https://github.com/LintaoAmons/scratch.nvim/blob/main/LICENSE)

[Open in github.dev](https://github.dev/) [Open in a new github.dev tab](https://github.dev/) [Open in codespace](https://github.com/codespaces/new/LintaoAmons/scratch.nvim?resume=1)

Create temporary playground files effortlessly. Find them later without worrying about filenames or locations.

Scratch.mp4<video src="https://private-user-images.githubusercontent.com/95092244/274647507-c1adff70-c8c5-4594-80e3-18d3e6b24d7a.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgzMzc5NzQsIm5iZiI6MTc0ODMzNzY3NCwicGF0aCI6Ii85NTA5MjI0NC8yNzQ2NDc1MDctYzFhZGZmNzAtYzhjNS00NTk0LTgwZTMtMThkM2U2YjI0ZDdhLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI3VDA5MjExNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBhNjRiNTc0YWNkNzBjNzk0ZjFkMzAyNjU2MGZkMzk2ZTI4MTNhZTQzMDg3ZjZjZDkzNGRmNmJhNzY2MzU5YzYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UIufnBP-xfHC364H-xsDn-WWM8FHONJvIm8gKLvMg2w" controls="controls"></video>
```
-- use lazy.nvim
{
  "LintaoAmons/scratch.nvim",
  event = "VeryLazy",
}
```
Detailed Configuration

> Check my [neovim config](https://github.com/LintaoAmons/CoolStuffes/blob/main/nvim/.config/nvim/lua/plugins/editor-enhance/scratch.lua) as real life example

```
return {
  "LintaoAmons/scratch.nvim",
  event = "VeryLazy",
  dependencies = {
    {"ibhagwan/fzf-lua"}, --optional: if you want to use fzf-lua to pick scratch file. Recommanded, since it will order the files by modification datetime desc. (require rg)
    {"nvim-telescope/telescope.nvim"}, -- optional: if you want to pick scratch file by telescope
    {"stevearc/dressing.nvim"} -- optional: to have the same UI shown in the GIF
  }
  config = function()
    require("scratch").setup({
      scratch_file_dir = vim.fn.stdpath("cache") .. "/scratch.nvim", -- where your scratch files will be put
      window_cmd = "rightbelow vsplit", -- 'vsplit' | 'split' | 'edit' | 'tabedit' | 'rightbelow vsplit'
      use_telescope = true,
      -- fzf-lua is recommanded, since it will order the files by modification datetime desc. (require rg)
      file_picker = "fzflua", -- "fzflua" | "telescope" | nil
      filetypes = { "lua", "js", "sh", "ts" }, -- you can simply put filetype here
      filetype_details = { -- or, you can have more control here
        json = {}, -- empty table is fine
        ["project-name.md"] = {
          subdir = "project-name" -- group scratch files under specific sub folder
        },
        ["yaml"] = {},
        go = {
          requireDir = true, -- true if each scratch file requires a new directory
          filename = "main", -- the filename of the scratch file in the new directory
          content = { "package main", "", "func main() {", "  ", "}" },
          cursor = {
            location = { 4, 2 },
            insert_mode = true,
          },
        },
      },
      localKeys = {
        {
          filenameContains = { "sh" },
          LocalKeys = {
            {
              cmd = "<CMD>RunShellCurrentLine<CR>",
              key = "<C-r>",
              modes = { "n", "i", "v" },
            },
          },
        },
      },
      hooks = {
        {
          callback = function()
            vim.api.nvim_buf_set_lines(0, 0, -1, false, { "hello", "world" })
          end,
        },
      },
    })
  end,
  event = "VeryLazy",
}
```

To check your current configuration, simply type `:lua = vim.g.scratch_config`

And if you want to modify the config, for example add a new filetype, just call the `setup` function with your updated config again.

Or you can change the `vim.g.scratch_config` global veriable directly

All commands are started with `Scratch`, and no default keymappings.

| Command | Description |
| --- | --- |
| `Scratch` | Creates a new scratch file in the specified `scratch_file_dir` directory in your configuration. |
| `ScratchWithName` | Allows the creation of a new scratch file with a user-specified filename, including the file extension. |
| `ScratchOpen` | Opens an existing scratch file from the `scratch_file_dir`. |
| `ScratchOpenFzf` | Uses fuzzy finding to search through the contents of scratch files and open a selected file. |

Keybinding recommandation:

```
vim.keymap.set("n", "<M-C-n>", "<cmd>Scratch<cr>")
vim.keymap.set("n", "<M-C-o>", "<cmd>ScratchOpen<cr>")
```

## CONTRIBUTING

Don't hesitate to ask me anything about the codebase if you want to contribute.

By [telegram](https://t.me/+ssgpiHyY9580ZWFl) or [微信: CateFat](https://lintao-index.pages.dev/assets/images/wechat-437d6c12efa9f89bab63c7fe07ce1927.png)

- [my neovim config](https://github.com/LintaoAmons/CoolStuffes/tree/main/nvim/.config/nvim)
- [scratch.nvim](https://github.com/LintaoAmons/scratch.nvim)
- [cd-project.nvim](https://github.com/LintaoAmons/cd-project.nvim)
- [bookmarks.nvim](https://github.com/LintaoAmons/bookmarks.nvim)
- [context-menu.nvim](https://github.com/LintaoAmons/context-menu.nvim)