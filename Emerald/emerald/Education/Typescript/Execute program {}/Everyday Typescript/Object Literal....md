# Object Literal May Only Specify Known Properties


In most cases #typescript strictly obeys the [[structured typing]] paradigm. Not always however;

Cases when typescripts doesn't follow the structured typing rules:

1. When we pass **literal objects** directly to functions
2. When we assign **literal objects** directly to variables with explicit types 

---

If we pass the literal object `{name: 'Amir', age: 36}` directly to a function expecting a `{name: string}`, there's no possible use for **age**. It's not part of the {name: string} type, so no code can ever access it. It must be a mistake, and TypeScript highlights that mistake with a type error.

```typescript
function userName(user: {name: string}) {
  return user.name;
}
userName({name: 'Amir', age: 36});
// type error: Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'.
```

> If we assign the literal to a variable it's a whole different story 🔖.

```typescript
function userName(user: {name: string}) {
  return user.name;
}
const user: {name: string, age: number} = {name: 'Amir', age: 36};
userName(user);
// 'Amir'
```

---

> The same logic applies to variables with explicit types. We can't say "this object is a {name: string}", but then immediately give it a value of {name: 'Amir', age: 36}. The age property would never be accessible for the same reason explained above, so it must be a mistake.

```typescript
const user: {name: string} = {name: 'Amir', age: 36};
user;
// type error
```

### usage with optional function params

```typescript
function userNameAndAge(user: {name: string, age?: number}) {
  if (user.age === undefined) {
    return user.name;
  } else {
    return `${user.name}, ${user.age}`;
  }
}
[
  userNameAndAge({name: 'Amir', age: 36}),
  userNameAndAge({name: 'Betty'}),
];
// ['Amir, 36', 'Betty']
```

**now with a tpyo**

```typescript
function userNameAndAge(user: {name: string, age?: number}) {
  if (user.age === undefined) {
    return user.name;
  } else {
    return `${user.name}, ${user.age}`;
  }
}
const user = {name: 'Amir', aeg: 36};
userNameAndAge(user);
// 'Amir'
```

> typescript will allow the above code as it conforms with **structural typing** and **optional params**


<mark style="background: #FFF3A3A6;">If we pass in the object literal directly, **we will** get the type error again...</mark>


```typescript
function userNameAndAge(user: {name: string, age?: number}) {
  if (user.age === undefined) {
    return user.name;
  } else {
    return `${user.name}, ${user.age}`;
  }
}
// We make a typo in this property name, but TypeScript prevents the bug!
userNameAndAge({name: 'Amir', aeg: 36});
```

---

### To summarize this lesson:

In general, TypeScript allows objects to have extra properties. For example, we can pass a variable with the type {name: string, age: number} to a function expecting a {name: string}.

But TypeScript doesn't allow extra properties when passing literal objects to functions, or assigning them directly to a variable with an explicit type. If we have function userName(user: {name: string}), then userName({name: 'Amir', age: 36}) is a type error. 

TypeScript knows that no code will ever access that age property, so there's no reason for it to exist.
That can show us subtle bugs like **misspelled** property names.
