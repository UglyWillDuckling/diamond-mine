---
color: var(--mk-color-pink)
tags:
  - work
---
> This is now a bit like a note 📔🗒

## tasks - active tickets 🎟

```tasks
not done
path includes work/tickets
sort by path
sort by priority
group by filename
show tree
```

## calls - upcoming an recent
[[data view]]

```dataview
TABLE WITHOUT ID
file.link as call, file.day - date(today) AS in, regexreplace(file.folder, "^.*\/", "") AS Area
FROM #work/call
WHERE file.day AND file.day > date(today)
sort date DESC
```
