---
title: "Started Using the Obsidian Tasks Plugin | λ ryan. himmelwright. net"
source: "https://ryan.himmelwright.net/post/started-using-obsidian-tasks-plugin/"
author:
published: 2024-03-23
created: 2024-11-14
description:
tags:
  - "clippings"
---
 March 23, 2024
 [![test|200](https://ryan.himmelwright.net/post/started-using-obsidian-tasks-plugin/flowers_header.jpeg)

Jumping back into work after the holidays this year, I realized how cumbersome my notes and task management system had become. I was copying lists of TODO checkboxes across weekly notes. Each day, I moved anticipated work items to my daily note, only to pop the unfinished items back onto the weekly note. It was stupid, inefficient, and *not* how I usually handle task management. So, I finally tried the [Obsidian Tasks plugin](https://github.com/obsidian-tasks-group/obsidian-tasks).

I started with my ‘work’ vault because I desperately needed an improved task management system there. The current arrangement wasn’t working for me anymore. I also had a completely different setup for personal tasks already in use. However, after a few weeks with the Tasks Plugin at my day job… I *had* to switch over my ‘personal’ vault too. At least for personal tasks and projects that is. Family tasks remain in [ticktick](http://ticktick.com/), but I’m testing a family sub-vault for project notes too. Let’s take a deeper look into this system.

## Plugin Setup & Settings

![An obsidian window with the settings panel opened to the tasks settings](https://ryan.himmelwright.net/post/started-using-obsidian-tasks-plugin/tasks_settings.png)

Tasks plugin settings. The global task filter is a must for my vaults.

The first step was to install the Obsidian Tasks plugin. Like any [Obsidian](http://obsidian.md/) community plugin, ensure “Restricted Mode” is disabled, and then search for and install the “Tasks” plugin. After enabling it, I realized there were 2 settings changes I *needed* to make for my system to work properly:

- Set and use the “global task filter”. This option defines a string that is used to differentiate between a normal checkbox and an actual *task*. This was key, especially when converting an older vault that contains all sorts of historical opened/closed checkboxes littered throughout it. I used the tag `#task` for my filter.
- I also turned on the option: “Next recurrence appears on the line below”. This toggles the behavior so that when a recurring task is completed, the new recurring item appears *below* the previous one, instead of the default setting of *above* it. This is just a personal preference for me, although I can see why the default might make more sense, particularly with longer lists of completed recurring tasks.

I made a few other tweaks, but those are the two *big* items. I saw there’s a way to include global settings to auto append to every task block, which I might do in the future as I nearly always include `short mode`, `hide tags`, and `hide task count`.

## Vault Conversion

![An Obsidian window with two callout boxes, Monday and Tuesday, full of checked tasks.](https://ryan.himmelwright.net/post/started-using-obsidian-tasks-plugin/weekly_note_tasks.png)

The Tasks section of my weekly note.

### Templates

With the plugin configured, I started the process of converting my vault(s). My first step was to add task views to my *current* daily and weekly notes. Once I had what I initially wanted, I applied the formatting to the note *templates*. This was an iterative process, and I ended up going back and tweaking the templates over the following weeks.

After some time to soak, my template modifications slowed down, and I was left with the following (for my ‘personal’ vault):

### Daily Note

```markdown
>[!danger]- Overdue
>\`\`\`tasks
>not done
>(scheduled before {{date:YYYY-MM-DD}}) OR (due before {{date:YYYY-MM-DD}})
>short mode
>hide tags
>hide task count
>group by filename
>sort by priority
>\`\`\`

>[!todo]+
>\`\`\`tasks
>not done
>(scheduled on {{date:YYYY-MM-DD}}) OR (due on {{date:YYYY-MM-DD}})
>short mode
>hide tags
>hide task count
>group by filename
>sort by priority
>\`\`\`

>[!done]+
>\`\`\`tasks
>(done on {{date:YYYY-MM-DD}}) OR (cancelled on {{date:YYYY-MM-DD}})
>short mode
>hide tags
>hide task count
>group by filename
>sort by priority
\`\`\`
```

This is at the top of my daily note template, and lists tasks scheduled for the day in three [callout](https://ryan.himmelwright.net/post/obsidian-callouts/) boxes: Overdue, Todo, and Completed. Tasks in each box are also grouped by *filename*, which usually corresponds to the project the tasks are part of. As I complete tasks, they display in the different boxes accordingly.

### Weekly Note

```markdown
### Monday
- **Daily Log**: [[{{monday:YYYY-MM-DD}}]]
>[!tldr]+  Events & Tasks
>\`\`\`tasks
>(scheduled on {{monday:YYYY-MM-DD}}) OR (due on {{monday:YYYY-MM-DD}}) OR (done on {{monday:YYYY-MM-DD}}) OR (cancelled on {{monday:YYYY-MM-DD}})
>short mode
>hide tags
>hide task count
>sort by priority
>sort by done
>\`\`\`
```

After the switch to using the tasks plugin, my previous *manual* weekly note slimed down to just a bunch of task views 😅. I had to learn how to have a template set specific days for each day of the week, but after some research, I found out that you can use `{{DAY:FORMAT}}` in weekly templates, and the date for that day that week will be swapped in. I *think* this is handled by [periodic notes](https://github.com/liamcain/obsidian-periodic-notes), but I’m not positive. I was also able to use this trick to *finally* have each day’s link to its corresponding daily note be set automatically.

The weekly template mostly consists of a list of blocks for each day of the week. For each day, I have a link to the day’s daily note, and then a simplified, single callout box for the day’s tasks. This makes it easier to see tasks across several days at a glance. If I want more detail or tasks split apart, I can go to a specific day’s note.

### Monthly/Quarterly Templates

```markdown
\`\`\`tasks
(scheduled in {{date:YYYY-MM}}) OR (due in {{date:YYYY-MM}}) OR (done in {{date:YYYY-MM}}) OR (cancelled in {{date:YYYY-MM}})
folder does not include Logs/Weekly Plans
folder does not include Logs/Daily Notes
short mode
group by filename
sort by scheduled
\`\`\`
```

My monthly/quarterly notes each have a section that lists all the tasks for that time period, again grouped by filename. This allows me to quickly see everything that I have scheduled, or completed in a given month or quarter, which is awesome when I want to review at the end. Yes, it does get long, but that’s usually a good thing (at the end of the time period, only completed items remain).

The only real difference between the two is that the quarterly one uses `{{date:YYYY-[Q]Q}}` to match the quarters instead of months (`{{date:YYYY-MM}}`).

*(Note: I don’t currently have these in callout boxes, as I thought their size wouldn’t work well for being in one. However, I’m second-guessing that now as I write this post 😉)*

## Task Conversion

![An obsidian window with a bunch of checked list items in the middle of the note](https://ryan.himmelwright.net/post/started-using-obsidian-tasks-plugin/project_note_tasks.png)

My tasks live in the note they’re related to. Like the note for this post, for example.

After setting up my periodic note templates with task views, my next step was to get my data into the system. This mostly involved finding all my current “task” items, converting them to proper obsidian tasks by adding the `#task` tag to them, and setting a scheduled date. Many of these checkbox items lived in my monthly or quarterly notes, so I often created new project notes for tasks to live in, if there wasn’t one already. Lastly, I added a tasks section to my project note template, which made this procedure a bit easier.

The whole process wasn’t too bad, as I only worried about converting current items, and a few from the last month or so. Moving forward, I’ve been creating tasks in the proper format, and when I bring up old items to work on, I convert them if they haven’t been for some reason. So far, it’s worked.

## My Task Workflow

My workflow is much easier than it used to be. Now, I simply add tasks to project or item notes, and they appear when scheduled. If I want to know all tasks for a particular item, I just look at them in the note. I can also periodically spin up a view to see all tasks without scheduled dates, so nothing gets lost.

If needed, I can (and do) add small, one-off tasks in my daily, weekly, or *“Reminders”* notes, but I prefer having a specific note to log them in. Visiting the Library? Make a new “CITY library” note, and add a task section to it. Now you have a library ‘visit log’. The same applies to doctor’s appointments, restaurants, car maintenance, vet visits, etc. Adjusting my note structure and workflow for obsidian tasks has made my entire vault *much* more useful as a knowledge base for my life.

I mostly view tasks in my daily note, or directly in a project note as I work on it. As dates change, I either use the convenient button to push them to a future day, or use the edit window to make more complicated adjustments to the scheduling of the task. Very handy.

## Conclusion

![An obsidian note about the library, containing completed checkboxes for visits.|600](https://ryan.himmelwright.net/post/started-using-obsidian-tasks-plugin/library_note_visit_log.png)

Adding event ’tasks’ to notes about places has served as an easy way to maintain a visit log.

Like [callouts](https://ryan.himmelwright.net/post/obsidian-callouts/), the tasks plugin has completely changed how I use [obsidian](http://obsidian.md/). There are a few improvements I still want to figure out, like using two global task filters (`#event` in addition to my current `#task`), but overall everything works pretty much as I want it to. The tasks plugin has been the last piece I’ve needed to make Obsidian the *perfect* combined task+note system. I’ve been longing for this since [moving away from Emacs org-mode](https://ryan.himmelwright.net/post/trying-notion/) several years ago. It’s quite the feat.
