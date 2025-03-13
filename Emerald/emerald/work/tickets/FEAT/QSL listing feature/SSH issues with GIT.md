#issue/git

- [x] remind me (@[[2025-03-11]] 09:57)
## git uses the first added key only!

An issue can occur if multiple keys are added to the [[ssh agent]].
Not clear if this is only in the case when the **added** key is also the **default** one.

### **Solution** 

List used keys with `ssh-add -l`
```c
256 SHA256:meqGzJn0OtehI+5+3utXnVcYcvXPRJh7mu1CynaDh88 vladimir.sedlar-ext@aviv-group.com (ED25519)
```
 
 ==remove== **all** keys with `ssh-add -d` command
```c
Identity removed: /home/vsedlar/.ssh/id_ed25519 ED25519 (vladimir.sedlar-ext@aviv-group.com)
```

 Now, re-add the key
```c
ssh-add ~/.ssh/id_{key}
```

## **notes**

1. ssh adds by default the key named `id_rsa`, the rest are added manually
	It seems that git can work with **multiple** keys, at least when a `default` one is used and another one is then added.

**Example**:
1. a `id_rsa` key file exists
2. ssh picks up the key **automatically**
3. another key is added `ssh-add ~/.ssh/{key_name}`
4. git now uses **both** keys

**not sure about this one**
- [ ] `test` this hypothesis
