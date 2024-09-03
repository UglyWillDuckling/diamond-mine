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
# what needs  to be looked at 👁‍🗨

- `estima_processing` - what is this exactly?
- `transaction` object, is it persistent or not?

# ideas
- creating a diagram would be helpful
	- it could later be shared to improve our understanding of the process
	- the diagram could also ease the communication and store all of our knowledge(almost) in one place
- ask around  about the current process - [[Yoan]]  and [[Paulo]]
- The 2 items above could be done in `parallel`

# current

started working on the <mark style="background: #FF5582A6;">diagram</mark> [[Process of creating a new project]]
Started refactoring the codebase in order to simplify the problem and get a better understanding of what we're
dealing with.

## todo's
- [ ] examine the current workflow
	- [ ] play around with the workflow on the page
	- [ ] see if you can find a way to test this more quickly
- [ ] understand what the `transaction` represents
	- [ ] what's the purpose of it, responsibility?
	- [x] what type of object is it?
	- [x] is it temporary?
	- [ ] is it stored in the Db?
	- [ ] what is required to create it
- [ ] examine what the `estima_processing` represents
- [ ] look at how you would test the hotfix on production - Canary release
- [ ] Think about <mark style="background: #BBFABBA6;">tests</mark>

## next steps

1. examine `transaction` some more
	1. see if it's persistent or tmp.
	2. what is its purpose
2. try out the workflow on the page

## important
- a new estima_processing object is created and persisted in the db
	- this is later used for displaying
	- needs to be investigate more

### transaction
[[transaction]]

Looks to be a temporary object that contains data relevant to a project. All the data need to come from somewhere, usually an [[estima]] object.
* ! We need to see if we can successfully construct this based on the lead

#### purpose

Looks to be a transport object holding all the relevant data

#### construction
- usually constructed from an [[estima]]
- should be possible to construct it based on the lead
##### data
> list of all the fields it should contain


#### misc

#### logic flow
> what actually happens

---

## doing

### tests 🧪
[[leads without ids]]
[[lead table example]]

- running some tests
	- all looks good for now
	- the logic is a bit confusing as it's actually possible to create transactions **without** an **id**

> [!tip] need to think 🤔 about writing **new**  tests

- [ ] create a new test to be able to run it automatically
	- [ ] setup the DB to be able to test this
	- [ ] create the appropriate lead based on an existing one 
	- [ ] compare the result for a lead with and without an estima(`project`)
		- [ ] make identical leads and add some additional data on the estima, then compare

##### notes
- a lead without an estima can always be manufactured
	- just remove its `estima_id`