#DV
#data-view


## examples

### all tasks
```dataview
task from "2024-10-17"
```

### important and undone
```dataview
task from "2024-10-17"
WHERE status = "!"
```

## tickets 🎫

```dataview
task from "work/tickets"
WHERE !completed
GROUP by file.link
```
