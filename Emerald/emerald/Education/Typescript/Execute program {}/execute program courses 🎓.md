[execute ](https://www.executeprogram.com/courses)

---
## Courses

- [[EveryDay Typescript]] - the most common everyday uses of [[typescript]]
	* [[Optional Chaining]] 
	* [[quiz]]

---
## By Day

### [[2024-07-25]]
**review** [[EveryDay Typescript]]

### [[2024-07-30]]

**review** [[EveryDay Typescript]]

- What follows next is a structured outline of courses and specific topics you're planning to cover, including a review of "EveryDay Typescript" on July 25th and 30th. This shows a clear plan for learning and reviewing the material.

**Discriminated Unions**
```typescript
type StartedCourse = {
  started: true
  lastInteractionTime: Date
};
type UnstartedCourse = {
  started: false
};
type Course = StartedCourse | UnstartedCourse;

const course: Course = {
  started: true,
  lastInteractionTime: new Date(2000, 1, 1)
};
course.lastInteractionTime.getFullYear();
```

this code **works** even though `Course` doesn't necessarily have the last interaction time property. The reason is that additoinaly type information is `inferred`.
### [[2024-07-31]]
#### reviews
- Tuples - *arrays of fixed length*
#### tuples
TypeScript supports tuples, which are arrays of fixed length. For example, [number, number] is a tuple of two numbers. It must be exactly two numbers; not one and not three. If the length doesn't match, it's a type error.

```typescript
let numberAndString: [number, string] = [1, 'a'];
numberAndString[1];
// 'a'
```

**<mark style="background: #FF5582A6;">error</mark>**
```typescript
let numberAndString: [number, string] = [1, 2];
numberAndString[1];
// type error: Type 'number' is not assignable to type 'string'.
```

- ! an important list item is here
- @ a less important item in the list 

### [[2024-08-06]]

#### reviews today

[[#Discriminated Unions]]
-  Discriminated Unions
- [[#Optional Chaining]]
- Nullish Coalescing
- [[#Index Signatures]]
##### Discriminated Unions

```typescript
type StartedCourse = {
  started: true
  lastInteractionTime: Date
};
type UnstartedCourse = {
  started: false
};
type Course = StartedCourse | UnstartedCourse;
```

> Why is it called a discriminated union? First, it's the union of two types: StartedCourse and UnstartedCourse. Second, the boolean flag started <mark style="background: #BBFABBA6;">discriminates</mark> between the two types; it's the <mark style="background: #ABF7F7A6;">discriminator</mark>. If started is true, then it's a StartedCourse; **otherwise**, it's an UnstartedCourse.

##### Optional Chaining

```typescript
type Cat = {name: string, age: number};
function getCat(): Cat | null {
  return null;
}
getCat()?.age;
type Cat = {name: string, age: number};
function getCat(): Cat | null {
  return null;
}
getCat()?.age;
```

```typescript
users.map(user => user.address?.postalCode);
// use only the users that have an address
// result: [22222, undefined, undefined]
```

##### Nullish Coalescing

```typescript
false ?? [2]
// false
```

> Here's a summary of ??'s behavior:

```typescript
1 ?? 'default' === 1
0 ?? 'default' === 0
'a' ?? 'default' === 'a'
'' ?? 'default' === ''
**null** ?? 'default' === 'default'
undefined ?? 'default' === 'default'
```

**numberOrOne**
```typescript
function numberOrOne(n: number | undefined): number {
  return n ?? 1;
}
[numberOrOne(3), numberOrOne(undefined), numberOrOne(0)];
// [3,1,0]
```

> The **??** operator isn't a boolean operator like ||; it's only used for checking **null** and **undefined**. If we run false ?? a, we'll get the false back, because false isn't null or undefined!

##### Index Signatures ✍
note [[Index Signatures]]

We can also create objects with computed keys. To do that, we wrap the key in square brackets, like {[someVariable]: 1}:

```typescript
const name = 'Amir';

const loginCounts = {[name]: 5};

loginCounts.Amir;
//
const loginCounts = {['Be' + 'tty']: 7};
loginCounts.Betty;
```

> **Index signatures' key types must be strings or numbers**

```typescript
const strings: {[index: number]: string} = ['a', 'b', 'c'];
strings[0];
// 'a'
```

**mixing signatures**
```typescript
// Amir must be defined
type LoginCounts = {
  [userName: string]: number
  Amir: number
};
const loginCounts: LoginCounts = {
  Amir: 5,
  Betty: 7,
};
loginCounts;
// {Amir: 5, Betty: 7}
```

```typescript
type UserEmails = {[name: string]: string};
const userEmails: UserEmails = {Amir: 'amir@example.com'};
userEmails.Betty;
// undefined
```

> This code is wrong, but unfortunately it's allowed by the compiler.
