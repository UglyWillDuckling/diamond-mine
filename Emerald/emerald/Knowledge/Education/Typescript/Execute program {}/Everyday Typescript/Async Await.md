
```ts
async function asyncDouble(x: Promise<number>): Promise<number> {
  return 2 * await x;
}
asyncDouble(Promise.resolve(5));
//
{fulfilled: 10}
```