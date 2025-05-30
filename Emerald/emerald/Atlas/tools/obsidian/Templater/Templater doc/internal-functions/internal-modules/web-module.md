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

# [Web Module](web-module.md)

This modules contains every internal function related to the web (making web requests).

- [Documentation](web-module.md)
  - [`tp.web.daily_quote()`](web-module.md)
  - [`tp.web.random_picture(size?: string, query?: string, include_size?: boolean)`](web-module.md)
  - [`tp.web.request(url: string, path?: string)`](web-module.md)
- [Examples](web-module.md)

## [Documentation](web-module.md)

Function documentation is using a specific syntax. More information [here](syntax.md).

### [`tp.web.daily_quote()`](web-module.md)

Retrieves and parses the daily quote from `https://github.com/Zachatoo/quotes-database` as a callout.

##### [Examples](web-module.md)

```javascript
// Daily quote
> [!quote] There is only one success � to be able to spend your life in your own way.
> — Christopher Morley

```

### [`tp.web.random_picture(size?: string, query?: string, include_size?: boolean)`](web-module.md)

Gets a random image from `https://unsplash.com/`.

##### [Arguments](web-module.md)

- `size`: Image size in the format `<width>x<height>`.

- `query`: Limits selection to photos matching a search term. Multiple search terms can be passed separated by a comma.

- `include_size`: Optional argument to include the specified size in the image link markdown. Defaults to false.


##### [Examples](web-module.md)

```javascript
// Random picture
![photo by Christian Lue(https://unsplash.com/@christianlue?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1671996610887-888bda279b38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2Mjl8&ixlib=rb-4.0.3&q=85)
// Random picture with size
![photo by Yoksel 🌿 Zok(https://unsplash.com/@yoksel?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1704049492642-230f8ec66166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2MzB8&ixlib=rb-4.0.3&q=85&w=200&h=200)
// Random picture with size and query
![photo by Aron Visuals(https://unsplash.com/@aronvisuals?utm_source=templater_proxy&utm_medium=referral) on Unsplash](https://images.unsplash.com/photo-1536152470836-b943b246224c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDYwMDc2Mjl8&ixlib=rb-4.0.3&q=85&w=200&h=200)

```

### [`tp.web.request(url: string, path?: string)`](web-module.md)

Makes a HTTP request to the specified URL. Optionally, you can specify a path to extract specific data from the response.

##### [Arguments](web-module.md)

- `url`: The URL to which the HTTP request will be made.

- `path`: A path within the response JSON to extract specific data.


##### [Examples](web-module.md)

```javascript
// Simple request
[object Object]
// Request with path
delectus aut autem

```

## [Examples](web-module.md)

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

[Previous chapter](system-module.md)

[Previous chapter](system-module.md)

