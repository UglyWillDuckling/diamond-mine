---
source: http://natpryce.com/articles/000812.html
author:
  - "[[Nat Pryce]]"
published: 
created: 2025-03-30
tags:
  - article/javascript
  - javascript/async
---
## Refactoring JavaScript from Sync to Async in Safe Baby-Steps

Consider some JavaScript code that gets and uses a value from a synchronous call or built in data structure:

```javascript
function to_be_refactored() {
    var x;
    ...
    x = get_x();
    ...use x...
}
```

Suppose we want to replace this synchronous call with a call to a service that has an asynchronous API (an HTTP fetch, for example).

How can we refactor the code from synchronous to asynchronous style in small safe steps?

First, wrap the the remainder of the function after the line that gets the value in a “continuation” function that takes the value as a parameter and closes over any other variables in its environment. Pass the value to the continuation function:

```javascript
function to_be_refactored() {
    var x, cont;
    ...
    x = get_x();
    cont = function(x) {
       ...use x...
    };
    cont(x);
}
```

Then pull the definition of the continuation function before the code that gets the value:

```javascript
function to_be_refactored() {
    var x, cont;
    cont = function(x) {
        ...use x...
    };
    ...
    x = get_x();
    cont(x);
}
```

Now extract the last two lines that get the value and call the continuation into a single function that takes the continuation as a parameter and pass the continuation to it.

```javascript
function to_be_refactored() {
    ...
    get_x_and(function(x) {
        ...use x...
    });
}

function get_x_and(cont) {
    cont(get_x());
}
```

If you have calls to `get_x` in many places in your code base, move `get_x_and` into a common module so that it can be called everywhere that `get_x` is called.

Transform the remaining uses of `get_x` to [“continuation passing style”](https://en.wikipedia.org/wiki/Continuation-passing_style), replacing the calls to `get_x` with calls to `get_x_and`.

Finally, replace the implementation of `get_x_and` with a call to the async service and delete the `get_x` function.

Wouldn’t it be nice if IDEs could do this refactoring automatically?

## The Trouble With Shared Mutable State

[Dale Hagglund](https://twitter.com/DaleHagglund) asked [via Twitter](https://twitter.com/DaleHagglund/status/629665828074450944) “What if cont assumes that some \[shared mutable\] property remains constant across the async invocation? I’ve always found these very hard to unmake.”

In that case, you’ll have to copy the current value of the shared, mutable property into a local variable that is then closed over by the continuation.

E.g.

```javascript
function to_be_refactored() {
    var x;
    ...
    x = get_x();

    ...use x and shared_mutable_y() ...
}
```

would have to become:

```javascript
function to_be_refactored() {
    var y;
    ...
    y = shared_mutable_y();
    get_x_and(function(x) {
        ...use x and y...
    });
}
```

Copyright © 2015 Nat Pryce. Posted 2015-08-08. [Share it.](http://www.reddit.com/submit?url=http://natpryce.com/articles/000812.html&title=Refactoring%20JavaScript%20from%20Sync%20to%20Async%20in%20Safe%20Baby-Steps "Share it on Reddit")