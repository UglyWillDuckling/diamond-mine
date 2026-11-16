---
dg-home: true
dg-publish: true
cssclasses:
  - no-margin-tasks
tags:
  - home
---
```dataviewjs
dv.paragraph(`[[Tjedan ${moment().week()} - ${moment().year()}]]`)
```

- [[Projects.base]]
- [[Task Map.canvas]]
- [[Ideas 💡 · Projects]]

___

## next actions

```tasks
not done
sort by due
short mode
hide task count
heading includes Next Actions
path includes Efforts
hide toolbar
show tree
```

## ☑ active tasks
****
```tasks
not done
(due before next week) OR (scheduled before next week)
sort by due
short mode
hide task count
hide toolbar
```

## Next up

```tasks
not done
sort by due
short mode
hide task count
path includes Efforts
hide toolbar
show tree
tag include #next
```

## Projects

```base
filters:
  and:
    - file.hasTag("project")
    - status.lower() == "active"
views:
  - type: cards
    name: Active
    groupBy:
      property: status
      direction: ASC
    order:
      - file.name
    sort:
      - property: file.mtime
        direction: DESC
    cardSize: 430
    imageAspectRatio: 1.15

```
