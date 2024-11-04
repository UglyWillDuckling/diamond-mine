## size
```js
const emails = new Map();
emails.set('Betty', 'betty.j@example.com');
emails.size; 1
```

## clear
```js
const emails = new Map();
emails.set('Cindy', 'cindy@example.com');
emails.clear();
emails.set('Dalili', 'dalili@example.com');
[emails.has('Cindy'), emails.has('Dalili')];
```

## example

```js
class SocialGraph {
  constructor() {
    this.map = new Map();
  }

  addFollow(follower, followed) {
    if (!this.map.has(followed)) {
      this.map.set(followed, []);
    }
    this.map.get(followed).push(follower);
  }

  follows(follower, followed) {
    if (!this.map.has(followed)) {
      return false;
    } else {
      return this.map.get(followed).includes(follower);
    }
  }
}
```


[[Map Iterators]]