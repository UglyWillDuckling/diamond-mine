The spread operator, ..., copies an existing object's properties into a new object. The new object also includes any new properties that we specify.

```typescript
const partialAmir = {name: 'Amir'};
const fullAmir = {...partialAmir, admin: true};
// {name: 'Amir', admin: true}
```

from the net
[javascripttutorial - spread](https://www.javascripttutorial.net/javascript-object-spread/)
