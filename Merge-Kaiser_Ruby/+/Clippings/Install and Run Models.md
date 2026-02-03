---
source: https://localai.io/docs/getting-started/models/
author:
  - "[[Colin Wilson - Lotus Labs]]"
published: 
created: 2025-04-02
tags:
  - doc/localai
---
*rocket\_launch*

To install models with LocalAI, you can:

- Browse the Model Gallery from the Web Interface and install models with a couple of clicks. For more details, refer to the [Gallery Documentation](https://localai.io/models/).
- Specify a model from the LocalAI gallery during startup, e.g., `local-ai run <model_gallery_name>`.
- Use a URI to specify a model file (e.g., `huggingface://...`, `oci://`, or `ollama://` ) when starting LocalAI, e.g., `local-ai run huggingface://TheBloke/phi-2-GGUF/phi-2.Q8_0.gguf`.
- Specify a URL to a model configuration file when starting LocalAI, e.g., `local-ai run https://gist.githubusercontent.com/.../phi-2.yaml`.
- Manually install the models by copying the files into the models directory ( `--models` ).

## Run and Install Models via the Gallery

To run models available in the LocalAI gallery, you can use the WebUI or specify the model name when starting LocalAI. Models can be found in the gallery via the Web interface, the [model gallery](https://models.localai.io/), or the CLI with: `local-ai models list`.

To install a model from the gallery, use the model name as the URI. For example, to run LocalAI with the Hermes model, execute:

To install only the model, use:

Note: The galleries available in LocalAI can be customized to point to a different URL or a local directory. For more information on how to setup your own gallery, see the [Gallery Documentation](https://localai.io/models/).

## Run Models via URI

To run models via URI, specify a URI to a model file or a configuration file when starting LocalAI. Valid syntax includes:

- `file://path/to/model`
- `huggingface://repository_id/model_file` (e.g., `huggingface://TheBloke/phi-2-GGUF/phi-2.Q8_0.gguf` )
- From OCIs: `oci://container_image:tag`, `ollama://model_id:tag`
- From configuration files: `https://gist.githubusercontent.com/.../phi-2.yaml`

Configuration files can be used to customize the model defaults and settings. For advanced configurations, refer to the [Customize Models section](https://localai.io/docs/getting-started/customize-model/).

### Examples

## Run Models Manually

Follow these steps to manually run models using LocalAI:

1. **Prepare Your Model and Configuration Files**: Ensure you have a model file and, if necessary, a configuration YAML file. Customize model defaults and settings with a configuration file. For advanced configurations, refer to the [Advanced Documentation](https://localai.io/docs/advanced/).
2. **GPU Acceleration**: For instructions on GPU acceleration, visit the [GPU Acceleration](https://localai.io/features/gpu-acceleration/) page.
3. **Run LocalAI**: Choose one of the following methods to run LocalAI:

For more model configurations, visit the [Examples Section](https://github.com/mudler/LocalAI/tree/master/examples/configurations).

[Edit this page](https://github.com/mudler/LocalAI/blob/master/docs/content/docs/getting-started/models.md)

Last updated 8 months ago. history


```sh
# Prepare the models into the `models` directory
mkdir models

# Copy your models to the directory
cp your-model.gguf models/

# Run the LocalAI container
docker run -p 8080:8080 -v $PWD/models:/models -ti --rm quay.io/go-skynet/local-ai:latest --models-path /models --context-size 700 --threads 4

# Expected output:
# ┌───────────────────────────────────────────────────┐
# │                   Fiber v2.42.0                   │
# │               http://127.0.0.1:8080               │
# │       (bound on host 0.0.0.0 and port 8080)       │
# │                                                   │
# │ Handlers ............. 1  Processes ........... 1 │
# │ Prefork ....... Disabled  PID ................. 1 │
# └───────────────────────────────────────────────────┘

# Test the endpoint with curl
curl http://localhost:8080/v1/completions -H "Content-Type: application/json" -d '{
     "model": "your-model.gguf",
     "prompt": "A long time ago in a galaxy far, far away",
     "temperature": 0.7
   }'
```
