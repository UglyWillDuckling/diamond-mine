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

# [Commands](Atlas/tools/obsidian/Templater/Templater%20doc/commands/overview.md)

## [Command Types](Atlas/tools/obsidian/Templater/Templater%20doc/commands/overview.md)

[Templater](https://github.com/SilentVoid13/Templater) defines 2 types of opening tags, that defines 2 types of **commands**:

- `<%`: Interpolation command. It will output the result of the expression that's inside.
- `<%*`: [JavaScript execution command](execution-command.md). It will execute the JavaScript code that's inside. It does not output anything by default.

The closing tag for a command is always the same: `%>`

## [Command utilities](Atlas/tools/obsidian/Templater/Templater%20doc/commands/overview.md)

In addition to the different types of commands, you can also use command utilities. They are also declared in the opening tag of the command. All command utilities work with all command types. The available command utilities are:

- [Whitespace Control](whitespace-control.md)
- [Dynamic Commands](dynamic-command.md)

[Previous chapter](system-user-functions.md)

[Previous chapter](system-user-functions.md)

