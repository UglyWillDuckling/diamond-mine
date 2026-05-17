#study/python 

In Python, type conversion (also known as type casting) refers to the process of converting one data type into another. Here are the rules and examples of type conversion, including what is allowed and what isn't:

### Allowed Type Conversions

1. **Implicit Conversion** (Automatic Type Conversion):
   - Python automatically converts one data type to another when required.
   ```python
   a = 5       # int
   b = 2.0     # float
   result = a + b  # int is converted to float
   print(result)  # Output: 7.0
   ```

2. **Explicit Conversion** (Type Casting):
   - You can explicitly convert one type to another using built-in functions.

   - **int()**: Converts to an integer.
   ```python
   x = 3.14
   y = int(x)  # Converts float to int
   print(y)  # Output: 3
   ```

   - **float()**: Converts to a float.
   ```python
   x = 5
   y = float(x)  # Converts int to float
   print(y)  # Output: 5.0
   ```

   - **str()**: Converts to a string.
   ```python
   x = 100
   y = str(x)  # Converts int to string
   print(y)  # Output: '100'
   ```

   - **list()**: Converts to a list.
   ```python
   x = (1, 2, 3)  # tuple
   y = list(x)  # Converts tuple to list
   print(y)  # Output: [1, 2, 3]
   ```

   - **tuple()**: Converts to a tuple.
   ```python
   x = [1, 2, 3]  # list
   y = tuple(x)  # Converts list to tuple
   print(y)  # Output: (1, 2, 3)
   ```

3. **Boolean Conversion**:
   - Any non-zero number or non-empty collection is considered `True`, while `0` and empty collections are considered `False`.
   ```python
   x = 0
   y = bool(x)  # Converts to False
   print(y)  # Output: False

   x = [1, 2, 3]
   y = bool(x)  # Converts to True
   print(y)  # Output: True
   ```

### Not Allowed Type Conversions

1. **Incompatible Types**:
   - You cannot convert types that are fundamentally incompatible without a specific method.
   ```python
   x = "Hello"
   # y = int(x)  # This will raise a ValueError
   ```

2. **Complex Types**:
   - You cannot directly convert complex numbers to integers or floats.
   ```python
   x = 3 + 4j
   # y = int(x)  # This will raise a TypeError
   ```

3. **List of Different Types**:
   - You cannot convert a list of mixed types directly to a single type without handling each element.
   ```python
   x = [1, '2', 3.0]
   # y = int(x)  # This will raise a TypeError
   ```

### Summary
- **Allowed**: Implicit conversions, explicit conversions using built-in functions like `int()`, `float()`, `str()`, `list()`, and `tuple()`.
- **Not Allowed**: Conversions that lead to incompatible types or that do not have a defined conversion path (e.g., complex numbers to integers).
