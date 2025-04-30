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

# [Javascript Execution Command](execution-command)

This type of command allows us to execute JavaScript code.

With a JavaScript Execution command, we can pretty much do everything that JavaScript allows us to do. Some examples are given below.

We can still access the `tp` object and all the internal variables / functions from this type of command.

JavaScript Execution commands let you access global namespace variables. This means you can access things like `app` or `moment`.

## [Asynchronous functions](execution-command)

Some internal functions are asynchronous. When calling such functions inside a JavaScript execution command, don't forget to use the `await` keyword if necessary.

## [How to output a value from a JavaScript Execution Command ?](execution-command)

Sometimes, you may want to output something when using a JS execution command.

When our templating engine generates a replacement string using all of our commands results, it is stored in a variable named `tR`. This is the string that will contain the processed file content. You are allowed to access that variable from a JS execution command.

This means that, to output something from a JS execution command, you just need to append what you want to output to that `tR` string variable.

For example, the following command: `<%* tR += "test" %>` will output `test`.

### [Suggesters and Prompts](execution-command)

It is important to note that the `tp.system.prompt()` and `tp.system.suggester()` both require a `await` statement to save the value to a variable

## [Examples](execution-command)

Here are some examples of things you can do using JavaScript Execution Commands:

```javascript
<%* if (tp.file.title.startsWith("Hello")) { %>
This is a hello file !
<%* } else { %>
This is a normal file !
<%* } %>

<%* if (tp.frontmatter.type === "seedling") { %>
This is a seedling file !
<%* } else { %>
This is a normal file !
<%* } %>

<%* if (tp.file.tags.contains("#todo")) { %>
This is a todo file !
<%* } else { %>
This is a finished file !
<%* } %>

<%*
function log(msg) {
	console.log(msg);
}
%>
<%* log("Title: " + tp.file.title) %>

<%* tR += tp.file.content.replace(/stuff/, "things"); %>

```

[Previous chapter](dynamic-command)

[Previous chapter](dynamic-command)

