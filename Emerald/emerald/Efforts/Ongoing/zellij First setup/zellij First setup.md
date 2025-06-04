#ticket

about:: [[Zellij]]
___

- [x] #task zellij setup 🆔 3qbbTO 🔼 ⏳ 2025-05-29 📅 2025-06-04 ✅ 2025-06-04
	- [x] initial setup
	- [x] check session resurection
	- [x] [[#custom config]]
		- [x] configure to be locked by default
	- [x] setup [[Zellij keymaps]]
	- [x] setup features via plugins
	- [x] use `alt +-` to resize panes
	- [x] learn how to **cleanup** sessions [^1]
	- [/] use [[zellij floating pane]] as `pinned`
	- [ ] map `space`

### floating panes

- you may now `pin` **floating panes** so they're always **visible**
	- move them around with `Ctrl alt {up,down,left,right}`
	- resize again with `alt +-`

### deleting session

Resurrectable sessions can be permanently deleted with the zellij delete-session or zellij delete-all-sessions CLI commands. They can also be deleted from the session-manager.

Inactive sessions can easily be deleted via the session manager.

1. Resurrect session tab %% displays inactive sessions %%
2. `Ctrl-d` will delete all sessions on the list



[^1]: [[zellij session]]