---
title: "obsidian-sanctum/documentation/Theme_Guide.md at main · jdanielmourao/obsidian-sanctum · GitHub"
source: "https://github.com/jdanielmourao/obsidian-sanctum/blob/main/documentation/Theme_Guide.md"
author:
published:
created: 2024-11-20
description:
tags:
  - "clippings"
---
## Table of Contents

- [Table of Contents](https://github.com/jdanielmourao/obsidian-sanctum/blob/main/documentation/#table-of-contents)
- [Features:](https://github.com/jdanielmourao/obsidian-sanctum/blob/main/documentation/#features)
- [Html Blocks](https://github.com/jdanielmourao/obsidian-sanctum/blob/main/documentation/#html-blocks)
- [Html elements](https://github.com/jdanielmourao/obsidian-sanctum/blob/main/documentation/#html-elements)
- [Style Settings Options:](https://github.com/jdanielmourao/obsidian-sanctum/blob/main/documentation/#style-settings-options)

## Features:

1. **Variable Headings:** Heading sizes will depend on screen size, meaning they adapt to mobile phones, tablets, as well as different computer screen sizes! You can change the sizing in the Style Settings Options!

[![[~/×/ead66b6ccf5a93f876677cf8e52ed09a_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139746916-80d2997f-1823-463e-9bbb-21417fafa575.gif)

2. **Custom Icons:** Sanctum uses icons from [IBM's Design Language icon library](https://www.ibm.com/design/language/iconography/ui-icons/library/)
3. **Multi-Color Highlights:** for when you need more than a single highlight color! These colors are all customizable through the Style Settings plugin, as well as the highlighted text color, in order to make sure contrast is mantained (or for more funky combinations, it's up to you). To use them, simply use the following syntax:

```
==highlight== - for a yellow highlight
*==highlight==* - for a blue highlight
**==highlight==** - for a pink highlight
```

[![[~/×/1ed25e2ed3df53fe6d59af3d7ab84ebc_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139734042-ea7ed245-9cee-4b18-8466-4a1830bf3f69.gif)

4. **Custom Checkboxes:** Besides the regular checkbox, there are 7 custom checkboxes you may use on your tasks/lists. Do note that these do not work on tables, since tables only accept the default html checkboxes (which you can input via markdown syntax, or even html syntax). These default html checkboxes are also styled to match the theme. Eg: `<input type="checkbox">`

```
- [i] Information
- [-] Cancelled
- [<] Scheduled
- [>] Rescheduled/Forwarded
- [?] Question
- [!] Important
- [l] Location
- [x] Task
- [ ] Task
- [X] Task
- [I] Idea
- [p] Thumbs up
- [c] Thumbs down   
- [S] Piggy bank
- [s] Money
- [a] Bell
- [b] Bookmark
- [n] Pin
- [B] Bug
- [W] Reward
```

[![[~/×/c260d65419e267ca1d719ba2cd1ab6bf_MD5.png]]](https://user-images.githubusercontent.com/91087143/139735135-9bb582f5-d657-4017-b162-d11e6ee674b8.png)

5. **Custom Codeblock Language - `pure-text`:** for when you have a passage you'd like to constantly copy, for some reason. This makes the codeblock appear like normal text, except it has a copy button to the right.

```
\`\`\`pure-text
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id dignissim massa, at tempor lacus. Maecenas vel hendrerit orci, sit amet sagittis purus.\`\`\`
```

[![[~/×/4b6d3352950ff888a315abe69672037e_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139746450-5b038735-8dff-4eef-8ddd-d8626bc46ef9.gif)

6. **Custom Link Icons:** In Preview Mode after writing a link, there’s a change an icon will show on the left of it. If you’d like to add links to the theme, make sure to submit a Request on the Issue section.

[![[~/×/2fb37e153dcfffc2ee7308e9d6486e54_MD5.png]]](https://user-images.githubusercontent.com/91087143/139746676-2362b0c2-d056-4abc-bc86-9ee2867fd0ff.png)

7. **Image Desaturation:** Images are a bit desaturated to go better with the theme and create a sense of cohesion, even if they have massive differences with other images. They will show its full colors once hovered.

[![[~/×/192982a2a14c8a7a2bc2d21387b03ab2_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139747202-262a0f4c-fdb6-4c43-a100-0b4f6de1d7b9.gif)

8. **WYSIWYG `<hr>` element :** when writing "---" in Edit Mode (or "----" if you have Smart Typography), an hr element will appear. There is a Style Settings option to disable it, as well as center the default "---" dashes. When following headings, hr element will have smaller top margins, making them closer to the headings, and not creating massive blank spaces in the note.

[![[~/×/1eb133a6dac0941f90696ef63fe222f5_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139747344-f4be7082-7a42-4024-882b-36132d267bd1.gif)

[![[~/×/e659b8b9f565049ad29a3cc8d8c9c4aa_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139747358-24eaa547-99f0-406d-9382-72d16ac91664.gif)

9. **Active Line Highlight:** to always know in which line you're writing (as seen above).
10. **Folded Heading/List Indicator:** works as a reminder for when headings and/or lists are collapsed. Adding or subtracting `left-margin` from [this snippet](https://github.com/jdanielmourao/obsidian-sanctum/blob/main/documentation/%22fold_indicator.css%22) will help you adjust this feature to your font choice.

[![[~/×/75784e0d7d2791fc35d50a7ad1097ea3_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139747448-bd0b3b78-d653-44de-b78a-0eb2cb7a8a0f.gif)

11. **Clean Embeds:** by Moonbase, makes embeds looks seemless in Preview Mode.

[![[~/×/8da8caa3e3cc31bda75f30996d12f019_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139747998-09f2e53c-c56a-485b-b3f7-2763a706823d.gif)

### Html Blocks

HTML Blocks are defined by a start condition (for example, `<code>`) and an end condition (`</code>`). Any text you want to be inside that block, you’ll have to include it between the conditions. Always “close” a html block, for they “continue until they are closed by their appropriate end condition, or the last line of the document or other container block” ([source](https://spec.commonmark.org/0.30/#html-blocks)). Some html elements require a few more information in order for them to work, but do not worry, as they’ll be explained below!

#### Html elements

For technical information, you can click this [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

**`<progress>`** - the **progress indicator element** displays the progress of a task, displayed as a progress bar. This progress needs to be input manually in obsidian (unless it's implemented in a plugin). To input a `<progress>` element, you need to input a "value", as well as a "max" value. E.g: `<progress value="6" max="10"></progress>`. That will display a progress bar with 60% progress. Note that the progress bars are already formatted so it's easy to add a label in the line below, like the following examples:

[![[~/×/30d27c7bb2955894c210d4bae4e715f5_MD5.png]]](https://user-images.githubusercontent.com/91087143/139889098-fef4e2c9-91f5-459c-b246-ede3f946134f.png)

`<blockquote>` - the **block quotation element** is used to indicate that the enclosed text is part of a quotation. A text representation of the source and/or author may be given using the `<cite>` element. Blockquotes can also be written using Markdown syntax, simply including a `>` at the beginning of the line.

```
>Sed aliquam feugiat ante a tincidunt. Cras sed condimentum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis faucibus velit, eu ornare metus. Cras feugiat molestie dui, non molestie purus. Aenean nec erat hendrerit, blandit metus quis, sollicitudin nibh. Aliquam malesuada convallis convallis. Nulla non ultricies ligula. Praesent varius diam sed felis aliquet suscipit. Nunc sit amet ullamcorper urna, eget sollicitudin lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
```

```
<blockquote>Sed aliquam feugiat ante a tincidunt. Cras sed condimentum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis faucibus velit, eu ornare metus. Cras feugiat molestie dui, non molestie purus. Aenean nec erat hendrerit, blandit metus quis, sollicitudin nibh. Aliquam malesuada convallis convallis. Nulla non ultricies ligula. Praesent varius diam sed felis aliquet suscipit. Nunc sit amet ullamcorper urna, eget sollicitudin lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</blockquote>
```

[![[~/×/41e82e03fd4316ba3561c6b2e3fd5e32_MD5.png]]](https://user-images.githubusercontent.com/91087143/139750178-d0bf43ba-cd11-4283-8699-770563dbc2a2.png)

`<blockquote class="paraphrase">` - the **paraphrase** custom class is part of the blockquote element, and is used to enclose text that, while not a quotation, is also not an original idea, and so should be differentiated in the text to avoid confusion and misattribution of credit/authorship. To put it simply, if you'd like to tell when you're paraphasing, you can use this class. Since it's a class of the `<blockquote>`element, it's best not to have it right before or after a blockquote, because both will merge. Fear not, for adding a comment (`%%comment%%`) between both solves the issue.

```
<blockquote class="paraphrase"> Sed aliquam feugiat ante a tincidunt. Cras sed condimentum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis faucibus velit, eu ornare metus. Cras feugiat molestie dui, non molestie purus. Aenean nec erat hendrerit, blandit metus quis, sollicitudin nibh. Aliquam malesuada convallis convallis. Nulla non ultricies ligula. Praesent varius diam sed felis aliquet suscipit. Nunc sit amet ullamcorper urna, eget sollicitudin lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </blockquote>
```

[![[~/×/d5fefc82036b40422bab1613b537a6a5_MD5.png]]](https://user-images.githubusercontent.com/91087143/139750466-d36d2e75-6a40-43b8-99e5-10a402d85e67.png)

**`<cite>`** - the **citation element** is used for referencing a cited work. This will align the text to the right, and can (and should) be written inside a blockquote. This means you can also envelop it inside a paraphrase element in order to remind yourself of the source material.

```
>Sed aliquam feugiat ante a tincidunt. Cras sed condimentum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis faucibus velit, eu ornare metus. Cras feugiat molestie dui, non molestie purus. Aenean nec erat hendrerit, blandit metus quis, sollicitudin nibh. Aliquam malesuada convallis convallis. Nulla non ultricies ligula. Praesent varius diam sed felis aliquet suscipit. Nunc sit amet ullamcorper urna, eget sollicitudin lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<cite> Insert Author here https://startpage.com/ </cite>
```

[![[~/×/3165389585719c42377b372a74fc07b1_MD5.png]]](https://user-images.githubusercontent.com/91087143/139750706-3c85693a-7365-4188-a389-b1559b8a68dd.png)

**`<aside>`** - the **aside element** is used for simple call-outs or for presenting information that isn't directly related to the note's content. This is formatted the same way as a `<s class="aside-in">` element (more on that later), but doesn't allow for Markdown formatting. Still, it wouldn't make sense to have more advanced sidenote options, without also having the default html element. **`<s class="aside-*">`** - the sidenote element is used to display references or complementary information that doesn't find its place in the main text. The end block for every sidenote type is the same: `</s>` There are 4 types of sidenote classes:

- `<s class="aside-right">`: this places text in the side of the right margin of the note;
- `<s class="aside-left">`: this places text in the side of the right margin of the note;
- `<s class="aside-in">`: this places text inside the main text, but in the same way as the default `<aside>` element, is formatted as a callout;
- `<s class="aside-hide">`: this places an icon in the side of the right margin, that will reveal its content once hovered. The revealed content will display the same way as an `<s class="aside-right">`element.

[![[~/×/1f60e132ff0e276de0cb5f67f41e55f1_MD5.gif]]](https://user-images.githubusercontent.com/91087143/139750949-2489e514-9179-48fd-b942-a5717f275e0d.gif)

**`<samp>`** - the **sample output element** is used to enclose text that simulates an output from a computer program. It's rendered using the monospaced font set for the theme.

```
<samp> Hello World! <samp>
```

[![[~/×/0d9a76b1cc9538d3c4f3c906626bb26e_MD5.png]]](https://user-images.githubusercontent.com/91087143/139751269-d30174b8-8fb5-4b76-8b80-6ca77432e220.png)

`<kbd>` - the **keyboard input element** is used to represent user input from a keyboard. It's basically a good way to highlight hotkeys!

[![[~/×/5141ba0fbee012eddf03dcd39ea9aa05_MD5.png]]](https://user-images.githubusercontent.com/91087143/139751544-0ef6d49e-1594-4bec-983c-c9edc36d4b01.png)

**`<small>`** - the **side comment element** is used, like the name implies, to write side comments and small print. It renders a smaller font-size than the default text.

[![[~/×/0908683446cceaa23e6ba6b718a7ab34_MD5.png]]](https://user-images.githubusercontent.com/91087143/139751410-15a17837-a6d4-46c3-a043-d9c45082ceb6.png)

## Style Settings Options:

- Colors
- Dark Mode Contrast Code Background
- Accent Colors
- Light Mode Accent Color
- Dark Mode Accent Color
- Text accent hover color
- Hightlight Colors
- Highlight 1
- Hightlight 1 Text
- Highlight 2
- Highlight 2 Text
- Highlight 3
- Highlight 3 Text
- Graph Colors
- Active Note Node Color
- Tag Node Color
- Attachment Node Color
- Typography
- Preview Mode Line Width
- Fonts
- Preview Mode Font
- Edit Mode Font
- UI Font
- Monospace Font
- Headings
- Heading Font
- Heading 1 Size
- Heading 2 Size
- Heading 3 Size
- Heading 4 Size
- Heading 5 Size
- Heading 6 Size
- Elements
- Hide Frontmatter
- Status Bar on Top
- Tab Header Icon Side Padding
- File Explorer
- Show Vault Name
- Left Nav Arrows
- File Explorer Relationship Lines
- No File Icons
- No Folder Icons
- Show Full Titles
- Modals
- Settings Modal Width
- Community Themes Modal Width
- Community Plugins Modal Width
- Scrollbars
- No Scrollbar in Global Search
- No Scrollbar in Notes
- No Scrollbar in File Explorer
- No Scrollbar in Modal
- Features
- `<hr>` (“---”) Options
- Edit Mode Tasks
- Footnote Title
- Footnotes Heading
- Wrap Note Titles
- Wrap Kanban Lanes
- Tables
- Table Max Width
- Center Tables
- Alternate Dataview Tables
- Sidenotes
- Sidenote Options
- Inner Sidenote Options
- Relationship Lines
- Relationship Lines
- Alternating Relationship Lines Colors
- Advanced Options
- No Background Blur
- Disable Animations
- Default Icons