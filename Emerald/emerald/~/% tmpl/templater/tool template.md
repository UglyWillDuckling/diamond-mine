# interest 💌

```dataview
TABLE
interest
FROM #howto/<% tp.frontmatter["main-tag"] %> OR #article/<% tp.frontmatter["main-tag"] %>
WHERE interest >= 8 AND !processed
SORT interest DESC
```

# resources ⛏

## Books 📚📔📖

```dataview
LIST
FROM #📚Book/<% tp.frontmatter["main-tag"] %>
SORT interest
```

## how to's

```dataview
LIST
FROM #howto/<% tp.frontmatter["main-tag"] %>
SORT file.cday DESC
```

## articles ✍

```dataview
LIST
FROM #article/<% tp.frontmatter["main-tag"] %>
SORT file.cday DESC
```

## docs

```dataview
LIST
FROM #docs/<% tp.frontmatter["main-tag"] %>
SORT file.cday
```
