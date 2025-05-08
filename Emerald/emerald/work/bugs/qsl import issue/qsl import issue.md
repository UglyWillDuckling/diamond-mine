---
start date: 2025-05-05
created: 2025-05-06
reported: 2025-05-05
related:
  - "[[QSL listing feature]]"
tags:
  - ticket/bug
  - 📚Book
status:
  - In Progress
resolved:
---
reported:: [[2025-05-06-Tue]]

Direct work following [[QSL listing feature]].
___

- [x] resolve issue with wrong status read
		PHP issues with recursive calls
- [x] add **pagination** [^1]
- [x] ! **comment** on the impact of increasing the number of listings on the **UI** [^2]
- [x] communicate on the effort required

[^1]: [[pagination in development|pagination]]
[^2]: [[frontend implementation| QSL listing - frontend]]

# pagination

- [x] test basic pagination
- [/] **test** if pagination actually works for **all** items
	- [/] reduce number of items per request
	- [ ] check if you `iterate` over all items, including other pages


