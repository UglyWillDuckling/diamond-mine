---
date: 2024-12-13
---
#work #work/call #call

## who
- [[Marc Jonot]]
- [[Ievgen Demenikov]]

## agenda
[[QSL listing]]
Discuss how to consume the QSL listings data
## topics
- connection to the data
---
## important
- both options were approved
	- Athen queries 
		- more robust
	- CSV file #notebook
- ! security confirmation is ==required== to use **production** data
- ! [[Paulo]] - we are not using any account on our side from [[AWS]]
	- everything goes to [[Amazon Athena]]
## notes
- [[Marc Jonot]] - [[Flamingo account]] is the main account
- ~ [[Amazon Athena]] gives us  **flexibility** 
- ! [[Marc Jonot]] - you can put rules on the data
	- which fields or required
	- even validate the data: no-null, min-max #validateA
- [[Marc Jonot]] - [[pair programming]] is possible
- code [examples](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-api.html)

## discussion
- [?] [[Paulo]] - go through the 2 options?
	- [?] [[Marc Jonot]] - Athena first option #diagram
		- [[Ievgen Demenikov]] - queries would be going to Athena: sql
		- & good thing is quries are going to [[Amazon Athena]]
		- 📔 more flexibility with Athena since we can make any type of a [[query]]
	- [?] [[Paulo]] could something go wrong?
		- [i] [[Marc Jonot]] you can put requirements on the data in [[Amazon Athena]]
			- there are alerting channels on [[Slack]] #notify
		- [i] [[Ievgen Demenikov]] you can see metrics in [[data dog]]
			- you need to come up with metrics that you wish to see
				- examples: number of records, freshness of data
- [?] [[Paulo]] - can you handle the procedure? We will give you something from dev and prod
		on our side we will <mark style="background: #FFF3A3A6;">shift</mark> to the **Athena query**
	- [?] do you have any examples?
		- @ [[Marc Jonot]] I have a bit of [[php]] knowledge , will send a link to an example in php
