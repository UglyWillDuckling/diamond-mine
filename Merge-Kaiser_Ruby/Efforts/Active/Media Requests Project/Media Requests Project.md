---
status: Done
dg-publish: true
---
#project 

Create a media requests app where it is possible to submit requests to get media on [[Atlas/Tools/pc/Jellyfin|Jellyfin]].

## ideas

- automatically search if bigger more than >= 3letters #later
- rejection reason #low
- production deployment -> separate dev from **prod**
- make the request page ==editable directly==

..
- [x] **archive** feature for requests

- automatically search **Jellyfin** on [[new request page]]
- request comments #medium
- WhatsApp integration -> receive notification if **status changes** #high
	- can be integrated with comments
...

- suggest to create request on **Jellyfin** page if no results found

## v3

**chores**
- [x] check how to add ==custom== ==sorting
- update page titles
- `fix` favicon

**features**

- [x] **archive** feature
- [ ] whatsapp notifications
- [ ] ? comment

### whatsapp notifications

- app on facebook is needed
- connector in code
- event based so that each status update is notified
- ..

### archive ✅

archive feature for requests -> probably need to be in a certain status

**requirements**
- archived items should be removed from default items -> like soft delete
- optionally add a page to display those or a new filter
- implementation should be kept simple

- [x] new column -> set default to false
- [x] add scope for this
- [x] archive button on `request page`
	- [x] #maybe only for `vlado`
- [x] filter out requests by default
