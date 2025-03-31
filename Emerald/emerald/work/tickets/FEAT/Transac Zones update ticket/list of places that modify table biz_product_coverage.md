#artifact/doc

part_of:: [[Transac Zones update ticket]]
___

**grouped by**: project/repo -> file path

## Summary

Two locations were identified that made changes to the `biz_product_coverage`.
Of these, only **one**, the Legacy Backyard, appears to be active.

## Legacy Backyard

### MALegacy/backyard/admin/scripts/rdvvq/batch.add.cities.inc

table is updated each time the backyard user updates the list from the administration.

backyard url path: admin/scripts/rdvvq/batch.add.cities.php

## Media Api

### mediaapi/tasks/realtor_product.py

The Media Api defines 2 tasks within the `realtor_product.py`: `compute_product_coverage` and `refresh_product_coverage`

**Both jobs were confirmed as obsolete by the fact that the latest entries in the `core_job` table come from 2018.**
