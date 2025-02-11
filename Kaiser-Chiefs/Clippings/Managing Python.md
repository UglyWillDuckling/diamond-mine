---
source: https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-python.html
created: 2025-02-10
tags:
  - docs/official
  - howto/conda
aliases:
  - How to Update Python
---
Conda treats Python the same as any other package, so it is easy to manage and update multiple installations.

Conda supports Python 3.9, 3.10, 3.11 and 3.12.

## Viewing a list of available Python versions#

To list the versions of Python that are available to install, in your terminal window, run:

This lists all packages whose names contain the text `python`.

To list only the packages whose full name is exactly `python`, add the `--full-name` option. In your terminal window, run:

```bash
conda search --full-name python
```

## Installing a different version of Python#

To install a different version of Python without overwriting the current version, create a new environment and install the second Python version into it:

1. Create the new environment:

- To create the new environment for Python 3.9, in your terminal window run:

```bash
conda create -n py39 python=3.9
```

Note

Replace `py39` with the name of the environment you want to create. `python=3.9` is the package and version you want to install in this new environment. This could be any package, such as `numpy=1.19`, or [multiple packages](https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-pkgs.html#installing-multiple-packages).
2. [Activate the new environment](https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-environments.html#activate-env).
3. Verify that the new environment is your [current environment](https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-environments.html#determine-current-env).
4. To verify that the current environment uses the new Python version, in your terminal window, run:

## Installing PyPy

To use the PyPy builds you can do the following:

```default
conda config --add channels conda-forge
conda config --set channel_priority strict
conda create -n pypy pypy
conda activate pypy
```

## Using a different version of Python#

To switch to an environment that has different version of Python, [activate the environment](https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-environments.html#activate-env).

## Updating Python#

To update Python to the latest version in your environment, run:

This command will update you to the latest major release (e.g. from `python=3.10` to `python=3.12`).

If you would like to remain on a minor release, use the `conda install` command instead:

```bash
conda install python=3.10
```