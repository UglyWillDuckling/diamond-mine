---
part of:
  - "[[execute program - python for programmers course]]"
---
#course-item

The .`insert` method inserts a value at a given index. For example, we might insert a new value at index 1. All existing values at indexes 1 and higher move up by one to make room for the new value. The value at index 1 moves to 2, the value at index 2 moves to 3, etc.


**append**

	monthly_sales = [12, 6]
	monthly_sales.append(8)
	monthly_sales

**pop**

	contest_entrants = ["Amir", "Betty", "Cindy"]
	contest_entrants.pop()
	contest_entrants
	['Amir', 'Betty'] 

.`pop` is most commonly used to remove the **last element**, as shown above. But it can also remove other elements if we pass an optional index argument.

	remaining_tasks = ["A", "B", "C"]
	middle_task = remaining_tasks.pop(1)
	'B'

**insert**

The .insert method inserts a value at a given index. For example, we might insert a new value at index 1. All existing values at indexes 1 and higher move up by one to make room for the new value. The value at index 1 moves to 2, the value at index 2 moves to 3, etc.

	word_list = ["apple", "car", "dog"]
	word_list.insert(1, "bagel")
	word_list
		['apple', 'bagel', 'car', 'dog']

We can combine `.pop` and `.insert` to "rotate" a list. Rotating a list means moving the last element to the beginning of the list (or vice-versa).

	job_queue = ["A", "B", "C", "D"]
	job = job_queue.pop()
	job_queue.insert(0, job)
	job_queue
	['D', 'A', 'B', 'C']

**The in operator** checks for whether a list contains a value. It returns a boolean value, True or False

	"Betty" in ["Amir", "Betty", "Cindy"]
		True

We can also use value not in some_list, which is the opposite of value in some_list.

	winners = [1, 2, 3, 5]
	4 not in winners
		True

value not in some_list is "syntactic sugar" for not (value in some_list). While either form works, the not in form is generally considered more idiomatic in Python code.[^1]

> [!info]
> These **in and not in** operators work with most collection data types in Python. We'll see more examples later in the course.

___

It's common to convert other data types into lists. For example, we might want to turn a string into a list of its individual characters, with each character in a separate string of length 1. We can do that by calling list(some_string).

	pet = "cat"
	list(pet)
	['c', 'a', 't']

___

### assignment

```python
def rotate_left(the_list):
  # TODO: Remove the first element, and put it at the end of the list.
  first = the_list.pop(0)
  the_list.append(first)
  return the_list

def rotate_right(the_list):
  last = the_list.pop()
  the_list.insert(0, last)
  # TODO: Remove the last element, and put it at the front of the list.
  return the_list
```


[^1]: [[Syntactic Sugar]]