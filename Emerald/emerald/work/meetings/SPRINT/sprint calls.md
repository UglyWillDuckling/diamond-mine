#overview

### planning *recent*

```dataview
LIST
FROM #call/sprint/planning
SORT date DESC
LIMIT 10
```

### retro *recent*

```dataview
LIST
FROM #call/sprint/retro AND -"Knowledge/templates"
SORT date DESC
LIMIT 10
```
