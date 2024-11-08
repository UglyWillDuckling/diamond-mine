---
color: var(--mk-color-pink)
tags:
  - work
---
> This is now a bit like a note 📔🗒

## tasks ✔

```tasks
not done
path includes work/tickets
sort by path
sort by priority
group by filename
show tree
```

## calls - upcoming and recent
- [x] #task don't show table if no results ✅ 2024-11-08
- [ ] #task add recent calls table

```dataviewjs
const query = `
TABLE WITHOUT ID
file.link as call, file.day - date(today) AS in, regexreplace(file.folder, "^.*\/", "") AS Area
FROM #work/call
WHERE file.day AND file.day > date(yesterday)
sort date DESC
`
let DQL = await dv.tryQuery(query);
if (DQL.values.length > 0){
	dv.table(DQL.headers, DQL.values)
} else {
	dv.el("b", "no upcoming calls found");
}
```
