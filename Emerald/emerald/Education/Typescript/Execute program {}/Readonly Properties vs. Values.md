#readonly
#props
#values

# Intro


## from before

```ts
type User = {
  name: string
  readonly catNames: string[]
};

const amir: User = {name: 'Amir', catNames: ['Ms. Fluff']};
amir.catNames = ['Keanu'];
amir;
// type error: Cannot assign to 'catNames' because it is a read-only property.
```

> We declared catNames as readonly catNames: string[]. That syntax may seem strange: why does readonly come before the property name? Shouldn't readonly be part of the type, on the right side of the colon like name: readonly string?

> [!check] reason
> There's subtle but important reason for this: the **readonly** is part of the User **object's type**, not part of the `catNames` array's type. The array is just a regular array!

 To understand how this works, let's look at three examples where a property is "read-only", but in a different way each time.

## making it truly readonly

First, we can make the object property read-only with the readonly catNames: string[] syntax. That stops us from replacing the catNames array with a different array. But the array itself still has the type string[], so it's still **mutable**! We can't replace the array, but we can call push on it.

```ts
type User = {
  name: string
  readonly catNames: string[]
};

const amir: User = {name: 'Amir', catNames: ['Ms. Fluff']};
```

```ts
amir.catNames = ['Keanu'];
amir.catNames;
// Error
```

```ts
amir.catNames.push('Keanu');
amir.catNames;
// ['Ms. Fluff', 'Keanu']
```

### second step

Second, we can make the array itself read-only by declaring it as a ReadonlyArray. That stops us from calling methods that would mutate the array, like push. However, the property no longer gets a readonly modifier, so we can replace the array with a different array.

```ts
type User = {
  name: string
  catNames: ReadonlyArray<string>
};

const amir: User = {name: 'Amir', catNames: ['Ms. Fluff']};
```

```ts
amir.catNames = ['Keanu'];
amir.catNames;
//['Keanu']
```

```ts
amir.catNames.push('Keanu');
amir.catNames;
// Type Error
```

### third step

Third, we can do both of these at once: we can make the property read-only, and also make the array inside it read-only. We can't call push or other mutating methods, and we can't replace the array with a different array. This is the strongest sense of "read-only".

```ts
type User = {
  name: string
  readonly catNames: ReadonlyArray<string>
};

const amir: User = {name: 'Amir', catNames: ['Ms. Fluff']};
```

- **not mutable**
- **not replacable**

## explanation

Our User type is a distinct object with its own rules about whether it can be mutated. Each of its properties can either be readonly or not. The array is also a distinct object that also has its own rules about whether it can be mutated. It can either be an Array or a **ReadonlyArray**.

