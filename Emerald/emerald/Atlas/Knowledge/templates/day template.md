---
created: <% tp.file.creation_date() %>
---

<% tp.web.random_picture("150x150", "", 1) %>

<% tp.web.random_picture("150x150", "nature,forrest,grass,landscape", 1) %>

<% tp.web.random_picture("150x150", "logic,circuits,mathematics", 1) %>

<% tp.web.random_picture("150x150", "nebula,galaxy", 1) %>

<% tp.web.random_picture("150x150", "science-fiction,fantasy", 1) %>

<% tp.web.random_picture("150x150", "abstract,writing", 1) %>

### <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>

<< [[Knowledge/daily_notes/<% tp.date.now("YYYY", -1) %>/<% tp.date.now("MM-MMMM", -1) %>/<% tp.date.now("YYYY-MM-DD-ddd", -1) %>|Yesterday]] | [[Timestamps/<% tp.date.now("YYYY", 1) %>/<% tp.date.now("MM-MMMM", 1) %>/<% tp.date.now("YYYY-MM-DD-dddd", 1) %>|Tomorrow]] >>

___
### 📅 Daily Questions

##### Stuff to remember 📝
- 

##### 🙌 **One thing I'm excited about right now is...**
- 

##### 🚀 **One+ thing I plan to accomplish today is...**
- [ ] 

##### 👎 **One thing I'm struggling with today is...**
- 

---
### 📝 Notes
- <% tp.file.cursor() %>

### Notes created today
```dataview
List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc
```

### Notes last touched today
```dataview
List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc
`````
### **current**
![[Current or active#^current]]

### **standup** 🪑

#### quick notes
- 
#### me 
- 

### ☑ checklist
- [ ] pogledati  obaveze i zadatke
- [ ] `add` **events** for today
- [ ] **education 🎒**
- [ ] rest ⛅ 

### 🎙

```set
scope:
  - type
  - meeting
fields:
  - __bname
  - participants
  - scheduled
  - related
sortby:
  - - scheduled
    - false
timestamp: 1747900735911
filter:
  - - scheduled
    - gte
    - <%tp.date.now("YYYY-MM-DD")%>
  - - scheduled
    - lt
    - <%tp.date.now("YYYY-MM-DD", 1)%>
topResults: 11

```
