## Context

the myTileCache API provides URL's for the different layers used on maps.
The actual project is part of the legacy project and the code located inside the `mytilecache/` folder.

## Purpose

the goal of this SPIKE is to provide information on the current usage of the `mytilecache` API and to determine how we would migrate to a new service, as well as the associated difficulty of this migration.

---
## Current Usage

### frontend 🖌

#### **used in**:
- ~~static/js/source/ma.leaflet.js~~
- ~~static/js/source/map2.js~~
- `static/js/source/ma.gmaps3.js`

**gmaps3.js**

the **mytilecache** url is referenced in one place only which is already linked in the SPIKE ticket.
[gmaps - tileUrl](https://github.com/MeilleursAgents/MeilleursAgents/blob/bff4d1f6e4ebecf3bb6e6897c6b9c2dad0b66046/MALegacy/static/js/source/ma.gmaps3.js#L343)

**map2.js**
`static/js/source/map2.js`
references the `APP_URL_MTC` variable on line 2188 [line](https://github.com/MeilleursAgents/MeilleursAgents/blob/bff4d1f6e4ebecf3bb6e6897c6b9c2dad0b66046/MALegacy/static/js/source/map2.js#L2188)

the only place where the `map2.js` file is referenced is at `static/js/resources/widget.estima.js`

> [!fail]- Not used on the backyard **at all**

## Migration to VectorTile API

> [!warning]- Might not be an option as the API could be decomissioned soon

### How to migrate

In case the migration is possible it should be done relatively easily by updating the the tile URL.

The URL is set as an `env` variable and would thus required to be easily changed. We would likely need to do this on both the `dev` and `prod` environments.

#### Possible issues 🔴

**additional changes to the existing logic**

There is a possiblity that additonal changes might be required in order to get the new layer URL's to work.

The good news 🗞 is that this would all be localized in the `gmaps3.js` module and so shouldn't take too much time to implement.

## Testing 🧪

This is the easy part 😌. We can simply open the map on the backyard and check there if everything is working as before.

### **steps**
1. go to [evaluations - dev](https://backyard-dev.meilleursagents.tech/contacts/6579674/projects/2080979053/evaluations/)
2. Find **Choisir les agences** and click it -> wait for the map to load

> [!tip] The same path can be used on the other env's


## Continue

other pages to look 

- https://backyard-dev.meilleursagents.tech/realtors/73067/references/map
	- ! no layers found
- https://backyard-dev.meilleursagents.tech/realtors/73067/catchment_area/
	- **the only** place where we can actually see the layers

> [!tip] there is a chance that the layers aren't used on the backyard at all

