---
source: https://ryangjchandler.co.uk/posts/4-things-id-like-to-see-in-a-future-version-of-php
published: 2022-12-07
created: 2025-08-23
value: 8
interest: 7.5
quality: 8
tags:
  - post/php
author:
  -  Ryan Chandler
---

Newer versions of PHP have introduced some excellent language features that bring it closer to other modern programming languages. We now have enums, match expressions, union and intersection types and much more.

Despite all of that, there are definitely still things that I'd personally like to see added to PHP. In this blog post, I'd like to cover a few of those things and provide some idealistic code snippets of what those features might look like.

## 1\. Type aliases

A type alias is a way of giving a new name to an existing type, or set of types. They can sometimes improve readability in your code through more definitive naming and reduce duplication.

They can be found in languages such as TypeScript and Rust. Below is an example of what I imagine type aliases to look in PHP, in the context of a Filament trait where we tend to have lots of union types.

```php
type LabelValue = string | null | Closure;

trait HasLabel

{

    protected LabelValue $label;

    public function label(LabelValue $label): string

    {

        $this->label = $label;

        return $this;

    }

    public function getLabel(): string

    {

        return $this->evaluate($this->label);

    }

}
```

The type alias above is what you would call "transparent". This means that at runtime, the type `LabelValue` is treated exactly the same as `string | null | Closure`.

The transparency of the type means that you could alias `string` to something like `Name` and still be able to pass is to another function that expects a `string`.

The opposite to a transparent type alias is an opaque one. An example of a language with opaque type aliases is Hack. The major difference between a transparent and opaque type is how the underlying value is treated by the type system.

```php
type Counter = int;
```

The `Counter` type above is essentially a regular `int`. If the language treated this as an opaque type, you wouldn't be allowed to do any normal integer operations on the value since the type assigned to the value would be `Counter`, not `int`. No addition, subtraction, etc allowed.

With the introduction of union, intersection and DNF types (PHP 8.2), type aliases could be a huge step forward when it comes to code deduplication and clarity.

## 2\. Multi-line match arms

The `match` expression was introduce in PHP 8.0 and is a nicer way of conditionally doing something or computing a value based on a subject or result of an expression.

