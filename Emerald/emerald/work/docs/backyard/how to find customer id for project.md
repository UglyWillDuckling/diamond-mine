#howto #backyard #doc 


Example:
project_id:  2081010897

Now to find the customer id

we can use the `bin/db/staging_console` to get the customer_id from `biz_project` -> `hdata->'customer_id'`

1. set a bash variable `project_id`
2. invoke the following db query
```bash
bin/db/staging_console -c "select hdata->'customer_id' as contact FROM biz_project WHERE id=$project_id" 
```

3. copy the `customer_id` from the result
```
 contact
---------
 376718
```

Customer id is **376718**