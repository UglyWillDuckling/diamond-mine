#ticket 

related:: 
- [[call s Danijelom - handover]]
- [[Transac zone update by Danijela]]

- [/] #task handle `biz_product_coverage` table usage [[#Handle usage of biz_product_coverage table]] 🆔 mjQoyM
	- [ ] sync feature
	- [ ] update ticket 🎫

___
## Handle usage of biz_product_coverage table
> [[coverage table creation def]]

- [x] [[call with Paulo -transac zones table]]
	- [x] make a [[list of places that modify table biz_product_coverage]]
	- [x] **check** **diagram** for the transac solution
	- [x] ? make a [[list of places that use the table]]
- [/] plan a new solution to update the coverage table based on changes made to ???
	- [/] update diagram to match the changes

### **check** transac diagram in relation to the table
- [x] check [[transac diagram]]
- [x] make [[coverage update canvas.canvas|coverage update canvas]]

This `city_id` is only used as a **filter**. It takes all irises for **one** city from the `geo` table  
 and performs an insert into `coverage`. The Backyard is just a way to <mark style="background: #FF5582A6;">trigger</mark> an update of  certain cities.

- ? Not sure what is the relation(mapping) between the different `id` fields in the coverage table.

- & **Place** **id** **is** **the id** from the `geo_place2` table
	- it functions as a `foreign key`[^1]

## deploy SalesForce changes + trigger update

We need to deploy the `SalesForce` changes and after **trigger** the update in [[Media API]]

- [x] merge [[Media API Clients repo]] PR https://github.com/MeilleursAgents/MA-ApiClients/pull/361
- [x] merge [[SalesForceApi]] PR 

# status

Created `curl.sh` in the root of MediaAPI folder

Made some changes to [[Media API]], enabled saving of new `iris_ids`.

- [ ] add information about the tables sync to the **ticket**
	- [ ] ? maybe create a separate ticket for this
- [ ] start working on the `sync` feature



[^1]: [[foreign key]]