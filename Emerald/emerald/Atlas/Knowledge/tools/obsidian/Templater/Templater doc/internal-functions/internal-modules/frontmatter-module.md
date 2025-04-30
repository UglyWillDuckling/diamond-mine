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

# [Frontmatter Module](frontmatter-module)

This modules exposes all the frontmatter variables of a file as variables.

- [Documentation](frontmatter-module)
  - [`tp.frontmatter.<frontmatter_variable_name>`](frontmatter-module)
- [Examples](frontmatter-module)

## [Documentation](frontmatter-module)

### [`tp.frontmatter.<frontmatter_variable_name>`](frontmatter-module)

Retrieves the file's frontmatter variable value.

If your frontmatter variable name contains spaces, you can reference it using the bracket notation like so:

```
<% tp.frontmatter["variable name with spaces"] %>

```

## [Examples](frontmatter-module)

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

[Previous chapter](file-module)

[Previous chapter](file-module)

