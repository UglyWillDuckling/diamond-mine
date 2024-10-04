## intro
<mark style="background: #BBFABBA6;">We usually define classes at the top level of a module. However, classes follow the same scoping rules as regular variables. We can define them inside a function, or even inside a conditional.</mark>

---
## examples

### within a function
```js
function createKoko() {
  class Gorilla {
    constructor(name) {
      this.name = name;
    }
  }
  return new Gorilla('Koko');
}
createKoko().name;
```

### within an else
```js
function createGorilla(name) {
  if (name === undefined) {
    return undefined;
  } else {
    class Gorilla {
      constructor(name) {
        this.name = name;
      }
    }
    return new Gorilla(name);
  }
}
[createGorilla(undefined), createGorilla('Koko').name];
// [undefined, 'Koko']
```

> [!bookmark] To be clear
> Just to be clear: there are very **few** cases where a class should be defined in a function. There are even fewer (and maybe none) where a class should be defined inside a conditional. <mark style="background: #ABF7F7A6;">But JavaScript allows us to do these things!</mark>

## class within a class
- ! We can't define a class inside another class. That causes an error, whether we use the class or not.

Next: [[Anonymous and Inline Classes]]