see [[BY image building process]]
___
## make build

```sh
build:
	docker build \
		--rm -t $(DOCKER_IMAGE_PROD)-laravel $(DOCKER_BUILD_CONTEXT)/laravel \
		-f laravel/docker/Dockerfile \
		# --target prod \
		--build-arg APP_VERSION=$(FINAL_APP_VERSION)-laravel \
		--build-arg BUILD_ID=$(BUILD_ID)-laravel
	docker tag ($DOCKER_IMAGE_PROD)-laravel $(DOCKER_REGISTRY_DEV)/$(DOCKER_REPOSITORY_NAME)-laravel:latest
```

```sh
docker build \
        --rm -t eu.gcr.io/ma-dev2/dev-images/malegacy:1.0.0-new-app-laravel ./laravel \
        -f laravel/docker/Dockerfile \
        --target prod \
        --build-arg APP_VERSION=malegacy-laravel \
        --build-arg BUILD_ID=malegacy-laravel
```

## publishing

### local

```python
docker push eu.gcr.io/ma-dev2/dev-images/malegacy:1.0.0-new-app-laravel
```

### jenkins

