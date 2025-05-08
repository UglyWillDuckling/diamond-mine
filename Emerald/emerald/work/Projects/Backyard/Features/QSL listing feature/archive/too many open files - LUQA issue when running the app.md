#issue/luqa #issue/unix/number-of-files

related:: 
- [[Error 24 - unix]]
- [[Issue - git butler too many open files (24)]]

___

## fix

again by running 
```sh
echo 10240 | sudo tee /proc/sys/fs/inotify/max_user_instances
```
