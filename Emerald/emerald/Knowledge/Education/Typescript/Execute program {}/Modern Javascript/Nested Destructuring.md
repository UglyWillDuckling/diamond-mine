## intro

> We can destructure nested data, like nested arrays (arrays inside other arrays).

```js
const dataPoints = [
  [10, 20],
  [30, 40]
];
const [[x1, y1], [x2, y2]] = dataPoints;
x1;
10
```
**and**
```js
const dataPoints = [
  [10, 20],
  [30, 40]
];
const [[x1]] = dataPoints;
x1;
10
```

**and**
```js
const dataPoints = [
  [10, 20],
  [30, 40]
];
const [, [x2]] = dataPoints;
x2;
30
```

### assignment 👉
```js
const dataPoints = [
  [10, 20],
  [30, 40]
];

const [, [, y2]] = dataPoints;
y2; 40
```

## nested objects 🪆
> We can also destructure nested objects.

```js
const user = {
  name: 'Amir',
  address: {
    city: 'Paris',
  },
};
const {address: {city}} = user;
city;'Paris'
```

### access both outer and inner props
>If we want to get the entire address object and also get the city, we can ask for that explicitly, as in the next example. Pay close attention to the destructuring syntax here! 

```js
const user = {
  name: 'Amir',
  address: {
    city: 'Paris',
  },
};
const {address, address: {city}} = user;
[city, address]; 
['Paris', {city: 'Paris'}]
```

### assignment ✔
> Use `destructuring` to extract Betty's cat's name, which is stored in a `nested` object. Store it in the `name` variable. (That variable name matches the `name` key in cat, which makes the destructuring easier than it would be if it didn't match.)

```js
const user = {
  name: 'Betty',
  cat: {
    name: 'Keanu',
    age: 2,
  },
};

const {cat: {name}} = user;
name; 'Keanu'
```

## mix [] and {}

```js
const users = [{name: 'Amir'}, {name: 'Betty'}];
const [, {name}] = users;
name; 'Betty'
```

## multiple values

> [!tip] We can destructure multiple values
> We can destructure multiple values by wrapping them in an array, then immediately destructuring it.

```js
const user = {name: 'Amir'};
const address = {city: 'Paris'};
const [{name}, {city}] = [user, address];
[name, city];
['Amir', 'Paris']
```

