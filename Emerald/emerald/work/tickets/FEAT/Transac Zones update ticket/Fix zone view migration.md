---
part of:
  - "[[Transac Zones update ticket]]"
---
#bug 

- [x] #task fix migration [[Fix zone view migration]] ✅ 2025-07-25

<mark style="background: #FFB8EBA6;">Error</mark>:
psycopg2.errors.InvalidTableDefinition: cannot change name of view column "zone" to "created_at"
___
## solution

resolved by adding a `remove` command and then creating the view from scratch.

