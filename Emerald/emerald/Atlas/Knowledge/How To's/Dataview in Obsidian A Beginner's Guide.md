---
source: https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/
author:
  - "[[Tim Miller]]"
published: 2023-03-02
created: 2025-02-08
tags:
  - tutorial
  - howto/obsidian/dataview
about:
  - "[[dataview]]"
---
related:: [[Obsidian]], [[dataview]]

Obsidian is a great notetaking app. The built-in features are excellent and more than enough for basic notetaking purposes. *However*, if you want to get *more* out of Obsidian—if you want to [give Obsidian superpowers](https://obsidian.rocks/super-powers-for-obsidian-nine-of-the-best-obsidian-plugins/), per se—then you *have* to check out Dataview.

Out of all the great community plugins, Dataview is my favorite. Dataview allows me to *automate* aspects of my vault, particularly things that would be tiresome or hard to do manually.

For example, Dataview allows me to [quickly and effortlessly create MOCs](https://obsidian.rocks/quick-tip-quickly-organize-notes-in-obsidian/). This trick alone has made it much easier for me to keep my notes organized.

Here are a few other examples of things I do with Dataview:

- List tasks that are due today
- List upcoming birthdays for people in my vault
- Create a table that shows daily or weekly goal completions
- Create [dynamic graphs that show metrics from my vault](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/)
- And SO much more

Want to learn how to automate your own vault with Dataview? Well then, let’s get started.

On This Page \[[hide](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#)\]

- [1 Table of Contents](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Table-of-Contents)
- [2 The fundamentals of Dataview](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#The-fundamentals-of-Dataview)
- [3 Limiting your Dataview queries](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Limiting-your-Dataview-queries)
- [3.1 Limiting to folders](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Limiting-to-folders)
- [3.2 Limiting to tags](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Limiting-to-tags)
- [3.3 Combining sources](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Combining-sources)
- [4 Different types of data in Dataview](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Different-types-of-data-in-Dataview)
- [4.1 Built-in data](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Built-in-data)
- [4.2 Adding custom data to your notes](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Adding-custom-data-to-your-notes)
- [5 Removing results from your query](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Removing-results-from-your-query)
- [5.1 How to filter results](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#How-to-filter-results)
- [5.2 Sorting results](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Sorting-results)
- [5.3 Limiting](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Limiting)
- [6 Tasks and Dataview](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Tasks-and-Dataview)
- [7 Not interested in the nuts and bolts? Here are a few “recipes” to get you started](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Not-interested-in-the-nuts-and-bolts-Here-are-a-few-recipes-to-get-you-started)
- [7.1 List files created in the last week](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#List-files-created-in-the-last-week)
- [7.2 List tagged notes in order of last edits](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#List-tagged-notes-in-order-of-last-edits)
- [7.3 List unlinked files](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#List-unlinked-files)
- [7.4 List Workout Logs (or any other habit!)](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#List-Workout-Logs-or-any-other-habit)
- [7.5 List Completed Tasks](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#List-Completed-Tasks)
- [7.6 Edit Dataview Tables Inline](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Edit-Dataview-Tables-Inline)
- [8 Conclusion and More Resources](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#Conclusion-and-More-Resources)

## Table of Contents

- [The fundamentals of Dataview](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#fundamentals)
- [Limiting your queries](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#limiting-queries)
- [Types of data in Dataview](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#types-of-data)
- [Built-in data](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#built-in-data)
- [Adding custom data to your notes](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#custom-data)
- [Excluding results from your query](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#removing-results)
- [Filtering](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#filtering)
- [Sorting](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#sorting)
- [Limiting](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#limiting)
- [Tasks and Dataview](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#tasks-and-dataview)
- [Not interested in the nuts and bolts? Start here.](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#examples)
- [Conclusion / More Resources](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#resources)

## The fundamentals of Dataview

Getting started with Dataview can be tricky. But if you have an Obsidian vault set up with a few files in it, then you have everything you need to get started. If not, try downloading [this practice vault](https://github.com/s-blu/obsidian_dataview_example_vault).

To start with, it’s important to keep in mind that Dataview helps you *view* data, it doesn’t help you to *edit* it. A *Dataview query* pulls notes from your vault but it never *changes* them, so there’s no risk of destroying your hard earned notes with Dataview.

> Note: there’s a new version of Dataview called [Datacore](https://github.com/blacksmithgu/datacore) that is built by the same developer. Datacore promises to help you edit data better than Dataview can. It isn’t ready for prime time yet, but we’ll write about it when it is.

There are four primary *formats* you can use to display data in Dataview. They are:

- Table
- List
- Task
- Calendar

Now, if we run a query with each of these formats, the results look different. We have the same data, but Dataview displays it in the requested format. The four different formats offered by Dataview look something like this:

![An image that shows the four different formats offered by Dataview: Calendar, List, Table, and Tasks.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/03/types-of-dataview-data-1.jpg?resize=1024%2C512&ssl=1)

The four formats offered by Dataview.

Typically you’ll use either table or list queries. The other two are more situational.

Additionally, the format is the *only mandatory command* in Dataview. Your first Dataview query could be as simple as this:

The above query will create a list that includes *all the files in your vault*.

*But* if you have a big vault, this query is slow and not very useful. Typically you’ll want to *scope* your query to a specific folder. Let’s talk about that next.

## Limiting your Dataview queries

Typically you don’t want to view *all* of the notes in your vault with a given Dataview query. You’ll want to *limit the scope* of your query using a *source*.

### Limiting to folders

Including a source tells Dataview where to look for the data you’re trying to pull. The simplest source is a folder, and you can limit your search to a folder using this syntax:

```plain
\`\`\`dataview
LIST
FROM "A Folder"
\`\`\`
```

Notice the quotes: the quotes tell Dataview to look for a file or folder. You can also limit it to individual files or subfolders using standard file syntax. E.g. `FROM "A Folder/Subfolder"` or `FROM "A Folder/Subfolder/File.md"`

### Limiting to tags

Another way to limit your results is to pull based on tags. In Obsidian, you can add a tag to any file by using a hashtag, e.g. `#tag`. Then you can pull any files that include that tag with Dataview:

```plain
\`\`\`dataview
LIST
FROM #tag
\`\`\`
```

> Note: you can also do this tag search with the built-in search plugin. If you aren’t quite ready to adopt Dataview, [take a look at embedded searches](https://obsidian.rocks/obsidian-search-five-hidden-features/#embedded-search).

Tag searches are also useful with *nested tags*. I find it very useful to use [nested tags for project statuses](https://obsidian.rocks/how-to-manage-projects-in-obsidian/), and then I can pull *all projects* using the `#project` tag, or I can scope it to a particular status such as `#project/soon` or `#project/active`. Nested tags are great for indicating the status of a file, whether you’re \[\[growing your digital garden\]\] or managing projects.

### Combining sources

Folders and tags are the two primary ways we *source* data with Dataview. But you can also *combine* the two sources to make more complex queries. You can do this by using the `AND` and `OR` operators. You can also use parenthesis to specify the logical order of these statements (it’s like highschool math: anything in parenthesis goes first):

```plain
\`\`\`dataview
LIST
FROM "Projects" AND (#project/active OR #project/soon) 
\`\`\`
```

## Different types of data in Dataview

Next we need to talk about the different types of data in Dataview.

There’s one thing you cannot query in Dataview: the *contents* of your notes. To keep Dataview speedy, you aren’t able to search the actual *contents* of your notes with Dataview. This sounds like a big limitation, but with some careful thought and attention it’s not as limiting as it sounds. If you *do* want to embed search results in your notes, you can do that with [the built-in search plugin](https://obsidian.rocks/obsidian-search-five-hidden-features/).

What Dataview *does* do is includes a bunch of *built-in metadata* for each of your notes, allowing you to pull your notes quickly based on any number of different factors. Additionally, you can add your *own* metadata to notes if you require it. Let’s go over those two types of data.

### Built-in data

Dataview gives you a ton of control with a bunch of *built-in* metadata for all of your notes. As soon as you enable the Dataview plugin it works behind the scenes to create this data, so you can use it at any time. Here’s a complete list of all the data that Dataview creates, borrowed [from the documentation](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/):

| Field Name             | Description                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file.name`            | The file name as seen in Obsidians sidebar.                                                                                                                                     |
| `file.folder`          | The path of the folder this file belongs to.                                                                                                                                    |
| `file.path`            | The full file path, including the files name.                                                                                                                                   |
| `file.ext`             | The extension of the file type; generally `md`.                                                                                                                                 |
| `file.link`            | A link to the file.                                                                                                                                                             |
| `file.size`            | The size (in bytes) of the file.                                                                                                                                                |
| `file.ctime` with Time | The date that the file was created.                                                                                                                                             |
| `file.cday`            | The date that the file was created.                                                                                                                                             |
| `file.mtime` with Time | The date that the file was last modified.                                                                                                                                       |
| `file.mday`            | The date that the file was last modified.                                                                                                                                       |
| `file.tags`            | A list of all unique tags in the note. Subtags are broken down by each level, so `#Tag/1/A` will be stored in the list as `[#Tag, #Tag/1, #Tag/1/A]`.                           |
| `file.etags`           | A list of all explicit tags in the note; unlike `file.tags`, does not break subtags down, i.e. `[#Tag/1/A]`                                                                     |
| `file.inlinks`         | A list of all incoming links to this file, meaning all files that contain a link to this file.                                                                                  |
| `file.outlinks`        | A list of all outgoing links from this file, meaning all links the file contains.                                                                                               |
| `file.aliases`         | A list of all aliases for the note as defined via the [YAML frontmatter](https://help.obsidian.md/How+to/Add+aliases+to+note).                                                  |
| `file.tasks`           | A list of all tasks (I.e., `\|[ ] some task`) in this file.                                                                                                                     |
| `file.lists`           | A list of all list elements in the file (including tasks); these elements are effectively tasks and can be rendered in task views.                                              |
| `file.frontmatter`     | Contains the raw values of all frontmatter in form of `key \|value` text values; mainly useful for checking raw frontmatter values or for dynamically listing frontmatter keys. |
| `file.day`             | Only available if the file has a date inside its file name (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field.                                            |
| `file.starred`         | if this file has been starred via the Obsidian Core Plugin “Starred Files”.                                                                                                     |

It’s not a bad idea to save the above table as a note for your own reference. When working with Dataview, it’s a handy thing to have on hand. ([here’s a Markdown version you can copy/paste](https://gist.githubusercontent.com/WebInspectInc/589bbd8aca2b1a4cdb1d03c8187d33de/raw/b3946f26ea3c49016c5b9c32ce0dae8abbfc7782/dataview-implicit-types.markdown))

Any of the above data can be used in any Dataview query. For example, we could create a table with all of our starred notes like this:

```plain
\`\`\`dataview
TABLE file.starred AS "⭐"
WHERE file.starred = true
\`\`\`
```

> Note: Notice that you can change table headers using the AS keyword. In the above example, the table name will be a star icon rather than the default “file.starred”.

### Adding custom data to your notes

In addition to the data above, you can also add your own custom data to any note. You can use this for anything you could imagine. To add custom data, you can either add Properties, or you can use the double-colon syntax.

Properties are added at the top of your document (or in the sidebar), and are useful for all sorts of things. If you’re not familiar with Properties, check out our [Introduction to Obsidian Properties](https://obsidian.rocks/an-introduction-to-obsidian-properties/) and [Five Pro Tips for Obsidian Properties](https://obsidian.rocks/five-pro-tips-for-obsidian-properties/).

Properties are cleaner if you have a *lot* of data to add, but if you only have a few things, then Dataview has another syntax that is *only* used for Dataview. This data can be added *anywhere* within your note, and it looks like this:

```plain
date:: 202302280654
aliases:: ['data']
status:: Idea
```

Both Properties and the metadata above can be queried with Dataview, like this:

```plain
\`\`\`dataview
LIST
WHERE status = "Idea"
\`\`\`
```

## *Removing* results from your query

The two queries above use a WHERE statement, which we haven’t talked about yet. WHERE is one way to *exclude* results from a query.

Excluding results is where magic happens. Viewing notes by tag or folder is all well and good, there’s only so much you can do with that. Filtering out results based on data—*that*’s the good stuff.

### How to filter results

Filtering is the most complex—but also the most flexible—way to exclude things from your search. Filtering allows you to exclude notes based on data inside the note itself. Going back to the examples above, you can create lists or tables using any of the built-in data, such as viewing all of your starred notes:

```plain
\`\`\`dataview
LIST
WHERE file.starred = true
\`\`\`
```

You can also fetch notes based on the last time they were modified. One query that I find useful shows a list of all the notes I’ve edited in the last week:

```plain
\`\`\`dataview
LIST
WHERE file.mtime >= date(today) - dur(1 week)
\`\`\`
```

This is a little more complicated, but it can be extremely useful. The query above is checking the “mtime” (the last time the file was *modified*) and comparing it against yesterday’s date. If the file hasn’t been modified in the last day, this would exclude it from the results.

The WHERE clause can check *any* data in *any* note. This includes *built-in* data as well as custom data. If you need to exclude files based on data inside the note itself, WHERE is the way to do it.

> Note: Often times when you’re using WHERE you don’t need to use FROM, but scoping your query to a certain folder or tag *can* speed up your query if it seems to run slowly.

### Sorting results

Sometimes you may want your results to show in a different order than the default. If that is the case, then you’ll need the SORT keyword. You can sort based on any field, and you can choose either DESC or ASC.

```plain
\`\`\`dataview
LIST
FROM #tag
SORT file.name ASC
\`\`\`
```

### Limiting

You can also *limit* any query if it’s returning too many results. This is particularly handy for big queries, and can help speed up a slow document. And the syntax is simple, you can use any whole number here:

```plain
\`\`\`dataview
LIST
FROM #tag
LIMIT 10
\`\`\`
```

## Tasks and Dataview

Astute readers may notice that we haven’t discussed tasks yet. I’d like to address that here.

When I first started using Dataview, I used the TASK query heavily. But these days I have a different, and I think better, solution.

I have written about my whole [task management solution](https://obsidian.rocks/how-to-manage-tasks-in-obsidian/) before, and it involves Dataview. But most of the tasks themselves are managed with the [Tasks plugin](https://github.com/obsidian-tasks-group/obsidian-tasks), which I find works much better than Dataview. Tasks also has dynamic queries like Dataview, but they’re much more interactive and useful than Dataview’s queries. [Learn more about managing tasks here](https://obsidian.rocks/creating-a-today-view-in-obsidian/).

## Not interested in the nuts and bolts? Here are a few “recipes” to get you started

You might be overwhelmed at this point, and that’s okay. Dataview is a complicated plugin with infinite uses, and it can take a long time to get comfortable with it.

Here are a few pre-built queries that you can copy/paste into your vault that may be useful for you. Make sure you have Dataview [installed and enabled](https://obsidian.rocks/how-to-use-community-plugins-in-obsidian/) before trying any of these.

### List files created in the last week

```plain
\`\`\`dataview
TABLE file.ctime AS "Created"
WHERE file.ctime >= date(today) - dur(1 week)
\`\`\`
```

### List tagged notes in order of last edits

Replace `#tag` with your own tag, and this will show you all the notes with `#tag` in order of most recent edits:

```plain
\`\`\`dataview
LIST FROM #tag
SORT file.mtime DESC
\`\`\`
```

### List unlinked files

This is one of my [favorite ways to build MOCs](https://obsidian.rocks/quick-tip-quickly-organize-notes-in-obsidian/):

```plain
\`\`\`dataview
list from [[]] and !outgoing([[]])
\`\`\`
```

This will create a list of all files that link to the current file but *do not* already have a link in the file. This is a great way to [avoid losing files in your Zettelkasten](https://obsidian.rocks/getting-started-with-zettelkasten-in-obsidian/).

### List Workout Logs (or any other habit!)

This requires the use of the [Daily Notes](https://obsidian.rocks/supercharge-your-daily-notes-in-obsidian/ "Daily Notes") plugin. If you use the Daily Notes plugin, you can add workouts (or any daily habit) to your daily notes, and display your progress in a table like this:

```plain
\`\`\`dataview
TABLE workout
FROM "2 Areas/Journal/Daily Notes"
SORT file.ctime DESC
LIMIT 14
\`\`\`
```

### List Completed Tasks

Even though most of my task management happens with the Tasks plugin, there are a few unique task-based things that Dataview brings to the table. For instance, you can list out the ten oldest and incomplete tasks in your vault like this:

```plain
\`\`\`dataview
TASK
WHERE !completed
LIMIT 10
GROUP BY file.link
SORT rows.file.ctime ASC
\`\`\`
```

### Edit Dataview Tables Inline

Dataview is primarily a tool for *viewing* data, not for *editing* it. But with a clever trick or two, you can use it for both.

If you find yourself using a lot of tables in Dataview and want to be able to quickly edit the content inside those tables, you might want to check out [how to edit Dataview tables inline](https://obsidian.rocks/editing-dataview-tables-with-the-metadata-menu-plugin/). This is an advanced trick, but for certain people, setting it up is definitely worth it.

## Conclusion and More Resources

Dataview is an incredible and powerful plugin that gives you many different tools for better understanding and viewing your notes. If you haven’t tried it out before, I hope this article gives you the confidence to do so.

If you get stuck or have trouble, feel free to ask in the comments below or [on the forum](https://forum.obsidian.md/). Additionally, here are a few resources that may be helpful if you want to learn more:

- [Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/)
- [Dataview example vault](https://s-blu.github.io/obsidian_dataview_example_vault/) (lots of good ideas and inspiration here)
- [Basic Dataview query builder](https://s-blu.github.io/basic-dataview-query-builder/)

We won't send you spam. Unsubscribe at any time.