---
tags: []
---
We've iterated over lists, tuples, strings, dictionaries, and ranges. All of those work with the for loop. It's tempting to imagine that the for loop has special knowledge about each of those iterable types.

Comprehensions can also iterate over lists, tuples, strings, dictionaries, and ranges. And many Python libraries expose custom data types that we can loop over with for loops and comprehensions.

for loops and comprehensions don't have special knowledge about lists, tuples, etc. Instead, iteration in Python relies on a powerful pair of ideas: iterables and iterators.

First, a note on terminology. The words "iterable" and "iterator" aren't specific to Python; they're standard in many other languages. Although these terms might seem confusingly similar at first, their names can help us make sense of what they do.

If something's "edible", we can eat it. If something's "modifiable", we can modify it. And if something's "iterable", we can iterate over it. Lists, tuples, strings, dictionaries, and ranges are all iterable.

If an iterable is a thing that we can iterate over, then what's an iterator? When we write for i in range(10), the loop needs to execute ten times. Python has to keep track of that iteration somewhere, like "we're on the 7th element, and there are still more elements left." That's the iterator's job.

The iterable is the data source that we're looping over. The iterator tracks our progress while looping through the iterable.

___

Here's an iterable, a list of numbers.

```
numbers = [3, 2, 1]

```

We get an iterator by calling iter(numbers). iter is a built-in Python function that returns an iterator for an iterable.

```python
numbers = [3, 2, 1]
numbers_iterator = iter(numbers)
```

Now we can call next(numbers_iterator) to get the first value in numbers. next is another built-in function.

```python
numbers = [3, 2, 1]
numbers_iterator = iter(numbers)
next(numbers_iterator)
3
```

The iterator tracks our progress through the list, so each next(numbers_iterator) call gives us a new number. The first call to next gives us numbers[0], the second call gives us numbers[1], etc.

```python
numbers = [3, 2, 1]
numbers_iter = iter(numbers)
next(numbers_iter) # This returns 3, but we don't store it anywhere.
next(numbers_iter)
2
```

`!:warning `
What happens when we get to the end of the list? When the iterator has no more data to give us, we say that it's "exhausted". Calling next on an exhausted iterator raises a **StopIteration** exception.

```python
numbers = [3, 2, 1]
numbers_iter = iter(numbers)
first_item = next(numbers_iter)
second_item = next(numbers_iter)
third_item = next(numbers_iter)
fourth_item = next(numbers_iter)
fourth_item
:StopIteration: 
```

That **StopIteration** exception is a normal Python exception object. But unlike TypeError, ValueError, etc., it doesn't indicate a true error. It only means that we've reached the end of the iterator.

==In fact, Python uses this internally when running for loops. It creates an iterator, then calls next on it repeatedly until next(...) raises StopIteration. The loop catches that exception, then stops looping.==

We can use this knowledge to mimic Python's built-in for loop. First, here's some code that uses a regular for.

```python
def double_each(numbers):
  results = []
  numbers_iter = iter(numbers)

  while True:
    try:
      next_value = next(numbers_iter)
      results.append(next_value * 2)
    except StopIteration:
      break

  return results
```

The double_each function works with any iterable. For example, we can pass it a dictionary where the keys are integers. It iterates over the keys, doubling each key. (It ignores the dictionary's values, since iterating over a dictionary only gives us the keys.)

```python
double_each({
  10: "ten",
  20: "twenty"
})
```

___
## control flow and exceptions

StopIteration brings up a contentious point in programming: 
**should we use exceptions for control flow?** 

==One argument is that exceptions should only be used to signal errors, like "you passed the wrong kind of data" (TypeError) or "you passed a value that I don't know how to handle" (ValueError).==

As we just saw, iterators raise StopIteration to signal that they're exhausted. But exhausting an iterator isn't an error; it's a normal part of using iterators! This is a case where Python "uses exceptions for control flow".

We saw another case like this in an earlier lesson, where we tried to index into a dict, then caught the KeyError when the key didn't exist. We could've asked the dict whether it has the key, but real-world Python code often tries to access the key, then handles the KeyError exception if it happens. 

==In general, using exceptions for control flow is more common in Python than in other languages.==

So far, we've focused on for loops. Lists also use the iteration protocol heavily. Internally, list(some_iterable) calls iter(some_iterable). Then it calls next on the iterator until it raises StopIteration, just like a for loop does.

What if we create an iterator, iterate over some of its elements, and only then give it to list? The answer is that list doesn't know or care about the iterator's history! It always does the same thing: it calls next(...) on the iterator until the iterator raises StopIteration.

In the example below, we create a three-element list, get an iterator for it, and call next once. Then the iterator has two elements left. We call list(...) on it, which gives us a list of those two elements.

## with lists

```python
numbers = [3, 2, 1]
numbers_iter = iter(numbers)
next(numbers_iter) # This returns 3, but we don't store it anywhere.
remaining = list(numbers_iter)
remaining
[2,1]
```

**That's a concrete example of why iterators exist.** 

==They're not collections of data, in the way that a list or dictionary is. Instead, an iterator's job is to give us a way to request the next value, making sure that we get each value in the correct order.== In the example above, the iterator remembered where we were in the list: we'd already consumed one of the three list elements.

## iterables support

For convenience, functions that accept iterables or iterators usually accept either one. For example, list(some_iterable) gives us the same result as list(iter(some_iterable)). Internally, list calls iter(some_iterable) for us.

```python
phone_book = {
  "Amir": "555-1234",
  "Betty": "123-4567"
}
list(iter(phone_book))
["Amir", "Betty"]
```

This works because of an important property of iterators: 

==calling iter on an iterator returns the iterator itself. It's not just an equivalent iterator, but exactly the same iterator object. We can check that by doing iter(some_iterator) is some_iterator.==

```python
numbers = [3, 2, 1]
numbers_iter = iter(numbers)
iter(numbers_iter) is numbers_iter
True
```

## multiple iterators

We can create multiple iterators over the same iterable. For example, we might create two iterators over a list. Those two iterators are different objects, with different identities. **They track their progress separately, so advancing one iterator doesn't affect the other.**

```python
numbers = [3, 2, 1]
iter1 = iter(numbers)
iter2 = iter(numbers)
iter1 is iter2
False
```

```python
numbers = [3, 2, 1]
iter1 = iter(numbers)
iter2 = iter(numbers)
next(iter1)
next(iter1)
next(iter2)
3
```

## partial

**Sometimes we only consume part of an iterator, then discard it.**

```
def consume2(iterator):
  return [next(iterator), next(iterator)]
```

```python
iterator = iter([1, 2, 3, 4, 5])
consume2(iterator)
[1,2]
```

```python
iterator = iter([1, 2, 3, 4, 5])
consume2(iterator)
consume2(iterator)
[3,4]
```

Our list only contains five elements. If we call consume2 on the same iterator a third time, we run out of elements. consume2 consumes the 5, then calls next again, which raises StopIteration. Our consume2 function doesn't catch the **StopIteration** exception, so the exception escapes and causes an error.

## in summary

We can summarize iterators in a short sentence: 
=="calling next(some_iterator) gives us the next value, or raises StopIteration if there isn't one."== 

**But as we've seen, there are some subtleties behind that simple description.**

next: [[Defaultdict lesson]]