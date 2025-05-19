---
source: https://forum.obsidian.md/t/dataview-using-date-as-a-filter/82943/4
author:
  - "[[markr]]"
published: 2024-06-03
created: 2025-02-10
tags:
  - howto/obsidian/dataview
  - dataview/filter
---
### What I’m trying to do

Hi,  
I am trying to create dynamic filters to list the meetings that I have on that day. I use Meta Bind button to create a meeting and then I try and create a dynamic list using the following dataview:

```dataview
table without id
file.link as meetings, created-date as created, summary
where contains(type,"Meeting")
AND file.cday = this.file.day
SORT file.ctime DESC
```

This works but I use a tablet and store updates to Github and somewhere in the process, the creation date of the file can change. The result is that I end up with the wrong meetings - on the wrong days - appearing in the list.

The meeting template has a created-date property and I thought that I could create a dataview using this property but whatever I try, I cannot get to work to create the table as outlined above.  
The dataview

```dataview
table without id
file.link as meetings, created-date as created, summary
where contains(type,"Meeting")
AND created-date = date(today)
SORT created-date DESC
```

is blank.

Any ideas / help greatly appreciated,  
Thanks, Mark.

Hello.

The following works in a test vault:

```yaml
---
created-date: 2024-06-03
type: Meeting
summary: Here is the summary
---

## Query

\`\`\`dataview
table without id
file.link as meetings,
created-date as created, 
summary
where contains(type,"Meeting")
AND created-date = date(today)
SORT created-date DESC
\`\`\`
```

What value is used for the `created-date` key?

[![sample](https://forum.obsidian.md/uploads/default/optimized/3X/0/d/0d1d6f2deff599b8b75602b46f0815834566e66d_2_690x261.jpeg)](https://forum.obsidian.md/uploads/default/original/3X/0/d/0d1d6f2deff599b8b75602b46f0815834566e66d.jpeg "sample")

Thanks for the reply. I see that my created-date also has the time in and so maybe that is the reason the equality doesn’t work. I am not sure how to just use the date part of created-date so that created-date = date(today) will be comparing apples and apples?  
Thanks for your help,  
Mark.

Hello.

If you have a date-and-time property that follows the [ISO 8601 3](https://en.wikipedia.org/wiki/ISO_8601) standard, [striptime 5](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/#striptimedate) should allow the query to work, as in this example.

[![striptime](https://forum.obsidian.md/uploads/default/optimized/3X/1/6/1642c3518ea1219c06969ff4f37b34e80f0b74a2_2_690x415.jpeg)](https://forum.obsidian.md/uploads/default/original/3X/1/6/1642c3518ea1219c06969ff4f37b34e80f0b74a2.jpeg "striptime")

```yaml
---
created-date: 2024-06-04T17:15
type: Meeting
summary: This is an updated summary
---

Hello.

If you have a date-and-time property that follows the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard, [striptime](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/#striptimedate) should allow the query to work, as in this example.

## Query

\`\`\`dataview
table without id
file.link as meetings,
striptime(created-date) as created, 
summary
where contains(type,"Meeting")
AND striptime(created-date) = date(today)
SORT created-date DESC
\`\`\`
```
