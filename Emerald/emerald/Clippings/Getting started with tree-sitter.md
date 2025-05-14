---
author: 
created: 2025-05-13
published: 
source: https://dcreager.net/2021/06/getting-started-with-tree-sitter/
tags:
  - howto/tree-sitter
about: "[[Tree-sitter]]"
---
## Getting started with tree-sitter

This is the first in a series of posts on using the tree-sitter parsing framework. The primary audience, at least for these first posts, is people who want to use *existing grammars* to write program analysis tools that work across a variety of programming languages. I’m not (yet) writing about how to create a *new* grammar for a new programming language.

[tree-sitter](https://tree-sitter.github.io/)

We’re going to start by keeping it very simple. In this post, we’re going to install the tree-sitter command-line program and the Python grammar, and then use those to parse and syntax highlighting some Python code.

## Installing tree-sitter

Your first goal is to get tree-sitter itself installed. You have a few options:

### Native package manager

Some platforms have tree-sitter available in the native package manager. For instance, on Arch Linux, you can install tree-sitter using pacman:

```
$ sudo pacman -S tree-sitter
$ tree-sitter --version
tree-sitter 0.19.5
```

Similarly, if you’re using a Mac, there’s a Homebrew formula available:

```
$ brew install tree-sitter
$ tree-sitter --version
tree-sitter 0.19.5
```

### Precompiled binary

If your platform doesn’t package tree-sitter (or if it does, but it’s out of date), you can download a precompiled binary from tree-sitter’s releases page on GitHub.

[tree-sitter releases \[github.com\]](https://github.com/tree-sitter/tree-sitter/releases/latest)

The tree-sitter command-line program is a static binary with no dependencies, so you just need to download it, unpack it, and place it somewhere in your $PATH:

```
$ curl -OL https://github.com/tree-sitter/tree-sitter/releases/download/v0.19.5/tree-sitter-linux-x64.gz
$ mkdir -p $HOME/bin
$ gunzip tree-sitter-linux-x64.gz > $HOME/bin/tree-sitter
$ chmod u+x $HOME/bin/tree-sitter
$ export PATH=$HOME/bin:$PATH
$ tree-sitter --version
tree-sitter 0.19.5 (8d8690538ef0029885c7ef1f163b0e32f256a5aa)
```

### NPM package

The command-line program is also available in the NPM registry via the tree-sitter-cli package:

```
$ npm install tree-sitter-cli
```

Since this places the command-line program into your node\_modules directory, you use npx to run it:

```
$ npx tree-sitter --version
tree-sitter 0.19.4 (6dd41e2e45f8b4a00fda21f28bc0ebc6b172ffed)
```

(This option is especially useful when you’re editing a grammar, since it’s the easiest way to install tree-sitter as part of a CI build in your grammar repository.)

## Installing a grammar

At this point, you should have the tree-sitter program installed. If we try to parse some Python code, however, it won’t work!

```
$ tree-sitter --version
tree-sitter 0.19.5

$ cat example.py
import utils

def add_four(x):
    return x + 4

print(add_four(5))

$ tree-sitter parse example.py
No language found
```

This is because tree-sitter does not install any language grammars by default — after all, we have no idea which particular languages you want to parse and analyze!

That means that if we want to parse Python code, we need to install the tree-sitter Python grammar. The tree-sitter program has a nice feature where it will automatically generate and compile language parsers for you; all you have to do is check out the grammar’s git repository into a well-known location.

To set this up, we first need to generate a configuration file for the command-line program. This config file will tell tree-sitter where to find the language grammars that you want to use. If you run the following:

```
$ tree-sitter init-config
```

then tree-sitter will create a new configuration file for you at ‘$HOME/.tree-sitter/config.json’. Open that file in your editor of choice, and you will see a \`parser\_directories’ section at the top:

```
$ head -n 6 ~/.tree-sitter/config.json
{
  "parser-directories": [
    "/home/dcreager/github",
    "/home/dcreager/src",
    "/home/dcreager/source"
  ],
```

You can choose whatever directories you want to hold your grammar definitions. The tree-sitter program will assume that any subdirectory in those locations whose name matches the pattern ‘tree-sitter-\[language\]’ holds a grammar definition. It will automatically generate and compile those grammars, if needed, each time it starts up.

> For this to work, you must also have Node.js and a C compiled installed (since the grammar definitions are written in a JavaScript-based DSL, and the generated parsers are implemented in C).

Given all of this, you need to clone the Python grammar into one of the directories listed in the config file. (If you decide to change your config file to use a different directory, make sure to change the commands below accordingly.)

```
$ mkdir -p ~/src
$ cd ~/src
$ git clone https://github.com/tree-sitter/tree-sitter-python
```

## Parsing some code

Having done that, the tree-sitter parse command should now print out a parse tree for our example file:

```
$ tree-sitter parse example.py
(module [0, 0] - [6, 0]
  (import_statement [0, 0] - [0, 12]
    name: (dotted_name [0, 7] - [0, 12]
      (identifier [0, 7] - [0, 12])))
  (function_definition [2, 0] - [3, 16]
    name: (identifier [2, 4] - [2, 12])
    parameters: (parameters [2, 12] - [2, 15]
      (identifier [2, 13] - [2, 14]))
    body: (block [3, 4] - [3, 16]
      (return_statement [3, 4] - [3, 16]
        (binary_operator [3, 11] - [3, 16]
          left: (identifier [3, 11] - [3, 12])
          right: (integer [3, 15] - [3, 16])))))
  (expression_statement [5, 0] - [5, 18]
    (call [5, 0] - [5, 18]
      function: (identifier [5, 0] - [5, 5])
      arguments: (argument_list [5, 5] - [5, 18]
        (call [5, 6] - [5, 17]
          function: (identifier [5, 6] - [5, 14])
          arguments: (argument_list [5, 14] - [5, 17]
            (integer [5, 15] - [5, 16])))))))
```

You can play around further by parsing example files from other languages — first clone the necessary language grammar into the same ‘$HOME/src’ directory, and then use tree-sitter parse.