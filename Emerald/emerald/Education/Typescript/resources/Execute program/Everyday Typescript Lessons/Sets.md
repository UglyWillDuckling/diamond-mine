---
aliases:
  - Set
tags:
  - set
  - data-type
complexity:
  - low
finished: false
start date: 2024-08-08
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
