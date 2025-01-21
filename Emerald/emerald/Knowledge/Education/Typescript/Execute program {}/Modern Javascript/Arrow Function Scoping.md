Arrow functions always inherit the scope that they were defined in, including the this value.

```js
const address = {
  city: 'Paris',
  country: 'France',
  addressFunction() {
    /* Inside of this shorthand method, `this` is the containing object,
     * `address`. Arrow functions inherit the scope that they were defined in,
     * so this arrow function's `this` is also the containing object,
     * `address`. */
    return () => `${this.city}, ${this.country}`;
  },
};
address.addressFunction()()
```

## task - volume

```js
const rectangle3D = {
  width: 3,
  depth: 4,
  height: 5,
  baseArea() { return this.width * this.depth; },

  volumeFunction() {
    return () => this.baseArea() * this.height
  },
}

rectangle3D.volumeFunction()()
// 60
```

## rule

> [!important] If the function defined is part of an object, and needs to access that object's properties, use a shorthand function.
