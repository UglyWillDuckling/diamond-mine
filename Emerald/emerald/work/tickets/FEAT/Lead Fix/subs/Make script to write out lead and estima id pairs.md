The `script` needs to run a comparison between the two [[transaction]] objects and return the diff.

We should be able to run the diff on multiple [[transaction]]'s and then return a sort of aggregate from all of them.
## results
[[missing fields list]]

---

- ~ splitting the program into smaller and smaller `chunks` that can be changed on the fy works exceptionally well
	- @ these can both be functions or objects

## goals
* `verify` that the the comparison script can be trusted
* `generate` the **full list** of missing fields

## todo's
- [x] run the comparison for `transaction_hdata` 
	- [x] update docs
	- [x] update ticket 🎟[LUNA-226](https://avivgroup.atlassian.net/browse/LUNA-226)

## RUN
- sample size is `780`

- [ ] add more decorators [[Decorator]]
	- [ ] study the **relations**
- [ ] try out some other patterns - `composite`, `strategy`
- [ ] come up with some explanations and advice
- [ ] check online for more examples and stuff

### notes 🗒

- `item` is the most important part - it is the part that holds the majority of the data that is persisted
	- item is copied over from [[transaction]] to the [[project]] entity
- ...

#### item fields
- `iris_id`
- `street`
- `address_id`
- `coordinates`

**working with**
- construction
- ...
