- [x] #task switch to `mkt` schema ✅ 2024-11-29
- [/] #task update media API

## switch schema
- [x] update backyard  mkt
	- [x] update schema creation
	- [x] update entity
- [x] commit
## update media API
- [x] `create` migration
- [x] test migration
	- [x] run [[how to run the mediaAPI migration]]
		![[how to run the mediaAPI migration]]
	- [x] check, etc.
		- [[Phpstorm]] db tool
- [ ] [[#run the import]]
- [>] make a **PR**

### run the import 🛳
[[result]]

## error handling

### direct output
<mark style="background: #FF5582A6;">should contain</mark>
- record information
	- all of it
- error information
	- message
	- point of origin
	- other relevant ℹ
	- **no** stack trace

### log records
<mark style="background: #FF5582A6;">should contain</mark>
- error info
	- error message
	- **full** stack trace of the error
	- `record` information
	- [x] ID
	- [?] data
	