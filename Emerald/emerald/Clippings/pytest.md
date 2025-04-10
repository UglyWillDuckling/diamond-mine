---
author: []
created: 2025-04-03
published: 
source: https://github.com/pytest-dev/pytest
tags:
  - testing-framework
---
[![pytest](https://github.com/pytest-dev/pytest/raw/main/doc/en/img/pytest_logo_curves.svg)](https://docs.pytest.org/en/stable/)

---

The `pytest` framework makes it easy to write small tests, yet scales to support complex functional testing for applications and libraries.

An example of a simple test:

```
# content of test_sample.py
def inc(x):
    return x + 1

def test_answer():
    assert inc(3) == 5
```

To execute it:

```
$ pytest
============================= test session starts =============================
collected 1 items

test_sample.py F

================================== FAILURES ===================================
_________________________________ test_answer _________________________________

    def test_answer():
>       assert inc(3) == 5
E       assert 4 == 5
E        +  where 4 = inc(3)

test_sample.py:5: AssertionError
========================== 1 failed in 0.04 seconds ===========================
```

Due to `pytest` 's detailed assertion introspection, only plain `assert` statements are used. See [getting-started](https://docs.pytest.org/en/stable/getting-started.html#our-first-test-run) for more examples.

## Features

- Detailed info on failing [assert statements](https://docs.pytest.org/en/stable/how-to/assert.html) (no need to remember `self.assert*` names)
- [Auto-discovery](https://docs.pytest.org/en/stable/explanation/goodpractices.html#python-test-discovery) of test modules and functions
- [Modular fixtures](https://docs.pytest.org/en/stable/explanation/fixtures.html) for managing small or parametrized long-lived test resources
- Can run [unittest](https://docs.pytest.org/en/stable/how-to/unittest.html) (or trial) test suites out of the box
- Python 3.9+ or PyPy3
- Rich plugin architecture, with over 1300+ [external plugins](https://docs.pytest.org/en/latest/reference/plugin_list.html) and thriving community

## Documentation

For full documentation, including installation, tutorials and PDF documents, please see [https://docs.pytest.org/en/stable/](https://docs.pytest.org/en/stable/).

## Bugs/Requests

Please use the [GitHub issue tracker](https://github.com/pytest-dev/pytest/issues) to submit bugs or request features.

## Changelog

Consult the [Changelog](https://docs.pytest.org/en/stable/changelog.html) page for fixes and enhancements of each version.

## Support pytest

[Open Collective](https://opencollective.com/) is an online funding platform for open and transparent communities. It provides tools to raise money and share your finances in full transparency.

It is the platform of choice for individuals and companies that want to make one-time or monthly donations directly to the project.

See more details in the [pytest collective](https://opencollective.com/pytest).

## pytest for enterprise

Available as part of the Tidelift Subscription.

The maintainers of pytest and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use.

[Learn more.](https://tidelift.com/subscription/pkg/pypi-pytest?utm_source=pypi-pytest&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

### Security

pytest has never been associated with a security vulnerability, but in any case, to report a security vulnerability please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.

## License

Copyright Holger Krekel and others, 2004.

Distributed under the terms of the [MIT](https://github.com/pytest-dev/pytest/blob/main/LICENSE) license, pytest is free and open source software.