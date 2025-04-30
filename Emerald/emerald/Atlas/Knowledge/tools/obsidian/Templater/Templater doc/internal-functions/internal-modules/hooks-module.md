1. [**1.** Introduction](Pro%20Git%20-%20Scott%20Chacon/Introduction.md)
1. [**1.1.** Installation](Atlas/Knowledge/tools/dev/Zellij/zellijdoc/installation.md)
2. [**1.2.** Terminology](terminology)
3. [**1.3.** Syntax](syntax)
4. [**1.4.** Settings](settings)
5. [**1.5.** FAQ](Atlas/Knowledge/tools/dev/Zellij/zellijdoc/faq.md)
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

# [Hooks Module](hooks-module)

This module exposes hooks that allow you to execute code when a Templater event occurs.

- [Documentation](hooks-module)
  - [`tp.hooks.on_all_templates_executed(callback_function: () => any)`](hooks-module)
- [Examples](hooks-module)

## [Documentation](hooks-module)

Function documentation is using a specific syntax. More information [here](syntax).

### [`tp.hooks.on_all_templates_executed(callback_function: () => any)`](hooks-module)

Hooks into when all actively running templates have finished executing. Most of the time this will be a single template, unless you are using `tp.file.include` or `tp.file.create_new`.

Multiple invokations of this method will have their callback functions run in parallel.

##### [Arguments](hooks-module)

- `callback_function`: Callback function that will be executed when all actively running templates have finished executing.

## [Examples](hooks-module)

```javascript
// Update frontmatter after template finishes executing

// Run a command from another plugin that modifies the current file, after Templater has updated the file

```

[Previous chapter](frontmatter-module)

[Previous chapter](frontmatter-module)

