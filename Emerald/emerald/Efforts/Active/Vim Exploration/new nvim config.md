---
uses:
  - "[[Vim Cheat Sheet]]"
---
#project 

- [x] #task/nvim work on [[new nvim config]] #longterm  🆔 Tag1Xq ✅ 2025-05-12
	- [x] resolve [[conflict between txt object plugins]]: [[min.ai]] | [[targets.vim]]
___
# 🗒 Notes
- ..
# 🗺 crucial mappings
- ..
## main mapping to keep in mind
- `]p` - paste and adjust indent to current line 

___
# git

## mappingsg
- `<leader>gd`: diff view - shows a list of all changed files with a `diff` view split
	- uses [[sindrets diffview]]
 - `<leader>gR` reset buffer
 - `<leader>gb` blame line
 - `,gp` preview hunk
 - `,gl` **lazygit**
 - `,hd` diff this
 - object `ih`  inner hunk

# Tabs

## mappings
- `<leader>to`: close **all** other tabs

**related**
- `gt`: next tab
- `gT`: prev
- `:tabo[nly]` - **only** this tab; same as `<leader>to`

# Windows

## mappings

- `<C-w>`
	- `o` `:only` - close all windows but the current
	- `L` - <mark style="background: #ABF7F7A6;">move</mark> to the very right
	- `H` - to the very left

# Diagnostisc

- `<C-w>D` - show current line diagnostics
- errors
	- `[e`, `]e` prev/next error

# Floating  terminal
- [x] fix mapping for terminal

# Coding

- [/] implement full support for [[phpactor]]
	- [x] install and setup
	- [ ] configure for **legacy** project

## php - phpactor
[[phpactor]]

