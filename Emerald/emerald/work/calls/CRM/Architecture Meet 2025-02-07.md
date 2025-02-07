---
date: 2025-02-07
link:
---
#work #work/call #call

[[arch meeting 2025-01-24|prev meet]]
## who
- [[luna team]]

---
## notes
- 
## discussion

### db

what will we use?

**options**
- [[dynamo DB]]
- [[SQL]] database

### event catcher
related to [[arch meeting 2025-01-24#handling events and scheduling]]

### handling campaigns calls
[[FIFO]]

- sqs queues?
- campaign queues ?
- automatic transfer of call from 1 campaign to the next
- **prioritisation**
- [[VOIP]]

**notes** 📔
	- atm, campaign lists are generated in the [[B2c LeadRankingAPI]], the system generates a **text list** test is then
		sent to [[Diabolocom]]
