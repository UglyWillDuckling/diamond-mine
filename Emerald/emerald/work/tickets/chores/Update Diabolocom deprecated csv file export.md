https://github.com/MeilleursAgents/MeilleursAgents/pull/10805
[LUNA-302](https://avivgroup.atlassian.net/browse/LUNA-302)

## <mark style="background: #FFF3A3A6;">description</mark>

The current file fetched from [[Diabolocom]] is being deprecated in favor of a new one. 
Specifically, the file path 
`/cross_channel/agent/agent log/[DATE]_agentlog.csv` needs to be replaced
`/cross_channel/agent/agent log/[DATE]_agentlog_v2.csv`
which includes structural changes. 
<mark style="background: #FFB86CA6;">The structural changes also need be taken into account and all fields to be verified and updated as required.</mark>

## <mark style="background: #BBFABBA6;">acceptance</mark>

- [x] file path is updated
- [ ] all fields have been verified
	- [ ] mappings are added as needed
- [ ] ...

### testing info

**today**: [[2024-11-15]]

**person** to use for test: Donatien Privat

**sql check query**
```sql
SELECT DATE(created) as day, COUNT(*) as record_count  
FROM diabolocom.adr  
GROUP BY day  
ORDER BY day DESC  
LIMIT 500;	
```

## notes 📔
- <mark style="background: #FFF3A3A6;">the `script` itself can be run via the browser</mark>
- we can just delete the existing db table entries in order to `rerun` the script

## <mark style="background: #ABF7F7A6;">questions</mark>

- ? for how long is the calling data **relevant**?
	- does the entire history need to be consistent?

## todo's
- [x] #task Diabolocom update deprecated CSV export 📅 2024-11-19 ✅ 2024-11-20
	- [x] examine the data first #task
	- [x] try out the script first #task
	- [x] #task update filename 📅 2024-11-15 ✅ 2024-11-19
	- [x] #task [[#verify fields]] ✅ 2024-11-19
		- [x] update mappings as needed
		- [x] #task check if data is for the day ✅ 2024-11-19
- [/] #task check [[#duration]] column values ✅ 2024-11-19
- [x] #task think about importing the CSV data as the data coming from the API in a **test** ✅ 2024-11-19
	- [x] pass in the `api client`
	- [x] use a `fake class` for testing
		- [x] have it use the `CSV` data
- [ ] #task add error handling for the API
	- [ ] logging
- [ ] 🤔 think about refactoring the import outside of the model class #task 
- [x] #task fix `unsigned` commit
	[[Git sign off previous commits]]
- [ ] #task check on dev
	- [ ] check db
	- [ ] run
	- [ ] check db again

### examine the existing db data
- [x] check the data
- [x] access it from local
- [x] `PhpStorm`
- [x] run verify `query`
- [x] establish a clear way of checking the db data #task
#phpstorm #terminal #local #csv

### <mark style="background: #BBFABBA6;">try</mark> out the script {}
- [/] local
	- [x] check in browser
- [x] dev
- [x] see the **impact** ==checking in db console==
	- [x] dev
- [x] <mark style="background: #ABF7F7A6;">record</mark> things in <mark style="background: #FFB86CA6;">findings</mark>

#### <mark style="background: #FFB86CA6;">findings</mark>

- ! unable to access Diabolocom locally
- $ all of the fields required in the import are present
- ~ running on dev currently doesn't change anything

### update filename
- [x] verify the existing **PR** https://github.com/MeilleursAgents/MeilleursAgents/pull/10805

### <mark style="background: #ABF7F7A6;">verify</mark> fields
- [x] **ensure** all the `required` fields <mark style="background: #BBFABBA6;">exist</mark>
- [x] check all the field `mappings` are <mark style="background: #BBFABBA6;">correct</mark>
	- [x] check the fields in import 
	- [x] check the fields in `CSV`
		- [x] events
		- [x] status
- [x] check that the data is for the same day
- [[events table]]

### duration
┌──────────┬────|
│  duration│old_duration│
├──────────┼────|
│ 6138244│ 6138│
│ 7387747│ 7388│
│ 4583082│4583│
│ 2024955│2025│

---start-multi-column: ID_1lw8
```column-settings
Number of Columns: 2
Largest Column: standard
```

- [x] check existing db data
- [x] check `CSV` again
- [/] update import code
	- [/] convert `milliseconds` to `seconds`
	- [ ] check

--- column-break ---

- <mark style="background: #FFB86CA6;">the durations are currently in seconds</mark>
	- the existing logic is built around this
- CSV duration data looks to be in `milliseconds`

--- end-multi-column

```php
$adr->duration = (int)round($row->duration / 1000);
```

## current ♨

PR is done https://github.com/MeilleursAgents/MeilleursAgents/pull/10805

- ==need to add error handling for API errors==
- testing on dev

### ideas
- 'i some `refactorings` are still possible
- maybe we could separate the update logic into a **distinct** **class** and simplify the logic within
