#fix/ssh #howto/ssh 

In your `~/.ssh/config` file put:

```r
IdentityFile /home/myuser/.ssh/id_rsa{...}
```

which will tell the outgoing ssh connections to use that as the default identity

## to test

1. remove all identities `ssh-add -D`
2. try to establish an `ssh` connection

see also: [[add new ssh key]], [[SSH issues with GIT]]