**file**: `share/class.document.inc`
- @ see about using the HTML **sanitizer** - `share/Infrastructure/HTML/Sanitize/sanitize.php` 

- [x] **sanitize** 
	- [x] `path` &
	- [x] `title`
- [x] "" **test** sanitization
	- [x] **run** the existing tests
	- [x] **implement** new tests
		- [x] normal
		- [x] [[xss]]
	- [x] **verify**
- [x] **commit**
	- [x] `PR`

```bash
SKIP_INIT_DB=true OPT=tests/taskTest.php make test
```
