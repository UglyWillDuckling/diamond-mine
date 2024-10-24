
Some concrete examples of using [[Partial]].

---
## start 🏁

> In the first example, we have a "template", like a user object with all of its properties, and we have some "overrides", like a partial user object. Here, the "template" is created as its own variable that lives outside of the function.

```ts
type User = {
  name: string
  country: string
};

const template: User = {
  name: 'Amir',
  country: 'France',
};

/* This function combines the template object and the overrides to
 * produce a new object. */
function override(overrides: Partial<User>): User {
  return {...template, ...overrides};
}

// we can pass in an empty object and get back the original
override({})
// override a single field
override({name: 'Betty'})
```

> [!NOTE] We could now define multiple templates that the user could choose from and continue to modify
> <mark style="background: #ABF7F7A6;">This is very similiar to the [[Prototype pattern]] pattern except much neater and quicker</mark>

## usage: use cases

Functions like override are useful in many situations, most notably in unit tests. When we're testing our user module, we could create a new user object from scratch in every test. But user objects often have dozens of properties, and most tests <mark style="background: #BBFABBA6;">only care about one or at most a few of them.</mark>

> [!warning] This cannot easily be used on objects with private props
> Will result in a type error because of the missing fields
> ==this is due to [[javascript]] not [[typescript]]==

### For my final trick 🪄

```ts
/* This override function is generic and works with any object type! */
function override<T>(template: T, overrides: Partial<T>): T {
  return {...template, ...overrides}
}
```


>That little three-line override function does a lot of work:
- It **overrides** properties at runtime.
- It works for **any** object type.
- It ensures that we only override properties that **exist** on the type.
 