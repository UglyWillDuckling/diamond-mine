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

# [System Module](system-module.md)

This module contains system related functions.

- [Documentation](system-module.md)
  - [`tp.system.clipboard()`](system-module.md)
  - [`tp.system.prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)`](system-module.md)
  - [`tp.system.suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)`](system-module.md)
- [Examples](system-module.md)

## [Documentation](system-module.md)

Function documentation is using a specific syntax. More information [here](syntax.md).

### [`tp.system.clipboard()`](system-module.md)

Retrieves the clipboard's content.

##### [Examples](system-module.md)

```javascript
// Clipboard
<% tp.system.clipboard() %>

```

### [`tp.system.prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)`](system-module.md)

Spawns a prompt modal and returns the user's input.

##### [Arguments](system-module.md)

- `prompt_text`: Text placed above the input field.

- `default_value`: A default value for the input field.

- `throw_on_cancel`: Throws an error if the prompt is canceled, instead of returning a `null` value.

- `multiline`: If set to `true`, the input field will be a multiline textarea. Defaults to `false`.


##### [Examples](system-module.md)

```javascript
// Prompt
<% tp.system.prompt("Please enter a value") %>
// Prompt with default value
<% tp.system.prompt("What is your mood today?", "happy") %>
// Multiline prompt
<% tp.system.prompt("What is your mood today?", null, false, true) %>

```

### [`tp.system.suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)`](system-module.md)

Spawns a suggester prompt and returns the user's chosen item.

##### [Arguments](system-module.md)

- `text_items`: Array of strings representing the text that will be displayed for each item in the suggester prompt. This can also be a function that maps an item to its text representation.

- `items`: Array containing the values of each item in the correct order.

- `throw_on_cancel`: Throws an error if the prompt is canceled, instead of returning a `null` value.

- `placeholder`: Placeholder string of the prompt.

- `limit`: Limit the number of items rendered at once (useful to improve performance when displaying large lists).


##### [Examples](system-module.md)

```javascript
// Suggester
<% tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]) %>
// Suggester with mapping function (same as above example)
<% tp.system.suggester((item) => item, ["Happy", "Sad", "Confused"]) %>
// Suggester for files
[[<% (await tp.system.suggester((item) => item.basename, app.vault.getMarkdownFiles())).basename %>]]
// Suggester for tags
<% tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>

```

## [Examples](system-module.md)

```javascript
// Clipboard
<% tp.system.clipboard() %>

// Prompt
<% tp.system.prompt("Please enter a value") %>
// Prompt with default value
<% tp.system.prompt("What is your mood today?", "happy") %>
// Multiline prompt
<% tp.system.prompt("What is your mood today?", null, false, true) %>

// Suggester
<% tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]) %>
// Suggester with mapping function (same as above example)
<% tp.system.suggester((item) => item, ["Happy", "Sad", "Confused"]) %>
// Suggester for files
[[<% (await tp.system.suggester((item) => item.basename, app.vault.getMarkdownFiles())).basename %>]]
// Suggester for tags
<% tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>

```

[Previous chapter](obsidian-module.md)

[Previous chapter](obsidian-module.md)

