---
color: var(--mk-color-pink)
tags:
  - work
---
## tasks ✔

### unsorted
- [x] #task 📅 2024-11-14  [[fix Dockerfile]] ✅ 2024-11-14

### pending tasks

```tasks
not done
path includes work
sort by path
sort by priority
group by filename
show tree
```
---

## calls

### upcoming  and today 📆

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

### recent ⌛

```dataview
TABLE WITHOUT ID
file.link as call, file.day as when, regexreplace(file.folder, "^.*\/", "") AS Area
FROM #work/call
WHERE file.day AND file.day > date(today) - dur(10 day)  AND file.day < date(today)
sort date DESC
```
