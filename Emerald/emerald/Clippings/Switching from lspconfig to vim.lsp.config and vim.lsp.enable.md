---
author:
created: 2025-10-13
published: 2025-05-05
source: https://xnacly.me/posts/2025/neovim-lsp-changes/
tags:
  - howto/nvim/lsp
  - migration
about:
  - "[[nvim]]"
---
## Previous Configuration via lsp-config

Previously I used [`neovim/nvim-lspconfig`](https://github.com/neovim/nvim-lspconfig) to get a default configuration for the language servers I use:

LUA

```lua
1vim.lsp.config.sqleibniz = {
 2    cmd = { '/usr/bin/sqleibniz', '--lsp' },
 3    filetypes = { "sql" },
 4    root_markers = { "leibniz.lua" }
 5}
 6vim.lsp.enable('sqleibniz')
 7
 8local lspconfig = require "lspconfig"
 9local lsps = {
10    "rust_analyzer",
11    "gopls",
12    "ts_ls",
13    "cssls",
14    "lua_ls",
15    "hls",
16}
17for _, lsp in pairs(lsps) do
18    lspconfig[lsp].setup {}
19end
20
21lspconfig.clangd.setup {
22    init_options = {
23        fallbackFlags = { '--std=c23' }
24    },
25}
```

So around three places/ways for configuring language servers:

1. `vim.lsp.config` & `vim.lsp.enable`, which previously were only available in `nightly` and weren’t integrated with `lspconfig` (required building neovim from source)
2. `lspconfig[<lsp name>].setup` with all `lsps` elements
3. manual configuration options for eg `clangd`

## Updated Configuration since v0.11

The updated configuration using `config` (to register) and `enable` (to start), merging all three previous methods for configuring my language servers into a singular array:

LUA

```lua
1local lsps = {
 2    { "rust_analyzer" },
 3    { "gopls" },
 4    { "ts_ls" },
 5    { "cssls" },
 6    { "lua_ls" },
 7    { "hls" },
 8    {
 9        "clangd",
10        {
11            init_options = {
12                -- im using this standard since i want the compiler to
13                -- know about true, false, etc - see
14                -- https://xnacly.me/posts/2025/clangd-lsp/
15                fallbackFlags = { '--std=c23' }
16            },
17        }
18    },
19    -- my custom sql language server
20    {
21        "sqleibniz",
22        {
23            cmd = { '/usr/bin/sqleibniz', '--lsp' },
24            filetypes = { "sql" },
25            root_markers = { "leibniz.lua" }
26        }
27    },
28}
29
30for _, lsp in pairs(lsps) do
31    local name, config = lsp[1], lsp[2]
32    vim.lsp.enable(name)
33    if config then
34        vim.lsp.config(name, config)
35    end
36end
```