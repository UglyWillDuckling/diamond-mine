---
title: Internal links - Obsidian Help
source: https://help.obsidian.md/Linking+notes+and+files/Internal+links
author:
  - "[[Obsidian Help]]"
published: 
created: 2025-01-25
description: Aliases - Obsidian Help
tags:
  - doc
  - obsidian
status:
  - Reading
---
```yaml
aliases:
  - How to/Internal link
  - How to/Link to blocks
cssclasses:
  - soft-embed
```

Learn how to link to notes, attachments, and other files from your notes, using *internal links*. By linking notes, you can create a network of knowledge.

Obsidian can automatically update internal links in your vault when you rename a file. If you want to be prompted instead, you can disable it under:

**Settings → Files & Links → Automatically update internal links**.

## Supported formats for internal links

Obsidian supports the following link formats:

- Wikilink: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

The examples above are equivalent—they appear the same way in the editor, and links to the same note.

When using the Markdown format, make sure to [URL encode](https://en.wikipedia.org/wiki/Percent-encoding) the link destination. For example, blank spaces become `%20`.

By default, due to its more compact format, Obsidian generates links using the Wikilink format. If interoperability is important to you, you can disable Wikilinks and use Markdown links instead.

To use the Markdown format:

1. Open **Settings**.
2. Under **Files & Links**, disable **Use \[\[Wikilink\]\]**.

Even if you disable the Wikilink format, you can still autocomplete links by typing two square brackets `[[`. When you select one of the suggested files, Obsidian instead generates a Markdown link.

## Link to a file

To create a link while in Editing view, use either of the following ways:

- Type `[[` in the editor and then select the file you want to create a link to.
- Select text in the editor and then type `[[`.
- Open the [Command palette](https://help.obsidian.md/Plugins/Command+palette) and then select **Add internal link**.

While you can link to any of the [Accepted file formats](https://help.obsidian.md/Files+and+folders/Accepted+file+formats), links to file formats other than Markdown needs to include a file extension, such as `[[Figure 1.png]]`.

> [!info]
> Autocomplete functionality switches to a simpler result algorithm when the vault reaches 10,000 items to maintain optimal application performance.
> 

## Link to a heading in a note

You can link to specific headings in notes, also known as *anchor links*.

**Linking to a heading within the same note**

To link to a heading within the same note, type `[[#` to get a list of headings within the note to link to.

**Linking to a heading in another note**

To link to a heading in another note, add a hash (`#`) at the end of the link destination, followed by the heading text.

**Linking to subheadings**

You can add multiple hash symbols for each subheading.

**Searching for headers across the vault**

To search for headers across the entire vault, use the `[[## header]]` syntax.

For example, `[[##` will search generically across the vault, whereas `[[## team]]` will search for all headers that contain the word *team*.

Screenshot of searching for a heading link

![[~/×/41c3026a086f10e58b2ac28eb5746523_MD5.png]]

## Link to a block in a note

A block is a unit of text in your note, such as a paragraph, block quote, or list item.

You can link to a block by adding `#^` at the end of your link destination followed by a unique block identifier. For example, `[[2023-01-01#^37066d]]`.

Fortunately, you don't need to know the identifier. When you type the caret (`^`), you can select the block from a list of suggestions to insert the correct identifier.

**Searching for blocks across the vault**

You can also search for blocks to link to from across your vault using the `[[^^block]]` syntax. However, more items qualify as blocks compared to [heading links](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20heading%20in%20a%20note), so this list will be much longer.

Screenshot of searching for a block link

![[~/×/d4ac8edc6c9fbf8a29548ee4d34e93b7_MD5.png]]

You can also create human-readable block identifiers by adding a blank space followed by the identifier. Block identifiers can only consist of Latin letters, numbers, and dashes.

For example, add `^quote-of-the-day` at the end of a block:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Now you can link to the block by typing `[[2023-01-01#^quote-of-the-day]]`.

Block references are specific to Obsidian and not part of the standard Markdown format. Links containing block references won't work outside of Obsidian.

## Change the link display text

By default, Obsidian will show the link text as it appears, such as `[[Aliases]]` showing [Aliases](https://help.obsidian.md/Linking+notes+and+files/Aliases) and `[[Basic formatting syntax#Code blocks]]` showing [Basic formatting syntax > Code blocks](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks).

You have the option to modify the text used for displaying a link by using the `[[Aliases|Nicknames]]` and `[[Basic formatting syntax#Code blocks|Code blocks]]` syntaxes to create the [Nicknames](https://help.obsidian.md/Linking+notes+and+files/Aliases) and [Code blocks](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks) links.

**Wikilink format:**

You can use the vertical bar (`|`) to change the text used to display a link.

For example, `[[Internal links|custom display text]]` appears as [custom display text](https://help.obsidian.md/Linking+notes+and+files/Internal+links).

**Markdown format:**

Enter the display text between the square brackets (`[]`).

For example, `[custom display text](Internal%20links.md)` appears as [custom display text](https://help.obsidian.md/Linking+notes+and+files/Internal+links).

## Preview a linked file

To preview linked files, you first need to enable [Page preview](https://help.obsidian.md/Plugins/Page+preview).

To preview a linked file, press `Ctrl` (or `Cmd` on macOS) while hovering the cursor over the link. A preview of the file content appears next to the cursor.