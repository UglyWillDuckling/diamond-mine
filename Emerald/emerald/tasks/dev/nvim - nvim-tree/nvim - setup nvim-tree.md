#navigation
#tree-structure
#nvim 
#vim 

https://github.com/nvim-tree/nvim-tree
https://github.com/antosha417/nvim-lsp-file-operations

---

- [x] plugin ✅ 2024-11-01
- [x] [[keymaps]] ⌨ ✅ 2024-10-31
- [/] `config` [[#config]]
- [ ] other [[customization]]

## config

```lua
require("nvim-tree").setup({
  sort = {
    sorter = "case_sensitive",
  },
  view = {
    width = 30,
  },
  renderer = {
    group_empty = true,
  },
  filters = {
    dotfiles = true,
  },
})
```