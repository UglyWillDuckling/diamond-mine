#ai
#shell
#mods

[[mods]] has the --settings [[flag]] which allows you to modify the settings.

- @ `~/.config/mods/mods.yml`

## example settings
```yaml
# Default model (gpt-3.5-turbo, gpt-4, ggml-gpt4all-j...).
default-model: llama3-70b-8192
# Text to append when using the -f flag.
format-text:
  markdown: "Format the response as markdown without enclosing backticks."
  json: "Format the response as json without enclosing backticks."
# List of predefined system messages that can be used as roles.
roles:
  "default": []
  # Example, a role called `shell`:
  # shell:
  #   - you are a shell expert
  #   - you do not explain anything
  #   - you simply output one liners to solve the problems you're asked
  #   - you do not provide any explanation whatsoever, ONLY the command
# Ask for the response to be formatted as markdown unless otherwise set.
format: false
# System role to use.
role: "default"
# Render output as raw text when connected to a TTY.
raw: false
# Quiet mode (hide the spinner while loading and stderr messages for success).
quiet: false
# Temperature (randomness) of results, from 0.0 to 2.0.
temp: 1.0
# TopP, an alternative to temperature that narrows response, from 0.0 to 1.0.
topp: 1.0
# Turn off the client-side limit on the size of the input into the model.
no-limit: false
# Wrap formatted output at specific width (default is 80)
word-wrap: 80
# Include the prompt from the arguments in the response.
include-prompt-args: false
# Include the prompt from the arguments and stdin, truncate stdin to specified number of lines.
include-prompt: 0
# Maximum number of times to retry API calls.
max-retries: 5
# Your desired level of fanciness.
fanciness: 10
# Text to show while generating.
status-text: Generating
# Default character limit on input to model.
max-input-chars: 12250
# Maximum number of tokens in response.
# max-tokens: 100
# Aliases and endpoints for OpenAI compatible REST API.
apis:
  openai:
    base-url: https://api.openai.com/v1
    api-key:
    api-key-env: OPENAI_API_KEY
    models:
      gpt-4o:
        aliases: ["4o"]
        max-input-chars: 392000
        fallback: gpt-4
      gpt-4:
        aliases: ["4"]
        max-input-chars: 24500
        fallback: gpt-3.5-turbo
      gpt-4-1106-preview:
        aliases: ["128k"]
        max-input-chars: 392000
        fallback: gpt-4
      gpt-4-32k:
        aliases: ["32k"]
        max-input-chars: 98000
        fallback: gpt-4
      gpt-3.5-turbo:
        aliases: ["35t"]
        max-input-chars: 12250
        fallback: gpt-3.5
      gpt-3.5-turbo-1106:
        aliases: ["35t-1106"]
        max-input-chars: 12250
        fallback: gpt-3.5-turbo
      gpt-3.5-turbo-16k:
        aliases: ["35t16k"]
        max-input-chars: 44500
        fallback: gpt-3.5
      gpt-3.5:
        aliases: ["35"]
        max-input-chars: 12250
        fallback:
  anthropic:
    base-url: https://api.anthropic.com/v1
    models:
      claude-3-opus-20240229:
        aliases: ["claude3-opus", "opus"]
        max-input-chars: 680000
  ollama:
    base-url: http://localhost:11434/api
    models:
      "llama3:70b":
        aliases: ["llama3"]
        max-input-chars: 650000
  perplexity:
    base-url: https://api.perplexity.ai
    api-key:
    api-key-env: PERPLEXITY_API_KEY
    models:
      llama-3-sonar-small-32k-chat:
        aliases: ["llama3-ss"]
        max-input-chars: 32768
      llama-3-sonar-small-32k-online:
        aliases: ["llam3-sso"]
        max-input-chars: 28000
      llama-3-sonar-large-32k-chat:
        aliases: ["llam3-sl"]
        max-input-chars: 32768
      llama-3-sonar-large-32k-online:
        aliases: ["llam3-slo"]
        max-input-chars: 28000
      llama-3-8b-instruct:
        aliases: ["llam3-8bi"]
        max-input-chars: 8192
      llama-3-70b-instruct:
        aliases: ["llam3-70bi"]
        max-input-chars: 8192
  groq:
    base-url: https://api.groq.com/openai/v1
    api-key-env: GROQ_API_KEY
    models: # https://console.groq.com/docs/models
      gemma-7b-it:
        aliases: ["gemma"]
        max-input-chars: 24500
      llama3-70b-8192:
        aliases: ["llama3", "llama3-70b"]
        max-input-chars: 24500
        fallback: llama3-8b-8192
      llama3-8b-8192:
        aliases: ["llama3-8b"]
        max-input-chars: 24500
      mixtral-8x7b-32768:
        aliases: ["mixtral"]
        max-input-chars: 98000
  localai:
    # LocalAI setup instructions: https://github.com/go-skynet/LocalAI#example-use-gpt4all-j-model
    base-url: http://localhost:8080
    models:
      ggml-gpt4all-j:
        aliases: ["local", "4all"]
        max-input-chars: 12250
        fallback:
  azure:
    # Set to 'azure-ad' to use Active Directory
    # Azure OpenAI setup: https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource
    base-url: https://YOUR_RESOURCE_NAME.openai.azure.com
    api-key:
    api-key-env: AZURE_OPENAI_KEY
    models:
      gpt-4:
        aliases: ["az4"]
        max-input-chars: 24500
        fallback: gpt-35-turbo
      gpt-35-turbo:
        aliases: ["az35t"]
        max-input-chars: 12250
        fallback: gpt-35
      gpt-35:
        aliases: ["az35"]
        max-input-chars: 12250
        fallback:
  runpod:
    # https://docs.runpod.io/serverless/workers/vllm/openai-compatibility
    base-url: https://api.runpod.ai/v2/${YOUR_ENDPOINT}/openai/v1
    api-key:
    api-key-env: RUNPOD_API_KEY
    models:
      openchat/openchat-3.5-1210:
        aliases: ["openchat"]
        max-input-chars: 8192

```