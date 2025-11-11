---
author:
  - "[[Gunashree RS]]"
created: 2025-09-03
published: 2024-10-24
source: https://www.devzery.com/post/mockery-test-guide-to-php-mock-object-framework
tags:
  - article/dev/mockery
---
In the world of PHP development, testing is a crucial part of the process. Unit testing ensures that the smallest units of your code work as expected. To make unit testing efficient, tools like **Mockery** provide the ability to simulate dependencies and test interactions in isolation. Mockery is a powerful, flexible PHP mock object framework, designed to work with [**PHPUnit**](https://phpunit.de/index.html), [**PHPSpec**](https://phpspec.net/), or other testing frameworks.

This guide will explore everything you need to know about [**Mockery Test**](https://github.com/mockery/mockery), from setting up to creating mock objects and test doubles. We will also discuss the latest features, integration methods, and how Mockery can enhance your testing process.

## What is Mockery?

Mockery is a [**PHP mock object framework**](https://github.com/mockery/mockery) used for unit testing. It allows developers to create **test doubles** —objects that simulate the behavior of real objects in a controlled way. These test doubles are essential for isolating parts of the system under test, making sure you can test your code without relying on external systems or services.

With **Mockery Test**, developers can:

![Mockery](https://static.wixstatic.com/media/9c8b5f_0739966663bf4e63adc1dc858b2230e5~mv2.jpeg/v1/fill/w_971,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c8b5f_0739966663bf4e63adc1dc858b2230e5~mv2.jpeg)

### Core Features of Mockery Test

1. **Flexible Test Doubles**: Easily create mocks, spies, and stubs to simulate object behavior.
2. **Human-readable DSL (Domain Specific Language)**: Define object operations and interactions clearly.
3. **PHPUnit Integration**: Seamlessly integrate with PHPUnit for effective unit testing.
4. **No PHP Version Barrier**: Supports multiple PHP versions, from older PHP5 to the latest releases.

Mockery's ability to act as a [**test double framework**](https://community.sap.com/t5/application-development-blog-posts/abap-test-double-framework-an-introduction/ba-p/13305196) helps developers design class APIs and explore interactions without needing full implementations upfront. It serves as a drop-in replacement for [**PHPUnit's native mocking capabilities**](https://stackoverflow.com/questions/3221781/phpunit-mocking-the-function).

## Why Use Mockery for PHP Testing?

When testing in PHP, you often deal with dependencies like databases, APIs, or complex services. Testing these in isolation can be challenging. Mockery provides a solution by creating mock objects that simulate these dependencies. This enables you to test your code without needing access to the actual service or database.

### Benefits of Using Mockery

- **Isolate Code Units**: Test individual parts of your application without involving real dependencies.
- **Flexible API**: Mockery uses a [**DSL**](https://www.britannica.com/technology/DSL) that is intuitive and easy to use, making it simple to create and manage mock objects.
- **Clear Expectations**: Define expectations for method calls, ensuring the right methods are invoked during tests.
- **Integration with Popular Frameworks**: Mockery works seamlessly with **PHPUnit** and other testing frameworks like [**PHPSpec**](https://phpspec.net/).

## Installation of Mockery

Mockery is simple to install via **Composer**, a dependency manager for PHP. Running the following command installs Mockery as a development dependency in your project:

bash

```md
composer require --dev mockery/mockery
```

Once installed, Mockery is ready to integrate into your unit testing environment.

## PHPUnit Integration

Mockery offers **integration helpers** for PHPUnit. You can extend the Mockery\\Adapter\\Phpunit\\MockeryTestCase class, which simplifies Mockery's use in PHPUnit tests. This allows you to create, manage, and verify mock objects effortlessly.

If you're using a custom base class for your PHPUnit tests, Mockery also provides useful **traits** under the Mockery\\Adapter\\Phpunit namespace.

php

```md
use Mockery\Adapter\Phpunit\MockeryTestCase;

class BookTest extends MockeryTestCase {
    public function testBookSave() {
        $book = Mockery::mock(Book::class);
        $book->shouldReceive('save')->once();
    }
}
```

With this setup, Mockery is integrated directly into PHPUnit, allowing developers to leverage its mock object capabilities.

## Test Doubles in Mockery

Test doubles, often called **mocks**, are simulated objects used in unit testing. They replicate the behavior of real objects, allowing you to test parts of your code independently.

Mockery allows you to generate **test doubles** dynamically. These can simulate behavior, return specific values, or record interactions. You can create a mock object for any class or interface using the Mockery::mock() method.

For example, consider a **BookRepository** interface:

php

```md
interface BookRepository {
    function find($id): Book;
    function findAll(): array;
    function add(Book $book): void;
}

$mock = Mockery::mock(BookRepository::class);
```

The test double for BookRepository is now created, and you can define specific behaviors or expectations on it.

### Creating Mocks

Mocks are objects with expectations on how they should behave during the test. You can create and configure mocks using Mockery::mock() and define method behavior:

php

```md
$bookMock = Mockery::mock(BookRepository::class);
$bookMock->shouldReceive('find')->with(1)->andReturn(new Book());
```

This mock will return a new Book object when the find(1) method is called.

### Method Stubs

Method stubs return predefined values for methods without caring how many times those methods are called. For instance:

php

```md
$bookMock->allows()->find(123)->andReturns(new Book());
```

### Method Call Expectations

Mockery lets you set **expectations** on methods to ensure that they are called with the right arguments and the expected number of times.

php

```md
$bookMock->expects()->add(new Book())->once();
```

In this example, Mockery verifies that the add() method is called exactly once with a Book object. If the method is not called or called more than once, the test will fail.

### Handling Multiple Methods and Stubs

Mockery also simplifies handling multiple method stubs at once. Here's an example of setting up several stubs at once:

php

```md
$bookMock->allows([
    'find' => new Book(),
    'findAll' => [new Book(), new Book()],
]);
```

This concise syntax sets up return values for multiple methods in one go.

## Using Spies in Mockery

A **spy** in Mockery is similar to a mock but with less strict expectations. Spies allow you to monitor the behavior of your objects without needing to predefine every interaction. This makes them useful when you want to verify interactions **after the fact**.

php

```md
$bookSpy = Mockery::spy(BookRepository::class);
$bookSpy->add(new Book());
$bookSpy->shouldHaveReceived()->add(new Book());
```

In this example, the spy records the call to add() and verifies that it was received.

### Ignoring Missing Methods

Sometimes, you may not care about certain method calls on your test double. By default, Mockery mocks only the methods you've configured. To avoid dealing with unimportant method calls, you can tell Mockery to ignore them:

php

```md
$bookMock = Mockery::mock()->shouldIgnoreMissing();
```

This mock will ignore any method calls not explicitly defined, making it more flexible.

## Managing Test Lifecycles in Mockery

During the lifecycle of a test, you may need to perform cleanup operations to ensure no leftover state affects subsequent tests. Mockery provides the Mockery::close() method to check that all expectations were met and release resources.

A good practice is to call Mockery::close() in the **tearDown** method of your PHPUnit tests:

php

```md
public function tearDown(): void {
    Mockery::close();
}
```

This ensures that Mockery performs validation at the end of each test and resets its internal state.

## Conclusion

Mockery is an essential tool for any PHP developer who wants to write effective unit tests. Its ability to create flexible, readable, and easy-to-use mock objects streamlines the [testing process](https://www.devzery.com/post/guide-to-api-testing-in-software-testing-best-practices), especially when dealing with external dependencies. Whether you're testing isolated components, designing new APIs, or simulating complex interactions, [**Mockery Test**](https://github.com/mockery/mockery) provides the tools you need for success.

By integrating Mockery with PHPUnit or other testing frameworks, you can build more reliable and maintainable codebases. Whether you’re new to testing or a seasoned developer, Mockery’s user-friendly DSL, powerful mock creation, and flexible stubbing make it a go-to framework for [PHP testing](https://phpunit.de/index.html).

[**Improve your software testing flow with advanced API testing tools**](https://www.devzery.com/contact)[Talk to us today](https://www.devzery.com/contact)

## FAQs

### 1\. What is a Mockery test?

A Mockery test is a unit test in PHP that uses the Mockery framework to simulate object behavior. It allows you to test code in isolation by creating mock objects that mimic real-world dependencies.

### 2\. How do I install Mockery?

You can install Mockery using Composer with the following command:

bash

```md
composer require --dev mockery/mockery
```

### 3\. What is a test double?

A test double is a simulated object that stands in for a real object during testing. It can be a mock, spy, or stub, depending on its behavior and expectations.

### 4\. What’s the difference between mocks and stubs in Mockery?

Mocks allow you to set expectations on method calls, verifying if they are called with the right arguments. Stubs, on the other hand, return predefined values without enforcing expectations on how often the methods are called.

### 5\. How do spies work in Mockery?

Spies are test doubles that record method calls and allow you to verify them after the test is executed, unlike mocks, which require expectations to be set upfront.

### 6\. How do I clean up Mockery after a test?

You should call Mockery::close() in the tearDown() method of your test cases to release resources and check for missed expectations.

### 7\. Can Mockery be used with PHPUnit?

Yes, Mockery integrates seamlessly with PHPUnit. You can extend MockeryTestCase or use available traits to incorporate Mockery into your PHPUnit tests.

### 8\. What is the advantage of using Mockery over PHPUnit’s native mock objects?

Mockery provides a more flexible and readable syntax for creating mocks and stubs. It also offers features like spies and more advanced handling of method expectations, making it easier to write clear and concise tests.

## Key Takeaways

- Mockery is a flexible PHP framework for creating test doubles.
- It integrates easily with PHPUnit for seamless unit testing.
- Test doubles in Mockery include mocks, stubs, and spies.
- Mockery offers a powerful DSL to define expectations and behavior for test objects.
- It’s easy to install via Composer and works across various PHP versions.