---
author:
  - "[[Atlas/tools/dev/github]]"
created: 2025-04-17
published:
source: https://github.com/mrjones2014/smart-splits.nvim
tags:
  - plugins/nvim
---
🧠 Smart, seamless, directional navigation and resizing of Neovim + terminal multiplexer splits. Supports tmux, Wezterm, and Kitty. Think about splits in terms of "up/down/left/right".

<table><thead><tr><th colspan="2"><span>Name</span></th><th colspan="1"><span>Name</span></th><th><p><span>Last commit message</span></p></th><th colspan="1"><p><span>Last commit date</span></p></th></tr></thead><tbody><tr><td colspan="3"></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/d3a7402b00f115a551f640e13d94bbe57c9ac38f">chore: Use <code>selene</code> for linting in CI</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/6813e3fe18eefe55d54989171a1ed0320f93f2a8">feat(mux): Faster tmux integration/mux initialization refactor</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/a0654fdae190cdead6d9578aec2f5f5f2a22a115">chore: generated vimdoc</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/16085f84ba4c8d7676149bd0a6acd4d141e16fa4">fix: 'encode_key_mapping' is not defined</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/d8ba8026e57c922347ef304ca63974222d4b9c8b">chore(mux): Update docs</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/f31b05e36e4e7c8a9615be37dd588cc53d70c28b">feat(mux): wezterm supports log_level config</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/0cf7149b3be7da8d5a501344630240638afdd440">chore: Add.envrc to use flake.nix</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/0cf7149b3be7da8d5a501344630240638afdd440">chore: Add.envrc to use flake.nix</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/0b091e52491f323236afa29c12ac352315e6690c">Create LICENSE</a></p></td><td></td></tr><tr><td colspan="2"></td><td colspan="1"></td><td><p><a href="https://github.com/mrjones2014/smart-splits.nvim/commit/181c77becac84cbb17a6eb037ef6a25e80dfdecb">chore: Install stylua and luacheck in flake.nix and setup tmux alias</a></p></td><td></td></tr><tr><td colspan="3"></td></tr></tbody></table>

## 🧠 smart-splits.nvim

