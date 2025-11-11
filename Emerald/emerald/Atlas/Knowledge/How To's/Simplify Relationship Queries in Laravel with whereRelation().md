---
author:
  - "[[Harris Raftopoulos]]"
created: 2025-08-19
published: 2024-10-02
source: https://medium.com/@harrisrafto/simplify-relationship-queries-in-laravel-with-whererelation-d01284fabc35
tags:
  - howto/laravel
---
In Laravel, querying models based on the attributes of their relationships is a common task. The `whereRelation()` and `orWhereRelation()` methods provide a concise and powerful way to filter your main models based on conditions in their related models. Let's dive into how these methods can simplify your Eloquent queries.

## Understanding whereRelation()

The `whereRelation()` method allows you to add where clauses to your query that check for specific conditions on related models. This is particularly useful when you need to filter a set of models based on the properties of their relationships.

## Basic Usage

Here’s a simple example of how to use `whereRelation()`:

```c
$posts = Post::whereRelation('comments', 'is_approved', false)->get();
```

This query retrieves all posts that have unapproved comments. It’s equivalent to a more complex query using a subquery or join, but with a much cleaner syntax.

## Using Custom Operators

You’re not limited to just equality checks. You can use any operator that Laravel’s query builder supports:

```c
$posts = Post::whereRelation(
    'comments', 
    'created_at', 
    '>=', 
    now()->subHour()
)->get();
```

This query finds all posts with comments created in the last hour.

## Chaining Multiple Conditions

You can chain multiple `whereRelation()` calls to add more conditions:

```c
$posts = Post::whereRelation('comments', 'is_approved', true)
             ->whereRelation('author', 'is_active', true)
             ->get();
```

This retrieves posts with approved comments from active authors.

## Using orWhereRelation()

When you need to use OR logic in your relationship queries, `orWhereRelation()` comes in handy:

```c
$posts = Post::whereRelation('comments', 'is_approved', true)
             ->orWhereRelation('author', 'is_admin', true)
             ->get();
```

This query finds posts that either have approved comments or are written by admin users.

## Real-World Example

Let’s consider a scenario where you’re building an e-commerce platform and you want to find products that are either on sale or have been reviewed positively:

```c
$popularProducts = Product::whereRelation('discounts', 'is_active', true)
                          ->orWhereRelation('reviews', 'rating', '>=', 4)
                          ->get();
```

This single query efficiently retrieves products that meet either of these conditions, demonstrating the power and flexibility of these methods.

## Morphing Relationships

Laravel also provides `whereMorphRelation()` and `orWhereMorphRelation()` for polymorphic relationships, allowing you to query across different types of related models:

```c
$activities = Activity::whereMorphRelation(
    'subject', 
    [Post::class, Comment::class], 
    'is_approved', 
    true
)->get();
```

This query finds activities where the subject (which could be either a post or a comment) is approved.

By leveraging `whereRelation()`, `orWhereRelation()`, and their morphing variants, you can write more expressive and efficient queries in your Laravel applications. These methods allow you to cleanly express complex relationship-based conditions without resorting to raw SQL or overly complicated query structures.

If this guide was helpful to you, subscribe to my daily newsletter and give me a follow on [X/Twitter](https://x.com/harris_rafto). It helps a lot!

Senior Software Engineer | PHP, Laravel, Livewire, TailwindCSS & VueJS | Co-organizer @ Athens Laravel Meetup

## More from Harris Raftopoulos

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--d01284fabc35---------------------------------------)