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

# [Whitespace Control](whitespace-control.md)

By default, **commands** in Templater are not removing any newlines. Commands are replaced with their values and that's it.

It can sometimes be useful to have some whitespace control after commands are inserted, which is exactly what this command utility offers.

Let's have an example. The following template:

```
<%* if (tp.file.title == "MyFile" ) { %>
This is my file!
<%* } else { %>
This isn't my file!
<%* } %>
Some content ...

```

Will produce the following output if the condition is false (the same happens when it's true), notice the blank lines:

```

This isn't my file!

Some content ...

```

You may want to remove the blank lines produced by the **execution commands**, that do not produce any output.

A specific syntax exists for whitespace control:

- An underscore `_` at the **beginning** of a tag ( `<%_`) will trim **all** whitespace **before** the command
- An underscore `_` at the **end** of a tag ( `_%>`) will trim **all** whitespace **after** the command
- A dash `-` at the **beginning** of a tag ( `<%-`) will trim **one** newline **before** the command
- A dash `-` at the **end** of a tag ( `-%>`) will trim **one** newline **after** the command.

In our example, to fix our template to remove the blank lines, we would use the following template (notice the dashes `-` at the end of the tags), to remove the blank newlines **after** the execution commands:

```
<%* if (tp.file.title == "MyFile" ) { -%>
This is my file!
<%* } else { -%>
This isn't my file!
<%* } -%>
Some content ...

```

Which would produce the following output:

```
This isn't my file!
Some content ...

```

[Previous chapter](execution-command.md)

[Previous chapter](execution-command.md)

