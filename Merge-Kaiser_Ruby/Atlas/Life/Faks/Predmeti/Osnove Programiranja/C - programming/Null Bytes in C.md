---
about:
  - "[[C programming language]]"
  - "[[C - programming]]"
---

In C, a null byte, also known as the null character, is a special character with a value of zero (`\0`). It is used to mark the end of a character array, which is commonly referred to as a **string**.

Here's an example:
```c
char myString[] = "Hello"; // null-terminated string
In memory, this would be stored as:
H e l l o \0
```
The `\0` character indicates the end of the string. This allows functions like `printf` and `strlen` to know when to stop processing the string.

**Why is it important?**

`note: note`

Without the null byte, functions would not know when to stop reading the memory, leading to unexpected behavior, buffer overflows, and potential security vulnerabilities.

**Common scenarios where null bytes are used:**

1.  **String manipulation functions like `strcpy`, `strcat` rely on the null byte to know when to stop copying characters.
2.  `printf` and `scanf` use null-terminated strings to know when to stop reading input or printing output.
3.  **Dynamic memory allocation**: when allocating memory for a string, you need to account for the extra byte for the null character.

Do you have any specific questions about null bytes or would you like more information on a related topic?
