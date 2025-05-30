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

- Light (default)
- Rust
- Coal
- Navy
- Ayu

# Templater

[Print this book](print.md)

# [Internal Functions](Atlas/tools/obsidian/Templater/Templater%20doc/internal-functions/overview.md)

The different internal variables and functions offered by [Templater](https://github.com/SilentVoid13/Templater) are available under different **modules**, to sort them. The existing **internal modules** are:

- [App module](app-module.md): `tp.app`
- [Config module](config-module.md): `tp.config`
- [Date module](date-module.md): `tp.date`
- [File module](file-module.md): `tp.file`
- [Frontmatter module](frontmatter-module.md): `tp.frontmatter`
- [Hooks module](hooks-module.md): `tp.hooks`
- [Obsidian module](obsidian-module.md): `tp.obsidian`
- [System module](system-module.md): `tp.system`
- [Web module](web-module.md): `tp.web`

If you understood the [object hierarchy](syntax.md) correctly, this means that a typical internal function call looks like this: ` <% tp.<module_name>.<internal_function_name> %>`

## [Contribution](Atlas/tools/obsidian/Templater/Templater%20doc/internal-functions/overview.md)

I invite everyone to contribute to this plugin development by adding new internal functions. More information [here](contribute.md).

[Previous chapter](Atlas/tools/dev/Zellij/zellijdoc/faq.md)

[Previous chapter](Atlas/tools/dev/Zellij/zellijdoc/faq.md)

