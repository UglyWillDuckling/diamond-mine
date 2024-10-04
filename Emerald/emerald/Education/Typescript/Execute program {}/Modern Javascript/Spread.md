We can also use ... when constructing an array. In this case, ... means "include one array's elements in another array".

```js
const numbers = [
  1,
  ...[2, 3],
  4,
];
numbers;
[1, 2, 3, 4]
```

## replace `concat`

```js
const nonAdmins = [
  {name: 'Amir'},
];
const admins = [
  {name: 'Betty'},
];
const allUsers = [...nonAdmins, ...admins];
allUsers.map(user => user.name);
['Amir', 'Betty']
```

## with objects

> Spreading also works with objects. There, it means "include all of that object's properties in this object".

```js
const amir = {
  name: 'Amir',
  age: 36,
};
const amirWithEmail = {
  ...amir,
  email: 'amir@example.com'
};
amirWithEmail === {name: 'Amir', age: 36, email: 'amir@example.com'}
```

> [!first-callout-ever] new from old
> This is often used to create a **new** object from an **existing** object, but with **some properties** changed. We spread the original object, then specify the properties that we want to overwrite.

```js
const loggedOutUser = {
  name: 'Amir',
  loggedIn: false,
};
const loggedInUser = {
  ...loggedOutUser,
  loggedIn: true,
};
loggedInUser
// {name: 'Amir', loggedIn: true}
```

Next: [[Function Name Property]]