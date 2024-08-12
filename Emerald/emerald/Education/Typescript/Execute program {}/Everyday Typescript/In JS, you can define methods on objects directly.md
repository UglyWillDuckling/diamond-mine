

```typescript
interface Cat {
  meow(): string
}

const cat: Cat = {
  meow: () => 'nyan',
};
cat.meow();
// 'nyan'
```