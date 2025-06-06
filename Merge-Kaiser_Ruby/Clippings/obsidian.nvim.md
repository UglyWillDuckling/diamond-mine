---
created: 2025-02-21
source: https://github.com/epwalsh/obsidian.nvim
tags:
  - tool/vim
  - tool/obsidian
author:
  - "[[Pete Walsh]]"
---
A Neovim plugin for writing and navigating [Obsidian](https://obsidian.md/) vaults, written in [[Lua]].

Built for people who love the concept of Obsidian -- a simple, markdown-based notes app -- but love Neovim too much to stand typing characters into anything else.

If you're new to Obsidian I highly recommend watching [this excellent YouTube video](https://youtu.be/5ht8NYkU9wQ?si=8nbnNsRVnw0xfX2S) for a great overview.

*Keep in mind this plugin is not meant to replace Obsidian, but to complement it.* The Obsidian app is very powerful in its own way; it comes with a mobile app and has a lot of functionality that's not feasible to implement in Neovim, such as the graph explorer view. That said, this plugin stands on its own as well. You don't necessarily need to use it alongside the Obsidian app.

- [[#Table of contents|Table of contents]]
- [[#Features|Features]]
	- [[#Features#Commands|Commands]]
	- [[#Features#Demo|Demo]]
- [[#Setup|Setup]]
	- [[#Setup#System requirements|System requirements]]
	- [[#Setup#Install and configure|Install and configure]]
		- [[#Install and configure#Using [`lazy.nvim`](https://github.com/folke/lazy.nvim)|Using [`lazy.nvim`](https://github.com/folke/lazy.nvim)]]
		- [[#Install and configure#Using [`packer.nvim`](https://github.com/wbthomason/packer.nvim)|Using [`packer.nvim`](https://github.com/wbthomason/packer.nvim)]]
	- [[#Setup#Plugin dependencies|Plugin dependencies]]
	- [[#Setup#Configuration options|Configuration options]]
	- [[#Setup#Notes on configuration|Notes on configuration]]
		- [[#Notes on configuration#Workspaces|Workspaces]]
		- [[#Notes on configuration#Completion|Completion]]
		- [[#Notes on configuration#Syntax highlighting|Syntax highlighting]]
		- [[#Notes on configuration#Concealing characters|Concealing characters]]
		- [[#Notes on configuration#Note naming and location|Note naming and location]]
		- [[#Notes on configuration#`gf` passthrough|`gf` passthrough]]
	- [[#Setup#Using templates|Using templates]]
	- [[#Setup#Usage outside of a workspace or vault|Usage outside of a workspace or vault]]
- [[#Contributing|Contributing]]

## Features

▶️ **Completion:** Ultra-fast, asynchronous autocompletion for note references and tags via [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) (triggered by typing `[[` for wiki links, `[` for markdown links, or `#` for tags), powered by [`ripgrep`](https://github.com/BurntSushi/ripgrep).

[![See this screenshot](https://private-user-images.githubusercontent.com/8812459/301296514-90d5f218-06cd-4ebb-b00b-b59c2f5c3cc1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDAxNzYzODEsIm5iZiI6MTc0MDE3NjA4MSwicGF0aCI6Ii84ODEyNDU5LzMwMTI5NjUxNC05MGQ1ZjIxOC0wNmNkLTRlYmItYjAwYi1iNTljMmY1YzNjYzEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDIyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAyMjFUMjIxNDQxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YzFjNzMzYmFjZTMyMTMzOGUyNDY2ZjUwYmRkNjdiNDZjMDM1N2UwMWRlOWYyMjI3YTA0NjBhODBjOTFkZTc3NSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.yM5HnTCGHyVnr_HQqTiHt6xJIXxrDKfkUIgYDiluO8o)](https://github.com/epwalsh/obsidian.nvim/assets/8812459/90d5f218-06cd-4ebb-b00b-b59c2f5c3cc1)

🏃 **Navigation:** Navigate throughout your vault by typing `gf` on any link to another note.

📷 **Images:** Paste images into notes.

💅 **Syntax:** Additional markdown syntax highlighting, concealing, and extmarks for references, tags, and check-boxes.

[![See this screenshot](https://private-user-images.githubusercontent.com/8812459/301295230-e74f5267-21b5-49bc-a3bb-3b9db5fa6687.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDAxNzYzODEsIm5iZiI6MTc0MDE3NjA4MSwicGF0aCI6Ii84ODEyNDU5LzMwMTI5NTIzMC1lNzRmNTI2Ny0yMWI1LTQ5YmMtYTNiYi0zYjlkYjVmYTY2ODcucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDIyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAyMjFUMjIxNDQxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZWMxMDdkMjYxZjQyOTRlOGM3NjVmOWQxMTk2MDBiNzdlZTY1Y2ExZWU5ODkzYTYxZjg0NjkzMjJjOTI4MzdmOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.AEm6RpAKStC2huQduHyk300OLHxKrygrEk0TKNYXMLs)](https://github.com/epwalsh/obsidian.nvim/assets/8812459/e74f5267-21b5-49bc-a3bb-3b9db5fa6687)

### Commands

- `:ObsidianOpen [QUERY]` to open a note in the Obsidian app. This command has one optional argument: a query used to resolve the note to open by ID, path, or alias. If not given, the note corresponding to the current buffer is opened.
- `:ObsidianNew [TITLE]` to create a new note. This command has one optional argument: the title of the new note.
- `:ObsidianQuickSwitch` to quickly switch to (or open) another note in your vault, searching by its name using [ripgrep](https://github.com/BurntSushi/ripgrep) with your preferred picker (see [plugin dependencies](https://github.com/epwalsh/#plugin-dependencies) below).
- `:ObsidianFollowLink [vsplit|hsplit]` to follow a note reference under the cursor, optionally opening it in a vertical or horizontal split.
- `:ObsidianBacklinks` for getting a picker list of references to the current buffer.
- `:ObsidianTags [TAG ...]` for getting a picker list of all occurrences of the given tags.
- `:ObsidianToday [OFFSET]` to open/create a new daily note. This command also takes an optional offset in days, e.g. use `:ObsidianToday -1` to go to yesterday's note. Unlike `:ObsidianYesterday` and `:ObsidianTomorrow` this command does not differentiate between weekdays and weekends.
- `:ObsidianYesterday` to open/create the daily note for the previous working day.
- `:ObsidianTomorrow` to open/create the daily note for the next working day.
- `:ObsidianDailies [OFFSET ...]` to open a picker list of daily notes. For example, `:ObsidianDailies -2 1` to list daily notes from 2 days ago until tomorrow.
- `:ObsidianTemplate [NAME]` to insert a template from the templates folder, selecting from a list using your preferred picker. See ["using templates"](https://github.com/epwalsh/#using-templates) for more information.
- `:ObsidianSearch [QUERY]` to search for (or create) notes in your vault using `ripgrep` with your preferred picker.
- `:ObsidianLink [QUERY]` to link an inline visual selection of text to a note. This command has one optional argument: a query that will be used to resolve the note by ID, path, or alias. If not given, the selected text will be used as the query.
- `:ObsidianLinkNew [TITLE]` to create a new note and link it to an inline visual selection of text. This command has one optional argument: the title of the new note. If not given, the selected text will be used as the title.
- `:ObsidianLinks` to collect all links within the current buffer into a picker window.
- `:ObsidianExtractNote [TITLE]` to extract the visually selected text into a new note and link to it.
- `:ObsidianWorkspace [NAME]` to switch to another workspace.
- `:ObsidianPasteImg [IMGNAME]` to paste an image from the clipboard into the note at the cursor position by saving it to the vault and adding a markdown image link. You can configure the default folder to save images to with the `attachments.img_folder` option.
- `:ObsidianRename [NEWNAME] [--dry-run]` to rename the note of the current buffer or reference under the cursor, updating all backlinks across the vault. Since this command is still relatively new and could potentially write a lot of changes to your vault, I highly recommend committing the current state of your vault (if you're using version control) before running it, or doing a dry-run first by appending "--dry-run" to the command, e.g. `:ObsidianRename new-id --dry-run`.
- `:ObsidianToggleCheckbox` to cycle through checkbox options.
- `:ObsidianNewFromTemplate [TITLE]` to create a new note from a template in the templates folder. Selecting from a list using your preferred picker. This command has one optional argument: the title of the new note.
- `:ObsidianTOC` to load the table of contents of the current note into a picker list.

### Demo

[![2024-01-31 14 22 52](https://private-user-images.githubusercontent.com/8812459/301327007-2986e1d2-13e8-40e2-9c9e-75691a3b662e.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDAxNzYzODEsIm5iZiI6MTc0MDE3NjA4MSwicGF0aCI6Ii84ODEyNDU5LzMwMTMyNzAwNy0yOTg2ZTFkMi0xM2U4LTQwZTItOWM5ZS03NTY5MWEzYjY2MmUuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDIyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAyMjFUMjIxNDQxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDEzNGFkMWM4ZmNhNmFjMDU5MmViZjM3NWZjOTIxMzg3YTYxMzBjNzYwNzcyNTNlNGEwMTZhNzRhMTVkMmFkNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.R3CJuM6_QFQy67bmnKAJydw5Eqwo6EM5Ok6UN1jPxyg)](https://github.com/epwalsh/obsidian.nvim/assets/8812459/2986e1d2-13e8-40e2-9c9e-75691a3b662e)

## Setup

### System requirements

- NeoVim >= 0.8.0 (this plugin uses `vim.fs` which was only added in 0.8).
- If you want completion and search features (recommended) you'll need [ripgrep](https://github.com/BurntSushi/ripgrep) to be installed and on your `$PATH`. See [ripgrep#installation](https://github.com/BurntSushi/ripgrep) for install options.

Specific operating systems also require additional dependencies in order to use all of obsidian.nvim's functionality:

- **Windows WSL** users need [`wsl-open`](https://gitlab.com/4U6U57/wsl-open) for the `:ObsidianOpen` command.
- **MacOS** users need [`pngpaste`](https://github.com/jcsalterego/pngpaste) (`brew install pngpaste`) for the `:ObsidianPasteImg` command.
- **Linux** users need xclip (X11) or wl-clipboard (Wayland) for the `:ObsidianPasteImg` command.

Search functionality (e.g. via the `:ObsidianSearch` and `:ObsidianQuickSwitch` commands) also requires a picker such [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) (see [plugin dependencies](https://github.com/epwalsh/#plugin-dependencies) below).

### Install and configure

To configure obsidian.nvim you just need to call `require("obsidian").setup({ ... })` with the desired options. Here are some examples using different plugin managers. The full set of [plugin dependencies](https://github.com/epwalsh/#plugin-dependencies) and [configuration options](https://github.com/epwalsh/#configuration-options) are listed below.

> ⚠️ WARNING: if you install from the latest release (recommended for stability) instead of `main`, be aware that the README on `main` may reference features that haven't been released yet. For that reason I recommend viewing the README on the tag for the [latest release](https://github.com/epwalsh/obsidian.nvim/releases) instead of `main`.

#### Using [`lazy.nvim`](https://github.com/folke/lazy.nvim)

```
return {
  "epwalsh/obsidian.nvim",
  version = "*",  -- recommended, use latest release instead of latest commit
  lazy = true,
  ft = "markdown",
  -- Replace the above line with this if you only want to load obsidian.nvim for markdown files in your vault:
  -- event = {
  --   -- If you want to use the home shortcut '~' here you need to call 'vim.fn.expand'.
  --   -- E.g. "BufReadPre " .. vim.fn.expand "~" .. "/my-vault/*.md"
  --   -- refer to \`:h file-pattern\` for more examples
  --   "BufReadPre path/to/my-vault/*.md",
  --   "BufNewFile path/to/my-vault/*.md",
  -- },
  dependencies = {
    -- Required.
    "nvim-lua/plenary.nvim",

    -- see below for full list of optional dependencies 👇
  },
  opts = {
    workspaces = {
      {
        name = "personal",
        path = "~/vaults/personal",
      },
      {
        name = "work",
        path = "~/vaults/work",
      },
    },

    -- see below for full list of options 👇
  },
}
```

#### Using [`packer.nvim`](https://github.com/wbthomason/packer.nvim)

```
use({
  "epwalsh/obsidian.nvim",
  tag = "*",  -- recommended, use latest release instead of latest commit
  requires = {
    -- Required.
    "nvim-lua/plenary.nvim",

    -- see below for full list of optional dependencies 👇
  },
  config = function()
    require("obsidian").setup({
      workspaces = {
        {
          name = "personal",
          path = "~/vaults/personal",
        },
        {
          name = "work",
          path = "~/vaults/work",
        },
      },

      -- see below for full list of options 👇
    })
  end,
})
```

### Plugin dependencies

The only **required** plugin dependency is [plenary.nvim](https://github.com/nvim-lua/plenary.nvim), but there are a number of optional dependencies that enhance the obsidian.nvim experience.

**Completion:**

- **\[recommended\]** [hrsh7th/nvim-cmp](https://github.com/hrsh7th/nvim-cmp): for completion of note references.

**Pickers:**

- **\[recommended\]** [nvim-telescope/telescope.nvim](https://github.com/nvim-telescope/telescope.nvim): for search and quick-switch functionality.
- [Mini.Pick](https://github.com/echasnovski/mini.pick) from the mini.nvim library: an alternative to telescope for search and quick-switch functionality.
- [ibhagwan/fzf-lua](https://github.com/ibhagwan/fzf-lua): another alternative to telescope for search and quick-switch functionality.

**Syntax highlighting:**

- **\[recommended\]** [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter): for base markdown syntax highlighting. See [syntax highlighting](https://github.com/epwalsh/#syntax-highlighting) for more details.
- [preservim/vim-markdown](https://github.com/preservim/vim-markdown): an alternative to nvim-treesitter for syntax highlighting (see [syntax highlighting](https://github.com/epwalsh/#syntax-highlighting) for more details), plus other cool features.

**Miscellaneous:**

- 🆕 [pomo.nvim](https://github.com/epwalsh/pomo.nvim): for running lightweight [pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) timers.

If you choose to use any of these you should include them in the "dependencies" or "requires" field of the obsidian.nvim plugin spec for your package manager.

### Configuration options

This is a complete list of all of the options that can be passed to `require("obsidian").setup()`. The settings below are *not necessarily the defaults, but represent reasonable default settings*. Please read each option carefully and customize it to your needs:

```
{
  -- A list of workspace names, paths, and configuration overrides.
  -- If you use the Obsidian app, the 'path' of a workspace should generally be
  -- your vault root (where the \`.obsidian\` folder is located).
  -- When obsidian.nvim is loaded by your plugin manager, it will automatically set
  -- the workspace to the first workspace in the list whose \`path\` is a parent of the
  -- current markdown file being edited.
  workspaces = {
    {
      name = "personal",
      path = "~/vaults/personal",
    },
    {
      name = "work",
      path = "~/vaults/work",
      -- Optional, override certain settings.
      overrides = {
        notes_subdir = "notes",
      },
    },
  },

  -- Alternatively - and for backwards compatibility - you can set 'dir' to a single path instead of
  -- 'workspaces'. For example:
  -- dir = "~/vaults/work",

  -- Optional, if you keep notes in a specific subdirectory of your vault.
  notes_subdir = "notes",

  -- Optional, set the log level for obsidian.nvim. This is an integer corresponding to one of the log
  -- levels defined by "vim.log.levels.*".
  log_level = vim.log.levels.INFO,

  daily_notes = {
    -- Optional, if you keep daily notes in a separate directory.
    folder = "notes/dailies",
    -- Optional, if you want to change the date format for the ID of daily notes.
    date_format = "%Y-%m-%d",
    -- Optional, if you want to change the date format of the default alias of daily notes.
    alias_format = "%B %-d, %Y",
    -- Optional, default tags to add to each new daily note created.
    default_tags = { "daily-notes" },
    -- Optional, if you want to automatically insert a template from your template directory like 'daily.md'
    template = nil
  },

  -- Optional, completion of wiki links, local markdown links, and tags using nvim-cmp.
  completion = {
    -- Set to false to disable completion.
    nvim_cmp = true,
    -- Trigger completion at 2 chars.
    min_chars = 2,
  },

  -- Optional, configure key mappings. These are the defaults. If you don't want to set any keymappings this
  -- way then set 'mappings = {}'.
  mappings = {
    -- Overrides the 'gf' mapping to work on markdown/wiki links within your vault.
    ["gf"] = {
      action = function()
        return require("obsidian").util.gf_passthrough()
      end,
      opts = { noremap = false, expr = true, buffer = true },
    },
    -- Toggle check-boxes.
    ["<leader>ch"] = {
      action = function()
        return require("obsidian").util.toggle_checkbox()
      end,
      opts = { buffer = true },
    },
    -- Smart action depending on context, either follow link or toggle checkbox.
    ["<cr>"] = {
      action = function()
        return require("obsidian").util.smart_action()
      end,
      opts = { buffer = true, expr = true },
    }
  },

  -- Where to put new notes. Valid options are
  --  * "current_dir" - put new notes in same directory as the current buffer.
  --  * "notes_subdir" - put new notes in the default notes subdirectory.
  new_notes_location = "notes_subdir",

  -- Optional, customize how note IDs are generated given an optional title.
  ---@param title string|?
  ---@return string
  note_id_func = function(title)
    -- Create note IDs in a Zettelkasten format with a timestamp and a suffix.
    -- In this case a note with the title 'My new note' will be given an ID that looks
    -- like '1657296016-my-new-note', and therefore the file name '1657296016-my-new-note.md'
    local suffix = ""
    if title ~= nil then
      -- If title is given, transform it into valid file name.
      suffix = title:gsub(" ", "-"):gsub("[^A-Za-z0-9-]", ""):lower()
    else
      -- If title is nil, just add 4 random uppercase letters to the suffix.
      for _ = 1, 4 do
        suffix = suffix .. string.char(math.random(65, 90))
      end
    end
    return tostring(os.time()) .. "-" .. suffix
  end,

  -- Optional, customize how note file names are generated given the ID, target directory, and title.
  ---@param spec { id: string, dir: obsidian.Path, title: string|? }
  ---@return string|obsidian.Path The full path to the new note.
  note_path_func = function(spec)
    -- This is equivalent to the default behavior.
    local path = spec.dir / tostring(spec.id)
    return path:with_suffix(".md")
  end,

  -- Optional, customize how wiki links are formatted. You can set this to one of:
  --  * "use_alias_only", e.g. '[[Foo Bar]]'
  --  * "prepend_note_id", e.g. '[[foo-bar|Foo Bar]]'
  --  * "prepend_note_path", e.g. '[[foo-bar.md|Foo Bar]]'
  --  * "use_path_only", e.g. '[[foo-bar.md]]'
  -- Or you can set it to a function that takes a table of options and returns a string, like this:
  wiki_link_func = function(opts)
    return require("obsidian.util").wiki_link_id_prefix(opts)
  end,

  -- Optional, customize how markdown links are formatted.
  markdown_link_func = function(opts)
    return require("obsidian.util").markdown_link(opts)
  end,

  -- Either 'wiki' or 'markdown'.
  preferred_link_style = "wiki",

  -- Optional, boolean or a function that takes a filename and returns a boolean.
  -- \`true\` indicates that you don't want obsidian.nvim to manage frontmatter.
  disable_frontmatter = false,

  -- Optional, alternatively you can customize the frontmatter data.
  ---@return table
  note_frontmatter_func = function(note)
    -- Add the title of the note as an alias.
    if note.title then
      note:add_alias(note.title)
    end

    local out = { id = note.id, aliases = note.aliases, tags = note.tags }

    -- \`note.metadata\` contains any manually added fields in the frontmatter.
    -- So here we just make sure those fields are kept in the frontmatter.
    if note.metadata ~= nil and not vim.tbl_isempty(note.metadata) then
      for k, v in pairs(note.metadata) do
        out[k] = v
      end
    end

    return out
  end,

  -- Optional, for templates (see below).
  templates = {
    folder = "templates",
    date_format = "%Y-%m-%d",
    time_format = "%H:%M",
    -- A map for custom variables, the key should be the variable and the value a function
    substitutions = {},
  },

  -- Optional, by default when you use \`:ObsidianFollowLink\` on a link to an external
  -- URL it will be ignored but you can customize this behavior here.
  ---@param url string
  follow_url_func = function(url)
    -- Open the URL in the default web browser.
    vim.fn.jobstart({"open", url})  -- Mac OS
    -- vim.fn.jobstart({"xdg-open", url})  -- linux
    -- vim.cmd(':silent exec "!start ' .. url .. '"') -- Windows
    -- vim.ui.open(url) -- need Neovim 0.10.0+
  end,

  -- Optional, by default when you use \`:ObsidianFollowLink\` on a link to an image
  -- file it will be ignored but you can customize this behavior here.
  ---@param img string
  follow_img_func = function(img)
    vim.fn.jobstart { "qlmanage", "-p", img }  -- Mac OS quick look preview
    -- vim.fn.jobstart({"xdg-open", url})  -- linux
    -- vim.cmd(':silent exec "!start ' .. url .. '"') -- Windows
  end,

  -- Optional, set to true if you use the Obsidian Advanced URI plugin.
  -- https://github.com/Vinzent03/obsidian-advanced-uri
  use_advanced_uri = false,

  -- Optional, set to true to force ':ObsidianOpen' to bring the app to the foreground.
  open_app_foreground = false,

  picker = {
    -- Set your preferred picker. Can be one of 'telescope.nvim', 'fzf-lua', or 'mini.pick'.
    name = "telescope.nvim",
    -- Optional, configure key mappings for the picker. These are the defaults.
    -- Not all pickers support all mappings.
    note_mappings = {
      -- Create a new note from your query.
      new = "<C-x>",
      -- Insert a link to the selected note.
      insert_link = "<C-l>",
    },
    tag_mappings = {
      -- Add tag(s) to current note.
      tag_note = "<C-x>",
      -- Insert a tag at the current location.
      insert_tag = "<C-l>",
    },
  },

  -- Optional, sort search results by "path", "modified", "accessed", or "created".
  -- The recommend value is "modified" and \`true\` for \`sort_reversed\`, which means, for example,
  -- that \`:ObsidianQuickSwitch\` will show the notes sorted by latest modified time
  sort_by = "modified",
  sort_reversed = true,

  -- Set the maximum number of lines to read from notes on disk when performing certain searches.
  search_max_lines = 1000,

  -- Optional, determines how certain commands open notes. The valid options are:
  -- 1. "current" (the default) - to always open in the current window
  -- 2. "vsplit" - to open in a vertical split if there's not already a vertical split
  -- 3. "hsplit" - to open in a horizontal split if there's not already a horizontal split
  open_notes_in = "current",

  -- Optional, define your own callbacks to further customize behavior.
  callbacks = {
    -- Runs at the end of \`require("obsidian").setup()\`.
    ---@param client obsidian.Client
    post_setup = function(client) end,

    -- Runs anytime you enter the buffer for a note.
    ---@param client obsidian.Client
    ---@param note obsidian.Note
    enter_note = function(client, note) end,

    -- Runs anytime you leave the buffer for a note.
    ---@param client obsidian.Client
    ---@param note obsidian.Note
    leave_note = function(client, note) end,

    -- Runs right before writing the buffer for a note.
    ---@param client obsidian.Client
    ---@param note obsidian.Note
    pre_write_note = function(client, note) end,

    -- Runs anytime the workspace is set/changed.
    ---@param client obsidian.Client
    ---@param workspace obsidian.Workspace
    post_set_workspace = function(client, workspace) end,
  },

  -- Optional, configure additional syntax highlighting / extmarks.
  -- This requires you have \`conceallevel\` set to 1 or 2. See \`:help conceallevel\` for more details.
  ui = {
    enable = true,  -- set to false to disable all additional syntax features
    update_debounce = 200,  -- update delay after a text change (in milliseconds)
    max_file_length = 5000,  -- disable UI features for files with more than this many lines
    -- Define how various check-boxes are displayed
    checkboxes = {
      -- NOTE: the 'char' value has to be a single character, and the highlight groups are defined below.
      [" "] = { char = "󰄱", hl_group = "ObsidianTodo" },
      ["x"] = { char = "", hl_group = "ObsidianDone" },
      [">"] = { char = "", hl_group = "ObsidianRightArrow" },
      ["~"] = { char = "󰰱", hl_group = "ObsidianTilde" },
      ["!"] = { char = "", hl_group = "ObsidianImportant" },
      -- Replace the above with this if you don't have a patched font:
      -- [" "] = { char = "☐", hl_group = "ObsidianTodo" },
      -- ["x"] = { char = "✔", hl_group = "ObsidianDone" },

      -- You can also add more custom ones...
    },
    -- Use bullet marks for non-checkbox lists.
    bullets = { char = "•", hl_group = "ObsidianBullet" },
    external_link_icon = { char = "", hl_group = "ObsidianExtLinkIcon" },
    -- Replace the above with this if you don't have a patched font:
    -- external_link_icon = { char = "", hl_group = "ObsidianExtLinkIcon" },
    reference_text = { hl_group = "ObsidianRefText" },
    highlight_text = { hl_group = "ObsidianHighlightText" },
    tags = { hl_group = "ObsidianTag" },
    block_ids = { hl_group = "ObsidianBlockID" },
    hl_groups = {
      -- The options are passed directly to \`vim.api.nvim_set_hl()\`. See \`:help nvim_set_hl\`.
      ObsidianTodo = { bold = true, fg = "#f78c6c" },
      ObsidianDone = { bold = true, fg = "#89ddff" },
      ObsidianRightArrow = { bold = true, fg = "#f78c6c" },
      ObsidianTilde = { bold = true, fg = "#ff5370" },
      ObsidianImportant = { bold = true, fg = "#d73128" },
      ObsidianBullet = { bold = true, fg = "#89ddff" },
      ObsidianRefText = { underline = true, fg = "#c792ea" },
      ObsidianExtLinkIcon = { fg = "#c792ea" },
      ObsidianTag = { italic = true, fg = "#89ddff" },
      ObsidianBlockID = { italic = true, fg = "#89ddff" },
      ObsidianHighlightText = { bg = "#75662e" },
    },
  },

  -- Specify how to handle attachments.
  attachments = {
    -- The default folder to place images in via \`:ObsidianPasteImg\`.
    -- If this is a relative path it will be interpreted as relative to the vault root.
    -- You can always override this per image by passing a full path to the command instead of just a filename.
    img_folder = "assets/imgs",  -- This is the default

    -- Optional, customize the default name or prefix when pasting images via \`:ObsidianPasteImg\`.
    ---@return string
    img_name_func = function()
      -- Prefix image names with timestamp.
      return string.format("%s-", os.time())
    end,

    -- A function that determines the text to insert in the note when pasting an image.
    -- It takes two arguments, the \`obsidian.Client\` and an \`obsidian.Path\` to the image file.
    -- This is the default implementation.
    ---@param client obsidian.Client
    ---@param path obsidian.Path the absolute path to the image file
    ---@return string
    img_text_func = function(client, path)
      path = client:vault_relative_path(path) or path
      return string.format("![%s](%s)", path.name, path)
    end,
  },
}
```

### Notes on configuration

#### Workspaces

For most Obsidian users, each workspace you configure in your obsidian.nvim config should correspond to a unique Obsidian vault, in which case the `path` of each workspace should be set to the corresponding vault root path.

For example, suppose you have an Obsidian vault at `~/vaults/personal`, then the `workspaces` field in your config would look like this:

```
config = {
  workspaces = {
    {
      name = "personal",
      path = "~/vaults/personal",
    },
  }
}
```

However obsidian.nvim's concept of workspaces is a little more general than that of vaults, since it's also valid to configure a workspace that doesn't correspond to a vault, or to configure multiple workspaces for a single vault. The latter case can be useful if you want to segment a single vault into multiple directories with different settings applied to each directory. For example:

```
config = {
  workspaces = {
    {
      name = "project-1",
      path = "~/vaults/personal/project-1",
      -- \`strict=true\` here tells obsidian to use the \`path\` as the workspace/vault root,
      -- even though the actual Obsidian vault root may be \`~/vaults/personal/\`.
      strict = true,
      overrides = {
        -- ...
      },
    },
    {
      name = "project-2",
      path = "~/vaults/personal/project-2",
      strict = true,
      overrides = {
        -- ...
      },
    },
  }
}
```

obsidian.nvim also supports "dynamic" workspaces. These are simply workspaces where the `path` is set to a Lua function (that returns a path) instead of a hard-coded path. This can be useful in several scenarios, such as when you want a workspace whose `path` is always set to the parent directory of the current buffer:

```
config = {
  workspaces = {
    {
      name = "buf-parent",
      path = function()
        return assert(vim.fs.dirname(vim.api.nvim_buf_get_name(0)))
      end,
    },
  }
}
```

Dynamic workspaces are also useful when you want to use a subset of this plugin's functionality on markdown files outside of your "fixed" vaults. See [using obsidian.nvim outside of a workspace / Obsidian vault](https://github.com/epwalsh/#usage-outside-of-a-workspace-or-vault).

#### Completion

obsidian.nvim will set itself up as an nvim-cmp source automatically when you enter a markdown buffer within your vault directory, you do **not** need to specify this plugin as a cmp source manually.

Note that in order to trigger completion for tags *within YAML frontmatter* you still need to type the "#" at the start of the tag. obsidian.nvim will remove the "#" when you hit enter on the tag completion item.

#### Syntax highlighting

If you're using [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter/blob/master/README.md) you're configuration should include both "markdown" and "markdown\_inline" sources:

```
require("nvim-treesitter.configs").setup({
  ensure_installed = { "markdown", "markdown_inline", ... },
  highlight = {
    enable = true,
  },
})
```

If you use `vim-markdown` you'll probably want to disable its frontmatter syntax highlighting (`vim.g.vim_markdown_frontmatter = 1`) which I've found doesn't work very well.

#### Concealing characters

If you wish to use the formatting concealment features, you will need to have `conceallevel` set to a value that allows it (either `1` or `2`), for example: `set conceallevel=1` in viml or `vim.opt.conceallevel = 1` in a lua config.

#### Note naming and location

The `notes_subdir` and `note_id_func` options are not mutually exclusive. You can use them both. For example, using a combination of both of the above settings, a new note called "My new note" will assigned a path like `notes/1657296016-my-new-note.md`.

#### `gf` passthrough

If you want the `gf` passthrough functionality but you've already overridden the `gf` keybinding, just change your `gf` mapping definition to something like this:

```
vim.keymap.set("n", "gf", function()
  if require("obsidian").util.cursor_on_markdown_link() then
    return "<cmd>ObsidianFollowLink<CR>"
  else
    return "gf"
  end
end, { noremap = false, expr = true })
```

Then make sure to comment out the `gf` keybinding in your obsidian.nvim config:

```
mappings = {
  -- ["gf"] = ...
},
```

Or alternatively you could map obsidian.nvim's follow functionality to a different key:

```
mappings = {
  ["fo"] = {
    action = function()
      return require("obsidian").util.gf_passthrough()
    end,
    opts = { noremap = false, expr = true, buffer = true },
  },
},
```

### Using templates

To insert a template in the current note, run the command `:ObsidianTemplate`. This will open a list of available templates in your templates folder with your preferred picker. Select a template and hit `<CR>` to insert. To create a new note from a template, run the command `:ObsidianNewFromTemplate`. This will prompt you for an optional path for the new note and will open a list of available templates in your templates folder with your preferred picker. Select a template and hit `<CR>` to create the new note with the selected template. Substitutions for `{{id}}`, `{{title}}`, `{{path}}`, `{{date}}`, and `{{time}}` are supported out-of-the-box. For example, with the following configuration

```
{
  -- other fields ...

  templates = {
      folder = "my-templates-folder",
      date_format = "%Y-%m-%d-%a",
      time_format = "%H:%M",
  },
}
```

and the file `~/my-vault/my-templates-folder/note template.md`:

```
# {{title}}

Date created: {{date}}
```

creating the note `Configuring Neovim.md` and executing `:ObsidianTemplate` will insert

```
# Configuring Neovim

Date created: 2023-03-01-Wed
```

above the cursor position.

You can also define custom template substitutions with the configuration field `templates.substitutions`. For example, to automatically substitute the template variable `{{yesterday}}` when inserting a template, you could add this to your config:

```
{
-- other fields ...
templates = {
  substitutions = {
    yesterday = function()
      return os.date("%Y-%m-%d", os.time() - 86400)
    end
  }
}
```

### Usage outside of a workspace or vault

It's possible to configure obsidian.nvim to work on individual markdown files outside of a regular workspace / Obsidian vault by configuring a "dynamic" workspace. To do so you just need to add a special workspace with a function for the `path` field (instead of a string), which should return a *parent* directory of the current buffer. This tells obsidian.nvim to use that directory as the workspace `path` and `root` (vault root) when the buffer is not located inside another fixed workspace.

For example, to extend the configuration above this way:

```
{
  workspaces = {
     {
       name = "personal",
       path = "~/vaults/personal",
     },
     ...
+    {
+      name = "no-vault",
+      path = function()
+        -- alternatively use the CWD:
+        -- return assert(vim.fn.getcwd())
+        return assert(vim.fs.dirname(vim.api.nvim_buf_get_name(0)))
+      end,
+      overrides = {
+        notes_subdir = vim.NIL,  -- have to use 'vim.NIL' instead of 'nil'
+        new_notes_location = "current_dir",
+        templates = {
+          folder = vim.NIL,
+        },
+        disable_frontmatter = true,
+      },
+    },
+  },
   ...
}
```

With this configuration, anytime you enter a markdown buffer outside of "~/vaults/personal" (or whatever your configured fixed vaults are), obsidian.nvim will switch to the dynamic workspace with the path / root set to the parent directory of the buffer.

Please note that in order to avoid unexpected behavior (like a new directory being created for `notes_subdir`) it's important to carefully set the workspace `overrides` options. And keep in mind that to reset a configuration option to `nil` you'll have to use `vim.NIL` there instead of the builtin Lua `nil` due to the way Lua tables work.

## Contributing

Please read the [CONTRIBUTING](https://github.com/epwalsh/obsidian.nvim/blob/main/.github/CONTRIBUTING.md) guide before submitting a pull request.

And if you're feeling especially generous I always appreciate some coffee funds! ❤️

[![[~/×/cac754517ef599538fa8c66c5a517fb5_MD5.svg]]](https://www.buymeacoffee.com/epwalsh)