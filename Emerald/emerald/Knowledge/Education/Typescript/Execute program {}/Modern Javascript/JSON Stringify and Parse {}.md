---
aliases: 
banner_icon: 🗾
banner: "json"
tags:
  - json
---
#json
#parse
#stringify
#toJSON
#javascript 

## reverse

```js
JSON.parse(JSON.stringify({name: 'Amir'}))
//=
{name: 'Amir'}
```

```js
JSON.parse(JSON.stringify([true, null]))
// [true,null]
```

### undefined special case
- @ [[undefined]]  will be `converted` to [[null]]

## circular refs

> [!error] **JSON** doesn't support circular refs

```js
const circularObject = {}
circularObject.someKey = circularObject
JSON.stringify(circularObject)
```
- ! **ERROR**

## custom `toJSON` function

```js
const user = {
  name: 'Amir',
  toJSON: () => 'This is Amir!'
};
JSON.parse(JSON.stringify(user));
'This is Amir!'
```

> [!bookmark] keep in mind that
> The `toJSON` function isn't responsible for actually converting to [[JSON]]; `stringify` will still do that part. Instead, `toJSON` **returns a new JavaScript value** to be `serialized` **in place of the original**.

Next: [[Property Order]]