🧠 Smarter and more intuitive split pane management that uses a mental model of left/right/up/down instead of wider/narrower/taller/shorter for resizing. Supports seamless navigation between Neovim and terminal multiplexer split panes. See [Multiplexer Integrations](https://github.com/mrjones2014/#multiplexer-integrations).

demo.mp4<video src="https://github.com/user-attachments/assets/e516399d-0c49-4c3d-b748-3ee0e4262898" controls="controls"></video>

**Table of Contents**

- [Install](https://github.com/mrjones2014/#install)
- [Configuration](https://github.com/mrjones2014/#configuration)
	- [Hooks](https://github.com/mrjones2014/#hooks)
		- [Examples](https://github.com/mrjones2014/#examples)
- [Usage](https://github.com/mrjones2014/#usage)
	- [Key Mappings](https://github.com/mrjones2014/#key-mappings)
	- [Lua API](https://github.com/mrjones2014/#lua-api)
	- [Multiplexer Integrations](https://github.com/mrjones2014/#multiplexer-integrations)
		- [Tmux](https://github.com/mrjones2014/#tmux)
		- [Zellij](https://github.com/mrjones2014/#zellij)
			- [Troubleshooting](https://github.com/mrjones2014/#troubleshooting)
		- [Wezterm](https://github.com/mrjones2014/#wezterm)
		- [Kitty](https://github.com/mrjones2014/#kitty)
			- [Credits](https://github.com/mrjones2014/#credits)
	- [Multiplexer Lua API](https://github.com/mrjones2014/#multiplexer-lua-api)

## Install

`smart-splits.nvim` now supports semantic versioning via git tags. See [Releases](https://github.com/mrjones2014/smart-splits.nvim/releases) for a full list of versions and their changelogs, starting from 1.0.0.

With Packer.nvim:

```
use('mrjones2014/smart-splits.nvim')
-- or use a specific version
use({ 'mrjones2014/smart-splits.nvim', tag = 'v1.0.0' })
-- to use Kitty multiplexer support, run the post install hook
use({ 'mrjones2014/smart-splits.nvim', run = './kitty/install-kittens.bash' })
```

With Lazy.nvim:

```
{ 'mrjones2014/smart-splits.nvim' }
-- or use a specific version, or a range of versions using lazy.nvim's version API
{ 'mrjones2014/smart-splits.nvim', version = '>=1.0.0' }
-- to use Kitty multiplexer support, run the post install hook
{ 'mrjones2014/smart-splits.nvim', build = './kitty/install-kittens.bash' }
```

## Configuration

You can set ignored `buftype` s or `filetype` s which will be ignored when figuring out if your cursor is currently at an edge split for resizing. This is useful in order to ignore "sidebar" type buffers while resizing, such as [nvim-tree.lua](https://github.com/kyazdani42/nvim-tree.lua) which tries to maintain its own width unless manually resized. Note that nothing is ignored when moving between splits, only when resizing.

Defaults are shown below:

```
require('smart-splits').setup({
  -- Ignored buffer types (only while resizing)
  ignored_buftypes = {
    'nofile',
    'quickfix',
    'prompt',
  },
  -- Ignored filetypes (only while resizing)
  ignored_filetypes = { 'NvimTree' },
  -- the default number of lines/columns to resize by at a time
  default_amount = 3,
  -- Desired behavior when your cursor is at an edge and you
  -- are moving towards that same edge:
  -- 'wrap' => Wrap to opposite side
  -- 'split' => Create a new split in the desired direction
  -- 'stop' => Do nothing
  -- function => You handle the behavior yourself
  -- NOTE: If using a function, the function will be called with
  -- a context object with the following fields:
  -- {
  --    mux = {
  --      type:'tmux'|'wezterm'|'kitty'|'zellij'
  --      current_pane_id():number,
  --      is_in_session(): boolean
  --      current_pane_is_zoomed():boolean,
  --      -- following methods return a boolean to indicate success or failure
  --      current_pane_at_edge(direction:'left'|'right'|'up'|'down'):boolean
  --      next_pane(direction:'left'|'right'|'up'|'down'):boolean
  --      resize_pane(direction:'left'|'right'|'up'|'down'):boolean
  --      split_pane(direction:'left'|'right'|'up'|'down',size:number|nil):boolean
  --    },
  --    direction = 'left'|'right'|'up'|'down',
  --    split(), -- utility function to split current Neovim pane in the current direction
  --    wrap(), -- utility function to wrap to opposite Neovim pane
  -- }
  -- NOTE: \`at_edge = 'wrap'\` is not supported on Kitty terminal
  -- multiplexer, as there is no way to determine layout via the CLI
  at_edge = 'wrap',
  -- Desired behavior when the current window is floating:
  -- 'previous' => Focus previous Vim window and perform action
  -- 'mux' => Always forward action to multiplexer
  float_win_behavior = 'previous',
  -- when moving cursor between splits left or right,
  -- place the cursor on the same row of the *screen*
  -- regardless of line numbers. False by default.
  -- Can be overridden via function parameter, see Usage.
  move_cursor_same_row = false,
  -- whether the cursor should follow the buffer when swapping
  -- buffers by default; it can also be controlled by passing
  -- \`{ move_cursor = true }\` or \`{ move_cursor = false }\`
  -- when calling the Lua function.
  cursor_follows_swapped_bufs = false,
  -- resize mode options
  resize_mode = {
    -- key to exit persistent resize mode
    quit_key = '<ESC>',
    -- keys to use for moving in resize mode
    -- in order of left, down, up' right
    resize_keys = { 'h', 'j', 'k', 'l' },
    -- set to true to silence the notifications
    -- when entering/exiting persistent resize mode
    silent = false,
    -- must be functions, they will be executed when
    -- entering or exiting the resize mode
    hooks = {
      on_enter = nil,
      on_leave = nil,
    },
  },
  -- ignore these autocmd events (via :h eventignore) while processing
  -- smart-splits.nvim computations, which involve visiting different
  -- buffers and windows. These events will be ignored during processing,
  -- and un-ignored on completed. This only applies to resize events,
  -- not cursor movement events.
  ignored_events = {
    'BufEnter',
    'WinEnter',
  },
  -- enable or disable a multiplexer integration;
  -- automatically determined, unless explicitly disabled or set,
  -- by checking the $TERM_PROGRAM environment variable,
  -- and the $KITTY_LISTEN_ON environment variable for Kitty.
  -- You can also set this value by setting \`vim.g.smart_splits_multiplexer_integration\`
  -- before the plugin is loaded (e.g. for lazy environments).
  multiplexer_integration = nil,
  -- disable multiplexer navigation if current multiplexer pane is zoomed
  -- this functionality is only supported on tmux and Wezterm due to kitty
  -- not having a way to check if a pane is zoomed
  disable_multiplexer_nav_when_zoomed = true,
  -- Supply a Kitty remote control password if needed,
  -- or you can also set vim.g.smart_splits_kitty_password
  -- see https://sw.kovidgoyal.net/kitty/conf/#opt-kitty.remote_control_password
  kitty_password = nil,
  -- default logging level, one of: 'trace'|'debug'|'info'|'warn'|'error'|'fatal'
  log_level = 'info',
})
```

### Hooks

The hook table allows you to define callbacks for the `on_enter` and `on_leave` events of the resize mode.

##### Examples

Integration with [bufresize.nvim](https://github.com/kwkarlwang/bufresize.nvim):

Custom messages when using resize mode:

```
require('smart-splits').setup({
  resize_mode = {
    silent = true,
    hooks = {
      on_enter = function()
        vim.notify('Entering resize mode')
      end,
      on_leave = function()
        vim.notify('Exiting resize mode, bye')
      end,
    },
  },
})
```

## Usage

### Key Mappings

If you are a [legendary.nvim](https://github.com/mrjones2014/legendary.nvim) (>= v2.10.0) user, you can quickly easily and easily create with the `legendary.nvim` extension for `smart-splits.nvim`. See more option in the [extension documentation in `legendary.nvim`](https://github.com/mrjones2014/legendary.nvim/blob/master/doc/EXTENSIONS.md#smart-splitsnvim).

```
require('legendary').setup({
  extensions = {
    -- to use default settings:
    smart_splits = {},
    -- default settings shown below:
    smart_splits = {
      directions = { 'h', 'j', 'k', 'l' },
      mods = {
        -- for moving cursor between windows
        move = '<C>',
        -- for resizing windows
        resize = '<M>',
        -- for swapping window buffers
        swap = false, -- false disables creating a binding
      },
    },
    -- or, customize the mappings
    smart_splits = {
      mods = {
        -- any of the mods can also be a table of the following form
        swap = {
          -- this will create the mapping like
          -- <leader><C-h>
          -- <leader><C-j>
          -- <leader><C-k>
          -- <leader><C-l>
          mod = '<C>',
          prefix = '<leader>',
        },
      },
    },
  },
})
```

Otherwise, here are some recommended mappings.

### Lua API

```
-- resizing splits
-- amount defaults to 3 if not specified
-- use absolute values, no + or -
-- the functions also check for a range,
-- so for example if you bind \`<A-h>\` to \`resize_left\`,
-- then \`10<A-h>\` will \`resize_left\` by \`(10 * config.default_amount)\`
require('smart-splits').resize_up(amount)
require('smart-splits').resize_down(amount)
require('smart-splits').resize_left(amount)
require('smart-splits').resize_right(amount)
-- moving between splits
-- You can override config.at_edge and
-- config.move_cursor_same_row via opts
-- See Configuration.
require('smart-splits').move_cursor_up({ same_row = boolean, at_edge = 'wrap' | 'split' | 'stop' })
require('smart-splits').move_cursor_down()
require('smart-splits').move_cursor_left()
require('smart-splits').move_cursor_right()
require('smart-splits').move_cursor_previous()
-- Swapping buffers directionally with the window to the specified direction
require('smart-splits').swap_buf_up()
require('smart-splits').swap_buf_down()
require('smart-splits').swap_buf_left()
require('smart-splits').swap_buf_right()
-- the buffer swap functions can also take an \`opts\` table to override the
-- default behavior of whether or not the cursor follows the buffer
require('smart-splits').swap_buf_right({ move_cursor = true })
-- persistent resize mode
-- temporarily remap your configured resize keys to
-- smart resize left, down, up, and right, respectively,
-- press <ESC> to stop resize mode (unless you've set a different key in config)
-- resize keys also accept a range, e.e. pressing \`5j\` will resize down 5 times the default_amount
require('smart-splits').start_resize_mode()
```

### Multiplexer Integrations

`smart-splits.nvim` can also enable seamless navigation between Neovim splits and `tmux`, `zellij`, `wezterm`, or `kitty` panes. You will need to set up keymaps in your `tmux`, `wezterm`, or `kitty` configs to match the Neovim keymaps.

You can also set the desired multiplexer integration in lazy environments before the plugin is loaded by setting `vim.g.smart_splits_multiplexer_integration`. The values are the same as described in [Configuration](https://github.com/mrjones2014/#configuration).

#### Tmux

You can use the package manager [TPM](https://github.com/tmux-plugins/tpm) to configure your Tmux setup:

Alternatively, add the following snippet to your `~/.tmux.conf` / `~/.config/tmux/tmux.conf` file (customizing the keys and resize amount if desired):

```
# '@pane-is-vim' is a pane-local option that is set by the plugin on load,
# and unset when Neovim exits or suspends; note that this means you'll probably
# not want to lazy-load smart-splits.nvim, as the variable won't be set until
# the plugin is loaded

# Smart pane switching with awareness of Neovim splits.
bind-key -n C-h if -F "#{@pane-is-vim}" 'send-keys C-h'  'select-pane -L'
bind-key -n C-j if -F "#{@pane-is-vim}" 'send-keys C-j'  'select-pane -D'
bind-key -n C-k if -F "#{@pane-is-vim}" 'send-keys C-k'  'select-pane -U'
bind-key -n C-l if -F "#{@pane-is-vim}" 'send-keys C-l'  'select-pane -R'

# Alternatively, if you want to disable wrapping when moving in non-neovim panes, use these bindings
# bind-key -n C-h if -F '#{@pane-is-vim}' { send-keys C-h } { if -F '#{pane_at_left}'   '' 'select-pane -L' }
# bind-key -n C-j if -F '#{@pane-is-vim}' { send-keys C-j } { if -F '#{pane_at_bottom}' '' 'select-pane -D' }
# bind-key -n C-k if -F '#{@pane-is-vim}' { send-keys C-k } { if -F '#{pane_at_top}'    '' 'select-pane -U' }
# bind-key -n C-l if -F '#{@pane-is-vim}' { send-keys C-l } { if -F '#{pane_at_right}'  '' 'select-pane -R' }

# Smart pane resizing with awareness of Neovim splits.
bind-key -n M-h if -F "#{@pane-is-vim}" 'send-keys M-h' 'resize-pane -L 3'
bind-key -n M-j if -F "#{@pane-is-vim}" 'send-keys M-j' 'resize-pane -D 3'
bind-key -n M-k if -F "#{@pane-is-vim}" 'send-keys M-k' 'resize-pane -U 3'
bind-key -n M-l if -F "#{@pane-is-vim}" 'send-keys M-l' 'resize-pane -R 3'

tmux_version='$(tmux -V | sed -En "s/^tmux ([0-9]+(.[0-9]+)?).*/\1/p")'
if-shell -b '[ "$(echo "$tmux_version < 3.0" | bc)" = 1 ]' \
    "bind-key -n 'C-\\' if -F \"#{@pane-is-vim}\" 'send-keys C-\\'  'select-pane -l'"
if-shell -b '[ "$(echo "$tmux_version >= 3.0" | bc)" = 1 ]' \
    "bind-key -n 'C-\\' if -F \"#{@pane-is-vim}\" 'send-keys C-\\\\'  'select-pane -l'"

bind-key -T copy-mode-vi 'C-h' select-pane -L
bind-key -T copy-mode-vi 'C-j' select-pane -D
bind-key -T copy-mode-vi 'C-k' select-pane -U
bind-key -T copy-mode-vi 'C-l' select-pane -R
bind-key -T copy-mode-vi 'C-\' select-pane -l
```

#### Zellij

Zellij support is implemented with help from [vim-zellij-navigator](https://github.com/hiasr/vim-zellij-navigator). Add the following keymap config to your Zellij KDL config, adjusting the keys you wish to use as necessary. Consult the documentation from [vim-zellij-navigator](https://github.com/hiasr/vim-zellij-navigator) for more customization options. No configuration should be needed on the Neovim side.

**Resizing by a specific amount from Neovim and presetting new split size is unsupported.**

```
keybinds {
  shared_except "locked" {
    bind "Ctrl h" {
        MessagePlugin "https://github.com/hiasr/vim-zellij-navigator/releases/download/0.2.1/vim-zellij-navigator.wasm" {
            name "move_focus";
            payload "left";
        };
    }
    bind "Ctrl j" {
        MessagePlugin "https://github.com/hiasr/vim-zellij-navigator/releases/download/0.2.1/vim-zellij-navigator.wasm" {
            name "move_focus";
            payload "down";
        };
    }
    bind "Ctrl k" {
        MessagePlugin "https://github.com/hiasr/vim-zellij-navigator/releases/download/0.2.1/vim-zellij-navigator.wasm" {
            name "move_focus";
            payload "up";
        };
    }
    bind "Ctrl l" {
        MessagePlugin "https://github.com/hiasr/vim-zellij-navigator/releases/download/0.2.1/vim-zellij-navigator.wasm" {
            name "move_focus";
            payload "right";
        };
    }
    bind "Alt h" {
        MessagePlugin "https://github.com/hiasr/vim-zellij-navigator/releases/download/0.2.1/vim-zellij-navigator.wasm" {
            name "resize";
            payload "left";
        };
    }
    bind "Alt j" {
        MessagePlugin "https://github.com/hiasr/vim-zellij-navigator/releases/download/0.2.1/vim-zellij-navigator.wasm" {
            name "resize";
            payload "down";
        };
    }
    bind "Alt k" {
        MessagePlugin "https://github.com/hiasr/vim-zellij-navigator/releases/download/0.2.1/vim-zellij-navigator.wasm" {
            name "resize";
            payload "up";
        };
    }
    bind "Alt l" {
        MessagePlugin "https://github.com/hiasr/vim-zellij-navigator/releases/download/0.2.1/vim-zellij-navigator.wasm" {
            name "resize";
            payload "right";
        };
    }
  }
}
```

##### Troubleshooting

If you are able to move between and resize Zellij splits, but not Neovim splits, it could be that the `zellij` command is not on the `$PATH` that is made available to the Zellij process itself. The `vim-zellij-navigator` plugin currently uses `zellij action list-clients` to determine if the current pane is running Neovim (this will go away in a future release when that information is made available directly via the Zellij plugin API).

To troubleshoot this, from within your Zellij session, you can run `zellij run -- env` to see Zellij's current environment, which should include it's `$PATH` variable.

#### Wezterm

First, ensure that the `wezterm` CLI is on your `$PATH`, as the CLI is used by the integration.

Then, if you're on Wezterm nightly, you can use Wezterm's [experimental plugin loader](https://github.com/wez/wezterm/commit/e4ae8a844d8feaa43e1de34c5cc8b4f07ce525dd):

```
local wezterm = require('wezterm')
local smart_splits = wezterm.plugin.require('https://github.com/mrjones2014/smart-splits.nvim')
local config = wezterm.config_builder()
-- you can put the rest of your Wezterm config here
smart_splits.apply_to_config(config, {
  -- the default config is here, if you'd like to use the default keys,
  -- you can omit this configuration table parameter and just use
  -- smart_splits.apply_to_config(config)

  -- directional keys to use in order of: left, down, up, right
  direction_keys = { 'h', 'j', 'k', 'l' },
  -- if you want to use separate direction keys for move vs. resize, you
  -- can also do this:
  direction_keys = {
    move = { 'h', 'j', 'k', 'l' },
    resize = { 'LeftArrow', 'DownArrow', 'UpArrow', 'RightArrow' },
  },
  -- modifier keys to combine with direction_keys
  modifiers = {
    move = 'CTRL', -- modifier to use for pane movement, e.g. CTRL+h to move left
    resize = 'META', -- modifier to use for pane resize, e.g. META+h to resize to the left
  },
  -- log level to use: info, warn, error
  log_level = 'info',
})
```

Otherwise, add the following snippet to your `~/.config/wezterm/wezterm.lua`:

```
local w = require('wezterm')

-- if you are *NOT* lazy-loading smart-splits.nvim (recommended)
local function is_vim(pane)
  -- this is set by the plugin, and unset on ExitPre in Neovim
  return pane:get_user_vars().IS_NVIM == 'true'
end

-- if you *ARE* lazy-loading smart-splits.nvim (not recommended)
-- you have to use this instead, but note that this will not work
-- in all cases (e.g. over an SSH connection). Also note that
-- \`pane:get_foreground_process_name()\` can have high and highly variable
-- latency, so the other implementation of \`is_vim()\` will be more
-- performant as well.
local function is_vim(pane)
  -- This gsub is equivalent to POSIX basename(3)
  -- Given "/foo/bar" returns "bar"
  -- Given "c:\\foo\\bar" returns "bar"
  local process_name = string.gsub(pane:get_foreground_process_name(), '(.*[/\\])(.*)', '%2')
  return process_name == 'nvim' or process_name == 'vim'
end

local direction_keys = {
  h = 'Left',
  j = 'Down',
  k = 'Up',
  l = 'Right',
}

local function split_nav(resize_or_move, key)
  return {
    key = key,
    mods = resize_or_move == 'resize' and 'META' or 'CTRL',
    action = w.action_callback(function(win, pane)
      if is_vim(pane) then
        -- pass the keys through to vim/nvim
        win:perform_action({
          SendKey = { key = key, mods = resize_or_move == 'resize' and 'META' or 'CTRL' },
        }, pane)
      else
        if resize_or_move == 'resize' then
          win:perform_action({ AdjustPaneSize = { direction_keys[key], 3 } }, pane)
        else
          win:perform_action({ ActivatePaneDirection = direction_keys[key] }, pane)
        end
      end
    end),
  }
end

return {
  keys = {
    -- move between split panes
    split_nav('move', 'h'),
    split_nav('move', 'j'),
    split_nav('move', 'k'),
    split_nav('move', 'l'),
    -- resize panes
    split_nav('resize', 'h'),
    split_nav('resize', 'j'),
    split_nav('resize', 'k'),
    split_nav('resize', 'l'),
  },
}
```

#### Kitty

By default the plugin sets a kitty user-var `IS_NVIM` when it loads. You can take advantage of this together with kittys [conditional mappings feature](https://sw.kovidgoyal.net/kitty/mapping/#conditional-mappings-depending-on-the-state-of-the-focused-window) to use the same keybind for both kitty and neovim.

Add the following snippet to `~/.config/kitty/kitty.conf`, adjusting the keymaps and resize amount as desired.

```
map ctrl+j neighboring_window down
map ctrl+k neighboring_window up
map ctrl+h neighboring_window left
map ctrl+l neighboring_window right

# Unset the mapping to pass the keys to neovim
map --when-focus-on var:IS_NVIM ctrl+j
map --when-focus-on var:IS_NVIM ctrl+k
map --when-focus-on var:IS_NVIM ctrl+h
map --when-focus-on var:IS_NVIM ctrl+l

# the 3 here is the resize amount, adjust as needed
map alt+j kitten relative_resize.py down  3
map alt+k kitten relative_resize.py up    3
map alt+h kitten relative_resize.py left  3
map alt+l kitten relative_resize.py right 3

map --when-focus-on var:IS_NVIM alt+j
map --when-focus-on var:IS_NVIM alt+k
map --when-focus-on var:IS_NVIM alt+h
map --when-focus-on var:IS_NVIM alt+l
```

Then, you must allow Kitty to listen for remote commands on a socket. You can do this either by running Kitty with the following command:

```
# For linux only:
kitty -o allow_remote_control=yes --single-instance --listen-on unix:@mykitty

# Other unix systems:
kitty -o allow_remote_control=yes --single-instance --listen-on unix:/tmp/mykitty
```

Or, by adding the following to `~/.config/kitty/kitty.conf`:

```
# For linux only:
allow_remote_control yes
listen_on unix:@mykitty

# Other unix systems:
allow_remote_control yes
listen_on unix:/tmp/mykitty
```

##### Credits

Thanks @knubie for inspiration for the Kitty implementation from [vim-kitty-navigator](https://github.com/knubie/vim-kitty-navigator).

Thanks to @chancez for the relative resize [Python kitten](https://github.com/chancez/dotfiles/blob/badc69d3895a6a942285126b8c372a55d77533e1/kitty/.config/kitty/relative_resize.py).

You can directly access the multiplexer API for scripting purposes as well. To get a handle to the current multiplexer backend, you can do:

```
local mux = require('smart-splits.mux').get()
```

This returns the currently enabled multiplexer backend, or `nil` if none is currently in use. The API offers the following methods:

```
local mux = require('smart-splits.mux').get()
-- mux matches the following type annotations
---@class SmartSplitsMultiplexer
---@field current_pane_id fun():number|nil
---@field current_pane_at_edge fun(direction:'left'|'right'|'up'|'down'):boolean
---@field is_in_session fun():boolean
---@field current_pane_is_zoomed fun():boolean
---@field next_pane fun(direction:'left'|'right'|'up'|'down'):boolean
---@field resize_pane fun(direction:'left'|'right'|'up'|'down', amount:number):boolean
---@field split_pane fun(direction:'left'|'right'|'up'|'down',size:number|nil):boolean
---@field type 'tmux'|'wezterm'|'kitty'|'zellij'
```

## Releases 20

[\+ 19 releases](https://github.com/mrjones2014/smart-splits.nvim/releases)