---
related:
  - "[[Footnote]]"
  - "[[footnotes example]]"
  - "[[Obsidian Footnotes Exploration]]"
---
Learn how to apply basic formatting to your notes, using [Markdown](https://daringfireball.net/projects/markdown/). For more advanced formatting syntax, refer to [Advanced formatting syntax](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax).

## Paragraphs

To create paragraphs in Markdown, use a **blank line** to separate blocks of text. Each block of text separated by a blank line is treated as a distinct paragraph.

```
This is a paragraph.

This is another paragraph.
```

This is a paragraph.

This is another paragraph.

A blank line between lines of text creates separate paragraphs. This is the default behavior in Markdown.

Multiple adjacent blank spaces within and between paragraphs collapse into a single space when displayed in [Reading view](https://help.obsidian.md/Editing+and+formatting/Edit+and+preview+Markdown#Editor%20views) or on [Obsidian Publish](https://help.obsidian.md/Obsidian+Publish/Introduction+to+Obsidian+Publish) sites.

```
Multiple          adjacent          spaces



and multiple newlines between paragraphs.
```

> Multiple adjacent spaces
> 
> and multiple newlines between paragraphs.

If you want to prevent spaces from collapsing or add multiple blank spaces, you can use the `&nbsp;` (non-breaking space) or `<br>` (line break) HTML tags.

### Line breaks

By default in Obsidian, pressing `Enter` once will create a new line in your note, but this is treated as a _continuation_ of the same paragraph in the rendered output, following typical Markdown behavior. To insert a line break _within_ a paragraph without starting a new paragraph, you can either:

- Add **two spaces** at the end of a line before pressing `Enter`, or
- Use the shortcut `Shift + Enter` to directly insert a line break.

Why don't multiple `Enter` presses create more line breaks in reading view?

Obsidian includes a **Strict Line Breaks** setting, which makes Obsidian follow the standard Markdown specification for line breaks.

To enable this feature:

1. Open **Settings**.
2. Go to the **Editor** tab.
3. Enable **Strict Line Breaks**.

When **Strict Line Breaks** is enabled in Obsidian, line breaks have three distinct behaviors depending on how the lines are separated:

**Single return with no spaces**: A single `Enter` with no trailing spaces will combine the two separate lines into a single line when rendered.

Renders as:

line one line two

**Single return with two or more trailing spaces**: If you add two or more spaces at the end of the first line before pressing `Enter`, the two lines remain part of the same paragraph, but are broken by a line break (HTML `<br>` element). We'll use two underscores to stand in for spaces in this example.

Renders as:

**Double return (with or without trailing spaces)**: Pressing `Enter` twice (or more) separates the lines into two distinct paragraphs (HTML `<p>` elements), regardless of whether you add spaces at the end of the first line.

Renders as:

## Headings

To create a heading, add up to six `#` symbols before your heading text. The number of `#` symbols determines the size of the heading.

```
# This is a heading 1
## This is a heading 2
### This is a heading 3
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
```

## This is a heading 1

## This is a heading 2

### This is a heading 3

#### This is a heading 4

##### This is a heading 5

###### This is a heading 6

## Bold, italics, highlights

|Style|Syntax|Example|Output|
|---|---|---|---|
|Bold|`** **` or `__ __`|`**Bold text**`|**Bold text**|
|Italic|`* *` or `_ _`|`*Italic text*`|_Italic text_|
|Strikethrough|`~~ ~~`|`~~Striked out text~~`|~~Striked out text~~|
|Highlight|`== ==`|`==Highlighted text==`|==Highlighted text==|
|Bold and nested italic|`** **` and `_ _`|`**Bold text and _nested italic_ text**`|**Bold text and _nested italic_ text**|
|Bold and italic|`*** ***` or `___ ___`|`***Bold and italic text***`|**_Bold and italic text_**|

Formatting can be forced to display in plain text by adding a backslash `\` in front of it.

**This line will not be bold**

```
\*\*This line will not be bold\*\*
```

*_This line will be italic and show the asterisks_*

```
\**This line will be italic and show the asterisks*\*
```

## Internal links

Obsidian supports two formats for [internal links](https://help.obsidian.md/Linking+notes+and+files/Internal+links) between notes:

- Wikilink: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

## External links

If you want to link to an external URL, you can create an inline link by surrounding the link text in brackets (`[ ]`), and then the URL in parentheses (`( )`).

```
[Obsidian Help](https://help.obsidian.md)
```

You can also create external links to files in other vaults, by linking to an [Obsidian URI](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI).

```
[Note](obsidian://open?vault=MainVault&file=Note.md)
```

### Escape blank spaces in links

If your URL contains blank spaces, you must escape them by replacing them with `%20`.

```
[My Note](obsidian://open?vault=MainVault&file=My%20Note.md)
```

You can also escape the URL by wrapping it with angled brackets (`< >`).

```
[My Note](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## External images

You can add images with external URLs, by adding a `!` symbol before an [external link](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#External%20links).

```
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

You can change the image dimensions, by adding `|640x480` to the link destination, where 640 is the width and 480 is the height.

```
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

If you only specify the width, the image scales according to its original aspect ratio. For example:

```
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

## Quotes

You can quote text by adding a `>` symbols before the text.

```
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

- Doug Engelbart, 1961

You can turn your quote into a [callout](https://help.obsidian.md/Editing+and+formatting/Callouts) by adding `[!info]` as the first line in a quote.

## Lists

You can create an unordered list by adding a `-`, `*`, or `+` before the text.

```
- First list item
- Second list item
- Third list item
```

- First list item
- Second list item
- Third list item

To create an ordered list, start each line with a number followed by a `.` symbol.

```
1. First list item
2. Second list item
3. Third list item
```

1. First list item
2. Second list item
3. Third list item

### Task lists

To create a task list, start each list item with a hyphen and space followed by `[ ]`.

```
- [x] This is a completed task.
- [ ] This is an incomplete task.
```

- This is a completed task.
- This is an incomplete task.

You can toggle a task in Reading view by selecting the checkbox.

You can use any character inside the brackets to mark it as complete.

```
- [x] Milk
- [?] Eggs
- [-] Eggs
```

- Milk
- Eggs
- Eggs

### Nesting lists

You can nest any type of list—ordered, unordered, or task lists—under any other type of list.

To create a nested list, indent one or more list items. You can mix list types within a nested structure:

```
1. First list item
   1. Ordered nested list item
2. Second list item
   - Unordered nested list item
```

1. First list item
    1. Ordered nested list item
2. Second list item
    - Unordered nested list item

Similarly, you can create a nested task list by indenting one or more list items:

```
- [ ] Task item 1
	- [ ] Subtask 1
- [ ] Task item 2
	- [ ] Subtask 1
```

- Task item 1
    - Subtask 1
- Task item 2
    - Subtask 1

Use `Tab` or `Shift+Tab` to indent or unindent selected list items to easily organize them.

## Horizontal rule

You can use three or more stars `***`, hyphens `---`, or underscore `___` on its own line to add a horizontal bar. You can also separate symbols using spaces.

```
***
****
* * *
---
----
- - -
___
____
_ _ _
```

## Code

You can format code both inline within a sentence, or in its own block.

### Inline code

You can format code within a sentence using single backticks.

```
Text inside `backticks` on a line will be formatted like code.
```

Text inside `backticks` on a line will be formatted like code.

If you want to put backticks in an inline code block, surround it with double backticks like so: inline ``code with a backtick ` inside``.

### Code blocks

To format a block of code, surround the code with triple backticks.

You can also create a code block by indenting the text using `Tab` or 4 blank spaces.

You can add syntax highlighting to a code block, by adding a language code after the first set of backticks.

````
```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
````

```
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

Obsidian uses Prism for syntax highlighting. For more information, refer to [Supported languages](https://prismjs.com/#supported-languages).

## Footnotes

You can add footnotes[[1]](https://publish.obsidian.md/#fn-1-1ec15cf74cc06242) to your notes using the following syntax:

```
This is a simple footnote[^1].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
```

You can also inline footnotes in a sentence. Note that the caret goes outside the brackets.

```
You can also use inline footnotes. ^[This is an inline footnote.]
```

Inline footnotes only work in reading view, not in Live Preview.

## Comments

You can add comments by wrapping text with `%%`. Comments are only visible in Editing view.

```markdown
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%
```

## Escaping Markdown Syntax

In some cases, you may need to display special characters in Markdown, such as `*`, `_`, or `#`, without triggering their formatting. To display these characters literally, place a backslash (`\`) before them.

Common characters to escape

- Asterisk: `\*`
- Underscore: `\_`
- Hashtag: `\#`
- Backtick: `` \` ``
- Pipe (used in tables): `\|`
- Tilde: `\~`

```
\*This text will not be italicized\*.
```

*This text will not be italicized*.

When working with numbered lists, you may need to escape the period after the number to prevent automatic list formatting. Place the backslash (`\`) before the period, **not** before the number.

```
1\. This won't be a list item.
```

1. This won't be a list item.
