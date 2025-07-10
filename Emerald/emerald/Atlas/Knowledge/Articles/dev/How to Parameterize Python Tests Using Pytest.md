---
author:
  - "[[Smith Wilbanks]]"
created: 2025-07-09
published: 2021-07-11
source: https://towardsdatascience.com/how-to-parameterize-python-tests-using-pytest-e8800bf288c5/
about:
  - "[[pytest]]"
used_in:
  - "[[Transac Zones update ticket]]"
tags:
  - howto/python/pytest
  - article/dev
value: 7
quality: 6
interest: 6
---
## Introduction

An inherent challenge of software development is maintaining control over your codebase as it grows in functionality and scope. The more complex a piece of software grows, the greater the threat of that complexity spiraling out of control.

An automated testing suite can help developers get a handle on that complexity. As a codebase grows, evolves, and matures, so does the testing suite, but how do you ensure that your tests themselves are also manageable?

Fortunately for python developers, pytest offers mechanisms to reuse testing functions and objects created as part of a test routine, which helps keep all your testing logic organized and maintainable.

---

## A Motivating Example

I’m working on a class that implements a single-variable polynomial, which is a mathematical expression for a sum of terms, where each term is a constant multiplied by the variable raised to a non-negative power.

For example,

**4x³ – 2x**

is a polynomial expression. This polynomial can be modelled as a list where each element is a term, and each term is itself a list with the coefficient and exponent. The above polynomial could be modelled in the following way:

**\[\[4, 3\], \[-2, 1\]\]**

With my Polynomial class, I can create the corresponding polynomial object in the following way:

```
poly = Polynomial([[4, 3], [-2, 1]])
```

As I grow the functionality of my Polynomial class, I need to test it. One characteristic of a polynomial is that the exponents are non-negative integers, so I will write a test that checks the exponents for that condition. The derivative of a polynomial is also a polynomial, so I should check those exponents as well. In addition, the string representation of my polynomial must have a leading minus sign if the coefficient with the largest exponent is negative, so that needs to be checked.

Now for poly above, I have 3 tests:

1. Are all exponents non-negative integers?
2. Are all exponents of the derivative non-negative integers?
3. Does the string representation have a leading minus sign if the coefficient of the term with the highest exponent is negative?

Here’s a very direct way to write these tests:

This lets me test the functionality of the polynomial object with those specific terms, but if I want to test a polynomial with different terms, then I have to write a new test.

This might work for a very small number of objects and edge cases, but it will quickly becoming overwhelming as more objects need to be tested and more test cases need to be checked for each object.
___
## How to Use Pytest Fixtures

Fixtures are functions that return objects that can be accessed by multiple tests. You declare a fixture with the @pytest.fixture() decorator above the fixture function. Then you put the fixture function name as an argument in the definition of the test function, which can now use the fixture without explicitly instantiating the object it returns. Using a fixture, I can refactor my tests as follows:

Now any testing function that I want to add can access the same polynomial and the tests themselves have only the logic necessary for their tests. As it should be!

Unfortunately, I don’t think the single polynomial I defined is sufficient to really test my string representation. It doesn’t even need a leading minus sign. I could add another fixture, but then I would have to add tests for each fixture:

## How to Parametrize a Pytest Fixture

The @pytest.fixture decorator allows you pass your fixture a list of parameters. For each test that requests that fixture, the test is run once for each parameterized version of the fixture. For example:

Now I can simply add additional lists of polynomial terms to TERMS\_LIST, and each test that requests the poly fixture will run once with a Polynomial object for each set of terms in TERMS\_LIST.

If a test fails, pytest will let you know which parameters lead to the failed test:

![](https://towardsdatascience.com/wp-content/uploads/2021/07/1574fzcxQ7tKQ8aznYYQOsg.png)

The "test\_str\_leading\_minus\[poly0\]" above refers to the poly fixture with parameters at the 0 index in the TERMS\_LIST.

---

## Another Motivating Example

As I wrote above, polynomials must have non-negative exponents. As I implement the interface for my Polynomial class, I decide that I want to raise an exception if a Polynomial tries to be created with invalid exponents. I could try to create a parameterized fixture with a list of invalid terms,

but this will not work! The fixture will try to create a new Polynomial object, and if want the interface to raise an exception, then any test that references that fixture will not complete. The test will fail because of the exception, but failing is the expected result, so the test should pass. So what should I do?

## How to Parameterize a Testing Function Using Pytest

The `@pytest.mark.parametrize()` decorator lets you parameterize arguments of the testing function independent of fixtures you created. Now I can pass a list of invalid arguments and use pytest.raises(AssertionError) to assert that the invalid terms result in the expected exception.

Now the test will only pass if the invalid terms lead to an assertion error during the initialization of the object. Also, if there are other lists of terms that I want to define to be invalid, I can simply add them to the INVALID\_TERMS\_LIST without the need to write another test.
___

## summary
`note: personal`

- the decorator allows to `parameterize` **any test**
- it is possible to use the **same data** on multiple tests
	- you can **combine** data sources
- `@: useful`you can generate the data **dynamically**