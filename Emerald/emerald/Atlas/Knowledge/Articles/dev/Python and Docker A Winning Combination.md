---
author:
  - "[[Coderivers]]"
created: 2025-07-07
published: 2025-01-23
source: https://coderivers.org/blog/python-docker/
about: "[[python programming language]]"
tags:
  - article/docker
  - howto/docker/python
---
## Introduction

In the world of software development, Python has long been a favorite due to its simplicity, versatility, and a vast ecosystem of libraries. Docker, on the other hand, has revolutionized the way applications are packaged, deployed, and run by providing containerization technology. When we combine Python and Docker, we get a powerful set of tools that can streamline the development, testing, and deployment processes. This blog will explore the fundamental concepts of Python in Docker, how to use them together, common practices, and best practices.

1. **Fundamental Concepts**
	- What is Python?
	- What is Docker?
	- Why Combine Python and Docker?
2. **Getting Started with Python in Docker**
	- Installing Docker
	- Creating a Python Docker Image
	- Running a Python Container
3. **Usage Methods**
	- Building a Simple Python Web Application in Docker
	- Using Python Libraries in Docker Containers
	- Passing Environment Variables to Python in Docker
4. **Common Practices**
	- Dockerfile Best Practices for Python
	- Managing Dependencies in Python Docker Containers
	- Container Networking for Python Applications
5. **Best Practices**
	- Optimizing Python Docker Images
	- Security Considerations for Python in Docker
	- Continuous Integration and Deployment with Python Docker
6. **Conclusion**

## 1\. Fundamental Concepts

### What is Python?

Python is a high-level, interpreted programming language known for its readability and simplicity. It has a diverse range of applications, from web development (using frameworks like Django and Flask) to data science (with libraries such as NumPy, Pandas, and TensorFlow), and system scripting. Python's dynamic typing and garbage collection make it easy to write and maintain code.

### What is Docker?

Docker is an open-source platform that uses containerization technology to package applications and their dependencies into isolated containers. A container is a lightweight, standalone, executable package that includes everything needed to run an application, such as code, runtime, system tools, and libraries. Docker allows developers to build, ship, and run applications consistently across different environments, from development machines to production servers.

### Why Combine Python and Docker?

- **Environment Isolation**: Docker provides a clean and isolated environment for running Python applications. This ensures that the application runs the same way regardless of the host system, eliminating the "it works on my machine" problem.
- **Dependency Management**: Python projects often have complex dependencies. Docker allows you to bundle all the necessary dependencies with the application, making it easier to manage and deploy.
- **Scalability**: Docker containers can be easily scaled up or down, making it suitable for deploying Python applications in large-scale production environments.

## 2\. Getting Started with Python in Docker

### Installing Docker

The first step is to install Docker on your system. Docker is available for various operating systems, including Windows, Mac, and Linux. You can download the Docker installer from the official Docker website and follow the installation instructions.

### Creating a Python Docker Image

A Docker image is a read-only template used to create Docker containers. To create a Python Docker image, we need to write a `Dockerfile`. Here is a simple example for a basic Python application:

```dockerfile
# Use an official Python base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file into the container at /app
COPY requirements.txt.

# Install the Python dependencies
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY.

# Define the command to run when the container starts
CMD ["python", "app.py"]
```

In this `Dockerfile`: - `FROM python:3.9-slim` specifies the base Python image we are using. The `slim` version is a lightweight version of the Python image. - `WORKDIR /app` sets the working directory inside the container. - `COPY requirements.txt.` copies the `requirements.txt` file (which lists the Python dependencies) into the container. - `RUN pip install -r requirements.txt` installs the dependencies. - `COPY.` copies the rest of the application code into the container. - `CMD ["python", "app.py"]` defines the command to run when the container starts.

### Running a Python Container

Once we have the Docker image, we can create and run a container from it. First, build the Docker image using the following command in the terminal, where `<image_name>` is the name you want to give to your image:

```bash
docker build -t <image_name>.
```

After the image is built, run the container:

```bash
docker run -p 8000:8000 <image_name>
```

The `-p 8000:8000` option maps port 8000 on the host machine to port 8000 in the container. This allows you to access the Python application running inside the container from your browser or other clients.

## 3\. Usage Methods

### Building a Simple Python Web Application in Docker

Let's build a simple Flask web application and containerize it. First, create a `requirements.txt` file with the following content:

```js
flask
```

Then, create an `app.py` file:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, Docker!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
```

Now, use the `Dockerfile` from the previous section to build the image and run the container. You can access the application in your browser at `http://localhost:8000`.

### Using Python Libraries in Docker Containers

To use additional Python libraries in a Docker container, simply list them in the `requirements.txt` file. For example, if you want to use the `numpy` library, add it to the `requirements.txt`:

