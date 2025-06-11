## Formatting float output in C

can be achieved using `printf()` function. You can use format specifiers to control the output.

Here are some common format specifiers for float:

* `%f` : This will print the float value with six digits after the decimal point.
* `%.nf` : This will print the float value with `n` digits after the decimal point.
* `%e` : This will print the float value in scientific notation.
* `%g` : This will print the float value in either normal or scientific notation, whichever is more compact.
* `%p`: print a pointers memory location

```c
#include <stdio.h>
int main() {
    float pi = 3.14159;

    printf("Plain float: %f\n", pi);
    printf("Float with 2 digits after decimal: %.2f\n", pi);
    printf("Float in scientific notation: %e\n", pi);
    printf("Float in compact notation: %g\n", pi);
    return 0;
}
```

**output**
```c
Plain float: 3.141590
Float with 2 digits after decimal: 3.14
Float in scientific notation: 3.141590e+00
Float in compact notation: 3.14159
```

## integer output

```c
#include <stdio.h>

int main() {
int x = 10;
unsigned int y = 20;
long z = 30;
short w = 40;

printf("Signed int: %d\n", x);  // Output: 10
printf("Unsigned int: %u\n", y);  // Output: 20
printf("Long int: %ld\n", z);  // Output: 30

printf("Short int: %hd\n", w);  // Output: 40
}
```
