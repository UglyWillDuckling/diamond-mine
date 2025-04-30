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

# [System Module](system-module)

This module contains system related functions.

- [Documentation](system-module)
  - [`tp.system.clipboard()`](system-module)
  - [`tp.system.prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)`](system-module)
  - [`tp.system.suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)`](system-module)
- [Examples](system-module)

## [Documentation](system-module)

Function documentation is using a specific syntax. More information [here](syntax).

### [`tp.system.clipboard()`](system-module)

Retrieves the clipboard's content.

##### [Examples](system-module)

```javascript
// Clipboard
<% tp.system.clipboard() %>

```

### [`tp.system.prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)`](system-module)

Spawns a prompt modal and returns the user's input.

##### [Arguments](system-module)

- `prompt_text`: Text placed above the input field.

- `default_value`: A default value for the input field.

- `throw_on_cancel`: Throws an error if the prompt is canceled, instead of returning a `null` value.

- `multiline`: If set to `true`, the input field will be a multiline textarea. Defaults to `false`.


##### [Examples](system-module)

```javascript
// Prompt
<% tp.system.prompt("Please enter a value") %>
// Prompt with default value
<% tp.system.prompt("What is your mood today?", "happy") %>
// Multiline prompt
<% tp.system.prompt("What is your mood today?", null, false, true) %>

```

### [`tp.system.suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)`](system-module)

Spawns a suggester prompt and returns the user's chosen item.

##### [Arguments](system-module)

- `text_items`: Array of strings representing the text that will be displayed for each item in the suggester prompt. This can also be a function that maps an item to its text representation.

- `items`: Array containing the values of each item in the correct order.

- `throw_on_cancel`: Throws an error if the prompt is canceled, instead of returning a `null` value.

- `placeholder`: Placeholder string of the prompt.

- `limit`: Limit the number of items rendered at once (useful to improve performance when displaying large lists).


##### [Examples](system-module)

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

## [Examples](system-module)

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

[Previous chapter](obsidian-module)

[Previous chapter](obsidian-module)

