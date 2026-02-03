---
title: Using Kanban Boards and Tasks in Obsidian | Duckling Dev
source: https://lucabello.github.io/posts/using-kanban-boards-and-tasks-in-obsidian/
author:
  - "[[Luca Bello]]"
published: 2023-08-07
created: 2024-11-27
description: "I tried to use both these plugins and combine their features: this is what I've learned from it."
tags:
  - clippings
  - read
---
Whenever I start a personal project (and believe, that happens **a lot**) I find it extremely useful to break it down into tasks; additionally, as any software person will know, Kanban Boards are great tools to track the status of tasks.

Let’s have a look at how you can use the two individually and, most importantly, together! ✅

## 📝 Tasks

Obsidian has a great **Tasks** community plugin, with lots of cool features. Whenever you’re writing a task (i.e., `- [ ] This is a task`), it will prompt you for useful metadata like date, priority, and more. After enriching your tasks you can [query them](https://publish.obsidian.md/tasks/Queries/About+Queries), to visualize them according to your preferences.

Personally, **I like to 🏷️ tag my tasks** to better categorize them; this also allows for more advanced queries, and thus a less cluttered presentation. Sometimes though having a custom status for your tasks isn’t enough, and you’d like to track them in a Kanban Board.

## 📌 Kanban Board

The **Kanban** community plugin does just that; you can define columns, create cards, and drag-and-drop them around the board as you see fit.

For my personal projects **I follow the common `Open > In Progress > Done` pattern**, sometimes with a `Blocked` column for things that are waiting on some external factors, and a `Backlog` column for unprocessed ideas. If you want to go the extra mile, you could give unique IDs to each card (e.g., an incremental number like `T-1`) and just treat the note as your personal plain-text Jira! 🤓

Interestingly though, the Kanban Board is just a fancy view; **the note itself holds all of your cards as tasks**. Access the command palette (`Ctrl+P`) and `Toggle between Kanban and Markdown mode` to see for yourself. 👀

*But if the Kanban Board cards are tasks, could they be queried by the Tasks plugin?* Well, yes! 🥳

## 🍻 Combining the two

If you’re using Kanban on its own to track your tasks, you’re giving up on having a list view of your tasks. But with the Tasks plugin, **you can query those tasks just as you would with any other.**

This becomes especially useful if you (like me) like to have an 👈 **index note** for your projects. Through a Tasks query you could display the most important tasks (or the ones in progress, etc.) at the very top of that note, making sure you never lose track of your tasks’ status without having to open the Kanban board every time.

## 🕛 What I’m currently using

Truth to be told, I’ve been using the Kanban plugin less and less: that’s due mainly to me enjoying a keyboard-only workflow more than having to reach out for the 🐭 mouse every time. *But how I would track a task’s status then?*

The Tasks plugin supports [themes and CSS snippets](https://publish.obsidian.md/tasks/Reference/Status+Collections/About+Status+Collections) that **extend the possible status of a task beyond the simple checked/unchecked status.** Not only you can graphically change how the tasks look, as in `❓ This is a question task`, but you can even **change the logic** behind it.

### ✏️ A practical example

Say for example you routinely note down questions that you need to ask to different people, with some follow-up action afterwards. Your task list might look like this:

```
❓ Ask John when he's going on holiday to note it on my calendar
❓ Ask Laura who let the dogs out so I can bring them back
```

If you reach out to John and click the ❓, it would mark the task as ✅ complete. But now you’ll forget to add his schedule to your calendar!

It would be ideal to always change the ❓ state to some ➡️ Forwarded state, to better express that you’re waiting for answer; when John gets back to you, you’ll click on ➡️, which will now mark the task as complete.

Achieving this is pretty simple; you can just add a rule to the Tasks plugin, such as:

```
- [?] => [>], name: 'Question', type: 'IN_PROGRESS'
- [>] => [x], name: 'Forwarded', type: 'DONE'
```

## 🦆 Final Thoughts

One of the reasons I find Obsidian so good for personal projects is its versatility. Even with a couple simple plugins, you can have an **extremely expressive set of tools** (tasks, Kanban boards, the [Canvas](https://obsidian.md/canvas)) to visualize and link your ideas in a very intuitive and seamless way. ✨