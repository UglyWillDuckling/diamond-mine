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

# [Frontmatter Module](frontmatter-module.md)

This modules exposes all the frontmatter variables of a file as variables.

- [Documentation](frontmatter-module.md)
  - [`tp.frontmatter.<frontmatter_variable_name>`](frontmatter-module.md)
- [Examples](frontmatter-module.md)

## [Documentation](frontmatter-module.md)

### [`tp.frontmatter.<frontmatter_variable_name>`](frontmatter-module.md)

Retrieves the file's frontmatter variable value.

If your frontmatter variable name contains spaces, you can reference it using the bracket notation like so:

```
<% tp.frontmatter["variable name with spaces"] %>

```

## [Examples](frontmatter-module.md)

Let's say you have the following file:

```
---
alias: myfile
note type: seedling
---

file content

```

Then you can use the following template:

```
File's metadata alias: <% tp.frontmatter.alias %>
Note's type: <% tp.frontmatter["note type"] %>

```

For lists in frontmatter, you can use JavaScript array prototype methods to manipulate how the data is displayed.

```
---
categories:
  - book
  - movie
---

```

```
<% tp.frontmatter.categories.map(prop => `  - "${prop}"`).join("\n") %>

```

[Previous chapter](file-module.md)

[Previous chapter](file-module.md)

