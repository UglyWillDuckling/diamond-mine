# issues

> common issues that can come up when programming in C

`scanf()` **leaves a newline character in the input buffer**: When you press Enter
  after typing a character, a newline character ( \n ) is left in the input buffer.
  The next iteration of the loop will read this newline character instead of the
  next character you type. You can fix this by adding a space before the  %c
  format specifier in the  scanf()  call, like this:  `scanf(" %c", &znak);` . The
  space tells  scanf()  to ignore any whitespace characters (including newlines)
  before reading the next character.

# notes

- [[pointers in C]]
- [[Null Bytes in C]]
- [[Print Formatting in C]]
- [[#chars]]
- [[#arrays]]
- [[integers in C]]

## chars

- All chars appear to be numbers `pop: good to know`
- it is possible to do arithmetic addition with other numbers
```c
    for (i=0;i<4;i++) {
        p3[i] = 'A'+i+11; // All chars appear to actually be 
        printf("%c\n",p3[i]);
    }
```

- ? can we do it with other chars???
	- @ No, nothing happens
- chars are **stored** as numbers

## arrays

- `note: remember` arrays `decay` into pointers when being passed in to functions [^3] [^4] 

### init

```c
int mark[5] = {19, 10, 8, 17, 9};
```
`pop: OR`
```c
int mark[] = {19, 10, 8, 17, 9};
```

- `note: you can initialize an array without declaring it's size`


### declaration

`dataType arrayName[arraySize];`

```c
int data[100];
```

![cdn.programiz.com/sites/tutorial2program/files/c-array-declaration.jpg|200](https://cdn.programiz.com/sites/tutorial2program/files/c-array-declaration.jpg)

- If the size of an array is n, to access the last element, the **n-1** index is used. In this example, mark`[4]`
	- Suppose the starting address of `mark[0]` is 2120d. Then, the address of the mark`[1]` will be 2124d. Similarly, the address of mark`[2]` will be 2128d and so on.
	- This is because the **size of a float is 4 bytes.**[^1]

### 2-dimensional arrays

- `note: note` we will need a **second loop** inside the first one in order to put in the values
	- the same is true for `printing` the values out

```c
// C program to store temperature of two cities of a week and display it.
#include <stdio.h>
const int CITY = 2;
const int WEEK = 7;

int main()
{
  int temperature[CITY][WEEK];

  // Using nested loop to store values in a 2d array
  for (int i = 0; i < CITY; ++i)
  {
    for (int [^2]j = 0; j < WEEK; ++j)
    {
      printf("City %d, Day %d: ", i + 1, j + 1);
      scanf("%d", &temperature[i][j]);
    }
  }
  printf("\nDisplaying values: \n\n");

  // Using nested loop to display vlues of a 2d array
  for (int i = 0; i < CITY; ++i) {
    for (int j = 0; j < WEEK; ++j) {
      printf("City %d, Day %d = %d\n", i + 1, j + 1, temperature[i][j]);
    }
  }
	
  return 0;
}
```



[^1]: [[byte]] is the what we use as most basic unit size of memory
[^3]: [[pointer]]
[^4]: [[function pointer]]

### **inserting elements** into arrays

```c
int arr[6] = {10, 20, 30, 40, 50};
int size = 5;
int pos = 2, num = 25;

// Move elements to make space
for (int i = size; i > pos; i--) {
    arr[i] = arr[i-1];
}

// Insert the new element
arr[pos] = num;
size++;

// Print the updated array
for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
}
```

# code {} examples

### **calculate average** integer value with arrays

```c
#include <stdio.h>
int main() {
  int marks[10], i, n, sum = 0;
  double average;

  printf("Enter number of elements: ");
  scanf("%d", &n);

  for(i=0; i < n; ++i) {
    printf("Enter number%d: ",i+1);
    scanf("%d", &marks[i]);
    // adding integers entered by the user to the sum variable
    sum += marks[i];
  }

  // explicitly convert the sum to double
  // then calculate average
  average = (double)sum / n;

  printf("Average = %.2lf", average);
  return 0;
}
```


### factorial example

- `note: ` we have to use a larger integer in order to store the values of large factorials,
		regular integeres won't do

```c
#include <stdio.h>

int faktorijel(int n) {
    if (n < 0) {
        return -1;
    }

    unsigned int f = 1;
    for (int i = 2; i <= n; i++) {
        f *= i;
    }
    return f;
}

int main() {
    unsigned int f;
    for (int i = 0;i < 20; i++) {
       f = faktorijel(i);
        printf("%d! = %d\n", i, f);
    }
}
```