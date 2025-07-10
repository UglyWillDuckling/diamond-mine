---
author:
created: 2025-07-08
source: https://www.mypy-lang.org/
part of:
  - "[[python programming language]]"
value: 5
tags:
  - python/tool
  - tool/static-checker
---
Why mypy?

**Compile-time type checking**

Static typing makes it easier to find bugs with less debugging.

**Easier maintenance**

Type declarations act as machine-checked documentation. Static typing makes your code easier to understand and easier to modify without introducing bugs.

**Grow your programs from dynamic to static** typing

You can develop programs with dynamic typing and add static typing after your code has matured, or migrate existing Python code to static typing.

## mypy

Mypy is an optional static type checker for Python that aims to combine the benefits of dynamic (or "duck") typing and static typing. Mypy combines the expressive power and convenience of Python with a powerful type system and compile-time type checking. Mypy type checks standard Python programs; run them using any Python VM with basically no runtime overhead.

## What's new

**Mypy 1.15 released**

**5 Feb 2025**: Mypy 1.15 was released. Read the [blog post](https://mypy-lang.blogspot.com/2025/02/mypy-115-released.html) for the details. -Wesley Collin Wright

**Mypy 1.14 released**

**20 Dec 2024**: Mypy 1.14 was released. Read the [blog post](https://mypy-lang.blogspot.com/2024/12/mypy-114-released.html) for the details. -Valentin Stanciu

**Mypy 1.13 released**

**22 Oct 2024**: Mypy 1.13 was released. Read the [blog post](https://mypy-lang.blogspot.com/2024/10/mypy-113-released.html) for the details. -Shantanu and Jukka Lehtosalo

**Mypy 1.12 released**

**14 Oct 2024**: Mypy 1.12 was released. Read the [blog post](https://mypy-lang.blogspot.com/2024/10/mypy-112-released.html) for the details. -Jukka Lehtosalo

[Older news](https://www.mypy-lang.org/news.html)

## Seamless dynamic and static typing

From Python...

```
def fib(n):
    a, b = 0, 1
    while a < n:
        yield a
        a, b = b, a+b
```

```
def fib(n: int) -> Iterator[int]:
    a, b = 0, 1
    while a < n:
        yield a
        a, b = b, a+b
```

Migrate existing code to static typing, a function at a time. You can freely mix static and dynamic typing within a program, within a module or within an expression. No need to give up dynamic typing — use static typing when it makes sense. Often just adding function signatures gives you statically typed code. Mypy can infer the types of other variables.

## Python syntax

Mypy type checks programs that have type annotations conforming to [PEP 484](https://www.python.org/dev/peps/pep-0484/). Getting started is easy if you know Python. The aim is to support almost all Python language constructs in mypy.

## Powerful type system

Mypy has a powerful, modern type system with features such as bidirectional type inference, generics, callable types, abstract base classes, multiple inheritance and tuple types.

## Access to Python libs

Many commonly used libraries have stubs (statically typed interface definitions) that allow mypy to check that your code uses the libraries correctly.