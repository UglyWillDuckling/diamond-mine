---
title: Editing Dataview Tables with the Metadata Menu plugin - Obsidian Rocks
source: https://obsidian.rocks/editing-dataview-tables-with-the-metadata-menu-plugin/
author:
  - "[[Tim Miller]]"
  - "[[Obsidian Rocks]]"
published: 2023-07-14
created: 2025-01-09
description: Dataview is a wonderful tool, and I recommend it to just about anyone who uses Obsidian. But it has its limitations. One of those limitations is the fact that Dataview doesn’t allow you to edit data, only to view it. This article is for intermediate Dataview users. If you’ve been using Dataview for a while […]
tags:
  - active
related:
  - "[[dataview]]"
  - "[[How to Manage Projects in Obsidian]]"
  - "[[metadatamenu]]"
---
![icon](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/01/or-logo-1.png?fit=32%2C32&ssl=1)

Dataview is a wonderful tool, and I recommend it to just about anyone who uses Obsidian. **But it has its limitations.**

One of those limitations is the fact that Dataview doesn’t allow you to *edit* data, only to *view* it.

This article is for *intermediate* Dataview users. If you’ve been using Dataview for a while and you’re ready to take your skills to the next level, then this is the article for you!

If you aren’t familiar with Dataview, see our article on [Dataview for Beginners](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/).

