---
source: "https://localai.io/basics/getting_started/index.html"
author:
  - "[[Colin Wilson - Lotus Labs]]"
published:
created: 2025-04-02
tags:
---
*rocket\_launch*

**LocalAI** is a free, open-source alternative to OpenAI (Anthropic, etc.), functioning as a drop-in replacement REST API for local inferencing. It allows you to run [LLMs](https://localai.io/features/text-generation/), generate images, and produce audio, all locally or on-premises with consumer-grade hardware, supporting multiple model families and architectures.

💡

**Security considerations**

If you are exposing LocalAI remotely, make sure you protect the API endpoints adequately with a mechanism which allows to protect from the incoming traffic or alternatively, run LocalAI with `API_KEY` to gate the access with an API key. The API key guarantees a total access to the features (there is no role separation), and it is to be considered as likely as an admin role.

To access the WebUI with an API\_KEY, browser extensions such as [Requestly](https://requestly.com/) can be used (see also [https://github.com/mudler/LocalAI/issues/2227#issuecomment-2093333752)](https://github.com/mudler/LocalAI/issues/2227#issuecomment-2093333752\)). See also [API flags](https://localai.io/advanced/#api-flags) for the flags / options available when starting LocalAI.

## Using the Bash Installer

Install LocalAI easily using the bash installer with the following command:

For a full list of options, refer to the [Installer Options](https://localai.io/docs/advanced/installer/) documentation.

Binaries can also be [manually downloaded](https://localai.io/docs/reference/binaries/).

## Using Homebrew on MacOS

⚠️

The Homebrew formula currently doesn’t have the same options than the bash script

You can install Homebrew’s [LocalAI](https://formulae.brew.sh/formula/localai) with the following command:

## Using Container Images or Kubernetes

LocalAI is available as a container image compatible with various container engines such as Docker, Podman, and Kubernetes. Container images are published on [quay.io](https://quay.io/repository/go-skynet/local-ai?tab=tags&tag=latest) and [Docker Hub](https://hub.docker.com/r/localai/localai).

For detailed instructions, see [Using container images](https://localai.io/basics/container/). For Kubernetes deployment, see [Run with Kubernetes](https://localai.io/basics/kubernetes/).

## Running LocalAI with All-in-One (AIO) Images

> *Already have a model file? Skip to [Run models manually](https://localai.io/docs/getting-started/models/)*.

LocalAI’s All-in-One (AIO) images are pre-configured with a set of models and backends to fully leverage almost all the features of LocalAI. If pre-configured models are not required, you can use the standard [images](https://localai.io/basics/container/).

These images are available for both CPU and GPU environments. AIO images are designed for ease of use and require no additional configuration.

It is recommended to use AIO images if you prefer not to configure the models manually or via the web interface. For running specific models, refer to the [manual method](https://localai.io/docs/getting-started/models/).

The AIO images come pre-configured with the following features:

- Text to Speech (TTS)
- Speech to Text
- Function calling
- Large Language Models (LLM) for text generation
- Image generation
- Embedding server

For instructions on using AIO images, see [Using container images](https://localai.io/basics/container/#all-in-one-images).

## What’s Next?

There is much more to explore with LocalAI! You can run any model from Hugging Face, perform video generation, and also voice cloning. For a comprehensive overview, check out the [features](https://localai.io/features/) section.

Explore additional resources and community contributions:

- [Installer Options](https://localai.io/docs/advanced/installer/)
- [Run from Container images](https://localai.io/basics/container/)
- [Examples to try from the CLI](https://localai.io/basics/try/)
- [Build LocalAI and the container image](https://localai.io/basics/build/)
- [Run models manually](https://localai.io/docs/getting-started/models/)
- [Examples](https://github.com/mudler/LocalAI/tree/master/examples#examples)

[Edit this page](https://github.com/mudler/LocalAI/blob/master/docs/content/docs/getting-started/quickstart.md)

Last updated 5 months ago. history