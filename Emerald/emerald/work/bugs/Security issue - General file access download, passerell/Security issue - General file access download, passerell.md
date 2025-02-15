#ticket/bug/security #bug/security

related:: [[backyard]]
similiar:: [[XSS issue on backyard - address]]
ticket:: https://avivgroup.atlassian.net/browse/LUNA-339
tools:: [[ocrs]]
[doc](https://docs.google.com/document/d/1XdfOhoQzyYqBhOPb2rk3U7onIIFLz-nG/edit?usp=sharing&ouid=103366236384036348900&rtpof=true&sd=true)
___
- [/] #task [[Security issue - General file access download, passerell]] 🆔 UBtYRt 🔼 ⏳ 2025-02-12 📅 2025-02-14
	- [x] open the ticket, link it here
	- [x] **gather** [[#docs]]
	- [x] **write** down information
	- [x] **reproduce** issue locally
	- [x] #task fix the issue 🆔 x0IHWE
	- [x] ~~#task verify that the passerelle route isn't used anymore 🆔 OfXUGm 🔼 ⏳ 2025-02-13 📅 2025-02-13 ✅ 2025-02-14~~
	- [>] see if the files match any other **path**
### 🗃 docs
- [[security report - general file access on backyard]]
### ℹnfo
url: https://backyard.meilleursagents.com/admin/passerelle/files/download?file=

Can easily be **reproduced**
#### **code**
- `share/controller/backyard.passerelle.inc`
- template to show the link: `backyard/templates/admin/passerelle/index.html`
### work / fix
- $ obsolete route

An **error** is thrown when you try to display the information that might create the `download` link
http://localhost:8001/admin/passerelle?view=aa
%%  the view qparam changes things %%

### **changes**
- ~~the `download` route was ==deleted==: `share/controller/backyard.passerelle.inc`~~

## call with clients

path: /home/meilleursagents/data/third-parties/imports/passerelle/passerelle-ubiflow/
- download works
[[Cedric]]
https://backyard.meilleursagents.com/realtors/52180/

## seconda call

`modifier` links to the [[event page]]
https://backyard.meilleursagents.com/realtors/52180/events/339681367

## ==status==

**delayed** until **next week**