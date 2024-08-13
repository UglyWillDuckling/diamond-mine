## Intro

JavaScript has a **for...in** loop that can iterate over object keys (not values), arrays, and strings.

In contrast to this, the **for..of ** loop allows us to access values instead

---
## main

### for..in example

```typescript
const obj = {
  'a': 1,
  'b': 2,
};
const keys = [];
for (const key in obj) {
  keys.push(key);
}
keys
// ['a', 'b']
```


#### sparse arrays
...or the complete breakdown of **for..in**

> JavaScript arrays can be "sparse": they can have elements missing. Suppose that we create an empty array (const numbers = []) and insert a value at index 3 (numbers[3] = 'a'). In most languages (Java, Python), that's an error. Some languages (Ruby) implicitly fill indexes 0 through 2 with null, nil, or whatever other "not-a-value" value the language has.

> [!NOTEj] javascript weird
> JavaScript does neither of those! That array has a value at index 3, but it has nothing at indexes 0, 1, or 2. This is an important point: the values at indexes 0-2 aren't undefined or null. The array doesn't have anything there at all.

```javascript
const letters = [];
letters[3] = 'a';
const keys = [];
for (const key in letters) {
  keys.push(key);
}
keys;
```

### for..of
very similiar to the way 'for-each' loops work..

```js
const letters = ['a', 'b', 'c'];
const result = [];
for (const letter of letters) {
  result.push(letter);
}
result;
// ['a', 'b', 'c']
```

#### sparse array revisited 🏖
- for..of gives us back <mark style="background: #ABF7F7A6;">values</mark>
- for each <mark style="background: #FFB8EBA6;">missing</mark> element of the array, `for..of` gives us `undefined`

```js
const numbers = [];
numbers[3] = 'a';
const result = [];
for (const n of numbers) {
  result.push(n);
}
result;
// [undefined, undefined, undefined, 'a']
```

#### string iteration 🧵

```js
const s = 'loop';
const chars = [];
for (const char of s) {
  chars.push(char);
}
chars;
// ['l', 'o', 'o', 'p']
```


