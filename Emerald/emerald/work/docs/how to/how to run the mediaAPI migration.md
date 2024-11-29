#howto #instructions #mediaapi

- uses `alembic`
- needs to be run inside the container

```bash
 docker exec mediaapi-local-app-run-f9010601bc64 bash -c 'cd migrations; alembic upgrade head'
```
*the container name is partially random*
