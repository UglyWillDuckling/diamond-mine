---
related:
  - "[[Task management]]"
  - "[[Obsidian]]"
docs:
  - "[[Tasks User Guide - Layout]]"
---
#obsidian-plugin #plugin 

[official docs](https://publish.obsidian.md/tasks/Introduction)

## How To's :LiStepForward:
```dataview
TABLE WITHOUT ID
file.link AS " "
FROM #howto 
WHERE contains(file.folder, this.file.folder)
```
## Docs :LiDock:
```dataview
TABLE WITHOUT ID
file.link AS ""
FROM #docs
WHERE contains(file.folder, this.file.folder)
```
