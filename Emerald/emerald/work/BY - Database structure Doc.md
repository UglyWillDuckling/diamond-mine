---
real: https://avivgroup.atlassian.net/wiki/x/I4Djdw
---
#imposter/doc 

[Confluence Page](https://avivgroup.atlassian.net/wiki/x/I4Djdw)

**Disclaimer**
This document aims to get a better understanding about the Database that is still used on MeilleursAgents applications, especially by the Backyard and the MediaAPI. 

This document won’t be exhaustive since no-one at Aviv has a whole understanding of the table purposes. It will be enriched progressively by people when a new knowledge will be acquired. 
___

## Meilleurs Agents Database

### Public

...

#### biz_lead_token

Linked to the realtors and evaluations.
Can be purchased by agencies.
The purchases are recorded in `biz_product_order`.

#### biz_product_order

Records purchases made by agencies(realtors) on Backyard.
