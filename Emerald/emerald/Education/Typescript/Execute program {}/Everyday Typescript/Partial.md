
## Intro

> Sometimes we need a flexible way to create "partial" objects. These are objects with some of an object type's properties, but not necessarily all of them. We could do that manually with the ? syntax for optional properties.

- Partial allows us to define **two** or more different types that are both related and kept in sync
	- the second, `partial`, type has all of its properties defined as **optional**, see [[Optional Properties]] 👀 :eye

---

## main

```typescript
type User = {
  name: string
  postalCode: string
};

const partialAmir: Partial<User> = {postalCode: '75010'};
partialAmir.postalCode;
```

> When we access the properties in a partial object type, we get a **union** with **undefined**. For example, the `postalCode` property above is a **string | undefined**. As usual, we'll get a type error if we try to use it without considering the undefined case.

**error**

If we try to use the value without considering the `undefined` case we will get a type error

```typescript
type User = {
  name: string
  postalCode: string
};

const partialAmir: Partial<User> = {postalCode: '75010'};
const postalCode: string = partialAmir.postalCode;
// type error - Type 'string | undefined' is not assignable to type 'string'
```