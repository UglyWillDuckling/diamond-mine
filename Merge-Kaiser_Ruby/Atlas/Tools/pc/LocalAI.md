---
source: "https://localai.io/"
author:
  - "[[Colin Wilson - Lotus Labs]]"
published:
created: 2025-04-02
tags:
---
What is LocalAI?

[![[~/×/4e96eabe3c0084695e6a11deaa641bf2_MD5.jpg]]](https://localai.io/)

[![[~/×/0338afb7c2ac910d795d767faff93020_MD5.svg]]](https://trendshift.io/repositories/5539)

> 💡 Get help - [❓FAQ](https://localai.io/faq/) [💭Discussions](https://github.com/go-skynet/LocalAI/discussions) [💭Discord](https://discord.gg/uJAeKSAGDy)
> 
> [💻 Quickstart](https://localai.io/basics/getting_started/) [🖼️ Models](https://models.localai.io/) [🚀 Roadmap](https://github.com/mudler/LocalAI/issues?q=is%3Aissue+is%3Aopen+label%3Aroadmap) [🥽 Demo](https://demo.localai.io/) [🌍 Explorer](https://explorer.localai.io/) [🛫 Examples](https://github.com/go-skynet/LocalAI/tree/master/examples/)

**LocalAI** is the free, Open Source OpenAI alternative. LocalAI act as a drop-in replacement REST API that’s compatible with OpenAI API specifications for local inferencing. It allows you to run LLMs, generate images, audio (and not only) locally or on-prem with consumer grade hardware, supporting multiple model families and architectures. Does not require GPU. It is created and maintained by [Ettore Di Giacinto](https://github.com/mudler).

## Start LocalAI

Start the image with Docker to have a functional clone of OpenAI! 🚀:

Or just use the bash installer:

See the [💻 Quickstart](https://localai.io/basics/getting_started/) for all the options and way you can run LocalAI!

## What is LocalAI?

In a nutshell:

- Local, OpenAI drop-in alternative REST API. You own your data.
- NO GPU required. NO Internet access is required either
	- Optional, GPU Acceleration is available. See also the [build section](https://localai.io/basics/build/).
- Supports multiple models
- 🏃 Once loaded the first time, it keep models loaded in memory for faster inference
- ⚡ Doesn’t shell-out, but uses bindings for a faster inference and better performance.

LocalAI is focused on making the AI accessible to anyone. Any contribution, feedback and PR is welcome!

Note that this started just as a fun weekend project by [mudler](https://github.com/mudler) in order to try to create the necessary pieces for a full AI assistant like `ChatGPT`: the community is growing fast and we are working hard to make it better and more stable. If you want to help, please consider contributing (see below)!

### 🚀 Features

- 📖 [Text generation with GPTs](https://localai.io/features/text-generation/) ( `llama.cpp`, `gpt4all.cpp`, … [📖 and more](https://localai.io/model-compatibility/#model-compatibility-table) )
- 🗣 [Text to Audio](https://localai.io/features/text-to-audio/)
- 🔈 [Audio to Text](https://localai.io/features/audio-to-text/) (Audio transcription with `whisper.cpp` )
- 🎨 [Image generation with stable diffusion](https://localai.io/features/image-generation)
- 🔥 [OpenAI functions](https://localai.io/features/openai-functions/) 🆕
- 🧠 [Embeddings generation for vector databases](https://localai.io/features/embeddings/)
- ✍️ [Constrained grammars](https://localai.io/features/constrained_grammars/)
- 🖼️ [Download Models directly from Huggingface](https://localai.io/models/)
- 🥽 [Vision API](https://localai.io/features/gpt-vision/)
- 💾 [Stores](https://localai.io/stores)
- 📈 [Reranker](https://localai.io/features/reranker/)
- 🆕🖧 [P2P Inferencing](https://localai.io/features/distribute/)

## Contribute and help

To help the project you can:

- If you have technological skills and want to contribute to development, have a look at the open issues. If you are new you can have a look at the [good-first-issue](https://github.com/go-skynet/LocalAI/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and [help-wanted](https://github.com/go-skynet/LocalAI/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) labels.
- If you don’t have technological skills you can still help improving documentation or [add examples](https://github.com/go-skynet/LocalAI/tree/master/examples) or share your user-stories with our community, any help and contribution is welcome!

## 🌟 Star history

> Do you find LocalAI useful?

Support the project by becoming [a backer or sponsor](https://github.com/sponsors/mudler). Your logo will show up here with a link to your website.

A huge thank you to our generous sponsors who support this project covering CI expenses, and our [Sponsor list](https://github.com/sponsors/mudler):

[![[~/×/b54b3bf8ada2f0f6b99c2c709cb41229_MD5.png]]](https://www.spectrocloud.com/) [![[~/×/42e0ef02595ba3cde129f2cecaed6770_MD5.png]] 
](https://www.premai.io/)

LocalAI is a community-driven project created by [Ettore Di Giacinto](https://github.com/mudler/).

MIT - Author Ettore Di Giacinto

## 🙇 Acknowledgements

LocalAI couldn’t have been built without the help of great software already available from the community. Thank you!

- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [https://github.com/tatsu-lab/stanford\_alpaca](https://github.com/tatsu-lab/stanford_alpaca)
- [https://github.com/cornelk/llama-go](https://github.com/cornelk/llama-go) for the initial ideas
- [https://github.com/antimatter15/alpaca.cpp](https://github.com/antimatter15/alpaca.cpp)
- [https://github.com/EdVince/Stable-Diffusion-NCNN](https://github.com/EdVince/Stable-Diffusion-NCNN)
- [https://github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp)
- [https://github.com/saharNooby/rwkv.cpp](https://github.com/saharNooby/rwkv.cpp)
- [https://github.com/rhasspy/piper](https://github.com/rhasspy/piper)

## 🤗 Contributors

This is a community project, a special thanks to our contributors! 🤗 [![[~/×/8903d3f2f0c5fae0d74926a9bc4ca617_MD5.svg]]](https://github.com/go-skynet/LocalAI/graphs/contributors)