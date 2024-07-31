
[execute ](https://www.executeprogram.com/courses)

---
## Courses

- [[EveryDay Typescript]] - the most common everyday uses of [[typescript]]
	* [[Optional Chaining]] 
	* [[quiz]]

---

### By Day

[[2024-07-25]]
**review** [[EveryDay Typescript]]

[[2024-07-30]]

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

[[2024-07-31]]
### reviews
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

