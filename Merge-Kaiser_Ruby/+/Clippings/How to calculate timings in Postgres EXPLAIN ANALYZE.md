---
source: "https://www.pgmustard.com/blog/calculating-per-operation-times-in-postgres-explain-analyze"
published: 2021-06-28
created: 2026-04-29
tags:
---
When you’re trying to work out why a Postgres query is slow, EXPLAIN ANALYZE can be a huge help, but calculating the per-operation timings can get tricky. This post will start off fairly gentle, but it gets complex pretty quickly, so strap in!

## The basics

The first thing to know is that the reported time of a parent operation is **inclusive** of its children. So if we want to know the contribution of the parent operation, we need to subtract the timings reported by its children.

Consider a scan and sort of a small table (omitting the cost statistics, for brevity):

```js
Sort (actual time=0.049..0.054 rows=51 loops=1)
   Sort Key: c DESC
   Sort Method: quicksort  Memory: 31kB
   ->  Seq Scan on t (actual time=0.012..0.018 rows=51 loops=1)
Planning time: 0.064 ms                                                                     
Execution time: 0.077 ms
```

Towards the bottom of the query plan we can see the [actual total time](https://www.pgmustard.com/docs/explain/actual-total-time) of the sequential scan was **0.018 ms**.

The same metric for its parent operation, the sort, was **0.054 ms**.

To get an idea for how much time was spent sorting, rather than scanning and sorting together, we can subtract 0.054 - 0.018 = **0.036 ms**.

## Watch out for loops

The next biggest reason that timings in query plans are not straightforward is that the time statistics are a **per-loop average** (mean). So when the number of loops is more than 1, we need to remember to multiply the actual total time by the number of loops.

Here is a simple nested loop example:

```js
Nested Loop (actual time=0.061..0.335 rows=86 loops=1)
  ->  Index Only Scan using i on t (actual time=0.014..0.019 rows=9 loops=1)
        Index Cond: (id < 10)
        Heap Fetches: 0
  ->  Index Scan using i2 on t2 (actual time=0.011..0.028 rows=10 loops=9)
        Index Cond: (id = t.id)
Planning Time: 0.802 ms
Execution Time: 0.412 ms
```

We can see a single index-only scan (loops=1) which takes **0.019 ms**.

The index scan line reports loops=9, so we need to multiply 0.028 \* 9 = **0.252 ms**.

This is important, as we can now see that it is a significant proportion (0.252 / 0.335 = 75%) of the time reported by its parent operation, the nested loop.

We can calculate the additional overhead of the nested loop by subtracting the totals of its children, much like we did above: 0.335 - 0.019 - 0.252 = **0.064 ms**.

## Parallel timings are a bit tricky too

When operations are done in parallel, PostgreSQL will report the number of threads as loops. This means the section above has you covered for calculating a CPU time, but since these are done in parallel, this is not a wall-clock time.

For that, we can get a rough estimate from the per-loop average reported. But for a more accurate number, we can use the [VERBOSE](https://www.pgmustard.com/docs/explain/verbose) parameter to get the individual worker timings, and use the slowest as the wall-clock total for the operation (normally the leader thread, if it is participating). It is worth noting that the leader (or main thread) does not report its statistics, but we can subtract the others from the total to work it out. How fun.

Let’s look at an example, from using EXPLAIN (ANALYZE, VERBOSE):

```js
->  Parallel Seq Scan on s.t 
    (actual time=4.095..7178.509 rows=236170 loops=3)
      Output: c1, c2, c3
      Worker 0:  actual time=0.118..7160.961 rows=247183 loops=1
      Worker 1:  actual time=0.151..7108.307 rows=227603 loops=1
```

Here we can see that there were 3 threads (loops): Worker 0, Worker 1, plus the main thread. On average, they took 7178.509 ms.

(7178.509 \* 3) - 7160.961 - 7108.307 = **7266.259ms**

By multiplying the average by three, and subtracting the worker timings, we can see that the main thread took the longest of the three, and as such we can use this as a more accurate estimate of the operations wall-clock time.

## Some subtleties around CTEs

If Postgres opts to materialize a CTE, perhaps because it is being referred to multiple times in the query, then the simple logic of subtracting child operation times from parent operation times breaks down.

Consider this query, which is deliberately easy to follow the timings of, and refers back to the CTE twice:

```js
WITH init AS (
 SELECT * FROM pg_sleep_for('100ms')
 UNION ALL
 SELECT * FROM pg_sleep_for('200ms')
)
(SELECT * FROM init LIMIT 1)
UNION ALL
(SELECT * FROM init);
```

Now, lets request the execution plan for this using EXPLAIN (ANALYZE, COSTS OFF), to keep it simple:

```js
Append (actual time=102.409..302.675 rows=3 loops=1)                                                
  CTE init                                                                                          
    ->  Append (actual time=102.397..302.649 rows=2 loops=1)                                        
          ->  Function Scan on pg_sleep pg_sleep_for (actual time=102.396..102.398 rows=1 loops=1)  
          ->  Function Scan on pg_sleep pg_sleep_for_1 (actual time=200.243..200.245 rows=1 loops=1)
  ->  Limit (actual time=102.407..102.409 rows=1 loops=1)                                           
        ->  CTE Scan on init init_1 (actual time=102.402..102.402 rows=1 loops=1)                   
  ->  CTE Scan on init (actual time=0.001..200.256 rows=2 loops=1)                                  
Planning Time: 47.003 ms                                                                            
Execution Time: 303.905 ms
```

If we look carefully, we can see that the ~ 300ms is reported twice, once in the CTE Scans and Limit, and again in the Append (and it’s children). In this simple example, we can easily catch this, but in more complex cases, it can cause confusion and is worth staying mindful of.

I’d like to give a shout-out to [Felix Geisendörfer](https://twitter.com/felixge) who helped us while we were working out how we’d like to report these more complex per-operation timings in [pgMustard](https://www.pgmustard.com/). Allocating the timings of a CTE called in more than one place is worthy of a blog post in its own right. If that’s of interest, I highly recommend reading the [quirk correction](https://flame-explain.com/docs/general/quirk-correction) page on Felix’s Flame Explain website as a starting point.

## Tools can help

As that last paragraph alludes to, there are tools that attempt to do these per-operation timing calculations for you.

A couple of the more popular ones are [explain.depesz](https://explain.depesz.com/), and [explain.dalibo](https://explain.dalibo.com/) (based on Alex Tatiyant’s PEV), which both handle the basics well.

Felix’s [Flame Explain](https://flame-explain.com/) focuses heavily on trying to get accurate per-operation timings, even in the most complex cases. With [pgMustard](https://www.pgmustard.com/), we have put a lot of effort into calculating and displaying these nicely, as well as adding advice as to what might be possible to speed up the query.

But as we’ve seen, there can be some subtlety involved, and the accuracy can even depend on which parameters you’ve used (eg VERBOSE), so even tools can have a hard time with this! When in doubt, I quite often check the timings in a second tool.

I hope this has helped you pick up a trick or two, it’d be great to hear from you if so.

---

Check out [our newsletter](https://www.pgmustard.com/newsletter) for a monthly round up of our favourite Postgres performance related blog posts and videos.

---

Photo by [Crissy Jarvis](https://unsplash.com/@crissyjarvis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/abacus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)