Prev: [[Spread]]

## intro

> Normally, defining a function automatically assigns it to a variable. If we declare a function five(), we can use the [[variable]] `five` to refer to our function.

## name
> Functions declared like this have a name property. As you might expect, the name of a function five() is the string 'five'.

```js
function five() { return 5; }
five.name;
'five'
```

## anonymous functions
> Functions don't have to have names, though. If a function is created without a name, its name will be the empty string, ''. These are called "anonymous" functions.

```js
(
  function() { return 5; }
).name;
''
```

> [!bookmark] assigning to a variable
> If we immediately assign an `anonymous` function to a `variable`, that variable's **name** will become the function's **name**. (Functions created like this are still called "anonymous" because there's no name specified in the function() { ... } `definition`.)

## arrow functions ⤴
> Arrow function syntax doesn't give us any place to specify the function's **name**. As a result, arrow functions are always anonymous. However, like normal functions, <mark style="background: #FFF3A3A6;">they do get a name </mark>if they're `assigned` directly to a [[variable]].

```js
const one = () => 1;
one.name;
'one'
```
