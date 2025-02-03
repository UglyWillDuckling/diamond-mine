#tool  #linux #bash

https://github.com/itspriddle/bashword
A shell tool for quickly generating passwords.

## Examples

Generate a **20** character password with **digits and symbols**
```
bashword
```

Generate a **30** character password with **digits and symbols**
```bash
bashword -30
```

Generate a **10** character password with only **alphanumeric** characters
```
bashword -S -10
```

Generate passwords for the given **users**
```
{ echo user1; echo user2; echo user3 } | paste - <(bashword -c 3)
```

- [ ] remind (@[[2025-02-07]])