**Type**: [[meetingType]]
___

**by Type**
> limit to 22 total items

```set
scope:
  - type
  - meeting
fields:
  - __bname
  - participants
  - scheduled
sortby:
  - - scheduled
    - true
timestamp: 1747821444069
viewMode: board
board:
  groupField: meeting type
  lanes:
    - 1on1
    - backyard-daily
topResults: 22

```

## All

```set
scope:
  - type
  - meeting
fields:
  - __bname
  - participants
  - scheduled
  - related
sortby:
  - - scheduled
    - true
timestamp: 1747667796217

```

## upcoming 🗨
> meetings from the future ⏲

```set
scope:
  - type
  - meeting
fields:
  - __bname
  - participants
  - scheduled
  - related
sortby:
  - - scheduled
    - false
timestamp: 1747821553119
filter:
  - - scheduled
    - gte
    - "@today"
topResults: 22

```
 
 ## recent ⌛
> made with [[dataview]]

```dataview
TABLE WITHOUT ID
file.link as meet, scheduled as "scheduled at", meeting_type as "type"
FROM #meet 
WHERE scheduled < date(today) AND scheduled > (date(today) - dur(2 month))
```
*data for the **last 2 months** ...for now*
