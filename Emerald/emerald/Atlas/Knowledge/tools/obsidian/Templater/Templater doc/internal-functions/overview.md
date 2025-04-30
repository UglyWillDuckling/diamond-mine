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

# [Internal Functions](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/internal-functions/overview)

The different internal variables and functions offered by [Templater](https://github.com/SilentVoid13/Templater) are available under different **modules**, to sort them. The existing **internal modules** are:

- [App module](app-module): `tp.app`
- [Config module](config-module): `tp.config`
- [Date module](date-module): `tp.date`
- [File module](file-module): `tp.file`
- [Frontmatter module](frontmatter-module): `tp.frontmatter`
- [Hooks module](hooks-module): `tp.hooks`
- [Obsidian module](obsidian-module): `tp.obsidian`
- [System module](system-module): `tp.system`
- [Web module](web-module): `tp.web`

If you understood the [object hierarchy](syntax) correctly, this means that a typical internal function call looks like this: ` <% tp.<module_name>.<internal_function_name> %>`

## [Contribution](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/internal-functions/overview)

I invite everyone to contribute to this plugin development by adding new internal functions. More information [here](contribute).

[Previous chapter](faq)

[Previous chapter](faq)

