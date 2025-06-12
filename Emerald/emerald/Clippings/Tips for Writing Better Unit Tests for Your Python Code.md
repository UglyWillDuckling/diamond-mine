---
author:
  - "[[Bala Priya C]]"
created: 2025-05-28
source: https://www.kdnuggets.com/tips-for-writing-better-unit-tests-for-your-python-code
tags:
  - article/python/tests
---
By , KDnuggets Contributing Editor & Technical Content Specialist on April 1, 2025 in
___

As a **Python** developer, unit testing your code is one of the best habits you can develop (and get better at!). It helps you catch bugs early, makes debugging easier, and gives you the confidence to make changes without breaking existing code.

But not all tests are created equal! If your tests are messy, slow, or if there are too many of them, they won’t do you much good.

In this article, I’ll walk you through practical tips for writing better unit tests—with simple, useful examples to get you started. Let’s dive in!

## 1\. Organize Your Tests for Clarity

Keeping your tests organized makes maintenance so much easier. A good rule of thumb is to mirror your source code structure but keep your tests in a separate tests folder.

Here’s an example directory structure you can use:
```c
my_project/
│
├── src/
│   ├── utils.py
│   ├── app.py
│
├── tests/
    ├── test_utils.py
    ├── test_app.py
```

This structure helps you quickly find the test file containing the tests for the corresponding source code files.

## 2\. Use Descriptive Test Names

When naming your tests, make sure they describe *what* is being tested. This helps you (and your teammates) figure out what a test does.

Here’s a not-so-great example:

```
def test_function():
    assert some_function() == expected_result
```

And here’s a (much) better version:

```
def test_addition_with_positive_numbers():
    assert addition(2, 3) == 5
```

When your test names are descriptive, you can find and modify tests as needed.

## 3\. Focus on One Thing Per Test

Each test should evaluate a single behavior. Testing multiple things in one function can make it unclear on what caused the failure. Isolating behaviors ensures clarity and makes debugging straightforward.

Let’s test a function that checks if a string contains only alphabetic characters:

```python
# src/utils.py
def is_alpha(string):
    return string.isalpha()
```

The unit tests are as follows:

```python
# tests/test_utils.py
def test_is_alpha_with_all_letters():
    assert is_alpha("hello") is True

def test_is_alpha_with_numbers():
    assert is_alpha("hello123") is False

def test_is_alpha_with_special_characters():
    assert is_alpha("hello!") is False
```

Instead of combining all these cases into one test, separating them allows you to pinpoint issues quickly. For instance, if the test fails for special characters, you won’t need to sort through all cases to find the problem.

## 4\. Use `Mocking` to Isolate Dependencies

If your code depends on APIs, databases, or other external systems, use mocking to isolate the code under test.

Let’s test an API client function without making actual API calls:
```python
# src/api_client.py
import requests

def fetch_data(url):
    response = requests.get(url)
    return response.json()
```

The test code will look like so:
```python
# tests/test_api_client.py
from unittest.mock import patch
from src.api_client import fetch_data

@patch("src.api_client.requests.get")
def test_fetch_data(mock_get):
    # Simulate API response
    mock_get.return_value.json.return_value = {"key": "value"}
    
    result = fetch_data("http://example.com/api")
    
    assert result == {"key": "value"}
    mock_get.assert_called_once_with("http://example.com/api")
```

Mocking lets you test your code without relying on real network calls, making your tests faster and more reliable.

## 5\. Cover Edge Cases and Error Handling
  
Good tests don’t just check if your code works—**they also check how it behaves when things go wrong**. So you should be mindful to include edge cases and ensure the code raises exceptions when needed.

In testing a function that divides numbers:
```python
# src/utils.py
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b
```

Here’s the test code:

```python
# tests/test_utils.py
import pytest
from src.utils import divide

def test_divide_normal_case():
    assert divide(10, 2) == 5

def test_divide_by_zero_raises_error():
    with pytest.raises(ValueError, match="Cannot divide by zero!"):
        divide(10, 0)
```

`note:`testing edge cases and possible exceptions ensures your code behaves predictably when given bad inputs.

## 6\. Use Parametrized Tests to Avoid Repetition
  
When testing the same function with different inputs, use **parametrized tests** to save time and reduce repetition.

```python
# tests/test_utils.py
import pytest
from src.utils import square

@pytest.mark.parametrize("input,expected", [
    (2, 4),
    (0, 0),
    (-3, 9),
    (1.5, 2.25),
])
def test_square(input, expected):
    assert square(input) == expected
```

This approach keeps your tests clean and ensures every case gets tested.

## 7\. Aim for `High Code Coverage` Without Overdoing It

While it’s great to aim for high test coverage, **100% coverage doesn’t mean your code is bug-free**. Focus on testing critical parts of your application—**especially edge cases and tricky logic.**

Use tools like [pytest-cov](https://github.com/pytest-dev/pytest-cov) to measure your coverage:

```sh
pip install pytest-cov
pytest --cov=src tests/
```

Check the coverage report to spot gaps in your tests, but don’t stress about covering every single line of code.