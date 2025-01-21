## Intro

Sometimes we can't know a variable's type in advance.

---

> However, narrowing will force us to handle the case where the unknown value isn't the type that we wanted. We can handle that in any way we like: throw a runtime error, use a default value, etc. In the examples below, we'll use a default value.

```ts
const s: unknown = 'a string';
const s2: string = typeof s === 'string' ? s : '';
s2;
'a string'
```

```ts
const s: unknown = 5;
const s2: string = typeof s === 'string' ? s : '';
s2;
''
```
```ts
const n: unknown = 5;
const n2: number = typeof n === 'number' ? n : 0;
n2;
0
```

---
> We can also do the same thing in reverse. If we get an any from a JavaScript library, we can immediately put it into an unknown. That will stop us from accidentally assigning it directly to a concrete type that might be incorrect.

```ts
const n: any = 'five';
const n2: unknown = n;
const n3: number = n2;
// type error
```

## Finally

> A note on terminology. `any` means "a variable of any type, assignable to anything". The name any is very appropriate; it applies to both reading and writing. unknown means "we don't know what's in this variable, so we can't use it until we find out".
