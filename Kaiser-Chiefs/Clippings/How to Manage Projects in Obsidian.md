---
title: How to Manage Projects in Obsidian - Obsidian Rocks
source: https://obsidian.rocks/how-to-manage-projects-in-obsidian/
author:
  - "[[Tim Miller]]"
  - "[[Obsidian Rocks]]"
published: 2022-10-13
created: 2025-01-09
description: How do you manage projects in Obsidian? I like to automate projects as much as possible, and we can do that using the Dataview plugin.
tags:
  - article
  - howto
  - howto/article
  - howto/obsidian
  - projects
  - obsidian
  - processing
part of:
  - "[[How to Manage Tasks in Obsidian-The Complete Guide - Obsidian Rocks]]"
related:
  - "[[How to Add Tasks to your Daily Notes]]"
---
![icon](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/01/or-logo-1.png?fit=32%2C32&ssl=1])

We’ve already discussed *why* you might want to manage projects in Obsidian, now let’s talk about *how*. How do you set up Obsidian to properly manage projects?

My advice: create a project view. Using a plugin called Dataview, you can create a dynamic dashboard that helps you keep all of your work properly organized.

The project view gives you a wider overview of your current projects, and helps you to keep a broader perspective. The project view is used for review, and for choosing your priorities every day.

This isn’t the only way to manage projects in Obsidian, but for complex multi-task projects, it can be just the thing you need.

- [[#Limitations|Limitations]]
- [[#Prerequisites|Prerequisites]]
- [[#Using Tags to Track Project Status|Using Tags to Track Project Status]]
	- [[#Using Tags to Track Project Status#Project Templates|Project Templates]]
- [[#Creating Dataview Dashboards to Manage Projects in Obsidian|Creating Dataview Dashboards to Manage Projects in Obsidian]]
	- [[#Creating Dataview Dashboards to Manage Projects in Obsidian#Displaying All Active Projects|Displaying All Active Projects]]
- [[#Displaying Ongoing Projects|Displaying Ongoing Projects]]
- [[#Displaying Upcoming Projects|Displaying Upcoming Projects]]
- [[#Displaying Archived Projects|Displaying Archived Projects]]
- [[#Just Use Kanban?|Just Use Kanban?]]

## Limitations
> [!info] does not cover **due dates**

Additionally, this is a **tag-based** workflow, so you have to remember to keep those tags up-to-date. I recommend you review your project view every week, and that way you ensure that you aren’t missing anything.

(It’s not a bad idea to set up a [[recurring task]] for this. If you have a **Today view**, then it will remind you to review every week)
## Using Tags to Track Project Status

If you want an automated project view in Obsidian, then you’ll first need a way to designate the *status* of a project.

I recommend tags for this. Tags are easy to use, they autocomplete, and Dataview *loves* them. I have four different tags that I use to track project status. I use these tags to sort projects by priority, similar to how I sort [tasks in my today view](https://obsidian.rocks/creating-a-today-view-in-obsidian/).

Here are the four tags I use:

- #‎project/soon
- #‎project/active
- #‎project/routine
- #‎project/archive

I also use tags to separate my personal from my work projects. To do that, I add one of these two tags to each project:

- #‎work
- #‎personal

There are a couple of other bits of custom data I add to some projects, including a *standing*, a *priority*, and a *deadline*. I add these using Dataview variables, which look like this:

- standing:: in progress
- priority:: 0
- deadline:: 2024-01-01

### Project Templates

To keep all of this straight, I created a “[[New Project template]]”, which I use to create each new project.

If you use the Core Templates plugin, this template should work for you too. Feel free to modify it to fit your needs, the important thing is the tags, and the Dataview variables if you choose to use them:

```
[[Client MOC]]
%% tags: #work #project/soon %%

standing:: coming soon
priority:: 0
deadline:: 2023-01-01

# {{title}}
- [ ] Todos go here
```

> Note: I also hide the tags in preview mode using percentage signs: if you prefer to see the tags, feel free to remove those.

## Creating Dataview Dashboards to Manage Projects in Obsidian

It may seem like a lot of work to get that set up, but it will be worth it.

Once you have a few projects set up in your vault, you can then start to *query* your projects with Dataview.

I like to create a few separate views. For example, I have a work view and a personal view. Each view displays only what I need when I need it.

This is one of the strengths of using Obsidian for projects: you can customize your views and fine-tune them to show only what you need.

### Displaying All Active Projects

My Active Projects view looks like this:

![](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2022/10/2022-10-13_06-32.png?resize=866%2C603&ssl=1)

That table is created using this Dataview code:

```
\`\`\`dataview
table standing, priority
from #project/active AND "Projects"
sort priority desc
\\`\`\`
```

> Note: I keep all my active projects in a “Projects” folder. If you prefer to have your projects spread out (or in a different folder), change the line that says AND “Projects”.

**This code creates a table, and includes all my active projects, sorting them by priority.**

The main reason I add priority to my projects is so that I can sort them. I like to have my most important project at the top. But you could also sort by `file.name` or `file.mtime` (date last modified).

> Note: if you decide to implement this project view, you might also want to look into [editing Dataview tables inline](https://obsidian.rocks/editing-dataview-tables-with-the-metadata-menu-plugin/). It’s a wonderful addition to this workflow.

## Displaying Ongoing Projects

%% created [[Projects]] %%

> [!important] important
I like to separate my *active projects* from my *ongoing projects*. Active projects often have due dates and they are *completed* and *archived* once all the tasks are complete.
*Ongoing* projects are different. I use ongoing projects for chores, routines, areas of interest, anything with repeating tasks and no definite end date.

The goal of an *Active Project* is to finish it, the goal of an *Ongoing Project* is to make steady progress over long periods.

To see ongoing projects, I use the tag `#project/ongoing`, and this Dataview code:

```
\`\`\`dataview
table standing
from #project/ongoing
sort file.name asc
\\`\`\`
```

## Displaying Upcoming Projects

After listing my active and ongoing projects, I like to see projects that are coming up. For those projects, I use the tag `#project/soon`, and you can see those projects using this code:

```
\`\`\`dataview
table standing
from #project/soon
sort file.name asc
\\`\`\`
```

## Displaying Archived Projects

You may or may not want to list your archived projects. Some people like to see them and to see the list grow over time, others like archived projects to go away and leave them alone.

The choice is yours. If you do want to see your archived projects, you might want to simplify and limit the list. Or create a new view, perhaps called “Archived projects”. For example, here’s a query that spits out a list of your latest archived projects, sorted by modified date, and limited to 15:

```
\`\`\`dataview
list
from #project/archive
sort file.mtime asc
limit 15
\\`\`\`
```

## Just Use Kanban?

If you haven’t heard of [[Kanban]] before, it’s another method you could use to display this kind of information. There’s an excellent [Kanban community plugin you can use](https://github.com/mgmeyers/obsidian-kanban), if that interests you. It looks like this:

![](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2022/10/2022-10-13_06-38.png?resize=1024%2C569&ssl=1)

This is my “Writing Board”, I like to use Kanban to keep track of articles that I am working on.

Unfortunately, at the time of writing, the Kanban plugin doesn’t support pulling in cards dynamically. It’s still a very useful plugin, but none of the above Dataview queries will work in tandem with Kanban at this point. You have to manage each card manually, which is less useful for me. The [developer is working on fixing this](https://github.com/mgmeyers/obsidian-kanban/issues/550), but until that functionality is available, I prefer a more dynamic solution.

We won't send you spam. Unsubscribe at any time.