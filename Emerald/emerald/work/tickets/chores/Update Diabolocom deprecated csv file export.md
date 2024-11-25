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
- [x] the data is generated and stored correctly
- [ ] the entries are updated `automatically` via [[Backyard Tasks]]
---
## notes 📔
- <mark style="background: #FFF3A3A6;">the `script` itself can be run via the browser</mark>
- ! unable to access [[Diabolocom]] locally or on [[dev]]
- the data is updating **every 15 min for the entire day after 9AM**

## <mark style="background: #ABF7F7A6;">questions</mark>
- ? for how long is the calling data **relevant**?
	- does the entire history need to be consistent?

## ideas 💡
- 'i some `refactorings` are still possible
- maybe we could separate the update logic into a **distinct** **class** and simplify the logic within
## info
- 'i 
![[crontab for diabolocom]]

### testing 
person to use for test: Donatien Privat

**sql check query**
```sql
SELECT DATE(created) as day, COUNT(*) as record_count  
FROM diabolocom.adr  
GROUP BY day  
ORDER BY day DESC  
LIMIT 500;	
```

## <mark style="background: #FFB8EBA6;">current</mark> ♨
- ! need to deploy [[Backyard Tasks]]
	- dev deployed
	- next is prod
---
## todo's
- [ ] 🤔 **think** about refactoring the import outside of the model class #task 
- [x] #task Diabolocom update deprecated CSV export 📅 2024-11-19 ✅ 2024-11-22
- [x] #task check [[#duration]] column values ✅ 2024-11-21
- [x] #task add error handling for the API ✅ 2024-11-21
- [x] #task check on dev ✅ 2024-11-21
	- [x] check db
	- [x] run
	- [x] check db again
- [x] #task verify **production** changes ✅ 2024-11-22
	- [x] check db data
	- [x] run the import again
	- [x] check the `my` page
	- [x] see what should be displayed
- [x] deploy the [[Backyard Tasks]] #task ✅ 2024-11-25
	- [x] dev
	- [x] prod
- [/] #task check production update
- [>] #task document this ticket 📝

### examine the existing db data
- [x] check the data
- [x] access it from local
- [x] `PhpStorm`
- [x] run verify `query`
- [x] establish a clear way of checking the db data #task
#phpstorm #terminal #local #csv

### `try` out the script 
- [/] local
- [x] check in browser
- [x] dev
- [x] see the **impact** ==checking in db console==
- [x] <mark style="background: #ABF7F7A6;">record</mark> things in <mark style="background: #FFB86CA6;">findings</mark>

#### <mark style="background: #FFB86CA6;">findings</mark>

- ! unable to access Diabolocom locally
- $ all of the fields required in the import are present
- ~ running on dev currently doesn't change anything
	- ! we don't have access to [[Diabolocom]] on [[dev]]

### <mark style="background: #ABF7F7A6;">verify</mark> fields
- [x] **ensure** all the `required` fields <mark style="background: #BBFABBA6;">exist</mark>
- [x] check all the field `mappings` are <mark style="background: #BBFABBA6;">correct</mark>
	- [x] check the fields in import 
	- [x] check the fields in `CSV`
		- [x] events
		- [x] status
- [x] check that the data is for the same day
- [[events table]]
- [x] run the import again
	- [x] compare the difference in db, backyard
#### notes 🗒
- the data should be updating **every 15 min for the entire day after 9AM**
- after importing, the data seems consistent in both the DB and on the backyard
- we need to apply the changes to [[Backyard Tasks]]

### deploy Tasks ⛏
- [x] resolve deployment issue
- [x] try to deploy `prod`
- [x] contact SRE
- [x] deploy prod

#### deploy issue
- https://jenkins.ma-backbone.net/blue/organizations/jenkins/deploy/activity
- [storage-dev](https://console.cloud.google.com/storage/browser/ma-delivery-dev/apps/malegacy;tab=objects?pageState=(%22StorageObjectListTable%22:(%22f%22:%22%255B%255D%22,%22s%22:%5B(%22i%22:%22objectListDisplayFields%2FtimeLastModified%22,%22s%22:%221%22),(%22i%22:%22displayName%22,%22s%22:%220%22)%5D)
- [storage-prod](https://console.cloud.google.com/storage/browser/ma-delivery-prod/apps/malegacy;tab=objects?pageState=(%22StorageObjectListTable%22:(%22f%22:%22%255B%255D%22,%22s%22:%5B(%22i%22:%22objectListDisplayFields%2FtimeCreated%22,%22s%22:%221%22),(%22i%22:%22displayName%22,%22s%22:%220%22)%5D)

[latest deploy](https://jenkins.ma-backbone.net/job/deploy_ansible/3802/console)
