
Functions declare what parameters they take, which in turn tell us what arguments, or inputs, we can pass to them. JavaScript's function parameters are quite flexible:

We can specify default parameter values.
When calling a function, we can pass fewer arguments than the function expects, effectively treating them as "optional parameters".
We can pass different numbers of arguments when calling a function from different places.
TypeScript adds static type checking for all of these features.

---

### optional params

```typescript
function add(x: number, y?: number) {
  return x + (y ?? 1);
}
[add(3, 4), add(3)];
```

> Optional parameters must be declared after required parameters. If we put an optional parameter before a required one, we get a very specific type error message.

### default values

JavaScript and TypeScript also support default values directly. We can add a default value by putting = someValue directly inside the function definition. If we call the function without specifying the parameter, it gets the default value. (Remember, if we don't specify an optional parameter, param?, it gets undefined.)

```typescript
function add(x: number, y: number = 1) {
  return x + y;
}
[add(10, 20), add(30)];
// [30, 31]
```

### rest params ...

> JavaScript and TypeScript also support "rest parameters", which allow us to pass as many arguments as we want to our function. We declare them by putting ...someParameterName in the function definition.

```typescript
function add(...numbers: number[]) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}

[add(), add(1, 2), add(100, 200, 300)];
// [0, 3, 600]
```

> Since rest parameters are collected into an array, the type must always be an array. Anything else is a type error, with a very specific error message.

```typescript
function add(...numbers: number) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}
// type error: A rest parameter must be of an array type.
```

> Sometimes we want a rest parameter that allows multiple types of rest arguments, like f(1, '2'). In that case we can use an array of a union type, like Array<number | string>

```typescript
function maximum(...numbers: Array<number | undefined>) {
  let max = -Infinity;
  for (const n of numbers) {
    if (n !== undefined && n > max) {
      max = n;
    }
  }
  return max;
}
```

---

We've seen three function parameter features in this lesson: optional parameters, default parameters, and rest parameters. So far, we've only used them directly inside of function definitions. But optional and rest parameters are also allowed inside of function types.

```typescript
type AddFunction = (x: number, y?: number) => number;

const add: AddFunction = (x, y) => {
  return x + (y ?? 1);
};
[add(3, 4), add(3)];
// [7, 4]
```

```typescript
type AddFunction = (...numbers: number[]) => number;


const add: AddFunction = (...numbers) => {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
};

[add(), add(1, 2), add(100, 200, 300)];
```