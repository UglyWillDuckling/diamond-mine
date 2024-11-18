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
- the `script` itself could be run via the browser
- we can just delete the existing db table entries in order to rerun the script


## <mark style="background: #ABF7F7A6;">questions</mark>

- ? for how long is the calling data relevant?
	- does the entire history need to be consistent?

## todo's
- [ ] #task Diabolocom update deprecated CSV export 📅 2024-11-19 
	- [x] examine the data first #task
	- [x] try out the script first #task
	- [/] #task update filename 📅 2024-11-15 ✅ 2024-11-15
	- [ ] #task [[#verify fields]]
		- [ ] update mappings as needed
		- [!] #task check if data is for the day
	- [ ] #task **plan** on how to update the `codebase` 📅 2024-11-18 
		- [ ] refactor
		- [!] error logic and error handling
		- [ ] logging
- [x] #task fix build on [[Jenkins]] : [pipe](https://jenkins.ma-backbone.net/blue/organizations/jenkins/malegacy/detail/malegacy/2104/pipeline) ✅ 2024-11-15
- [ ] #task update JIRA ticket with info

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
- [/] check all the field `mappings` are <mark style="background: #BBFABBA6;">correct</mark>
	- [x] check the fields in import 
	- [/] check the fields in `CSV`
		- [/] events
		- [ ] status
- [x] check that the data is for the same day

- [[events table]]

#### events fields

## current
- <mark style="background: #FFF3A3A6;">created</mark> the list of new and updated fields for the events(status_detail) `fields`
