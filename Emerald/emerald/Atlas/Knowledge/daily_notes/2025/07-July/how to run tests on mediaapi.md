---
about: "[[Media API]]"
topic: "[[testing]]"
tags:
  - howto/mediaapi
---

- copied from `Makefile`[^1] 
- uses `docker compose` directly[^2] 
	- allows you to pass in file paths
- `APP_NAME` is important
	- **see** `build.env` for more env vars

## script

```sh
test() {
APP_NAME=mediaapi docker compose -p mediaapi-local-dev -f docker-compose-dev.yml run --rm \
        app bash -c "PGHOST=db PGUSER=mediaapi PGDATABASE=mediaapi_test PGPASSWORD=mediaapi_pass PYTHONPATH=. ./wait-for-postgres.sh db pytest $1"}
```

- `$1` is passed directly to `pytest`[^3] 

___
## usage

```sh
test test/models/test_iris_zone.py
```





[^1]: [[Makefile]]
[^2]: [[docker compose]]
[^3]: [[pytest]]