#feature/programming-language/python

In Python,  isinstance()  is a built-in function that allows you to check if
  an object is an instance of a particular class or a subclass of a particular
  class.

  The syntax is:

    isinstance(object, class)

  Where:

  •  object  is the object you want to check
  •  class  is the class or type you want to check against

  The function returns a boolean value:

  •  True  if the object is an instance of the class or a subclass of the
  class
  •  False  otherwise

  Here are some examples:

    class Animal:
        pass

    class Dog(Animal):
        pass

    my_dog = Dog()

    print(isinstance(my_dog, Dog))  # True
    print(isinstance(my_dog, Animal))  # True
    print(isinstance(my_dog, str))  # False

  Note that  isinstance()  checks the entire class hierarchy, not just the
  immediate class of the object. This means that if you have a subclass of a
  class,  isinstance()  will return  True  for the subclass as well.

  You can also use  isinstance()  with abstract base classes (ABCs) to check
  if an object implements a particular interface.

  For example:

    from abc import ABC, abstractmethod

    class Animal(ABC):
        @abstractmethod
        def sound(self):
            pass

    class Dog(Animal):
        def sound(self):
            return "Woof!"

    my_dog = Dog()

    print(isinstance(my_dog, Animal))  # True

  In summary,  isinstance()  is a powerful tool for checking the type of an
  object in Python, and it's an essential part of Python's object-oriented
  programming model.kk

You can also pass in a tuple to check if the type matches any of the ones in the tuple.

```python
isinstance(4.5, (int, float))
True
```

___
- [x] remind me [[isinstance in python]] (@[[2025-06-19]])