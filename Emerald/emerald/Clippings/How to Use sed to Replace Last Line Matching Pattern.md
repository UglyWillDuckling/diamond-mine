---
author:
  - "[[Zach Bobbitt]]"
published: 2024-06-11
created: 2025-06-04
source: https://collectingwisdom.com/sed-replace-last-line-matching-pattern/
tags:
  - howto/sed
about: "[[sed]]"
related:
  - "[[tac]]"
  - "[[cat command]]"
---
---

Often you may want to use sed to replace text in the last line of a file that matches a specific pattern.

You can use the following syntax to do so:

```sh
tac points.txt | sed '/Mavs/ {s//Lakers/; :loop; n; b loop}' | tac
```

This particular example replaces **Mavs** with **Lakers** in the last line of the file named **points.txt** that contains **Mavs** in the line.

Here is how this syntax works:

- First, we use **tac** to first reverse the file.
- Then, we use the sed **s** command to “substitute” the first occurrence of **Mavs** with **Lakers**.
- Then, we use a **loop** to obtain the rest of the file.
- Lastly, we use **tac** to re-reverse the file.

The following example shows how to use this syntax in practice.

## Example: Use sed to Replace Last Line Matching Pattern

Suppose that we have the following file named **points.txt** that contains information about various basketball players:

![](https://collectingwisdom.com/wp-content/uploads/2024/06/secondmatch1.png)

Suppose that we would like to find the last line that contains **Mavs** and replace the text **Mavs** with the text **Lakers** instead.

We can use the following syntax to do so:

```
tac points.txt | sed '/Mavs/ {s//Lakers/; :loop; n; b loop}' | tac
```

The following screenshot shows how to use this syntax in practice:

![](https://collectingwisdom.com/wp-content/uploads/2024/06/replast1.png)

Notice that the last line that contains **Mavs** now contains the pattern **Lakers** instead.

Note that all other lines in the file remain unchanged.

## Related Tutorials

The following tutorials explain how to perform other common tasks in sed:

[How to Use sed to Replace All Occurrences of Pattern](https://collectingwisdom.com/sed-replace-all/)  
[How to Use sed to Replace All Text After Match](https://collectingwisdom.com/sed-replace-text-after-match/)  
[How to Use sed to Replace String Between Two Patterns](https://collectingwisdom.com/sed-replace-string-between-two-patterns/)