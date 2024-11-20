---
title: "Capture: Add a Task to a Kanban Board | QuickAdd"
source: "https://quickadd.obsidian.guide/docs/Examples/Capture_AddTaskToKanbanBoard"
author:
published:
created: 2024-11-20
description: "This will add a task to the chosen Kanban Board."
tags:
  - "clippings"
---
This will add a task to the chosen Kanban Board.

In Capture To, select the board.

Select the Task option.

Then select the Insert after option, and write `## ` followed by the name of the lane you want to add the task to.

In my case, I want to add tasks to a lane called `Backlog`, so it becomes `## Backlog`.

If you want, you can experiment with the format syntax - you could, for example, experiment with adding dates and times.

To add a date for a task, you could just write `{{VALUE}} @{{{DATE}}}` in the format syntax. This would add the current date as the date for the card.

You could also use `{{VALUE}} @{{{VDATE:DATE,gggg-MM-DD}}}` to get asked which date you want to input - but do note that this requires the Natural Language Dates plugin.

Read more about [format syntax here](https://quickadd.obsidian.guide/docs/FormatSyntax).

![image](https://user-images.githubusercontent.com/29108628/123068109-e23b4600-d411-11eb-8886-8362ad09ec11.png)