---
related:
  - "[[QSL listing feature]]"
  - "[[Athena impl..canvas|Athena impl.]]"
parent:
  - "[[AWS connection]]"
---
#artifact #implementation 


- [x] #task AWS import 🆔 WNbW5S ⏫ ⏳ 2025-01-24 📅 2025-01-27 ✅ 2025-01-28
	- [x] #task plan out the implementation 🆔 a8OWs8 ✅ 2025-01-23
		- [x] #task **write** [[#==definition of done==]] 🆔 gzJOdk ✅ 2025-01-23
		- [x] #task **write** out the definitions 🆔 cOKlwm ✅ 2025-01-23
			- [x] [[#what is it?]], [[#what it is not?]]
	- [x] #task develop **first** solution 🆔 1ybLlc
	- [ ] #task **refactor** the variable configurations 🔼 ⏳ 2025-01-28 📅 2025-01-30 🆔 YGhvFF
	- [ ] #task **think** 🤔 what's next ⏭ for the import 🆔 h4lL3z ⏳ 2025-01-29 📅 2025-02-03

### ==definition of done==

- it is *configurable* based on `env` and other `params`
	- *varies* by `role`, `s3 output`, `athena table`
- it is able to *connect* to AWS and receive data

### what it is not?
a **Full  Scale** solution to implement [[AWS]] and [[Amazon Athena|Athena]]

### constraints 🔗
- needs to work a `shell script` 
- needs to vary based on `environment`
### resources
task [[AWS connection]]
actual [[Athena impl..canvas|Athena impl.]]

---
### ideas
- use the [[Canvas]] : [[aws import  impl..canvas|aws import  impl.]]

**create** a *Config* class that will provide the information needed for the AWS connection.
Different modules/elements of the code base/ application can use / depend on the same config object(interface).
### important
The **production** will different on `s3 bucket` and `arn role`
## work
### do list ✔
- [x] **start** exploring the `code base`
- [x] update `composer`
- [x] *cleanup* repo
- [x] `commit` changes
- [x] make a new **PR** in order to push things to prod
- [x] merge incoming changes, [[git butler]]
