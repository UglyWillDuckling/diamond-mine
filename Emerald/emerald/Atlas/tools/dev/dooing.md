---
title: "atiladefreitas/dooing: The minimalist to-do list for Neovim"
source: https://github.com/atiladefreitas/dooing
author:
  - "[[Atlas/tools/dev/github]]"
published:
created: 2025-01-20
description: The minimalist to-do list for Neovim. Contribute to atiladefreitas/dooing development by creating an account on GitHub.
tags:
  - plugin
  - nvim
  - nvim-plugin
  - github
---
**Dooing** is a **minimalist** todo list manager for [[neovim]], designed with simplicity and efficiency in mind. It provides a clean, distraction-free interface to manage your **tasks directly within Neovim**.
Perfect for users who want to keep track of their todos without leaving their editor.

[![dooing demo](https://private-user-images.githubusercontent.com/83841300/391095032-ffb921d6-6dd8-4a01-8aaa-f2440891b22e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzczNzQ3OTUsIm5iZiI6MTczNzM3NDQ5NSwicGF0aCI6Ii84Mzg0MTMwMC8zOTEwOTUwMzItZmZiOTIxZDYtNmRkOC00YTAxLThhYWEtZjI0NDA4OTFiMjJlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIwVDEyMDEzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzZGViOGFjODZmMzJkYjY0MGRiZjUyOTRlNTFmOGZlMmE0ZTFkMGRlMWRmMzQ0Y2UyMTk5ZDg5M2EzYjVlOTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.yXgqYr8rYyCbx_ul8V4wOQgFl6BIytgRTSBrsgwElzQ)](https://private-user-images.githubusercontent.com/83841300/391095032-ffb921d6-6dd8-4a01-8aaa-f2440891b22e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzczNzQ3OTUsIm5iZiI6MTczNzM3NDQ5NSwicGF0aCI6Ii84Mzg0MTMwMC8zOTEwOTUwMzItZmZiOTIxZDYtNmRkOC00YTAxLThhYWEtZjI0NDA4OTFiMjJlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIwVDEyMDEzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzZGViOGFjODZmMzJkYjY0MGRiZjUyOTRlNTFmOGZlMmE0ZTFkMGRlMWRmMzQ0Y2UyMTk5ZDg5M2EzYjVlOTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.yXgqYr8rYyCbx_ul8V4wOQgFl6BIytgRTSBrsgwElzQ)

## 🚀 Features

- 📝 Manage todos in a clean **floating window**
- 🏷️ Categorize tasks with **#tags**
- ✅ Simple task management with clear visual feedback
- 💾 **Persistent storage** of your todos
- 🎨 Adapts to your Neovim **colorscheme**
- 🛠️ Compatible with **Lazy.nvim** for effortless installation

---
## Default Configuration

comes with sensible defaults that you can override:

```lua
{
    -- Core settings
    save_path = vim.fn.stdpath("data") .. "/dooing_todos.json",

    -- Window settings
    window = {
        width = 55,         -- Width of the floating window
        height = 20,        -- Height of the floating window
        border = 'rounded', -- Border style
        padding = {
            top = 1,
            bottom = 1,
            left = 2,
            right = 2,
        },
    },

    -- To-do formatting
    formatting = {
        pending = {
            icon = "○",
            format = { "icon", "notes_icon", "text", "due_date", "ect" },
        },
        in_progress = {
            icon = "◐",
            format = { "icon", "text", "due_date", "ect" },
        },
        done = {
            icon = "✓",
            format = { "icon", "notes_icon", "text", "due_date", "ect" },
        },
    },

    quick_keys = true,      -- Quick keys window
    
    notes = {
        icon = "📓",
    },

    scratchpad = {
        syntax_highlight = "markdown",
    },
    
    -- Keymaps
    keymaps = {
        toggle_window = "<leader>td",
        new_todo = "i",
        toggle_todo = "x",
        delete_todo = "d",
        delete_completed = "D",
        close_window = "q",
        undo_delete = "u",
        add_due_date = "H",
        remove_due_date = "r",
        toggle_help = "?",
        toggle_tags = "t",
        toggle_priority = "<Space>",
        clear_filter = "c",
        edit_todo = "e",
        edit_tag = "e",
        edit_priorities = "p",
        delete_tag = "d",
        search_todos = "/",
        add_time_estimation = "T",
        remove_time_estimation = "R",
        import_todos = "I",
        export_todos = "E",
        remove_duplicates = "<leader>D",
        open_todo_scratchpad = "<leader>p",
    },

    calendar = {
        language = "en",
        icon = "",
        keymaps = {
            previous_day = "h",
            next_day = "l",
            previous_week = "k",
            next_week = "j",
            previous_month = "H",
            next_month = "L",
            select_day = "<CR>",
            close_calendar = "q",
        },
    },

    -- Priority settings
    priorities = {
        {
            name = "important",
            weight = 4,
        },
        {
            name = "urgent",
            weight = 2,
        },
    },
    priority_groups = {
        high = {
            members = { "important", "urgent" },
            color = nil,
            hl_group = "DiagnosticError",
        },
        medium = {
            members = { "important" },
            color = nil,
            hl_group = "DiagnosticWarn",
        },
        low = {
            members = { "urgent" },
            color = nil,
            hl_group = "DiagnosticInfo",
        },
    },
    hour_score_value = 1/8,
}
```

## Commands

Dooing provides several commands for task management:

- `:Dooing` - Opens the main window
- `:Dooing add [text]` - Adds a new task
- `-p, --priorities [list]` - Comma-separated list of priorities (e.g. "important,urgent")
- `:Dooing list` - Lists all todos with their indices and metadata
- `:Dooing set [index] [field] [value]` - Modifies todo properties
- `priorities` - Set/update priorities (use "nil" to clear)
- `ect` - Set estimated completion time (e.g. "30m", "2h", "1d", "0.5w")
---
## 🔑 Keybindings

Dooing comes with intuitive keybindings:

#### **Main** Window

| Key          | Action                     |
| ------------ | -------------------------- |
| `<leader>td` | Toggle todo window         |
| `i`          | Add new todo               |
| `x`          | Toggle todo status         |
| `d`          | Delete current todo        |
| `D`          | Delete all completed todos |
| `q`          | Close window               |
| `H`          | Add due date               |
| `r`          | Remove due date            |
| `T`          | Add time estimation        |
| `R`          | Remove time estimation     |
| `?`          | Toggle help window         |
| `t`          | Toggle tags window         |
| `c`          | Clear active tag filter    |
| `e`          | Edit todo                  |
| `p`          | Edit priorities            |
| `u`          | Undo delete                |
| `/`          | Search todos               |
| `I`          | Import todos               |
| `E`          | Export todos               |
| `<leader>D`  | Remove duplicates          |
| `<Space>`    | Toggle priority            |
| `<leader>p`  | Open todo scratchpad       |

#### Tags Window

| Key    | Action        |
| ------ | ------------- |
| `e`    | Edit tag      |
| `d`    | Delete tag    |
| `<CR>` | Filter by tag |
| `q`    | Close window  |
|        |               |

#### **Calendar** Window

| Key | Action |
| --- | --- |
| `h` | Previous day |
| `l` | Next day |
| `k` | Previous week |
| `j` | Next week |
| `H` | Previous month |
| `L` | Next month |
| `<CR>` | Select date |
| `q` | Close calendar |

---

