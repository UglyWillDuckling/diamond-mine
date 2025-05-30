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

# [Syntax](syntax.md)

[Templater](https://github.com/SilentVoid13/Templater) uses a custom templating engine ( [rusty\_engine](https://github.com/SilentVoid13/rusty_engine)) syntax to declare a command. You may need a bit of time to get used to it, but once you get the idea, the syntax is not that hard.

All of Templater's functions are JavaScript objects that are invoked using a **command**.

## [Command syntax](syntax.md)

A command **must** have both an opening tag `<%` and a closing tag `%>`.

A complete command using the `tp.date.now` internal function would be: `<% tp.date.now() %>`

## [Function syntax](syntax.md)

### [Objects hierarchy](syntax.md)

All of Templater's functions, whether it's an internal function or a user function, are available under the `tp` object. You could say that all our functions are children of the `tp` object. To access the "child" of an object, we have to use the dot notation `.`

This means that a Templater function invocation will always start with `tp.<something>`

#### [Function invocation](syntax.md)

To invoke a function, we need to use a syntax specific to functions calls: appending an opening and a closing parenthesis after the function name.

As an example, we would use `tp.date.now()` to invoke the `tp.date.now` internal function.

A function can have arguments and optional arguments. They are placed between the opening and the closing parenthesis, like so:

```javascript
tp.date.now(arg1_value, arg2_value, arg3_value, ...)

```

All arguments must be passed in the correct order.

The arguments of a function can have different **types**. Here is a non-exhaustive list of the possible types of a function:

- A `string` type means the value must be placed within simple or double quotes ( `"value"` or `'value'`)
- A `number` type means the value must be an integer ( `15`, `-5`, ...)
- A `boolean` type means the value must be either `true` or `false` (completely lower case), and nothing else.

The type of an argument must be respected when calling a function, or it won't work.

### [Function documentation syntax](syntax.md)

The documentation for the internal functions of Templater are using the following syntax:

```javascript
tp.<my_function>(arg1_name: type, arg2_name?: type, arg3_name: type = <default_value>, arg4_name: type1|type2, ...)

```

Where:

- `arg_name` represents a **symbolic** name for the argument, to understand what it is.
- `type` represents the expected type for the argument. This type must be respected when calling the internal function, or it will throw an error.

If an argument is optional, it will be appended with a question mark `?`, e.g. `arg2_name?: type`

If an argument has a default value, it will be specified using an equal sign `=`, e.g. `arg3_name: type = <default_value>`.

If an argument can have different types, it will be specified using a pipe `|`, e.g. `arg4_name: type1|type2`

#### [Syntax warning](syntax.md)

Please note that this syntax is for documentation purposes only, to be able to understand what arguments the function expects.

You mustn't specify the name nor the type nor the default value of an argument when calling a function. Only the value of the arguments are required, as explained [here](syntax.md)

##### [Example](syntax.md)

Let's take the `tp.date.now` internal function documentation as an example:

```js
tp.date.now(format?: string = "YYYY-MM-DD", offset?: number|string, reference?: string, reference_format?: string)
```

This internal function has 4 optional arguments:

- a format of type `string`, with a default value of `"YYYY-MM-DD"`.
- an offset of type `number` or of type `string`.
- a reference of type `string` .
- a reference\_format of type `string` .

That means that **valid invocations** for this internal function are:

- `<% tp.date.now() %>`
- `<% tp.date.now("YYYY-MM-DD", 7) %>`
- `<% tp.date.now("YYYY-MM-DD", 7, "2021-04-09", "YYYY-MM-DD") %>`
- `<% tp.date.now("dddd, MMMM Do YYYY", 0, tp.file.title, "YYYY-MM-DD") %>` \*Assuming the file name is of the format: "YYYY-MM-DD"

On the other hand, **invalid invocations** are:

- `tp.date.now(format: string = "YYYY-MM-DD")`
- `tp.date.now(format: string = "YYYY-MM-DD", offset?: 0)`

[Previous chapter](terminology.md)

[Previous chapter](terminology.md)

