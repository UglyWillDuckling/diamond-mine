---
author:
  - "[[Eddie Gulay]]"
created: 2025-08-25
published: 2024-08-19
source: https://dev.to/eddiegulay/the-dockerfile-24g2
tags:
  - article/docker
about:
  - "[[Dockerfile]]"
---

The `Dockerfile` is at the heart of Docker image creation. It is a text file that contains a series of instructions on how to build a Docker image, similar to a recipe. Each instruction in a `Dockerfile` creates a layer in the final image, which makes Docker images lightweight, efficient, and reusable.

### Key Dockerfile Instructions

1. **FROM**
	- The `FROM` instruction specifies the base image to use for the subsequent instructions. Every Dockerfile must begin with a `FROM` instruction.
	- **Example:**
	```
	FROM python:3.9-slim
	```
- **Explanation:** This starts from a minimal Python 3.9 image. The base image can be anything—from a Linux distribution to an application runtime.
1. **WORKDIR**
	- The `WORKDIR` instruction sets the working directory inside the container. All subsequent instructions operate relative to this path.
	- **Example:**
	```
	WORKDIR /app
	```
- **Explanation:** All commands will now be run inside `/app`.
1. **COPY**
	- The `COPY` instruction copies files and directories from your local filesystem into the Docker image.
	- **Example:**
	```
	COPY . /app
	```
- **Explanation:** This copies all files from the current directory (where the Dockerfile is located) to the `/app` directory inside the image.
1. **RUN**
	- The `RUN` instruction executes a command in the shell inside the container. It is typically used to install dependencies, update packages, or run scripts.
	- **Example:**
	```
	RUN pip install --no-cache-dir -r requirements.txt
	```
- **Explanation:** This command installs Python dependencies listed in `requirements.txt` without using the cache to reduce image size.
1. **CMD**
	- The `CMD` instruction specifies the default command to run when a container is started. Unlike `RUN`, which runs at build time, `CMD` runs at container runtime.
	- **Example:**
	```
	CMD ["python", "app.py"]
	```
- **Explanation:** This runs `python app.py` when the container starts.
- **Important Note:** If a Docker container is started with a custom command (e.g., `docker run my-image echo "Hello"`), the `CMD` instruction will be overridden.
1. **ENTRYPOINT**
	- The `ENTRYPOINT` instruction is similar to `CMD` but with a key difference: it defines the command that always runs when the container starts. Unlike `CMD`, it is not easily overridden.
	- **Example:**
	```
	ENTRYPOINT ["python", "app.py"]
	```
- **Explanation:** This runs the `app.py` script, but any additional arguments provided during container start will be passed to `app.py`.
1. **EXPOSE**
	- The `EXPOSE` instruction informs Docker that the container listens on a specified network port at runtime. It doesn’t publish the port to the host; that’s done using `-p` or `--publish` when running the container.
	- **Example:**
	
	```
	EXPOSE 80
	```
	
- **Explanation:** This indicates that the application listens on port 80.
1. **ENV**
	- The `ENV` instruction sets environment variables in the container.
	- **Example:**
	```
	ENV FLASK_ENV=development
	```
- **Explanation:** This sets the environment variable `FLASK_ENV` to `development` inside the container.
1. **ADD vs COPY**
	- `ADD` and `COPY` are both used to copy files into the image. However, `ADD` can also handle URLs and unpack compressed files, while `COPY` is simpler and preferred for straightforward copying.
	- **Example:**
	```
	ADD source.tar.gz /app
	```
- **Explanation:** This would copy and automatically extract `source.tar.gz` into `/app`.
1. **VOLUME**
	- The `VOLUME` instruction creates a mount point with the specified path and marks it as holding externally mounted volumes. It’s used to persist data or share data between containers.
	- **Example:**
	```
	VOLUME /data
	```
```
- **Explanation:** This will mount the \`/data\` directory to a Docker-managed volume.
```
1. **USER**
	- The `USER` instruction sets the user and group to run subsequent instructions and the CMD/ENTRYPOINT as.
	- **Example:**
	```
	USER appuser
	```
```
- **Explanation:** This ensures all following commands are run as \`appuser\` instead of the root user, enhancing security.
```
1. **ARG**
	- The `ARG` instruction defines a variable that users can pass at build time to the Dockerfile with `docker build --build-arg`.
	- **Example:**
	```
	ARG version=latest
	```
```
- **Explanation:** This allows setting a \`version\` variable that can be used in the Dockerfile, which can be overridden by passing \`--build-arg version=1.0\`.
```

### Building Efficient Dockerfiles

1. **Use.dockerignore:**
	- Just like `.gitignore` files, a `.dockerignore` file prevents unnecessary files and directories from being included in the Docker image. This helps keep the image size small.
	- **Example:**
	```
	__pycache__
	 *.pyc
	 .git
	 .env
	```
2. **Order Instructions for Caching:**
	- Docker caches each layer (instruction) during the build process. By ordering instructions that don’t change often (e.g., installing system packages) before those that do (e.g., copying code), you can speed up the build process.
3. **Minimize Layers:**
	- Each instruction in the Dockerfile creates a layer. Where possible, combine multiple `RUN` commands using `&&` to reduce the number of layers.
	- **Example:**
	```
	RUN apt-get update && apt-get install -y \
	     package1 \
	     package2 \
	     && rm -rf /var/lib/apt/lists/*
	```
4. **Leverage Multi-Stage Builds:**
	- For applications that need to be built (e.g., compiled), you can use multi-stage builds to keep the final image small by discarding build dependencies.
	- **Example:**
	```
	# Build stage
	 FROM golang:alpine AS builder
	 WORKDIR /app
	 COPY . .
	 RUN go build -o myapp
	 # Run stage
	 FROM alpine
	 COPY --from=builder /app/myapp /myapp
	 CMD ["/myapp"]
	```

### Example: Dockerfile for a Python Web Application

```
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV FLASK_ENV=production

# Run app.py when the container launches
CMD ["python", "app.py"]
```

---

✌🏾

[![A developer toolkit for building lightning-fast dashboards into SaaS apps](https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fi.imgur.com%2FNM5rf5L.png)](https://embeddable.com/?utm_source=dev_to&utm_medium=display&utm_campaign=july_2025_devto&utm_id=devto7&utm_content=devto7&bb=239313)

## A developer toolkit for building lightning-fast dashboards into SaaS apps

Embed in minutes, load in milliseconds, extend infinitely. Import any chart, connect to any database, embed anywhere. Scale elegantly, monitor effortlessly, CI/CD & version control.