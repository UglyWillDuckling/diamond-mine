#test #dev #qsl 

part_of:: [[QSL listing feature]]
related_to:: [[AWS import]]
created:: [[how to find customer id for project]]

- [x] run the import
- [x] fix errors
- [x] check data in **db**(cli)
- [x] check data on ***FE***

### notes
- results are there
	- **only** 10 rows
	- data looks **good**


### find data on FE

we need to get 

project_id: 2081010897
contact_id: 376718

**URL**: https://backyard-dev.meilleursagents.tech/contacts/376718/projects/2081010897

http://localhost:8001/contacts/376718/projects/2081010897

for testing locally
http://localhost:8001/contacts/7008421/projects/2081042895/

for dev
backyard-dev.meilleursagents.tech/contacts/7008421/projects/2081042895
