---
source: https://hub.docker.com/r/grafana/otel-lgtm
created: 2025-02-11
tags:
  - docker-image/lgtm
---
An OpenTelemetry Backend in a Docker Image
grafana/otel-lgtm contains a complete OpenTelemetry backend in a single Docker image:

OpenTelemetry collector⁠ for receiving OpenTelemetry data.
Prometheus⁠ metrics database.
Tempo⁠ trace database.
Loki⁠ logs database.
Grafana⁠ for visualization.
Components included in the Docker image: OpenTelemetry collector, Prometheus, Tempo, Loki, Grafana

Getting Started
docker run -p 3000:3000 -p 4317:4317 -p 4318:4318 --rm -ti grafana/otel-lgtm
Source and Documentation
https://github.com/grafana/docker-otel-lgtm/⁠