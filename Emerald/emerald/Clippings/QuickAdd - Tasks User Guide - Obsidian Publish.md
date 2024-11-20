---
title: "QuickAdd - Tasks User Guide - Obsidian Publish"
source: "https://publish.obsidian.md/tasks/Other+Plugins/QuickAdd"
author:
  - "[[Tasks User Guide]]"
published:
created: 2024-11-20
description: "Introduction - Tasks User Guide - Powered by Obsidian Publish."
tags:
  - "clippings"
---
```yaml
publish: true
aliases:
  - Advanced/Quickadd
```

## Launching the Edit task modal via QuickAdd

## Creating your own shortcut to build a task

The [QuickAdd](https://github.com/chhoumann/quickadd) plugin can help when creating tasks. Additional to the official command to create a task, you can set up a QuickAdd command with a custom capture format.

For example:

```markdown
#task {{VALUE:task name}} ⏰ {{VDATE:reminder date and time,YYYY-MM-DD HH:mm}} {{VALUE:⏫,🔼,🔽, }} 🔁 {{VALUE:recurrence}} 🛫 {{VDATE:start date,YYYY-MM-DD}} ⏳ {{VDATE:scheduled date,YYYY-MM-DD}} 📅 {{VDATE:due date,YYYY-MM-DD}}
```

You can remove/leave some fields to make different types of tasks. And each one can have its own command.

### Some Examples

Task with due date only:

`#task {{VALUE:task name}} 📅 {{VDATE:due date,YYYY-MM-DD}}`

Task with priority and reminder date and due date:

`#task {{VALUE:task name}} ⏰ {{VDATE:reminder date and time,YYYY-MM-DD HH:mm}} {{VALUE:🔺,⏫,🔼,🔽,⏬️, }} 📅 {{VDATE:due date,YYYY-MM-DD}}`

Task with recurrence and scheduled date and start date:

`#task {{VALUE:task name}} 🔁 {{VALUE:recurrence}} 🛫 {{VDATE:start date,YYYY-MM-DD}} ⏳ {{VDATE:scheduled date,YYYY-MM-DD}}`

## How to add QuickAdd command

1. Install [nldates](https://github.com/argenos/nldates-obsidian) and [QuickAdd](https://github.com/chhoumann/quickadd)
2. Choose the `capture` choice, then make it visible on the command palette by clicking on the flash emoji
3. Enable the `save as task` option, then enable the `capture format` option and paste your custom format
4. Assign a Hotkey to your new command through the standard Settings -> Hotkeys interface (your new command will appear as `QuickAdd: "name you gave your capture"`)

## Tip for repeated dates (to reduce friction)

If you notice that you are adding the same date multiple times, say for example the due date and the [reminder date](https://publish.obsidian.md/tasks/Advanced/Notifications) are the same. Then you can give them the same name, this way you'll write the date only once and QuickAdd will insert it in multiple places.

Here is the format for the current example:

```markdown
#task {{VALUE:task name}} ⏰ {{VDATE:same date,YYYY-MM-DD}} {{VDATE:time,HH:mm}} 📅 {{VDATE:same date,YYYY-MM-DD}}
```