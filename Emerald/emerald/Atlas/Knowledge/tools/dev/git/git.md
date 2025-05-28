---
main-tag: git
tags:
  - tool
  - git
---
- [/] #task study [[git]], [[git book - Pro Git]] ⏳ 2025-04-09 📅 2025-05-29 🆔 DghKoI
	- [ ] [[20 years of Git. Still weird, still wonderful.]] article 📰
___
related:: [[version control system]]
>
**Git** is a popular version control system used for  source code management
>  and coordinating work among programmers collaborating on a project.
  It allows multiple people to work on the same project at the same time without
 overwriting each other's changes, and provides a way to track and manage
 changes to the codebase over time.

Git is free and open-source, and is widely used in software development, and other fields  where version control is important.
It is known for its speed, efficiency, and powerful features, such as [[git branching|branching]]
  and [[git merging]], that make it a popular choice among developers.

# have the correct `main-tag`

```dataview
TABLE WITHOUT ID

file.link as note, tags

FROM #howto/git OR #docs/git
SORT file.tags
```

# interest
> articles and howto's

```dataview
TABLE WITHOUT ID
file.link as note,interest
FROM #article/git or #howto/git
WHERE interest >= 8 AND !processed
SORT interest DESC
```

# resources

## how to's

```dataview
LIST
FROM #howto/git
```

## articles

```dataview
LIST
FROM #article/git
SORT file.cday DESC
```

## Books 📚

```dataview
LIST
FROM #📚Book/git
```
