---
created: 2025-04-18
source: https://zellij.dev/
tags:
  - tools/cli
  - tool/terminal
main-tag: zellij
---
![Portrait|100](https://zellij.dev/img/logo.png)

- [x] #task start using [[Zellij]] 🆔 so9XuP 🔼 ⏳ 2025-04-21 📅 2025-04-13 ✅ 2025-05-02

A **terminal workspace** with `batteries` included
___
# interest 💌

```dataview
TABLE
interest
FROM #howto/zellij OR #article/zellij
WHERE interest >= 8 AND !processed
SORT interest DESC
```

# resources ⛏

## Books 📚📔📖

```dataview
LIST
FROM #📚Book/zellij
SORT interest
```

## How to's

```dataview
LIST
FROM #howto/zellij
SORT file.cday DESC
```

```dataview
LIST
FROM #howto 
WHERE about=this.file.link
```

## articles ✍

```dataview
LIST
FROM #article/zellij
SORT file.cday DESC
```

## docs

```dataview
LIST
FROM #docs/zellij
SORT file.cday
```
# features

## session resurection

Zellij preserves all sessions by default. Please see [[zellij - how to attach to a session]].

If you wish to get rid of a session, you need to explicitly `destroy` it.
