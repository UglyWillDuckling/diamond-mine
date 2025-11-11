---
author:
  - "[[Nuno Maduro]]"
created: 2025-10-31
source: https://pestphp.com/docs/filtering-tests
tags:
  - howto/php/tests
part of:
  - "[[pest]]"
---
When you run `./vendor/bin/pest`, Pest executes the complete test suite by default. As you might expect, running individual tests is accomplished by passing the test name as the first argument.

```bash
./vendor/bin/pest tests/Unit/TestExample.php
```

This chapter will cover even more ways to filter which tests are executed by Pest. For the complete CLI API Reference, please refer to our [CLI API Reference](https://pestphp.com/docs/cli-api-reference).

### \--bail

The `--bail` option instructs Pest to stop executing your test suite upon encountering the first failure or error.

```bash
./vendor/bin/pest --bail
```

### \--dirty

The `--dirty` option instructs Pest to only run tests that have uncommitted changes according to Git. This is often useful when you're developing a set of tests for a new feature and don't want to run the entire test suite each time Pest is invoked.

```bash
./vendor/bin/pest --dirty
```

> Note that, due to a limitation in Pest, test cases written using the PHPUnit syntax will always be considered dirty.

### \--filter

Using the `--filter` option, it is possible to run tests that match a specified regular expression pattern. The `--filter` option allows you to filter tests based on any information that would typically appear in the test's output description, such as the filename, test description, dataset parameters, and more.

```bash
./vendor/bin/pest --filter "test description"
```

### \--group

You can utilize the `--group` option to selectively run tests belonging to a particular group. To learn about assigning tests or folders to groups, please refer to the [Grouping Tests](https://pestphp.com/docs/grouping-tests) documentation.

```bash
./vendor/bin/pest --group=integration
```

In cases where multiple test groups need to be included, you need to use the `--group` option per group.

```bash
./vendor/bin/pest --group=integration --group=browser
```

### \--exclude-group

The `--exclude-group` option may be used to exclude specific test groups from being executed.

```bash
./vendor/bin/pest --exclude-group=integration
```

In cases where multiple test groups need to be excluded, you need to use the `--exclude-group` option per group.

```bash
./vendor/bin/pest --exclude-group=integration --exclude-group=browser
```

### \--retry

If a test previously failed, you typically want to sort the failed tests by arranging the test suite to run them first. In such cases, you can use the `--retry` option.

The `--retry` flag reorders your test suites by prioritizing the previously failed tests. If there were no past failures, the suite runs as usual. But if there were previous failures, those tests are run first.

> Note: Keep in mind that if your `phpunit.xml` file has two test suites (usually Unit and Feature), this option will sort each suite by running the failed tests first. This means that sometimes, you may see the entire Unit test suite run before Pest runs the Feature test suite, where previously failed tests take priority.

```bash
./vendor/bin/pest --retry
```

### only()

If you want to run a specific test in your test suite, you can use the `only()` method.

```bash
test('sum', function () {
  $result = sum(1, 2);
 
  expect($result)->toBe(3);
})->only();
```

---

As your codebase grows, manually running your tests with filtering can become tedious. That's where skipping tests comes in. Skipping tests is a useful feature that allows developers to exclude specific tests from the test suite temporarily without deleting them entirely: [Skipping Tests →](https://pestphp.com/docs/skipping-tests)