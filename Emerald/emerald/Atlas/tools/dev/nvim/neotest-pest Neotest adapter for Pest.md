---
author:
  - "[[Atlas/tools/dev/github]]"
created: 2025-05-12
published:
source: https://github.com/V13Axel/neotest-pest
tags:
  - plugins/nvim
extends: "[[Neotest]]"
---
[[Neotest]] adapter for Pest 2.0
___

## neotest-pest

This plugin provides a [Pest](https://pestphp.com/) adapter for the [Neotest](https://github.com/nvim-neotest/neotest) framework.

- Updated to work with [Pest](https://pestphp.com/) 2.0
- Support for (and automatic detection of) Laravel Sail
	- Note: This also moves junit output files into `storage/app/`
- Parallel testing support

⚠️ *Ive only focused on making this work for me. Please test against your Pest tests* ⚠️

## 📦 Installation

Install the plugin using your favorite package manager.

Here's an example using lazy.nvim:

```lua
{
    'nvim-neotest/neotest',
    dependencies = {
        ...,
        'V13Axel/neotest-pest',
    },
    config = function()
        require('neotest').setup({
            ...,
            adapters = {
                require('neotest-pest'),
            }
        })
    end
}
```

## 🔧 Configuration

```lua
adapters = {
    require('neotest-pest')({
        -- Ignore these directories when looking for tests
        -- -- Default: { "vendor", "node_modules" }
        ignore_dirs = { "vendor", "node_modules" }

        -- Ignore any projects containing "phpunit-only.tests"
        -- -- Default: {}
        root_ignore_files = { "phpunit-only.tests" },

        -- Specify suffixes for files that should be considered tests
        -- -- Default: { "Test.php" }
        test_file_suffixes = { "Test.php", "_test.php", "PestTest.php" },

        -- Sail not properly detected? Explicitly enable it.
        -- -- Default: function() that checks for sail presence
        sail_enabled = function() return false end,

        -- Custom sail executable. Not running in Sail, but running bare Docker?
        -- Set \`sail_enabled\` = true and \`sail_executable\` to { "docker", "exec", "[somecontainer]" }
        -- -- Default: "vendor/bin/sail"
        sail_executable = "vendor/bin/sail",

        -- Custom sail project root path.
        -- -- Default: "/var/www/html"
        sail_project_path = "/var/www/html",

        -- Custom pest binary.
        -- -- Default: function that checks for sail presence
        pest_cmd = "vendor/bin/pest",

        -- Run N tests in parallel, <=1 doesn't pass --parallel to pest at all
        -- -- Default: 0
        parallel = 16

        -- Enable ["compact" output printer](https://pestphp.com/docs/optimizing-tests#content-compact-printer)
        -- -- Default: false
        compact = false,

        -- Set a custom path for the results XML file, parsed by this adapter
        --
        ------------------------------------------------------------------------------------
        -- NOTE: This must be a path accessible by both your test runner AND your editor! --
        ------------------------------------------------------------------------------------
        --
        -- -- Default: function that checks for sail presence.
        -- --      - If no sail: Numbered file in randomized /tmp/ directory (using async.fn.tempname())
        -- --      - If sail: "storage/app/" .. os.date("junit-%Y%m%d-%H%M%S")
        results_path = function() "/some/accessible/path" end,
    }),
}
```

## 🚀 Usage

To test a single test, hover over the test and run `lua require('neotest').run.run()`.

As an example, I have mine setup with t(est)n(earest) as such:

```lua
vim.keymap.set('n', '<leader>tn', function() require('neotest').run.run() end)
```

#### Test file

To test a file run `lua require('neotest').run.run(vim.fn.expand('%'))`

Example - t(est)f(ile):

```lua
vim.keymap.set('n', '<leader>tf', function() require('neotest').run.run(vim.fn.expand('%')) end)
```

#### Test directory

To test a directory run `lua require('neotest').run.run("path/to/directory")`

#### Test suite

To test the full test suite run `lua require('neotest').run.run({ suite = true })`

## 🎁 Contributing

I'm just **one** guy, maintaining this in my spare time and when I can get to it. Please raise a **PR** if you are interested in adding new functionality or fixing any bugs. When submitting a bug, please include an example test that I can test against.

To trigger the tests for the adapter, run:

```
./scripts/test
```
