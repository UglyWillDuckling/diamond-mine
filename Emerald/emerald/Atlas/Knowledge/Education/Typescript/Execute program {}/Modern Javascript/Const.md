
## Intro

Sometimes we want to ensure that a variable is never reassigned. We do that by declaring it with const rather than let. With const, trying to give the variable a new value causes an error. (You can type error when a code example will throw an error.)

---

## main

```typescript
function f() {
  const x = 1;
  return x + 1;
}
f();
```

> const doesn't stop us from mutating (changing) the value held by the variable. For example, we can mutate a const array by calling its push method. However, reassigning the array variable to hold a new array isn't allowed.

```typescript
function f() {
  const numbers = [1, 2];
  numbers.push(3)
}
```


> [!NOTE] In Short
> const applies to the **variable**, **not the value** held by the variable.
