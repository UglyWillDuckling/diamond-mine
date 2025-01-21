
## how to use

```ts
let error: Error;

try {
  throw new Error('something broke');
} catch (e: unknown) {
  /* We can only catch exceptions as `unknown` or `any`. We use `unknown`
   * because it's safer, but then we have to narrow the type with a
   * conditional. */
  if (e instanceof Error) {
    error = e;
  } else {
    throw new Error("We can't handle that type of exception!");
  }
}
error.message;
```

- ! we always need to use a [[type guard]]
- 
