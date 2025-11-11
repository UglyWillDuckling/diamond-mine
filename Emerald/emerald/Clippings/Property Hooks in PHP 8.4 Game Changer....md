---
created: 2025-08-15
author:
  - "[[David Grudl]]"
  - "[[since 2004]]"
source: https://phpfashion.com/en/property-hooks-in-php-8-4
topics:
  - "[[Asymmetric Visibility]]"
  - "[[PHP 8.4 Property Hooks]]"
about:
  - "[[PHP 8.4 Property Hooks]]"
  - "[[php]]"
  - "[[php8]]"
value: 8.4
interest: 8
quality: 9
related:
tags:
  - article/php/8
---
- [/] #task read [[Property Hooks in PHP 8.4 Game Changer...]]
___

What if I told you your PHP objects could be cleaner, more elegant, and easier to work with? Well, that dream is now a reality! PHP 8.4 introduces revolutionary features called **property hooks** and **asymmetric visibility** that completely transform object-oriented programming as we know it. Say goodbye to clunky getters and setters – we now have a modern, intuitive way to control object data access. Let's explore how these features can revolutionize your code.

Property hooks provide a smart way to define what happens when you read from or write to object properties – and they're much cleaner and more efficient than the traditional magic methods `__get/__set`. Think of it as getting all the power of magic methods without any of their usual drawbacks.

Let's look at a real-world example that shows why property hooks are so valuable. Consider a common `Person` class with a public `age` property:

```php
class Person
{
    public int $age = 0;
}

$person = new Person;
$person->age = 25;  // OK
$person->age = -5;  // OK, but that makes no sense!
```

While PHP ensures the age will be an integer thanks to the `int` type (available since PHP 7.4), what about that negative age? In the past, we'd need getters and setters, make the property private, and write a bunch of boilerplate code. With hooks, there's a much more elegant solution:

```php
class Person
{
    public int $age = 0 {
        set => $value >= 0 ? $value : throw new InvalidArgumentException;
    }
}

$person->age = -5;  // Oops! InvalidArgumentException warns us about the invalid value
```

The beauty lies in its simplicity – from the outside, the property behaves exactly like before. You can read and write directly through `$person->age`, but now you have complete control over what happens during the write operation. And that's just scratching the surface!

We can take it further and create hooks for reading too. Hooks can have attributes, and they can contain complex logic beyond simple expressions. Check out this example of working with names:

```php
class Person
{
    public string $first;
    public string $last;
    public string $fullName {
        get {
            return "$this->first $this->last";
        }
        set(string $value) {
            [$this->first, $this->last] = explode(' ', $value, 2);
        }
    }
}

$person = new Person;
$person->fullName = 'James Bond';
echo $person->first;  // outputs 'James'
echo $person->last;   // outputs 'Bond'
```

Here's something crucial to understand: hooks are always used whenever a property is accessed (even within the Person class itself). The only exception is when you directly access the actual variable inside the hook code.

## A Blast from the Past: Lessons from SmartObject

For those familiar with Nette Framework, here's an interesting historical perspective. The framework offered similar functionality **17 years ago** through [SmartObject](https://doc.nette.org/en/utils/smartobject), which significantly enhanced object handling at a time when PHP was quite limited in this area.

I remember the initial wave of overwhelming enthusiasm where developers used properties everywhere, followed by a complete reversal where they avoided them entirely. Why? There weren't clear guidelines about when to use methods versus properties. But today's native solution is in a different league altogether. Property hooks and asymmetric visibility are fully-fledged tools that provide the same level of control as methods. This makes it much easier to determine when a property is truly the right choice.

## Backed or Virtual? The Key Question!

Take a look at this code and try to answer quickly – it's a little quiz:

- Can we write to `$age`?
- What about `$adult` – can we both read and write to it?

```php
class Person
{
    public int $age = 0 {
        set => $value >= 0 ? $value : throw new InvalidArgumentException;
    }

    public bool $adult {
        get => $this->age >= 18;
    }
}
```

As we discussed earlier, `$age` is both readable and writable. But surprise – `$adult` is read-only!

