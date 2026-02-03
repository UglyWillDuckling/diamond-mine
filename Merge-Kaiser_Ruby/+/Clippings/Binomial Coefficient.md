---
source: "https://www.statisticshowto.com/binomial-coefficient/"
author:
  - "[[Alexander]]"
published: 2017-07-07
created: 2025-03-19
tags:
---
[Statistics Definitions](https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/) >

Binomial coefficients tell us **how many ways there are to choose *k* things out of larger set**.

More formally, they are defined as the coefficients for each term in (1+x)<sup>n</sup>.
${n \choose k}$
Written as ${n \choose k}$ , (read n choose k), where is the binomial coefficient of the x<sup>k</sup> term of the polynomial.

An alternate notation is <sub>n</sub>C<sub>k</sub>.

For [non-negative integer](https://www.statisticshowto.com/non-negative-integer/) values of n (number in the set) and k (number of items you choose), every binomial coefficient <sub>n</sub>C<sub>k</sub> is given by the formula:  
[![[~/×/20bf82f83e3aa824571cc0bfde9c2ddf_MD5.png]]](https://www.statisticshowto.com/wp-content/uploads/2017/07/image1.png)  
The “!” symbol is a [factorial](https://www.statisticshowto.com/factorial-distribution/#definition).

## Examples

Imagine you have 5 elements {a, b, c, d, f}. To find out how many different subsets of 2 elements it has, look at the binomial coefficient <sub>5</sub>C<sub>2</sub>.  
[![[~/×/464bb5d4142bccf582e8f75215ea3505_MD5.png]]](https://www.statisticshowto.com/wp-content/uploads/2017/07/image-4.png)  
This equals 10.

> [!NOTE]
> The question would be how many different ways are there to choose 2 items from a set of 5 items?

For a more concrete example, suppose the president of a student club must pick three members of an advisory board from a faculty pool of 24. To find out how many ways he could make this choice, look at the <sub>24</sub>C<sub>3</sub> binomial coefficient, 24!/(3! 21!)= 2024. So the president of the student club has 2024 cabinet choices.

## Importance of the Binomial Coefficient in Statistics

The binomial coefficient is much more than just a simple formula to calculate how many ways you can pull an advisory board from a candidate pool, a 4-digit pin from a 10-digit set, or a plate of apples from a bin of the same. It’s also part of the description of the [binomial distribution,](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/) a simple [probability distribution](https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/probability-distribution/) for frequently encountered 2-outcome situations.

If your observations are [independent](https://www.statisticshowto.com/independent-random-variables/), each represents one of two outcomes (think: success and failure), your number of trials are fixed and the probability of success is the same for each trial, then the probability you have exactly r successes during your n independent trials will be  
[![[~/×/6ce47e6244a9e3b59b1def2ab695b176_MD5.png]]](https://www.statisticshowto.com/wp-content/uploads/2017/07/image2.png)  
This formula represents the binomial distribution. Here p is the probability of success in each instance, and q=1-p, the probability of failure.

The binomial coefficient n choose r tells you how many success-failure sequences, of the set of all possible sequences, will result in exactly r successes.  The probability of each of those individual sequences happening is just  p<sup>r</sup>q<sup>n-r</sup>.

## References

Binomial Coefficients @ Dartmouth. Retrieved September 27, 2017 from: https://math.dartmouth.edu/archive/m19w03/public\_html/Section1-3.pdf  
CS4205 Binomial Coefficients. Retrieved September 27, 2017 from: http://www.cs.columbia.edu/~cs4205/files/CM4.pdf
