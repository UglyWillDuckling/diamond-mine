- [[call with Paulo -transac zones table]]

**coverage** table `definition`:

![[biz_product_coverage table creation def]]

## notes

- This `city_id` is only used as a **filter**. It takes all irises for **one** city from the `geo` table  
	 and performs an insert into `coverage`
- The [[backyard]] is just a way to `trigger` an update of  certain **cities(irises)**
- & **Place** **id** **is** **the id** from the [[geo_place2 table]] table
	- it functions as a `foreign key` [^1] 
- the `iris_id` is the same in the new table as is the `id` field in the [[geo_place2 table]] table

- [[iris_id]] is **city_id** and **that** is `place_id`
- product_id : **4 types** in [[biz_product_coverage table]]
- in the table: only `promising_seller_contract_offer` are relevant
	- filter by **key**
	- others are very old

___
# 🚩current

- from [[Alan Jaouen]]:  `yes my staging is connected to your dev env`
- after the update , we only have 10 items
- [[process to update zones iris automatically]]
- [[manual process to update irises]]

### Work notes 🗒

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
- [/] check the logic, write down everything important ✍
- [/] play around with the code, move stuff around 🤾‍♂
- [/] try to add an update of the [[biz_product_coverage table]] tables
- [ ] test the refactors
- [ ] update existing tests



[^1]: [[foreign key]]
[^2]: [[diffs]]