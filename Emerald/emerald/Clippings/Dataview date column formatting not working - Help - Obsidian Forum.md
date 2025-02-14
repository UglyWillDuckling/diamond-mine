---
author:
  - "[[NoteNexus]]"
created: 2025-02-13
published: 2024-03-14
source: "https://forum.obsidian.md/t/dataview-date-column-formatting-not-working/78624/2"
tags:
---
Hello everyone, tried my best to solve this on my own, but I don’t know why it is not working out.

### What I’m trying to do

I’m trying to display a table containing a date column with format respecting the settings in Dataview.  
Unfortunately, it is not being formatted.

This is my query:

```dataview
TABLE created, modified, tags
WHERE modified >= "2024-03-14 15:27"
```
### Things I have tried

I tried using a dateformat function without success. Any ideas what could be the cause?

Thank you!

![Screenshot 2024-03-14 at 15.43.45](https://forum.obsidian.md/uploads/default/original/3X/a/e/ae5951cf797205e8cf2954ed680280234e0ce4b3.png)  
![Screenshot 2024-03-14 at 15.43.28](https://forum.obsidian.md/uploads/default/original/3X/d/4/d4d658a37760f65ff0062a259f14569fb34aab20.png)  

[![Screenshot 2024-03-14 at 15.42.57](https://forum.obsidian.md/uploads/default/original/3X/3/3/339eadb92a67e3cecc085b113c23dbb849564065.png)](https://forum.obsidian.md/uploads/default/original/3X/3/3/339eadb92a67e3cecc085b113c23dbb849564065.png "Screenshot 2024-03-14 at 15.42.57")

Currently your text string is not recognised as a date, since it’s lacking the `T` between the date and time part. See [date type 4](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/#date)

So basically you’ve got two options:

1. Change all of your properties to become proper dates, and not just text strings as they are currently
2. Use the [date(text, format) 10](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/#datetext-format) to transform those texts into a date again, i.e. something like `date(modified, "yyyy-MM-dd HH:mm")` (Untested, but I think it’s the correct variant, as this is not the first time I’ve answered this question… )

What is odd is that the fields were already set as datetime:  

[![Screenshot 2024-03-20 at 15.04.39](https://forum.obsidian.md/uploads/default/original/3X/b/e/bef5a6b46f2b1164577e0bd624288123f82a6ae8.png)](https://forum.obsidian.md/uploads/default/original/3X/b/e/bef5a6b46f2b1164577e0bd624288123f82a6ae8.png "Screenshot 2024-03-20 at 15.04.39")

In any case, your second suggestion worked like a charm.

```dataview
TABLE date(created, "yyyy-MM-dd HH:mm") as "date"
```

Cheers!

What Obsidian considers a date, and what *Dataview* considers a date is unfortunately currently not the same. Obsidian accepts the missing `T`, but *dataview* doesn’t (as of v0.5.65). Therefore one needs to reformat it back into a date using that `date(text, format)` variant.

This topic was automatically closed 7 days after the last reply. New replies are no longer allowed.