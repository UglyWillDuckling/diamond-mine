---
related:
  - "[[Variadic Functions lesson]]"
about: "[[python programming language]]"
quality: 5
interest: 6
value: 8
status:
  - done
---
## Types of variadic functions

  In Python, there are three types of variadic functions:

  1. *args: This type of variadic function takes a variable number of positional arguments, which are collected in a tuple called  args .
  2. `**kwargs`: This type of variadic function takes a variable number of
  keyword arguments, which are collected in a dictionary called  kwargs .
  3. `*args`, `**kwargs`: This type of variadic function takes both a variable
  number of positional arguments and keyword arguments.

## Examples of variadic functions

```python
# 1. *args
def sum_numbers(*args):
	return sum(args)

result = sum_numbers(1, 2, 3, 4, 5)
print(result)  # 15
```

```python
# 2. **kwargs
def greet(**kwargs):
	for key, value in kwargs.items():
		print(f"{key}: {value}")

greet(name='John', age=30, country='USA')
```

```python
# 3. *args, **kwargs
def log_message(*args, **kwargs):
	print("Positional arguments:")
	for arg in args:
		print(arg)
	print("Keyword arguments:")
	for key, value in kwargs.items():
		print(f"{key}: {value}")

log_message('hello', 'world', foo='bar', baz='qux')
```

## Unpacking variadic arguments

see: [[Unpacking lesson]], [[unpacking in python]]

  ==In Python, you can unpack variadic arguments using the  *  or  ** operators.== 
  This allows you to pass a list or dictionary as an argument to a variadic function.

```python
def sum_numbers(*args):
	return sum(args)

result = sum_numbers(*[1,2,34,5])
print(result)  # 15
```

  In this example, the  numbers  list is <mark style="background: #BBFABBA6;">unpacked</mark> using the  `*`  operator, and
  its elements are passed as separate arguments to the  `sum_numbers`  function.