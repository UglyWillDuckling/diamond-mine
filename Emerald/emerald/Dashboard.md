
---

## notes 📔

### active ☢

```dataview
LIST FROM "notes" and #active
```

```dataview
LIST FROM #note and #active
LIMIT 1
```


### recent 📆 
```dataview
LIST "(edit: " + file.mday + ")"
FROM "notes"
SORT mtime DESC LIMIT 11
```

## ...
