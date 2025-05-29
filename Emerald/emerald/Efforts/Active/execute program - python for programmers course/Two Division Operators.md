---
part of:
  - "[[execute program - python for programmers course]]"
---


```python
5 // 2.0
# 2.0
```

```python
5 // 2
# 2
```
___
We separate integers and floats because different problems call for different kinds of numbers. When indexing into arrays (which Python calls "lists") we don't want to worry about whether the i in some_list[i] is actually 1.2. We always use integers for list indexes.

If we're writing a game, we might need to represent coordinates in 2D or 3D space: "the player is at coordinate (2.162, 92.816)". But we also need the code to be fast, and it's OK if the player's position in the game world is off by 0.00000000000000004. Floating point is perfect for this: **it's very fast**, it's a "real number" data type with a decimal point, and `its imprecision doesn't matter in this case.`

👀 Python has more number types than just these two. 
It also has **complex** numbers, **decimals**, and **fractions**. These are much less common, and used only in specialized situations. For most code, ints and floats are sufficient.

next: [[Python Functions]]