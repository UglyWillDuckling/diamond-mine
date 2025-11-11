---
tags: []
created: <% tp.file.creation_date() %>
---
# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>

> [!blank-container|no-margin gallery]
>
> <% tp.web.random_picture("150x150", "", 1) %>
><% tp.web.random_picture("150x150", "nature,forrest,grass,landscape", 1) %>
>
><% tp.web.random_picture("150x150", "logic,circuits,mathematics,tool", 1) %>
><% tp.web.random_picture("150x150", "nebula,galaxy,comet,phenomena,animal", 1) %>
>
><% tp.web.random_picture("150x150", "science-fiction,imagination,creation", 1) %>
><% tp.web.random_picture("150x150", "history,writing,dinosaur", 1) %>

<< [[Timestamps/<% tp.date.now("YYYY", -1) %>/<% tp.date.now("MM-MMMM", -1) %>/<% tp.date.now("YYYY-MM-DD-dddd", -1) %>|Yesterday]] | [[Timestamps/<% tp.date.now("YYYY", 1) %>/<% tp.date.now("MM-MMMM", 1) %>/<% tp.date.now("YYYY-MM-DD-dddd", 1) %>|Tomorrow]] >>

---
### 📅 Daily Questions

##### 🏞️️ sto trebam znati za danas ☀️
- 

##### 🙌 One thing I'm excited about right now is...
- 

##### 🚀 One+ thing I plan to accomplish today is...
- [ ] 

##### 👎 One thing I'm struggling with today is...
- 

---
# 📝 Notes
- <% tp.file.cursor() %>

---
### Notes created today

```dataview
List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc
```

### Notes last touched today

```dataview
List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc
```
