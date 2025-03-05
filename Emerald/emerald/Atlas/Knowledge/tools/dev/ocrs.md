---
created: 2025-02-12
source: https://github.com/robertknight/ocrs
tags:
  - github
  - git-repo
  - tool/cli
  - tool/image-to-text
---
- [x] remind me (@[[2025-02-17]])
- [x] 2 weeks (@[[2025-03-04]] 13:14)
- [ ] month (@[[2025-04-09]])
___

**ocrs** is a Rust library and CLI tool for extracting text from images, also known as OCR (Optical Character Recognition).

The goal is to create a modern OCR engine that:

- Works well on a wide variety of images (scanned documents, photos containing text, screenshots etc.) with zero or much less preprocessing effort compared to earlier engines like [Tesseract](https://github.com/tesseract-ocr/tesseract). This is achieved by using machine learning more extensively in the pipeline.
- Is easy to compile and run across a variety of platforms, including WebAssembly
- Is trained on open and liberally licensed datasets
- Has a codebase that is easy to understand and modify

Under the hood, the library uses neural network models trained in [PyTorch](https://pytorch.org/), which are then exported to [ONNX](https://onnx.ai/) and executed using the [RTen](https://github.com/robertknight/rten) engine. See the [models](https://github.com/robertknight/#models-and-datasets) section for more details.

## Status

ocrs is currently in an early preview. Expect more errors than commercial OCR engines.

## CLI installation

To install the CLI tool, you will first need Rust and Cargo installed. Then run:

```bash
cargo install ocrs-cli --locked
```
## CLI usage

To extract text from an image, run:

When the tool is run for the first time, it will download the required models automatically and store them in `~/.cache/ocrs`.

### Additional examples

Extract text from an image and write to `content.txt`:

```
$ ocrs image.png -o content.txt
```

Extract text and layout information from the image in JSON format:

```
$ ocrs image.png --json -o content.json
```

Annotate an image to show the location of detected words and lines:

```
$ ocrs image.png --png -o annotated.png
```

## Library usage

See the [ocrs crate README](https://github.com/robertknight/ocrs/blob/main/ocrs) for details on how to use ocrs as a Rust library.

## Models and datasets

ocrs uses neural network models written in PyTorch. See the [ocrs-models](https://github.com/robertknight/ocrs-models) repository for more details about the models and datasets, as well as tools for training custom models. These models are also available in ONNX format for use with other machine learning runtimes.

## Development

To build and run the ocrs library and CLI tool locally you will need a recent stable Rust version installed. Then run:
```bash
git clone https://github.com/robertknight/ocrs.git
cd ocrs
cargo run -p ocrs-cli -r -- image.png
```