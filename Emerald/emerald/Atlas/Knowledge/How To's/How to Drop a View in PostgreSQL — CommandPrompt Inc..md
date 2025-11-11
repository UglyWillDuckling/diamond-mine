---
author:
  - "[[Talha Saif Malik]]"
created: 2025-11-10
published: 2023-01-04
source: https://www.commandprompt.com/education/how-to-drop-a-view-in-postgresql/
tags:
  - howto/postgres
about:
  - "[[PostgreSQL]]"
---
In PostgreSQL, a view is nothing but a virtual table that is defined based on a SELECT statement. It enables us to store a SELECT query and use it as a table in our database. Postgres views are useful for organizing and accessing data, but if you have too many, they can take up space and slow down your database. It is therefore recommended that review the Postgres views regularly and delete the unnecessary views.

This write-up will guide you on how to drop a view in Postgres using practical examples. So, let’s start.

**How to Drop a View in PostgreSQL?**

In Postgres, the **DROP VIEW** statement allows us to delete one or more views from the database. To do that, use the DROP VIEW statement followed by the view’s name to be deleted:

```sql
DROP VIEW view_name;
```

In place of “view\_name”, specify the view to be dropped.

**Example: Dropping a Postgres View**

The below snippet shows the list of available views:

![img](https://www.commandprompt.com/media/images/image_VSWQkM4.width-1200.png)

Suppose we want to drop “emp\_view”; for that, we will execute the DROP VIEW statement as follows:

```sql
DROP VIEW emp_view;
```
![img](https://www.commandprompt.com/media/images/image_UtJ123c.width-1200.png)

To verify the view’s deletion, use the “\\dv” command:

![img](https://www.commandprompt.com/media/images/image_Kk8hUyZ.width-1200.png)

The selected view, i.e., “emp\_view”, has been dropped successfully. Let’s execute the DROP VIEW command one more time to see how it works when the selected view doesn’t exist in the database:

```sql
DROP VIEW emp_view;
```
![img](https://www.commandprompt.com/media/images/image_wQr410q.width-1200.png)

The output shows that Postgres throws an error “view doesn’t exist”. To avoid this error, you need to use the “IF EXISTS” clause with the DROP VIEW statement:

```sql
DROP VIEW IF EXISTS emp_view;
```
![img](https://www.commandprompt.com/media/images/image_E0hlKfx.width-1200.png)

The output snippet proves that this time a notice appeared instead of throwing an error. Let’s use the following code to drop the “sample\_view” from the database if it exists:

```sql
DROP VIEW IF EXISTS sample_view;
```
![img](https://www.commandprompt.com/media/images/image_xTy9Sx7.width-1200.png)

The sample\_view has been dropped successfully. From the above examples, we can conclude that the “if exists” option drops the selected view if it exists in the database, and it shows a notice if the targeted view doesn’t exist.

**Conclusion**

In Postgres, the **DROP VIEW** statement allows us to delete one or more views from the database. To do that, use the DROP VIEW statement followed by the view’s name to be deleted. Postgres throws an error if the view to be dropped/deleted doesn’t exist in the database. To avoid this error, you need to use the “IF EXISTS” clause with the DROP VIEW statement. This post explained the basic syntax, usage, and working of the DROP VIEW statement using suitable examples.