for usage examples, see [[meetings.base]]

- [x] remind me (@[[2025-06-17]])
___
### if

if(logical_expression, value_if_true, value_if_false)

First argument is the condition.

Second argument is output if condition is true.

Optional third argument output if condition is false.
e.g. if(dateAfter(file.mtime, file.ctime), "Modified", "Unmodified")

### examples

**scheduled before now**

```js
if(scheduled < now(), '✅', '🕧')
```

**today**

```js
if(scheduled.date() == today(), '🚩', '📅')
```

```js
if(scheduled == today(), '🚩', '📅')
```
