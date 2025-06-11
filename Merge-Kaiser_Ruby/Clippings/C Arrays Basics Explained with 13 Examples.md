---
source: https://www.thegeekstuff.com/2011/12/c-arrays/
author:
  - "[[Himanshu Arora]]"
published:
created: 2025-05-31
tags:
  - article/programming
  - tutorial/c
about:
  - "[[C - programming]]"
  - "[[C programming language]]"
---

![[~/×/c05c3d6bc4bba36df50289c244e504d9_MD5.png|200]]

This article is part of our on-going C programming series.

There are times while writing C code, you may want to store multiple items of same type as contiguous bytes in memory so that searching and sorting of items becomes easy. For example:

1. Storing a string that contains series of characters. Like storing a name in memory.
2. Storing multiple strings. Like storing multiple names.

C programming language provides the concept of arrays to help you with these scenarios.  

### 1\. What is an Array?

An array is a collection of same type of elements which are sheltered under a common name.

An array can be visualised as a row in a table, whose each successive block can be thought of as memory bytes containing one element. Look at the figure below:

An Array of four elements:

```
+===================================================+
| elem1     |  elem2      | elem3      | elem4      |
+===================================================+
```

The number of 8 bit bytes that each element occupies depends on the type of array. If type of array is ‘char’ then it means the array stores character elements. Since each character occupies one byte so elements of a character array occupy one byte each.

### 2\. How to Define an Array?

An array is defined as following:

```
<type-of-array> <name-of-array> [<number of elements in array>];
```
- type-of-array: It is the type of elements that an array stores. If array stores character elements then type of array is ‘char’. If array stores integer elements then type of array is ‘int’. Besides these native types, if type of elements in array is structure objects then type of array becomes the structure.
- name-of-array: This is the name that is given to array. It can be any string but it is usually suggested that some can of standard should be followed while naming arrays. At least the name should be in context with what is being stored in the array.
- \[number of elements\]: This value in subscripts \[\] indicates the number of elements the array stores.

For example, an array of five characters can be defined as:

```
char arr[5];
```

### 3\. How to Initialize an Array?

An array can be initialized in many ways as shown in the code-snippets below.

**Initializing each element separately.** For example:

```
int arr[10];
int i = 0;
for(i=0;i<sizeof(arr);i++) 
{ 
  arr[i] = i; // Initializing each element seperately 
}
```

**Initializing array at the time of declaration.** For example:

```
int arr[] = {'1','2','3','4','5'};
```

In the above example an array of five integers is declared. Note that since we are initializing at the time of declaration so there is no need to mention any value in the subscripts \[\]. The size will automatically be calculated from the number of values. In this case, the size will be 5.

**Initializing array with a string (Method 1):**

Strings in C language are nothing but a series of characters followed by a null byte. So to store a string, we need an array of characters followed by a null byte. This makes the initialization of strings a bit different. Let us take a look:

Since strings are nothing but a series of characters so the array containing a string will be containing characters

```
char arr[] = {'c','o','d','e','\0'};
```

In the above declaration/initialization, we have initialized array with a series of character followed by a ‘\\0’ (null) byte. The null byte is required as a terminating byte when string is read as a whole.

**Initializing array with a string (Method 2):**

```
char arr[] = "code";
```

Here we neither require to explicitly wrap single quotes around each character nor write a null character. The double quotes do the trick for us.

### 4\. Accessing Values in an Array

Now we know how to declare and initialize an array. Lets understand, how to access array elements. An array element is accessed as:

```
int arr[10];
int i = 0;
for(i=0;i<sizeof(arr);i++) 
{ 
  arr[i] = i; // Initializing each element separately 
} 
int j = arr[5]; // Accessing the 6th element of integer array arr and assigning its value to integer 'j'.
```

As we can see above, the 6th element of array is accessed as ‘arr\[5\]’.

Note that for an array declared as int arr\[5\]. The five values are represented as: arr\[0\] arr\[1\] arr\[2\] arr\[3\] arr\[4\] and not arr\[1\] arr\[2\] arr\[3\] arr\[4\] arr\[5\]

The first element of array always has a subscript of ‘0’

### 5\. Array of Structures

The following program gives a brief idea of how to declare, initialize and use array of structures.

