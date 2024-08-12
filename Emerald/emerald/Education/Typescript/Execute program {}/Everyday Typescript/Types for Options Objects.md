## Intro / context

Sometimes a function needs to take many different optional parameters. We could write a function with 9 optional parameters, but calling it would be very cumbersome and error prone. (Is retries the 7th or the 8th parameter? Don't forget to pass undefined for parameters 1 through 6 since you don't need them!)

JavaScript and TypeScript functions often solve this by taking "options parameters". This is a technique where we pack the extra parameters up into an object, then pass the object to the function.

This lesson shows a few different ways to statically type options parameters. We don't introduce any new TypeScript features. Instead, we combine several features that we've already seen. 

---

## Working example

> Our example is a `sendEmail` function that takes two configurable options.

The first option is: do we want link tracking or not? "Link tracking" means that our email provider replaces all of the links in the email automatically. That lets us see what percentage of users clicked the links.

The second option is: how many times should we retry if there's a network error? Networks inevitably fail, and some third-party services are more stable than others. The simplest workaround for network failures is a retry.

Our function accepts those two options via an opts parameter, which is an object with tracking and retries properties. The most obvious type for this object is `{tracking: boolean, retries: number}.`

### version 1

```typescript
function sendEmail(to: string, opts: {tracking: boolean, retries: number}) {
  return `Emailing ${to}, tracking=${opts.tracking}, retries=${opts.retries}`;
}
sendEmail('amir@example.com', {tracking: true, retries: 3});
// 'Emailing amir@example.com, tracking=true, retries=3'
```

> this works well, but we **can't** leave out the opts param

### version 2

```typescript
function sendEmail(
  to: string,
  opts: {
    tracking: boolean
    retries: number
  } = {
    tracking: true,
    retries: 3,
  }
) {
  return `Emailing ${to}, tracking=${opts.tracking}, retries=${opts.retries}`;
}
sendEmail('amir@example.com');
// 'Emailing amir@example.com, tracking=true, retries=3'
```

> better, but with this version we can **only** leave out opts entirely or pass it in as a whole


### version 3 - optional object props

```typescript
/* Callers can specify none, some, or all of `opts`. We'll use default
values for any options that are missing. */
function sendEmail(
  to: string,
  opts: {
    tracking?: boolean
    retries?: number
  } = {}
) {
  const tracking = opts.tracking ?? true;
  const retries = opts.retries ?? 3;
  return `Emailing ${to}, tracking=${tracking}, retries=${retries}`;
}
sendEmail('amir@example.com');
// 'Emailing amir@example.com, tracking=true, retries=3'
sendEmail('amir@example.com', {tracking: false}); // override the default
// 'Emailing amir@example.com, tracking=false, retries=3'
```


### version 4 - with desctructuring

```typescript
function sendEmail(
  to: string,
  {
    tracking = true,
    retries = 3,
  }: {
    tracking?: boolean
    retries?: number
  } = {}
) {
  return `Emailing ${to}, tracking=${tracking}, retries=${retries}`;
}
sendEmail('amir@example.com', {retries: 0});
// 'Emailing amir@example.com, tracking=true, retries=0'
```

### version 4 - custom type

```typescript
type EmailOptions = {
  tracking?: boolean
  retries?: number
};
function sendEmail(to: string, opts: EmailOptions = {}) {
  const tracking = opts.tracking ?? true;
  const retries = opts.retries ?? 3;
  return `Emailing ${to}, tracking=${tracking}, retries=${retries}`;
}
sendEmail('amir@example.com', {retries: 2});
// 'Emailing amir@example.com, tracking=true, retries=2'
```
