Most programming languages provide the three most common operations: union, intersection, and difference. These operations have been added to JavaScript, but they're not widely-supported yet.

It's OK if these operations aren't familiar. In this lesson we'll define and implement them ourselves.

First: we sometimes want to find a set union, which is every element that's in either set1 or set2. The closest array equivalent is concat, which merges two or more arrays:

## true set union

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const unionSet = new Set([...set1, ...set2]);
[unionSet.has(1), unionSet.has(4)];
```

<mark class='important'>Remember, when we create a set from an array with duplicate values, the duplicates are removed.</mark>

### task

- 'a **Implement** a general-purpose setUnion function that returns the union of two sets.

```js
function setUnion(set1,set2) {
  return new Set([...set1, ...set2]);
}
```

- ~ note the usage of [[Spread]] to turn the two [[Sets]] into arrays

## set difference

<mark style="background: #FFF3A3A6;">⛏ Implement a general-purpose setDifference function that returns the difference of two sets.</mark>

- [i] **Remember** that `set difference` means **all items** that **are** in the <mark style="background: #FFB8EBA6;">first</mark> set, but **aren't** in the <mark style="background: #ADCCFFA6;">second</mark> set.

### solution
```js
function setDifference(set1, set2) {
  const differenceSet = new Set(
	  Array.from(set1).filter(n => !set2.has(n))
	)
  return differenceSet
}
```

📑 note the usage of `Array.from` to turn the set into an `array`
