---
author:
  - "[[asmorris]]"
created: 2025-11-10
published:
source: https://github.com/asmorris/line_notes.nvim?tab=readme-ov-file
value: 7
quality: 5
tags:
  - plugin/nvim
  - tool/note-taking
---
**Line\_Notes.nvim** is a Neovim plugin to mark specific lines in your code and add notes for future reference. It is meant as a supplement to code comments that you might want to add but don't need or want to be public, or small quick notes to yourself that are tied to a particular line, and are a quicker alternative to Obsidian or Notion or similar.

## Demo

[![lineNotes](https://private-user-images.githubusercontent.com/8585795/391408642-b361cf26-4d23-4eca-8e10-81a8fcf68954.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3Njk2MTAsIm5iZiI6MTc2Mjc2OTMxMCwicGF0aCI6Ii84NTg1Nzk1LzM5MTQwODY0Mi1iMzYxY2YyNi00ZDIzLTRlY2EtOGUxMC04MWE4ZmNmNjg5NTQuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MTExMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTExMTBUMTAwODMwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Nzg5NDg2M2M2ZTAxM2VjMGMwNWFlZmYxY2M2ZjEwNTU1NDNjYjNiOTIxYTBlNmM5ZGQzZTlmM2ZkYjk3YjY3ZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.NunK3pr95LtEKwINXlyEr5UYCR2b9_IXk_5CpcINSn8)](https://private-user-images.githubusercontent.com/8585795/391408642-b361cf26-4d23-4eca-8e10-81a8fcf68954.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3Njk2MTAsIm5iZiI6MTc2Mjc2OTMxMCwicGF0aCI6Ii84NTg1Nzk1LzM5MTQwODY0Mi1iMzYxY2YyNi00ZDIzLTRlY2EtOGUxMC04MWE4ZmNmNjg5NTQuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MTExMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTExMTBUMTAwODMwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Nzg5NDg2M2M2ZTAxM2VjMGMwNWFlZmYxY2M2ZjEwNTU1NDNjYjNiOTIxYTBlNmM5ZGQzZTlmM2ZkYjk3YjY3ZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.NunK3pr95LtEKwINXlyEr5UYCR2b9_IXk_5CpcINSn8)

## Features

- Add marks with notes to specific lines. Just press enter and you're good to go!
- List all marks and notes using Telescope.
- Navigate to marked lines directly from the list.
- Delete existing notes
- Edit existing notes, just need to close the floating window with the note.

## Installation

Using `lazy.nvim`:

```
{
    "asmorris/line_notes.nvim",
    dependencies = { "nvim-telescope/telescope.nvim" },
    config = function()
        require('line_notes').setup({
            -- Optional: Add your custom configuration here
        })
    end
}
```

## Default Configuration

The plugin comes with sensible defaults, but you can customize them to your liking. Here's the default configuration:

```
require('line_notes').setup({
    -- Customize keymaps
    keymaps = {
        add_note = "an",    -- Add a new note
        list_notes = "ln",  -- Open telescope picker with all notes
        delete_note = "dn", -- Delete note on current line
        show_note = "sn"    -- Show/edit note on current line
    },
    -- Customize note appearance
    signs = {
        note_icon = "🗒️",         -- Icon shown in the sign column
        highlight = "Comment",     -- Highlight group for the icon
        number_highlight = ""      -- Highlight group for line numbers (empty for no highlight)
    }
})
```

## Releases

No releases published

## Packages

No packages published  

## Languages

- [Lua 100.0%](https://github.com/asmorris/line_notes.nvim/search?l=lua)