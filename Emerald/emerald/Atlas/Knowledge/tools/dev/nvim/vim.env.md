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

- [ ] remind me (@[[2025-05-20]] 11:00)

[^1]: [[env variable]]