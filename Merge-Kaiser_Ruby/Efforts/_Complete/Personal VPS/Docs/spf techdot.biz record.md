---
related:
  - "[[Atlas/Knowledge/Science/Computer Science/Email/SPF|SPF]]"
type: dns-record
tags:
  - dns-record/spf
---

type: TXT
value:
```bash
v=spf1 +a +mx +ip4:145.223.99.110 ~all
```

- ~all is for soft fail

see [[SPF Record Syntax Structure, Examples & Checkers]]