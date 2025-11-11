---
about:
  - "[[backyard call entity]]"
---
#howto/work 

1. open up [[backyard call entity]] table -> find latest calls
2. **get** the `agents_name` value(pbx)
3. open the user page `my/?user_id=..`
4. **get** the date of the call
5. find the user associated via [[pbx_extension]]
6. **filter** by call date

examples: [dev/my](https://backyard-dev.meilleursagents.tech/my/calls?user_id=7567961), [local/my](http://localhost:8001/my/calls?call_date=29%2F10%2F2025&user_id=7567961)

### result

![[~/x/825f60f9ab86d5a1fba358fe65b1033c_MD5.jpg|800]]