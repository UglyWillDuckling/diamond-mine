---
source: https://publish.obsidian.md/tasks/Advanced/Tasks+Api#Usage+with+QuickAdd
author:
  - "[[Tasks User Guide]]"
created: 2024-11-21
description: QuickAdd - Tasks User Guide
tags:
  - clippings
  - tasks
  - obsidian
  - quickadd
---
https://publish.obsidian.md/tasks/Advanced/Tasks+Api#Usage+with+QuickAdd
https://quickadd.obsidian.guide/docs/InlineScripts

### Usage with QuickAdd

One of the most common usage scenarios is probably in combination with the [QuickAdd](https://github.com/chhoumann/quickadd) plugin to automatically add tasks to a specific file.

For this you need to enter the following code as the Capture format:

```js quickadd
return await this.app.plugins.plugins['obsidian-tasks-plugin'].apiV1.createTaskLineModal();
```

Or if you would like a newline character to be added after your new task line, use this as the Capture format instead:

```js quickadd
return await this.app.plugins.plugins['obsidian-tasks-plugin'].apiV1.createTaskLineModal() + '\n';
```

#### Create the QuickAdd Capture

Use these steps to make the following options appear (tested in QuickAdd 0.12.0):

![Screenshot - Create the QuickAdd Capture](https://publish-01.obsidian.md/access/40e62a316a834ff6f495ebf1d122cae6/images/quickadd-settings-create-capture.png)

1. Open the QuickAdd options.
2. Type the name `Add task` in the `Name` box.
3. Click on the `Template` button and select `Capture`.
4. Click `Add Choice`.

#### Configure the QuickAdd Capture

![Screenshot - Open the QuickAdd Capture Configuration](https://publish-01.obsidian.md/access/40e62a316a834ff6f495ebf1d122cae6/images/quickadd-settings-configure-capture.png)

1. In the new row that was added, click on the cog (⚙) icon.
2. Now fill in the values below. (See above for the code to enter in to the `Capture format` box.)

Screenshot of QuickAdd capture settings (example)

![Screenshot - Edit the QuickAdd Capture Configuration](https://publish-01.obsidian.md/access/40e62a316a834ff6f495ebf1d122cae6/images/api-create-taskline-modal-quickadd-capture-example.png)

