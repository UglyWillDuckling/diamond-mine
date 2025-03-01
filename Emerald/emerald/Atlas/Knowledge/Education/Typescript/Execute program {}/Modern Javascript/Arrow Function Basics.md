## intro

> JavaScript has always supported function definitions with and without names.

---

## starter example

```js
(function() {
  return 3;
})()
```

## callbacks
> We can also use the function syntax to define callbacks: functions that we pass to other functions. But in that context, the function syntax feels a bit awkward.

```js
[1, 2, 3].map(function (x) { return x * 2; })
```

## arrows ⤴
#arrow-functions
[[arrow function]]

> Modern JavaScript supports a **cleaner** syntax for function definitions called "`arrow functions`" (because the operator looks like an arrow). Here's an arrow function that takes an argument x, then returns x * 2. It does the same thing as the example above.

```js
[1, 2, 3].map((x) => x * 2)
// [2, 4, 6]
```

### things to take not of

- First, because this is a one-line arrow function, we can `omit` the **curly braces** around the function body
- Second, we can also `omit` the **return** keyword
- Third, when an arrow function takes exactly one argument, like above, we can shorten the syntax even further by dropping the parentheses: x => x * 2
```js
	// 1 arg
	[1, 2, 3].map(x => x * 2)
	// 0 args
	[1, 2, 3].map(() => 5)
	
```

### rest params, destructuring
> Arrow functions support rest parameters and destructuring, just like normal functions do. Using those features requires parentheses around the argument list, even if there's only one argument.

#### destructure
```js
const user = {name: 'Amir'};
const getName = ({name}) => name;
getName(user)
'Amir'
```
#### rest
```js
const rest = (first, ...rest) => rest
rest(1, 2, 3, 4)
[2,3,4]
```

### multi-line arrows 📋
> We can also write multi-line arrow functions by wrapping the function body in {curly braces}. This longer function does the same thing as the short version above.

```js
const double = x => {
  const result = x * 2;
  return result;
}
double(3)
6
```

> [!info] Return values
> One-line arrow functions `implicitly` `return` the value of that one line; there's no `return` statement. With `multi-line` arrow functions, we **have to** explicitly `return` a value
