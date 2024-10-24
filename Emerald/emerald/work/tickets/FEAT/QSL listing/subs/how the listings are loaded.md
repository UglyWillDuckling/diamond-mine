## db, source
- table: mkt.`mkt_listing`

## code
- share/controller/backyard.contract.inc#ln553
- either `listing2`::from_buyer_search(buyer_search)
	- ::from_options
		- this will make the actual db query
- OR  `listing2::active_from_realtor_id($realtor->id, $options)`
	- set [[contract entity]] by using `core_link::get_entity1_from_entity2($listing->id, LINK_CONTRACT__LISTING)`

## notes
- 