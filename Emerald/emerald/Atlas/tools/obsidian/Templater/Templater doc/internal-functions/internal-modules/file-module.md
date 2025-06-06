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

# [File Module](file-module.md)

This module contains every internal function related to files.

- [Documentation](file-module.md)
  - [`tp.file.content`](file-module.md)
  - [`tp.file.create_new(template: TFile ⎮ string, filename?: string, open_new: boolean = false, folder?: TFolder | string)`](file-module.md)
  - [`tp.file.creation_date(format: string = "YYYY-MM-DD HH:mm")`](file-module.md)
  - [`tp.file.cursor(order?: number)`](file-module.md)
  - [`tp.file.cursor_append(content: string)`](file-module.md)
  - [`tp.file.exists(filepath: string)`](file-module.md)
  - [`tp.file.find_tfile(filename: string)`](file-module.md)
  - [`tp.file.folder(absolute: boolean = false)`](file-module.md)
  - [`tp.file.include(include_link: string ⎮ TFile)`](file-module.md)
  - [`tp.file.last_modified_date(format: string = "YYYY-MM-DD HH:mm")`](file-module.md)
  - [`tp.file.move(new_path: string, file_to_move?: TFile)`](file-module.md)
  - [`tp.file.path(relative: boolean = false)`](file-module.md)
  - [`tp.file.rename(new_title: string)`](file-module.md)
  - [`tp.file.selection()`](file-module.md)
  - [`tp.file.tags`](file-module.md)
  - [`tp.file.title`](file-module.md)
- [Examples](file-module.md)

## [Documentation](file-module.md)

Function documentation is using a specific syntax. More information [here](syntax.md).

### [`tp.file.content`](file-module.md)

The string contents of the file at the time that Templater was executed. Manipulating this string will _not_ update the current file.

##### [Examples](file-module.md)

```javascript
// Retrieve file content
<% tp.file.content %>

```

### [`tp.file.create_new(template: TFile ⎮ string, filename?: string, open_new: boolean = false, folder?: TFolder | string)`](file-module.md)

Creates a new file using a specified template or with a specified content.

##### [Arguments](file-module.md)

- `template`: Either the template used for the new file content, or the file content as a string. If it is the template to use, you retrieve it with `tp.file.find_tfile(TEMPLATENAME)`.

- `filename`: The filename of the new file, defaults to "Untitled".

- `open_new`: Whether to open or not the newly created file. Warning: if you use this option, since commands are executed asynchronously, the file can be opened first and then other commands are appended to that new file and not the previous file.

- `folder`: The folder to put the new file in, defaults to Obsidian's default location. If you want the file to appear in a different folder, specify it with `"PATH/TO/FOLDERNAME"` or `app.vault.getAbstractFileByPath("PATH/TO/FOLDERNAME")`.


##### [Examples](file-module.md)

```javascript
// File creation
<%* await tp.file.create_new("MyFileContent", "MyFilename") %>
// File creation with template
<%* await tp.file.create_new(tp.file.find_tfile("MyTemplate"), "MyFilename") %>
// File creation and open created note
<%* await tp.file.create_new("MyFileContent", "MyFilename", true) %>
// File creation in current folder
<%* await tp.file.create_new("MyFileContent", "MyFilename", false, tp.file.folder(true)) %>
// File creation in specified folder with string path
<%* await tp.file.create_new("MyFileContent", "MyFilename", false, "Path/To/MyFolder") %>
// File creation in specified folder with TFolder
<%* await tp.file.create_new("MyFileContent", "MyFilename", false, app.vault.getAbstractFileByPath("MyFolder")) %>
// File creation and append link to current note
[[<% (await tp.file.create_new("MyFileContent", "MyFilename")).basename %>]]

```

### [`tp.file.creation_date(format: string = "YYYY-MM-DD HH:mm")`](file-module.md)

Retrieves the file's creation date.

##### [Arguments](file-module.md)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD HH:mm"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

##### [Examples](file-module.md)

```javascript
// File creation date
<% tp.file.creation_date() %>
// File creation date with format
<% tp.file.creation_date("dddd Do MMMM YYYY HH:mm") %>

```

