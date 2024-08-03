#book
#typescript 
#learn 
#study 
#javascript 

a #book about learning [[javascript]] and [[typescript]]

- [x] link to github page
- [ ] add the starting chapters

---
### chapter 3 - Unions and literals
[github folder](https://github.com/UglyWillDuckling/typescript-projects/tree/main/projects/unions-and-literals)
#### **Type Aliases**
- mostly used for **convenience**
	- you don't have to type so much
	- not [[javascript]]

```typescript
type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;
```

> Type aliases are a handy feature to use in TypeScript whenever your types start getting complex. For now, that just includes long union types; later on it will include array, function, and object types.

**example from [[execute program courses]]**
```typescript

type ConversionSucceeded = {
  kind: 'success'
  value: number
};
type ConversionFailed = {
  kind: 'failure'
  reason: string
};

type ConversionResult = ConversionSucceeded | ConversionFailed;

function safeNumber(s: string): ConversionResult {
  const n: number = Number(s);
  if (Number.isNaN(n)) {
    return {kind: 'failure', reason: 'conversion returned a NaN'};
  } else {
    return {kind: 'success', value: n};
  }
}
safeNumber('1');
```


