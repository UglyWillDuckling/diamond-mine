
## intro
JavaScript defines several symbols for us. These are used for metaprogramming, which means "changing the behavior of a program using code". Using these built-in symbols, we can modify how JavaScript runs our code. Here's one example:

```js
const anObject = {};
anObject.toString();
'[object Object]'
```

Why is the string '[object Object]'? The first "object" tells us that this is a string representation of an object. The second, capitalized "Object" refers to the object "tag", which we can customize.

When we call .toString() on an object, the JavaScript runtime looks for a property on that object named Symbol.toStringTag. If that property exists, the runtime replaces the "Object" tag in '[object Object]' with the property.

```js
const anObject = {};
anObject[Symbol.toStringTag] = 'myObject';
anObject.toString();
'[object myObject]'
```

> [!info] toString
> we can modify how toString works by defining the `[Symbol.toStringTag]` property

[[Symbol.iterator]]
