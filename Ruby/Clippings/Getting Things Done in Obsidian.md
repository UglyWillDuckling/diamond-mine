---
title: "Getting Things Done* in Obsidian"
source: "https://www.productnook.com/getting-things-done-obsidian/"
author:
  - "[[Trevor Tarakjian]]"
published: 2023-01-02
created: 2024-11-27
description: "Build powerful Kanban boards to manage your tasks. Create notes from your tasks, and track what you accomplished with automated Dataviews."
tags:
  - "clippings"
---
👋🏻

Are you just getting started with Obsidian? If so, our [Obsidian Essentials e-book](https://www.productnook.com/obsidian-essentials/) can help you get off the ground running. Want to be involved? You can even suggest content if you're interested in learning a specific topic. Find out more [here](https://www.productnook.com/obsidian-essentials/).

I'm no stranger to the GTD (Getting Things Done) methodology, but I often fall victim to "shiny object syndrome" when it comes to software that promises me that I'll be *that* much more productive by switching over. **The truth is that if your workflow fails to be consistent you are never going to move forward**, regardless of the tool you decide on. It's also crucial that the tool you choose should do what *you* need within the confines of the most rudimentary setup, and only then should you begin to tweak and adjust in order to improve on your baseline, otherwise you might fall into the massive pit that is "productivity hell."

With that mindset, I'm going to explore what the Kanban integration for Obsidian offers for a less "by the rules" version of GTD, and how I work with it daily. You'll find that it's not the most extensive of setups, as it often doesn't need to be.

#### 🛠 The Setup

To get started, you're going to want to download the Kanban extension from Obsidian's community plugins directory, which you can do [here](https://www.productnook.com/getting-things-done-obsidian/). Configuration is relatively straightforward though I would advise setting the default `Date Display Format` to `YYYY-MM-DD` for reasons discussed in the [last article.](https://www.productnook.com/staying-in-sync-with-obsidian/) Then, create a new Kanban board. You can do this easily using `CMD+P` and selecting `Kanban: Create new board`.

![](https://www.productnook.com/content/images/2023/01/Capture-2023-01-01-at-17.31.04@2x.png)

An empty Kanban!

Let's add some lists. By default, you can select `Add List` from the popover that appears in the top-right, or once you have a list already, clicking on the `+` icon will perform the same function. A standard configuration could be as simple as the following screenshot, but feel free to customize here and make it your own, without going overboard.

![](https://www.productnook.com/content/images/2023/01/Capture-2023-01-01-at-17.35.25@2x.png)

Lists in Kanban

#### 📝 Tasks as Notes

In Obsidian, you can think of Kanban lists as folders that can house any number of cards. Each card you create is actually just a separate line item in the file itself that was created when you made the Kanban board (and you can see this by clicking the Options menu-item and selecting `Open as Markdown`). When cards are created, they aren't linked to anything and exist only in the file. What makes the plugin especially powerful however is that you can go a step further by making any card a new note.

![](https://www.productnook.com/content/images/2023/01/Capture-2023-01-01-at-17.40.59@2x.png)

Making a note from this Example Card

As tasks pile up, I create new cards in my `Inbox` in order to keep track of them. When work begins, I'll create a new note from that card and timestamp it using `@Today`. If you followed my [last article.](https://www.productnook.com/staying-in-sync-with-obsidian/) then these should *automatically* land in your Daily Note for that same day, which makes it especially convenient of keeping tabs on which tasks were worked on or updated. When a new note is created, you can view it in split view and toggle between both your Kanban and whatever note is active, which is a nice plus. You can of course open these in a new window, or move the tab below your Kanban, or any other combination of "workspaces" that Obsidian allows you to do, but I find this the most straightforward when working straight off my laptop.

![](https://www.productnook.com/content/images/2023/01/Capture-2023-01-01-at-17.47.50@2x.png)

#### 📦 Archiving into Daily Notes

Lately, I've been tweaking my Daily Note template to show which notes have been created or edited on that day, followed by which Kanban cards were archived. To do this, we'll have to modify the Daily Note template, modify some Kanban settings for "archiving cards", and add a separate dataview to look for cards that were archived that day.

```markdown
#### NOTES CREATED/EDITED
\`\`\`dataview
LIST 
FROM ([[#]]) OR outgoing([[#]])
WHERE file.name != this.file.name
SORT file.name ASC
\`\`\`

#### KANBAN CARDS ARCHIVED
\`\`\`dataview 
TASK
WHERE file.link = [[Work Kanban Core]]
WHERE contains(text, this.file.name)
\`\`\`
```

My current Daily Note template.

The second dataview in my Daily Note points to my work Kanban file, appropriately named `Work Kanban Core`, and looks for any card which has `this.file.name` in its line item. Recall that each card in the Kanban is a separate line item, and when archived, appends the timestamp `YYYY-MM-DD` by default. So when we use `WHERE contains(text, this.file.name)` in the dataview code, it's going to pick up every card that was archived that **has the same timestamp as the current Daily Note**.

In order to make sure this works as intended, make sure that your `Archive date/time format` option in your Kanban settings is similar to this.

![](https://www.productnook.com/content/images/2023/01/Capture-2023-01-01-at-17.59.06@2x.png)

You can modify the syntax, as long as it includes the YYYY-MM-DD format of your Daily Note.

This syntax will come into effect whenever you archive a file directly from your Kanban.

![](https://www.productnook.com/content/images/2023/01/Capture-2023-01-01-at-18.00.41@2x.png)

Manually archiving a card.

To drive this home, checking the Markdown version of our example Kanban board should now display the `Example Card` archived above, with the appropriate timestamp.

![](https://www.productnook.com/content/images/2023/01/Capture-2023-01-01-at-18.01.49@2x.png)

If you've set a specific list in your Kanban to automatically mark cards as "Complete" when moved into that list, the checkbox here will be filled.

Our Daily Note should now display the `Example Card` in the appropriate section using template code above.

![](https://www.productnook.com/content/images/2023/01/Capture-2023-01-01-at-18.07.17@2x.png)

A workflow is a constant work in progress, but you can see how a simple configuration can quickly become complex, especially when factoring in Obsidian's plugin offerings. If you're working with Daily Notes as the baseline for keeping track of your day-to-day, this GTD implementation should set you up for success.