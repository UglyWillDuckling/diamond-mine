---
author:
  - "[[@kentcdodds]]"
created: 2025-03-07
source: https://kentcdodds.com/blog/typescript-function-syntaxes
tags:
  - howto/javascript
---

In **JavaScript** itself, there are lots of ways to write functions. Add TypeScript to the mix and all of a sudden it's a lot to think about. So with the help of [some](https://gist.github.com/kentcdodds/61176c067ec5250b5bd3c7fe57a0120d) [friends](https://x.com/kentcdodds/status/1365046763892084736), I've put together this list of various function forms you'll typically need/run into with simple examples.

Keep in mind that there are TONS of combinations of different syntaxes. I only include those which are less obvious combinations or unique in some way.

First, the biggest confusion I always have with the syntax of things is where to put the return type. When do I use `:` and when do I use `=>`. Here are a few quick examples that might help speed you up if you're using this post as a quick reference:

```ts
// Simple type for a function, use =>
type FnType = (arg: ArgType) => ReturnType
// Every other time, use :
type FnAsObjType = {
	(arg: ArgType): ReturnType
}
interface InterfaceWithFn {
	fn(arg: ArgType): ReturnType
}
const fnImplementation = (arg: ArgType): ReturnType => {
	/* implementation */
}
```

I think that was the biggest source of confusion for me. Having written this, now I know that the only time I use `=> ReturnType` is when I'm defining a function type as a type in itself. Any other time, use `: ReturnType`.

Continue reading for a bunch of examples of how this plays out in typical code examples.

## Function declarations
```ts
// inferred return type
function sum(a: number, b: number) {
	return a + b
}
```
```ts
// defined return type
function sum(a: number, b: number): number {
	return a + b
}
```

In the examples below, we'll be using explicit return types, but you technically don't have to specify this.

## Function Expression
```ts
// named function expression
const sum = function sum(a: number, b: number): number {
	return a + b
}
```
```ts
// annonymous function expression
const sum = function (a: number, b: number): number {
	return a + b
}
```
```ts
// arrow function
const sum = (a: number, b: number): number => {
	return a + b
}
```
```ts
// implicit return
const sum = (a: number, b: number): number => a + b
```
```ts
// implicit return of an object requires parentheses to disambiguate the curly braces
const sum = (a: number, b: number): { result: number } => ({ result: a + b })
```

You can also add a type annotation next to the variable, and then the function itself will assume those types:

```ts
const sum: (a: number, b: number) => number = (a, b) => a + b
```

And you can extract that type:

```ts
type MathFn = (a: number, b: number) => number
const sum: MathFn = (a, b) => a + b
```

Or you can use the object type syntax:

```ts
type MathFn = {
	(a: number, b: number): number
}
const sum: MathFn = (a, b) => a + b
```

Which can be useful if you want to add a typed property to the function:

```ts
type MathFn = {
	(a: number, b: number): number
	operator: string
}
const sum: MathFn = (a, b) => a + b
sum.operator = '+'
```

This can also be done with an interface:

```ts
interface MathFn {
	(a: number, b: number): number
	operator: string
}
const sum: MathFn = (a, b) => a + b
sum.operator = '+'
```

And then there's `declare function` and `declare namespace` which are intended to say: "Hey, there exist a variable with this name and type". We can use that to create the type and then use `typeof` to assign that type to our function. You'll often find `declare` used in `.d.ts` files to declare types for libraries.

```ts
declare function MathFn(a: number, b: number): number
declare namespace MathFn {
	let operator: '+'
}
const sum: typeof MathFn = (a, b) => a + b
sum.operator = '+'
```

Given the choice between `type`, `interface`, and `declare function`, I think I prefer `type` personally, unless I need the extensibility that `interface` offers. I'd only really use `declare` if I really *did* want to tell the compiler about something that it doesn't already know about (like a library).

## Optional/Default params

Optional parameter:

```ts
const sum = (a: number, b?: number): number => a + (b ?? 0)
```

Note that order matters here. If you make one parameter optional, all following parameters need to be optional as well. This is because it's possible to call `sum(1)` but not possible to call `sum(, 2)`. However, it *is* possible to call `sum(undefined, 2)` and if that's what you want to enable, then you can do that too:

```ts
const sum = (a: number | undefined, b: number): number => (a ?? 0) + b
```

**Default params**

When I was writing this, I thought it would be useless to use default params without making that param optional, but it turns out that when you have a default value, TypeScript treats it like an optional param. So this works:

```ts
const sum = (a: number, b: number = 0): number => a + b
sum(1) // results in 1
sum(2, undefined) // results in 2
```

So that example is functionally equivalent to:

```ts
const sum = (a: number, b: number | undefined = 0): number => a + b
```

TIL.

Interestingly, this also means that if you want the first argument to be optional but the second to be required, you can do that without using `| undefined`:

