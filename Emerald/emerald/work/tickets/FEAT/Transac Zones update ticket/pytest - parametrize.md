---
about: "[[pytest]]"
tags:
  - howto/pytest
  - tool/pytest
---

In Pytest, you can use the `pytest.mark.parametrize` marker to run a test function multiple times with different parameters.

```python
import pytest

@pytest.mark.parametrize("input,expected", [
    ("hello", "hello"),
    ("world", "world"),
    ("", ""),
])
def test_my_function(input, expected):
    assert my_function(input) == expected
```

In this example, we're defining a test function `test_my_function` that takes two parameters: `input` and `expected`. We're using the `pytest.mark.parametrize` marker to specify a list of tuples, where each tuple contains the input and expected output for the test.

==Pytest will run the test function multiple times, once for each tuple in the list, passing in the corresponding input and expected output as arguments.==

This allows you to write a single test function that can be run with multiple different inputs and expected outputs, making it easier to test your code thoroughly.

You can also use the `pytest.mark.parametrize` marker to parameterize tests with more complex data structures, such as lists or dictionaries.

```python
@pytest.mark.parametrize("data", [
    [1, 2, 3],
    [4, 5, 6],
    [],
])
def test_my_function(data):
    assert my_function(data) == expected_output(data)
```

In this example, we're parameterizing the test function with a list of lists, where each list contains different input data. Pytest will run the test function multiple times, once for each list in the parameterized data.

Note that you can also use the `pytest.mark.parametrize` marker to parameterize tests with fixtures, allowing you to reuse setup and teardown code across multiple tests.

Overall, `pytest.mark.parametrize` is a powerful tool for writing efficient and effective tests in Pytest.
