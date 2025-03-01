
## recent ⏲

```dataview
LIST WITHOUT ID
- [ ] FROM "Knowledge/tools" 
WHERE file.mtime > date(today) - dur(10 day) AND file.name != this.file.name
SORT file.mtime
```
