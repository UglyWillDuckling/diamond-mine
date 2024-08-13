

---
## ReturnType

> Sometimes we want to extract an existing function's return type or parameter types. TypeScript can do both of those! We can use TypeScript's generic ReturnType type to get the return type. It takes a function type as its type parameter, then gives us the return type of that function.

```typescript
type StringFunction = () => string;
type OurReturnType = ReturnType<StringFunction>;
const hello: OurReturnType = 'hello';
hello;
// 'hello'
```


## Parameters

> TypeScript also provides a Parameters type. It takes a function type and gives us a tuple type back. (As a refresher, tuple types are arrays of fixed length.) Each tuple element is one of the function's parameter types, in the same order they were declared.

### **basic example**

```typescript
/* Note that DoubleFunction is a type, not a function. It doesn't double
 * numbers. Instead, it says "a function that doubles numbers will return
 * a number". */
type DoubleFunction = (n: number) => number;
type DoubleParameters = Parameters<DoubleFunction>;
const args: DoubleParameters = [5];
args;
```
- `DoubleFunction` is a [[Type]]
- `DoubleParameters` is a [[tuple]] containing the param types from `DoubleFunction`

### **example with error**

```typescript
type AddFunction = (x: number, y: number) => number;
type AddParameters = Parameters<AddFunction>;
const args: AddParameters = [1, 2, 3, 4, 5];
args;
// type error: Type '[number, number, number, number, number]' is not assignable to type // '[x: number, y: number]'.
// Source has 6 element(s) but target allows only 2.
```

- the `args` array needs to match the `Parameters` **tuple** array

> [!NOTE] individual param types
> We can index into tuple types to get the type of an individual tuple element. When using Parameters, that lets us get the type of just one function argument.

---

## Typescript definition

This is the definition of the `ReturnType` type in TS

```typescript
type ReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : any;
```