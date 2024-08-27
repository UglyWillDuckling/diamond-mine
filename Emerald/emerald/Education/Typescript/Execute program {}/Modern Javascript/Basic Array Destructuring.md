## basics

```js
const letters = ['a', 'b', 'c', 'd'];
const [a, b, c] = letters;
[a, b, c];
```

> This feature is called "destructuring". An array has some structure: certain values at certain indexes. We use destructuring syntax to unpack that structure and access the individual pieces. We "de-structure" the array.


## default values
```js
const letters = ['a', 'b', 'c'];
const [a, b, c, d='dee'] = letters;
[c, d];
// ['c', 'dee']
```

## sparse

> We can skip array indexes by leaving them out of the destructuring syntax entirely.

```js
const letters = ['a', 'b', 'c', 'd'];
const [a, , c] = letters;
[a, c];
// ['a', 'c']
```

## spread

```js
const names = ['Amir', 'Betty', 'Cindy', 'Dalili'];
const [firstUser, secondUser, ...otherUsers] = names;
