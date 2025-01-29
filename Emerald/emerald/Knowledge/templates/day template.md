---
---
---
created: <% tp.file.creation_date() %>
---
tags:: [[+Daily Notes]]

### <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>

<< [[Timestamps/<% tp.date.now("YYYY", -1) %>/<% tp.date.now("MM-MMMM", -1) %>/<% tp.date.now("YYYY-MM-DD-dddd", -1) %>|Yesterday]] | [[Timestamps/<% tp.date.now("YYYY", 1) %>/<% tp.date.now("MM-MMMM", 1) %>/<% tp.date.now("YYYY-MM-DD-dddd", 1) %>|Tomorrow]] >>

---
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
> - <% tp.file.cursor() %>
### ✔ New Tasks

### Notes created today
```dataview
List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc
```

### Notes last touched today
```dataview
List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc
`````


![[Current or active#current notes 📓]]

### standup 🪑

> [!multi-column]
>> [!warning]+ Important
>> ![[{{DATE}} daily#^important]]
>
>> [!note]+ Notes
>> ![[{{DATE}} daily#^active]]

![[{{DATE}} daily#per person]]

### ☑ checklist
- [ ] pogledati  obaveze i zadatke
- [ ] `add` **events** for today
- [ ] **education 🎒**
- [ ] rest ⛅ 

### 🎙
```dataview
TABLE WITHOUT ID
file.link as call, file.day - date(today) as when, regexreplace(file.folder, "^.*\/", "") AS Area
FROM #call
WHERE file.day AND file.day = date(today)
sort date DESC
```