This brings us to the first tricky aspect of property hooks design. **The property signature doesn't tell us whether we can read from or write to it!**

The answer lies hidden in the hook implementation code. Properties come in two flavors: backed (with actual memory storage) and virtual (which only simulate a property's existence). What determines if a property is backed or virtual? It's whether we reference it in the hook code.

A property is backed (has its own storage) when:

- we reference it in the hook body using `$this->propertyName`
- or it has a shortened `set`, which implicitly means writing to `$this->propertyName`

Looking at our example:

- Property `$age` is **backed** because it uses the shortened `set` (which implicitly writes to `$this->age`)
- Property `$adult` is **virtual** because none of its hooks uses `$this->adult`

While this is a clever solution, it's not ideal. Such crucial information about whether a property is readable or writable should be immediately visible in the API and signature, not buried in the implementation details.

## References: Playing it Safe

References have been a part of PHP since its early days. Using the `&` symbol, you can link two variables so they point to the same memory location. It's like having two remote controls for one TV – press either one, and you're controlling the same screen.

But what if someone could get a reference to a property with a `set` hook? They could modify its value directly, completely bypassing all validation. Here's what that might look like:

```php
class Person
{
    public int $age = 0 {
        set => $value >= 0 ? $value : throw new InvalidArgumentException;
    }
}

$person = new Person;
$ref = &$person->age;    // Fatal error: This isn't allowed!
$ref = -5;               // If it worked, it would make our validation useless
```

PHP (or more specifically, Ilija Tovilo and Larry Garfield, the hook feature's authors) thought this through and came up with an elegant solution. It's simply impossible to get a reference to such a property (specifically, to a backed variable with a `set` hook). This makes perfect sense – property hooks ensure that only valid values can be stored, and references would provide a backdoor around this protection.

## Arrays Meet Property Hooks – An Interesting Challenge!

Working with arrays in PHP is usually straightforward and intuitive. We can add elements to an array property in several ways:

```php
class Person
{
    public array $phones = [];
}

$person = new Person;
$person->phones[] = '777 123 456';          // adds number to the end of array
$person->phones['bob'] = '777 123 456';     // adds number with specific key
```

Here's where we run into an interesting challenge with property hooks. Say we want to create a Person class that contains a list of phone numbers, and we want to automatically trim whitespace from the beginning and end of each number:

```php
class Person
{
    public array $phones = [] {
        set => array_map('trim', $value);
    }
}

$person = new Person;
$person->phones[] = '777 123 456';  // Surprise! Error: Indirect modification of Person::$phones is not allowed
```

So why doesn't this work? The operation `$person->phones[]` in PHP actually happens in two steps:

1. First, it gets a reference to the array through `get`
2. Then it adds the new **value** to that array

This means the `set` hook never gets called. ==What's more, as we learned earlier, we can't get a reference to a backed variable with a `set` hook (that first step).== 
That's why we get the error message.

Even creating a method like `addPhone()` that calls `$this->phones[] = $phone` won't help – remember, all property access (even within the class) goes through hooks.

So what's the solution? Let's explore our options. Here's the first approach that might come to mind:

```php
$phones = $person->phones;    // read the array
$phones[] = ' 777 123 456 ';  // add a number
$person->phones = $phones;    // save it back
```

Sure, it works, but… imagine having an array with thousands of numbers. Our `set` hook would need to run `trim()` on every single number again, even though we only added one. Not exactly efficient, right?

There's a better way – we need to realize that if an array needs special handling of its elements (like trimming whitespace), that should be **its responsibility**, not the job of the class that just happens to hold it. While we can't teach new tricks to a basic array, we can “wrap” it in an object that implements ArrayAccess:

```php
class Phones implements ArrayAccess
{
    private array $data = [];

    public function __construct(array $data = [])
    {
        $this->data = array_map('trim', $data);
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        $value = trim($value);
        if ($offset === null) {
            $this->data[] = $value;
        } else {
            $this->data[$offset] = $value;
        }
    }

    // implementation of other ArrayAccess methods...
}

class Person
{
    function __construct(
        public Phones $phones = new Phones,
    ) {}
}

$person = new Person;
$person->phones[] = ' 777 123 456 ';  // Perfect! The number is stored with whitespace trimmed
```

And here's the cherry on top – we can use a hook to allow writing a regular array to `$person->phones`:

```php
class Person
{
    function __construct(
        public Phones $phones = new Phones {
            set(array|Phones $value) => is_array($value) ? new Phones($value) : $value;
        },
    ) {}
}

$person = new Person;
$person->phones = ['  888 999 000  ', '777 888 999'];  // Automatically converts to Phones and trims strings
```

As you can see, hooks work with promoted properties too.

Let's look at another approach. Remember that besides backed properties, we also have virtual properties – those that don't use `$this->propertyName` in their hook body. This gives us another solution:

```php
class Person
{
    private array $_phones = []; // actual storage for phone numbers

    public array $phones {  // virtual property for public access
        get => $this->_phones;
        set {
            $this->_phones = array_map('trim', $value);
        }
    }

    public function addPhone(string $phone): void
    {
        $this->_phones[] = trim($phone);
    }
}

$person = new Person;
$person->addPhone(' 777 123 456 ');  // Adds trimmed number
echo $person->phones[0];             // Shows "777 123 456"
$person->phones = ['  888 999 000  ']; // Sets new array with trimmed numbers
```

In this approach, we stick with a regular array but hide it behind a private variable. To the outside world, we offer a virtual property for reading the entire array and completely replacing it, plus a dedicated method for adding individual numbers.

## Hooks and Inheritance: Passing the Torch

Children classes can not only add hooks to properties that didn't have them before but also redefine existing ones. Here's an example:

```php
class Person
{
    public string $email;

    public int $age {
        set => $value >= 0
            ? $value
            : throw new InvalidArgumentException('Age cannot be negative');
    }
}

class Employee extends Person
{
    // Adds hook to property that previously had none
    public string $email {
        set => strtolower($value);  // Always convert emails to lowercase
    }

    // Extends existing age validation
    public int $age {
        set {
            if ($value <= 130) {  // First check the original condition
                throw new InvalidArgumentException('130 years? Not buying it!');
            }
            parent::$age::set($value);
        }
    }
}
```

Notice that interesting syntax `parent::$age::set($value)`. While it might look unusual at first, it makes perfect sense – we first reference the property in the parent class, then its hook. It's like saying “hey, call the set hook on my parent's age property”.

And there's more – we can mark hooks as `final` if we want to prevent children from overriding them. We can even mark the entire property as `final` – then children can't modify it in any way (neither add hooks nor extend its visibility).

```php
class Person
{
    // No one can override this hook
    public int $age {
        final set => $value >= 0 ? $value : throw new InvalidArgumentException;
    }

    // And no one can modify this property at all
    final public string $id;
}
```

## Properties in Interfaces: A Game Changer
`note: interesting`

==One of the most exciting new features is support for properties in interfaces and abstract classes.== 

Imagine you're creating an interface for entities that contain a name string. Previously, we had to write something like this:

```php
interface Named
{
    public function getName(): string;
    public function setName(string $name): void;
}
```

Pretty tedious, right? With property hooks, we can be much more elegant! We can now declare properties directly in the interface, and even do it **asymmetrically** – specifying separately what should be

```php
interface Named
{
    // We're declaring: "Any implementing class must provide a publicly readable name property"
    public string $name { get; }
}
```

Now here's the interesting part – how do we implement such an interface? **We have several elegant options:**

```php
class Person implements Named
{
    public string $name;     // Simplest approach - a regular property
}

class Employee implements Named
{
    public string $name {    // More sophisticated - composite name
        get => $this->firstName . ' ' . $this->lastName;
    }
    private string $firstName;
    private string $lastName;
}
```

Notice something interesting – ==while the `Named` interface only requires a read-only property, the `Person` class provides one that's both readable and writable.==
This is perfectly fine – ==interfaces define minimum requirements.== It's like ordering a car that “must drive forward” and getting one that can also reverse – it exceeds the minimum requirements in a useful way.

A technical note for the detail-oriented: In interfaces, we must use the `public` keyword with properties, even though it's redundant since everything in an interface is inherently public. While using `public` with methods would be redundant, it's required for properties to maintain syntax consistency.

Here's another interesting detail – did you notice that unusual `{ get; set; }` syntax? While in a class we can simply write `public string $name`, interfaces require us to explicitly state which operations the property supports. Though it requires more typing, this makes sense – with interfaces, we want to be crystal clear about our requirements.

## Properties in Abstract Classes: Getting the Best of Both Worlds

Abstract classes combine the best features of interfaces with their own special capabilities. They can not only declare properties but also provide default implementations for some hooks:

```php
abstract class Person
{
    // Pure abstract property - child must implement
    abstract public string $name { get; }

    // Protected property supporting both operations
    abstract protected int $age { get; set; }

    // Here we provide ready-made email validation
    abstract public string $email {
        get; // this hook is abstract and must be implemented by child
        set => Nette\Utils\Validators::isEmail($value)
            ? $value
            : throw new InvalidArgumentException('This doesn\'t look like a valid email...');
    }
}
```

## [[Covariance]] and [[Contravariance]]
`note: interesting`

These terms might sound **intimidating**, but the concept is actually quite straightforward. Let's look at an example:

```php
class Animal {}

class Dog extends Animal {}

interface PetShop
{
    // Read-only property can return a more specific type
    public Animal $pet { get; }
}

class DogShop implements PetShop
{
    // Returns a dog instead of an animal - perfectly valid!
    public Dog $pet { get; }
}
```

%%think: a specific implementation MAY narrow the interface by being more specific about what it returns(what is makes) %%

==When a property has only a `get` hook, it can return a more specific type in the child class== (this is called [[covariance]]).[^2]  
Think of it this way: “I promised you an `animal`, and a `dog` is definitely an `animal`, right?” (narrowing of the interface)

==On the flip side, a property with only a `set` hook can accept a more general type in the child ([[contravariance]]).== [^1] 
This makes sense – if you can handle a `specific` type, you can handle its `parent` type too.

%%note: a setter will expand the interface, allowing for more flexiblity in the input %%

==However, when a property has both `get` and `set` hooks, the type must stay the same.== 
Why? **Because it could lead to inconsistencies** – we can't promise to return a dog when someone might try to set a cat through the setter!

## [[Asymmetric Visibility]]: Fine-Tuned Access Control [^3] 
`note:interesting`

Imagine you're building a Person class where you want everyone to be able to read the date of birth, but only the class itself should be able to change it. 
In the past, this meant getters and setters, but now we have an elegant solution:

```php
class Person
{
    public private(set) DateTimeImmutable $dateOfBirth;
}
```

This elegant syntax says: “Anyone can read it, but only the class itself can write to it.” The first modifier `public` controls read access, while `private(set)` controls write access. 

Since public reading is the default, we can make it even simpler:
```php
class Person
{
    private(set) DateTimeImmutable $dateOfBirth;
}
```

==Naturally, there's a logical rule – write visibility can't be broader than read visibility.== 
You can't use something like `protected public(set)` – that would be like saying “only descendants can read it, but anyone can write to it.” Doesn't make much sense, right?

==What about inheritance? In PHP, a child class can either keep the same visibility or expand it from protected to public.== The same principle applies to asymmetric visibility:

```php
class Person
{
    public protected(set) string $name;  // Anyone can read, only descendants can write
}

class Employee extends Person
{
    public public(set) string $name;     // Child expands writing rights
}
```

An interesting case is `private(set)`. Such a property is automatically `final` – when we say only the class itself can write to it, that logically means not even child classes can change this behavior.

==Best of all, we can combine asymmetric visibility with hooks:==

```php
class Person
{
    private(set) DateTimeImmutable $birthDate {
        set => $value > new DateTimeImmutable
            ? throw new InvalidArgumentException('Birth in the future? Nice sci-fi!')
            : $value;
    }
}
```

This property has it all: it's publicly readable, only the class itself can write to it, and it validates that the date isn't in the future. 
==Hooks handle “what should happen,” while asymmetric visibility controls “who can do it.” A perfect combination!==

## Asymmetric Visibility and Arrays: A Smart Solution to an Old Problem

Remember our phone number challenge? Asymmetric visibility offers us another elegant solution:

```php
class Person
{
    private(set) array $phones = [];

    public function addPhone(string $phone): void
    {
        $this->phones[] = trim($phone);
    }
}

$person = new Person;
var_dump($person->phones);     // OK: we can read the array
$person->addPhone('...');      // OK: we can add a number
$person->phones = [];          // ERROR: we can't overwrite the entire array
```

The array is publicly readable, but no one from outside can overwrite it. We provide a specialized method for adding new numbers. No complex array-simulating objects, no virtual properties – just clean, clear access control.

It's worth noting that you can't get a reference from outside to a property with restricted write access:

```php
$ref = &$person->phones;    // Fatal error: Not allowed!
```

References are only allowed from scopes where the property is writable. This makes sense – a reference could bypass our write restrictions.

To summarize, we now have four solid approaches for working with arrays in properties:

1. **Smart object** simulating an array (offers more features but requires more code)
2. **Backed property with hook** (prevents direct array modification)
3. **Virtual property** with private storage (requires methods for modifications)
4. **Asymmetric visibility** (moves logic to methods)

Which approach should you choose? As with many things in programming – it depends on your specific needs. Try them out and see which API feels most natural for your use case.

## Readonly and Asymmetric Visibility: Freedom at Last!

[The `readonly` modifier](https://phpfashion.com/en/php-readonly-properties) actually combines two features: it prevents multiple writes and restricts writing to private scope. It's not really “readonly” – it's more like “writeonce” combined with `private(set)`.

The second part always felt unnecessarily restrictive. Why shouldn't a readonly property be writable in child classes?

PHP 8.4 finally addresses this. Now `readonly` makes properties `protected(set)` by default, meaning they're writable in child classes too. And if we need different visibility? We can simply specify it:

```php
class Person
{
    // Readonly accessible only inside the class (old behavior)
    public private(set) readonly string $name;

    // Readonly accessible in children (new default behavior)
    public readonly string $dateOfBirth;

    // Readonly writable anywhere (but only once!)
    public public(set) readonly string $id;

    public function rename(string $newName): void
    {
        $this->name = $newName;    // Inside class we can modify it
    }
}

class Employee extends Person
{
    public function setBirthDate(DateTimeImmutable $date): void
    {
        $this->dateOfBirth = $date;  // In child class we can modify it
    }
}

$person = new Person;
$person->id = 'abc123';     // This works
$person->id = 'xyz789';     // But this FAILS - it's readonly!
```

This gives us exactly the flexibility we need while maintaining safety.

## When Terminology Clashes…

Let's examine an interesting inconsistency in PHP's terminology:

- We consistently talk about reading and writing properties
- We have the `readonly` modifier
- In phpDoc, we find `@property-read` and `@property-write` annotations
- Yet, in hooks and asymmetric visibility, we suddenly switch to `get/set`

Wouldn't using `read` and `write` terms make more logical sense?

For hooks, the use of `get/set` is somewhat understandable – they represent actions and align with the `__get/__set` magic methods. But for asymmetric visibility? That's an entirely different concept – it's not about “what should happen” like hooks, but rather “who has permission to do it”. This is why using the term `write`, as in `private(write)`, would make much more sense:

```php
class Person
{
    private(set) string $name;     // current syntax
    private(write) string $name;   // more intuitive syntax
}
```

The second version would feel more natural. Moreover, it would better align with the existing `readonly` modifier.

It appears that in PHP's pursuit of syntactic consistency between hooks and asymmetric visibility, they inadvertently sacrificed semantic consistency with the language's existing concepts.

## A New Era in PHP: The Object Design Revolution

For years, the PHP world adhered to a single “correct” approach to object-oriented design: make all properties private and access them exclusively through getters and setters. This wasn't just developers being fussy – public properties came with genuine problems:

- They were completely exposed with no access control
- As part of the public API, any modification (like adding validation) would break backward compatibility
- In interfaces, they could only exist as comments

Anyone wanting to write robust code using interfaces and [dependency injection](https://doc.nette.org/en/dependency-injection/introduction) had no choice but to fall back on getters and setters. It was the only path to maintaining full control over object behavior.

But PHP 8.4 ushers in a new era! Property hooks and asymmetric visibility finally give us the same level of control over properties that we've always had with methods. Properties now become first-class citizens in the public API because:

- We can introduce validation or value transformation whenever needed
- We have fine-grained control over access permissions
- We can properly declare them in interfaces

You can think of property hooks as an elegant, boilerplate-free replacement for getters and setters. Or perhaps more accurately – getters and setters were just a stopgap until PHP evolved to something better.

Speaking from extensive experience with Nette, where similar functionality has existed for 17 years, I can attest to how game-changing this approach is. Once you try it, there's no going back. Consider this comparison:

```php
// Traditional approach
$this->getUser()->getIdentity()->getName()

// Modern approach
$this->user->identity->name
```

The second version isn't just more concise and readable – it feels more natural. It's like the difference between formally asking “Would you be so kind as to provide me with your name?” versus simply asking “What's your name?”

Sure, some might argue that direct property access could tempt developers to violate object-oriented principles, suggesting we should tell objects what to do rather than ask for data (Tell-Don't-Ask). That's valid – but primarily for objects with rich behavior implementing business logic. For data transfer objects, value objects, or configuration classes, direct data access makes perfect sense.

This does present an interesting challenge: what about existing projects? If your library or framework consistently uses getters and setters, suddenly introducing properties might create inconsistency. Users would need to guess whether to use a method or a property in each case.

Over time, new conventions will emerge. Some projects may stick with getters and setters, while others will embrace properties. The key is that we now have options.

## Naming Matters

How should we name our properties? With boolean values especially, it's not as straightforward as you might think.

With methods, we commonly use prefixes like `is` or `has`:

But for properties, these prefixes feel awkward and redundant. A better approach is to use adjectives or nouns:

For quantities, plural forms work better:

```php
class Article {
    public int $views;          // better than $viewCount
    public array $tags;         // clearly indicates a collection
}
```

The goal is to make your code read like natural language. When we write `if ($article->published)`, it flows much more naturally than `if ($article->isPublished)`. Properties should feel like attributes, not methods missing their parentheses.

## When to Choose Properties vs Methods?

This is a crucial question! We can learn from languages like C# and Kotlin, which have years of experience with properties. Properties excel for:

Value objects and DTOs:

```php
class Money {
    public readonly float $amount;
    public readonly string $currency;
}
```

Simple entities:

```php
class Article {
    public string $title;
    public string $content;
    public DateTimeImmutable $publishedAt;
    public bool $published {
        get => $this->publishedAt <= new DateTimeImmutable;
    }
}
```

Computed values that depend on other properties:

```php
class Rectangle {
    public float $width;
    public float $height;
    public float $area {
        get => $this->width * $this->height;
    }
}
```

Methods are better suited for:

- operations that work with multiple properties together
- operations with side effects (logging, notifications)
- actions that perform tasks (save, send, calculate…)
- complex validations or business logic
- operations that might fail for various reasons
- cases where you want a

All these guidelines point to one fundamental principle: property access shouldn't hide complex processes or side effects. The complexity of the operation should match what we intuitively expect when reading or writing to a variable.

Though… consider `innerHTML` in JavaScript. When you write `element.innerHTML = '<p>Hello</p>'`, it triggers a complex chain of events – HTML parsing, DOM tree creation, page reflow… Yet everyone finds this natural!

So perhaps what matters more than implementation complexity is whether the operation \_conceptually\_ feels like a property. It's similar to a car's start/stop button – it might trigger a complex sequence internally, but to the driver, it's simply “on/off”.

---

[^1]: [[Contravariance]]
[^2]: [[Covariance]]
[^3]: [[asymetric visibility in PHP]]