### [`tp.file.cursor(order?: number)`](file-module.md)

Sets the cursor to this location after the template has been inserted.

You can navigate between the different cursors using the configured hotkey in Obsidian settings.

##### [Arguments](file-module.md)

- `order`: The order of the different cursors jump, e.g. it will jump from 1 to 2 to 3, and so on.
If you specify multiple tp.file.cursor with the same order, the editor will switch to multi-cursor.

##### [Examples](file-module.md)

```javascript
// File cursor
<% tp.file.cursor() %>
// File multi-cursor
<% tp.file.cursor(1) %>Content<% tp.file.cursor(1) %>

```

### [`tp.file.cursor_append(content: string)`](file-module.md)

Appends some content after the active cursor in the file.

##### [Arguments](file-module.md)

- `content`: The content to append after the active cursor.

##### [Examples](file-module.md)

```javascript
// File cursor append
<% tp.file.cursor_append("Some text") %>

```

### [`tp.file.exists(filepath: string)`](file-module.md)

Check to see if a file exists by it's file path. The full path to the file, relative to the Vault and containing the extension, must be provided.

##### [Arguments](file-module.md)

- `filepath`: The full file path of the file we want to check existence for.

##### [Examples](file-module.md)

```javascript
// File existence
<% await tp.file.exists("MyFolder/MyFile.md") %>
// File existence of current file
<% await tp.file.exists(tp.file.folder(true) + "/" + tp.file.title + ".md") %>

```

### [`tp.file.find_tfile(filename: string)`](file-module.md)

Search for a file and returns its `TFile` instance.

##### [Arguments](file-module.md)

- `filename`: The filename we want to search and resolve as a `TFile`.

##### [Examples](file-module.md)

```javascript
// File find TFile
<% tp.file.find_tfile("MyFile").basename %>

```

### [`tp.file.folder(absolute: boolean = false)`](file-module.md)

Retrieves the file's folder name.

##### [Arguments](file-module.md)

- `absolute`: If set to `true`, returns the vault-absolute path of the folder. If `false`, only returns the basename of the folder (the last part). Defaults to `false`.

##### [Examples](file-module.md)

```javascript
// File folder (Folder)
<% tp.file.folder() %>
// File folder with vault-absolute path (Path/To/Folder)
<% tp.file.folder(true) %>

```

### [`tp.file.include(include_link: string ⎮ TFile)`](file-module.md)

Includes the file's link content. Templates in the included content will be resolved.

##### [Arguments](file-module.md)

- `include_link`: The link to the file to include, e.g. `"[[MyFile]]"`, or a TFile object. Also supports sections or blocks inclusions.

##### [Examples](file-module.md)

```javascript
// File include
<% tp.file.include("[[Template1]]") %>
// File include TFile
<% tp.file.include(tp.file.find_tfile("MyFile")) %>
// File include section
<% tp.file.include("[[MyFile#Section1]]") %>
// File include block
<% tp.file.include("[[MyFile#^block1]]") %>

```

### [`tp.file.last_modified_date(format: string = "YYYY-MM-DD HH:mm")`](file-module.md)

Retrieves the file's last modification date.

##### [Arguments](file-module.md)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD HH:mm"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).

##### [Examples](file-module.md)

```javascript
// File last modified date
<% tp.file.last_modified_date() %>
// File last modified date with format
<% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm") %>

```

### [`tp.file.move(new_path: string, file_to_move?: TFile)`](file-module.md)

Moves the file to the desired vault location.

##### [Arguments](file-module.md)

- `new_path`: The new vault relative path of the file, without the file extension. Note: the new path needs to include the folder and the filename, e.g. `"/Notes/MyNote"`.

- `file_to_move`: The file to move, defaults to the current file.


##### [Examples](file-module.md)

```javascript
// File move
<% await tp.file.move("/A/B/" + tp.file.title) %>
// File move and rename
<% await tp.file.move("/A/B/NewTitle") %>

```

### [`tp.file.path(relative: boolean = false)`](file-module.md)

Retrieves the file's absolute path on the system.

##### [Arguments](file-module.md)

- `relative`: If set to `true`, only retrieves the vault's relative path.

