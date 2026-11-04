
Date filters work on `due`, `scheduled`, `start`, `created`, `done`, and `cancelled`, with examples like `due before tomorrow`, `scheduled this week`, and `no due date`. Following that pattern, you can use queries like:

```
created after 2026-10-01
created on or after 2026-10-01
created before 2026-09-01
created in 2026-10-01 2026-10-31
created this week
```

The plugin docs only show the `due before tomorrow` and `scheduled this week` style explicitly, so the `created` examples above follow the Tasks date syntax. Try them and see which ones the board accepts.

**Where to put the filter**

- **One board:** Use the filter button above the board to open the raw query editor. Edits from those bars are saved back to that board.
- **Every board:** Put it in the base query in the plugin's settings, which is merged into all boards. That's handy for something like "ignore anything older than a few months."
- **Separate boards:** You can save several boards, each with its own query, for example one for this month and one for older tasks.

**Sorting by creation date**

You can sort by `created`, and add `reverse` to flip the order.

```
sort by created reverse
```

That puts the newest tasks at the top of each column. Grouping by date isn't offered, because it would create one lane per distinct date.

**Caveat**

A task only has a creation date if it has the ➕ date on it. The Tasks plugin adds it automatically only when "Set created date on every added task" is enabled in its settings. Older tasks without the ➕ marker won't match `created after ...` and will drop off the board. You can check which tasks lack it with `no created date`.

If the board is mainly overwhelming because of volume, you can also combine this with other filters, such as `folder includes Projects` or `tag includes #work`.