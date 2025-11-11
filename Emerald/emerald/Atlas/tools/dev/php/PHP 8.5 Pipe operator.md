---
author:
  - "[[Ayesh Karunaratne]]"
created: 2025-07-25
published:
source: https://php.watch/versions/8.5/pipe-operator
tags:
  - php/feature
  - php8/feature
---
PHP 8.5 adds a new operator, the pipe operator (`|>`) to chain multiple callables from left to right, taking the return value of the left callable and passing it to the right.

The pipe operator does not add new capabilities to the language. Still it can help "chain" multiple callables in a more visible way, instead of nesting multiple callables or using a variable to hold the return values and pass them.

---

```php
$result = "Hello World"
    |> strtoupper(...)
    |> str_shuffle(...)
    |> trim(...);

// "LWHO LDLROE"
```

---

The snippet above uses the new pipe operator (`|>`) to indicate that the return value of the previous callable should be passed to the callable on the right side. The `(...)` part next to the function name makes it a [first-class callable](https://php.watch/versions/8.1/first-class-callable-syntax).

---

The following two snippets show how the same result is achieved without the pipe operator:

**Using nested calls**

```php
$result = trim(str_shuffle(strtoupper("Hello World")));
```

**Using a variable**

```php
$result = "Hello World";
$result = strtoupper($result);
$result = str_shuffle($result);
$result = trim($result);
```

> **Copy on write**
> 
> When using variables to hold the return values of another function call, PHP uses copy-on-write, which means that even though a new variable is created, it may not consume additional system memory until that variable is written. While pipes offer an overall cleaner code layout, using a temporary variable may not necessarily consume more resources.

---

Although it can reduce the clarity of the code, the pipe operator does *not* need to be in a new line. The following example is completely valid syntax:

```php
$result = strtoupper("Hello World") |> str_shuffle(...) |> trim(...);
```

---

## Pipe Operator Usage

Pipe operator passes the return value of the left function to the right function. When a PHP script is compiled, the pipe call call chains are optimized and result in similar [opcodes](https://php.watch/articles/php-dump-opcodes) to typical nested calls.

However, the pipe operator comes with some limitations. They are suitable when all of the functions in the chain require only one parameter, have return values, and do not accept by-reference parameters.

### Pipe operator accepts any callable

The callables in a pipe operator-chained can be any callable. For example, it is possible to mix user-land functions, built-in functions, static class methods, lambda functions, arrow-functions, classes that implement `__invoke` magic method, and first-class callables.

```php
$result = "Hello World"
    |> 'strtoupper'
    |> str_shuffle(...)
    |> fn($x) => trim($x)
    |> function(string $x): string {return strtolower($x);}
    |> new MyClass()
    |> [MyClass::class, 'myStaticMethod']
    |> new MyClass()->myInstanceMethod(...)
    |> my_function(...);

echo $result;

function my_function(string $x): string {
    return substr($x, 0, 10);
}

class MyClass {
    public function __invoke(string $x): string {
        return str_rot13($x);
    }

    public function myInstanceMethod(string $x): string {
        return hash('sha256', $x);
    }

    public static function myStaticmethod(string $x): string {
        return str_replace('E', 'O', $x);
    }
}
```

Further, it is possible for the callable to be an expression that returns a callable:

```php
$result = "Hello World"
    |> 'strtoupper'
    |> get_callable();

echo $result; // 787ec76dcafd20c1908eb0936a12f91edd105ab5cd7ecc2b1ae2032648345dff

function get_callable(): callable {
    return fn($x) => hash('sha256', $x);
}
```

### Only accepts callables that require only the first parameter

A major limitation of the pipe operator is that all the `callable` s in the chain *must* accept only one required parameter.

For built-in functions, if the function does not accept any parameters, it cannot be used in a chain. For user-land PHP functions, passing a parameter to a function that does not accept any parameters does not cause an error, and it is silently ignored.

With the pipe operator, the **return value** of the previous expression or the callable is **always passed as the first parameter** to the next `callable`. It is **not possible to change the position of the parameter**.

### Type coercion

The pipe operator does not change how PHP's type coercion is performed when passing a value to the next callable.

When `strict_mode` is enabled, it strictly requires the types to match.

### Callables with void return types

PHP functions/callables with `void` return types can be used in a chain, but the return value is coerced to `null`. A `void` function is typically used as the last `callable` of the chain, and not in the middle because the rest of the chain will only get `null` from that point forward.

### Functions with by-reference parameters

Because the intermediate values of a pipe are not stored in a typical variable, using functions that expect a parameter to be passed by reference is not allowed.

However, there is an exception to this rule: built-in PHP functions can declare functions with `@prefer-ref` parameters. Passing a direct value to these functions does not cause an error.

As of PHP 8.5, there are only two such functions in PHP core. The [`FFI`](https://php.watch/codex/FFI) class from the FFI extension contains a few methods that also support this, but they are unlikely to be used with the pipe operator.

```php
explode("-", 'a-b-c') |> array_multisort(...);
// true
```
```php
['foo' => 'hello', 'bar' => 2] |> extract(...);
echo $foo; // hello
```

The snippets above use [`array_multisort`](https://php.watch/codex/array_multisort) and [`extract`](https://php.watch/codex/extract), the only two functions in PHP core to use `@prefer-ref` references.

## Operator precedence

The callables are always called left-to-right, unless their order is otherwise modified with `()` parentheses.

```php
echo 10 + 6 |> dechex(...) |> hexdec(...);
// 16
```

In the snippet above, `10 + 6` is evaluated first, and then the values are passed down the chain.

Similar to other operators in PHP, using `()` parentheses allow setting the order explicitly:

```php
echo 10 + (6 |> dechex(...)) |> hexdec(...);
// 22
```

---

When using null coalesce and ternary operators, they are evaluated left to right too:

```php
echo 10 ?? 6 |> dechex(...) |> hexdec(...);
// 10

echo null ?? 6 |> dechex(...) |> hexdec(...);
// 6
```
```php
echo true ? 5 : 6 |> dechex(...) |> hexdec(...);
// 5
```

When the pipe operator is used as the left side expression of a ternary or null coalescing operator, the pipe is executed first:

```php
echo 10 + 6 |> dechex(...) |> hexdec(...) === 16
 ? 'is sixteen'
 : 'not sixteen';
 // is sixteen
```

---

Equal operators (`==` and `===`) have a lower precedence, and thus work as commonly expected:

```php
10 + 6 |> dechex(...) |> hexdec(...) === 16
// true

16 = 10 + 6 |> dechex(...) |> hexdec(...) 
// true
```

## Backward Compatibility Impact

The pipe operator is a new syntax, and is not backward compatible with PHP 8.4 or older versions.

Attempting to run PHP code that uses the pipe operator will result in a Parse error in older PHP versions:

---

[RFC](https://php.watch/rfcs/pipe-operator-v3) [Discussion](https://externals.io/message/126318) [Implementation](https://github.com/php/php-src/pull/17118/files)