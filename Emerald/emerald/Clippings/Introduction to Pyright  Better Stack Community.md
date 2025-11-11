---
author:
  - "[[Better Stack]]"
created: 2025-10-14
published: 2025-02-21
source: https://betterstack.com/community/guides/scaling-python/pyright-explained/
tags:
  - howto/python/pyright
about:
  - "[[pyright]]"
---
## Introduction to Pyright

Stanley Ulili

Updated on February 21, 2025

[Pyright](https://github.com/microsoft/pyright) is a powerful, fast, and feature-packed static type checker explicitly designed for Python. It helps to ensure code quality, catch errors early, and boost productivity through static type checking.

This guide will walk you through how to set up and use Pyright in your Python projects.

## Prerequisites

Before diving into Pyright, ensure you have the following prerequisites:

- A recent version of [Python](https://www.python.org/downloads/) installed on your machine. This tutorial assumes you are using Python 3.13 or higher.
- Familiarity with basic Python programming concepts, including type hints and annotations

## Step 1 — Setting up the project directory

In this section, you will create a new project directory, set up a virtual environment, and install Pyright within that environment.

First, create a new directory for your project and navigate into it:

Next, create and activate a virtual environment:

Pyright can be installed easily using `pip`, the standard package manager for Python.

To install Pyright, run the following command in your terminal or command prompt:

This will install Pyright as a Python package, making it available for static type checking in your projects.

After installation, verify that Pyright is correctly installed by running:

If the installation is successful, this command will display the installed version of Pyright:

Now that Pyright is installed let's continue configuring it for your project.

## Step 2 — Getting started with Pyright

Now that Pyright is installed, it's time to configure it for your project. In this step, you will create a configuration file to customize Pyright’s behavior and ensure it works optimally within your project.

Pyright uses a configuration file named `pyrightconfig.json` to define settings such as Python version, type-checking rules, and excluded directories.

Create the `pyrightconfig.json` in a text editor in your project root and add the following default configuration:

The `"include"` option directs Pyright to check files in `src`, while `"exclude"` prevents it from analyzing `venv`.

`"pythonVersion"` sets the Python version for type checking, and `"typeCheckingMode": "basic"` provides moderate checks, which can be set to `"strict"` for stricter enforcement.

To test Pyright, create a `main.py` Python script inside a `src` directory and add the following code:

Now, run Pyright to check for type errors in your project:

If everything is set up correctly, Pyright should display an error for the second `print(greet(42))` line, as it passes an integer instead of a string:

This confirms that Pyright is working correctly and catching type errors in your code. The error message clearly indicates that you're trying to pass a number (42) to a function that expects a string parameter.

This is precisely the kind of type of safety that Pyright provides, helping you catch potential bugs before they make it to production.

You can also run Pyright in watch mode to automatically check for errors as you make changes to your code:

Now that Pyright is configured and running, the next step is to explore how to use type hints effectively to improve your code quality and catch errors early.

## Step 3 — Understanding Pyright’s type checking

Now that Pyright is installed and configured, it’s important to understand how it performs type checking in your Python code.

Pyright uses static analysis to check types without running your Python program. It detects mismatches between declared types and actual usage, ensuring type correctness throughout your codebase.

For example, consider the following function:

When `pyright` runs on this file will catch the type mismatch:

Pyright correctly identifies that a string (`"5"`) cannot be used where an integer is expected, preventing a potential runtime error.

### Type checking modes: basic vs. strict

Pyright provides two levels of type checking: "basic" and "strict". You can configure these in your `pyrightconfig.json` file.

The basic mode is the default setting and provides moderate type checking. It allows:

- Untyped functions
- Implicit type inference
- Some relaxed type rules

For example, the following function won't trigger an error in basic mode:

Even though `name` lacks a type hint, Pyright assumes it could be any type.

However, the strict mode enforces stronger type-checking and requires all functions to have explicit type annotations. It will:

- Require type annotations for function parameters and return values
- Detect untyped variables
- Prevent implicit type conversions

To enable strict mode, update your `pyrightconfig.json` file:

Now, running Pyright on the following untyped function:

Will produce this error:

To fix this error, add explicit type hints:

Strict mode helps enforce best practices, making your code more robust and maintainable.

## Step 4 — Using advanced type hints with Pyright

Now that Pyright’s type checking is set up and working, the next step is to explore advanced type hints to improve type safety and make your code more maintainable.

Python’s `typing` module allows for precise annotations, enabling Pyright to enforce stricter type checking while keeping the code flexible.

In this step, you will learn to use `Optional` for handling `None` values safely and `Union` to allow multiple accepted types, ensuring flexibility while maintaining type safety.

Incorporating these hints, Pyright can help catch even more subtle bugs, ensuring your code remains robust.

### Handling None with Optional

By default, Pyright expects function parameters always to have a valid type. If a parameter or return value might be `None`, it must be explicitly declared as `Optional`.

Take a look at this:

Since `Optional[str]` allows both `str` and `None`, Pyright **won't report any errors**:

However, if `Optional` is removed and `None` is passed, Pyright will raise an error:

Using `Optional` ensures the function handles both `None` and `str` values correctly.

### Allowing multiple types with Union

Sometimes, a function needs to accept multiple types. Instead of relying on runtime checks, you can explicitly specify the accepted types using `Union`.

Here is an example:

Running Pyright will detect the invalid argument:

Using `Union[str, int]` ensures that only valid types are accepted.

## Step 5 — Leveraging Pyright’s type narrowing

Now that you’ve learned how to use advanced type hints such as `Optional` and `Union`, it's time to explore type narrowing, one of Pyright’s most powerful features.

Type narrowing allows Pyright to dynamically infer and validate types within your code, reducing the need for explicit type casting and enhancing overall safety.

It refines types using conditional checks, applies `isinstance()` for runtime validation, and detects guarded code paths to eliminate unnecessary checks.

Understanding type narrowing allows you to write cleaner, more reliable code while allowing Pyright to handle type inference intelligently.

### Refining types with conditional checks

Pyright automatically narrows a variable’s type based on conditional logic. Consider the following example:

No errors are reported when Pyright runs:

This is because Pyright detects that `isinstance(value, int)` ensures `value` must be an `int` inside that block. After the `if` statement, Pyright **automatically infers** that `value` must be a `str`.

Without type narrowing, you would need explicit type hints or `cast()`, making the code more verbose.

### Avoiding unnecessary comparisons

When Pyright knows that a variable can never be a certain type, it flags unnecessary checks.

Look at the following example:

Running Pyright detects the issue:

If `None` should be an allowed value, modify the function signature:

With this change, Pyright shows no errors:

### Type narrowing with assert statements

Pyright can also infer types using `assert` statements. This is useful for enforcing stricter conditions at runtime while keeping type safety.

Here is an example enforcing a non-None value:

Since the assertion ensures `name` is **never** `None`, Pyright allows the string operation without complaints.

### Using cast() for explicit type conversions

In cases where Pyright cannot automatically narrow types, you can use `cast()` from the `typing` module to provide hints.

Take the following example:

While `cast()` can **suppress type errors**, it does not perform any runtime checking, so use it cautiously.

Now that you’ve explored type narrowing, the next step explores type safety with `Final` and `Literal`.

## Step 6 — Enforcing type safety with Final and Literal

Now that you’ve explored type narrowing, it’s time to look at two powerful features in Pyright that help enforce stricter type safety: `Final` and `Literal`.

These features allow you to prevent unintended modifications and restrict values to predefined constants, reducing errors and improving code maintainability.

The `Final` type ensures that a variable, once assigned, cannot be reassigned later in the program. This is particularly useful for defining constants or protecting attributes in classes.

For example, consider a mathematical constant like `PI`. By marking it as `Final`, you ensure that its value remains unchanged throughout the program.:

Running Pyright will catch the reassignment of `PI` and raise an error, preventing accidental modifications.

The `Final` type can also be applied to class attributes. In a configuration class, marking an attribute as `Final` ensures that subclasses cannot override it:

Pyright will detect this modification attempt and prevent it. This is useful when designing configurations or constants that should remain unchanged across different parts of a project.

Another helpful feature in Pyright is `Literal`, which restricts a variable or function argument to a fixed set of values.

This is especially helpful for enforcing predefined options, such as theme modes in an application:

When Pyright runs on this file, it will flag `"blue"` as an invalid argument since it is not one of the predefined `Literal` values.

In cases where a function should accept a fixed set of values but also allow `None`, `Literal` can be combined with `Optional`. This ensures that the function receives a valid predefined option or no value:

Pyright will validate that only `"dark"`, `"light"`, or `None` are allowed, catching any unintended values:

With these tools, you can confidently use Pyright to enforce type safety and improve code reliability in your projects.

## Final thoughts

This guide covered setting up Pyright, configuring type checking modes, using advanced type hints, and enforcing immutability with `Final` and `Literal`.

To explore more features, visit the [official Pyright documentation](https://microsoft.github.io/pyright/#/) and apply Pyright to your projects today.

Got an article suggestion?[Let us know](https://betterstack.com/community/guides/scaling-python/pyright-explained/)

Next article

[

Introduction to Mypy

Learn how to use Mypy, Python’s powerful static type checker, to improve code quality, catch type errors early, and enforce type safety. This comprehensive guide covers installation, configuration, advanced type hints, type narrowing, generics, and type coverage reports. Start writing cleaner, more reliable Python code today

→

](https://betterstack.com/community/guides/scaling-python/mypy-explained/)