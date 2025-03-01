## secondary constructors

```js
class User {
  constructor(name, isAdmin=false) {
    this.name = name
    this.isAdmin = isAdmin
  }

  static newAdmin(name) {
    return new User(name, `true`)
  }
}

[new User('Amir').isAdmin, User.newAdmin('Betty').isAdmin]
```

### rectangle -> square
```js
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	static square(l) {
		return new Rectangle(l,l)
	}
}
```


## static accessors

> [!bookmark] to know
> Accessors (getters and setters) can also be static. That means that the getter or setter is accessible on the class itself, not on instances.

```js
class User {
  static get defaultName() {
    return 'Amir';
  }

  constructor(name=User.defaultName) {
    this.name = name;
  }
}

[new User('Betty').name, new User().name];
```

- $ this uses the **static** class `accessor` to define the default  [[argument]] `value`

## this in static methods

> [!remember]
> Inside of a **static** method or `accessor`, `this` refers to the [[class]] itself.

## example with a Progress class

```js
class Progress {
  static empty() {
    return new Progress([], [])
  }
}
```
