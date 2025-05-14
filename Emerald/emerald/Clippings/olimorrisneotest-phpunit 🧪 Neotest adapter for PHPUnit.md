---
author:
  - "[[GitHub]]"
created: 2025-05-12
published: 
source: https://github.com/olimorris/neotest-phpunit
tags:
  - plugin/nvim
  - 📚Book
related:
  - "[[nvim]]"
  - "[[phpunit]]"
---
🧪 Neotest adapter for **PHPUnit**

## neotest-phpunit

This plugin provides a [PHPUnit](https://phpunit.de/) adapter for the [Neotest](https://github.com/nvim-neotest/neotest) framework.

[![Neotest and PHPUnit](https://user-images.githubusercontent.com/9512444/177888651-c55f8613-686a-40d0-8753-ca802ee6c000.png)](https://user-images.githubusercontent.com/9512444/177888651-c55f8613-686a-40d0-8753-ca802ee6c000.png)

## 📦 Installation

Install with the package manager of your choice:

**Lazy**

```
{
  "nvim-neotest/neotest",
  lazy = true,
  dependencies = {
    ...,
    "olimorris/neotest-phpunit",
  },
  config = function()
    require("neotest").setup({
      ...,
      adapters = {
        require("neotest-phpunit")
      },
    }
  end
}
```

**Packer**

```
use({
  "nvim-neotest/neotest",
  requires = {
    ...,
    "olimorris/neotest-phpunit",
  },
  config = function()
    require("neotest").setup({
      ...,
      adapters = {
        require("neotest-phpunit"),
      }
    })
  end
})
```

## 🔧 Configuration

### Default configuration

Click to see the default configuration
```
adapters = {
  require("neotest-phpunit")({
    phpunit_cmd = function()
      return "vendor/bin/phpunit" -- for \`dap\` strategy then it must return string (table values will cause validation error)
    end,
    root_files = { "composer.json", "phpunit.xml", ".gitignore" },
    filter_dirs = { ".git", "node_modules" },
    env = {}, -- for example {XDEBUG_CONFIG = 'idekey=neotest'}
    dap = nil, -- to configure \`dap\` strategy put single element from \`dap.configurations.php\`
  }),
}
```

The command used to run tests can be changed via the `phpunit_cmd` option:

```
require("neotest-phpunit")({
  phpunit_cmd = function()
    return "vendor/bin/phpunit"
  end
})
```

For Neotest adapters to work, they need to define a project root whereby the process of discovering tests can take place. By default, the adapter looks for a `composer.json`, `phpunit.xml` or `.gitignore` file. These can be changed with:

```
require("neotest-phpunit")({
  root_files = { "README.md" }
})
```

You can even set `root_files` with a function which returns a table:

```
require("neotest-phpunit")({
  root_files = function() return { "README.md" } end
})
```

If there are projects you don't want discovered, you can instead set `root_ignore_files` to ignore any matching projects.

For example, if your project uses Pest and the appropriate [neotest adapter](https://github.com/V13Axel/neotest-pest), you'll need to set:

```
require("neotest-phpunit")({
    root_ignore_files = { "tests/Pest.php" }
})
```

### Filtering directories

By default, the adapter will search test files in all dirs in the root with the exception of `node_modules` and `.git`. You can change this with:

```
require("neotest-phpunit")({
  filter_dirs = { "vendor" }
})
```

You can even set `filter_dirs` with a function which returns a table:

```
require("neotest-phpunit")({
  filter_dirs = function() return { "vendor" } end
})
```

### Debugging

The plugin can also be used for debugging via a dap strategy.

Firstly, install and configure [nvim-dap](https://github.com/mfussenegger/nvim-dap) with [vscode-php-debug](https://github.com/xdebug/vscode-php-debug). Then set the following dap configuration:

```
dap.configurations.php = {
  {
    log = true,
    type = "php",
    request = "launch",
    name = "Listen for XDebug",
    port = 9003,
    stopOnEntry = false,
    xdebugSettings = {
      max_children = 512,
      max_data = 1024,
      max_depth = 4,
    },
    breakpoints = {
      exception = {
        Notice = false,
        Warning = false,
        Error = false,
        Exception = false,
        ["*"] = false,
      },
    },
  }
}
```

Then in the plugin's config, add:

```
require("neotest-phpunit")({
  env = {
      XDEBUG_CONFIG = "idekey=neotest",
  },
  dap = dap.configurations.php[1],
})
```

## 🚀 Usage

To test a single test, hover over the test and run `lua require("neotest").run.run()`

#### Test file

To test a file run `lua require("neotest").run.run(vim.fn.expand("%"))`

#### Test directory

To test a directory run `lua require("neotest").run.run("path/to/directory")`

#### Test suite

To test the full test suite run `lua require("neotest").run.run({ suite = true })`

## 🎁 Contributing

This project is maintained by the Neovim PHP community. Please raise a PR if you are interested in adding new functionality or fixing any bugs. When submitting a bug, please include an example test that we can test against.

To trigger the tests for the adapter, run:

```
./scripts/test
```