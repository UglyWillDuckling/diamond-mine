---
created: <% tp.file.creation_date() %>
---
<% tp.web.random_picture("200x200") %>
### <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>

<< [[Knowledge/daily_notes/<% tp.date.now("YYYY", -1) %>/<% tp.date.now("MM-MMMM", -1) %>/<% tp.date.now("YYYY-MM-DD-ddd", -1) %>|Yesterday]] | [[Timestamps/<% tp.date.now("YYYY", 1) %>/<% tp.date.now("MM-MMMM", 1) %>/<% tp.date.now("YYYY-MM-DD-dddd", 1) %>|Tomorrow]] >>

___
### 📅 Daily Questions
##### 🌜 **Last night, after work, I...**
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

```dataview
TABLE WITHOUT ID
file.link as call, scheduled
FROM #call
WHERE scheduled > date("<%tp.date.now("YYYY-MM-DD")%>") AND scheduled < date("<%tp.date.tomorrow("YYYY-MM-DD")%>")
SORT scheduled
```
