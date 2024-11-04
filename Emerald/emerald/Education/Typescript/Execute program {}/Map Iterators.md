---
sticker: lucide//map
---
Maps have .keys and .values methods. The keys and values come out in their original insertion order. This is nice, and not all languages' map types support this!

```js
const catAges = new Map([
  ['Ms. Fluff', 4],
  ['Keanu', 2],
]);
Array.from(catAges.keys());

```

## destructure

```js
const [, secondUser] = emails;
secondUser;
['Betty', 'betty@example.com']
```

```js
const [, [name, email]] = emails;
`The email for ${name} is ${email}`;
''
```

## iterables as input

```js
function* users() {
  yield ['Amir', 'amir@example.com'];
  yield ['Betty', 'betty@example.com'];
}
const userMap = new Map(users());
userMap.get('Betty');
''
```

<mark style="background: #BBFABBA6;">a map can be construced from any </mark> [[iterable]]

## maps are iterables

<mark style="background: #FFF3A3A6;"> Maps themselves are iterable. That's why we were able to do Array.from(someMap) in code examples earlier in this lesson: the Array.from method uses the iteration protocols to iterate over the map's contents.</mark>

### map from a map
```js
const emails = new Map([['Amir', 'amir@example.com']]);

const emails2 = new Map(emails);
Array.from(emails2);
```

## key duplicates

```js
function* manyDuplicates() {
  for (let i=0; i<10000; i++) {
    // Yield entries of [number, isEven]
    yield [1, false];
    yield [2, true];
    yield [3, false];
  }
}
const map = new Map(manyDuplicates())
Array.from(map)
[[1, false], [2, true], [3, false]]
```

<mark class='important'>Only 3 items are stored in the final map</mark>

### Explanation

The Map constructor fetched each of the 30,000 entries from the iterator **one at a time**. But remember that a generator never builds a full list of its contents. Instead, its iterator gives us<mark style="background: #ABF7F7A6;"> one value via yield</mark>, then **pauses** the `generator` function, **waiting** for us to request the next value. <mark style="background: #FFF3A3A6;">At any given time, only one of the values actually exists in memory</mark>.

## remember

We can avoid loading all of the records at once by "`streaming`" them from the disk with a [[generator]] or some other type of [[iterator]]. As a generous estimate, we might use 100 kilobytes of memory to do that streaming, working with <mark style="background: #FFB86CA6;">only one record in memory </mark>at a time. That's about 0.00001% of the memory that we'd use if we tried to load them all at once!
