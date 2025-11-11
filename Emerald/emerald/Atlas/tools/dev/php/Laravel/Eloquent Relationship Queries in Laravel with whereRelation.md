---
author:
  - "[[Harris Raftopoulos]]"
created: 2025-08-19
published: 2025-02-23
source: https://laravel-news.com/whereRelation
tags:
  - docs/laravel
---
Laravel's whereRelation method streamlines the process of filtering models based on their relationships' attributes. This elegant approach replaces complex subqueries and joins with a more readable and maintainable syntax.

This feature proves especially valuable when building complex filters in e-commerce platforms, content management systems, or any application where models are interconnected and filtering based on related data is crucial.

Here's an example of building a course filtering system:

```php
<?php
 
namespace App\Http\Controllers;
 
use App\Models\Course;
use Illuminate\Http\Request;
 
class CourseController extends Controller
{
    public function browse(Request $request)
    {
        $courses = Course::query();
        // Filter by instructor rating
        if ($request->has('top_rated')) {
            $courses->whereRelation(
                'instructor',
                'rating',
                '>=',
                4.5
            );
        }
 
        // Filter by recent student reviews
        if ($request->has('well_reviewed')) {
            $courses->orWhereRelation(
                'reviews',
                'created_at',
                '>=',
                now()->subDays(30)
            );
        }
 
        // Filter by active discussion
        if ($request->has('active_discussion')) {
            $courses->whereRelation(
                'discussions',
                'last_activity',
                '>=',
                now()->subDays(7)
            );
        }
        return $courses->with(['instructor', 'reviews'])
            ->latest()
            ->paginate();
    }
}
```

The query builder creates efficient SQL based on your relationship conditions:

```php
// Filters courses with:
// - Highly rated instructors (4.5+)
// - OR recent reviews
// - AND active discussions
$courses = Course::whereRelation('instructor', 'rating', '>=', 4.5)
    ->orWhereRelation('reviews', 'created_at', '>=', now()->subDays(30))
    ->whereRelation('discussions', 'last_activity', '>=', now()->subDays(7))
    ->get();
```
