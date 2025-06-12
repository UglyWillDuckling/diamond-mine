1. [**1.** Introduction](Pro%20Git%20-%20Scott%20Chacon/Introduction.md)
1. [**1.1.** Installation](Atlas/tools/dev/Zellij/zellijdoc/installation.md)
2. [**1.2.** Terminology](terminology.md)
3. [**1.3.** Syntax](syntax.md)
4. [**1.4.** Settings](settings.md)
5. [**1.5.** FAQ](Atlas/tools/dev/Zellij/zellijdoc/faq.md)
3. [**2.** Internal Functions](Atlas/tools/obsidian/Templater/Templater%20doc/internal-functions/overview.md)
01. [**2.1.** tp.app](app-module.md)
02. [**2.2.** tp.config](config-module.md)
03. [**2.3.** tp.date](date-module.md)
04. [**2.4.** tp.file](file-module.md)
05. [**2.5.** tp.frontmatter](frontmatter-module.md)
06. [**2.6.** tp.hooks](hooks-module.md)
07. [**2.7.** tp.obsidian](obsidian-module.md)
08. [**2.8.** tp.system](system-module.md)
09. [**2.9.** tp.web](web-module.md)
10. [**2.10.** Contributing](contribute.md)
5. [**3.** User Functions](Atlas/tools/obsidian/Templater/Templater%20doc/user-functions/overview.md)
1. [**3.1.** User Scripts](script-user-functions.md)
2. [**3.2.** System Commands](system-user-functions.md)
7. [**4.** Commands](Atlas/tools/obsidian/Templater/Templater%20doc/commands/overview.md)
1. [**4.1.** Dynamic Commands](dynamic-command.md)
2. [**4.2.** Execution Commands](execution-command.md)
3. [**4.3.** Whitespace Control](whitespace-control.md)

# Templater

[Print this book](print.md)

# [Config Module](config-module.md)

This module exposes Templater's running configuration.

This is mostly useful when writing scripts requiring some context information.

- [Documentation](config-module.md)
  - [`tp.config.active_file?`](config-module.md)
  - [`tp.config.run_mode`](config-module.md)
  - [`tp.config.target_file`](config-module.md)
  - [`tp.config.template_file`](config-module.md)

## [Documentation](config-module.md)

### [`tp.config.active_file?`](config-module.md)

The active file (if existing) when launching Templater.

### [`tp.config.run_mode`](config-module.md)

The `RunMode`, representing the way Templater was launched (Create new from template, Append to active file, ...).

### [`tp.config.target_file`](config-module.md)

The `TFile` object representing the target file where the template will be inserted.

### [`tp.config.template_file`](config-module.md)

The `TFile` object representing the template file.

[Previous chapter](app-module.md)

[Previous chapter](app-module.md)

