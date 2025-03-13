#ticket/bug/security #bug/security

related:: [[backyard]]
similiar:: [[XSS issue on backyard - address]]
ticket:: https://avivgroup.atlassian.net/browse/LUNA-339
tools:: [[ocrs]]

- [x] #task [[Security issue - General file access, passerell]] 🆔 UBtYRt 🔼 ⏳ 2025-02-12 📅 2025-02-27 ✅ 2025-02-26
	- [x] **gather** [[#docs]]
	- [x] **reproduce** issue locally
	- [x] ~~#task verify that the passerelle route isn't used anymore 🆔 OfXUGm 🔼 ⏳ 2025-02-13 📅 2025-02-13 ✅ 2025-02-14~~
	- [x] ~~see if the files match any other **path**~~
	- [/] & limit the download to just the `/home/meilleursagents/data/third-parties/imports/` path
___
### 🗃 docs
- [sec doc](https://docs.google.com/document/d/1XdfOhoQzyYqBhOPb2rk3U7onIIFLz-nG/edit?usp=sharing&ouid=103366236384036348900&rtpof=true&sd=true)
- [[security report - general file access on backyard]]
### **ℹnfo**
`url`: https://backyard.meilleursagents.com/admin/passerelle/files/download?file=

- Can easily be **reproduced**
- files are stored on the gcp bucket and mapped on [[backyard]]
- files are generated almost every day
- it is easier to just use the `url` on backyard
- **command** on [[mediaapi]]  [github link](https://github.com/MeilleursAgents/MediaAPI/blob/58822535e33db1939ca8855ad88888a61942bf5a/commands/passerelles.py)
- [[Clement Faure]]
### **code**
- `share/controller/backyard.passerelle.inc`
- template to show the link: `backyard/templates/admin/passerelle/index.html`

### **misc**
> [!quote]
> Backyard being used by devs to retrive those files when there is an issue to analyse, or by after sale people to first check the issue raised by the clients **since they don"t have access to the bucket**.

___
## Active 

`import` **command** https://github.com/MeilleursAgents/MediaAPI/blob/58822535e33db1939ca8855ad88888a61942bf5a/commands/passerelles.py
### **solution** ✔

The `download` **access** can be limitted to just the `/home/meilleursagents/data/third-parties/imports/` **path**.

share/controller/backyard.passerelle.inc
```php
if (!startsWith($file, APP_DATA_IMPORTS_PASSERELLE)) {
	throw new HTTPRequestException('Unauthorized', 401);
}
```


[^1]: [[batch job]]