---
aliases:
  - Set
tags:
  - set
  - data-type
start date: 2024-08-08
finished: true
---
## Intro
Recent versions of JavaScript have added a [[Set]] data type. Sets are collections that hold elements, in the same way that arrays do. The main difference is that a set can only contain one copy of any given element.
[js Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

---

### About Sets in General

```typescript
const s = new Set([1, 2, 3]);
s.has(1);
```

**adding elements**
```typescript
const s = new Set([1, 2, 3]);
s.add(4);
s.has(4);
```
### Example in Typescript

```typescript
function setIsEmpty<T>(set: Set<T>/* add set type here */): boolean {
  return set.size === 0;
}
[
  setIsEmpty(new Set(['a'])),
  setIsEmpty(new Set([1, 2, 3])),
  setIsEmpty(new Set([])),
];
```

## methods on sets

### difference

The difference() method of Set instances takes a set and returns a new set containing elements in this set but not in the given(other) set.

![diff|150](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference/diagram.svg)

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
```

### intersection
![|150](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection/diagram.svg)

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
```

### symmetricDifference

The symmetricDifference() method of Set instances takes a set and returns a new set containing elements which are in either this set or the given set, but not in both.

![|200](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference/diagram.svg)

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }

```

### union

![|200](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union/diagram.svg)

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) 
{ 2, 4, 6, 8, 1, 9 }
```

### isSubsetOf

### isSupersetOf