```ts
const sum = (a: number = 0, b: number): number => a + b
sum(undefined, 3) // results in 3
```

However, when you extract the type, you will need to add the `| undefined` manually, because `= 0` is a JavaScript expression, not a type.

```ts
type MathFn = (a: number | undefined, b: number) => number
const sum: MathFn = (a = 0, b) => a + b
```
## Rest params

Rest params is a JavaScript feature that allows you to collect the "rest" of the arguments of a function call into an array. You can use them at any parameter position (first, second, third, etc.). The only requirement is that it's the *last* parameter.

```ts
const sum = (a: number = 0, ...rest: Array<number>): number => {
	return rest.reduce((acc, n) => acc + n, a)
}
```

And you can extract the type:

```ts
type MathFn = (a?: number, ...rest: Array<number>) => number
const sum: MathFn = (a = 0, ...rest) => rest.reduce((acc, n) => acc + n, a)
```
## Object properties and Methods

Object method:

```ts
const math = {
	sum(a: number, b: number): number {
		return a + b
	},
}
```

Property as function expression:

```ts
const math = {
	sum: function sum(a: number, b: number): number {
		return a + b
	},
}
```

Property as arrow function expression (with implicit return):

```ts
const math = {
	sum: (a: number, b: number): number => a + b,
}
```

Unfortunately, to extract the type you can't type the function itself, you have to type the enclosing object. You can't annotate the function with a type by itself when it's defined within the object literal:

```ts
type MathFn = (a: number, b: number) => number
const math: { sum: MathFn } = {
	sum: (a, b) => a + b,
}
```

Furthermore, if you want to add a property on it like some of the above examples, that is impossible to do within the object literal. You have to extract the function definition completely:

```ts
type MathFn = {
	(a: number, b: number): number
	operator: string
}
const sum: MathFn = (a, b) => a + b
sum.operator = '+'
const math = { sum }
```

You may have noticed that this example is identical to an example above with only the addition of the `const math = {sum}`. So yeah, there's no way to do all this inline with the object declaration.

## Classes

Classes themselves are functions, but they're special (have to be invoked with `new`), but this section will talk about how functions are defined within the class body.

Here's a regular method, the most common form of a function in a class body:

```ts
class MathUtils {
	sum(a: number, b: number): number {
		return a + b
	}
}
const math = new MathUtils()
math.sum(1, 2)
```

You can also use a class field if you want the function to be bound to the specific instance of the class:

```ts
class MathUtils {
	sum = (a: number, b: number): number => {
		return a + b
	}
}
// doing things this way this allows you to do this:
const math = new MathUtils()
const sum = math.sum
sum(1, 2)
// but it also comes at a cost that offsets any perf gains you get
// by going with a class over a regular object factor so...
```

And then, you can extract these types. Here's what it looks like for the method version in the first example:

```ts
interface MathUtilsInterface {
	sum(a: number, b: number): number
}
class MathUtils implements MathUtilsInterface {
	sum(a: number, b: number): number {
		return a + b
	}
}
```

Interestingly, it looks like you still have to define the types for the function, even though those are a part of the interface it's supposed to implement 🤔 🤷‍♂️

