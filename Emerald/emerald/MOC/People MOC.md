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

%%  I like having this button, it communicates well and makes things easy  since I don't have to remember everything %%
%% It also nudges me to look at the broader picture 🖼 instead of just adding an new person in like I would using [[quickAdd]] %%

# People MOC
A personal CRM. People Notes are about jotting down notable information about people and linking people back to [[🗣 Meetings MOC]].

These are the different categories of People Notes:
- [[#work]]
- Creative
- **Fictional**
- **Notable**

%% the categories are interesting, I like the Fictional one in particular %%
%% This could easily be expanded to include other categories and even combine them %%

---
### Templates
- [[Template, People]]

# People

%% I like the sorting by alphabet %%

## work

```dataview
table title, work_status
from #person/work
sort file.name asc
```

## creative

```dataview
table title
from #person/creative
sort file.name asc
```

## everybody
```dataview
table title
from #person 
sort file.name asc
```
