---
created: <% tp.file.creation_date() %>
main-tag:
---

<% tp.web.random_picture("200x200") %>

# interest 💌
> articles and howto's

```dataview
TABLE
interest
FROM #article/bla or #howto/foo
WHERE interest >= 8 AND !processed
SORT interest DESC
```

# resources 🥙

## how to's

```dataview
LIST
FROM #howto/foo 
```

## articles

```dataview
LIST
FROM #article/foo 
SORT file.cday DESC
```
