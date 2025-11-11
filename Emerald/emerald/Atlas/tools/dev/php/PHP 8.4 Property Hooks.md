---
author:
  - "[[Ashley Allen]]"
created: 2025-07-25
published: 2024-08-18
source: https://ashallendesign.co.uk/blog/php-84-property-hooks
tags:
  - article/php/8
---
![Read about the upcoming "property hooks" feature that will be added in PHP 8.4.](https://ashallendesign.ams3.cdn.digitaloceanspaces.com/public/blog/194/php-84-property-hooks.png)

- [x] #task read [[PHP 8.4 Property Hooks]], very cool ⏳ 2025-07-28 📅 2025-08-01 🆔 Q3xYIG ✅ 2025-10-06
___

Read about the upcoming "property hooks" feature that will be added in PHP 8.4.

In this article

- [Introduction](https://ashallendesign.co.uk/blog/#content-introduction)
- [What are PHP Property Hooks?](https://ashallendesign.co.uk/blog/#content-what-are-php-property-hooks)
- [The "get" Hook](https://ashallendesign.co.uk/blog/#content-the-get-hook)
	- [Type Compatibility](https://ashallendesign.co.uk/blog/#content-type-compatibility)
- [The "set" Hook](https://ashallendesign.co.uk/blog/#content-the-set-hook)
	- [Type Compatibility](https://ashallendesign.co.uk/blog/#content-type-compatibility-1)
- [Using "get" and "set" Hooks Together](https://ashallendesign.co.uk/blog/#content-using-get-and-set-hooks-together)
- [Using Property Hooks on Promoted Properties](https://ashallendesign.co.uk/blog/#content-using-property-hooks-on-promoted-properties)
- [Write-only Hooked Properties](https://ashallendesign.co.uk/blog/#content-write-only-hooked-properties)
- [Read-only Hooked Properties](https://ashallendesign.co.uk/blog/#content-read-only-hooked-properties)
- [Using the "readonly" keyword](https://ashallendesign.co.uk/blog/#content-using-the-readonly-keyword)
- [The "PROPERTY" Magic Constant](https://ashallendesign.co.uk/blog/#content-the-property-magic-constant)
- [Hooked Properties in Interfaces](https://ashallendesign.co.uk/blog/#content-hooked-properties-in-interfaces)
- [Hooked Properties in Abstract Classes](https://ashallendesign.co.uk/blog/#content-hooked-properties-in-abstract-classes)
- [Conclusion](https://ashallendesign.co.uk/blog/#content-conclusion)

## Introduction

PHP 8.4 will be released in November 2024 and will be bringing a cool new feature: property hooks.

In this article, we're going to take a look at what property hooks are and how you might use them in your PHP 8.4 projects.

As a side note, you might also be interested in checking out my other article which shows you the [new array functions which are being added in PHP 8.4](https://ashallendesign.co.uk/blog/php-84-array-functions).

## What are PHP Property Hooks?

Property hooks allow you to define custom getter and setter logic for class properties without having to write separate getter and setter methods. This means you can define the logic directly in the property declaration so you can directly access a property (like `$user->firstName`) without having to remember to call a method (like `$user->getFirstName()` and `$user->setFirstName()`).

You can check out the RFC for this feature at [https://wiki.php.net/rfc/property-hooks](https://wiki.php.net/rfc/property-hooks)

If you're a Laravel developer, as you're reading this article, you might notice that the hooks look very similar to accessors and mutators in Laravel models.

I quite like the look of the property hooks feature and I imagine it's something I'll be using in my projects when PHP 8.4 is released.

To understand how property hooks work, let's take a look at some example usage.

## The "get" Hook

You can define a `get` hook that will be called whenever you try to access a property.

For example, imagine you have a simple `User` class that accepts a `firstName` and `lastName` in the constructor. You might want to define a `fullName` property that concatenates the first and last names together. To do this, you could define a `get` hook for the `fullName` property:

```php
readonly class User
{
    public string $fullName {
        get {
            return $this->firstName.' '.$this->lastName;
        }
    }
 
    public function __construct(
        public readonly string $firstName,
        public readonly string $lastName
    ) {
        //
    }
}
 
$user = new User(firstName: 'ash', lastName: 'allen');
 
echo $user->firstName; // ash
echo $user->lastName; // allen
echo $user->fullName; // ash allen
```

In the example above, we can see that we've defined a `get` hook for the `fullName` property that returns a value which is calculated by concatenating the `firstName` and `lastName` properties together. We can clean this up a little bit more by using a syntax similar to [arrow functions](https://ashallendesign.co.uk/blog/a-beginner-s-guide-to-closures-and-arrow-functions-in-php) too:

```php
readonly class User
{
    public string $fullName {
        get =>  $this->firstName.' '.$this->lastName;
    }
 
    public function __construct(
        public readonly string $firstName,
        public readonly string $lastName,
    ) {
        //
    }
}
 
$user = new User(firstName: 'ash', lastName: 'allen');
 
echo $user->firstName; // ash
echo $user->lastName; // allen
echo $user->fullName; // ash allen
```

### Type Compatibility

It's important to note that the returned value from the getter has to be compatible with the type of the property.

If [strict types](https://ashallendesign.co.uk/blog/using-declare-strict_types-1-for-more-robust-php-code) aren't enabled, the value will be type-juggled to the property type. For example, if you return an integer from a property that is declared as a string, the integer will be converted to a string:

```php
class User
{
    public string $fullName {
        get {
            return 123;
        }
    }
 
    public function __construct(
        public readonly string $firstName,
        public readonly string $lastName,
    ) {
        //
    }
}
 
$user = new User(firstName: 'ash', lastName: 'allen');
 
echo $user->fullName; // "123"
```

In the above example, even though we've specified `123` as an integer to be returned, `"123"` is returned as a string because the property is a string.

We can add `declare(strict_types=1);` to the top of the code like so to enable strict type-checking:

```php
declare(strict_types=1);
 
class User
{
    public string $fullName {
        get {
            return 123;
        }
    }
 
    public function __construct(
        public readonly string $firstName,
        public readonly string $lastName,
    ) {
        //
    }
}
```

Now this would cause an error to be thrown because the return value is an integer, but the property is a string:

```text
Fatal error: Uncaught TypeError: User::$fullName::get(): Return value must be of type string, int returned
```

## The "set" Hook

PHP 8.4 property hooks also allow you to define a `set` hook. This is called whenever you try to set a property.

You can choose between two separate syntaxes for the `set` hook:

- Explicitly defining the value to set on the property
- Using an arrow function to return the value to set on the property

Let's look at both of these approaches. We'll imagine we want to uppercase the first letters of the first and last name when they're set on the `User` class:

```php
declare(strict_types=1);
 
class User
{
    public string $firstName {
        // Explicitly set the property value
        set(string $name) {
            $this->firstName = ucfirst($name);
        }
    }
 
    public string $lastName {
        // Use an arrow function and return the value
        // you want to set on the property
        set(string $name) => ucfirst($name);
    }
 
    public function __construct(
        string $firstName,
        string $lastName
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}
 
$user = new User(firstName: 'ash', lastName: 'allen');
 
echo $user->firstName; // Ash
echo $user->lastName; // Allen
```

As we can see in the example above, we've defined a `set` hook for the `firstName` property that uppercases the first letter of the name before setting it on the property. We've also defined a `set` hook for the `lastName` property that uses an arrow function to return the value to set on the property.

### Type Compatibility

If the property has a type declaration, then its `set` hook must have a compatible type set too. The following example will return an error because the `set` hook for `firstName` doesn't have a type declaration, but the property itself has a type declaration of `string`:

```php
class User
{
    public string $firstName {
        set($name) => ucfirst($name);
    }
 
    public string $lastName {
        set(string $name) => ucfirst($name);
    }
 
    public function __construct(
        string $firstName,
        string $lastName
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}
```

Attempting to run the above code would result in the following error being thrown:

```text
Fatal error: Type of parameter $name of hook User::$firstName::set must be compatible with property type
```

## Using "get" and "set" Hooks Together

You aren't limited to using the `get` and `set` hooks separately. You can use them together in the same property.

Let's take a simple example. We'll imagine we have a `fullName` property on our `User` class. When we set the property, we'll split the full name into the first and last name. I know this is a naive approach and there are much better solutions, but it's purely for the sake of example to highlight the hooked properties.

The code may look something like so:

```php
declare(strict_types=1);
 
class User
{
    public string $fullName {
        // Dynamically build up the full name from
        // the first and last name
        get => $this->firstName.' '.$this->lastName;
 
        // Split the full name into first and last name and
        // then set them on their respective properties
        set(string $name) {
            $splitName = explode(' ', $name);
            $this->firstName = $splitName[0];
            $this->lastName = $splitName[1];
        }
    }
 
    public string $firstName {
        set(string $name) => $this->firstName = ucfirst($name);
    }
 
    public string $lastName {
        set(string $name) => $this->lastName = ucfirst($name);
    }
 
    public function __construct(string $fullName) {
        $this->fullName = $fullName;
    }
}
 
$user = new User(fullName: 'ash allen');
 
echo $user->firstName; // Ash
echo $user->lastName; // Allen
echo $user->fullName; // Ash Allen
```

In the code above, we've defined a `fullName` property that has both a `get` and `set` hook. The `get` hook returns the full name by concatenating the first and last name together. The `set` hook splits the full name into the first and last name and sets them on their respective properties.

You may have also noticed that we're not setting a value on the `fullName` property itself. Instead, if we need to read the value of the `fullName` property, the `get` hook will be called to build up the full name from the first and last name properties. I've done this to highlight that you can have a property that doesn't have a value set directly on it, but instead, the value is calculated from other properties.

## Using Property Hooks on Promoted Properties

A cool feature of property hooks is that you can also use them with constructor promoted properties.

Let's check out an example of a class that isn't using promoted properties and then look at what it might look like using promoted properties.

Our `User` class might look like so:

```php
readonly class User
{
    public string $fullName {
        get => $this->firstName.' '.$this->lastName;
    }
 
    public string $firstName {
        set(string $name) => ucfirst($name);
    }
 
    public string $lastName {
        set(string $name) => ucfirst($name);
    }
 
    public function __construct(
        string $firstName,
        string $lastName,
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}
```

We could promote the `firstName` and `lastName` properties into the constructor and define their `set` logic directly on the property:

```php
readonly class User
{
    public string $fullName {
        get => $this->firstName.' '.$this->lastName;
    }
 
    public function __construct(
        public string $firstName {
            set (string $name) => ucfirst($name);
        },
        public string $lastName {
            set (string $name) => ucfirst($name);
        }
    ) {
        //
    }
}
```

## Write-only Hooked Properties

If you define a hooked property with a setter that doesn't actually set a value on the property, then the property will be write-only. This means you can't read the value of the property, you can only set it.

Let's take our `User` class from the previous example and modify the `fullName` property to be write-only by removing the `get` hook:

```php
declare(strict_types=1);
 
class User
{
    public string $fullName {
        // Define a setter that doesn't set a value
        // on the "fullName" property. This will
        // make it a write-only property.
        set(string $name) {
            $splitName = explode(' ', $name);
            $this->firstName = $splitName[0];
            $this->lastName = $splitName[1];
        }
    }
 
    public string $firstName {
        set(string $name) => $this->firstName = ucfirst($name);
    }
 
    public string $lastName {
        set(string $name) => $this->lastName = ucfirst($name);
    }
 
    public function __construct(
        string $fullName,
    ) {
        $this->fullName = $fullName;
    }
}
 
$user = new User('ash allen');
 
echo $user->fullName; // Will trigger an error!
```

If we were to run the code above, we'd see the following error being thrown when attempting to access the `fullName` property:

```text
Fatal error: Uncaught Error: Property User::$fullName is write-only
```

## Read-only Hooked Properties

Similarly, a property can be read-only.

For example, imagine we only ever want the `fullName` property to be generated from the `firstName` and `lastName` properties. We don't want to allow the `fullName` property to be set directly. We can achieve this by removing the `set` hook from the `fullName` property:

```php
class User
{
    public string $fullName {
        get {
            return $this->firstName.' '.$this->lastName;
        }
    }
 
    public function __construct(
        public readonly string $firstName,
        public readonly string $lastName,
    ) {
        $this->fullName = 'Invalid'; // Will trigger an error!
    }
}
```

If we were to try and run the code above, the following error would be thrown because we're trying to set the `fullName` property directly:

```text
Uncaught Error: Property User::$fullName is read-only
```

## Using the "readonly" keyword

You can still make our [PHP classes readonly](https://ashallendesign.co.uk/blog/readonly-classes-and-properties-in-php) even if they have hooked properties. For example, we may want to make the `User` class readonly:

```php
readonly class User
{
    public string $firstName {
        set(string $name) => ucfirst($name);
    }
 
    public string $lastName {
        set(string $name) => ucfirst($name);
    }
 
    public function __construct(
        string $firstName,
        string $lastName,
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}
```

However, a hooked property cannot use the `readonly` keyword directly. For example, this class would be invalid:

```php
class User
{
    public readonly string $fullName {
        get => $this->firstName.' '.$this->lastName;
    }
 
    public function __construct(
        string $firstName,
        string $lastName,
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}
```

The above code would throw the following error:

```text
Fatal error: Hooked properties cannot be readonly
```

## The "PROPERTY" Magic Constant

In PHP 8.4, a new [magic constant](https://ashallendesign.co.uk/blog/php-magic-constants) called `__PROPERTY__` has been introduced. This constant can be used to reference the property name within the property hook.

Let's take a look at an example:

```php
class User
{
    // ...
 
    public string $lastName {
        set(string $name) {
            echo __PROPERTY__; // lastName
            $this->{__PROPERTY__} = ucfirst($name); // Will trigger an error!
        }
    }
 
    public function __construct(
        string $firstName,
        string $lastName,
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}
```

In the code above, we can see that using `__PROPERTY__` inside the `lastName` property's setter will output the property name `lastName`. However, it's also worth noting that trying to use this constant in an attempt to set the property value will trigger an error:

```text
Fatal error: Uncaught Error: Must not write to virtual property User::$lastName
```

There's a handy use case example for the `__PROPERTY__` magic constant that you can check out on GitHub: [https://github.com/Crell/php-rfcs/blob/master/property-hooks/examples.md](https://github.com/Crell/php-rfcs/blob/master/property-hooks/examples.md).

## Hooked Properties in Interfaces

PHP 8.4 also allows you to define publicly accessible hooked properties in [interfaces](https://ashallendesign.co.uk/blog/using-interfaces-to-write-better-php-code). This can be useful if you want to enforce that a class implements certain properties with hooks.

Let's take a look at an example interface with hooked properties declared:

```php
interface Nameable
{
    // Expects a public gettable 'fullName' property
    public string $fullName { get; }
 
    // Expects a public gettable 'firstName' property
    public string $firstName { get; }
 
    // Expects a public settable 'lastName' property
    public string $lastName { set; }
}
```

In the interface above, we're defining that any classes implementing the `Nameable` interface must have:

- A `fullName` property that is at least publicly gettable. This can be achieved by defining a `get` hook or not defining a hook at all.
- A `firstName` property that is at least publicly gettable.
- A `lastName` property that is at least publicly settable. This can be achieved by defining a property which has a `set` hook or not defining a hook at all. But if the class is read-only then the property must have a `set` hook.

This class that implements the `Nameable` interface would be valid:

```php
class User implements Nameable
{
    public string $fullName {
        get => $this->firstName.' '.$this->lastName;
    }
 
    public string $firstName {
        set(string $name) => ucfirst($name);
    }
 
    public string $lastName;
 
    public function __construct(
        string $firstName,
        string $lastName,
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}
```

The class above would be valid because the `fullName` property has a `get` hook to match the interface definition. The `firstName` property only has a `set` hook, but is still publicly accessible so it satisfies the criteria. The `lastName` property doesn't have a `get` hook, but it is publicly settable so it satisfies the criteria.

Let's update our `User` class to enforce a `get` and `set` hook for the `fullName` property:

```php
interface Nameable
{
    public string $fullName { get; set; }
 
    public string $firstName { get; }
 
    public string $lastName { set; }
}
```

Our `User` class would no longer satisfy the criteria for the `fullName` property because it doesn't have a `set` hook defined. It would cause the following error to be thrown:

```text
Fatal error: Class User contains 1 abstract methods and must therefore be declared abstract or implement the remaining methods (Nameable::$fullName::set)
```

## Hooked Properties in Abstract Classes

Similar to interfaces, you can also define hooked properties in [abstract classes](https://ashallendesign.co.uk/blog/interfaces-vs-abstract-classes-in-php). This can be useful if you want to provide a base class that defines hooked properties that child classes must implement. You can also define the hooks in the abstract class and have them be overridden in the child classes.

For example, let's make a `Model` abstract class that defines a `name` property that must be implemented by child classes:

```php
abstract class Model
{
    abstract public string $fullName {
        get => $this->firstName.' '.$this->lastName;
        set;
    }
 
    abstract public string $firstName { get; }
 
    abstract public string $lastName { set; }
}
```

In the abstract class above, we're defining that any classes that extend the `Model` class must have:

- A `fullName` property that is at least publicly gettable and settable. This can be achieved by defining a `get` and `set` hook or not defining a hook at all. We've also defined the `get` hook for the `fullName` property in the abstract class so we don't need to define it in the child classes, but it can be overridden if needed.
- A `firstName` property that is at least publicly gettable. This can be achieved by defining a `get` hook or not defining a hook at all.
- A `lastName` property that is at least publicly settable. This can be achieved by defining a property which has a `set` hook or not defining a hook at all. But if the class is read-only then the property must have a `set` hook.

We could then create a `User` class that extends the `Model` class:

```php
class User extends Model
{
    public string $fullName;
 
    public string $firstName {
        set(string $name) => ucfirst($name);
    }
 
    public string $lastName;
 
    public function __construct(
        string $firstName,
        string $lastName,
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}
```

## Conclusion

Hopefully, this article should have given you an insight into how PHP 8.4 property hooks work and how you might be able to use them in your PHP projects.

I wouldn't worry too much if this feature seems a little confusing at first. When I first saw it, I was a little confused too (especially with how they work with interfaces and abstract classes). But once you start tinkering with them, you'll soon get the hang of it.

I'm excited to see how this feature will be used in the wild and I'm looking forward to using it in my projects when PHP 8.4 is released.

If you enjoyed reading this post, you might be interested in checking out my 220+ page ebook " [Battle Ready Laravel](https://battle-ready-laravel.com/) " which covers similar topics in more depth.

Or, you might want to check out my other 440+ page ebook " [Consuming APIs in Laravel](https://consuming-apis-in-laravel.com/) " which teaches you how to use Laravel to consume APIs from other services.

If you're interested in getting updated each time I publish a new post, feel free to sign up for my newsletter below.

Keep on building awesome stuff! 🚀

---

Blog post banner image by [Jess Pickup](https://jesspickup.co.uk/).