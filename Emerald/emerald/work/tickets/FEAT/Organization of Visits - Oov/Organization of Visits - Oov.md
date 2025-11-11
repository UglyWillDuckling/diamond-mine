---
aliases:
  - Oov
part of:
  - "[[Backyard Modules]]"
project: "[[work/Projects/Backyard/Backyard|Backyard]]"
status:
  - In Progress
children:
  - "[[owners availibility story]]"
---
#ticket

- [ ] #task develop [[Organization of Visits - Oov]] feature on BY 🆔 M7CCKN
	- [/] examine the full documentation for this on [Confluence](https://avivgroup.atlassian.net/wiki/x/BICzaw)
	- [/] create [[Oov own diagrams]] to better understand what is happending, how and by whom
	- [/] ask [[#questions / discussion]]
	- [/] explore 🔭 the current BY implementation
	- [x] create [[API endpoints]] tickets 🎫 on JIRA
	- [x] [[owners availibility story]]
	- [x] update schedule-visit-agencies to include `master name`%% director of an agency %%
	- [x] add translations
	- [x] cleanup test routes
	- [x] & check tests
	- [x] [[support for the env var feature flag]]
	- [ ] [[owner schedule - conditional logic]]
	- [ ] [[schedule visit changes - property fields]]
	- [ ] **rm** api test route from routes list in `app.php` #after

## docs
- new dynamo db table: [[visits table]]

## Context

The current flow of organizing a visit is a process in which BY assistant must call both owners and agency, sometimes multiple times to find agreeable time. With this module, it is aimed to speed this process up and reduce the amount of calls that has to be made throughout the day. The aim of this ADR is to define whether any existing solution would be usable in our case and if not - describe custom solution.

### arch diagram

![[~/x/0546bf660ef332ff2715d6a785aa5967_MD5.jpeg|600]]
## Glossary 

- [[MFE]] - Micro Frontend End
- [[Organization of Visits - Oov|Oov]] - organisation of visits
- SK - ?
___
## Questions 

1. **what** is the **relation** between a `visit` on [[Organization of Visits - Oov|Oov]] and `evaluation` on BY?
2. **What** is sent in the final `confirmation` emails exactly? How are they different from what we have now?

## Calls

```dataview
LIST FROM #meet/oov 
SORT scheduled DESC
```
___
## current

https://malegacy-phoenix.integration.meilleursagents.tech/contacts/7640953/projects/2081143653/evaluations

project: 2081143653
eval:  2080915561

http://localhost:8001/api/visits/bff/visit/schedulepost_test.php?id=2080915561&project_id=2081143653

status

http://localhost:8001/api/visits/bff/visit/status?id=2080915561&project_id=2081143653

- [x] render owner schedule conditionally
- [x] update condition for evaluations render
- [x] verify project status

- [x] deploy latest changes to Integration [[phoenix environment]]
- [x] PR for dev [PR](https://github.com/MeilleursAgents/MeilleursAgents/pull/10915)
- [x] [[support for the env var feature flag]]

- [x] update env var on **Integration**
- [x] & merge PR to dev
- [x] update **env** var on **DEV**
- [x] #later update static content in prod
- [x] #later verify disable logic on BY


### notes 🗒

- the [[PII data]] is being saved on [[oov module]]
