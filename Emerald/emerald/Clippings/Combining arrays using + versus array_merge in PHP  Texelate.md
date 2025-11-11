---
author:
created: 2025-11-11
published:
source: https://www.texelate.co.uk/blog/combining-arrays-using-plus-versus-array-merge-in-php
tags:
  - howto
category:
  - "[[HowTo]]"
  - "[[php]]"
---

In PHP you can combine arrays using `+` or you can use `array_merge`. What’s the difference?
___

There are some differences between using associative arrays and sequential arrays. Associative arrays first:

```php
$array1['foo'] = 'Bar 1';
$array2['foo'] = 'Bar 2';

print_r($array1 + $array2); // Array ( [foo] => Bar 1 )
print_r($array2 + $array1); // Array ( [foo] => Bar 2 )
print_r(array_merge($array1, $array2)); // Array ( [foo] => Bar 2 )
print_r(array_merge($array2, $array1)); // Array ( [foo] => Bar 1 )
```

The only difference is when using `+` the array *doesn’t* get overwritten but with `array_merge` it does.

When dealing with sequential arrays, however, the difference is greater.

```php
$array1 = [1, 2, 3, 4, 5];
$array2 = [6, 7, 8, 9, 10];

print_r($array1 + $array2); // Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 ) 
print_r($array2 + $array1); // Array ( [0] => 6 [1] => 7 [2] => 8 [3] => 9 [4] => 10 )
print_r(array_merge($array1, $array2)); // Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 [6] => 7 [7] => 8 [8] => 9 [9] => 10 ) 
print_r(array_merge($array2, $array1)); // Array ( [0] => 6 [1] => 7 [2] => 8 [3] => 9 [4] => 10 [5] => 1 [6] => 2 [7] => 3 [8] => 4 [9] => 5 )
```

Because the arrays are automatically assigned numerical indices starting from `0` the results with `+` aren’t that different to using associative arrays — it's just that the keys are *implicit* in the code rather than *explicit* per an associative array.

The bigger difference is when standard arrays are merged. `array_merge()` doesn’t overwrite anything but rather joins the arrays up in the order you passed them to the function.

The [documentation on the array\_merge page](http://php.net/manual/en/function.array-merge.php) explains it this way:

> If the input arrays have the same string keys, then the later value for that key will overwrite the previous one. If, however, the arrays contain numeric keys, the later value will *not* overwrite the original value, but will be appended.  
>   
> Values in the input array with numeric keys will be renumbered with incrementing keys starting from zero in the result array.

[How-tos](https://www.texelate.co.uk/blog/page/1?category=9)

![](https://www.texelate.co.uk/assets/img/gui/me.jpg?7) Tim Bennett is a [web designer and developer](https://www.texelate.co.uk/). He has a First Class Honours degree in Computing from Leeds Metropolitan University and currently runs his own one-man web design company, Texelate.