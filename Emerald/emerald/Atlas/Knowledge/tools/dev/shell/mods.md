https://github.com/charmbracelet/mods

> Large Language Models (LLM) based AI is useful to ingest command output and format results in Markdown, JSON, and other text based formats. Mods is a tool to add a sprinkle of AI in your command line and make your pipelines artificially intelligent.
> It works great with LLMs running locally through LocalAI. You can also use OpenAI, Cohere, Groq, or Azure OpenAI.

## Usage

- `-m`, `--model`: Specify Large Language Model to use.
- `-f`, `--format`: Ask the LLM to format the response in a given format.
- `--format-as`: Specify the format for the output (used with `--format`).
- `-P`, `--prompt`: Prompt should include stdin and args.
- `-p`, `--prompt-args`: Prompt should only include args.
- `-q`, `--quiet`: Only output errors to standard err.
- `-r`, `--raw`: Print raw response without syntax highlighting.
- `--settings`: Open settings.
- `-x`, `--http-proxy`: Use HTTP proxy to connect to the API endpoints.
- `--max-retries`: Maximum number of retries.
- `--max-tokens`: Specify maximum tokens with which to respond.
- `--no-limit`: Do not limit the response tokens.
- `--role`: Specify the role to use (See [custom roles](#custom-roles)).
- `--word-wrap`: Wrap output at width (defaults to 80)
- `--reset-settings`: Restore settings to default.

#### Conversations

- `-t`, `--title`: Set the title for the conversation.
- `-l`, `--list`: List saved conversations.
- `-c`, `--continue`: Continue from last response or specific title or SHA-1.
- `-C`, `--continue-last`: Continue the last conversation.
- `-s`, `--show`: Show saved conversation for the given title or SHA-1.
- `-S`, `--show-last`: Show previous conversation.
- `--delete-older-than=<duration>`: Deletes conversations older than given duration (`10d`, `1mo`).
- `--delete`: Deletes the saved conversation for the given title or SHA-1.
- `--no-cache`: Do not save conversations.

#### Advanced

- `--fanciness`: Level of fanciness.
- `--temp`: Sampling temperature.
- `--topp`: Top P value.
- `--topk`: Top K value.

## Custom Roles

Roles allow you to set system prompts. Here is an example of a `shell` role:

```yaml
roles:
  shell:
    - you are a shell expert
    - you do not explain anything
    - you simply output one liners to solve the problems you're asked
    - you do not provide any explanation whatsoever, ONLY the command
```

Then, use the custom role in `mods`:

```sh
mods --role shell list files in the current directory
```
