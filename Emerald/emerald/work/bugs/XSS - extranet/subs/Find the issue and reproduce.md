---
banner_icon: 📖
banner: "![[iris-code.png]]"
---
#explore
#investigate
#find
[[Acceptance criteria is awesome]], [[acceptance criteria]]
[[Fix xss on extranet]]
# Acceptance 📗
- we **know** where the issue occurs 
- we can **reproduce** the `issue` ✔
- we know what the **next steps** are in fixing it **or** we have **a** **new task** to find out 👓

# goal 🎏
- Find the issue on the site, this includes both finding the approprite `site -> page -> action`
	- A list of `URL's` is needed 
	- `possibly` with  steps to reproduce
- The final goal would be to `reproduce` the issue **locally** and then move on to fixing it

# actions 🏉
#iterate
#cycle

> the actions here can be [[cyclical]]

1. **contemplate** 🤔
2. **explore** the documentation on [[Confluence]]
	1. [LEGACY APPS](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/712212721/Legacy+Apps+Maintenance)
	2. [extranet](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/712212721/Legacy+Apps+Maintenance#Extranet)
3. **think** 🤔 ... again
	1. explore the history of extranet to find out how to access these pages
4. **explore** alternatives
	1. **focus** on the **file upload** itself

# todo's ✔
- [x] explore contact **6366309**
	- [x] try it **locally**
- [x] explore the `realtor->contact connection`
	- [x] dig through the **DB**
	- [x] reproduce the connection
	- [x] ~~find the [[realtor]] connected to contact 6366309~~
- [x] check git **history** for [[extranet]]
- [x] find the file upload
	- [x] sanitize the file upload

---
## explore contact
**id**: 6366309
local **URL**: http://localhost:8001/contacts/6366309

### steps 👣
1. ~~see if its possible to login quickly~~
2. ~~**or**~~
3. see if you can establish a connection with a [[realtor]]

## explore the connection 📎
- table: `biz_realtor_contact` 

==Unable to find the realtor==

- ! the [[realtor-contact connection]] doesn't exist

Title: Mon projet de vente

## file upload

### sanitize
**file**: `share/class.document.inc`
- @ see about using the HTML **sanitizer** - `share/Infrastructure/HTML/Sanitize/sanitize.php` 

- [x] **sanitize** 
	- [x] `path` &
	- [x] `title`
- [x] "" **test** sanitization
	- [x] **run** the existing tests
	- [x] **implement** new tests
		- [x] normal
		- [x] [[Cross-site scripting]]
	- [x] **verify**
- [x] **commit**
	- [x] `PR`

```bash
SKIP_INIT_DB=true OPT=tests/taskTest.php make test
```
