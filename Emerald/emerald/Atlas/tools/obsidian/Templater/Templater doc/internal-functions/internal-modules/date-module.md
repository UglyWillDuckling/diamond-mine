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

# [Date Module](date-module.md)

This module contains every internal function related to dates.

- [Documentation](date-module.md)
  - [`tp.date.now(format: string = "YYYY-MM-DD", offset?: number⎮string, reference?: string, reference_format?: string)`](date-module.md)
  - [`tp.date.tomorrow(format: string = "YYYY-MM-DD")`](date-module.md)
  - [`tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)`](date-module.md)
  - [`tp.date.yesterday(format: string = "YYYY-MM-DD")`](date-module.md)
- [Moment.js](date-module.md)
- [Examples](date-module.md)

## [Documentation](date-module.md)

Function documentation is using a specific syntax. More information [here](syntax.md).

### [`tp.date.now(format: string = "YYYY-MM-DD", offset?: number⎮string, reference?: string, reference_format?: string)`](date-module.md)

Retrieves the date.

##### [Arguments](date-module.md)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

- `offset`: Duration to offset the date from. If a number is provided, duration will be added to the date in days. You can also specify the offset as a string using the ISO 8601 format.

- `reference`: The date referential, e.g. set this to the note's title.

- `reference_format`: The format for the reference date. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).


##### [Examples](date-module.md)

```javascript
// Date now
<% tp.date.now() %>
// Date now with format
<% tp.date.now("Do MMMM YYYY") %>
// Last week
<% tp.date.now("YYYY-MM-DD", -7) %>
// Next week
<% tp.date.now("YYYY-MM-DD", 7) %>
// Last month
<% tp.date.now("YYYY-MM-DD", "P-1M") %>
// Next year
<% tp.date.now("YYYY-MM-DD", "P1Y") %>
// File's title date + 1 day (tomorrow)
<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>
// File's title date - 1 day (yesterday)
<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>

```

### [`tp.date.tomorrow(format: string = "YYYY-MM-DD")`](date-module.md)

Retrieves tomorrow's date.

##### [Arguments](date-module.md)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

##### [Examples](date-module.md)

```javascript
// Date tomorrow
<% tp.date.tomorrow() %>
// Date tomorrow with format
<% tp.date.tomorrow("Do MMMM YYYY") %>

```

### [`tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)`](date-module.md)

##### [Arguments](date-module.md)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

- `weekday`: Week day number. If the locale assigns Monday as the first day of the week, `0` will be Monday, `-7` will be last week's day.

- `reference`: The date referential, e.g. set this to the note's title.

- `reference_format`: The format for the reference date. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).


##### [Examples](date-module.md)

```javascript
// This week's Monday
<% tp.date.weekday("YYYY-MM-DD", 0) %>
// Next Monday
<% tp.date.weekday("YYYY-MM-DD", 7) %>
// File's title Monday
<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
// File's title previous Monday
<% tp.date.weekday("YYYY-MM-DD", -7, tp.file.title, "YYYY-MM-DD") %>

```

### [`tp.date.yesterday(format: string = "YYYY-MM-DD")`](date-module.md)

Retrieves yesterday's date.

##### [Arguments](date-module.md)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

##### [Examples](date-module.md)

```javascript
// Date yesterday
<% tp.date.yesterday() %>
// Date yesterday with format
<% tp.date.yesterday("Do MMMM YYYY") %>

```

## [Moment.js](date-module.md)

Templater gives you access to the `moment` object, with all of its functionalities.

More information on moment.js [here](https://momentjs.com/docs/#/displaying/).

##### [Examples](date-module.md)

```javascript
// Date now
<% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
// Get start of month from note title
<% moment(tp.file.title, "YYYY-MM-DD").startOf("month").format("YYYY-MM-DD") %>
// Get end of month from note title
<% moment(tp.file.title, "YYYY-MM-DD").endOf("month").format("YYYY-MM-DD") %>

```

## [Examples](date-module.md)

```javascript
// Date now
<% tp.date.now() %>
// Date now with format
<% tp.date.now("Do MMMM YYYY") %>
// Last week
<% tp.date.now("YYYY-MM-DD", -7) %>
// Next week
<% tp.date.now("YYYY-MM-DD", 7) %>
// Last month
<% tp.date.now("YYYY-MM-DD", "P-1M") %>
// Next year
<% tp.date.now("YYYY-MM-DD", "P1Y") %>
// File's title date + 1 day (tomorrow)
<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>
// File's title date - 1 day (yesterday)
<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>

// Date tomorrow
<% tp.date.tomorrow() %>
// Date tomorrow with format
<% tp.date.tomorrow("Do MMMM YYYY") %>

// This week's Monday
<% tp.date.weekday("YYYY-MM-DD", 0) %>
// Next Monday
<% tp.date.weekday("YYYY-MM-DD", 7) %>
// File's title Monday
<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
// File's title previous Monday
<% tp.date.weekday("YYYY-MM-DD", -7, tp.file.title, "YYYY-MM-DD") %>

// Date yesterday
<% tp.date.yesterday() %>
// Date yesterday with format
<% tp.date.yesterday("Do MMMM YYYY") %>

```

[Previous chapter](config-module.md)

[Previous chapter](config-module.md)

