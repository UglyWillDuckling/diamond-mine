```dataview
LIST
FROM #call/work/crm/architecture 
WHERE scheduled < this.scheduled
SORT scheduled DESC
```
