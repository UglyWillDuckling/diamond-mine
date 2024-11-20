#nvim 
#diagnostic
#lsp
## example
```lua
{
  modes = {
    mydiags = {
      mode = "diagnostics", -- inherit from diagnostics mode
      filter = {
        any = {
          buf = 0, -- current buffer
          {
            severity = vim.diagnostic.severity.ERROR, -- errors only
            -- limit to files in the current project
            function(item)
              return item.filename:find((vim.loop or vim.uv).cwd(), 1, true)
            end,
          },
        },
      },
    }
  }
}
```

## resolution 🥅
- done with [[phpactor]] and in [[nvim - phpactor setup]]

- [x] remind (@[[2024-11-20]] 13:30)
