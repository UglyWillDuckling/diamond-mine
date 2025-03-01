
### intro
 Now we can optionally change expressions based on a condition...

 ---

### start

```typescript
type User = {
  name: string
  address: Address | undefined
};
type Address = {
  city: string
  postalCode: string | undefined
}
```

### summary 
Optional chaining adds a new ?. operator. Don't be intimidated by the unusual combination of characters! Although ?. is a distinct operator, you can think of it as: if someObject? then .property.

For ==someObject==?.property, ?. checks whether the object is null or undefined. If it is, the expression returns undefined. If it’s not, it returns the value of someObject.property.

Here's another way to think about it. When compiling someObject?.property, the compiler will check: (someObject === null || someObject === undefined) ? undefined : someObject.property.


> [!MARK] chaining
> 
```typescript
users.map(user => user.address?.postalCode);
```

<mark style="background: #FFB86CA6;">Typescript</mark> will still make sure we are using valida types at all times so something like this, an assignment to a `string[]`
will not work.
```typescript
const postalCodes: Array<string> = users.map(user => user?.address?.postalCode)
```
*<mark style="background: #FFB8EBA6;">this cannot work as the array can end up containing  values that are undefined</mark>*
