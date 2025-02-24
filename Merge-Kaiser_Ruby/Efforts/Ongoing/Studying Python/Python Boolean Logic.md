#study/python/boolean

### 1. Basic Boolean Operations
- **AND**: Both conditions must be true.
  ```python
  a = True
  b = False
  result = a and b  # result is False
  ```

- **OR**: At least one condition must be true.
  ```python
  a = True
  b = False
  result = a or b  # result is True
  ```

- **NOT**: Inverts the truth value.
  ```python
  a = True
  result = not a  # result is False
  ```

### 2. Using Boolean Values in Conditions
- **If Statements**:
  ```python
  is_raining = True
  if is_raining:
      print("Take an umbrella.")
  else:
      print("No need for an umbrella.")
  ```

### 3. Combining Conditions
- **Using AND and OR**:
  ```python
  age = 20
  has_permission = True
  if age >= 18 and has_permission:
      print("Access granted.")
  else:
      print("Access denied.")
  ```

### 4. Boolean Expressions
- **Complex Conditions**:
  ```python
  temperature = 30
  is_sunny = True
  if (temperature &gt; 25 and is_sunny) or (temperature &lt; 15):
      print("It's a nice day!")
  ```

### 6. Boolean in Lists
- **Filtering with Boolean Conditions**:
  ```python
  numbers = [1, 2, 3, 4, 5]
  even_numbers = [num for num in numbers if is_even(num)]
  print(even_numbers)  # [2, 4]
  ```