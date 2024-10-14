#symbol 
[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
## limitation

Most **JavaScript** data types can't be used as object keys. For example, if we try to use true as a key, it gets converted into the string 'true'.

modern versions of javaScript have **alleviated** this **limitation** by adding symbols. Symbols are a **new data type** that can be used in object keys. We'll begin by exploring the basics of how symbols work, then move on to using them as `keys`.

## creation

We can define a symbol by giving it a description: Symbol('name') or Symbol('dataIsSynced'). The description should say what the symbol is used for.

```js
Symbol('name').description;
'name'
```

## equality

```js
const horseSymbol = Symbol('horse');
horseSymbol == horseSymbol; true
```
### arrays
- ! two different arrays are **never** equal to each other

```js
['cat'] == ['cat']; false
['dog'] === ['dog']; false
```

### with symbols
- @ The same goes for symbols

```js
const symbol1 = Symbol('cat');
const symbol2 = Symbol('cat');
[symbol1 === symbol1, symbol1 === symbol2, symbol2 === symbol2];
[true, false, true]
```

## usage

```js
const nameSymbol = Symbol('name');
const obj = {
  nameSymbol: 1
};
Object.keys(obj);
['nameSymbol']
```

```js
const nameString = 'name';
const nameSymbol = Symbol('name');
const user = {
  [nameString]: 'Amir',
  [nameSymbol]: 'Betty'
};
[user['name'], user[nameSymbol]]
['Amir', 'Betty']
```

> [!bookmark] Take note
> The example above hints at why symbols exist. They allow us to add properties to objects without affecting the "normal" properties. We'll see examples of that in future lessons.

Next: [[Builtin Symbols]]