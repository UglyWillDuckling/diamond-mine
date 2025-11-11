---
~
---
- [x] reminder [[you can define a local hostname for a docker compose service]] (@[[2025-08-11]])
```yaml
  app:
    hostname: mediaapi.localhost
    image: "eu.gcr.io/ma-dev2/dev-images/mediaapi:latest"
```

___

  ==When you set a custom  hostname  in a Docker Compose file, the service is still accessible via its original service name, in addition to the new hostname.==

  To illustrate this, let's consider an example:

    version: '3'
    services:
      myservice:
        image: myimage
        hostname: mycustomhost
        ports:
          - "8080:80"

  In this example, the  myservice  container has a custom hostname
  mycustomhost , and it exposes port 80 internally, which is mapped to port
  8080 on the host machine.

  Now, let's say you have another service,  another_service , in the same
  Docker Compose project, and you want to access  myservice  from within
  another_service . You can do so using either the original service name or
  the custom hostname:

  Accessing via service name:

    # From within another_service container
    curl http://myservice:80

  Accessing via custom hostname:

    # From within another_service container
    curl http://mycustomhost:80

  Both of these commands will successfully connect to the  myservice
  container.

  This is because Docker Compose creates a DNS entry for each service in the
  project, mapping the service name to the container's IP address. When you
  set a custom  hostname , Docker Compose also creates an additional DNS entry
  for the custom hostname, pointing to the same container IP address.

  As a result, you can access the service using either the original service
  name or the custom hostname, as long as you're within the same Docker
  Compose project network.

  However, if you're accessing the service from outside the Docker Compose
  project network (e.g., from the host machine or from a container not part of
  the same project), you'll need to use the custom hostname along with the
  exposed port, like this:

    curl http://localhost:8080

  Or, if you've configured a DNS server or a reverse proxy to route traffic to
  the custom hostname, you can use that hostname directly:

    curl http://mycustomhost:8080