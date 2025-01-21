
## literal types

```ts
type HttpMethod = 'GET' | 'POST';
const method: HttpMethod = 'GET';
method;
```

## switching to enums

```ts
enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
}
const method: HttpMethod = HttpMethod.Post;
method;
// 'POST'
```

> Enums values aren't limited to strings. In fact, if we leave off the enum's values, TypeScript will automatically give them **<mark style="background: #BBFABBA6;">number</mark>** values, starting with 0:

```ts
enum HttpMethod { Get, Post }
const method: HttpMethod = HttpMethod.Get;
method;
// 0
```


### incrementing values

> Enums have a surprising number of features. For example, we can give one of the members an explicit number value, and the rest of the members will automatically increase from there.

```ts
enum HttpMethod { Get = 10, Post }
const method: HttpMethod = HttpMethod.Post;
method;
// 11
```

### cannot use values directly

> When referencing enum values, we're forced to use their symbolic names, like HttpMethod.Post above. Unlike union types, we're not allowed to directly use the literal value.

```ts
enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
}
const method: HttpMethod = 'POST';
method;
// type error: Type '"POST"' is not assignable to type 'HttpMethod'.
```

> That might seem like an artificial restriction. At runtime, the variable will hold 'POST', so why not let us assign that value? The reason is that enum member names serve as the "single source of truth" about which values are allowed, which is intended to help with long-term code maintenance. Let's examine the argument in favor of enums, then we'll see why they don't help as much as we'd like.

## a case for enums

> Suppose that we eventually need to replace the string 'POST' with 'post'. We change the enum's value to 'post' and we're done! Other code in the system only references the enum member via HttpMethod.Post, and that enum member still exists.

> Now imagine the same change with a type union instead of an enum. We define the union 'GET' | 'POST', then later we decide to change it to 'get' | 'post'. Because we used a union type instead of a catch-all string type, any code that tries to use 'GET' or 'POST' as an HttpMethod is now a type error.

```ts
type HttpMethod = 'get' | 'POST';
const method: HttpMethod = 'GET';
method;
// type error
```

### conclusion

> This is the main practical difference between enums and unions. When an enum member's value changes, we don't have to change any other code. With a union, we might have to update the value in many places. This is a benefit of enums, <mark style="background: #FFF3A3A6;">but a very minor one</mark>. Types like these <mark style="background: #ABF7F7A6;">don't change very often</mark>, and it's easy to update union values by following the type errors. The code maintenance argument for enums isn't very strong.

## enum implementation

> If the compiler simply removed the enum types from our code examples above, we'd still be left with code that references HttpMethod.Post. That's an error: HttpMethod and HttpMethod.Post were parts of a type, so they should be removed when TypeScript generates JavaScript code. But how can we reference HttpMethod.Post if the compiler deleted it?

### TS solution

> TypeScript's solution is to break its own rule in this case. When compiling an enum, the compiler adds extra JavaScript code that never existed in the original TypeScript code. There are very few TypeScript features like this. Each of these unusual features adds a confusing complication to the otherwise simple TypeScript compiler model.

## recommendation

> <mark style="background: #FFB86CA6;">We recommend avoiding enums for two reasons</mark>. 
> **First**, enums break TypeScript's core "type-level extension" rule, complicating our mental model of the language. 
> **Second**, unions can do the same thing as enums, allowing only a certain set of literal types, with no major drawbacks. However, it's still good to have a basic familiarity with enums because they're sometimes used in real-world code, especially in older TypeScript codebases.