On This Page \[[hide](https://obsidian.rocks/editing-dataview-tables-with-the-metadata-menu-plugin/#)\]
- [[#The Problem with Dataview|The Problem with Dataview]]
- [[#Setting Up Metadata|Setting Up Metadata]]
- [[#Editing a Dataview table|Editing a Dataview table]]
	- [[#Editing a Dataview table#Converting DQL to DataviewJS|Converting DQL to DataviewJS]]

## The Problem with Dataview

Dataview is great at *fetching* and *displaying* data, but it’s not so great at *updating* data.

If you have a table with a lot of items, it can be hard to go into each note and update every note individually.

But we can fix that. With a little more set up, you can create Dataview tables that you can effortlessly update inline. In practice, that looks like this:

![An example of editing Dataview data inside a table.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/editable-dataview-table.png?resize=807%2C238&ssl=1)

In the screenshot above, both “standing” and “priority” are editable *within the table itself*. Standing has a dropdown menu that allows you to select from a few different options, and priority is a number that you can increase or decrease at the click of a button.

Looks neat, but how do we do this?

Let me introduce you to another incredible community plugin, called [Metadata Menu](https://github.com/mdelobelle/metadatamenu) ([documentation](https://mdelobelle.github.io/metadatamenu/)).

The Metadata Menu plugin is *quite* complicated, but don’t let that worry you. We’re going to address the basics here and make it as simple as possible.

In order to edit Dataview tables inline, you’ll need to install the Metadata Menu plugin. If you already use Dataview then I assume you know how to do that, but if not, see [how to use community plugins](https://obsidian.rocks/how-to-use-community-plugins-in-obsidian/).

Once Metadata Menu is installed and enabled, we need do to a little bit of setup.

Let’s start with a “priority” field, like in the example above. Priority is helpful because it allows you to establish a sort order for your table: that way you can keep the most important things at the *top* of your table, and less important things further down.

To set up priority, open up the Metadata Menu settings, and expand the “Preset Fields Settings”:

![A screenshot of the Metadata Menu settings pane.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/metadata-settings.png?resize=1024%2C680&ssl=1)

Click “Add new”, and you should see this popup:

![A screenshot of the "add a new field" overlay.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/metadata-add-field.png?resize=670%2C603&ssl=1)

For Field Name, enter “Priority”. For Field Type, select “Accept a number”. And finally, enter “0” for Min value and “10” for max value. (you can change that if you like, but I find that ten numbers is enough levels of priority for me)

When you’re done, the overlay should look like this:

![A screenshot of the "add a new field" overlay with configuration for the Priority field.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/metadata-add-priority.png?resize=670%2C603&ssl=1)

“Step” is optional, but if you add a “1” to that field then it will be easier to update.

Click the checkmark to save your work. Now you should see your newly created Priority field under the Preset Fields Settings:

![A screenshot of the Metadata Preset Fields settings with a priority field added.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/metadata-settings-with-priority.png?resize=840%2C276&ssl=1)

And that should be all we need to do in our settings for now. Close the overlay and go back to your notes.

> Note: after adding new field presets you may have to restart Obsidian for your changes to take effect.

## Setting Up Metadata

Now that you have a priority field created, you can add it to any files you want. For example, say you have a project called “Walk the Dog”. Open that note up, and right click within the note.

Metadata Menu includes context menu prompts, so when you right-click inside a note, you will see the “Add field…” new options:

![A screenshot of the right-click context menu with options added by Metadata Menu.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/metadata-context-menu.png?resize=296%2C364&ssl=1)

Click “Add field at section” and select “Add on top of the file”. Then it will ask you what field to add, and you should have two options: ++New++ and the field that we created, “Priority”. Select Priority and give it a value of 1.

Metadata Menu will then add priority to the top of your file, it should look like this:

![An example of a project called "Walk the Dog" with a priority of 1.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/priority-added.png?resize=407%2C234&ssl=1)

Feel free to add this to as many files as you like. Once you’ve added priority to at least one file, we can move on to the Dataview portion of this tutorial.

## Editing a Dataview table

So far in this tutorial we have:

- Installed and enabled the Metadata Menu plugin
- Set up a Priority preset to Metadata Menu
- Added a priority to a simple project

Last but not least, we have to learn how to fetch and *edit* that field with Dataview.

In [how to manage projects in Obsidian](https://obsidian.rocks/how-to-manage-projects-in-obsidian/) I recommended using *tags* to create statuses for projects. I also showed how you could create a table of active projects, using this Dataview code:

```plain
\`\`\`dataview
table standing, priority
from #project/active
sort priority desc
\`\`\`
```

If we add the `#project/active` tag to our Walk the Dog project above, and paste the above query into a new note called “Active Projects”, it looks like this:

![A screenshot of the Walk the Dog project showing up in a Dataview table.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/dataview-project-pull.png?resize=766%2C188&ssl=1)

In order to make this table interactive, we first need to convert it to DataviewJS.

> Note: if you don’t like Dataview’s default table styling, take a look at [Upgrading Obsidian Tables](https://obsidian.rocks/upgrading-obsidian-tables/).

### Converting DQL to DataviewJS

This is the hardest part of this tutorial, but I’m going to try to make it as easy as possible.
In order to edit Dataview tables, you
**have to use DataviewJS instead of the Dataview Query** Language.

The code will look something like this:

```plain
\`\`\`dataviewjs
const tableHeadings = ["Name", "Priority"];
const fileQuery = '#project/active';
const limit = 10;
const sortBy = 'priority';

const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api;

dv
    .table(tableHeadings,
    await Promise.all(dv.pages(fileQuery).limit(limit).sort(k => k[sortBy], 'desc')
    .map(async p => [
        p.file.link,
        await f(dv, p, "priority")
    ])
));

\`\`\`
```

And if everything is set up properly, you should now be able to edit the “Priority” field from within your Dataview table!

---

Before we call it a day, let me explain the above snippet a little more.

The variables at the top of this snippet—`tableHeadings`, `fileQuery`, `limit`, and `sortBy`—should allow you to change this snippet to fit your own vault. You’ll *also* have to edit the array inside the map statement, where it says:

```plain
.map(async p => [
    p.file.link,
    await f(dv, p, "priority")
])
```

`p.file.link` is the name of your file, and `await f(dv, p, "priority")` is the code that gives you the ability to edit the “priority” field. You can use this same syntax with any custom field, you only have to change the “priority” string to the name of your field. Here’s what it would look like to add the “standing” field as an editable field:

```plain
const tableHeadings = ["Name", "Priority", "Standing"];
// ...

.map(async p => [
    p.file.link,
    await f(dv, p, "priority"),
    await f(dv, p, "standing")
])
```

## Conclusion

The Metadata Menu plugin is an extremely versatile plugin, and we’re only scratching the surface of what it can do here. If this is useful for you, you might want to spent a little time reading [the documentation](https://mdelobelle.github.io/metadatamenu/).

We won't send you spam. Unsubscribe at any time.