#ticket

## description

**Extranet** allows for uploading things that it shouldn't.
- [[SVG]] uploaded as a different file type

- [x] #task fix xss upload issue on [[extranet]] 🆔 Zxm2X1 ✅ 2025-02-07
	- [/] investigate what is happening and write down in [[#investigation]]
	- [x] try changing the file **extension**
		- [x] svg -> jpg
	- [x] #task verify false negatives; upload actual image files 🆔 uQLN6l ✅ 2025-02-07
	- [ ] #task test on **backyard** 🆔 zQjE8t

### investigation
- $ looks like the validation isn't setup properrly
	- it should run on the full path to the file
- $ validation isn't validating the correct field, instead of validating the **full path** to the file it is
	validating the `filename`
### implement fix
- [x] Update code to always run the validation
- [x] update to apply the validation to the full file path; the `tmp` one
### verify that the upload is working with correct file types
works with jpg's.
### artifacts
- [[how to test upload validation on extranet]]
### resolution

Two problems were found ,the first that the validation wasn't triggered correctly, i.e. on each file upload. And the second,
being that the validation was set up to run on the `filename` **not** the `full path`.

The validation was modified to run **each time**, and, to run on the `full path` to the file, in this case the `tmp` upload path.
Note that latter change aligns with `tests/helpers_fileTest.php::test_validate_mime_type` which also uses the **full** file path.

### test on backyard
 %% this can be tmp content %% 

- [x] find an **upload** button
- [/] test to make sure it works  [[#test upload]]

#### find the button
- ~~search for the document mentions: `share/class.document.inc`~~ 
- search for HTML upload `input` ✔

- share/ui.document.inc contains HTML for upload
	- backyard/contacts/projects/documents.php calls the shared ui
#### test upload 
http://localhost:8001/contacts/5758471/projects/2080878347/documents

- [x] test svg validation
- [x] test spoofed `svg` 
- [x] test normal upload
- [x] ! try to **modify** the document

##### **path through the upload on by**

share/controller/backyard.document.inc
⬇
share/controller/document.inc
...
...
`share/class.document.inc::upload_document` -> `::clean_upload_document(array $file)`
%% this should now validate  %%
