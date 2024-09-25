# intro

## links and stuff
- [PR](https://github.com/MeilleursAgents/MeilleursAgents/pull/10772/commits/b25c03a0a83f6b14d26fdcc2ad7047228b3aeb75?diff=split&w=1) from [[Paulo]]
	- a quick fix to get everything working and explore the current process

## goals
- get a complete understanding of the [[Lead Fix - from estima to lead during Project init]] issues
	- need to fully comprehend what is happening and what the plan for the future is
	- what changes need to made
	- what can go wrong
	- How to test all of this
	- understand the issue on a high level, including other projects and teams
		- clarify the existing and future data structures

---
# Ideas 🌩

- Could we test the <mark style="background: #BBFABBA6;">entire project lifetime</mark> ?

# current
- started working on the <mark style="background: #FF5582A6;">diagram</mark> [[Process of creating a new project]]
-  checking out the workflow [[#checking the workflow 🗞]]

## next steps
1. try out the **workflow** on the page some more
	1. gather info and talk with [[Yoan]]
	2. update diagrams to reflect the new **knowledge**

![[Important#notes 🗒]]
## todo's ✔
- [ ] examine the current workflow [[#examine the workflow 🗞]]
	- [ ] play around with the workflow on the page
- [ ] 
- [x] understand what the `transaction` represents
	- [ ] what's the purpose of it, responsibility?
	- [ ] what is **required** to create it
- [ ] examine what the `estima_processing` represents
	- [ ] where is it used?
	- [ ] how important is it?
- [ ] Think about <mark style="background: #BBFABBA6;">tests</mark>
	- [ ] testing more quickly
	- [ ] **duplicate** the testing on the page within the tests themselves

### examine the workflow 🗞
> [[Gather information on the transition]]

- use [[xdebug]]
- what is created?
	- what data is used for it?
- write out the specific details 
	- anything unusual?
http://localhost:8001/contacts/6562017

### idea 🌩

> Switch the usage between the lead and estima id's in some way. Maybe add 2 buttons , that way we can choose what ot use.

> Or. we could do this on the backend, maybe with a new route instead just for testing the difference. Or, even better, just make a script and run it.

- [ ]  make a script to automate testing of some of this
	- [ ] see if we can easily transfer this to <mark style="background: #BBFABBA6;">tests</mark>
- [ ] switch on **FE** using a query param
	- [ ] enforce lead of estima ids

### script for running transasction comparison

[[Make script to write out lead and estima id pairs]]