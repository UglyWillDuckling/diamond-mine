---
link: 
scheduled: 2025-03-07-01-05
---
#call/work

```dataview
LIST
FROM #call/work/crm/architecture 
WHERE scheduled < this.scheduled
SORT scheduled DESC
LIMIT 3
```

## who
- [[luna team]]
## agenda

- [[okta authentication on LUQA]]

---
# 🗒notes
- [[LUQA architecture diagram]]

# discussion

## [[okta authentication on LUQA]]

will be option 3, on [[Okta]] only auth, the rest of the data in our db.
## [[Cypress testing suite|Cypress]] for testing

responsible: [[Ivan Culina]]

**<mark style="background: #FFB86CA6;">alternatives</mark>**: [[Playwright testing suite]], [[WebdriverIO]]

**decision**
- **not** on the [[golden path AVIV]]
	- not a mobile app
	- [[slmp project]] uses `Cypress`
- good developer exp.
- developers know it personally
- **not flaky**
- **no need** for cross-platfform support

note 📔: we might use [[Cucumber testing]]

> [!warning] [[Amin Khansari]]: Nothing in the [[golden path AVIV]] for applications

mentioned: [[Behaviour Driven Development video]]
https://www.youtube.com/watch?v=gXh0iUt4TXA

## project pages

> [!warning] [[Amin Khansari]]: security concern: [[PII data]]; we need a security architect
> this is for personal data of a [[contact]]


[[contacts imp. on LUQA]]