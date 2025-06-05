---
source: https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/
created: 2025-02-08
tags:
  - docs/dataview
  - docs/official
---
about:: [[dataview]]
___

Once you've added [useful data to relevant pages](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/), you'll want to actually display it somewhere or operate on it. Dataview allows this in four different ways, all of which are written in codeblocks directly in your Markdown and live-reloaded when your vault changes.

## Dataview Query Language (DQL)

The [**Dataview Query Language**](https://blacksmithgu.github.io/obsidian-dataview/queries/structure) (for short **DQL**) is a SQL-like language and Dataviews core functionality. It supports [four Query Types](https://blacksmithgu.github.io/obsidian-dataview/queries/query-types/) to produce different outputs, [data commands](https://blacksmithgu.github.io/obsidian-dataview/queries/data-commands/) to refine, resort or group your result and [plentiful functions](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/) which allow numerous operations and adjustments to achieve your wanted output.

Warning

If you are familiar with SQL, please read [Differences to SQL](https://blacksmithgu.github.io/obsidian-dataview/queries/differences-to-sql) to avoid confusing DQL with SQL.

You create a **DQL** query with a codeblock that uses `dataview` as type:

```
\`\`\`dataview
TABLE rating AS "Rating", summary AS "Summary" FROM #games
SORT rating DESC
\`\`\`
```

Use backticks

A valid codeblock needs to use backticks (\`) on start and end (three each). Do not confuse the backtick with the similar looking apostrophe ' !

Find a explanation how to write a DQL Query under the [query language reference](https://blacksmithgu.github.io/obsidian-dataview/queries/structure). If you learn better by example, take a look at the [query examples](https://blacksmithgu.github.io/obsidian-dataview/resources/examples).

## Inline DQL

A Inline DQL uses a inline block format instead of a code block and a configurable prefix to mark this inline code block as a DQL block.

Change of DQL prefix

You can change the \`=\` to another token (like `dv:` or `~`) in Dataviews' settings under "Codeblock Settings" > "Inline Query Prefix"

Inline DQL Queries display **exactly one value** somewhere in the middle of your note. They seamlessly blend into the content of your note:

```
Today is \`= date(today)\` - \`= [[exams]].deadline - date(today)\` until exams!
```

would, for example, render to

```
Today is November 07, 2022 - 2 months, 5 days until exams!
```

**Inline DQL** cannot query multiple pages. They always display exactly one value, not a list (or table) of values. You can either access the properties of the **current page** via prefix `this.` or a different page via `[[linkToPage]]`.

```
\`= this.file.name\`
\`= this.file.mtime\`
\`= this.someMetadataField\`
\`= [[secondPage]].file.name\`
\`= [[secondPage]].file.mtime\`
\`= [[secondPage]].someMetadataField\`
```

You can use everything available as [expressions](https://blacksmithgu.github.io/obsidian-dataview/reference/expressions) and [literals](https://blacksmithgu.github.io/obsidian-dataview/reference/literals) in an Inline DQL Query, including [functions](https://blacksmithgu.github.io/obsidian-dataview/reference/functions). Query Types and Data Commands, on the other hand, are **not available in Inlines.**

```
Assignment due in \`= this.due - date(today)\`
Final paper due in \`= [[Computer Science Theory]].due - date(today)\`

🏃‍♂️ Goal reached? \`= choice(this.steps > 10000, "YES!", "**No**, get moving!")\`

You have \`= length(filter(link(dateformat(date(today), "yyyy-MM-dd")).file.tasks, (t) => !t.completed))\` tasks to do. \`= choice(date(today).weekday > 5, "Take it easy!", "Time to get work done!")\` 
```

## Dataview JS

The dataview [JavaScript API](https://blacksmithgu.github.io/obsidian-dataview/api/intro) gives you the full power of JavaScript and provides a DSL for pulling Dataview data and executing queries, allowing you to create arbitrarily complex queries and views. Similar to the query language, you create Dataview JS blocks via a `dataviewjs`\-annotated codeblock:

```
\`\`\`dataviewjs
let pages = dv.pages("#books and -#books/finished").where(b => b.rating >= 7);
for (let group of pages.groupBy(b => b.genre)) {
   dv.header(3, group.key);
   dv.list(group.rows.file.name);
}
\`\`\`
```

Inside of a JS dataview block, you have access to the full dataview API via the `dv` variable. For an explanation of what you can do with it, see the [API documentation](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference), or the [API examples](https://blacksmithgu.github.io/obsidian-dataview/api/code-examples).

Advanced usage

Writing Javascript queries is a advanced technique that requires understanding in programming and JS. Please be aware that JS Queries have access to your file system and be cautious when using other peopless' JS Queries, especially when they are not publicy shared through the Obsidian Community.

## Inline Dataview JS

Similar to the query language, you can write JS inline queries, which let you embed a computed JS value directly. You create JS inline queries via inline code blocks:

```js
\`$= dv.current().file.mtime\`
```

In inline DataviewJS, you have access to the `dv` variable, as in `dataviewjs` codeblocks, and can make all of the same calls. The result should be something which evaluates to a JavaScript value, which Dataview will automatically render appropriately.

Unlike Inline DQL queries, Inline JS queries do have access to everything a Dataview JS Query has available and can hence query and output multiple pages.

Change of Inline JS prefix

You can change the `$=` to another token (like `dvjs:` or `$~`) in Dataviews' settings under "Codeblock Settings" > "Javascript Inline Query Prefix"