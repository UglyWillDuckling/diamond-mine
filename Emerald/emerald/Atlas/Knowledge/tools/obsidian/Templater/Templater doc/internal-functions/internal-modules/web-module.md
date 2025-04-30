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

# [Web Module](web-module)

This modules contains every internal function related to the web (making web requests).

- [Documentation](web-module)
  - [`tp.web.daily_quote()`](web-module)
  - [`tp.web.random_picture(size?: string, query?: string, include_size?: boolean)`](web-module)
  - [`tp.web.request(url: string, path?: string)`](web-module)
- [Examples](web-module)

## [Documentation](web-module)

Function documentation is using a specific syntax. More information [here](syntax).

### [`tp.web.daily_quote()`](web-module)

Retrieves and parses the daily quote from `https://github.com/Zachatoo/quotes-database` as a callout.

##### [Examples](web-module)

```javascript
// Daily quote
> [!quote] There is only one success � to be able to spend your life in your own way.
> — Christopher Morley

```

### [`tp.web.random_picture(size?: string, query?: string, include_size?: boolean)`](web-module)

Gets a random image from `https://unsplash.com/`.

##### [Arguments](web-module)

- `size`: Image size in the format `<width>x<height>`.

- `query`: Limits selection to photos matching a search term. Multiple search terms can be passed separated by a comma.

- `include_size`: Optional argument to include the specified size in the image link markdown. Defaults to false.


##### [Examples](web-module)

```javascript
// Random picture
![photo by Christian Lue(https://unsplash.com/@christianlue?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1671996610887-888bda279b38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2Mjl8&ixlib=rb-4.0.3&q=85)
// Random picture with size
![photo by Yoksel 🌿 Zok(https://unsplash.com/@yoksel?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1704049492642-230f8ec66166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2MzB8&ixlib=rb-4.0.3&q=85&w=200&h=200)
// Random picture with size and query
![photo by Aron Visuals(https://unsplash.com/@aronvisuals?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1536152470836-b943b246224c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2Mjl8&ixlib=rb-4.0.3&q=85&w=200&h=200)

```

### [`tp.web.request(url: string, path?: string)`](web-module)

Makes a HTTP request to the specified URL. Optionally, you can specify a path to extract specific data from the response.

##### [Arguments](web-module)

- `url`: The URL to which the HTTP request will be made.

- `path`: A path within the response JSON to extract specific data.


##### [Examples](web-module)

```javascript
// Simple request
[object Object]
// Request with path
delectus aut autem

```

## [Examples](web-module)

```javascript
// Daily quote
> [!quote] Well begun is half done.
> — Aristotle

// Random picture
![photo by Christian Lue(https://unsplash.com/@christianlue?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1671996610887-888bda279b38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2MzB8&ixlib=rb-4.0.3&q=85)
// Random picture with size
![photo by Christian Lue(https://unsplash.com/@christianlue?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1671996610887-888bda279b38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2MzF8&ixlib=rb-4.0.3&q=85&w=200&h=200)
// Random picture with size and query
![photo by Jeremy Bishop(https://unsplash.com/@jeremybishop?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2MzB8&ixlib=rb-4.0.3&q=85&w=200&h=200)

// Simple request
[object Object]
// Request with path
delectus aut autem

```

[Previous chapter](system-module)

[Previous chapter](system-module)

