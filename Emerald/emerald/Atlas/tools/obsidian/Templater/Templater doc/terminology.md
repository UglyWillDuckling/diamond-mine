1. [**1.** Introduction](Atlas/tools/obsidian/Templater/Templater%20doc/introduction.md)
1. [**1.1.** Installation](Atlas/tools/obsidian/Templater/Templater%20doc/installation.md)
2. [**1.2.** Terminology](terminology.md)
3. [**1.3.** Syntax](syntax.md)
4. [**1.4.** Settings](settings.md)
5. [**1.5.** FAQ](Atlas/tools/obsidian/Templater/Templater%20doc/faq.md)
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

# [Terminology](terminology.md)

To understand how [Templater](https://github.com/SilentVoid13/Templater) works, let's define a few terms:

- A **template** is a file that contains **[commands](Atlas/tools/obsidian/Templater/Templater%20doc/commands/overview.md)**.
- A text snippet that starts with an opening tag `, ends with a closing tag ` is what we will call a **[command](Atlas/tools/obsidian/Templater/Templater%20doc/commands/overview.md)**.
- A **function** is an object that we can invoke inside a **command** and that returns a value (the replacement string)

There are two types of functions you can use:

- [Internal functions](Atlas/tools/obsidian/Templater/Templater%20doc/internal-functions/overview.md). They are **predefined** functions that are built within the plugin. As an example, `tp.date.now` is an internal function that will return the current date.
- [User functions](Atlas/tools/obsidian/Templater/Templater%20doc/user-functions/overview.md).

### [Example](terminology.md)

The following template contains 2 commands, calling 2 different internal functions:

```
Yesterday: 2025-04-29
Tomorrow: 2025-05-01

```

We'll see in the next part the syntax required to write some commands.

[Previous chapter](Atlas/tools/obsidian/Templater/Templater%20doc/installation.md)

[Previous chapter](Atlas/tools/obsidian/Templater/Templater%20doc/installation.md)

