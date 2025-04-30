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

# [Date Module](date-module)

This module contains every internal function related to dates.

- [Documentation](date-module)
  - [`tp.date.now(format: string = "YYYY-MM-DD", offset?: number⎮string, reference?: string, reference_format?: string)`](date-module)
  - [`tp.date.tomorrow(format: string = "YYYY-MM-DD")`](date-module)
  - [`tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)`](date-module)
  - [`tp.date.yesterday(format: string = "YYYY-MM-DD")`](date-module)
- [Moment.js](date-module)
- [Examples](date-module)

## [Documentation](date-module)

Function documentation is using a specific syntax. More information [here](syntax).

### [`tp.date.now(format: string = "YYYY-MM-DD", offset?: number⎮string, reference?: string, reference_format?: string)`](date-module)

Retrieves the date.

##### [Arguments](date-module)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

- `offset`: Duration to offset the date from. If a number is provided, duration will be added to the date in days. You can also specify the offset as a string using the ISO 8601 format.

- `reference`: The date referential, e.g. set this to the note's title.

- `reference_format`: The format for the reference date. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).


##### [Examples](date-module)

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

### [`tp.date.tomorrow(format: string = "YYYY-MM-DD")`](date-module)

Retrieves tomorrow's date.

##### [Arguments](date-module)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

##### [Examples](date-module)

```javascript
// Date tomorrow
<% tp.date.tomorrow() %>
// Date tomorrow with format
<% tp.date.tomorrow("Do MMMM YYYY") %>

```

### [`tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)`](date-module)

##### [Arguments](date-module)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

- `weekday`: Week day number. If the locale assigns Monday as the first day of the week, `0` will be Monday, `-7` will be last week's day.

- `reference`: The date referential, e.g. set this to the note's title.

- `reference_format`: The format for the reference date. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).


##### [Examples](date-module)

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

### [`tp.date.yesterday(format: string = "YYYY-MM-DD")`](date-module)

Retrieves yesterday's date.

##### [Arguments](date-module)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

##### [Examples](date-module)

```javascript
// Date yesterday
<% tp.date.yesterday() %>
// Date yesterday with format
<% tp.date.yesterday("Do MMMM YYYY") %>

```

## [Moment.js](date-module)

Templater gives you access to the `moment` object, with all of its functionalities.

More information on moment.js [here](https://momentjs.com/docs/#/displaying/).

##### [Examples](date-module)

```javascript
// Date now
<% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
// Get start of month from note title
<% moment(tp.file.title, "YYYY-MM-DD").startOf("month").format("YYYY-MM-DD") %>
// Get end of month from note title
<% moment(tp.file.title, "YYYY-MM-DD").endOf("month").format("YYYY-MM-DD") %>

```

## [Examples](date-module)

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

[Previous chapter](config-module)

[Previous chapter](config-module)

