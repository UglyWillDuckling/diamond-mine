---
type: meeting
meeting type: sprint-estimation
created: 2025-08-21
scheduled: 2025-08-21T15:00:00
related:
previous:
agenda:
participants:
  - "[[Team Phoenix]]"
tags:
  - meet
---
From: [[2025-08-21-Thu]]
___
## who?

`=this.participants`

## why?
> what caused this to happen, why do we need to have this meeting?

## what?
> meeting agenda

`=this.agenda`

___

## discussion 🗨

- [ ] can you **authorise** only one agency visit?
	- @ yes
	- ..
- [ ] can we close the SPIKE ticket?

## tickets 🎫

- [x] show schedule
	- show warning on evaluation page
- [x] API comms
- [x] show visit info in table
- [x] send notification to Agency if the schedule was selected
- [ ] create tasks on BY depending on evals?
- [ ] ..

#### API comms

### schedule on BY

- implement the state machine
	- entered
	- not entered

### visits columns
[TIB-64](https://avivgroup.atlassian.net/browse/TIB-64)

- display the new colums 
- warning for [[Backoffice]] on visit page
- the blue button doesn't need to do anything new
- once the evaluations are authorised the project changes status to [[Mandat a signer]]

- [x] when do we display the columns?
	- [x] do we need to make sure that the evaluation is supported by automatic visits?
	- @ display at all times
	- @ we hide the column if the evaluations haven't been authoriesed(Autorisee)

### create tasks
[TIB-65](https://avivgroup.atlassian.net/browse/TIB-65)
`note: note:`not ready yet.

- tags are added dynamically in admin

### ...
