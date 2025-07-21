---
source: https://github.com/stevearc/conform.nvim?tab=readme-ov-file
author:
  - "[[stevearch]]"
created: 2025-07-13
tags:
  - plugin/vim
part of:
  - "[[neovim - nvim]]"
---
**Lightweight yet powerful formatter plugin for Neovim**

## Features

- **Preserves extmarks and folds** - Most formatters replace the entire buffer, which clobbers extmarks and folds, and can cause the viewport and cursor to jump unexpectedly. Conform calculates minimal diffs and applies them using the built-in LSP format utilities.
- **Fixes bad-behaving LSP formatters** - Some LSP servers are lazy and simply replace the entire buffer, leading to the problems mentioned above. Conform hooks into the LSP handler and turns these responses into proper piecewise changes.
- **Enables range formatting for all formatters** - Since conform calculates minimal diffs, it can perform range formatting [even if the underlying formatter doesn't support it.](https://github.com/stevearc/conform.nvim/blob/master/doc/advanced_topics.md#range-formatting)
- **Simple API** - Conform exposes a simple, imperative API modeled after `vim.lsp.buf.format()`.
- **Formats embedded code blocks** - Can format code blocks inside markdown files or similar (see [injected language formatting](https://github.com/stevearc/conform.nvim/blob/master/doc/advanced_topics.md#injected-language-formatting-code-blocks))
___
