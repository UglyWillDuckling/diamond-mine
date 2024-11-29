
#work #work/call #call #qsl #gcp #bucket #access #security

## who

- [[me]]
- [[Paulo]]

## agenda

discussion on the implementation of the qsl import regarding [[QSL listing feature|QSL listing feature]]

## topics
- access to bucket on [[GCP]]
	- `read` access
	- ...

---
## notes 📔
- separate bucket for qsl listings
- buckets
	- resource
		- token #impersonate #temporary
		- 

## discussion
- [?] how do we share the csv file?
	- @ a new bucket is required. It is recommended that we use a new account, maybe
		- ' only required permissions should be used 
		- ...

## decisions

==we will need to contact more people and get their help==

 important
- [[Workload Identity Federation]]
- [[how WIF works on GCP]]
- [[what is account impersonation]] 
