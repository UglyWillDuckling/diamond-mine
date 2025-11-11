---
status:
  - In Progress
project: "[[work/Projects/Backyard/Backyard|Backyard]]"
tags:
  - ticket/feature
children:
  - "[[support for the env var feature flag]]"
---
#ticket/feature 

URL to file: http://syno-enreg.users.poliris.net/EnregistrementsDiabolocom/2025/09/03/AGT_cgruter_ID_59702895.mp3

bucket name: ma-qsl-sales-people-calls-records-dev
[bucket link](https://console.cloud.google.com/storage/browser/ma-qsl-sales-people-calls-records-dev;tab=objects?forceOnBucketsSortingFiltering=true&hl=en&inv=1&invt=Abp44A&project=ma-dev2&prefix=&forceOnObjectsSortingFiltering=false)
https://backyard.meilleursagents.com/my/calls?call_date=03%2F09%2F2025&user_id=1021810

- [x] see if you can access the file on the **bucket**
- [x] try out the http send function
- [x] see if **authentication** is required
- [x] sync changes with [[Ivan Vukusic]]
	- [x] file name format update
	- [x] bridge between the two features
- [x] bridge between the import and reading
- [x] test on dev
- [x] ==error== handling
- [x] investigate how the [[GCP Bucket]] works on BY #later
- [x] make latest changes
- [ ] deploy

## notes 🗒
- you can usually derive the  user based on agents_name/pbx_extension [^1] on the [[backyard call entity]]
	- gregory.iniesta -> 7567961 -> [dev/my](https://backyard-dev.meilleursagents.tech/my/calls?user_id=7567961), [local/my](http://localhost:8001/my/calls?call_date=29%2F10%2F2025&user_id=7567961)
- [prod bucket link](https://console.cloud.google.com/storage/browser/ma-qsl-sales-people-calls-records-prod;tab=objects?forceOnBucketsSortingFiltering=true&authuser=0&inv=1&invt=Ab5z9g&project=ma-prod&prefix=&forceOnObjectsSortingFiltering=false&pageState=(%22StorageObjectListTable%22:(%22f%22:%22%255B%255D%22))

## changes 🔀
- fully implemented the reading logic
- added `constants`
- updated test route to accept a `call_id` and use the same logic as **listen**
- genereated filename
- deployed to **dev** and verified that it works

## work

🗒..

- [x] check on dev, verify links and routes
	- [x] verify path
	- [x] see if you can find **one recording** to listen to 🎼
- [ ] sync with [[Ivan Vukusic]]
- [ ] deploy to **prod**

| user_id | call_id  | pbx      | full path                               | dev                                                                        | local link |
| ------- | -------- | -------- | --------------------------------------- | -------------------------------------------------------------------------- | ---------- |
| 5740052 | 61917106 | aarnoult | 2025-10-20/AGT_aarnoult_ID_61917106.mp3 | [link](https://backyard-dev.meilleursagents.tech/my/calls?user_id=5740052) |            |


[^1]: [[pbx_extension]]
[^2]: [[call_id field]]