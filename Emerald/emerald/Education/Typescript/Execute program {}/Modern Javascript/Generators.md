> Modern JavaScript also has a feature called "generators", which lets us write iterables without all of the verbosity. Generators use the same iteration protocols that we already saw, but in this case we don't have to implement those protocols manually. We'll look at a working example first, then examine it in detail.

```js
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
```

```js
const results = [];
for (const n of numbers()) {
  results.push(n);
}
results;
[1,2,3]
```

## details

- The `*` in `function`* numbers() marks our function as a [[generator]]
- When we call a generator function, we get an [[Iterator]]
- Each `yield` in the generator provides **one value** to the iterator

## manual calls
```js
const iterator = numbers();

while (true) {
  const iteration = iterator.next();
  console.log(iteration);
  if (iteration.done) {
    break;
  }
}
```

- ' multiple iterators can be created this way
	- $ event different types of [[Iterator]]'s

### to array []

- [i] We can also call Array.from(...) on a generator to turn it into an array
```js
function* loneliestGenerator() {
  yield 1
}
Array.from(loneliestGenerator()); [1]
```

## explain

Each `yield` is like `return`, except that it doesn't actually terminate the function. When we `yield`, the **generator** function stops running <mark style="background: #ABF7F7A6;">temporarily</mark>. The **loop** (or whatever else is consuming the iterator) gets the `yielded` `value`. When the loop asks for another value by calling .next() on the iterator, <mark style="background: #FFF3A3A6;">our generator function resumes at the point where it left off</mark>. It runs until it hits another `yield` and so on until there is nothing more to consume.

### remember 📇
- each yield is like a return
- after a `yield`, the function **stops** <mark style="background: #ABF7F7A6;">temporarily</mark>
- when a new value is **requested**, the `generator` function **resumes** at the point where it left off 

## end

1. Calling a generator like numbers() gives us an [[Iterator]]
2. **Behind the scenes**, our loop, for (const n of numbers()), automatically calls .next() on the iterator.
3. The `generator` function runs until it hits a `yield`
4. The yielded value shows up as the n variable inside the loop body
5. **Steps 2-4 repeat** <mark style="background: #FFB8EBA6;">until the generator function returns</mark>, which causes the iterator to return `{value: undefined, done: true}`, which in turn **causes** the loop to end.

## more examples

```js
function* numbers() {
  let x = 1;
  yield x;
  x += 1;
  yield x
}
Array.from(numbers())
```

