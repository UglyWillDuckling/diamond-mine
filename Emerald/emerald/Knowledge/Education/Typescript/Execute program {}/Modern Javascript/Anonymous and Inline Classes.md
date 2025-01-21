## names
- $ Classes also have a name property.

```js
class Cat { }
Cat.name;
'Cat'
```

## assigning to a variable

```js
const Animal = class Cat {
  speak() {
    return 'nyan';
  }
};
new Animal().speak();
'nyan'
```

## inline
#anonymous-class
- $ We can even inline the class definition into the new expression, so it's never assigned to a variable at all
- @ this is an example of the anonymous class
	- it works the same as in `PHP`

```js
const cat = new (
  class {
    speak() {
      return 'yaong';
    }
  }
)()
cat.speak()
'yaong'
```

## classes are functions

- $ Internally, JavaScript classes are just functions. The implications of that are complex and, to be honest about it, pretty **confusing**. But we just saw one implication: when we assign an `anonymous` class directly to a variable, that variable's name becomes the class' name. That's not because classes and functions follow the same rule; it's because **classes are functions**!
- @ Classes can be `anonymous` (have no name), and they can be `inline` (the class definition itself is used as an expression). Both of those are uncommon. Because inline and anonymous classes can be complex and confusing, we recommend avoiding them when possible. But they are used in real systems, so you'll encounter them eventually!
	- ! don't agree with this, both of these can be very useful, especially when implementing [[interface]]'s

