---
author: 
created: 2025-04-28
published: 
source: https://silentvoid13.github.io/Templater/introduction.html
tags:
  - docs/templater
about:
  - "[[Templater]]"
---
[[Templater]] is a template language that lets you insert **variables** and **functions** results into your notes. It will also let you execute JavaScript code manipulating those variables and functions.

The following template file, that is using [Templater](https://github.com/SilentVoid13/Templater) syntax:

```javascript
---
creation date: 2025-04-28 11:34
modification date: Monday 28th April 2025 11:34:53
---

<< [[2025-04-27]] | [[2025-04-29]] >>

# Introduction - Templater

> [!quote] The most successful people are those who are good at plan B.
> — James Yorke
```

Will produce the following result when inserted:

```javascript
---
creation date: 2021-01-07 17:20
modification date: Thursday 7th January 2021 17:20:43
---

<< [[2021-04-08]] | [[2021-04-10]] >>

# Test Test

> Do the best you can until you know better. Then when you know better, do better.
> &mdash; <cite>Maya Angelou</cite>
```