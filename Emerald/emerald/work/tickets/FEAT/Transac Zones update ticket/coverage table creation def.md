#artifact #sql-table-def

```sql
CREATE TABLE public.biz_product_coverage (
    id integer DEFAULT nextval('public.biz_product_coverage_id_seq'::regclass) NOT NULL,
    enabled boolean DEFAULT true NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL,
    version timestamp without time zone NOT NULL,
    product_id integer NOT NULL,
    place_id integer NOT NULL,
    start_date date NOT NULL,
    end_date date
);
```
