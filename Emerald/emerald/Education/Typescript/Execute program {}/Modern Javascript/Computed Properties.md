
## general\

```js
const name = 'Amir';
const loginCounts = {[name]: 5};
loginCounts.Amir;
```

> The expression inside [square brackets] is evaluated, and its result is used as the property name. In the example above, the name variable contained 'Amir', so that was used as the property name. But computed property names can contain any expression, not just simple variables. For example, we can use string concatenation to build the key dynamically

```js
const loginCounts = {
  ['Be' + 'tty']: 7,
};
loginCounts.Betty;
```


## practical example

```js
const betty = {
  name: 'Betty',
  emailConfirmed: true,
  yearJoined: 2015
};

function getYearJoined(user) {
  return {[user.name]: user.yearJoined};
}

getYearJoined(betty);
```