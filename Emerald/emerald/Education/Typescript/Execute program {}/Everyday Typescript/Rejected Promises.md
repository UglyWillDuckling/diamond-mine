
## intro

We've seen that we can only use the types any or unknown when catching exceptions. The same is true when catching rejected promises. By default, somePromise.catch(...) gives us a "reason" with the type any. ("Reason" is the word for the error or other object held inside a rejected promise.)

---


## type safety in danger

```js
Promise.reject('it failed')
  .catch(reason => {
    const theReason: number = reason;
    return theReason;
  });
// {fulfilled: 'it failed'}
```

> When we encounter an any, there's always some way to restore type safety. Often, the solution is to use the unknown type instead of any, then use type guards to narrow the type safely. That works well in this case.

```js
Promise.reject('it failed')
  .catch((reason: unknown) => {
    /* We can only catch rejections as `unknown` or `any`. We use
     * `unknown` because it's safer, but then we have to narrow the type
>      * with a conditional. */
    if (typeof reason === 'string') {
      const theReason: string = reason;
      return theReason;
    } else {
      throw new Error("We can't handle that type of reason!");
    }
  });
// {fulfilled: 'it failed'}
```

