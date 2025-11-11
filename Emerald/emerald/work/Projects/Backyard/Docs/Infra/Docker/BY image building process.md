---
related:
---
#process/by

- image storage URL: [Google Cloud Platform](https://console.cloud.google.com/artifacts/docker/ma-dev2/europe/eu.gcr.io/dev-images%2Fmalegacy)

## make build

```sh
build: 
	git submodule init
	git submodule update
	docker build \
		--rm -t $(DOCKER_IMAGE_PROD) $(DOCKER_BUILD_CONTEXT) \
		-f Dockerfile \
		--target prod \
		--build-arg APP_VERSION=$(FINAL_APP_VERSION) \
		--build-arg BUILD_ID=$(BUILD_ID)
	docker tag  $(DOCKER_IMAGE_PROD) $(DOCKER_REGISTRY_DEV)/$(DOCKER_REPOSITORY_NAME):latest
```

- `APP_VERSION` is 1.0.0 (`build.env`)
- `FINAL_APP_VERSION` is `APP_VERSION`+`git hash`
	- 1.0.0.-9a9defdgopba
- `BUILD_ID` is random

**example run**
```sh
docker build \
	--rm -t eu.gcr.io/ma-dev2/dev-images/malegacy:ee5f888b-410f-4474-a88f-991aefde9070 . \
	-f Dockerfile \
	--target prod \
	--build-arg APP_VERSION=1.0.0-9a9de2abde \
	--build-arg BUILD_ID=ee5f888b-410f-4474-a88f-991aefde9070
```

**example tagging** 🉐
```python
docker tag eu.gcr.io/ma-dev2/dev-images/malegacy:ee5f888b-410f-4474-a88f-991aefde9070 \
		   eu.gcr.io/ma-dev2/dev-images/malegacy:latest
```

- first tag is based on  `DOCKER_IMAGE_BASE`:`BUILD_ID`
	- eu.gcr.io/ma-dev2/dev-images/malegacy:ee5f888b-410f-4474-a88f-991aefde9070
- second tag is `DOCKER_REGISTRY_DEV`/`DOCKER_REPOSITORY_NAME`:latest
	- eu.gcr.io/ma-dev2/dev-images/malegacy:latest

`!: important`: only the tag after `:` is different

___
see: [[BY - image building process for Laravel]]