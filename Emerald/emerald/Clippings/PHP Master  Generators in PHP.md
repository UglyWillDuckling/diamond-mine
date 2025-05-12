---
author: 
created: 2025-05-08
published: 2013-08-05
source: https://www.sitepoint.com/generators-in-php/#ourfirstgenerator
tags:
  - article/php
---
[Privacy](https://www.sitepoint.com/generators-in-php/#)

## Key Takeaways

- Generators in PHP provide a simple method to implement iterators without the complexity of the Iterator interface, using the ‘yield’ keyword instead of ‘return’ to save its state and continue from where it left off when called again.
- Generators are considerably memory-efficient when dealing with large data sets as they only need to allocate memory for the current result, rather than storing all values in memory at once like an array.
- Despite acting like an iterator, a generator is essentially a function that can return values and receive values from outside by calling the ‘send()’ method of the generator object. It can also be used within another generator, known as generator delegation.

If you’ve followed my previous posts about iterators then you’ll know that iteration is an important programming concept, but implementing the required interfaces to create an iterable object can be a hassle at best because of the amount of boilerplate code that is required. With the release of PHP 5.5, we finally have generators!

In this article we’ll take a look at generators which provide an easy way to implement simple iterators without the overhead or complexity of the `Iterator` interface.

## How do Generators Work?

According to Wikipedia, a generator “is very similar to a function that returns an array, in that a generator has parameters, can be called, and generates a sequence of values”. A generator is basically a normal function, but instead of returning a value it yields as many values as it needs to. It looks like a function but acts like an iterator.

Generators use the `yield` keyword instead of `return`. It acts similar to return in that it returns a value to the caller of the function, but instead of removing the function from the stack, `yield` saves its state. This allows the function to continue from where it was when it’s called again. In fact, you cannot return a value from a generator although you can use `return` without a value to terminate its execution.

The PHP manual states: “When a generator function is called, it returns an object that can be iterated over.” This is an object of the internal [`Generator` class](https://www.php.net/manual/en/class.generator.php)  and implements the  [`Iterator` interface](https://www.php.net/manual/en/class.iterator.php) in the same way a forward-only iterator object does. As you iterate over that object, PHP calls the generator each time it needs a value. The state is saved when the generator yields so that it can be resumed when the next value is required.

```php
<?php

function nums() {
    for ($i = 0; $i < 5; ++$i) {
        yield $i;
        echo "Yielded $in";
    }
}

foreach (nums() as $v);
```

The output of the above code will be:

```
The generator has started
Yielded 0
Yielded 1
Yielded 2
Yielded 3
Yielded 4
The generator has ended
```

## Our First Generator

Generators are not a new concept and already exist in languages such as C#, Python, JavaScript, and Ruby (enumerators), and are usually identified by their use of the `yield` keyword. The following is an example in Python:

```python
def file_lines(filename):

    file = open(filename)

    for line in file:
        yield line

    file.close()

for line in file_lines('somefile'):
    #do some work here
```

Let’s rewrite the example Python generator in PHP. (Note that both snippets do not perform any sort of error checking.)

```php
<?php

function file_lines($filename) {

    $file = fopen($filename, 'r');

    while (($line = fgets($file)) !== false) {

        yield $line;

    }

    fclose($file);

}

foreach (file_lines('somefile') as $line) {

    // do some work here

}
```

The generator function opens a file and then yields each line of the file as and when it is required. Each time the generator is called, it continues from where it left off. It doesn’t start from the beginning again as its state had been saved when the yield statement was executed. Once all lines have been read, the generator simply terminates and the loop ends.

## Returning Keys

PHP iterators consist of key/value pairs. In our example, only a value was returned and therefore the keys were numeric (keys are numeric by default). If you wish to return an associative pair, simply change the yield statement to include the key using array syntax.

```php
<?php

function file_lines($filename) {

    ...

        yield $key => $line;

    ...

}

foreach (file_lines('somefile') as $key => $line) {

    // do some work here

}
```

## Injecting Values

`yield` does not only return values; it can receive values from the outside as well. This is done by calling the [`send()` method](https://www.php.net/manual/en/generator.send.php) of the generator object with the value you wish to pass. This value can then be used in computing or doing other stuff. The method sends the value to the generator as a result of the yield expression and resumes execution.

```php
<?php

function nums() {

    for ($i = 0; $i < 5; ++$i) {

        // get a value from the caller

        $cmd = (yield $i);

        if ($cmd == 'stop') {

            return; // exit the generator

        }

    }

}

$gen = nums();

foreach ($gen as $v) {

    // we are satisfied

    if ($v == 3) {

        $gen->send('stop');

    }

    echo "{$v}n";

}
```

The output will be:

```
0
1
2
3
```

## Saving Memory with Generators

Generators are great for when you are calculating large sets and you don’t want to allocate memory for all of the results at the same time or when you don’t know if you will need all of the results, Due to the way results are processed, the memory footprint can be reduced to a very bare minimum by allocating memory for only the current result.

Imagine the `file()` function which returns all of the lines in a file as an array. Running a simple benchmark for `file()` and our demo file\_lines() functions, each using the same random 100 paragraph text file generated using [Lipsum](https://www.lipsum.com/), showed the file function used up to 110 times more memory than the generator.

```php
<?php

// Test 1

$m = memory_get_peak_usage();

foreach (file_lines('lipsum.txt') as $l);

echo memory_get_peak_usage() - $m, "n"; //Outputs 7336

// Test 2

$m = memory_get_peak_usage();

foreach (file('lipsum.txt') as $l);

echo memory_get_peak_usage() - $m, "n"; // Outputs 148112
```

## Conclusion

With the introduction of Generators, PHP has placed a powerful tool into the hands of developers. We can now write iterators rapidly while saving a lot of memory in the process. With this tutorial, I hope you have gained enough to start using them yourself in your projects. I for one have quite a few objects in mind that I am going to rewrite. If you have any ideas or comments, drop them.

## Frequently Asked Questions about Generators in PHP

### What is the main purpose of using generators in PHP?

Generators in PHP are a simple and powerful tool for creating iterators. They are used primarily to simplify the process of writing code that uses iteration. Instead of creating a class that implements the Iterator interface, you can write a function with the same behavior using the yield keyword. This makes your code easier to read and understand. Generators are also more memory-efficient than using an array, as they don’t need to store all the values in memory at once.

### How does the yield keyword work in PHP generators?

The yield keyword is used in a generator function to provide values to the code that is using the generator. When the generator function is called, it returns an object that can be iterated over. When you iterate over this object, PHP will call the generator function each time it needs a value, then save the state of the generator function so it can be resumed when the next value is needed. This is what makes generators so memory-efficient.

### Can you provide an example of a simple generator in PHP?

Sure, here’s a simple example of a generator that yields the numbers 1 through 5:  
  
`function count_to_five() {`  
`for ($i = 1; $i <= 5; $i++) {`  
`yield $i;`  
`}`  
`}`  
  
`foreach (count_to_five() as $number) {`  
`echo $number, "\n";`  
`}`

### How do generators compare to arrays in terms of memory usage?

Generators are much more memory-efficient than arrays. When you use an array, all the values in the array have to be stored in memory at once. But with a generator, only the current value needs to be in memory. This can make a big difference when you’re dealing with large data sets.

### Can generators return values?

Yes, generators can return values. However, the return statement in a generator behaves differently than in a regular function. In a generator, the return statement ends the generation of values. If you include a value with the return statement, it will be used as the final value for the generator.

### Can I use a generator within a generator in PHP?

Yes, you can use a generator within a generator in PHP. This is known as generator delegation and can be done using the yield from syntax. This allows you to yield values from another generator, an array, or any other iterable object.

### How can I handle exceptions in PHP generators?

You can handle exceptions in PHP generators just like in regular PHP code, using try/catch blocks. If an exception is thrown inside a generator, you can catch it outside the generator in the code that’s using the generator.

### Can I use generators with key-value pairs?

Yes, you can use generators with key-value pairs. You can specify the key in your yield statement like this: yield $key => $value. When you iterate over the generator, you can access both the key and the value.

### Can I use generators in a recursive function?

Yes, you can use generators in a recursive function. This can be useful for tasks like traversing a tree structure. However, keep in mind that each recursive call to the generator function will create a new generator instance.

### Can I rewind a generator?

No, you can’t rewind a generator. Once the generator has been consumed, you can’t iterate over it again. If you need to iterate over the same set of values again, you’ll need to create a new generator.

Stefan "frostymarvelous" Froelich is a hobby programmer who loves to work with scripting languages. He's always up for a challenge and the opportunity to learn something new. At times he freelances, but mostly helps out in forums and various Q&A sites. His aim is to contribute to the community that has given so much to him over the years. Stefan dreams of a world where knowledge is freely shared.

Intermediate

Related articles

[![How to Defend Your Website with Zip Bombs](https://uploads.sitepoint.com/wp-content/uploads/2017/07/1499293616nuke-300x239.jpg)](https://www.sitepoint.com/how-to-defend-your-website-with-zip-bombs/)

[How to Defend Your Website with Zip Bombs](https://www.sitepoint.com/how-to-defend-your-website-with-zip-bombs/)

[![Media Queries: Width vs. Device Width](https://uploads.sitepoint.com/wp-content/uploads/2023/08/1692781397fallback.svg)](https://www.sitepoint.com/media-queries-width-vs-device-width/)

[Media Queries: Width vs. Device Width](https://www.sitepoint.com/media-queries-width-vs-device-width/)

Published in

· [Mobile](https://www.sitepoint.com/mobile/) · [Responsive Web Design](https://www.sitepoint.com/mobile/responsive-web-design/) ·

March 17, 2015

[![9 JavaScript Libraries for Working with Local Storage](https://uploads.sitepoint.com/wp-content/uploads/2023/08/1692781397fallback.svg)](https://www.sitepoint.com/9-javascript-libraries-working-with-local-storage/)

[9 JavaScript Libraries for Working with Local Storage](https://www.sitepoint.com/9-javascript-libraries-working-with-local-storage/)

[![Synchronizing Offline App Data with PouchDB](https://uploads.sitepoint.com/wp-content/uploads/2023/08/1692781397fallback.svg)](https://www.sitepoint.com/synchronizing-offline-app-data-with-pouchdb/)

[Synchronizing Offline App Data with PouchDB](https://www.sitepoint.com/synchronizing-offline-app-data-with-pouchdb/)

Published in

· [App Development](https://www.sitepoint.com/mobile/app-development/) · [Mobile](https://www.sitepoint.com/mobile/) · [Mobile Web Development](https://www.sitepoint.com/mobile/web-mobile/) · [Tools & Libraries](https://www.sitepoint.com/javascript/tools-libraries/) ·

September 25, 2015

[![How to Avoid DOM Blocking in JavaScript](https://uploads.sitepoint.com/wp-content/uploads/2019/02/1550708749dom-blocking-300x200.jpg)](https://www.sitepoint.com/avoiding-dom-blocking/)

[How to Avoid DOM Blocking in JavaScript](https://www.sitepoint.com/avoiding-dom-blocking/)

Published in

· [Ajax](https://www.sitepoint.com/javascript/ajax-javascript/) · [JavaScript](https://www.sitepoint.com/javascript/) ·

February 21, 2019

Contact

[Contact us](https://www.sitepoint.com/contact-us/) [FAQ](https://sitepointhq.notion.site/Sitepoint-FAQs-619b2b88af4f4a5db27beade7ca2cce6) [Publish your book with us](https://www.sitepoint.com/generators-in-php/) [Write an article with us](https://www.sitepoint.com/write-for-us/) [Advertise](https://www.sitepoint.com/partnerships/)

Connect

[RSS](https://www.sitepoint.com/sitepoint.rss) [Facebook](https://www.facebook.com/sitepoint) [Instagram](https://www.instagram.com/sitepointdotcom/?hl=en) [Twitter (X)](https://twitter.com/sitepointdotcom)

© 2000 – 2025 SitePoint Pty. Ltd.