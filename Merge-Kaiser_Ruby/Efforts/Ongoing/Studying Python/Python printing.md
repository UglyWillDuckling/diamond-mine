#study/python/print

## printing

1. **Basic Printing**:
   ```python
   print("Hello, World!")
   ```

2. **Printing Variables**:
   ```python
   name = "Alice"
   age = 30
   print("Name:", name, "Age:", age)
   # Name: Alice Age: 30
   ```

3. **Formatted Strings (f-strings)**:
   ```python
   name = "Bob"
   age = 25
   print(f"{name} is {age} years old.")
   ```

4. **String Formatting with `format()`**:
   ```python
   name = "Charlie"
   age = 22
   print("{} is years old.".format(name, age))
   ```

5. **Printing Multiple Lines**:
   ```python
   print("Line 1\nLine 2\nLine 3")
   ```

6. **Controlling Output Width**:
   ```python
   print("{:&lt;10} {:&lt;10}".format("Name", "Age"))
   print("{:&lt;10} {:&lt;10}".format("Alice", 30))
   print("{:&lt;10} {:&lt;10}".format("Bob", 25))
   ```

7. **Using `sep` and `end` Parameters**:
   ```python
   print("Hello", "World", sep=", ", end="!\n")
   ```

8. **Printing Lists**:
   ```python
   my_list = [1, 2, 3, 4, 5]
   print("List:", my_list)
   ```
