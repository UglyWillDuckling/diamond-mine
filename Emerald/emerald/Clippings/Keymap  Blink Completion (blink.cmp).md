---
author:
created: 2025-06-03
source: https://cmp.saghen.dev/configuration/keymap
tags:
  - docs/blink
about: "[[blink.cmp]]"
---
## `Keymap`

Blink uses a special schema for defining keymaps since it needs to handle falling back to other mappings. However, there's nothing stopping you from using `require('blink.cmp')` and implementing these keymaps yourself.

Your custom key mappings are merged with a `preset` and any conflicting keys will overwrite the preset mappings. The `fallback` command will run the next non blink keymap.

## Example

WARNING

These keymaps apply to the default mode only, not cmdline or terminal modes. See the [cmdline](https://cmp.saghen.dev/modes/cmdline.html) and [term](https://cmp.saghen.dev/modes/term.html) documentation for more information.

Each keymap may be a list of commands and/or functions, where commands map directly to `require('blink.cmp')[command]()`. If the command/function returns `false` or `nil`, the next command/function will be run.

## Commands

- `show`: Shows the completion menu
	- Optionally use `function(cmp) cmp.show({ providers = { 'snippets' } }) end` to show with a specific list of providers
- `show_and_insert`: Shows the completion menu and inserts the first item
	- Short form for `cmp.show({ initial_selected_item_idx = 1 })` when `auto_insert = true`
- `hide`: Hides the completion menu
- `cancel`: Reverts `completion.list.selection.auto_insert` and hides the completion menu
- `accept`: Accepts the currently selected item
	- Optionally pass an index to select a specific item in the list: `function(cmp) cmp.accept({ index = 1 }) end`
	- Optionally pass a `callback` to run after the item is accepted: `function(cmp) cmp.accept({ callback = function() some_function() end`
- `accept_and_enter`: Accepts the currently selected item and feeds an enter key to neovim
	- Useful in `cmdline` mode to accept the current item and run the command
- `select_and_accept`: Accepts the currently selected item, or the first item if none are selected
- `select_accept_and_enter`: Accepts the currently selected item, or the first item if none are selected, and feeds an enter key to neovim
	- Useful in `cmdline` mode to accept the current item and run the command
- `select_prev`: Selects the previous item, cycling to the bottom of the list if at the top, if `completion.list.cycle.from_top == true`
	- Optionally control the `auto_insert` property of `completion.list.selection`: `function(cmp) cmp.select_prev({ auto_insert = false }) end`
	- Optionally, run when ghost text is visible, instead of only when the menu is visible: `function(cmp) cmp.select_prev({ on_ghost_text = true })`
- `select_next`: Selects the next item, cycling to the top of the list if at the bottom, if `completion.list.cycle.from_bottom == true`
	- Optionally control the `auto_insert` property of `completion.list.selection`: `function(cmp) cmp.select_next({ auto_insert = false }) end`
	- Optionally, run when ghost text is visible, instead of only when the menu is visible: `function(cmp) cmp.select_next({ on_ghost_text = true })`
- `insert_prev`: Inserts the previous item (`auto_insert`), cycling to the bottom of the list if at the top, if `completion.list.cycle.from_top == true`. This will trigger completions if none are available, unlike `select_prev` which would fallback to the next keymap in this case.
- `insert_next`: Inserts the next item (`auto_insert`), cycling to the top of the list if at the bottom, if `completion.list.cycle.from_bottom == true`. This will trigger completions if none are available, unlike `select_next` which would fallback to the next keymap in this case.
- `show_documentation`: Shows the documentation for the currently selected item
- `hide_documentation`: Hides the documentation
- `scroll_documentation_up`: Scrolls the documentation up by 4 lines
	- Optionally use `function(cmp) cmp.scroll_documentation_up(4) end` to scroll by a specific number of lines
- `scroll_documentation_down`: Scrolls the documentation down by 4 lines
	- Optionally use `function(cmp) cmp.scroll_documentation_down(4) end` to scroll by a specific number of lines
- `show_signature`: Shows the signature help window
- `hide_signature`: Hides the signature help window
- `snippet_forward`: Jumps to the next snippet placeholder
- `snippet_backward`: Jumps to the previous snippet placeholder
- `fallback`: Runs the next non-blink keymap, or runs the built-in neovim binding
- `fallback_to_mappings`: Runs the next non-blink keymap (not built-in behavior)

## Cmdline and Terminal

See the respective [cmdline documentation](https://cmp.saghen.dev/modes/cmdline.html) and [terminal documentation](https://cmp.saghen.dev/modes/term.html) for more information.

## Presets

Set the preset to `'none'` to disable the presets

### default

### cmdline

See the [cmdline documentation](https://cmp.saghen.dev/modes/cmdline.html)

### super-tab

You may want to set `completion.trigger.show_in_snippet = false` or use `completion.list.selection.preselect = function(ctx) return not require('blink.cmp').snippet_active({ direction = 1 }) end`. See more info in: [https://cmp.saghen.dev/configuration/completion.html#list](https://cmp.saghen.dev/configuration/completion.html#list)

### enter

You may want to set `completion.list.selection.preselect = false`. See more info in: [https://cmp.saghen.dev/configuration/completion.html#list](https://cmp.saghen.dev/configuration/completion.html#list)