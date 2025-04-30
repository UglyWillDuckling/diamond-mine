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

# [Commands](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/commands/overview)

## [Command Types](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/commands/overview)

[Templater](https://github.com/SilentVoid13/Templater) defines 2 types of opening tags, that defines 2 types of **commands**:

- `<%`: Interpolation command. It will output the result of the expression that's inside.
- `<%*`: [JavaScript execution command](execution-command). It will execute the JavaScript code that's inside. It does not output anything by default.

The closing tag for a command is always the same: `%>`

## [Command utilities](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/commands/overview)

In addition to the different types of commands, you can also use command utilities. They are also declared in the opening tag of the command. All command utilities work with all command types. The available command utilities are:

- [Whitespace Control](whitespace-control)
- [Dynamic Commands](dynamic-command)

[Previous chapter](system-user-functions)

[Previous chapter](system-user-functions)

