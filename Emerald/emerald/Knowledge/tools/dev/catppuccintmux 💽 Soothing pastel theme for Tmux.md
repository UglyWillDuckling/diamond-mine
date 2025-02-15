---
source: https://github.com/catppuccin/tmux
author: 
created: 2025-02-14
tags:
  - theme/tmux
---
- [[#Themes|Themes]]
- [[#Installation|Installation]]
	- [[#Installation#Manual (Recommended)|Manual (Recommended)]]
	- [[#Installation#TPM|TPM]]
	- [[#Installation#For TMUX versions prior to 3.2|For TMUX versions prior to 3.2]]
	- [[#Installation#Upgrading from v0.3|Upgrading from v0.3]]
- [[#Recommended Default Configuration|Recommended Default Configuration]]
- [[#Documentation|Documentation]]
	- [[#Documentation#Guides|Guides]]
	- [[#Documentation#Reference|Reference]]
- [[#💝 Thanks to|💝 Thanks to]]

## Themes

🌻 Latte

[![[x/9faa3053f95953d7387230f468f290b3_MD5.webp]]](https://github.com/catppuccin/tmux/blob/main/assets/latte.webp)

🪴 Frappé

[![[x/0b09a5990896b544b51c6f81b76dd26a_MD5.webp]]](https://github.com/catppuccin/tmux/blob/main/assets/frappe.webp)

🌺 Macchiato

[![[x/5ac51250c5cb61e8b1f58c26db4a4039_MD5.webp]]](https://github.com/catppuccin/tmux/blob/main/assets/macchiato.webp)

🌿 Mocha

[![[x/e83bb595e99b0db15358588215e08bd2_MD5.webp]]](https://github.com/catppuccin/tmux/blob/main/assets/mocha.webp)

## Installation

In order to have the icons displayed correctly please use/update your favorite [nerd font](https://www.nerdfonts.com/font-downloads). If you do not have a patched font installed, you can override or remove any icon. Check the [documentation](https://github.com/catppuccin/tmux/blob/main/docs/reference/configuration.md) on the options available.

### Manual (Recommended)

**This method is recommended as TPM has some issues with name conflicts.**

1. Clone this repository to your desired location (e.g. `~/.config/tmux/plugins/catppuccin`).

```
mkdir -p ~/.config/tmux/plugins/catppuccin
git clone -b v2.1.2 https://github.com/catppuccin/tmux.git ~/.config/tmux/plugins/catppuccin/tmux
```
2. Add the following line to your `tmux.conf` file: `run ~/.config/tmux/plugins/catppuccin/tmux/catppuccin.tmux`.
3. Reload Tmux by either restarting or reloading with `tmux source ~/.tmux.conf`.

Check out what to do next in the "[Getting Started Guide](https://github.com/catppuccin/tmux/blob/main/docs/tutorials/01-getting-started.md)".

### TPM

1. Install [TPM](https://github.com/tmux-plugins/tpm)
2. Add the Catppuccin plugin:

```bash
set -g @plugin 'catppuccin/tmux#v2.1.2' # See https://github.com/catppuccin/tmux/tags for additional tags
# ...alongside
set -g @plugin 'tmux-plugins/tpm'
```
3. (Optional) Set your preferred flavor, it defaults to `"mocha"`:

```bash
set -g @catppuccin_flavor 'mocha' # latte, frappe, macchiato or mocha
```

**Important**

You may have to run `~/.config/tmux/plugins/tpm/bin/clean_plugins` if upgrading from an earlier version (especially from `v0.3.0`).

### For TMUX versions prior to 3.2

This plugin uses features that were only introduced into tmux in version 3.2. If you are using a version earlier than this, you can still have lovely catppuccin colors, the installation method just looks a little different.

```bash
# In your ~/.tmux.conf

# Add the colors from the pallete. Check the themes/ directory for all options.

# Some basic mocha colors.
set -g @ctp_bg "#24273a"
set -g @ctp_surface_1 "#494d64"
set -g @ctp_fg "#cad3f5"
set -g @ctp_mauve "#c6a0f6"
set -g @ctp_crust "#181926"

# status line
set -gF status-style "bg=#{@ctp_bg},fg=#{@ctp_fg}"

# windows
set -gF window-status-format "#[bg=#{@ctp_surface_1},fg=#{@ctp_fg}] ##I ##T "
set -gF window-status-current-format "#[bg=#{@ctp_mauve},fg=#{@ctp_crust}] ##I ##T "
```

### Upgrading from v0.3

Breaking changes have been introduced since 0.3, to understand how to migrate your configuration, see pinned issue [#291](https://github.com/catppuccin/tmux/issues/291).

## Recommended Default Configuration

This configuration shows some customisation options, that can be further extended as desired. This is what is used for the previews above.

[![[x/e83bb595e99b0db15358588215e08bd2_MD5.webp]]](https://github.com/catppuccin/tmux/blob/main/assets/mocha.webp)

```rb
# ~/.tmux.conf

# Options to make tmux more pleasant
set -g mouse on
set -g default-terminal "tmux-256color"

# Configure the catppuccin plugin
set -g @catppuccin_flavor "mocha"
set -g @catppuccin_window_status_style "rounded"

# Load catppuccin
run ~/.config/tmux/plugins/catppuccin/tmux/catppuccin.tmux
# For TPM, instead use \`run ~/.config/tmux/plugins/tmux/catppuccin.tmux\`

# Make the status line pretty and add some modules
set -g status-right-length 100
set -g status-left-length 100
set -g status-left ""
set -g status-right "#{E:@catppuccin_status_application}"
set -agF status-right "#{E:@catppuccin_status_cpu}"
set -ag status-right "#{E:@catppuccin_status_session}"
set -ag status-right "#{E:@catppuccin_status_uptime}"
set -agF status-right "#{E:@catppuccin_status_battery}"

run ~/.config/tmux/plugins/tmux-plugins/tmux-cpu/cpu.tmux
run ~/.config/tmux/plugins/tmux-plugins/tmux-battery/battery.tmux
# Or, if using TPM, just run TPM
```

## Documentation

### Guides

- [Getting Started](https://github.com/catppuccin/tmux/blob/main/docs/tutorials/01-getting-started.md)
- [Custom Status Line Segments](https://github.com/catppuccin/tmux/blob/main/docs/tutorials/02-custom-status.md)
- [Troubleshooting](https://github.com/catppuccin/tmux/blob/main/docs/guides/troubleshooting.md)

### Reference

- [Status Line](https://github.com/catppuccin/tmux/blob/main/docs/reference/status-line.md)
- [Configuration Options Reference](https://github.com/catppuccin/tmux/blob/main/docs/reference/configuration.md)
- [Tmux Configuration Showcase](https://github.com/catppuccin/tmux/discussions/317)

## 💝 Thanks to

- [Pocco81](https://github.com/Pocco81)
- [vinnyA3](https://github.com/vinnyA3)
- [rogeruiz](https://github.com/rogeruiz)
- [kales](https://github.com/kjnsn)

[![[x/615647843c17954467e3b7365f50a3c4_MD5.svg]]](https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true)