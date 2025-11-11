#howto/vim 

You can easily toggle options by **negating** the current config value.

```sh
vim.keymap.set('n', '<leader>us', ':set spell!<CR>', { desc = 'Toggle Spell'})
```
==the `spell!` will return the opposite of the current `spell` value==
