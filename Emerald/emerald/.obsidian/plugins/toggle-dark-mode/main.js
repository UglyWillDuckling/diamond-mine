const obsidian = require('obsidian');

class ToggleDarkModePlugin extends obsidian.Plugin {
	onload() {
		this.addCommand(
			{
				id: 'toggle-dark-mode',
				name: 'Toggle',
				callback: () => {
					this.app.changeTheme(this.app.getTheme() === 'obsidian' ? 'moonstone' : 'obsidian');
				},
			},
		);
	}
}

module.exports = ToggleDarkModePlugin;

/* nosourcemap */