related:: [[Python Functions]]
___

In Python, you can't explicitly declare a function as you would with variables using the `global` keyword. However, a function defined at the top-level of a module is essentially "global" in the sense that it can be accessed from anywhere within that module.

Here's an example:
```python
# mymodule.py

def my_global_function():
    print("I'm a global function!")

my_global_function()  # prints "I'm a global function!"

# another_module.py
from mymodule import my_global_function

my_global_function()  # prints "I'm a global function!"
```

In this example, `my_global_function` is defined at the top-level of the `mymodule` module and can be imported and used from another module, effectively making it "global" in scope.

However, it's essential to note that Python's "global" functions are still scoped to that module. You can't access a function from a different module without importing it first.