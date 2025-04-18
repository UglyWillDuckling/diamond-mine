---
related:
  - "[[work/Projects/B2c LeadRankingAPI.md|B2c LeadRankingAPI]]"
used_entities:
  - "[[Sale Slot entity|Sale Slot entity]]"
---
#artifact/doc

**used_entities**
```meta-bind
INPUT[listSuggester(optionQuery(""), useLinks(true), title("Related")):used_entities]
```

**related**
```meta-bind
INPUT[listSuggester(optionQuery(""), useLinks(true), title("Related")):related]
```
___

`file`: b2cleadrankingapi/services/campaign_service.py

## purpose
- **generate** a [[calling campaign]]
- **assign** to Sales People
## take note

- the generation uses `Slots` which are themselves entities
	- [[Sale Slot entity]]

## how it works

- sorts [[lead]]'s by [[lead rank]] and `estima_date`
- generates the campaign for one or more time time slots
- slots are used to retrive lead Windows
- calls are based on **lead types:** each type get's a segment
	- a segment is basically a way to group associated calls
- ..

### glossary

- [[RDVVQ]]


____
- [x] #task check [[campaign generation on B2C]] 🆔 LXUtFY 🔼 ⏳ 2026-02-07 📅 2025-02-27 ✅ 2025-04-14