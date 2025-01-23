---
parent:
  - "[[AWS-Athena implementation]]"
related:
  - "[[QSL listing feature]]"
  - "[[Athena impl..canvas|Athena impl.]]"
---
#artifact #implementation 

- [/] #task AWS importj ⏫ 📅 2025-01-23
	- [/] #task plan out the implementation 🆔 a8OWs8
		- [/] #task **write** [[#==definition of done==]] 🆔 gzJOdk
		- [/] #task **write** out the definitions 🆔 cOKlwm
			- [/] [[#what is it?]], [[#what it is not?]]
	- [/] #task start working 🆔 1ybLlc

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
task [[AWS-Athena implementation]]
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
- [/] `commit` changes
- [?] merge incoming changes, [[git butler]]
- [ ] think 🤔 what's next ⏭
#### cleanup repo
...
- [x] delete tmp files

#### ==commit==

> [!hint] use [[git butler]]

1. commit current work - **aws**
2. split up the rest of the changes into branches
3. **commit** tests
	1. **cleanup** what is *Left*

[[git butler commit tmp]]