```js
flask
numpy
```

Then rebuild the Docker image, and the new library will be installed when the image is built.

### Passing Environment Variables to Python in Docker

You can pass environment variables to a Python application running in a Docker container. In the `Dockerfile`, you can set an environment variable like this:

```dockerfile
# Use an official Python base image
FROM python:3.9-slim

# Set an environment variable
ENV APP_ENV development

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file into the container at /app
COPY requirements.txt.

# Install the Python dependencies
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY.

# Define the command to run when the container starts
CMD ["python", "app.py"]
```

In your Python code, you can access this environment variable using the `os` module:

```python
import os

app_env = os.environ.get('APP_ENV')
print(f"App environment: {app_env}")
```

You can also override the environment variable when running the container:

```bash
docker run -e APP_ENV=production -p 8000:8000 <image_name>
```

## 4\. Common Practices

### Dockerfile Best Practices for Python

- **Use Multi-Stage Builds**: Multi-stage builds can significantly reduce the size of the final Docker image. For example:
```dockerfile
# Build stage
FROM python:3.9-slim as build
WORKDIR /app
COPY requirements.txt.
RUN pip install -r requirements.txt
COPY.

# Runtime stage
FROM python:3.9-slim
WORKDIR /app
COPY --from=build /app/.
CMD ["python", "app.py"]
```

In this example, the build stage installs all the dependencies and copies the code. The runtime stage only copies the necessary files from the build stage, resulting in a smaller image.

- **Keep the Base Image Updated**: Regularly update the base Python image to get the latest security patches and improvements.

### Managing Dependencies in Python Docker Containers

- **Use `requirements.txt`**: As shown earlier, `requirements.txt` is a standard way to list Python dependencies. Make sure to keep it up to date and use exact versions for better reproducibility.
- **Use `pipenv` or `poetry`**: These tools can help manage dependencies more effectively, including creating virtual environments and generating `requirements.txt` or equivalent files.

### Container Networking for Python Applications

- **Use Docker Networks**: Docker provides network functionality to allow containers to communicate with each other. For example, if you have a Python application that needs to connect to a database container, you can create a custom network and attach both containers to it.
```bash
# Create a network
docker network create my_network

# Run the database container on the network
docker run -d --name my_db --network my_network <db_image>

# Run the Python application container on the network
docker run -d --name my_py_app --network my_network <python_image>
```

## 5\. Best Practices

### Optimizing Python Docker Images

- **Minimize the Image Size**: Use lightweight base images like `python:3.9-slim`. Also, remove unnecessary files and directories from the image. For example, you can use the `RUN` command to clean up cache files after installing dependencies:
```dockerfile
RUN pip install -r requirements.txt && \
    find /usr/local/lib/python3.9/site-packages -type d -name __pycache__ -exec rm -rf {} +
```
- **Layer Caching**: Docker caches layers during the build process. Try to structure your `Dockerfile` in a way that changes to the least frequently updated parts are at the bottom. For example, if your application code changes more often than the dependencies, copy the `requirements.txt` and install dependencies first.

### Security Considerations for Python in Docker

- **Use Non-Root Users**: By default, Docker containers run as root. It's a good practice to create a non-root user in the container and run the application as that user.
```dockerfile
# Create a non-root user
RUN useradd -m non_root_user
WORKDIR /home/non_root_user
USER non_root_user
```
- **Keep Dependencies Updated**: Regularly update the Python libraries and the base image to fix security vulnerabilities.

### Continuous Integration and Deployment with Python Docker

- **Integrate with CI/CD Tools**: Tools like Jenkins, GitLab CI/CD, or GitHub Actions can be used to automate the build, test, and deployment of Python Docker containers. For example, in a GitHub Actions workflow:

```yaml
name: Python Docker CI/CD

on:
  push:
    branches:
      - main

jobs:
  build_and_push:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_PASSWORD }}
      - name: Build and push Docker image
        uses: docker/build-push-action@v2
        with:
          context:.
          push: true
          tags: ${{ secrets.DOCKERHUB_USERNAME }}/my_py_app:latest
```

This workflow builds and pushes a Docker image to Docker Hub whenever there is a push to the `main` branch.

## 6\. Conclusion

Combining Python and Docker offers numerous benefits for developers, including environment isolation, dependency management, and scalability. By understanding the fundamental concepts, learning the usage methods, following common practices, and implementing best practices, you can effectively develop, test, and deploy Python applications in Docker containers. Whether you are working on a small project or a large-scale enterprise application, the Python and Docker combination can streamline your development processes and ensure consistent application behavior across different environments. So, start exploring and leveraging the power of Python in Docker for your next project!