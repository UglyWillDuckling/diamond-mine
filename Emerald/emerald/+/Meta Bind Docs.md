---
author:
  - "[[Meta Bind Docs]]"
created: 2024-12-05
source: https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/
tags:
  - clippings
  - obsidian-plugin
---
[[Meta Bind Plugin]]

Meta Bind is a plugin for [Obsidian](https://obsidian.md/) to make your notes interactive!

Meta Bind allows you to create **input fields**, **metadata displays (view fields)**, and **buttons**. Input and view fields can bind to frontmatter properties, which keeps them in sync those frontmatter properties, allowing you to view and edit your frontmatter properties inside your notes.

For example, you can create a toggle inside your note, that is bound to a frontmatter property named `done`, with this simple inline code block `INPUT[toggle:done]`. When you click the toggle, the `done` property will switch between `true` and `false`.

## Features

- **Input Fields** - Input and edit frontmatter properties from anywhere inside your notes. Properties will update in real time.
- **View Fields** - Display frontmatter properties inside your notes. The displayed value will update in real time when the properties displayed change.
- **Buttons** - Create buttons inside your notes that can trigger actions on click. A spiritual successor to the discontinued [Buttons Plugin](https://github.com/shabegom/buttons).
- **Meta Bind Embed** - Seamlessly embed a note inside another note. The embedded note will be rendered as if it was part of the note it is embedded in.

## Getting Started

First you will need to install the plugin from the [Community Plugins](https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/) tab in Obsidian’s settings. You can find various guides on how to use the plugin under the Guides section in the sidebar.

If you want to see all possible input fields in actions, you can run the `Open Meta Bind Playground` command inside Obsidian. If you are looking for examples, you can explore the [example vault](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/tree/master/exampleVault) which I use for testing.

## Bugs, Errors or Unexpected Behavior?

Please open a bug report on the plugins [GitHub repository](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/issues).

## Have an Idea for a new Feature?

Feature requests and contributions are always welcome. If you have an idea, feel free to open a feature request under the [issues tab on GitHub](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/issues) or even create a pull request.

## Check out my Other Work

Check out [my website](https://www.moritzjung.dev/).

Here is a list of my Obsidian related projects.

- [Meta Bind Plugin](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) (You are here)
- [JS Engine Plugin](https://github.com/mProjectsCode/obsidian-js-engine-plugin)
- [Shiki Highlighter Plugin](https://github.com/mProjectsCode/obsidian-shiki-plugin)
- [Media DB Plugin](https://github.com/mProjectsCode/obsidian-media-db-plugin)
- [Lemons Theme](https://github.com/mProjectsCode/obsidian-lemons-theme)
- [Focus Theme](https://github.com/mProjectsCode/obsidian-focus-theme)
- [Obsidian Stats](https://www.moritzjung.dev/obsidian-stats)
- [Obsidian Collection](https://www.moritzjung.dev/obsidian-collection)