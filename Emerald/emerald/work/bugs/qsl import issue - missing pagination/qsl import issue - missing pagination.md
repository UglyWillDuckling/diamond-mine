---
created: 2025-05-06
start date: 2025-05-05
reported: 2025-05-05
impacts: "[[QSL listing feature]]"
tags:
  - ticket/bug
status:
  - finished 🏁
resolved: true
deployed: true
related:
  - "[[performance issues on BY 5.5.2025]]"
---
reported:: [[2025-05-06-Tue]]

Directly **follows** [[QSL listing feature]]
___
### notes
- [[how to get the GCP token on dev]]
### tasks
- [x] #task qsl import issue 🔼 ⏳ 2025-05-08 📅 2025-05-21 🆔 dBfGhl #work  ✅ 2025-05-21
	- [x] resolve issue with wrong status read
			PHP issues with recursive calls
	- [x] add **pagination** [^1]
	- [x] ! **comment** on the impact of increasing the number of listings on the **UI** [^2]
	- [x] communicate on the effort required
	- [x] implement the **feature** with [[#pagination]]
	- [x] fix broken tests
	- [/] write tests
		- [x] `ResultSetAthena`A

[^1]: [[pagination in development|pagination]]
[^2]: [[frontend implementation| QSL listing - frontend]]

## pagination

- [x] test basic pagination
- [/] **test** if pagination actually works for **all** items
	- [/] reduce number of items per request
	- [ ] check if you `iterate` over all items, including other pages
- [x] integrate with the rest of the code
## cron 🕰

- [x] #task update cron def [[backyard tasks cron definition]]
	- [x] run once per day at 8Am 