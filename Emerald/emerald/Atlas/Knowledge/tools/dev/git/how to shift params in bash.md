
#howto/bash 

simply use `shift 1` to shift the params by 1.

**Example**

```sh
call-me () { sender=$1; shift 1; msg=$*; }
```
- the sender is the first param
- the rest of the params contain the message
