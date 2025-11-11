---
related:
  - "[[how to run the mediaAPI migration - alembic]]"
  - "[[Multiple heads in alembic migrations - what to do]]"
rel:
about:
  - "[[Media API]]"
  - "[[malegacy]]"
---
#howto/work/db

```sh
bin/db/staging_console -c 'SELECT * FROM mediaapi_alembic_version'
```
