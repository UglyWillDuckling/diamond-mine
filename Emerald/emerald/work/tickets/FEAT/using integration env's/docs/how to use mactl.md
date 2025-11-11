---
about:
  - "[[mactl]]"
---
#howto 

##  manage an env

1. run `mactl create {foo}` to create a new env
2. activate the env with `mactl init` -> enter your env
3. override an app version with `mactl override add {app} --overrideTag {tag}`

> [!important] creation issue
> there is a problem that can occur when creating a new environment which results in missing changes.
> To fix this run the command `make master environment/{new_env}`

## show env status

Show current env status with: `mactl status`

```
⏳  Checking status of luna environment:

+-------------+----------------+------------------------+---------------------------+-------------------+------------------+
| APPLICATION | MODIFIED CHART | MODIFIED COMMON VALUES | MODIFIED TEMPLATED VALUES | OVERRIDEN SERVICE | NOT SYNC SERVICE |
+-------------+----------------+------------------------+---------------------------+-------------------+------------------+
| malegacy    |                |                        |                           | X                 |                  |
+-------------+----------------+------------------------+---------------------------+-------------------+------------------+
```

## update app version

override an app version with `mactl override add {app} --overrideTag {tag}`

## preventing automatic reset
`note: todo`

## reset an env

reset current env with: `mactl reset`
This will reset the env completely, any changes will be lost and all app versions will be reset.

## remove an override

```bash
mactl override remove <application> --repository <repository>
```
