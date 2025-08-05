---
id: Bruce Willis
---

#actor #person

## movies

```dataviewjs
const current = this.current().file.name
const movies = dv.pages("#film").where(m => m.type == 'movie' && m.actors?.contains(current))
const links = movies.map((m) => m.file.link)
dv.list(links)
```
