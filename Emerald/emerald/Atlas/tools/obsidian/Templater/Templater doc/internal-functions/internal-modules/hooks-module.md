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

# [Hooks Module](hooks-module.md)

This module exposes hooks that allow you to execute code when a Templater event occurs.

- [Documentation](hooks-module.md)
  - [`tp.hooks.on_all_templates_executed(callback_function: () => any)`](hooks-module.md)
- [Examples](hooks-module.md)

## [Documentation](hooks-module.md)

Function documentation is using a specific syntax. More information [here](syntax.md).

### [`tp.hooks.on_all_templates_executed(callback_function: () => any)`](hooks-module.md)

Hooks into when all actively running templates have finished executing. Most of the time this will be a single template, unless you are using `tp.file.include` or `tp.file.create_new`.

Multiple invokations of this method will have their callback functions run in parallel.

##### [Arguments](hooks-module.md)

- `callback_function`: Callback function that will be executed when all actively running templates have finished executing.

## [Examples](hooks-module.md)

```javascript
// Update frontmatter after template finishes executing

// Run a command from another plugin that modifies the current file, after Templater has updated the file

```

[Previous chapter](frontmatter-module.md)

[Previous chapter](frontmatter-module.md)

