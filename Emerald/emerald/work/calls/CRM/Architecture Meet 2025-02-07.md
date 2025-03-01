---
date: 2025-02-07T13:00
previous: "[[arch meeting 2025-01-24|prev meet]]"
duration: 60
scheduled: 2025-02-07T13:00
---
#work #work/call #call #call/work/crm/architecture 

`= this.previous`

date:: `INPUT[dateTime:date]`

filename: `= this.file.name`

date and time: `= date(this.scheduled)`

## who
- [[luna team]]
---
## discussion

### db
> what will we use?

**options**
- [[dynamo DB]]
- [[SQL]] database

### event catcher
related to [[arch meeting 2025-01-24#handling events and scheduling]]

### campaigns calls

- sqs queues?
- campaign queues ?
- automatic transfer of call from 1 campaign to the next
- **prioritisation**
- [[VOIP]]

**notes** 📔
	- atm, campaign lists are generated in the [[B2c LeadRankingAPI]], the system generates a **text list** test is then
		sent to [[Diabolocom]]

encountered: [[FIFO]] [[SQS Queue]]

- [ ] hello
- [ ] bye

You have 
`= length(filter(link(dateformat(date(today), "yyyy-MM-dd")).file.tasks, (t) => !t.completed))` tasks to do.

`= choice(date(today).weekday > 5, "Take it easy!", "Time to get work done!")` 
