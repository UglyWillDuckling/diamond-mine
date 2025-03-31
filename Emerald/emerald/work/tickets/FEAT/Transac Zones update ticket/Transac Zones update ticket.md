#ticket 

related:: 
- [[call s Danijelom - handover]]
- [[Transac zone update by Danijela]]

- [/] handle `biz_product_coverage` table usage [[#Handle usage of biz_product_coverage table]]

___
## Handle usage of biz_product_coverage table

- [x] [[call with Paulo -transac zones table]]
	- [x] make a [[list of places that modify table biz_product_coverage]]
	- [/] **check** **diagram** for the transac solution
	- [ ] ? make a [[list of places that use the table]]
	- [ ] plan a new solution to update the coverage table based on changes made to ???
		- [ ] update diagram to match the changes


### **check** transac diagram in relation to the table

https://drive.google.com/file/d/19rpvZT8BmRjLOecpJWUqzpKRgAXOORSu/view?usp=sharing

- [/] check [[transac diagram]]
	- [/] make [[coverage update canvas.canvas|coverage update canvas]]

This `city_id` is only used as a **filter**. It takes all irises for a single city from the `geo` table  
 and does an insert into `coverage`. The Backyard is just a way to trigger an update of  certain cities.

Not sure what is the relation(mapping) between the different `id` fields in the coverage table.

- & Place **id** **is** the id from the `geo_place2` table
	- it functions as a foreign key

[[coverage table creation def]]