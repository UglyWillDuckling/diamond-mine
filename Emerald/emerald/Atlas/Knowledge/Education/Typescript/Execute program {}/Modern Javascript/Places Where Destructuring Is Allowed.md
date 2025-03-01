> We've already seen some examples of destructuring. In this lesson, we'll step back to see how these examples interact with one another and with other language features.

```js
function getUserName({name, age}) {
  return `${name}: ${age}`;
}
getUserName({name: 'Ebony', age: 26});
'Ebony: 26'
```

## function

```js
function catDescription({name, age}) {
  return `${name} (${age})`;
}
```

## for-of loop ➰

```js
const users = [{name: 'Amir'}, {name: 'Betty'}];
const names = [];
for (const {name} of users) {
  names.push(name);
}
['Amir', 'Betty']
```

## catch blocks {}

```js
let userName = undefined;
try {
  throw {name: 'Amir'};
} catch ({name}) {
  userName = name;
}
'Amir'
```

## rest
> There's a parallel here with "rest" parameters. Here are two ways to write a function named rest that returns an array with the **first element removed**. Both use `destructuring` to access the values.

### array []

```js
function rest([, ...rest]) {
  return rest;
}
rest([1, 2, 3]);
[2,3]
```

### rest params(...)

```js
function rest(_, ...rest) {
  return rest;
}
rest(1, 2, 3);
[2,3]
```
