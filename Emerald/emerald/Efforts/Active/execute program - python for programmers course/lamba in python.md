
Can only contain 1 expression

you can't use **parentheses**  when defining a lambda

Don't need a return statement, the values are returned automatically

Because lambdas can only contain expressions, we can't use if, while, for, def, or assignments with =. All of those are statements. 
`note:note` Trying to use any statement inside of a lambda function is a syntax error.

> [!bookmark] History
> In the 1930s, Alonzo Church used the Greek letter λ (lambda) in what we now call "the lambda calculus", a formal system critical to the early history of computing. For example, the "identity function", a function that returns its argument, is written as λx. x.
>
The Python lambda syntax is directly descended from Alonzo Church's work, even though a century has passed: lambda x: x. 
The 2 x are the same, the λ becomes the word `lambda` written out, and the . becomes a : . And note that λx. x **doesn't have a name**, just like lambda x: x doesn't have a name.

related: [[lambda calculus]]