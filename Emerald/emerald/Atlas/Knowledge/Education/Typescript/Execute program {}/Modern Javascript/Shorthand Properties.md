
## intro

Object keys often refer to variables with the same name.


---

## before

```js
const name = 'Amir';
const catName = 'Ms. Fluff';
const city = 'Paris';
const age = 36;

const user = {
  name: name,
  catName: catName,
  city: city,
  age: age,
};
[user.name, user.age];
// ['Amir', 36]
```


## modern

```js
const name = 'Amir';
const catName = 'Ms. Fluff';
const city = 'Paris';
const age = 36;
const user = {name, catName, city, age};
[user.name, user.age];
//
```

