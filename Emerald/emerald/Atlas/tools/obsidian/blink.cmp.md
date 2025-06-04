---
type: obsidian-plugin
author:
  - "[[Saghen]]"
  - "[[github-actions[bot]]]"
created: 2025-05-30
published:
source: https://github.com/Saghen/blink.cmp
tags:
  - plugin/obsidian
docs_link: https://cmp.saghen.dev
---
**Performant, batteries-included completion plugin for Neovim**
___

**blink.cmp** is a completion plugin with support for LSPs, cmdline, signature help, and snippets. It uses an [optional](https://cmp.saghen.dev/configuration/fuzzy.html#rust-vs-lua-implementation) custom [fuzzy matcher](https://github.com/saghen/frizbee) for typo resistance. It provides extensibility via pluggable sources (LSP, buffer, snippets, etc), component based rendering and dynamic configuration.

blink-cmp-demo.mp4<video src="https://private-user-images.githubusercontent.com/10467983/426657543-bd1e25dd-48b0-4d33-90f4-1468d822f2be.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg2MDMyMzAsIm5iZiI6MTc0ODYwMjkzMCwicGF0aCI6Ii8xMDQ2Nzk4My80MjY2NTc1NDMtYmQxZTI1ZGQtNDhiMC00ZDMzLTkwZjQtMTQ2OGQ4MjJmMmJlLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTMwVDExMDIxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY0YjU4ZDNlYWJmZGUyZWU3MmYzMzhkMWZhNTA4NzY2NjUxY2JmOTU2NzY3NGMxODA2OWRkY2I4MGQ2Mzg3OGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.zN9gfhZr_s5W_LcsHkpJ7N3gJyanPJfOwODKfdx5sKM" controls="controls"></video>

## Features

- Works out of the box with no additional configuration
- Updates on every keystroke (0.5-4ms async, single core)
- [Typo resistant fuzzy](https://github.com/saghen/frizbee) with frecency and proximity bonus
- Extensive LSP support ([tracker](https://cmp.saghen.dev/development/lsp-tracker))
- [Snippet support](https://cmp.saghen.dev/configuration/snippets.html): native `vim.snippet` (including `friendly-snippets`), `LuaSnip` and `mini.snippets`
- External sources support ([community sources](https://cmp.saghen.dev/configuration/sources.html#community-sources) and [compatibility layer for `nvim-cmp` sources](https://github.com/saghen/blink.compat))
- [Auto-bracket support](https://cmp.saghen.dev/configuration/completion.html#auto-brackets) based on semantic tokens
- [Signature help](https://cmp.saghen.dev/configuration/signature.html) (experimental, opt-in)
- [Command line completion](https://cmp.saghen.dev/modes/cmdline.html)
- [Terminal completion](https://cmp.saghen.dev/modes/term) (0.11+ only! No source for shell completions exists yet, contributions welcome!)
- [Comparison with built-in completion](https://cmp.saghen.dev/#compared-to-built-in-completion)
- [Comparison with nvim-cmp](https://cmp.saghen.dev/#compared-to-nvim-cmp)
