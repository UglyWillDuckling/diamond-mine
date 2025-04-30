#MOC

```meta-bind-button
label: New People Note
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: Extras/Templates/Template, People.md
    folderPath: Extras/People
    fileName: Enter Name Here
    openNote: true

```

# People MOC
A personal CRM. People Notes are about jotting down notable information about people and linking people back to [[🗣 Meetings MOC]].

These are the different categories of People Notes:
- Work
- **Personal**
- Creative
- **Fictional**
- **Notable**

---
### Templates
- [[Template, People]]

# People

## work
```dataview
table title
from #person/work 
sort file.name asc
```

## everybody
```dataview
table title
from #person 
sort file.name asc
```
