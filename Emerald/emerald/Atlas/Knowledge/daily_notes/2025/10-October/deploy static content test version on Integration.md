
- static version is only updated in the legacy project: config/config.common.inc
- 

- [x] do  [[how to upload a static content version on BY]] first.
- [x] update static content version on BY
- [x] build image -> get tag
- [x] update [[phoenix environment]] with tag
- [x] fix static content on local env

- [ ] update static content on integration again

https://static-dev.meilleursagents.tech/3.28.3/js/backyard-3.28.3.js
https://static-dev.meilleursagents.tech/oov-test/js/backyard-oov-test.js
___
### upload static files
> Use the [[gsutil]] tool
	
	gsutil -m cp -r . "gs://malegacy-static-dev/3.28.4/"

### set permission

```sh
gsutil -m acl -r set public-read gs://malegacy-static-dev/3.28.4/css && \
gsutil -m acl -r set public-read gs://malegacy-static-dev/3.28.4/js && \
gsutil -m acl -r set public-read gs://malegacy-static-dev/3.28.4/fonts && \
gsutil -m acl -r set public-read gs://malegacy-static-dev/3.28.4/img && \
gsutil -m acl -r set public-read gs://malegacy-static-dev/3.28.4/browser_icons
```
> use the -r flag

https://static-dev.meilleursagents.tech/oov-test/js/backyard-oov-test.js

 ```sh
 MA_INSTANCE=root ./static/compile.static.sh
 ```

current docker tag: 0598cdbf08

new tag: ???

- [x] update static content permissions
- [x] update static content version on env
- [x] build new image
- [x] update with new tag