```
#include<stdio.h>

struct st{
    int a;
    char c;
}; 

int main()
{
    struct st st_arr[3]; // Declare an array of 3 structure objects 

    struct st st_obj0; // first structure object
    st_obj0.a = 0;
    st_obj0.c = 'a'; 

    struct st st_obj1; //Second structure object
    st_obj1.a = 1;
    st_obj1.c = 'b'; 

    struct st st_obj2; // Third structure object
    st_obj2.a = 2;
    st_obj2.c = 'c'; 

    st_arr[0] = st_obj0; // Initializing first element of array with first structure object
    st_arr[1] = st_obj1; // Initializing second element of array with second structure object
    st_arr[2] = st_obj2; // Initializing third element of array with third structure object 

    printf("\n First Element of array has values of a = [%d] and c = [%c]\n", st_arr[0].a, st_arr[0].c);
    printf("\n Second Element of array has values of a = [%d] and c = [%c]\n", st_arr[1].a, st_arr[1].c);
    printf("\n Third Element of array has values of a = [%d] and c = [%c]\n", st_arr[2].a, st_arr[2].c); 

    return 0;
}
```

The output of the above program comes out to be:

```
$ ./strucarr 

 First Element of array has values of a = [0] and c = [a] 

 Second Element of array has values of a = [1] and c = [b] 

 Third Element of array has values of a = [2] and c = [c]
```

### 6\. Array of Char Pointers

The following program gives a brief Idea of how to declare an array of char pointers:

```
#include<stdio.h>

int main()
{
    // Declaring/Initializing three characters pointers
    char *ptr1 = "Himanshu";
    char *ptr2 = "Arora";
    char *ptr3 = "TheGeekStuff"; 

    //Declaring an array of 3 char pointers
    char* arr[3]; 

    // Initializing the array with values
    arr[0] = ptr1;
    arr[1] = ptr2;
    arr[2] = ptr3; 

    //Printing the values stored in array
    printf("\n [%s]\n", arr[0]);
    printf("\n [%s]\n", arr[1]);
    printf("\n [%s]\n", arr[2]); 

    return 0;
}
```

The output of the above program is:

```
$ ./charptrarr 

 [Himanshu] 

 [Arora] 

 [TheGeekStuff]
```

### 7\. Pointer to Arrays

