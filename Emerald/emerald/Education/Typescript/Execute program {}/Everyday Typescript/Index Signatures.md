We can also create objects with computed keys. To do that, we wrap the key in square brackets, like {[someVariable]: 1}

```typescript
const name = 'Amir';
const loginCounts = {[name]: 5};
loginCounts.Amir;
```

The [square brackets] can contain any expression, not just simple variables. For example, we can use string concatenation to build the key dynamically

```typescript
const loginCounts = {['Be' + 'tty']: 7};
loginCounts.Betty;
```

```typescript
type LoginCounts = {[userName: string]: number};
const loginCounts: LoginCounts = {
  Amir: 5,
  Betty: 7,
};
loginCounts.Betty;
```

> In our type above, we named the key userName. TypeScript doesn't care whether we name it userName or key or s or anything else. But it's a good idea to use a name that indicates intent.

---

**mixing index signatures ✍**

It's possible to mix an index signature with explicit definitions of certain fields. When we do that, the other fields must match the index signature. You can think of the index signature as being the overall type for the object. Any individual fields must conform to that overall type; otherwise it's a type error.
```typescript
type LoginCounts = {
  [userName: string]: number
  Amir: number
};
const loginCounts: LoginCounts = {
  Amir: 5,
  Betty: 7,
};
loginCounts;
// {Amir: 5, Betty: 7}
```


---

```typescript
type UserEmails = {[name: string]: string};
const userEmails: UserEmails = {Amir: 'amir@example.com'};
userEmails.Betty;
// undefined
```

> This code is wrong, but unfortunately it's allowed by the compiler.

**important**
This is one of the places where TypeScript's type system lets us do things that are wrong and dangerous. Fortunately, we can change this behavior with the --`noUncheckedIndexedAccess` compiler option. With that option enabled, userEmails.Betty has the type string | undefined, accurately reflecting the fact that Betty may not be present in the object. If you combine the --noUncheckedIndexedAccess compiler option with the --strictNullChecks option, you'll get increased type safety at the cost of writing a little more code.