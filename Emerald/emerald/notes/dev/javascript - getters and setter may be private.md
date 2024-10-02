```js
class User {
  #internal;

  constructor(name) {
    this.#internal = name
  }

// a private getter
  get #name() {
    return this.#internal
  }

  get fullName() {
    return `${this.#name} Smith`
  }
}

const steve = new User('Steve')
console.log(steve.fullName)
```