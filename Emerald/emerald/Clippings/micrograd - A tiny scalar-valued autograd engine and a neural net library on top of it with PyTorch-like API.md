---
author:
  - "[[GitHub]]"
created: 2025-05-14
published:
source: "https://github.com/karpathy/micrograd"
tags:
---
A tiny scalar-valued autograd engine and a neural net library on top of it with PyTorch-like API

[MIT license](https://github.com/karpathy/micrograd/blob/master/LICENSE)

[Open in github.dev](https://github.dev/) [Open in a new github.dev tab](https://github.dev/) [Open in codespace](https://github.com/codespaces/new/karpathy/micrograd?resume=1)

<table><thead><tr><th colspan="2"><span>Name</span></th><th colspan="1"><span>Name</span></th><th><p><span>Last commit message</span></p></th><th colspan="1"><p><span>Last commit date</span></p></th></tr></thead><tbody><tr><td colspan="3"></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/tree/master/micrograd">micrograd</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/tree/master/micrograd">micrograd</a></p></td><td><p><a href="https://github.com/karpathy/micrograd/commit/5bb639209a5217b543d899dfc23ea968252fa9c1">small tweaks and bug fixes to docs</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/tree/master/test">test</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/tree/master/test">test</a></p></td><td><p><a href="https://github.com/karpathy/micrograd/commit/315dda3d695f7f717e5d77ef9b7d4aff35f5f83f">rename test file to agree better with standard naming schema</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/blob/master/.gitignore">.gitignore</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/blob/master/.gitignore">.gitignore</a></p></td><td><p><a href="https://github.com/karpathy/micrograd/commit/0401485fe6922d879706f38a1b36f4a916716673">haha</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/blob/master/LICENSE">LICENSE</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/blob/master/LICENSE">LICENSE</a></p></td><td><p><a href="https://github.com/karpathy/micrograd/commit/c34adac4a6aaeec4e6ced003335829b0ebc636c9">license should not be markdown, fixing</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/blob/master/README.md">README.md</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/blob/master/README.md">README.md</a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/blob/master/demo.ipynb">demo.ipynb</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/blob/master/demo.ipynb">demo.ipynb</a></p></td><td><p><a href="https://github.com/karpathy/micrograd/commit/9fd9cc02fe5a0e57d790b03572f0d7bcd990662d">fix a bug, end up in a much better spot overall. thank you</a> <a href="https://github.com/sinjax">@sinjax</a> <a href="https://github.com/karpathy/micrograd/commit/9fd9cc02fe5a0e57d790b03572f0d7bcd990662d">and</a> <a href="https://github.com/evcu">…</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/blob/master/gout.svg">gout.svg</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/blob/master/gout.svg">gout.svg</a></p></td><td><p><a href="https://github.com/karpathy/micrograd/commit/486a1ace8da1293b5d26b1021830145e8d1656bf">attempt to produce svgs instead of pngs and lay them out LR to save s…</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/blob/master/moon_mlp.png">moon_mlp.png</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/blob/master/moon_mlp.png">moon_mlp.png</a></p></td><td><p><a href="https://github.com/karpathy/micrograd/commit/47f72e3b1d281166e4e88e172f39c819da0d911a">add brief section of the training demo</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/blob/master/puppy.jpg">puppy.jpg</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/blob/master/puppy.jpg">puppy.jpg</a></p></td><td><p><a href="https://github.com/karpathy/micrograd/commit/7b982bab1f02ce1a20578cc4b299730d1b4acb8a">make puppy image better by matching width and cropping a bit</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/karpathy/micrograd/blob/master/setup.py">setup.py</a></p></td><td colspan="1"><p><a href="https://github.com/karpathy/micrograd/blob/master/setup.py">setup.py</a></p></td><td></td><td></td></tr><tr><td colspan="3"></td></tr></tbody></table>

## micrograd

[![awww](https://github.com/karpathy/micrograd/raw/master/puppy.jpg)](https://github.com/karpathy/micrograd/blob/master/puppy.jpg)

A tiny Autograd engine (with a bite!:)). Implements backpropagation (reverse-mode autodiff) over a dynamically built DAG and a small neural networks library on top of it with a PyTorch-like API. Both are tiny, with about 100 and 50 lines of code respectively. The DAG only operates over scalar values, so e.g. we chop up each neuron into all of its individual tiny adds and multiplies. However, this is enough to build up entire deep neural nets doing binary classification, as the demo notebook shows. Potentially useful for educational purposes.

### Installation

```
pip install micrograd
```

### Example usage

Below is a slightly contrived example showing a number of possible supported operations:

```
from micrograd.engine import Value

a = Value(-4.0)
b = Value(2.0)
c = a + b
d = a * b + b**3
c += c + 1
c += 1 + c + (-a)
d += d * 2 + (b + a).relu()
d += 3 * d + (b - a).relu()
e = c - d
f = e**2
g = f / 2.0
g += 10.0 / f
print(f'{g.data:.4f}') # prints 24.7041, the outcome of this forward pass
g.backward()
print(f'{a.grad:.4f}') # prints 138.8338, i.e. the numerical value of dg/da
print(f'{b.grad:.4f}') # prints 645.5773, i.e. the numerical value of dg/db
```

The notebook `demo.ipynb` provides a full demo of training an 2-layer neural network (MLP) binary classifier. This is achieved by initializing a neural net from `micrograd.nn` module, implementing a simple svm "max-margin" binary classification loss and using SGD for optimization. As shown in the notebook, using a 2-layer neural net with two 16-node hidden layers we achieve the following decision boundary on the moon dataset:

[![2d neuron](https://github.com/karpathy/micrograd/raw/master/moon_mlp.png)](https://github.com/karpathy/micrograd/blob/master/moon_mlp.png)

For added convenience, the notebook `trace_graph.ipynb` produces graphviz visualizations. E.g. this one below is of a simple 2D neuron, arrived at by calling `draw_dot` on the code below, and it shows both the data (left number in each node) and the gradient (right number in each node).

```
from micrograd import nn
n = nn.Neuron(2)
x = [Value(1.0), Value(-2.0)]
y = n(x)
dot = draw_dot(y)
```

[![2d neuron](https://github.com/karpathy/micrograd/raw/master/gout.svg)](https://github.com/karpathy/micrograd/blob/master/gout.svg)

### Running tests

To run the unit tests you will have to install [PyTorch](https://pytorch.org/), which the tests use as a reference for verifying the correctness of the calculated gradients. Then simply:

```
python -m pytest
```

### License

MIT

## Releases

No releases published

## Packages

No packages published  

## Languages

- [Jupyter Notebook 90.3%](https://github.com/karpathy/micrograd/search?l=jupyter-notebook)
- [Python 9.7%](https://github.com/karpathy/micrograd/search?l=python)