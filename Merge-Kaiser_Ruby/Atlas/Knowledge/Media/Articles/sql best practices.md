#article/sql

```table-of-contents
```

### Write queries you'll still understand tomorrow

Be specific: avoid SELECT \*

```sql
-- Fetch every column
SELECT * FROM user_profiles WHERE user_id = ?;

-- Fetch only the columns you need
SELECT user_id, display_name, avatar_url, last_login_ip
FROM user_profiles
WHERE user_id = ?;
```

Why this matters

* Explicit columns reduce surprises from schema changes, extra data, and duplicate field names.

### Use CTEs to break up complex logic

Rule: Use Common Table Expressions (CTEs) to split complex queries into named steps.

```sql
-- Hard to follow
SELECT COUNT(*)
FROM (
  SELECT *
  FROM orders
  WHERE created_at > now() - interval '7 days'
) o;

-- Clearer
WITH recent_orders AS (
  SELECT customer_id
  FROM orders
  WHERE created_at > now() - interval '7 days'
)
SELECT COUNT(*)
FROM recent_orders;
```

Why this matters

* CTEs clarify intent and simplify debugging and reuse.
* Materialization can be avoided with inline subqueries in hot paths.

### Comment your intent, not just your logic

Rule: Use comments to explain why the query exists, not just what it does.

```sql
-- Find users who signed up but never activated
-- (used in the weekly retention cohort report)
SELECT u.id, u.email
FROM users u
LEFT JOIN events e ON u.id = e.user_id
AND e.name = 'account_activated'
WHERE e.id IS NULL
AND u.created_at > now() - interval '7 days';
```

Why this matters

* SQL shows what a query does but not why.
* A short intent comment preserves context for future readers and reviewers.

### Make your queries faster

Make your filters index-friendly

Rule: Write filters that match how data is stored so the database can use indexes.

```sql
-- Forces a full scan: index on email can’t be used
WHERE LOWER(email) = 'test@example.com';

-- Uses the index if values are stored lowercase
WHERE email = 'test@example.com';

-- Blocks index on created_at
WHERE DATE(created_at) = '2025-08-04';

-- Range filter keeps index usable
WHERE created_at >= '2025-08-04'
AND created_at < '2025-08-05';
```

Why this matters

* Queries run faster and more consistently when filters use indexes.
* If a transformation is needed, create a functional index instead.

### Filter before you join

Rule: Filter each table before joining so you combine only the rows that matter.

```sql
-- Joins every user, even inactive ones
SELECT *
FROM users u
JOIN events e ON u.id = e.user_id;

-- Join only active, recently seen users
WITH active_users AS (
  SELECT id
  FROM users
  WHERE active = TRUE
  AND last_seen > now() - interval '90 days'
)
SELECT e.*
FROM active_users au
JOIN events e ON au.id = e.user_id;
```

Why this matters

* Filtering first avoids unnecessary data bloat.
* Helps the optimizer choose a better plan.
* Makes the query’s purpose clearer.

### Use EXISTS instead of IN

Rule: Use `EXISTS` instead of `IN` to test for related rows.

```sql
-- Inefficient: checks every row in the subquery
-- Unreliable: NULLs can make comparisons fail
SELECT *
FROM users
WHERE id IN (SELECT user_id FROM orders);

-- Efficient: stops at the first match
-- Reliable: works even if NULLs appear
SELECT *
FROM users
WHERE EXISTS (
  SELECT 1
  FROM orders
  WHERE orders.user_id = users.id
);
```

Why this matters

* `EXISTS` is safer and faster.
* Stops once it finds a match and doesn’t get tripped up by values.
* Can cause `IN` to skip rows you expect to match.

### Always specify ORDER BY

Rule: Row order is undefined unless you add `ORDER BY`. Make it explicit.

```sql
-- Unstable: row order is undefined and may change
SELECT id, name
FROM users
WHERE active = TRUE
LIMIT 10;

-- Predictable: rows are sorted by a stable column
SELECT id, name
FROM users
WHERE active = TRUE
ORDER BY created_at DESC
LIMIT 10;
```

Why this matters

* Without `ORDER BY`, results can change between runs or environments.
* Sorting explicitly gives you consistent, reliable output.
* Especially important for pagination or cached queries.