One final note. In TypeScript, you also get `public`, `private`, and `protected`. I personally don't use classes all that often and I don't like using those particular TypeScript features. JavaScript will soon get special syntax for `private` members which is neat ([learn more](https://github.com/tc39/proposal-class-fields)).

## Modules

Importing and exporting function definitions works the same way as it does with anything else. Where things get unique for TypeScript is if you want to write a `.d.ts` file with a module declaration. Let's take our `sum` function for example:

```ts
const sum = (a: number, b: number): number => a + b
sum.operator = '+'
```

Here's what we'd do assuming we export it as the default:

```ts
declare const sum: {
	(a: number, b: number): number
	operator: string
}
export default sum
```

And if we want it to be a named export:

```ts
declare const sum: {
	(a: number, b: number): number
	operator: string
}
export { sum }
```
## Overloads

I've written about this especially and you can read that: [Define function overload types with TypeScript](https://kentcdodds.com/blog/define-function-overload-types-with-type-script). Here's the example from that post:

```ts
type asyncSumCb = (result: number) => void
// define all valid function signatures
function asyncSum(a: number, b: number): Promise<number>
function asyncSum(a: number, b: number, cb: asyncSumCb): void
// define the actual implementation
// notice cb is optional
// also notice that the return type is inferred, but it could be specified
// as \`void | Promise<number>\`
function asyncSum(a: number, b: number, cb?: asyncSumCb) {
	const result = a + b
	if (cb) return cb(result)
	else return Promise.resolve(result)
}
```

Basically what you do is define the function multiple times and only actually implement it the last time. It's important that the types for the implementation supports all the override types, which is why the `cb` is optional above\`.

## Generators

I've not once used a generator in production code... But when I played around with it a bit in the TypeScript playground there wasn't much to it for the simple case:

```ts
function* generator(start: number) {
	yield start + 1
	yield start + 2
}
var iterator = generator(0)
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: undefined, done: true }
```

TypeScript correctly infers that `iterator.next()` returns an object with the following type:

```ts
type IteratorNextType = {
	value: number | void
	done: boolean
}
```

If you want type safety for the `yield` expression completion value, add a type annotation to the variable you assign it to:

```ts
function* generator(start: number) {
	const newStart: number = yield start + 1
	yield newStart + 2
}
var iterator = generator(0)
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next(3)) // { value: 5, done: false }
console.log(iterator.next()) // { value: undefined, done: true }
```

And now if you try to call `iterator.next('3')` instead of the `iterator.next(3)` you'll get a compilation error 🎉

## Async

`async/await` functions in TypeScript work exactly the same as they do in JavaScript and the *only* difference in typing them is the return type will *always* be a `Promise` generic.

```ts
const sum = async (a: number, b: number): Promise<number> => a + b
```
```ts
async function sum(a: number, b: number): Promise<number> {
	return a + b
}
```
## Generics

With a function declaration:

```ts
function arrayify2<Type>(a: Type): Array<Type> {
	return [a]
}
```

Unfortunately, with an arrow function (when TypeScript is configured for JSX), the opening `<` of the function is ambiguous to the compiler. "Is that generic syntax? Or is that JSX?" So you have to add a little something to help it disambiguate it. I think the most straightforward thing to do is to have it `extends unknown`:

```ts
const arrayify = <Type extends unknown>(a: Type): Array<Type> => [a]
```

Which conveniently shows us the syntax for `extends` in generics, so there you go.

## Type Guards

A type guard is a mechanism for doing type narrowing. For example, it allows you to narrow something that is `string | number` down to either a `string` or a `number`. There are built-in mechanisms for this (like `typeof x === 'string'`), but you can make your own too. Here's one of my favorites (hat tip to [my friend Peter](https://x.com/aprillion0042) who originally showed this to me):

You have an array with some falsy values and you want those gone:

```ts
// Array<number | undefined>
const arrayWithFalsyValues = [1, undefined, 0, 2]
```

In regular JavaScript you can do:

```ts
// Array<number | undefined>
const arrayWithoutFalsyValues = arrayWithFalsyValues.filter(Boolean)
```

Unfortunately, TypeScript doesn't consider this a type narrowing guard, so the type is still `Array<number | undefined>` (no narrowing applied).

So we can write our own function and tell the compiler that it returns true/false for whether the given argument is a specific type. For us, we'll say that our function returns true if the given argument's type is not included in one of the falsy value types.

```ts
type FalsyType = false | null | undefined | '' | 0
function typedBoolean<ValueType>(
	value: ValueType,
): value is Exclude<ValueType, FalsyType> {
	return Boolean(value)
}
```

And with that we can do this:

```ts
// Array<number>
const arrayWithoutFalsyValues = arrayWithFalsyValues.filter(typedBoolean)
```

Woo!

## Assertion functions

You know how sometimes you do runtime checking to be extra-sure of something? Like, when an object can have a property with a value or `null` you want to check if it's `null` and maybe throw an error if it is `null`. Here's how you might do something like that:

```ts
type User = {
	name: string
	displayName: string | null
}
function logUserDisplayNameUpper(user: User) {
	if (!user.displayName) throw new Error('Oh no, user has no displayName')
	console.log(user.displayName.toUpperCase())
}
```

TypeScript is fine with `user.displayName.toUpperCase()` because the `if` statement is a type guard that it understands. Now, let's say you want to take that `if` check and put it in a function:

```ts
type User = {
	name: string
	displayName: string | null
}
function assertDisplayName(user: User) {
	if (!user.displayName) throw new Error('Oh no, user has no displayName')
}
function logUserDisplayName(user: User) {
	assertDisplayName(user)
	console.log(user.displayName.toUpperCase())
}
```

Now, TypeScript is no longer happy because the call to `assertDisplayName` isn't a sufficient type guard. I'd argue this is a limitation on TypeScript's part. Hey, no tech is perfect. Anyway, we can help TypeScript out a bit by telling it that our function makes an assertion:

```ts
type User = {
	name: string
	displayName: string | null
}
function assertDisplayName(
	user: User,
): asserts user is User & { displayName: string } {
	if (!user.displayName) throw new Error('Oh no, user has no displayName')
}
function logUserDisplayName(user: User) {
	assertDisplayName(user)
	console.log(user.displayName.toUpperCase())
}
```

And that's another way to turn our function into a type narrowing function!

## Conclusion

That's definitely not everything, but that's a lot of the common syntax I find myself writing when dealing with functions in TypeScript. I hope it was helpful to you! Bookmark this and share it with your friends 😘