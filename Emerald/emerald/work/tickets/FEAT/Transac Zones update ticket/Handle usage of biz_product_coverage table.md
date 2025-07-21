---
related:
  - "[[call with Paulo -transac zones table]]"
---
**coverage** table `definition`:
 ![[biz_product_coverage table creation def]]
## notes 📔

- [[Vicents insights into Transac]]
- This `city_id` is only used as a **filter**. It takes all irises for **one** city from the `geo` table  
	 and performs an insert into `coverage`
- The [[backyard]] is just a way to `trigger` an update of  certain **cities(irises)**
- & **Place** **id** **is** **the id** from the [[geo_place2 table]] table
	- it functions as a `foreign key` [^1]
- the `iris_id` is the same in the new table as is the `id` field in the [[geo_place2 table]] table
- [[iris_id]] is **city_id** and **that** is `place_id`
- place_id in coverage **is** `iris_id`

- product_id : **4 types** in [[biz_product_coverage table]]
- in the table: only `promising_seller_contract_offer` are relevant
	- filter by **key**
	- others are very old

- [[process to update zones iris automatically]]
- [[manual process to update irises]]
- from [[Alan Jaouen]]:  `yes my staging is connected to your dev env`

## Work notes 🗒

- moving things out of fat controllers feels really good
	- more readable
	- easier to update
	- easier to understand
	- diffs[^2] are easier to follow
	- allows everything to be located in  one place
	- makes code reusable
	%%note: I could write more on this one %%

- [x] check current status of items in table ``
- [x] **update** items on `dev`
- [x] check the logic, write down everything important ✍
- [x] play around with the code, move stuff around 🤾‍♂
- [x] try to add an update of the [[biz_product_coverage table]] tables
- [x] refactor the code[^3] 
- [x] test the `refactors`
- [x] add [[#update coverage table]]

## `update` the coverage table

We need to update the coverage table during the updates and both automatic and manual updates need to be accounted for.

- [x] check for existing duplicates in the coverage table: filter by `place_id`
- [x] **try out** how adding the models/rows would work in practice 🔨 🪚
	- [x] create new model and save
	- [x] **delete** model
- [x] write down the exact logic of [[biz_product_coverage table]] updates ✍
- [x] `implement` the **actual** table updates
	- [x] automatic from salesforce
	- [x] **manual**
- [x] compare code with current implementation
	- [x] returns
	- [ ] logic
	- [ ] error handling
	- [ ] `logging`

### **Logic**:
This is all for the [[biz_product_coverage table]]
[[mediaAPI example req]]

mediaapi/models/product.py : `ProductCoverage`
`__tablename__ = "biz_product_coverage"`

 **city** ids examples
     164
     168
     185
     186
     194
     197
     211
     223
     294
     312
     317
     365
     370
     374
     386
     391
     407
     437
     529
     533
     568
     595
     609
     726
     806
     893
     894
    1023
    1143
    1164
    1321
    1340
    1393
    1733
    1745
    1762
    1778






[^1]: [[foreign key]]
[^2]: [[diffs]]
[^3]: [[Refactoring]]