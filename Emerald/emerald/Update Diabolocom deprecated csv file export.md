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

- file path is updated
- all fields have been verified
	- mappings are added as needed

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

## todo's

- [ ] #task Diabolocom update deprecated CSV export 📅 2024-11-19 
	- [ ] try out the script first
		- [ ] run locally
		- [ ] see the impact
	- [/] #task update filename 📅 2024-11-15 
	- [ ] #task verify fields
		- [ ] update mappings as needed

### <mark style="background: #BBFABBA6;">try</mark> out the script {}
- [/] local
- [ ] dev
- [ ] see the impact
- [ ] record things
#### <mark style="background: #FFB86CA6;">findings</mark>



### update filename

- [ ] verify the existing **PR** https://github.com/MeilleursAgents/MeilleursAgents/pull/10805
- [ ] ...