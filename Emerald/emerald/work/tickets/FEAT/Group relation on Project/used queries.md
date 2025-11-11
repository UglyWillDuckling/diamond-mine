
### the rest

Dohvat broja projekata (za paginaciju)
SELECT count(*) as aggregate FROM "biz_project" WHERE exists (SELECT * FROM "biz_evaluation" WHERE "biz_project"."id" = "biz_evaluation"."project_id" and "enabled" = 1 and "status" = 183184834) and not (biz_project.hdata->'status') = '183184826'

Dohvat projekata (evaluation requested)
SELECT distinct * FROM "biz_project" WHERE exists (SELECT * FROM "biz_evaluation" WHERE "biz_project"."id" = "biz_evaluation"."project_id" and "enabled" = 1 and "status" = 183184834) and not (biz_project.hdata->'status') = '183184826' LIMIT 20 offset 0

Dohvat biz_itema za projekte (eager load)
SELECT "biz_item".*, "core_link"."entity_id1" as "laravel_through_key" FROM "biz_item" inner join "core_link" on "core_link"."entity_id2" = "biz_item"."id" WHERE "core_link"."link_enabled" = 1 and "core_link"."link_type" = 1718768051 and "biz_item"."enabled" = 1 and "core_link"."entity_id1" in (2080984906, 2081163525, 2081164056)

Dohvat ownera za projekte (eager load)
SELECT * FROM "core_user" WHERE "core_user"."user_id" in (4894276, 7638121, 7738581)

#### product query

Dohvat proizvoda vezan za projekte (eager load)
SELECT * FROM "biz_product" WHERE "biz_product"."id" in (2008026367)

#### sales person

Dohvat sales persona za projekte (eager load)

```sql
	SELECT * FROM "core_user" WHERE "core_user"."user_id" in (4503878, 5740959, 5565214)
```

### groups

Dohvat grupa od projekata (eager load) - ali **nije relationship** na Project modelu, već je posebna akcija

- ! `14531` item.hdata->'city_id'

```sql
	SELECT "core_group".* FROM "core_group" 
		INNER JOIN "core_link" on "core_link"."entity_id1" = "core_group"."group_id" 
			and "core_link"."entity_id2" in (14531)
			and "core_link"."link_type" = 1718768029
```
