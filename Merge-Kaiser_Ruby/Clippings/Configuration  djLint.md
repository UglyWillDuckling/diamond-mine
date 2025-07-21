---
source: https://djlint.com/docs/configuration/
created: 2025-07-13
part_of:
  - "[[djlint]]"
tags:
  - docs/djlint
---
## Configuration

Configuration is done either through your projects `pyproject.toml` file, a `djlint.toml` file or a `.djlintrc` file. Command line args will always override any settings in `pyproject.toml`. Local project settings will always override global configuration files.

The format for `pyproject.toml` is `toml`.

```toml
[tool.djlint]
<config options>
```

The format for `djlint.toml` is `toml`.

```toml
<config options>
```

The format for `.djlintrc` is `json`.

```json
{ "option": "value" }
```

## Options

---

### blank\_line\_before\_tag

Add an additional blank line before `{% <tag> ... %}` tag groups. Blank lines will never be added to start of file or between similar tags.

```toml
blank_line_before_tag="load,extends,include"
```

```json
"blank_line_before_tag": "load,extends,include"
```

```json
--blank-line-before-tag "load,extends,include"
```

### files

A list of paths to use as djlint’s source. When this option is specified, the command line source must be `-` as if using stdin.

```toml
[tool.djlint]
files=["index.html"]
```

```json
"files": [
    "index.html"
]
```

```json
index.html
```

### format\_css

Format contents of `style` tags using `css-beautify`. See [css-beautify](https://github.com/beautify-web/js-beautify/blob/main/python/cssbeautifier/css/options.py) for all configuration options. Template syntax is not [fully supported](https://github.com/beautify-web/js-beautify/issues) in supported.

```toml
[tool.djlint]
format_css=true

[tool.djlint.css]
indent_size=5
```

```json
"format_css": true
"css": {
        "indent_size": 5
    }
```

```json
--format-css --indent-css 5
```

### format\_js

Format contents of `script` tags using `js-beautify`. See [js-beautify](https://github.com/beautify-web/js-beautify/blob/main/python/jsbeautifier/javascript/options.py) for all configuration options. Template syntax is not [fully supported](https://github.com/beautify-web/js-beautify/issues) in supported.

```toml
[tool.djlint]
format_js=true

[tool.djlint.js]
indent_size=5
```

```json
"format_js": true
"js": {
        "indent_size": 5
    }
```

```json
--format-js --indent-js 5
```

### ignore\_blocks

Used to skip indentation on children of template tags. Children will be treated as siblings and indented accordingly.

```toml
ignore_blocks="raw,example"
```

```json
"ignore_blocks": "raw,example"
```

```json
--ignore-blocks "raw,example"
```

### linter\_output\_format

Customize order of output message. Default=“{code} {line} {message} {match}”. If `{filename}` is not included in message, then the output will be grouped by file and a header will automatically be added to each group.

Optional variables:

- `{filename}`
- `{line}`
- `{code}`
- `{message}`
- `{match}`

```toml
linter_output_format="{filename}:{line}: {code} {message} {match}"
```

```json
"linter_output_format": "{filename}:{line}: {code} {message} {match}"
```

```json
--linter_output_format "{filename}:{line}: {code} {message} {match}"
```

### max\_line\_length

Formatter will attempt to put some html and template tags on a single line instead of wrapping them if the line length will not exceed this value.

```toml
max_line_length=120
```

```json
"max_line_length": "120"
```

```json
--max_line_length 120
```

### no\_function\_formatting

Do not attempt to format function contents. \*\* If you use this option please open a gh issue explaining what caused you to use it.

```toml
no_function_formatting=true
```

```json
"no_function_formatting": true
```

```json
--no-function-formatting
```

### no\_set\_formatting

Do not attempt to format set contents. \*\* If you use this option please open a gh issue explaining what caused you to use it.

```toml
no_set_formatting=true
```

```json
"no_set_formatting": true
```

```json
--no-set-formatting
```

### per\_file\_ignores

Ignore linter rules on a per-file basis.

```toml
[tool.djlint.per-file-ignores]
"file.html"= "H026,H025"
"file_two.html"="H001"
```

```json
"per-file-ignores": {
        "file.html": "H026,H025",
        "file_two.html":"H001"
    }
```

```json
--per-file-ignores "file.html" "H026,H025" --per-file-ignores "file_two.html" "H001"
```

### profile

Set a profile for the template language. The profile will enable linter rules that apply to your template language, and may also change reformatting. For example, in `handlebars` there are no spaces inside `{{#if}}` tags.

Options:

- html (default)
- django
- jinja
- nunjucks (for nunjucks and twig)
- handlebars (for handlebars and mustache)
- golang
- angular

```toml
profile="django"
```

```json
"profile": "django"
```

```json
--profile "django"
```

### quiet

Do not print diff when reformatting.

- cli

```json
--quiet
```

### require\_pragma

Only format or lint files that starts with a comment with only the text ‘djlint:on’. The comment can be a HTML comment or a comment in the template language defined by the profile setting. If no profile is specified, a comment in any of the template languages is accepted.

```html
<!-- djlint:on -->
{# djlint:on #}
{% comment %} djlint:on {% endcomment %}
{{ /* djlint:on */ }}
{{!-- djlint:on --}}
```

```toml
require_pragma=true
```

```json
"require_pragma": true
```

```json
--require_pragma
```

### version

Show the version and exit.

- cli

```json
--version
```

### warn

Return errors as warnings.

- cli

```json
--warn
```

Nothing found. Try another search.

[Edit this page](https://github.com/djlint/djLint/edit/master/docs/src/docs/configuration.md) *Updated **Jul 3, 2025***