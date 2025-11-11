---
parent:
  - "[[Organization of Visits - Oov]]"
---
### **list of places by file**

- backyard/contacts/projects/evaluations/index.php
	- shouldShowOwnerSchedule 
	- shouldShowVisitColumn
- backyard/contacts/projects/evaluations/evaluation.php
	- `getJSON` ln.359
- share/controller/backyard.evaluation.inc

### implementation

- [x] FE
	- [x] main page
	- [x] single page
- [x] BE
- [x] implement real condition with query param
- [x] remove test routes from [list](https://github.com/MeilleursAgents/MeilleursAgents/pull/10900/files#diff-3210e00ce93cd4f563bde38e8ea8daee0dd4fbf542a94f867d6910ed6874d6beL137)
	- [x] ..
- [x] switch to using an **env** variable
	- [x] code changes
	- [x] test with on
	- [x] test off
	- [x] test with removed config as well
- [x] request review PR
- [ ] update env vars in Integration
	- [ ] then dev

## artifacts 🔶

- var: `OOV_ENABLE`
- list of places
	- `backyard/contacts/projects/evaluations/index.php`
	- `backyard/contacts/projects/evaluations/evaluation.php`
	- `share/controller/backyard.evaluation.inc`
