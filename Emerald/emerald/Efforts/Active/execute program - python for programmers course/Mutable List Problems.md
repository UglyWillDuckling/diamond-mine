Like many languages, Python sometimes uses mathematical operators for operations that don't involve numbers. For example, we've already used + to combine strings.


We've also used + to concatenate lists.

>
first_primes = [2, 3, 5]
more_primes = [7, 11, 13]
first_primes + more_primes
Result:
[2, 3, 5, 7, 11, 13]
Strings and lists also support the * operator, which is fairly uncommon in programming languages. If we "multiply" a string by a number, we get that string repeated that number of times. For example, 3 * some_string gives us the same result as some_string + some_string + some_string.

>
3 * "more"
Result:
'moremoremore'
With numbers, x * y = y * x. The same is true with strings: we get the same result if we switch the operands' order.

>
"more" * 3
Result:
'moremoremore'
This is mostly a novelty, but does have its uses. For example, it can be useful when building string output in command-line tools. The next example builds up an ASCII-art arrow of a specified length. We can use this to dynamically size arrows, allowing us to style our tool's output.

>
	arrow_length = 5

	arrow = "=" * (arrow_length - 1) + ">"
	arrow
	Result:
	'====>'
	
The same trick works with lists: * gives us a new list, with the original list's contents repeated a certain number of times.

	>
	[1, 2] * 3
	Result:
	[1, 2, 1, 2, 1, 2]
At first, this seems much more useful, since it lets us initialize a list of a certain size. The next example creates a list of four zeros.

	>
	[0] * 4
	Result:
		[0, 0, 0, 0]

____

That code works and is safe. However, this technique becomes very dangerous in some situations. To see why, we'll switch to creating lists of lists.

In the next example, we make a list of 3 empty lists. They're 3 distinct empty lists, each stored at a different location in memory. When we modify one list, the other two lists are unaffected.

