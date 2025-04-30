1. [**1.** Introduction](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/introduction.md)
1. [**1.1.** Installation](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/installation.md)
2. [**1.2.** Terminology](terminology)
3. [**1.3.** Syntax](syntax)
4. [**1.4.** Settings](settings)
5. [**1.5.** FAQ](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/faq.md)
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

# [Terminology](terminology)

To understand how [Templater](https://github.com/SilentVoid13/Templater) works, let's define a few terms:

- A **template** is a file that contains **[commands](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/commands/overview)**.
- A text snippet that starts with an opening tag `, ends with a closing tag ` is what we will call a **[command](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/commands/overview)**.
- A **function** is an object that we can invoke inside a **command** and that returns a value (the replacement string)

There are two types of functions you can use:

- [Internal functions](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/internal-functions/overview). They are **predefined** functions that are built within the plugin. As an example, `tp.date.now` is an internal function that will return the current date.
- [User functions](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/user-functions/overview).

### [Example](terminology)

The following template contains 2 commands, calling 2 different internal functions:

```
Yesterday: 2025-04-29
Tomorrow: 2025-05-01

```

We'll see in the next part the syntax required to write some commands.

[Previous chapter](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/installation.md)

[Previous chapter](Atlas/Knowledge/tools/obsidian/Templater/Templater%20doc/installation.md)

