## Short List

- `Number.isFinite(number)`
- `Number.isInteger(number)`
- `Number.isNaN(number)`
- `Number.isSafeInteger(number)`

## References
- [MDN - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Course](https://www.executeprogram.com/courses/modern-javascript/lessons/new-number-methods)

---
## Code {}

```js
Infinity === -Infinity;

// true
Number.isFinite(5);
// false
Number.isFinite(Infinity);
// false
Number.isFinite(-Infinity);

// false
Number.isFinite(NaN);

Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

// true
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;

// false
Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER;

// true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER);

function safeIntegerMultiply(x, y) {
  const result = x * y

  if (Number.isSafeInteger(result)) {
    return result
  }
  throw new Error('integer overflow')
}

safeIntegerMultiply(2, 4)
// WARNING: Unsafe
safeIntegerMultiply(Number.MAX_SAFE_INTEGER, 2);
```
