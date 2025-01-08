## high level steps
1. install required software
2. configure software
3. setup the DNS records
4. test
5. ..

## install software
[[Postfix]], [[Dovecot]]
### postfix
```bash
 apt install postfix
```
### dovecot
```
apt install dovecot-core dovecot-imapd
```
## configure
...
## DNS records
### [[A Record]]
### [[PTR record]]
A pointer record that is used for a [[Reverse DNS lookup]].
### [[MX record]]
The standard [[DNS record]] used for [[email]].
