🧪
[[leads without ids]]
[[lead table example]]

## intro

We need **real** tests to ensure reproducible behavior and to help us verify and understand the current implementation.
ALL of this will help the [[Lead Processing Refactoring]]

---
## todo's
- [x] create a new test to be able to run it automatically
	- [x] setup the DB to be able to test this
	- [ ] create the appropriate lead based on an existing one 
		- [ ] ideally, create more than one
	- [ ] compare the result for a lead with and without an estima(`project`)
		- [ ] make identical leads and add some additional data on the estima, then compare

## notes 🗒
- a lead without an estima can always be manufactured
	- just remove its `estima_id`
