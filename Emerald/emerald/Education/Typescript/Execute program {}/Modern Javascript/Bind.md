## short example 

> we bind a functions `this` to the `user` object

```js
const user = {name: 'Amir'};
function userName() {
  return this.name;
}
const userNameBound = userName.bind(user);
userNameBound()
'Amir'
```

```js
const user = {name: 'Amir'};
function userName() {
  return this.name;
}
userName.bind(user)();
'Amir'
```

## better example

>  we can bind an inner function that is created during `runtime` and `bind` it to the `address` object
```js
const address = {
  city: 'Paris',
  country: 'France',
  addressString() {
    const f = function() {
      return `${this.city}, ${this.country}`;
    };
    return f.bind(this);
  },
};
address.addressString()();
'Paris, France'
```