[Pointers in C Programming language](https://www.thegeekstuff.com/2011/12/c-pointers-fundamentals/) is very powerful. Combining pointers with arrays can be very helpful in certain situations.

As to any kind of data type, we can have pointers to arrays also. A pointer to array is declared as:

```
<data type> (*<name of ptr>)[<an integer>]
```

For example:

```
int(*ptr)[5];
```

The above example declares a pointer ptr to an array of 5 integers.

Lets look at a small program for demonstrating this:

```
#include<stdio.h>

int main(void)
{
    char arr[3];
    char(*ptr)[3]; 

    arr[0] = 'a';
    arr[1] = 'b';
    arr[2] = 'c'; 

    ptr = &arr; 

    return 0;
}
```

In the above program, we declared and initialized an array ‘arr’ and then declared a pointer ‘ptr’ to an array of 3 characters. Then we initialized ptr with the address of array ‘arr’.

### 8\. Static vs Dynamic Arrays

Static arrays are the ones that reside on stack. Like:

```
char arr[10];
```

Dynamic arrays is a popular name given to a series of bytes allocated on heap. this is achieved through malloc() function. Like:

```
char *ptr = (char*)malloc(10);
```

The above line allocates a memory of 10 bytes on heap and we have taken the starting address of this series of bytes in a character pointer ptr.

Static arrays are used when we know the amount of bytes in array at compile time while the dynamic array is used where we come to know about the size on run time.

### 9\. Decomposing Array into Pointers

Internally, arrays aren’t treated specially, they are decomposed into pointers and operated there-on. For example an array like:

```
char arr[10];
```

When accessed like:

```
arr[4] = 'e';
```

is decomposed as:

```
*(arr + 4) = 'e'
```

So we see above that the same old pointers techniques are used while accessing array elements.

### 10\. Character Arrays and Strings

Mostly new programmers get confused between character arrays and strings. Well, there is a very thin line between the two. This thin line only comprises of a null character ‘\\0’. If this is present after a series of characters in an array, then that array becomes a string.  
This is an array:

```
char arr[] = {'a', 'b', 'c'};
```

This is a string:

```
char arr[] = {'a', 'b', 'c', '\0'};
```

Note: A string can be printed through %s format specifier in printf() while an printing an array through %s specifier in printf() is a wrong practice.

### 11\. Bi-dimensional and Multi-dimensional Arrays

The type of array we discussed until now is single dimensional arrays. As we see earlier, we can store a set of characters or a string in a single dimensional array. What if we want to store multiple strings in an array. Well, that wont be possible using single dimensional arrays. We need to use bi-dimensional arrays in this case. Something like:

```
char arr[5][10];
```

The above declaration can be thought of as 5 rows and 10 columns. Where each row may contain a different name and columns may limit the number of characters in the name. So we can store 5 different names with max length of 10 characters each.  
Similarly, what if we want to store different names and their corresponding addresses also. Well this requirement cannot be catered even by bi-dimensional arrays. In this case we need tri-dimensional (or multi-dimensional in general) arrays. So we need something like:

```c
char arr[5][10][50];
```

So we can have 5 names with max capacity of 10 characters for names and 50 characters for corresponding addresses.  
Since this is an advanced topic, So we won’t go into practical details here.

### 12\. A Simple C Program using Arrays

Consider this simple program that copies a string into an array and then changes one of its characters:

```c
#include<stdio.h>
#include<string.h>

int main(void)
{
    char arr[4];// for accommodating 3 characters and one null '\0' byte.
    char *ptr = "abc"; //a string containing 'a', 'b', 'c', '\0' 

    memset(arr, '\0', sizeof(arr)); //reset all the bytes so that none of the byte contains any junk value
    strncpy(arr,ptr,sizeof("abc")); // Copy the string "abc" into the array arr 

    printf("\n %s \n",arr); //print the array as string 

    arr[0] = 'p'; // change the first character in the array 

    printf("\n %s \n",arr);//again print the array as string
    return 0;
}
```

I think the program is self explanatory as I have added plenty of comments. The output of the above program is:

```
$ ./array_pointer 

 abc 

 pbc
```

So we see that we successfully copied the string into array and then changed the first character in the array.

### 13\. No Array Bound Check in a C Program

What is array bound check? Well this is the check for boundaries of array declared. For example:

```
char arr[5];
```

The above array ‘arr’ consumes 5 bytes on stack and through code we can access these bytes using:

```
arr[0], arr[1], arr[2], arr[3], arr[4]
```

Now, C provides open power to the programmer to write any index value in \[\] of an array. This is where we say that no array bound check is there in C. SO, misusing this power, we can access arr\[-1\] and also arr\[6\] or any other illegal location. Since these bytes are on stack, so by doing this we end up messing with other variables on stack. Consider the following example:

```
#include<stdio.h>

unsigned int count = 1; 

int main(void)
{
    int b = 10;
    int a[3];
    a[0] = 1;
    a[1] = 2;
    a[2] = 3; 

    printf("\n b = %d \n",b);
    a[3] = 12;
    printf("\n b = %d \n",b); 

    return 0;
}
```

In the above example, we have declared an array of 3 integers but try to access the location arr\[3\] (which is illegal but doable in C) and change the value kept there.

But, we end up messing with the value of variable ‘b’. Cant believe it?, check the following output. We see that value of b changes from 10 to 12.

```
$ ./stk 

 b = 10 

 b = 12
```

Add your comment

### If you enjoyed this article, you might also like..

| 1. [50 Linux Sysadmin Tutorials](https://www.thegeekstuff.com/2010/12/50-unix-linux-sysadmin-tutorials/) 2. [50 Most Frequently Used Linux Commands (With Examples)](https://www.thegeekstuff.com/2010/11/50-linux-commands/) 3. [Top 25 Best Linux Performance Monitoring and Debugging Tools](https://www.thegeekstuff.com/2011/12/linux-performance-monitoring-tools/) 4. [Mommy, I found it! – 15 Practical Linux Find Command Examples](https://www.thegeekstuff.com/2009/03/15-practical-linux-find-command-examples/) 5. [Linux 101 Hacks 2nd Edition eBook](https://www.thegeekstuff.com/linux-101-hacks-ebook/) | - [Awk Introduction – 7 Awk Print Examples](https://www.thegeekstuff.com/2010/01/awk-introduction-tutorial-7-awk-print-examples/) - [Advanced Sed Substitution Examples](https://www.thegeekstuff.com/2009/10/unix-sed-tutorial-advanced-sed-substitution-examples/) - [8 Essential Vim Editor Navigation Fundamentals](https://www.thegeekstuff.com/2009/03/8-essential-vim-editor-navigation-fundamentals/) - [25 Most Frequently Used Linux IPTables Rules Examples](https://www.thegeekstuff.com/2011/06/iptables-rules-examples/) - [Turbocharge PuTTY with 12 Powerful Add-Ons](https://www.thegeekstuff.com/2008/08/turbocharge-putty-with-12-powerful-add-ons-software-for-geeks-3/) |
| --- | --- |

  

| [![[~/×/1d9fda2c676aea1caeb2d375f1641e82_MD5.png]]](https://www.thegeekstuff.com/bash-101-hacks-ebook/) | [![[~/×/6b5b8051b22bffdebace7938a51268e1_MD5.png]]](https://www.thegeekstuff.com/sed-awk-101-hacks-ebook/) | [![[~/×/d45d1e0760741755187959a7928a6278_MD5.png]]](https://www.thegeekstuff.com/nagios-core-ebook/) | [![[~/×/0d3c65b2120f740d86b81d528dc2f1aa_MD5.png]]](https://www.thegeekstuff.com/vim-101-hacks-ebook/) |
| --- | --- | --- | --- |