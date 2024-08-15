## Context

[JIRA ticket](https://avivgroup.atlassian.net/browse/LUNA-54)

The myTileCache API provides URL's for the different layers used on maps.
The actual application is part of the legacy project and the code located inside the `mytilecache/` folder.

## Goal

The goal of the SPIKE is to provide information on the current usage of the `mytilecache` API and to determine how we would migrate to a new service, how difficult this would be and to which service we would migrate to.

Furthermore, we need to investigate the current status of the **VectorTileAPI** which might be getting decomissioned.
See [link to a different SPIKe]() for more info on this.

---
## Current Usage

### Files
#### gmaps3.js
the **mytilecache** url is referenced in one place only which is already linked in the SPIKE ticket.
[gmaps - tileUrl](https://github.com/MeilleursAgents/MeilleursAgents/blob/bff4d1f6e4ebecf3bb6e6897c6b9c2dad0b66046/MALegacy/static/js/source/ma.gmaps3.js#L343)

### Application

At the moment, the tile layers are used on a single page only.

#### realtors catchment_area
- displays the layers on a map
- radio buttons allow you to switch between layers
- [dev - example](https://backyard-dev.meilleursagents.tech/realtors/73067/catchment_area)

## Migration

### How to migrate

In case the migration is possible it should be done relatively easily by updating the the tile URL.

The URL is set as an `env` variable and would thus required to be easily changed. We would likely need to do this on both the `dev` and `prod` environments.

There are also few expected differences between  using different services as they should all have the same basic response format.

### Possible issues 🔴

**additional changes to the existing logic**

There is a possiblity that additonal changes might be required in order to get the new layer URL's to work.

The good news 🗞 is that this would all be localized in the `gmaps3.js` module and so shouldn't take too much time to implement.

### VectorTile API

> [!error] More info is needed here as the `VectorTileAPI` could be getting decomissioned
[link to other doc - SPIKE about the API usages on backyard]()

## Testing 🧪

This is the easy part 😌. We can simply open the map on the backyard and check there if everything is working as before.

### **steps**
1. go to the [catchment-area](https://backyard-dev.meilleursagents.tech/realtors/73067/catchment_area) page on dev
2. play around with the layers and see if they work as before

## Next steps
1. need to get more information on the `VectorTileAPI` and possible service alternatives

---
## Continue

**todo** ✅
- [x] update document with pages where the layers are actually used(shown)
- [x] cleanup the document
- [x] update document header with more information
	- [x] maybe add next steps at the END as well
- [x] see about vectorTile getting decomissioned
	- [x] mention that more info is needed from other teams
- [x] check on **<mark style="background: #ABF7F7A6;">VectorTileAPI</mark>** some more
- [x] transfer doc to <mark style="background: #ADCCFFA6;">Confluence</mark>
	- [x] add links
	- [x] update formatting and the like
	- [x] add ticket link
