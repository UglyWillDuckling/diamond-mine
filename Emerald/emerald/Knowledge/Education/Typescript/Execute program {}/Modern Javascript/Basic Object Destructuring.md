#destructuring
#objects 
#javascript 

[[Basic Array Destructuring]]

# Intro
We can also destructure objects. In arrays, our variable values are matched up with array indexes in the order the variables were declared. For objects, we can pick out specific properties by matching up their names.

---
# Lesson

## examples

```js
const user = {name: 'Amir', email: 'amir@example.com', age: 36};
const {name, age} = user;
[name, age];
// ['Amir', 36]
```

### order of elements

> Unlike array elements, object properties aren't ordered, so we can destructure in any order.
```js
const user = {name: 'Amir', email: 'amir@example.com', age: 36};
const {age, name} = user;
[name, age];
// ['Amir', 36]
```

### when null
> destructuring null will throw an error

```js
const {name} = null;
```

### when doesn't exist
> If the property doesn't exist in the object, we'll get undefined.

```js
const user = {name: 'Amir', email: 'amir@example.com', age: 36};
const {loginCount} = user;
loginCount;
// undefined
```

#### with default

```js
const user = {name: 'Amir', email: 'amir@example.com'};
const {loginCount=0} = user;
loginCount;
// 0
const user = {name: 'Amir', email: 'amir@example.com', age: 36, loginCount: 17};
const {loginCount=0} = user;
loginCount;
// 17
```

### collecting the rest of the props

> We can collect the rest of the properties with ..., which will give us an object with every property that wasn't matched explicitly. In the next example, ...rest will give us an object with the email property and its value.

```js
const user = {name: 'Amir', email: 'amir@example.com'};
const {name, ...rest} = user;
rest;
// {email: 'amir@example.com'}
```

### task
#### definition
Use a single object destructuring operation to:
- Extract the user's name into the name variable.
- Put all of the other properties and their values into a rest variable.

#### solution
```js
const user = {name: 'Amir', email: 'amir@example.com', age: 36};
const {name, ...rest} = user
const nameAndRest = [name, rest];
['Amir', {email: 'amir@example.com', age: 36}]
```


### different name

When necessary, we can destructure a property into a variable with a different name. We separate the object <mark style="background: #FFB86CA6;">property</mark> and the <mark style="background: #ABF7F7A6;">variable name</mark> with a `:`

```js
// map name -> userName
const {name: userName} = {name: 'Amir', email: 'amir@example.com'};
userName;
'Amir'
```

### when name is unknown

Similiar to [[Computed Properties]]

```js
const key = 'name';
const {[key]: value} = {name: 'Amir'};
value;
// 'Amir'
```

> The value of [key] is computed at runtime by looking at the variable key. As we saw in an earlier lesson on computed properties, we use [square brackets] when we want a **computed property** name.

#### expressions

> As with regular computed properties, we can put any expression inside the [square brackets]. It can contain function calls, mathematical operators, etc.


```js
const key = 'NaMe';
const {[key.toLowerCase()]: value} = {name: 'Amir'};
value;
// 'Amir'
```

#### with getters

Destructuring also works with getters. If an object's property is a getter, we can destructure it as usual. We'll get the value returned by the getter.

```js
const user = {
  get name() {
    return 'Be' + 'tty'
  }
}
const {name} = user
name

'Betty'
```
