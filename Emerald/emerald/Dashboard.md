### **active** ☢
```dataview
LIST FROM "notes" and #active
```

### recent 📆 

```dataview
LIST "(" + file.mday + ")"
FROM "notes" OR "+" AND !#processed
SORT mtime DESC LIMIT 6
```

### created today
```dataview
LIST WITHOUT ID
WHERE date(file.cday) = date(today) 
SORT file.name
```

## ...
