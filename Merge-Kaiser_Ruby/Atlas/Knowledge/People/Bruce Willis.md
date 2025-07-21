---
id: Bruce Willis
aliases: []
tags: []
---

#actor #person

## movies
```dataview
LIST
WHERE contains(actors, [[Bruce Willis]])
```

`=this.file.link`

```dataviewjs

const link = this.current().file.link
let movies = dv.pages("#film").where(m => m.type == 'movie')
```
