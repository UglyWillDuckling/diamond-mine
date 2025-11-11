---
author:
  - "[[Paul Redmond]]"
created: 2025-08-15
published: 2017-08-07
source: https://laravel-news.com/eloquent-eager-loading
about:
  - "[[Laravel]]"
  - "[[Eloquent]]"
tags:
  - docs/laravel
---
- [/] #task read about eager loading [[Optimize Laravel Eloquent Queries with Eager Loading]]
___

Object Relational Mapping (ORM) makes working with databases amazingly simple. While defining database relationships in an object-oriented way makes it easy to query related model data, developers might not pay attention to the underlying database calls.

## What is Eager Loading?

At its core Eager Loading, is telling Eloquent that you want to grab a model `with` specific relationships that way the framework produces a more performant query to grab all the data you will need. By eager loading, you can take many queries down to just one or two.

In this tutorial, we will set up some example relationships and then walk through how queries change with and without eager loading. I like to get my hands directly on code and experiment with things, and I hope to illustrate how eager loading works with some examples that will further help you understand how to optimize your queries.

## Introduction

At a basic level, ORMs “lazy” load-related model data. After all, how’s the ORM supposed to know your intention? Perhaps you will never actually use the related model’s data after querying the model. Not optimizing the query is known as an “N+1” issue. When you use objects to represent queries, you might be making queries without even knowing it.

Imagine that you were received `100` objects from the database, and each record had `1` associated model (i.e. belongsTo). Using an ORM would produce 101 queries by default; one query for the original 100 records, and *additional* query for each record if you accessed the related data on the model object. In pseudo-code, let’s say you wanted to list all published authors that have contributed a post. From a collection of posts (each post having one author) you could get a list of author names like so:

```php
$posts = Post::published()->get(); // one query
 
$authors = array_map(function($post) {
    // Produces a query on the author model
    return $post->author->name;
}, $posts);
```

We are not telling the model that we need all the authors, so an individual query happens each time we get the author’s name from the individual `Post` model instances.

## Eager Loading

As I mentioned, ORMs “lazy” load associations. If you intend to use the associated model data you can trim that `101` query total to `2` queries using eager loading. You just need to tell the model what you need it to load eagerly.

