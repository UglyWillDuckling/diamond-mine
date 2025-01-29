---
tags:
  - howto
  - docs
---
about:: [[fd]]

The `-x` and `-X` options take a *command template* as a series of arguments (instead of a single string). If you want to add additional options to `fd` after the command template, you can terminate it with a `\;`

The syntax for generating commands is similar to that of [[GNU Parallel]]:

- `{}`: A placeholder token that will be replaced with the **path** of the result (`documents/images/party.jpg`)
- `{.}`: Like `{}`, but **without the file extension** (`documents/images/party`)
- `{/}`: A placeholder that will be replaced by the **basename** (`party.jpg`)
- `{/.}`: The **basename**, with the extension **removed** (`party`)
- `{//}`: The **parent** of the path (`documents/images`)

> [!attention] If you do not include a placeholder, *fd* automatically adds a `{}` at the end.
