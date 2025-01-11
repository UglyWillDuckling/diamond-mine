---
related:
  - "[[credentials.json]]"
---
- [x] #task ✍ write about **secretes generation** on [[backyard]] 🔽 ✅ 2026-01-09

## notes
- uses [[berglas]]
- `credentials.json` is synced via [[docker compose]]
[[credentials.json]]

## files created
- `credentials.json`
- `.pgpass-malegacy`

## command
file: `Makefile`

```ruby
generate-secrets:
	berglas access sm://ma-dev2/backyard-google-application-credentials\#1 > credentials.json
	berglas access sm://ma-dev2/pgpass-malegacy\#4 > .pgpass-malegacy
	# ..continued
```
