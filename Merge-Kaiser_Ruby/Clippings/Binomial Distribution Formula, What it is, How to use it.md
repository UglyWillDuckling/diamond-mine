---
source: https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/
author:
  - "[[Statistics How To]]"
published: 
created: 2025-03-20
tags:
  - Math
related:
  - "[[Binomial Coefficient]]"
---
**Contents:**

1. [What is a Binomial Distribution?](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/#whatis)
2. [The Binomial Distribution Formula](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/#formula)
3. [Worked Examples](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/#examples)
4. [The Bernoulli Distribution](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/#bernoulli)
5. [Lexian distribution](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/#lexian)

## What is a Binomial Distribution?

![what is a binomial distribution](https://www.statisticshowto.com/wp-content/uploads/2013/07/Binomial_distribution_pmf.svg_.png)

A binomial distribution probability mass function (pmf) \[1\].

  The **binomial distribution** evaluates the probability for an outcome to either succeed or fail. These are called [mutually exclusive](https://www.statisticshowto.com/mutually-exclusive-event/) outcomes, which means you either have one or the other — but not both at the same time. For example, you either win the lottery or you don’t, a drug to cure a disease works or it doesn’t, or a test results in a pass or a fail. Binomial distributions come help us to analyze the probability of events such as these. Many instances of binomial distributions can be found in real life. For example, if a new drug is introduced to cure a disease, it either cures the disease (it’s successful) or it doesn’t cure the disease (it’s a failure). If you purchase a lottery ticket, you’re either going to win money, or you aren’t. Basically, anything you can think of that can only be a success or a failure can be represented by a binomial distribution.

Binomial distributions must meet the following three criteria:

1. **The number of observations or trials is fixed.** In other words, you can only figure out the [probability](https://www.statisticshowto.com/probability-and-statistics/probability-main-index/) of something happening if you do it a certain number of times. This is common sense—if you toss a coin once, your probability of getting a tails is 50%. If you toss a coin a 20 times, your probability of getting a tails is very, very close to 100%.
2. **Each observation or trial is** [independent](https://www.statisticshowto.com/probability-and-statistics/dependent-events-independent/#or). In other words, none of your trials have an effect on the probability of the next trial.
3. The **probability of success** (tails, heads, fail or pass) is **exactly the same** from one trial to another.

Once you know that your distribution is binomial, you can apply the **binomial distribution formula** to calculate the probability.

## The Binomial Distribution Formula

The binomial distribution formula is: **b(x; n, P) = <sub>n</sub>C<sub>x</sub> \* P<sup>x</sup> \* (1 – P)<sup>n – x</sup>** Where:

- b = binomial probability
- <sub>n</sub>C<sub>x</sub> = [combinations formula](https://probabilityhowto.com/combinations-and-permutations/) <sub>n</sub>C<sub>x</sub> = n! / (x!(n – x)!)
- x = total number of “successes”
- P = probability of a success on a single attempt
- n = number of attempts or trials.

**Note:** The binomial distribution formula can also be written in a slightly different way, because <sub>n</sub>C<sub>x</sub> = n! / x!(n – x)! (this binomial distribution formula uses [factorials](https://www.statisticshowto.com/factorial-distribution/). “q” in this formula is the probability of failure (subtract your probability of success from 1). [![binomialprobabilityformula](https://www.statisticshowto.com/wp-content/uploads/2009/09/binomialprobabilityformula1.bmp)](https://www.statisticshowto.com/wp-content/uploads/2009/09/binomialprobabilityformula1.bmp)

## Binomial Distribution Formula Examples

The binomial distribution formula can calculate the probability of success for binomial distributions. Often you’ll be told to “plug in” the numbers to the **formula and calculate**. This is easy to say, but not so easy to do—unless you are *very* careful with [order of operations](https://www.statisticshowto.com/statistics-basics/statistics-operations-pemdas-bedmas/), you won’t get the right answer. If you have a Ti-83 or Ti-89, the calculator can do much of the work for you. If not, here’s how to break down the problem into simple steps so you get the answer right—every time.

## Example 1

**Q. A coin is tossed 10 times. What is the probability of getting exactly 6 heads?** I’m going to use this formula: b(x; n, P) – <sub>n</sub>C<sub>x</sub> \* P<sup>x</sup> \* (1 – P)<sup>n – x</sup> The number of trials (n) is 10 The odds of success (“tossing a heads”) is 0.5 (So 1-p = 0.5) x = 6 P(x=6) = <sub>10</sub>C<sub>6</sub> \* 0.5<sup>6</sup> \* 0.5<sup>4</sup> = 210 \* 0.015625 \* 0.0625 = 0.205078125 **Tip:** You can use the **[combinations calculator](https://www.statisticshowto.com/calculators/permutation-calculator-and-combination-calculator/)** to figure out the value for <sub>n</sub>C<sub>x</sub>.

## Example 2

![binomialprobabilityformula](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/www.w3.org/2000/svg'%20width='247'%20height='37'%20viewBox='0%200%20247%2037'%3E%3C/svg%3E "binomialprobabilityformula")

**Q. 80% of people who purchase pet insurance are women.  If 9 pet insurance owners are randomly selected, find the probability that exactly 6 are women.**

1. Identify ‘n’ from the problem. Using our example question, n (the number of randomly selected items) is 9.
2. Identify ‘X’ from the problem. X (the number you are asked to find the probability for) is 6.
3. Work the first part of the formula. The first part of the formula is n! / (n – X)!  X! Substitute your variables: 9! / ((9 – 6)! × 6!) Which equals 84. Set this number aside for a moment.
4. Find p and q. p is the probability of success and q is the probability of failure. We are given p = 80%, or .8. So the probability of failure is 1 – .8 = .2 (20%).
5. Work the second part of the formula. p<sup>X</sup> = .8<sup>6</sup> = .262144 Set this number aside for a moment.
6. Work the third part of the formula. q<sup>(n – X)</sup> = .2<sup>(9-6)</sup> = .2<sup>3</sup> = .008
7. Multiply your answer from step 3, 5, and 6 together. 84  × .262144 × .008 = 0.176.

### Example 3

**Q. 60% of people who purchase sports cars are men.  If 10 sports car owners are randomly selected, find the [probability](https://www.statisticshowto.com/probability-and-statistics/probability-main-index/) that exactly 7 are men.**

1. Identify ‘n’ and ‘X’ from the problem. Using our sample question, n (the number of randomly selected items—in this case, sports car owners are randomly selected) is 10,  and  X (the number you are asked to “find the probability” for) is 7.
2. Figure out the first part of the formula, which is: n! / (n – X)!  X! Substituting the [variables](https://www.statisticshowto.com/variable/): 10! / ((10 – 7)! × 7!) Which equals 120. Set this number aside for a moment.
3. Find “p” the probability of success and “q” the probability of failure. We are given p = 60%, or .6. therefore, the probability of failure is 1 – .6 = .4 (40%).
4. Work the next part of the formula. p<sup>X</sup> = .6<sup>7</sup> = .0.0279936 Set this number aside while you work the third part of the formula.
5. Work the third part of the formula. q<sup>(.4 – 7)</sup> = .4<sup>(10-7)</sup> = .4<sup>3</sup> = .0.064
6. Multiply the three answers from steps 2, 4 and 5 together. 120  × 0.0279936 × 0.064 = 0.215. That’s it!

## The Bernoulli Distribution.

The binomial distribution is closely related to the [Bernoulli distribution](https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/probability-distribution/bernoulli-distribution/). According to Washington State University, “If each [Bernoulli trial](https://www.statisticshowto.com/bernoulli-trials/) is independent, then the number of successes in Bernoulli trails has a binomial Distribution. On the other hand, the Bernoulli distribution is the Binomial distribution with n=1.”

A Bernoulli distribution is a set of Bernoulli trials. Each Bernoulli trial has one possible outcome, chosen from S, success, or F, failure. In each trial, the probability of success, P(S) = p, is the same. The probability of failure is just 1 minus the probability of success: P(F) = 1 – p. (Remember that “1” is the total probability of an event occurring — probability is always between zero and 1).

Finally, all Bernoulli trials are independent from each other and the probability of success doesn’t change from trial to trial, even if you have information about the other trials’ outcomes.

## Lexian distribution

A **Lexian distribution** is another name for the binomial distribution (*k*, *p*) if *p* is not constant \[1\]. One way to interpret the distribution is as a special case of a [mixture](https://www.statisticshowto.com/mixture-distribution/) of binomial distributions \[2\], thus it is also called the mixed binomial distribution. The Lexian distribution considers a mixture distribution of subsets of binomials, each of which has its own [probability distribution function (pdf).](https://www.statisticshowto.com/probability-density-function-definition-examples/)

The [mean](https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/mean-median-mode/) of the Lexian distribution is \[3\]

![lexian distribution mean](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/www.w3.org/2000/svg'%20width='142'%20height='74'%20viewBox='0%200%20142%2074'%3E%3C/svg%3E)

Where

- *n* is the number of trials
- *p̄* is the average value of the distinct probability distributions.

The Lexian [variance](https://probabilityhowto.com/what-is-variance-in-statistics/) is

![](https://www.statisticshowto.com/probability-and-statistics/binomial-theorem/binomial-distribution-formula/www.w3.org/2000/svg'%20width='0'%20height='0'%20viewBox='0%200%200%200'%3E%3C/svg%3E)

Where

- var(*p*) is the variance of the average value of the distinct probability distributions.

As a consequence, if mixed binomial variables are treated as pure binomials, the mean would be correct but the variance would be underestimated when using the “binomial estimator” *np*(1- *p*) \[4\].

## History of the Lexian Distribution

The Lexian distribution is named after German economist [Wilhelm Lexis](https://mathshistory.st-andrews.ac.uk/Biographies/Lexis/), who published several papers on mixture distributions in 1875-1879. The basis of his work was to test for the structure of a set by comparing its actual variance to one obtained from a theoretical binomial variance through a “Lexis Ratio”: the [standard deviation](https://www.statisticshowto.com/probability-and-statistics/standard-deviation/) from the data, divided by the theoretical binomial standard deviation \[5\].

## References

1. ​wikipedia user Nusha, [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0), via Wikimedia Commons
2. Suchindran C. M. (1981). A reply to Avery and Hakkert. *Population studies*, *35*(5), 473–475. [https://doi.org/10.1080/00324728.1981.11878519](https://doi.org/10.1080/00324728.1981.11878519)
3. Johnson, N. L. (1969), Discrete distributions, Houghton Mifflin Company, Boston.
4. Coppens, F. et al. (2007). The performance of credit rating systems in the assessment of collateral used in Eurosystem monetary policy operations. National Bank of Belgium. Online: [http://aei.pitt.edu/7612/1/wp118En.pdf](http://aei.pitt.edu/7612/1/wp118En.pdf)
5. Bensman, S. (2005). Urquhart’s Law: Probability and the Management of Scientific and Technical Journal Collections Part 1. The Law’s Initial Formulation and Statistical Bases. Haworth Press. doi:10.1300/J122v26n01\_04

  

**Comments? Need to post a correction?** Please [***Contact Us***](https://www.statisticshowto.com/contact/).