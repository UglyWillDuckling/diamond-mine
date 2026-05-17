---
source: "https://stackoverflow.com/questions/42972726/postgresql-create-index-for-boolean-column"
published: 2017-03-23
created: 2026-04-28
tags:
---
This question shows research effort; it is useful and clear

This question does not show any research effort; it is unclear or not useful

Save this question.

Show activity on this post.

I have a table that has one boolean column.

```sql
productid integer
isactive boolean
```

When I execute the query

```sql
SELECT productid   
    FROM 
    product  
    WHERE ispublish
    LIMIT 15 OFFSET  0
```

![enter image description here](https://i.sstatic.net/AyMho.png)

After that, I created an index for the `ispublish` column:

```sql
CREATE INDEX idx_product_ispublish ON product USING btree (ispublish)
```

and re-execute

```sql
SELECT productid   
       FROM 
       product  
       WHERE ispublish
       LIMIT 15 OFFSET  0
```

The result:

\=> No difference

I've been tried the following, but the results are the same:

```sql
CREATE INDEX idx_product_ispublish ON product USING btree (ispublish)

CREATE INDEX idx_product_ispublish ON product USING btree (ispublish)

CREATE INDEX idx_product_ispublish ON product (ispublish) WHERE ispublish is TRUE
```

Who can explain that to me?

[edited Jun 19, 2020 at 4:26](https://stackoverflow.com/posts/42972726/revisions "show all edits to this post")

[Laurenz Albe](https://stackoverflow.com/users/6464308/laurenz-albe)

259k 22 gold badges317 silver badges396 bronze badges

asked Mar 23, 2017 at 10:00

[Văn Duy Nguyễn](https://stackoverflow.com/users/7756068/v%c4%83n-duy-nguy%e1%bb%85n)

751 1 gold badge5 silver badges3 bronze badges

1

This answer is useful

This answer is not useful

Save this answer.

Loading when this answer was accepted…

Show activity on this post.

PostgreSQL will use an index only if it thinks it will be cheaper that way. An index on a `boolean` column, which can only take two possible values, will almost never be used, because it is cheaper to sequentially read the whole table than to use random I/O on the index and the table if a high percantage of the table has to be retrieved.

An index on a `boolean` column is only useful

1. in data warehouse scenarios, where it can be **combined with other indexes** via a *bitmap index scan*.
2. if only **a small fraction of the table has the value** `TRUE` (or `FALSE` for that matter). In this case it is best to create a *partial index* like
	```sql
	CREATE INDEX ON mytab((1)) WHERE boolcolumn;
	```
	That indexed value is the constant 1 (index expressions that are not column references or look like a function call have to be in an extra pair of parentheses for syntactical reasons). 
	The only relevant part about this index is its `WHERE` condition. The constant 1 is there just because *something* has to be indexed. 
	If you have a (small) column that you can use instead, do it.
