- [x] remind me (@[[2025-05-26]])
- [x] monthly (@[[2025-06-23]])

## tables
%% for tables only %%

1. vim inspect
2. vim.print
3. `:lua someValue`

**:lua**
 ```lua
 -- in vim
 :lua = vim.opt.autoindent
 ```

**vim inspect**
 ```lua
 -- in lua
 print(vim.inspect(your_table))
 ```

**vim print**
 ```lua
 -- in lua
 vim.print(package.loaded)
 ```

___

from::
- [[Everything you need to know to configure neovim using lua  Devlog#print tables]]
- [[Lua - Neovim docs]]