
part_of:: [[Transac Zones update ticket]]
based_on:: [[Vicents insights into Transac]], [[Transac requirements from Vincent]]
___

1. we first need to be setup some data in the db to work with ([[postman]])
	1. setup some `manual` entries to work with
	2. create a new request for **manual** updates

- ! the `realtor<->iris` relationship isn't **one to one**
	- there can be many realtors per `iris`

## what works

- the irises can still be stored in the same fashion as before
- the updating of irises still works as well
	- we are only matching the irises based on the `realtor`
- the `UNIQUE` index `realtor-iris` is **still** **correct**
	- there can only be one entry with those values

## what needs to be done ⛏

1. verification of the existing logic: updates to the new table
2. `coverage` table updates [[#coverage]]

### coverage

- we need to trigger an update each time an iris is updated
- the system needs to determine if a give `iris` is still active or not
- -> then, it should close,open,keep the `iris` `note: wip`

## update process

`?: first draft`
1. load the irises from the new table
2. check for missing ones -> need to be **deactivated** if they exist
3. look for new ones -> need to **added**
4. look to deactivated -> **activate** them
5. ignore those still active

### testing / verifying

- [x] automatic updates
	- [x] add
	- [x] remove
- [x] [[#ignoring manual]] updates
- [ ] manual updates
	- [x] add
	- [/] delete
	- [ ] **coverage** update

#### automatic

1. cleanup table
2. run the normal update
3. fixup errors
4. now, see what happens
5. then, check the **coverage**
6. modify coverage to test different scenarios

**removal**

`note: doesn't work` coverage deletion is failing
- only occurs if the coverage didn't exist yet

- [x] **determine** where the error is happening
	- [x] **reproduce**
- [x] fix

### manual updates

- [x] add
- [/] delete
- [ ] `coverage`

#### manual delete feature

- needs to delete the **manual** zone by `iris_id`
- **only** deletes manual zones

- [x] add function to model file
- [x] use func in controller
- [x] verify
- [ ] fix deletion of **more than 1 entry**

==For now, the new action deletes both zones under linked to the iris instead of just the manual one.==

Likely caused by a missing PK(id). Will add it and then see if it works or not.

see: [[how to drop PK and column in SQL]]
