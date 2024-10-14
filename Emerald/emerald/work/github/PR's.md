[docs](https://docs.github.com/en/rest/pulls?apiVersion=2022-11-28#list-pull-requests)
[columns PR](https://github.com/nathonius/obsidian-github-link/pull/13/files)

---

## latest

```github-query
outputType: table
queryType: pull-request
query: "is:pr repo:MeilleursAgents/MeilleursAgents"
columns: [number, title, author, status]
```
---
## open

**MA**
```github-query
outputType: table
queryType: pull-request
query: "is:pr is:open repo:MeilleursAgents/MeilleursAgents"
columns: [number, title, author, status, updated, draft]
```
