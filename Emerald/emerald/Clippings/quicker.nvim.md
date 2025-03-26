---
author:
  - "[[stevearco]]"
created: 2025-03-25
source: https://github.com/stevearc/quicker.nvim
tags:
  - plugin/nvim
---
- [[#Requirements|Requirements]]
- [[#Features|Features]]
- [[#Installation|Installation]]
- [[#Setup|Setup]]
- [[#Options|Options]]
- [[#Highlights|Highlights]]
- [[#API|API]]
	- [[#API#expand(opts)|expand(opts)]]
	- [[#API#collapse()|collapse()]]
	- [[#API#toggle\_expand(opts)|toggle\_expand(opts)]]
	- [[#API#refresh(loclist\_win, opts)|refresh(loclist\_win, opts)]]
	- [[#API#is\_open(loclist\_win)|is\_open(loclist\_win)]]
	- [[#API#toggle(opts)|toggle(opts)]]
	- [[#API#open(opts)|open(opts)]]
	- [[#API#close(opts)|close(opts)]]
- [[#Other Plugins|Other Plugins]]



## Requirements

- Neovim 0.10+

## Features

- **Improved styling** - including syntax highlighting of grep results.
- **Show context lines** - easily view lines above and below the quickfix results.
- **Editable buffer** - make changes across your whole project by editing the quickfix buffer and `:w`.
- **API helpers** - some helper methods for common tasks, such as toggling the quickfix.

**Improved styling** (colorscheme: [Duskfox](https://github.com/EdenEast/nightfox.nvim/) )  
Before  
[![Screenshot 2024-07-30 at 6 03 39 PM](https://private-user-images.githubusercontent.com/506791/353656158-8faa4790-8a7a-4d05-882e-c4e8e7653b00.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTY5NTUsIm5iZiI6MTc0MjkxNjY1NSwicGF0aCI6Ii81MDY3OTEvMzUzNjU2MTU4LThmYWE0NzkwLThhN2EtNGQwNS04ODJlLWM0ZThlNzY1M2IwMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNTMwNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hY2NhMzZmNzk5MWEyMTNiOWYyMWQ5NjFlODlkNTBjYzk1Y2QzYzI1MzNmY2Y2NTViOWUyNTY5ZDA3MjkxMzM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.db2SjxmhV_XqeP3imh9YW1PIAtsXdpvqiS3zBS_L3TQ)](https://private-user-images.githubusercontent.com/506791/353656158-8faa4790-8a7a-4d05-882e-c4e8e7653b00.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTY5NTUsIm5iZiI6MTc0MjkxNjY1NSwicGF0aCI6Ii81MDY3OTEvMzUzNjU2MTU4LThmYWE0NzkwLThhN2EtNGQwNS04ODJlLWM0ZThlNzY1M2IwMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNTMwNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hY2NhMzZmNzk5MWEyMTNiOWYyMWQ5NjFlODlkNTBjYzk1Y2QzYzI1MzNmY2Y2NTViOWUyNTY5ZDA3MjkxMzM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.db2SjxmhV_XqeP3imh9YW1PIAtsXdpvqiS3zBS_L3TQ)

After  
[![Screenshot 2024-07-30 at 2 05 49 PM](https://private-user-images.githubusercontent.com/506791/353616362-90cf87dd-83ec-4967-88aa-5ffe3e1e6623.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTY5NTUsIm5iZiI6MTc0MjkxNjY1NSwicGF0aCI6Ii81MDY3OTEvMzUzNjE2MzYyLTkwY2Y4N2RkLTgzZWMtNDk2Ny04OGFhLTVmZmUzZTFlNjYyMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNTMwNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iN2VhMTA0MThlNWYyYzgzODg3MDk2Njg0NTk3NzM5Y2RmNmRiNDQ1ODQ2Y2FlMTE0ZjU0OWMyZTc3Yjc1ZDU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.35ITul88frWRrnbY9IgVu0ddBH9Bst49XhtoCM3GvYU)](https://private-user-images.githubusercontent.com/506791/353616362-90cf87dd-83ec-4967-88aa-5ffe3e1e6623.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTY5NTUsIm5iZiI6MTc0MjkxNjY1NSwicGF0aCI6Ii81MDY3OTEvMzUzNjE2MzYyLTkwY2Y4N2RkLTgzZWMtNDk2Ny04OGFhLTVmZmUzZTFlNjYyMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNTMwNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iN2VhMTA0MThlNWYyYzgzODg3MDk2Njg0NTk3NzM5Y2RmNmRiNDQ1ODQ2Y2FlMTE0ZjU0OWMyZTc3Yjc1ZDU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.35ITul88frWRrnbY9IgVu0ddBH9Bst49XhtoCM3GvYU)

**Context lines** around the results  
[![Screenshot 2024-07-30 at 2 06 17 PM](https://private-user-images.githubusercontent.com/506791/353616505-844445c9-328f-4f18-91d9-b32d32d3ef39.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTY5NTUsIm5iZiI6MTc0MjkxNjY1NSwicGF0aCI6Ii81MDY3OTEvMzUzNjE2NTA1LTg0NDQ0NWM5LTMyOGYtNGYxOC05MWQ5LWIzMmQzMmQzZWYzOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNTMwNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YjYzNjNlZjRjZGJkZDUzZTQwZDFjYTdmMGNlOWE2ODJjM2Q4ZTBlYTBhMWZjYmI1NDE0YzFkNzg5MzE4MTA3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9T-wmdOBumOX7bT002Ivj40CTBYPQM5JP0bKNPOuhKg)](https://private-user-images.githubusercontent.com/506791/353616505-844445c9-328f-4f18-91d9-b32d32d3ef39.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTY5NTUsIm5iZiI6MTc0MjkxNjY1NSwicGF0aCI6Ii81MDY3OTEvMzUzNjE2NTA1LTg0NDQ0NWM5LTMyOGYtNGYxOC05MWQ5LWIzMmQzMmQzZWYzOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNTMwNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YjYzNjNlZjRjZGJkZDUzZTQwZDFjYTdmMGNlOWE2ODJjM2Q4ZTBlYTBhMWZjYmI1NDE0YzFkNzg5MzE4MTA3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9T-wmdOBumOX7bT002Ivj40CTBYPQM5JP0bKNPOuhKg)

**Editing the quickfix** to apply changes across multiple files

Screen.Recording.2024-07-30.at.2.35.23.PM.mov<video src="https://private-user-images.githubusercontent.com/506791/353623895-5065ac4d-ec24-49d1-a95d-232344b17484.mov?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTY5NTUsIm5iZiI6MTc0MjkxNjY1NSwicGF0aCI6Ii81MDY3OTEvMzUzNjIzODk1LTUwNjVhYzRkLWVjMjQtNDlkMS1hOTVkLTIzMjM0NGIxNzQ4NC5tb3Y_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNTMwNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMmM5OWQ4N2M2MzE0NjU2MGZhY2NkNTRjMGM4MTM3ZTA5MmQ1Yzg5ZTY1NWNhZDg3OWUwMDc1ODY1ODZiMTNkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.EmdcniDxBNeMpTO4WRlEe3jlhLx5lN9uAoFMef15FB0" controls="controls"></video>

## Installation

quicker.nvim supports all the usual plugin managers

lazy.nvim
```
{
  'stevearc/quicker.nvim',
  event = "FileType qf",
  ---@module "quicker"
  ---@type quicker.SetupOptions
  opts = {},
}
```
Packer
```
require("packer").startup(function()
  use({
    "stevearc/quicker.nvim",
    config = function()
      require("quicker").setup()
    end,
  })
end)
```
Paq
```
require("paq")({
  { "stevearc/quicker.nvim" },
})
```
vim-plug
```
Plug 'stevearc/quicker.nvim'
```
dein
```
call dein#add('stevearc/quicker.nvim')
```
Pathogen
```
git clone --depth=1 https://github.com/stevearc/quicker.nvim.git ~/.vim/bundle/
```
Neovim native package
```
git clone --depth=1 https://github.com/stevearc/quicker.nvim.git \
  "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/pack/quicker/start/quicker.nvim
```

## Setup

You will need to call `setup()` for quicker to start working

```
require("quicker").setup()
```

It's not required to pass in any options, but you may wish to to set some keymaps.

```
vim.keymap.set("n", "<leader>q", function()
  require("quicker").toggle()
end, {
  desc = "Toggle quickfix",
})
vim.keymap.set("n", "<leader>l", function()
  require("quicker").toggle({ loclist = true })
end, {
  desc = "Toggle loclist",
})
require("quicker").setup({
  keys = {
    {
      ">",
      function()
        require("quicker").expand({ before = 2, after = 2, add_to_existing = true })
      end,
      desc = "Expand quickfix context",
    },
    {
      "<",
      function()
        require("quicker").collapse()
      end,
      desc = "Collapse quickfix context",
    },
  },
})
```

## Options

A complete list of all configuration options

```
require("quicker").setup({
  -- Local options to set for quickfix
  opts = {
    buflisted = false,
    number = false,
    relativenumber = false,
    signcolumn = "auto",
    winfixheight = true,
    wrap = false,
  },
  -- Set to false to disable the default options in \`opts\`
  use_default_opts = true,
  -- Keymaps to set for the quickfix buffer
  keys = {
    -- { ">", "<cmd>lua require('quicker').expand()<CR>", desc = "Expand quickfix content" },
  },
  -- Callback function to run any custom logic or keymaps for the quickfix buffer
  on_qf = function(bufnr) end,
  edit = {
    -- Enable editing the quickfix like a normal buffer
    enabled = true,
    -- Set to true to write buffers after applying edits.
    -- Set to "unmodified" to only write unmodified buffers.
    autosave = "unmodified",
  },
  -- Keep the cursor to the right of the filename and lnum columns
  constrain_cursor = true,
  highlight = {
    -- Use treesitter highlighting
    treesitter = true,
    -- Use LSP semantic token highlighting
    lsp = true,
    -- Load the referenced buffers to apply more accurate highlights (may be slow)
    load_buffers = false,
  },
  follow = {
    -- When quickfix window is open, scroll to closest item to the cursor
    enabled = false,
  },
  -- Map of quickfix item type to icon
  type_icons = {
    E = "󰅚 ",
    W = "󰀪 ",
    I = " ",
    N = " ",
    H = " ",
  },
  -- Border characters
  borders = {
    vert = "┃",
    -- Strong headers separate results from different files
    strong_header = "━",
    strong_cross = "╋",
    strong_end = "┫",
    -- Soft headers separate results within the same file
    soft_header = "╌",
    soft_cross = "╂",
    soft_end = "┨",
  },
  -- How to trim the leading whitespace from results. Can be 'all', 'common', or false
  trim_leading_whitespace = "common",
  -- Maximum width of the filename column
  max_filename_width = function()
    return math.floor(math.min(95, vim.o.columns / 2))
  end,
  -- How far the header should extend to the right
  header_length = function(type, start_col)
    return vim.o.columns - start_col
  end,
})
```

## Highlights

These are the highlight groups that are used to style the quickfix buffer. You can set these highlight groups yourself or use `:help winhighlight` in the setup `opts` option to override them for just the quickfix window.

- `QuickFixText` - The base text when there are no syntax highlights
- `QuickFixTextInvalid` - The text when `valid = 0`
- `QuickFixHeaderHard` - The header that divides results from different files (with context expanded)
- `QuickFixHeaderSoft` - The header that divides results within the same file (with context expanded)
- `Delimiter` - The divider between filename, line number, and text
- `QuickFixLineNr` - The line number
- `QuickFixFilename` - The filename
- `QuickFixFilenameInvalid` - The filename when `valid = 0`
- `DiagnosticSign*` - The signs that display the quickfix error type

## API

### expand(opts)

`expand(opts)`  
Expand the context around the quickfix results.

| Param | Type | Desc |
| --- | --- | --- |
| opts | `nil\|quicker.ExpandOpts` |  |
| \>before | `nil\|integer` | Number of lines of context to show before the line (default 2) |
| \>after | `nil\|integer` | Number of lines of context to show after the line (default 2) |
| \>add\_to\_existing | `nil\|boolean` |  |
| \>loclist\_win | `nil\|integer` |  |

**Note:**

```
If there are multiple quickfix items for the same line of a file, only the first
one will remain after calling expand().
```

### collapse()

`collapse()`  
Collapse the context around quickfix results, leaving only the `valid` items.

### toggle\_expand(opts)

`toggle_expand(opts)`  
Toggle the expanded context around the quickfix results.

| Param | Type | Desc |
| --- | --- | --- |
| opts | `nil\|quicker.ExpandOpts` |  |
| \>before | `nil\|integer` | Number of lines of context to show before the line (default 2) |
| \>after | `nil\|integer` | Number of lines of context to show after the line (default 2) |
| \>add\_to\_existing | `nil\|boolean` |  |
| \>loclist\_win | `nil\|integer` |  |

### refresh(loclist\_win, opts)

`refresh(loclist_win, opts)`  
Update the quickfix list with the current buffer text for each item.

| Param | Type | Desc |
| --- | --- | --- |
| loclist\_win | `nil\|integer` |  |
| opts | `nil\|quicker.RefreshOpts` |  |
| \>keep\_diagnostics | `nil\|boolean` | If a line has a diagnostic type, keep the original text and display it as virtual text after refreshing from source. |

### is\_open(loclist\_win)

`is_open(loclist_win)`

| Param | Type | Desc |
| --- | --- | --- |
| loclist\_win | `nil\|integer` | Check if loclist is open for the given window. If nil, check quickfix. |

### toggle(opts)

`toggle(opts)`  
Toggle the quickfix or loclist window.

| Param | Type | Desc |
| --- | --- | --- |
| opts | `nil\|quicker.OpenOpts` |  |
| \>loclist | `nil\|boolean` | Toggle the loclist instead of the quickfix list |
| \>focus | `nil\|boolean` | Focus the quickfix window after toggling (default false) |
| \>height | `nil\|integer` | Height of the quickfix window when opened. Defaults to number of items in the list. |
| \>min\_height | `nil\|integer` | Minimum height of the quickfix window. Default 4. |
| \>max\_height | `nil\|integer` | Maximum height of the quickfix window. Default 16. |
| \>open\_cmd\_mods | `nil\|quicker.OpenCmdMods` | A table of modifiers for the quickfix or loclist open commands. |
| \>view | `nil\|quicker.WinViewDict` | A table of options to restore the view of the quickfix window. Can be used to set the cursor or scroll positions (see `winsaveview()` ). |

### open(opts)

`open(opts)`  
Open the quickfix or loclist window.

| Param | Type | Desc |
| --- | --- | --- |
| opts | `nil\|quicker.OpenOpts` |  |
| \>loclist | `nil\|boolean` | Toggle the loclist instead of the quickfix list |
| \>focus | `nil\|boolean` | Focus the quickfix window after toggling (default false) |
| \>height | `nil\|integer` | Height of the quickfix window when opened. Defaults to number of items in the list. |
| \>min\_height | `nil\|integer` | Minimum height of the quickfix window. Default 4. |
| \>max\_height | `nil\|integer` | Maximum height of the quickfix window. Default 16. |
| \>open\_cmd\_mods | `nil\|quicker.OpenCmdMods` | A table of modifiers for the quickfix or loclist open commands. |
| \>view | `nil\|quicker.WinViewDict` | A table of options to restore the view of the quickfix window. Can be used to set the cursor or scroll positions (see `winsaveview()` ). |

### close(opts)

`close(opts)`  
Close the quickfix or loclist window.

| Param | Type | Desc |
| --- | --- | --- |
| opts | `nil\|quicker.CloseOpts` |  |
| \>loclist | `nil\|boolean` | Close the loclist instead of the quickfix list |

## Other Plugins

In general quicker.nvim should play nice with other quickfix plugins (🟢), except if they change the format of the quickfix buffer. Quicker.nvim relies on owning the `:help quickfixtextfunc` for the other features to function, so some other plugins you may need to disable or not use parts of their functionality (🟡). Some plugins have features that completely conflict with quicker.nvim (🔴).

- 🟢 [nvim-bqf](https://github.com/kevinhwang91/nvim-bqf) - Another bundle of several improvements including a floating preview window and fzf integration.
- 🟢 [vim-qf](https://github.com/romainl/vim-qf) - Adds some useful mappings and default behaviors.
- 🟡 [trouble.nvim](https://github.com/folke/trouble.nvim) - A custom UI for displaying quickfix and many other lists. Does not conflict with quicker.nvim, but instead presents an alternative way to manage and view the quickfix.
- 🟡 [listish.nvim](https://github.com/arsham/listish.nvim) - Provides utilities for adding items to the quickfix and theming (which conflicts with quicker.nvim).
- 🔴 [quickfix-reflector.vim](https://github.com/stefandtw/quickfix-reflector.vim) - Also provides an "editable quickfix". I used this for many years and would recommend it.
- 🔴 [replacer.nvim](https://github.com/gabrielpoca/replacer.nvim) - Another "editable quickfix" plugin.