##### [Examples](file-module.md)

```javascript
// File path
<% tp.file.path() %>
// File relative path (relative to vault root)
<% tp.file.path(true) %>

```

### [`tp.file.rename(new_title: string)`](file-module.md)

Renames the file (keeps the same file extension).

##### [Arguments](file-module.md)

- `new_title`: The new file title.

##### [Examples](file-module.md)

```javascript
// File rename
<% await tp.file.rename("MyNewName") %>
// File append a 2 to the file name
<% await tp.file.rename(tp.file.title + "2") %>

```

### [`tp.file.selection()`](file-module.md)

Retrieves the active file's text selection.

##### [Examples](file-module.md)

```javascript
// File selection
<% tp.file.selection() %>

```

### [`tp.file.tags`](file-module.md)

Retrieves the file's tags (array of string).

##### [Examples](file-module.md)

```javascript
// File tags
<% tp.file.tags %>

```

### [`tp.file.title`](file-module.md)

Retrieves the file's title.

##### [Examples](file-module.md)

```javascript
// File title
<% tp.file.title %>
// Strip the Zettelkasten ID of title (if space separated)
<% tp.file.title.split(" ")[1] %>

```

## [Examples](file-module.md)

```javascript
// Retrieve file content
<% tp.file.content %>

// File creation
<%* await tp.file.create_new("MyFileContent", "MyFilename") %>
// File creation with template
<%* await tp.file.create_new(tp.file.find_tfile("MyTemplate"), "MyFilename") %>
// File creation and open created note
<%* await tp.file.create_new("MyFileContent", "MyFilename", true) %>
// File creation in current folder
<%* await tp.file.create_new("MyFileContent", "MyFilename", false, tp.file.folder(true)) %>
// File creation in specified folder with string path
<%* await tp.file.create_new("MyFileContent", "MyFilename", false, "Path/To/MyFolder") %>
// File creation in specified folder with TFolder
<%* await tp.file.create_new("MyFileContent", "MyFilename", false, app.vault.getAbstractFileByPath("MyFolder")) %>
// File creation and append link to current note
[[<% (await tp.file.create_new("MyFileContent", "MyFilename")).basename %>]]

// File creation date
<% tp.file.creation_date() %>
// File creation date with format
<% tp.file.creation_date("dddd Do MMMM YYYY HH:mm") %>

// File cursor
<% tp.file.cursor() %>
// File multi-cursor
<% tp.file.cursor(1) %>Content<% tp.file.cursor(1) %>

// File cursor append
<% tp.file.cursor_append("Some text") %>

// File existence
<% await tp.file.exists("MyFolder/MyFile.md") %>
// File existence of current file
<% await tp.file.exists(tp.file.folder(true) + "/" + tp.file.title + ".md") %>

// File find TFile
<% tp.file.find_tfile("MyFile").basename %>

// File folder (Folder)
<% tp.file.folder() %>
// File folder with vault-absolute path (Path/To/Folder)
<% tp.file.folder(true) %>

// File include
<% tp.file.include("[[Template1]]") %>
// File include TFile
<% tp.file.include(tp.file.find_tfile("MyFile")) %>
// File include section
<% tp.file.include("[[MyFile#Section1]]") %>
// File include block
<% tp.file.include("[[MyFile#^block1]]") %>

// File last modified date
<% tp.file.last_modified_date() %>
// File last modified date with format
<% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm") %>

// File move
<% await tp.file.move("/A/B/" + tp.file.title) %>
// File move and rename
<% await tp.file.move("/A/B/NewTitle") %>

// File path
<% tp.file.path() %>
// File relative path (relative to vault root)
<% tp.file.path(true) %>

// File rename
<% await tp.file.rename("MyNewName") %>
// File append a 2 to the file name
<% await tp.file.rename(tp.file.title + "2") %>

// File selection
<% tp.file.selection() %>

// File tags
<% tp.file.tags %>

// File title
<% tp.file.title %>
// Strip the Zettelkasten ID of title (if space separated)
<% tp.file.title.split(" ")[1] %>

```

[Previous chapter](date-module.md)

[Previous chapter](date-module.md)

