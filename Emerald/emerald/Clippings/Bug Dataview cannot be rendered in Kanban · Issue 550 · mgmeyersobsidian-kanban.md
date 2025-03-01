---
title: "[Bug]: Dataview cannot be rendered in Kanban · Issue #550 · mgmeyers/obsidian-kanban"
source: https://github.com/mgmeyers/obsidian-kanban/issues/550
author:
  - "[[github]]"
published: 
created: 2025-01-10
description: Describe the bug I use Dataview to display a list for files. I embedded a file with Dataview List in Kanban card and it would appear the list there. Just recently, the list appears blank. The file with Dataview Embedded file with Datavie...
tags: 
favicon: https://github.githubassets.com/favicons/favicon.svg
related:
  - "[[data view]]"
  - "[[Kanban]]"
  - "[[Kanban Plugin]]"
---

**Bug** 
In my case, I also use Dataview Tables inside my Kanban cards. However, ever since I updated Dataview from 0.4.26 to 0.5.36, all my Dataview content inside the cards are empty. It does mention how many items are inside the table but not the actual content (birthdays, events, story characters, etc.)

The code I use for this example is

```
Table without ID
link(file.link, Aliases) AS "Name", Description
From #TC/Plot/CList/Character
Where Type = "storyChar"
Sort file.name
```

[![03](https://user-images.githubusercontent.com/106167889/175777075-d0bb4c83-175d-4c4e-a10a-319602ab0505.PNG)](https://user-images.githubusercontent.com/106167889/175777075-d0bb4c83-175d-4c4e-a10a-319602ab0505.PNG)

If I, however, revert Dataview back to 0.4.26, I get back my content.

**Expected Behavior**  
(with the additional number of how many items are there in the table)  
Dataview table can work inside Kanban board.  
[![IMG_20220625_221223](https://user-images.githubusercontent.com/106167889/175777353-f9bea7d2-c524-43a6-8115-cc2d7fe964b2.jpg)](https://user-images.githubusercontent.com/106167889/175777353-f9bea7d2-c524-43a6-8115-cc2d7fe964b2.jpg)

That's the status I'm currently in now. I hope they will work together again.

**System**  
Mobile user Android v12  
Obsidian version 1,2,2 (56)