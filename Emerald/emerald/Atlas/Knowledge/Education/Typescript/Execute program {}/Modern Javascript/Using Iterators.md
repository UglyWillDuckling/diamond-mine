#iterator

[[iterator pattern]]
[[Generators]]
[[Defining Iterators]]

---

## usage

### working with desctructuring
- ' iterators work with [[destructuring]]

```js
function* letters() {
  yield 'a';
  yield 'b';
  yield 'c';
}
const [, b, c] = letters();
[b, c];
```

### with spread syntax

```js
[...letters()];
['a', 'b', 'c']
```

## about

> By design, iterators always move forward. Once they've iterated over a value, they can never go back to that value or any earlier values. There's no rewind or restart method.

## advantages

### streaming data
<mark class='important'>they can iterate over data even if we don't have all of the data yet</mark>

For example, if we're receiving data streaming from the network, we can write an iterator that lets us loop over it, even though only a small part of data is available to us at any given time.

### infinite in length
#infinite

>  Every computer is finite, so we can never have an infinitely large data structure. But iterators iterate over data only as it's needed, so they can represent infinite sequences of data without ever having to store it all in memory at the same time

<mark class='important'>can represent infinite sequences of data</mark>

#### prime `numbers`
```js
function* primeNumbers() {
  let i = 2;
  
  while (true) {
    // Assume every number is a prime until we discover that it's not.
    let prime = true;
    
    /* If this number is divisible by any number less than itself, then
     * it's not prime. For example, 4 is divisible by 2, so it's not
     * prime. 5 isn't divisible by 2, 3, or 4, so it is prime.
     */
    for (let j=2; j<i; j++) {
      if (i % j === 0) {
        prime = false;
      }
    }

    if (prime) {
      yield i;
    }

    i += 1;
  }
}
const [p1, p2, p3, p4, p5] = primeNumbers();
[p1, p2, p3, p4, p5];
```

> [!info] infinite loop
> 
The primeNumbers generator contains an infinite loop, `while(true)`, so it looks like it will never terminate. However, remember that generators stop executing whenever they hit a `yield`. They remain <mark style="background: #ABF7F7A6;"> frozen in time</mark> until we call their iterator's .next() again, at which point they resume executing just after the yield.

- ~ The loop may be infinite when examined `syntactically`, but each `yield` is a chance for it to **pause**, <mark style="background: #FFB8EBA6;">possibly forever</mark>.

> The technical term for all of this is "laziness". Iterators are lazy: they only produce data when it's requested via calls to .next(). Laziness is what allows us to iterate over data coming in from the network, or iterate over an infinite list of prime numbers.

##### calling a 100 times
```js
let count = 0;
let answer;
for (const prime of primeNumbers()) {
  answer = prime;
  count += 1;
  if (count === 100) {
    break;
  }
}
541
```

## final thoughts 📗

> That's all for iterators! They're a complex topic: there's an entire iteration protocol, and several ways to consume iterators. In exchange for their complexity, iterators let us work with streaming data, work with infinite lists of data, and use native constructs like loops with our own custom objects. And adding generators lets us avoid writing verbose iterator code, even though the iterator protocols are still at work under the hood.

## local
[local code examples](file:///home/vsedlar/dev/study/javascript/execute/iterators)
