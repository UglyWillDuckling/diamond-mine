1. [**1.** Introduction](introduction)
1. [**1.1.** Installation](installation)
2. [**1.2.** Terminology](terminology)
3. [**1.3.** Syntax](syntax)
4. [**1.4.** Settings](settings)
5. [**1.5.** FAQ](faq)
3. [**2.** Internal Functions](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/internal-functions/overview)
01. [**2.1.** tp.app](app-module)
02. [**2.2.** tp.config](config-module)
03. [**2.3.** tp.date](date-module)
04. [**2.4.** tp.file](file-module)
05. [**2.5.** tp.frontmatter](frontmatter-module)
06. [**2.6.** tp.hooks](hooks-module)
07. [**2.7.** tp.obsidian](obsidian-module)
08. [**2.8.** tp.system](system-module)
09. [**2.9.** tp.web](web-module)
10. [**2.10.** Contributing](contribute)
5. [**3.** User Functions](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/user-functions/overview)
1. [**3.1.** User Scripts](script-user-functions)
2. [**3.2.** System Commands](system-user-functions)
7. [**4.** Commands](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/commands/overview)
1. [**4.1.** Dynamic Commands](dynamic-command)
2. [**4.2.** Execution Commands](execution-command)
3. [**4.3.** Whitespace Control](whitespace-control)

- Light (default)
- Rust
- Coal
- Navy
- Ayu

# Templater

[Print this book](print)

# [Config Module](config-module)

This module exposes Templater's running configuration.

This is mostly useful when writing scripts requiring some context information.

- [Documentation](config-module)
  - [`tp.config.active_file?`](config-module)
  - [`tp.config.run_mode`](config-module)
  - [`tp.config.target_file`](config-module)
  - [`tp.config.template_file`](config-module)

## [Documentation](config-module)

### [`tp.config.active_file?`](config-module)

The active file (if existing) when launching Templater.

### [`tp.config.run_mode`](config-module)

The `RunMode`, representing the way Templater was launched (Create new from template, Append to active file, ...).

### [`tp.config.target_file`](config-module)

The `TFile` object representing the target file where the template will be inserted.

### [`tp.config.template_file`](config-module)

The `TFile` object representing the template file.

[Previous chapter](app-module)

[Previous chapter](app-module)

