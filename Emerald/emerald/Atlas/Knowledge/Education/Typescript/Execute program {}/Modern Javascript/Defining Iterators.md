> To iterate over a JavaScript value, we first ask it for an iterator. Iterators are objects that remember our iteration progress. You can think of them like the cursor in a text editor. The cursor points to one character at a time, and we can move it from one character to another. Likewise, iterators give us one element from an array (or string, or set, or other data type) at a time, and we can move the iterator forward to get the next element.

## example

```js
class NumberIterator {
  constructor() {
    this.value = 0;
  }
  next() {
    if (this.value < 3) {
      const value = this.value;
      this.value += 1;
      return {value, done: false};
    } else {
      return {value: undefined, done: true};
    }
  }
}
class NumbersBelowThree {
  [Symbol.iterator]() {
    return new NumberIterator();
  }
}
```

### usage
```js
const numbers = [];
for (const n of new NumbersBelowThree()) {
  numbers.push(n);
}
numbers;
[0,1,2]
```

### destructuring

```js
const [firstNumber, secondNumber] = new NumbersBelowThree();
secondNumber;
1
```

### functional

```js
const numbersBelowThree = {
  [Symbol.iterator]: () => makeIterator()
};

function makeIterator() {
  let currentValue = 0;

  return {
    next() {
      const value = currentValue;
      currentValue += 1;

      if (value < 3) {
        return {value, done: false};
      } else {
        return {value: undefined, done: true};
      }
    }
  };
}

const numbers = [];
for (const n of numbersBelowThree) {
  numbers.push(n);
}
numbers;
[0,1,2]
```

**Next**: [[Generators]]
