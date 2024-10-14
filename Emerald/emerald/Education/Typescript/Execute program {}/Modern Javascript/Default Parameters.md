#javascript 
#default-params
#params

## other variables
- @ in [[javascript]] you can define default params by referencing other variables

```js
let defaultAddend = 1;
function add(x, y=defaultAddend) {
  return x + y;
}
const sum1 = add(1);

defaultAddend = 2;
const sum2 = add(1);

[sum1, sum2];
```

- $ you may even reference other arguments
```js
function add(x, y=x) {
  return x + y;
}
[add(1, 2), add(1), add(2)];
[3, 2, 4]
```
- ' here, the `y`'s default value is defined in terms of `x`

## any value - really 😅

### pass in a class 🏛
```js
function instantiate(TheClass) {
  return new TheClass();
}
class Dog { }
instantiate(Dog) instanceof Dog;
```
### default class
```js
function instantiate(TheClass=class { }) {
  return new TheClass();
}
class Dog { }
instantiate(Dog) instanceof Dog
true
instantiate() instanceof Dog;
false
```

### destructuring
[[Basic Object Destructuring]]

```js
function addObjects({x}, yObj={y: x}) {
  return x + yObj.y
}

addObjects({x: 1}, {y: 2}) 3
addObjects({x: 1}) 2
```

## rest params

```js
function addToLength(x=3, ...elements) {
  return x + elements.length
}
addToLength(5, 'a', 'b')
7
addToLength()
3
```

Next: [[String Keyed Methods]]
