## Getters

```js
const user = {
  get age() { return 'Amir'; }
};
user.age;
```

> Because the function above returns a fixed string, it behaves like a regular property would. But the getter function doesn't have to return a constant value. It can return anything we want.

## Setters

```js
const user = {
  realName: 'Amir',
  set userName(newName) { this.realName = newName },
};
user.userName = 'Betty
user.realName
```


## example

```js
function createUser(userName) {
  return {
    names: [userName],
    get userName() { return this.names[this.names.length - 1]; },
    set userName(userName) { this.names.push(userName); }
  };
}

const user = createUser('Amir');
user.userName = 'Betty';
user.names;
```