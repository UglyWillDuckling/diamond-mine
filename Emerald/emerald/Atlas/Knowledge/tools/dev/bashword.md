#tool  #linux #bash

https://github.com/itspriddle/bashword
A shell tool for quickly generating passwords.

## Examples

Generate a **20** character password with **digits and symbols**
```
bashword
```

Generate a **30** character password with **digits and symbols**
```rb
bashword -30
```

Generate a **10** character password with only **alphanumeric** characters
```rb
bashword -S -10
```

Generate passwords for the given **users**
```bash
{ echo user1; echo user2; echo user3 } | paste - <(bashword -c 3)
```

- [x] remind (@[[Planning 2025-02-10]] 10:51)
- [ ] monthly reminder (@[[2025-03-04]] 10:07)