Here’s an example from the [Rails Active Record guide](http://guides.rubyonrails.org/active_record_querying.html#eager-loading-associations) on using eager loading. As you can see, the concept is quite similar to [Laravel’s eager loading](https://laravel.com/docs/5.4/eloquent-relationships#eager-loading) concept.

```text
# Rails
posts = Post.includes(:author).limit(100)
 
# Laravel
$posts = Post::with('author')->limit(100)->get();
```

I find that I receive a better understanding by exploring ideas from a wider perspective. The Active Record documentation covers some examples that can further help the idea resonate.

## Laravel’s Eloquent ORM

Laravel’s ORM, called , makes it trivial to eager load models, and even eagerly loading nested relationships. Let’s build on the Post model example and learn how to work with eager loading in a Laravel project.

We will work with the project setup and then go through some eager loading examples more in-depth to wrap up.

#### Setup

Let’s set up some , models, and [database seeding](https://laravel-news.com/seeding-data-testing) to experiment with eager loading. If you want to follow along, I am assuming you have access to a database and can go through a basic [Laravel installation](https://laravel.com/docs/5.4/installation#installation).

Using the Laravel installer, let’s create the project:

```text
laravel new blog-example
```

Edit your `.env` values to match your database or choice.

Next, we will create three models so you can experiment with eager loading nested relationships. The example is simple so we can focus on eager loading, and I’ve omitted things you might use like indexes and foreign key constraints.

```text
php artisan make:model -m Post
php artisan make:model -m Author
php artisan make:model -m Profile
```

The `-m` flag creates a migration to go along with the model that you will use to create the table schema.

The data models will have the following associations:

```text
Post -> belongsTo -> Author
Author -> hasMany -> Post
Author -> hasOne -> Profile
```

#### Migrations

Let’s create a simple schema for each table; I’ve only provided the `up()` method because Laravel will generate the `down()` automatically for new tables. The migration files are in the `database/migrations/` folder:

```text
<?php
 
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
 
class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('author_id');
            $table->string('title');
            $table->text('body');
            $table->timestamps();
        });
    }
 
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
```
```text
<?php
 
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
 
class CreateAuthorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('authors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('bio');
            $table->timestamps();
        });
    }
 
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('authors');
    }
}
```
```text
<?php
 
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
 
class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('author_id');
            $table->date('birthday');
            $table->string('city');
            $table->string('state');
            $table->string('website');
            $table->timestamps();
        });
    }
 
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
```

#### Models

You need to define model associations to experiment more with eager loading. When you ran the `php artisan make:model` command, it created model files for you.

The first model is `app/Post.php`:

```text
<?php
 
namespace App;
 
use Illuminate\Database\Eloquent\Model;
 
class Post extends Model
{
    public function author()
    {
        return $this->belongsTo(Author::class);
    }
}
```

Next, the `app\Author.php` has two associations:

```text
<?php
 
namespace App;
 
use Illuminate\Database\Eloquent\Model;
 
class Author extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
 
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
```

With the models and migrations in place, you can run the migrations and then move on to experimenting with eager loading with some seeded model data.

```text
php artisan migrate
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table
Migrating: 2017_08_04_042509_create_posts_table
Migrated:  2017_08_04_042509_create_posts_table
Migrating: 2017_08_04_042516_create_authors_table
Migrated:  2017_08_04_042516_create_authors_table
Migrating: 2017_08_04_044554_create_profiles_table
Migrated:  2017_08_04_044554_create_profiles_table
```

If you check the database, you should see all the created tables!

#### Model Factories

To create some fake data that we can run queries against, let’s add a few model factories that we can use to seed the database with test data.

Open the `database/factories/ModelFactory.php` file and append the following three factories to the file below the existing `User` factory:

```text
/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Post::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->sentence,
        'author_id' => function () {
            return factory(App\Author::class)->create()->id;
        },
        'body' => $faker->paragraphs(rand(3,10), true),
    ];
});
 
/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Author::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'bio' => $faker->paragraph,
    ];
});
 
$factory->define(App\Profile::class, function (Faker\Generator $faker) {
    return [
        'birthday' => $faker->dateTimeBetween('-100 years', '-18 years'),
        'author_id' => function () {
            return factory(App\Author::class)->create()->id;
        },
        'city' => $faker->city,
        'state' => $faker->state,
        'website' => $faker->domainName,
    ];
});
```

These factories will make it easy to populate a bunch of posts that we can query; we can use them to create associated model data with database seeding.

Open the `database/seeds/DatabaseSeeder.php` file and add the following to the `DatabaseSeeder::run()` method:

```text
public function run()
{
    $authors = factory(App\Author::class, 5)->create();
    $authors->each(function ($author) {
        $author
            ->profile()
            ->save(factory(App\Profile::class)->make());
        $author
            ->posts()
            ->saveMany(
                factory(App\Post::class, rand(20,30))->make()
            );
    });
}
```

You create five authors and then loop through each author and save an associated profile and many posts (between 20 and 30 posts per author).

We are done creating migrations, models, model factories, and database seeds. We can combine it all and re-run our migrations and database seeding in a repeatable way:

```text
php artisan migrate:refresh
php artisan db:seed
```

You should now have some seeded data that you can play around with, in the next section. Note that Laravel 5.5 includes a [migrate:fresh](https://laravel-news.com/migrate-fresh) command which drops the tables instead of rolling back migrations and then re-applying them.

## Experimenting with Eager Loading

We are finally ready to see eager loading in action. In my opinion, the best way to visualize eager loading is logging queries to the `storage/logs/laravel.log` file.

To log database queries, you can either enable the MySQL log or listen for database calls from Eloquent. To log queries through Eloquent, add the following code to the `app/Providers/AppServiceProvider.php` **boot()** method:

```text
namespace App\Providers;
 
use DB;
use Log;
use Illuminate\Support\ServiceProvider;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        DB::listen(function($query) {
            Log::info(
                $query->sql,
                $query->bindings,
                $query->time
            );
        });
    }
 
    // ...
}
```

I like to wrap this listener around a configuration check so that I can toggle query logging on and off. You can also get this information from the [Laravel Debugbar](https://laravel-news.com/laravel-debugbar).

Let’s see what happens when we don’t load model relations eagerly. Clear out your `storage/log/laravel.log` file and run the “tinker” command.

```text
php artisan tinker
 
>>> $posts = App\Post::all();
>>> $posts->map(function ($post) {
...     return $post->author;
... });
>>> ...
```

If you check your `laravel.log` file, you should see a bunch of queries to get the associated author:

```text
[2017-08-04 06:21:58] local.INFO: select * from \`posts\`
[2017-08-04 06:22:06] local.INFO: select * from \`authors\` where \`authors\`.\`id\` = ? limit 1 [1]
[2017-08-04 06:22:06] local.INFO: select * from \`authors\` where \`authors\`.\`id\` = ? limit 1 [1]
[2017-08-04 06:22:06] local.INFO: select * from \`authors\` where \`authors\`.\`id\` = ? limit 1 [1]
....
```

Empty your `laravel.log` file again, and this time call `with()` to eager load the author records:

```text
php artisan tinker
 
>>> $posts = App\Post::with('author')->get();
>>> $posts->map(function ($post) {
...     return $post->author;
... });
...
```

This time you should only see two queries in the log file. The first query for all the posts, and the second query for all the associated authors.

```text
[2017-08-04 07:18:02] local.INFO: select * from \`posts\`
[2017-08-04 07:18:02] local.INFO: select * from \`authors\` where \`authors\`.\`id\` in (?, ?, ?, ?, ?) [1,2,3,4,5]
```

If you had multiple related associations, you can eager load them with an array:

## Nested Eager Loading in Eloquent

Nested eager loading works the same way. In our example, the Author model has one profile. Thus, a query will be executed for each profile.

Empty out the `laravel.log` file and let’s try it out:

```text
php artisan tinker
 
>>> $posts = App\Post::with('author')->get();
>>> $posts->map(function ($post) {
...     return $post->author->profile;
... });
...
```

You will now have seven queries. The first two are eagerly loaded, and then each time we get a new profile a query is required to get the profile data for each author.

With eager loading we can avoid the extra queries in nested relationships. Clear your `laravel.log` file one last time and run the following:

```text
>>> $posts = App\Post::with('author.profile')->get();
>>> $posts->map(function ($post) {
...     return $post->author->profile;
... });
```

Now, you should only have 3 queries total:

```text
[2017-08-04 07:27:27] local.INFO: select * from \`posts\`
[2017-08-04 07:27:27] local.INFO: select * from \`authors\` where \`authors\`.\`id\` in (?, ?, ?, ?, ?) [1,2,3,4,5]
[2017-08-04 07:27:27] local.INFO: select * from \`profiles\` where \`profiles\`.\`author_id\` in (?, ?, ?, ?, ?) [1,2,3,4,5]
```

## Lazy Eager Loading

You might only need to gather associated models based on a **conditional**. 
In this case, you can lazily invoke additional queries for related data:

```php
$posts = App\Post::all();
...
if ($some_condition) {
	$posts->load('author.profile');
	$posts->first()->author->profile;
}
```

You should see three queries total, but only if `$posts->load()` is called.