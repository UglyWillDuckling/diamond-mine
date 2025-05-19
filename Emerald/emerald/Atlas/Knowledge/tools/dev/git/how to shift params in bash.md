---
related:
  - "[[Bourne Shell Tutorial]]"
---

#howto/bash 

simply use `shift 1` to shift the params by 1.

**Example**

```bash
call-me () { sender=$1; shift 1; msg=$*; }
```
- the sender is the first param
- the rest of the params contain the message

📔using `$*`

- [ ] remind me (@[[2025-05-29]]) keyword is `shift {n}`