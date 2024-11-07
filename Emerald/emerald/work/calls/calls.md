#work/calls
#calls

- [ ] remind (@[[2024-11-08]])
## today

```dataview
TABLE WITHOUT ID
file.link as call, file.day - date(today) AS in, regexreplace(file.folder, "^.*\/", "") AS Area
FROM #work/call
WHERE file.day AND file.day = date(today)
sort date DESC
```

## upcoming

```dataview
TABLE WITHOUT ID
file.link as call, file.day - date(today) AS in, regexreplace(file.folder, "^.*\/", "") AS Area
FROM #work/call
WHERE file.day AND file.day > date(today)
sort date DESC
```

## recent

```dataview
TABLE WITHOUT ID
file.link as call, file.day AS day, file.folder AS Path
FROM "work/calls"
WHERE file.day
sort date DESC
LIMIT 10
```

