#nvim 
#diagnostic
#lsp

[[Trouble]]
https://github.com/folke/trouble.nvim/blob/main/docs/examples.md

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


- $ the filter works, but
- ? I'm not sure how to apply this as a general rule
