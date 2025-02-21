#ticket/bug/security #bug/security

related:: [[backyard]]
similiar:: [[XSS issue on backyard - address]]
ticket:: https://avivgroup.atlassian.net/browse/LUNA-339
tools:: [[ocrs]]
[doc](https://docs.google.com/document/d/1XdfOhoQzyYqBhOPb2rk3U7onIIFLz-nG/edit?usp=sharing&ouid=103366236384036348900&rtpof=true&sd=true)
___
- [/] #task [[Security issue - General file access download, passerell]] 🆔 UBtYRt 🔼 ⏳ 2025-02-12 📅 2025-02-27
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

## latest

from [[Clement Faure]]
Basically, agencies will use what we call passerelle (those are tools  like ubiflow or ac3, made by compagnies used by agencies) to send their **past sales or ads**.

They will drop almost **everyday a zip files** containing the **list of ads or past files** that will be be displayed on the <mark style="background: #FF5582A6;">site meilleuragents</mark>. 

The files are first dropped on an `FTP`, then a `batch`[^1] will retrieve them and move them to a [[google cloud bucket.]]
[[Backyard]] probably list the files **directly** from the buckets.

> [!quote]
> Backyard being used by devs to retrive those files when there is an issue to analyse, or by after sale people to first check the issue raised by the clients **since they don"t have access to the bucket**.
> 
even for a dev who has access, **its easier to use the link from backyard**, since sorting with bucket is pretty handful and annoying

[^1]: [[batch job]]