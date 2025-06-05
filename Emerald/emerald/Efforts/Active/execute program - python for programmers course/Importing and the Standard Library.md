---
type: course-item
tags:
  - course-item
part of:
  - "[[execute program - python for programmers course]]"
---

We've seen built-in functions like len and built-in data types like dict. These are always available globally. Python also has a rich standard library, which is a set of modules providing functionality beyond core language features.

___

For example, the standard library has a math module that exports a sqrt (square root) function. We can import math to get access to the module, then call math.sqrt.

```python
import math
math.sqrt(25.0)
5.0
```

## qualified imports

However, it's better to use a "qualified import", like from math import sqrt. Each imported name is available in the namespace, without requiring the math. prefix.

```python
from math import sqrt
sqrt(25.0)
5.0
```

**multiple**

```python
from math import ceil, pi
ceil(pi)
4
```

**as**

We can use as to use a different name for our imports. It works on imported modules and on qualified imports.

```python
import math as m
m.sqrt(25.0)
5.0
```
