# intro

## links and stuff
- [PR](https://github.com/MeilleursAgents/MeilleursAgents/pull/10772/commits/b25c03a0a83f6b14d26fdcc2ad7047228b3aeb75?diff=split&w=1) from [[Paulo]]
	- a quick fix to get everything working and explore the current process
- [JIRA](https://avivgroup.atlassian.net/browse/LUNA-226)

## goals
- get a complete understanding of the [[Use lead for project creation]] issues
	- need to fully comprehend what is happening and what the plan for the future is
	- what changes need to made
	- what can go wrong
	- How to test all of this
	- understand the issue on a high level, including other projects and teams
		- clarify the existing and future data structures
- replace the usage of estima with lead for project creation
	- migrate to using the lead as the main data source

---
# Ideas 🌩

- Could we test the <mark style="background: #BBFABBA6;">entire project lifetime</mark> ?

## next steps
1. try out the **workflow** on the page some more
	1. gather info and talk with [[Yoan]]
	2. update diagrams to reflect the new **knowledge**

![[Important#notes 🗒]]
## todo's ✔
- [x] examine the current workflow [[#examine the workflow 🗞]]
	- [x] play around with the workflow on the page
- [x] understand what the `transaction` represents
	- [x] what's the purpose of it, responsibility?
	- [x] what is **required** to create it
- [ ] examine what the `estima_processing` represents
	- [ ] where is it used?
	- [ ] how important is it?
- [ ] Think about <mark style="background: #BBFABBA6;">tests</mark> 
	- [ ] testing more `quickly`

## ideas 🌩
- [x]  make a script to automate testing
	- [ ] see if we can easily transfer this to <mark style="background: #BBFABBA6;">tests</mark>
- [x] switch on **FE** using a query param
	- [x] enforce lead of estima ids

## current

### script for running [[transaction]] comparisons 🟰
[[Make script to compare transactions]]
