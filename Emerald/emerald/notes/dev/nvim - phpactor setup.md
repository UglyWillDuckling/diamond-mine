#vim 
#nvim 
#php
#lsp 
#phpactor

This document details the way that [[phpactor]] is currently setup to work with [[nvim]].
The setup is configured both in [[nvim]] and on the system.

---

First, the nvim config sets up `phpactor` as one of the [[lsp]]'s for [[nvim]]. At the same time, [[phpactor]] is installed on the system. Lastly, *something* is used to start up the [[phpactor]]'s lsp server which makes it available for [[nvim]] to use.

## phpactor installation
[doc](https://phpactor.readthedocs.io/en/master/usage/standalone.html)
```bash
cd ~/home/you/somewhere
git clone https://github.com/phpactor/phpactor.git
cd phpactor
composer install
cd /usr/local/bin
sudo ln -s ~/your/projects/phpactor/bin/phpactor phpactor
```

## nvim config
### autocmd
```lua
-- Create an event handler for the FileType autocommand
vim.api.nvim_create_autocmd("FileType", {
  -- This handler will fire when the buffer's 'filetype' is "php"
  pattern = "php",
  callback = function(args)
    vim.lsp.start({
      name = "phpactor",
      cmd = { "phpactor language-server" },
      root_dir = vim.fs.root(args.buf, { "composer.json" }),
    })
  end,
})

```

## system setup

<mark style="background: #BBFABBA6;">We will do this manually 👐 for now.</mark>

For the **future** this should be automated.
