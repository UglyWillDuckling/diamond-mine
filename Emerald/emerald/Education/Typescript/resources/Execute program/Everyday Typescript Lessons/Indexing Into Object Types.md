---
aliases:
  - Indexing Object Types
  - Talking directly to Types
tags:
  - type
  - typescript
  - lesson
  - objects
  - indexing-objects
start date: 2024-08-08
complexity:
  - medium
finished: true
---
## Intro
Typescript allows you to index [[Type]]'s directly. 

> This feature is particularly useful when you need to define complex data structures or when you're working with large datasets. By directly indexing types, you can ensure that your data is structured correctly and that any errors are caught at compile-time rather than runtime.

```typescript
type Album = {
  name: string
  lengthMinutes: number
};

type AlbumName = Album['name'];

const albumName: AlbumName = 'Kind of Blue';
albumName;
// 'Kind of Blue'
```
> the `AlbumName` type is actually derived from `Album`