[(I have a whole blog post about match expressions if you want to read it)](https://ryangjchandler.co.uk/posts/all-about-match-expressions)

Most people compare match expressions to switch statements. In a lot of cases they have the same result, with the added benefit of being more performant and concise.

The one drawback of match expressions is that you're limited to just a single expression in the "result" side of an arm.

```php
$name = "Ryan";

match ($name) {
    "Ryan" => "Hey, I know you!",
};
```

The right-hand side of that double arrow can only be a single expression. You can't put a block of code and return a value, perhaps with further condition checks.

In an ideal world, you'd be able to do something like this:

```php
match ($foo) {

    "bar" => {

        if ($baz) {

            // Do something here.

        }

        // Do something else and return a value.

    }

}
```

The original RFC for match expressions did briefly mention blocks of code on the right-hand side, but the semantics are difficult to get right.

Rust has implicit returns where you omit the semi-colon at the end of a statement, but PHP doesn't have that kind of behaviour anywhere else in the language.

You could allow using `return` to return a value from the block, but that's kind of confusing since `return` is explicitly for functions.

My own personal suggestion would be using `yield`. This keyword is already used to return a value from a block of code (generator functions) back to the caller / iterator, such that you're not actually returning and exiting from the function itself.

It would make perfect sense to use the same keyword in this scenario, since you are in fact yielding a value out of the block without returning from the lexical scope where the match expression is being used. The intent is clear, especially compared to implicit returns (sorry, Rust).

```php
$message = match ($name) {

    "Ryan" => {

        if (logged_in()) {

            yield "Welcome back, Ryan";

        }

        yield "Hey Ryan, you need to log in again!";

    }

};

echo $message;
```

If this syntax and functionality eventually made it into the language, there's no reason you couldn't take it a step further and allow "yielding blocks" elsewhere like variables assignments.

```php
$message = {

    if ($foo) {

        yield $bar;

    }

    yield $baz;

};
```

*I'm interested in what people actually think about this syntax. I'd be very open to submitting an RFC and prototyping an implementation. Let me know on [Twitter](https://twitter.com/ryangjchandler).*

## 3\. Generics

![[~/×/ce670eb4a8ba2de1168e7ff23253cbe3_MD5.gif]]

I know, I know. People have been banging on about generics in PHP for years. There has been an [RFC](https://wiki.php.net/rfc/generics), plenty of discussion and research on [GitHub](https://github.com/PHPGenerics/php-generics-rfc/issues) and even OSS [attempts at bringing it to the language with tooling](https://github.com/mrsuh/php-generics). I'm sure you can cope with me banging on about it for a few more minutes.

PHP's type system has come a long way since the release of PHP 7.0. We can type function parameters, class properties, return types, the lot. We don't have a need for doc comments in these cases anymore, if anything they just add noise.

```php
/**

 * @template T

 */

final class Collection

{

    /**

     * @var array<T>

     */

    private array $values = [];

    /**

     * @param T $value

     */

    public function push(mixed $value): self

    {

        $this->values[] = $value;

        return $this;

    }

    /**

     * @return array<T>

     */

    public function all(): array

    {

        return $this->values;

    }

}
```

It's all visual noise. Sure, it gives you static type-safety when you use PHPStan, but it could all be more concise. Compare it to this:

```php
final class Collection<T>

{

    protected array<T> $values = [];

    public function push(T $value): self

    {

        $this->values[] = $value;

    }

    public function all(): array<T>

    {

        return $this->values;

    }

}
```

That's 50% less lines of code, just in one file. Let's take a look at how you'd instantiate one of these generic classes with both syntaxes.

With the doc comment syntax, instantiation looks like a normal `new` expression.

```php
$users = new Collection();
```

If you wanted to specify the type of the collection at this point, you'd need yet another comment above the variable.

```php
/**

 * @var Collection<User>

 */

$users = new Collection();
```

Compare that to the "native" looking syntax:

```php
$users = new Collection<User>();
```

Let's go one level deeper again. What if you had this collection and wanted to pass it to a method somewhere?

```php
class CollectionFriend

{

    /**

     * @param Collection<User> $collection

     */

    public function doSomethingWithUserCollection(Collection $collection)

    {

        //

    }

}
```

And another doc comment. The "native" syntax?

```php
class CollectionFriend

{

    public function doSomethingWithUserCollection(Collection<User> $collection)

    {

        //

    }

}
```

It's clearer and cleaner.

Moving away from the syntax side of things, let's talk about the implementation strategy.

There are a few ways that generics can be implemented in programming languages - **monomorphization**, **reification** and **type erasure**.

### Monomorphization

This is an automated process that takes your generic usage of a class and creates an additional dedicated class, specifically typed against the generic parameters at compile / runtime.

In the case of our `Collection<User>`, anytime you reference that specific type of collection, PHP will replace it will an identical class called `Collection_User` for example. Everywhere you use `T` (in methods, properties, etc), it will get replaced with `User`. This is the approach that Rust takes with generics and for a compiled language it's not a huge deal because your program is already being compiled, so there's less overhead on real runtime performance.

### Reificiation

This process is closer to how PHP's type system currently operates. If you had a function that accepted a `string`, PHP will evaluate the type of the argument at runtime and throw a type error if it's wrong.

Reified generics would do the exact same thing. PHP would keep track of the type of value inside of our `Collection` and if we tried to push something that wasn't a `User`, it would throw a type error.

There's still some performance and memory overhead here because PHP is going to keep track of more things at runtime and need to do deeper type checking.

### Type erasure

Python recently got support for static typing through the `typing` module and it uses type erasure to remove all of those types at runtime and only check them at compile time / with static analyzers.

In reality, this is going to be only option that has near-zero impact on runtime performance since PHP won't ever check the generic types when you interact with them. It'll forget about them and perhaps just check that the object is of the correct type, the same way it does now.

The natural follow-up question to this approach is "Why bother putting the types there if they're not going to be checked by PHP anyway?"

Excellent question! Here's my answer...

If you're already in a scenario where you're using doc comments to create generic classes, then I can almost guarantee that you're also using a static analyzer outside of PHP (PHPStan, Psalm, Phan, etc).

Type erased generics will behave the exact same way as your existing doc comments, with the exception that it's naturally all part of the language's syntax instead.

## 4\. Pattern matching on value types

I'm sure you've written quite a few `is_array()`, `is_string()` or `$var instanceof SomeClass` checks before. My biggest gripe with these checks is the inconsistency between checking non-object types such as strings and integers and object types.

```php
if ($var is int|array) {

    //

}
```

This would be equivalent to the below.

```php
if (is_int($var) || is_array($var)) {

    

}
```

You'd essentially have this sort of syntax:

```python
<subject> is <type>
```

Where the type string is any valid type you can add to a parameter, property or return type.

## Summary

And that's my short list of a few things I'd like to see added to PHP in the future.

Out of the 4 things above, the least likely is probably generics. The most likely additions are pattern matching on values types ([RFC](https://wiki.php.net/rfc/pattern-matching)) and multi-line match arms.

If you weren't already aware, I'm currently working on a [PHP parser written in Rust](https://github.com/php-rust-tools/parser). One of my goals with this parser is to fully support the PHP language but also add extensions behind feature flags to support things such as generics, type aliases, etc.

I've started a [GitHub organisation](https://github.com/orgs/php-rust-tools/repositories) which will be the home for all of these endeavours, so follow along if you're interested.