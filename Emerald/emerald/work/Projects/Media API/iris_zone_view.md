#db-view

## declaration

```sql
CREATE OR REPLACE VIEW iris_zone_view AS (
    SELECT DISTINCT
        realtor_zone_by_iris_id.iris_id AS iris_id,
        realtor_zone_by_iris_id.created_at AS created_at,
        realtor_zone_by_iris_id.zone AS zone
    FROM mkt.realtor_zone_by_iris_id
);
```
