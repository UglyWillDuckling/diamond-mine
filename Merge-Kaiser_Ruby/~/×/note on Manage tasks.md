#note #ephemeral

about:: [[How to Manage Tasks in Obsidian I Turned Obsidian into the Ultimate Task Manager]]

## dashboard and queries

### `Ready` list

```md
\```tasks
not done
(due before next week) OR (scheduled before next week)
sort by due
short mode
\```
```

Show tasks that are planned/scheduled **this** **week** sorted by [[due date|rok]]

### `Scheduled` list

Shows all tasks that have a date set for them. This can be either a [[due date]] or a [[scheduled date]], or a [[start date|pocetak]].

```md
\```tasks
not done
(has due date) OR (has scheduled date) OR (has start date)
hide tags
short mode
\```
```

### This `Month` list

Displays tasks that are planned for this month.

```md
\```tasks
not done 
(has due date) OR (has scheduled date)
((due after this week) AND (due in or before next 4 weeks)) OR
((scheduled after this week) AND (scheduled in or before next 4 weeks))
sort by due
hide tags
short mode
\```
```

### `backburner` list

Shows tasks that aren't planned for now

```md
\```tasks
not done
tag include #backburner 
hide tags
sort by created
short mode
\```
```

### `inbox`

Place for quick capture

```md
\```tasks
not done
no due date
no start date
no scheduled date
no tag
limit 8
\```
```
