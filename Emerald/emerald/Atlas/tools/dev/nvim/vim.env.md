#howto/vim #howto/nvim

about:: [[nvim]]

Vim allows you to use env variables [^1] in your configuration.

You may use `vim.env` to access any env var set.

```lua
workspaces = {
	{
		path = vim.env.OBSIDIAN_PATH
	}
}
```

- [x] remind me (@[[2025-05-20]] 11:00)
- [x] remind one more time, vim env (@[[2025-06-11]])

[^1]: [[env variable]]