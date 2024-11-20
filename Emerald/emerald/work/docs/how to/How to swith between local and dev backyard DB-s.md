---
noteID: e01d0f3d-0eaa-4281-9014-004d90c81db6
---
[[test local DB access]]

related **PR** 
https://github.com/MeilleursAgents/MeilleursAgents/pull/10598/commits/220a88859ee29f86341f1f6bfd864ac65ba8c753
---
## env vars

### for local
```rb
BACKYARD_PGPORT=5432
BACKYARD_PGHOST=db-local
BACKYARD_PGDATABASE=ma_local
BACKYARD_PGUSER_ADMIN=root // matches docker
BACKYARD_PGPASS=root // matches docker
```

### for dev
```rb
BACKYARD_PGHOST=backyard-db-master-dev.meilleursagents.tech
BACKYARD_PGPORT=6543
```

## code changes

`MALegacy/config/databases.inc`
```php
    'dev' => array(
        'main' => array(
            'driver' => 'pgsql',
            'connection_string' => sprintf('host=%s;port=%s;dbname=%s;user=%s;',
                _getenv(['PGHOST_LOCAL', 'PGHOST'], 'www-db-master.dev-internal.meilleursagents'),
                _getenv(['PGPORT_LOCAL', 'PGPORT'], '5432'),
                _getenv(['PGDATABASE_LOCAL', 'PGDATABASE'], 'meilleursagents_dev'),
                _getenv(['PGUSER_LOCAL', 'PGUSER'], 'meilleursagents_dev')
            ) . (_getenv('BACKYARD_PGPASS') ? 'password=' . _getenv('BACKYARD_PGPASS'): ''),
        ),
```

## docker db service
```yml
  db-local:
    image: "postgis/postgis:11-3.3"
    volumes:
      - ./postgres-data:/var/lib/postgresql/data
      - ./:/home/meilleursagents/
      - ../tools/backyard_dump.sh:/tools/backyard_dump.sh
    environment:
      - POSTGRES_PASSWORD=root
      - POSTGRES_USER=root
      - POSTGRES_DB=ma_local
    ports:
      - "5432:5432"
```

- [x] remind (@[[2024-11-21]])
