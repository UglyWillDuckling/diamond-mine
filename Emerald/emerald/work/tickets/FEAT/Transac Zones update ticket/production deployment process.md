---
part of:
  - "[[Transac Zones update ticket]]"
---
#sub-ticket

watch out for:
- [[iris_zone_view - new]]
- salesforce deployment

### notes 🗒
- the real data is store in the `biz_product_coverage` table

### existing
- **BY** is responsible for both writing and reading
- the process is completely manual

### new
- zones are updated automatically by salesforce
- **BY** get's the data from `mediaapi` 
- **BY** can also write **manual** updates by adding `manual irises`
	- these do not have a realtor

### invariants
- `automatic irises` SHOULD have a realtor association

## deployment process

1. [ ] deploy **mediaapi** + **BY**
2. [ ] deploy **salesforce** 

> [!todo] check if we need to run the complete update manually
> this is done by [[Alan Jaouen]] on dev.
