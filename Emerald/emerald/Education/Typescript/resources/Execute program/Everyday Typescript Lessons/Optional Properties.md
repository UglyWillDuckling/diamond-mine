We often work with optional properties in objects. For example, our user records might have phone numbers and various address properties, but only for some users. We can model those properties with a union type like `string | undefined`.

```typescript
type User = {
  name: string
  phoneNumber: string | undefined
  address: string | undefined
  postalCode: string | undefined
  country: string | undefined
}
```
---

	we have to provide a value for each property

Another way to do it is to define the prop with a **question mark**(?). This will 

```typescript
type User = {
  name: string
  phoneNumber?: string
  address?: string
  postalCode?: string
  country?: string
}

const amir: User = {
  name: 'Amir',
}

amir.postalCode // undefined
```
