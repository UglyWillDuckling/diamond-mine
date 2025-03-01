---
link: 
scheduled: 2025-02-25-10-10
---
#call/work/pair-programming 

**Previous**
```dataview
LIST
FROM #call/work/pair-programming 
WHERE scheduled < this.scheduled
SORT scheduled DESC
LIMIT 1
```
## js list

```dataviewjs
const current = dv.current()
const pages = dv.pages("#call/work/pair-programming")
.where(c => c.scheduled < current.scheduled)

//dv.list(pages)
dv.list(pages.map((p) => p.file.link))
// dv.list([current])
```

**Previous**: `$= const current = dv.current(); dv.pages("#call/work/pair-programming").where(c => c.scheduled < current.scheduled).map((p) => p.file.link)`

## who
- ...
## agenda

---
## 🗒notes

## discussion
