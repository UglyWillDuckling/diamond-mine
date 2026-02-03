---
source: "https://en.m.wikipedia.org/wiki/Poisson_distribution"
author:
  - 
published: 2002-02-26
created: 2025-03-23
tags:
---
In [probability theory](https://en.m.wikipedia.org/wiki/Probability_theory "Probability theory") and [statistics](https://en.m.wikipedia.org/wiki/Statistics "Statistics"), the **Poisson distribution** () is a [discrete probability distribution](https://en.m.wikipedia.org/wiki/Discrete_probability_distribution "Discrete probability distribution") that expresses the probability of a given number of [events](https://en.m.wikipedia.org/wiki/Event_\(probability_theory\) "Event (probability theory)") occurring in a fixed interval of time if these events occur with a known constant mean rate and [independently](https://en.m.wikipedia.org/wiki/Statistical_independence "Statistical independence") of the time since the last event.[^haight1967-1] It can also be used for the number of events in other types of intervals than time, and in dimension greater than 1 (e.g., number of events in a given area or volume). The Poisson distribution is named after [French](https://en.m.wikipedia.org/wiki/France "France") mathematician [Siméon Denis Poisson](https://en.m.wikipedia.org/wiki/Sim%C3%A9on_Denis_Poisson "Siméon Denis Poisson"). It plays an important role for [discrete-stable distributions](https://en.m.wikipedia.org/wiki/Discrete-stable_distribution "Discrete-stable distribution").

<table><caption>Poisson distribution</caption><tbody><tr><td colspan="4"><p>Probability mass function</p><span><a href="https://en.m.wikipedia.org/wiki/File:Poisson_pmf.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Poisson_pmf.svg/325px-Poisson_pmf.svg.png" width="325" height="251"></a></span><p>The horizontal axis is the index <span>k</span>, the number of occurrences. <span>λ</span> is the expected rate of occurrences. The vertical axis is the probability of <span>k</span> occurrences given <span>λ</span>. The function is defined only at integer values of <span>k</span>; the connecting lines are only guides for the eye.</p></td></tr><tr><td colspan="4"><p>Cumulative distribution function</p><span><a href="https://en.m.wikipedia.org/wiki/File:Poisson_cdf.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Poisson_cdf.svg/325px-Poisson_cdf.svg.png" width="325" height="258"></a></span><p>The horizontal axis is the index <span>k</span>, the number of occurrences. The CDF is discontinuous at the integers of <span>k</span> and flat everywhere else because a variable that is Poisson distributed takes on only integer values.</p></td></tr><tr><th scope="row">Notation</th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mi>Pois</mi> <mo>⁡</mo> <mo>(</mo> <mi>λ</mi> <mo>)</mo> </mstyle></mrow><annotation>{\displaystyle \operatorname {Pois} (\lambda )}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2171745e86cc9d5c28f0e2595db6b5532fe8bb47"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Statistical_parameter">Parameters</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mi>λ</mi> <mo>∈</mo> <mo>(</mo> <mn>0</mn> <mo>,</mo> <mi>∞</mi> <mo>)</mo> </mstyle></mrow><annotation>{\displaystyle \lambda \in (0,\infty )}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/66704521911e7bce5122e668683005f6d22207ac"></span> (rate)</td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Support_(mathematics)">Support</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mi>k</mi> <mo>∈</mo> <msub><mrow><mi>N</mi> </mrow><mrow><mn>0</mn> </mrow></msub></mstyle></mrow><annotation>{\displaystyle k\in \mathbb {N} _{0}}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/97bceb13f72e37bcd50b60e5fb2fa05bcf15c265"></span> (<a href="https://en.m.wikipedia.org/wiki/Natural_numbers">Natural numbers</a> starting from&nbsp;0)</td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Probability_mass_function">PMF</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mrow><mfrac><mrow><msup><mi>λ</mi> <mrow><mi>k</mi> </mrow></msup><msup><mi>e</mi> <mrow><mo>−</mo> <mi>λ</mi> </mrow></msup></mrow><mrow><mi>k</mi> <mo>!</mo> </mrow></mfrac></mrow></mstyle></mrow><annotation>{\displaystyle {\frac {\lambda ^{k}e^{-\lambda }}{k!}}}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/75b15a85051528f8722d2b676a557f6c22bf85c4"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Cumulative_distribution_function">CDF</a></th><td colspan="3"><p><span><span><math><semantics><mrow><mstyle><mrow><mfrac><mrow><mi>Γ</mi> <mo>(</mo> <mo>⌊</mo> <mi>k</mi> <mo>+</mo> <mn>1</mn> <mo>⌋</mo> <mo>,</mo> <mi>λ</mi> <mo>)</mo> </mrow><mrow><mo>⌊</mo> <mi>k</mi> <mo>⌋</mo> <mo>!</mo> </mrow></mfrac></mrow><mo>,</mo> </mstyle></mrow><annotation>{\displaystyle {\frac {\Gamma (\lfloor k+1\rfloor ,\lambda )}{\lfloor k\rfloor !}},}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b44c577126e6cab854deb2586eea897e7e1380d7"></span> or <span><span><math><semantics><mrow><mstyle><msup><mi>e</mi> <mrow><mo>−</mo> <mi>λ</mi> </mrow></msup><munderover><mo>∑</mo> <mrow><mi>j</mi> <mo>=</mo> <mn>0</mn> </mrow><mrow><mo>⌊</mo> <mi>k</mi> <mo>⌋</mo> </mrow></munderover><mrow><mfrac><msup><mi>λ</mi> <mrow><mi>j</mi> </mrow></msup><mrow><mi>j</mi> <mo>!</mo> </mrow></mfrac></mrow><mo>,</mo> </mstyle></mrow><annotation>{\displaystyle e^{-\lambda }\sum _{j=0}^{\lfloor k\rfloor }{\frac {\lambda ^{j}}{j!}},}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/42278d90b362f7bd56a5bdd4b726b03a2300ffc9"></span> or <span><span><math><semantics><mrow><mstyle><mi>Q</mi> <mo>(</mo> <mo>⌊</mo> <mi>k</mi> <mo>+</mo> <mn>1</mn> <mo>⌋</mo> <mo>,</mo> <mi>λ</mi> <mo>)</mo> </mstyle></mrow><annotation>{\displaystyle Q(\lfloor k+1\rfloor ,\lambda )}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/bb7bb45bf477cfc1deaf939b475b03c0f6b02342"></span></p>(for <span><span><math><semantics><mrow><mstyle><mi>k</mi> <mo>≥</mo> <mn>0</mn> <mo>,</mo> </mstyle></mrow><annotation>{\displaystyle k\geq 0,}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/6c10f12b66e1ef733d7d4a58e6ac0dc86550bf94"></span> where <span><span><math><semantics><mrow><mstyle><mi>Γ</mi> <mo>(</mo> <mi>x</mi> <mo>,</mo> <mi>y</mi> <mo>)</mo> </mstyle></mrow><annotation>{\displaystyle \Gamma (x,y)}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/89a26a2719b58c1e3dc41c04ae1f927fc00e2891"></span> is the <a href="https://en.m.wikipedia.org/wiki/Upper_incomplete_gamma_function">upper incomplete gamma function</a>, <span><span><math><semantics><mrow><mstyle><mo>⌊</mo> <mi>k</mi> <mo>⌋</mo> </mstyle></mrow><annotation>{\displaystyle \lfloor k\rfloor }</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0a64054ec38bec048113dd328cf867e9e62b581d"></span> is the <a href="https://en.m.wikipedia.org/wiki/Floor_function">floor function</a>, and <span><span><math><semantics><mrow><mstyle><mi>Q</mi> </mstyle></mrow><annotation>{\displaystyle Q}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/8752c7023b4b3286800fe3238271bbca681219ed"></span> is the <a href="https://en.m.wikipedia.org/wiki/Regularized_gamma_function">regularized gamma function</a>)</td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Expected_value">Mean</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mi>λ</mi> </mstyle></mrow><annotation>{\displaystyle \lambda }</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Median">Median</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mo>≈</mo> <mrow><mo>⌊</mo> <mrow><mi>λ</mi> <mo>+</mo> <mrow><mfrac><mn>1</mn> <mn>3</mn> </mfrac></mrow><mo>−</mo> <mrow><mfrac><mn>1</mn> <mrow><mn>50</mn> <mi>λ</mi> </mrow></mfrac></mrow></mrow><mo>⌋</mo> </mrow></mstyle></mrow><annotation>{\displaystyle \approx \left\lfloor \lambda +{\frac {1}{3}}-{\frac {1}{50\lambda }}\right\rfloor }</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7096e049b66dc970bb7ad4f95bd95fe410d56608"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Mode_(statistics)">Mode</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mrow><mo>⌈</mo> <mi>λ</mi> <mo>⌉</mo> </mrow><mo>−</mo> <mn>1</mn> <mo>,</mo> <mrow><mo>⌊</mo> <mi>λ</mi> <mo>⌋</mo> </mrow></mstyle></mrow><annotation>{\displaystyle \left\lceil \lambda \right\rceil -1,\left\lfloor \lambda \right\rfloor }</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/39855377f4991452ccf691ed5c80b9615ca28b8b"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Variance">Variance</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mi>λ</mi> </mstyle></mrow><annotation>{\displaystyle \lambda }</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Skewness">Skewness</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mrow><mfrac><mn>1</mn> <msqrt><mi>λ</mi> </msqrt></mfrac></mrow></mstyle></mrow><annotation>{\displaystyle {\frac {1}{\sqrt {\lambda }}}}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/89acf6db1533e1d7afef03d16012dbe8eddb0b91"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Excess_kurtosis">Excess kurtosis</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mrow><mfrac><mn>1</mn> <mi>λ</mi> </mfrac></mrow></mstyle></mrow><annotation>{\displaystyle {\frac {1}{\lambda }}}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d496a9397007733fdbbb2f98433e7aab4e51ff4f"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Information_entropy">Entropy</a></th><td colspan="3"><p><span><span><math><semantics><mrow><mstyle><mi>λ</mi> <mrow><mrow><mo>[</mo> </mrow></mrow><mn>1</mn> <mo>−</mo> <mi>log</mi> <mo>⁡</mo> <mo>(</mo> <mi>λ</mi> <mo>)</mo> <mrow><mrow><mo>]</mo> </mrow></mrow><mo>+</mo> <msup><mi>e</mi> <mrow><mo>−</mo> <mi>λ</mi> </mrow></msup><munderover><mo>∑</mo> <mrow><mi>k</mi> <mo>=</mo> <mn>0</mn> </mrow><mrow><mi>∞</mi> </mrow></munderover><mrow><mfrac><mrow><msup><mi>λ</mi> <mrow><mi>k</mi> </mrow></msup><mi>log</mi> <mo>⁡</mo> <mo>(</mo> <mi>k</mi> <mo>!</mo> <mo>)</mo> </mrow><mrow><mi>k</mi> <mo>!</mo> </mrow></mfrac></mrow></mstyle></mrow><annotation>{\displaystyle \lambda {\Bigl [}1-\log(\lambda ){\Bigr ]}+e^{-\lambda }\sum _{k=0}^{\infty }{\frac {\lambda ^{k}\log(k!)}{k!}}}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/64c5bb5a142a1b60e4a04c725d686557fdb238bc"></span>   or for large <span><span><math><semantics><mrow><mstyle><mi>λ</mi> </mstyle></mrow><annotation>{\displaystyle \lambda }</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a"></span>  </p><span><span><math><semantics><mrow><mstyle><mrow><mtable><mtr><mtd><mo>≈</mo> <mrow><mfrac><mn>1</mn> <mn>2</mn> </mfrac></mrow><mi>log</mi> <mo>⁡</mo> <mrow><mo>(</mo> <mrow><mn>2</mn> <mi>π</mi> <mi>e</mi> <mi>λ</mi> </mrow><mo>)</mo> </mrow><mo>−</mo> <mrow><mfrac><mn>1</mn> <mrow><mn>12</mn> <mi>λ</mi> </mrow></mfrac></mrow><mo>−</mo> <mrow><mfrac><mn>1</mn> <mrow><mn>24</mn> <msup><mi>λ</mi> <mrow><mn>2</mn> </mrow></msup></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mo>−</mo> <mrow><mfrac><mn>19</mn> <mrow><mn>360</mn> <msup><mi>λ</mi> <mrow><mn>3</mn> </mrow></msup></mrow></mfrac></mrow><mo>+</mo> <mrow><mrow><mi>O</mi> </mrow></mrow><mrow><mo>(</mo> <mrow><mfrac><mn>1</mn> <msup><mi>λ</mi> <mrow><mn>4</mn> </mrow></msup></mfrac></mrow><mo>)</mo> </mrow></mtd></mtr></mtable></mrow></mstyle></mrow><annotation>{\displaystyle {\begin{aligned}\approx {\frac {1}{2}}\log \left(2\pi e\lambda \right)-{\frac {1}{12\lambda }}-{\frac {1}{24\lambda ^{2}}}\\-{\frac {19}{360\lambda ^{3}}}+{\mathcal {O}}\left({\frac {1}{\lambda ^{4}}}\right)\end{aligned}}}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/fec5ecd1664d2bbc5ba8db81ed452e1f72773a67"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Moment-generating_function">MGF</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mi>exp</mi> <mo>⁡</mo> <mrow><mo>[</mo> <mrow><mi>λ</mi> <mrow><mo>(</mo> <mrow><msup><mi>e</mi> <mrow><mi>t</mi> </mrow></msup><mo>−</mo> <mn>1</mn> </mrow><mo>)</mo> </mrow></mrow><mo>]</mo> </mrow></mstyle></mrow><annotation>{\displaystyle \exp \left[\lambda \left(e^{t}-1\right)\right]}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/72c1560d02e57d6d1f2a6223fa16061ad399bb3a"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Characteristic_function_(probability_theory)">CF</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mi>exp</mi> <mo>⁡</mo> <mrow><mo>[</mo> <mrow><mi>λ</mi> <mrow><mo>(</mo> <mrow><msup><mi>e</mi> <mrow><mi>i</mi> <mi>t</mi> </mrow></msup><mo>−</mo> <mn>1</mn> </mrow><mo>)</mo> </mrow></mrow><mo>]</mo> </mrow></mstyle></mrow><annotation>{\displaystyle \exp \left[\lambda \left(e^{it}-1\right)\right]}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f2d912f7d931127ba7a6d044105a647ea4590b40"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Probability-generating_function">PGF</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mi>exp</mi> <mo>⁡</mo> <mrow><mo>[</mo> <mrow><mi>λ</mi> <mrow><mo>(</mo> <mrow><mi>z</mi> <mo>−</mo> <mn>1</mn> </mrow><mo>)</mo> </mrow></mrow><mo>]</mo> </mrow></mstyle></mrow><annotation>{\displaystyle \exp \left[\lambda \left(z-1\right)\right]}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b112607a91ffced05b02706979ee6651a6db3c84"></span></td></tr><tr><th scope="row"><a href="https://en.m.wikipedia.org/wiki/Fisher_information">Fisher information</a></th><td colspan="3"><span><span><math><semantics><mrow><mstyle><mrow><mfrac><mn>1</mn> <mi>λ</mi> </mfrac></mrow></mstyle></mrow><annotation>{\displaystyle {\frac {1}{\lambda }}}</annotation> </semantics></math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d496a9397007733fdbbb2f98433e7aab4e51ff4f"></span></td></tr></tbody></table>

Under a Poisson distribution with the [expectation](https://en.m.wikipedia.org/wiki/Expected_value "Expected value") of *λ* events in a given interval, the probability of *k* events in the same interval is:[^yates2014-2] 

${\displaystyle {\frac {\lambda ^{k}e^{-\lambda }}{k!}}.}$ 

For instance, consider a call center which receives an average of *λ =* 3 calls per minute at all times of day. If the calls are independent, receiving one does not change the probability of when the next one will arrive. Under these assumptions, the number *k* of calls received during any minute has a Poisson probability distribution. Receiving *k =* 1 to 4 calls then has a probability of about 0.77, while receiving 0 or at least 5 calls has a probability of about 0.23.

A classic example used to motivate the Poisson distribution is the number of [radioactive decay](https://en.m.wikipedia.org/wiki/Radioactive_decay "Radioactive decay") events during a fixed observation period.[^3]

## History

The distribution was first introduced by [Siméon Denis Poisson](https://en.m.wikipedia.org/wiki/Sim%C3%A9on_Denis_Poisson "Siméon Denis Poisson") (1781–1840) and published together with his probability theory in his work *Recherches sur la probabilité des jugements en matière criminelle et en matière civile* (1837).[^poisson1837-4]  The work theorized about the number of wrongful convictions in a given country by focusing on certain [random variables](https://en.m.wikipedia.org/wiki/Random_variable "Random variable") N that count, among other things, the number of discrete occurrences (sometimes called "events" or "arrivals") that take place during a [time](https://en.m.wikipedia.org/wiki/Time "Time")\-interval of given length. The result had already been given in 1711 by [Abraham de Moivre](https://en.m.wikipedia.org/wiki/Abraham_de_Moivre "Abraham de Moivre") in *De Mensura Sortis seu; de Probabilitate Eventuum in Ludis a Casu Fortuito Pendentibus* .[^demoivre1711-5] [^demoivre1718-6] [^demoivre1721-7] [^johnson2005-8]  This makes it an example of [Stigler's law](https://en.m.wikipedia.org/wiki/Stigler%27s_law "Stigler's law") and it has prompted some authors to argue that the Poisson distribution should bear the name of de Moivre.[^stigler1982-9][^hald1984-10]

In 1860, [Simon Newcomb](https://en.m.wikipedia.org/wiki/Simon_Newcomb "Simon Newcomb") fitted the Poisson distribution to the number of stars found in a unit of space.[^newcomb1860-11] A further practical application was made by [Ladislaus Bortkiewicz](https://en.m.wikipedia.org/wiki/Ladislaus_Bortkiewicz "Ladislaus Bortkiewicz") in 1898. Bortkiewicz showed that the frequency with which soldiers in the Prussian army were accidentally killed by horse kicks could be well modeled by a Poisson distribution.[^vonbortkiewitsch1898-12] .

## Definitions

### Probability mass function

A discrete [random variable](https://en.m.wikipedia.org/wiki/Random_variable "Random variable") X is said to have a Poisson distribution with parameter ${\displaystyle \lambda >0}$   if it has a [probability mass function](https://en.m.wikipedia.org/wiki/Probability_mass_function "Probability mass function") given by:[^yates2014-2] 

${\displaystyle f(k;\lambda )=\Pr(X{=}k)={\frac {\lambda ^{k}e^{-\lambda }}{k!}},}$  

where

- k is the number of occurrences (  ${\displaystyle k=0,1,2,\ldots }$   )
- e is [Euler's number](https://en.m.wikipedia.org/wiki/E_\(mathematical_constant\) "E (mathematical constant)") (  ${\displaystyle e=2.71828\ldots }$   )
- *k*! = *k*(*k–*1) ··· (3)(2)(1) is the [factorial](https://en.m.wikipedia.org/wiki/Factorial "Factorial").

The positive [real number](https://en.m.wikipedia.org/wiki/Real_number "Real number") λ is equal to the [expected value](https://en.m.wikipedia.org/wiki/Expected_value "Expected value") of X and also to its [variance](https://en.m.wikipedia.org/wiki/Variance "Variance").[^13]

${\displaystyle \lambda =\operatorname {E} (X)=\operatorname {Var} (X).}$  

The Poisson distribution can be applied to systems with a [large number of possible events, each of which is rare](https://en.m.wikipedia.org/wiki/Large_number_of_rare_events "Large number of rare events"). The number of such events that occur during a fixed time interval is, under the right circumstances, a random number with a Poisson distribution.

The equation can be adapted if, instead of the average number of events ${\displaystyle \lambda ,}$   we are given the average rate ${\displaystyle r}$   at which events occur. Then ${\displaystyle \lambda =rt,}$   and:[^14]

${\displaystyle P(k{\text{ events in interval }}t)={\frac {(rt)^{k}e^{-rt}}{k!}}.}$  

### Examples

 Chewing gum on a sidewalk. The number of pieces on a single tile is approximately Poisson distributed.

The Poisson distribution may be useful to model events such as:

- the number of meteorites greater than 1-meter diameter that strike Earth in a year;
- the number of laser photons hitting a detector in a particular time interval;
- the number of students achieving a low and high mark in an exam; and
- locations of defects and dislocations in materials.

Examples of the occurrence of random points in space are: the locations of asteroid impacts with earth (2-dimensional), the locations of imperfections in a material (3-dimensional), and the locations of trees in a forest (2-dimensional).[^15]

### Assumptions and validity

The Poisson distribution is an appropriate model if the following assumptions are true:

- k, a nonnegative integer, is the number of times an event occurs in an interval.
- The occurrence of one event [does not affect the probability](https://en.m.wikipedia.org/wiki/Independence_\(probability_theory\) "Independence (probability theory)") of a second event.
- The average rate at which events occur is independent of any occurrences.
- Two events cannot occur at exactly the same instant.

If these conditions are true, then k is a Poisson random variable; the distribution of k is a Poisson distribution.

The Poisson distribution is also the [limit](https://en.m.wikipedia.org/wiki/Limit_\(mathematics\) "Limit (mathematics)") of a [binomial distribution](https://en.m.wikipedia.org/wiki/Binomial_distribution "Binomial distribution"), for which the probability of success for each trial equals λ divided by the number of trials, as the number of trials approaches infinity (see [Related distributions](https://en.m.wikipedia.org/wiki/#Related_distributions)).

#### Examples of probability for Poisson distributions

| On a particular river, overflow floods occur once every 100 years on average. Calculate the probability of k = 0, 1, 2, 3, 4, 5, or 6 overflow floods in a 100-year interval, assuming the Poisson model is appropriate.  Because the average event rate is one overflow flood per 100 years, λ = 1  ${\displaystyle P(k{\text{ overflow floods in 100 years}})={\frac {\lambda ^{k}e^{-\lambda }}{k!}}={\frac {1^{k}e^{-1}}{k!}}}$    ${\displaystyle P(k=0{\text{ overflow floods in 100 years}})={\frac {1^{0}e^{-1}}{0!}}={\frac {e^{-1}}{1}}\approx 0.368}$    ${\displaystyle P(k=1{\text{ overflow flood in 100 years}})={\frac {1^{1}e^{-1}}{1!}}={\frac {e^{-1}}{1}}\approx 0.368}$    ${\displaystyle P(k=2{\text{ overflow floods in 100 years}})={\frac {1^{2}e^{-1}}{2!}}={\frac {e^{-1}}{2}}\approx 0.184}$ | \| k \| P(k overflow floods in 100 years) \| \| --- \| --- \| \| 0 \| 0.368 \| \| 1 \| 0.368 \| \| 2 \| 0.184 \| \| 3 \| 0.061 \| \| 4 \| 0.015 \| \| 5 \| 0.003 \| \| 6 \| 0.0005 \|  The probability for 0 to 6 overflow floods in a 100-year period. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

| It has been reported that the average number of goals in a World Cup soccer match is approximately 2.5 and the Poisson model is appropriate.[^ugarte2016-16] Because the average event rate is 2.5 goals per match, λ = 2.5 .  ${\displaystyle P(k{\text{ goals in a match}})={\frac {2.5^{k}e^{-2.5}}{k!}}}$    ${\displaystyle P(k=0{\text{ goals in a match}})={\frac {2.5^{0}e^{-2.5}}{0!}}={\frac {e^{-2.5}}{1}}\approx 0.082}$    ${\displaystyle P(k=1{\text{ goal in a match}})={\frac {2.5^{1}e^{-2.5}}{1!}}={\frac {2.5e^{-2.5}}{1}}\approx 0.205}$    ${\displaystyle P(k=2{\text{ goals in a match}})={\frac {2.5^{2}e^{-2.5}}{2!}}={\frac {6.25e^{-2.5}}{2}}\approx 0.257}$ | \| k \| P(k goals in a World Cup soccer match) \| \| --- \| --- \| \| 0 \| 0.082 \| \| 1 \| 0.205 \| \| 2 \| 0.257 \| \| 3 \| 0.213 \| \| 4 \| 0.133 \| \| 5 \| 0.067 \| \| 6 \| 0.028 \| \| 7 \| 0.010 \|  The probability for 0 to 7 goals in a match. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

#### Once in an interval events: The special case of λ = 1 and k = 0

Suppose that astronomers estimate that large meteorites (above a certain size) hit the earth on average once every 100 years ( λ = 1 event per 100 years), and that the number of meteorite hits follows a Poisson distribution. What is the probability of k = 0 meteorite hits in the next 100 years?

${\displaystyle P(k={\text{0 meteorites hit in next 100 years}})={\frac {1^{0}e^{-1}}{0!}}={\frac {1}{e}}\approx 0.37.}$  

Under these assumptions, the probability that no large meteorites hit the earth in the next 100 years is roughly 0.37. The remaining 1 − 0.37 = 0.63 is the probability of 1, 2, 3, or more large meteorite hits in the next 100 years. In an example above, an overflow flood occurred once every 100 years (λ = 1). The probability of no overflow floods in 100 years was roughly 0.37, by the same calculation.

In general, if an event occurs on average once per interval (λ = 1), and the events follow a Poisson distribution, then P(0 events in next interval) = 0.37. In addition, P(exactly one event in next interval) = 0.37, as shown in the table for overflow floods.

### Examples that violate the Poisson assumptions

The number of students who arrive at the [student union](https://en.m.wikipedia.org/wiki/Student_center "Student center") per minute will likely not follow a Poisson distribution, because the rate is not constant (low rate during class time, high rate between class times) and the arrivals of individual students are not independent (students tend to come in groups). The non-constant arrival rate may be modeled as a [mixed Poisson distribution](https://en.m.wikipedia.org/wiki/Mixed_Poisson_distribution "Mixed Poisson distribution"), and the arrival of groups rather than individual students as a [compound Poisson process](https://en.m.wikipedia.org/wiki/Compound_Poisson_process "Compound Poisson process").

The number of magnitude 5 earthquakes per year in a country may not follow a Poisson distribution, if one large earthquake increases the probability of aftershocks of similar magnitude.

Examples in which at least one event is guaranteed are not Poisson distributed; but may be modeled using a [zero-truncated Poisson distribution](https://en.m.wikipedia.org/wiki/Zero-truncated_Poisson_distribution "Zero-truncated Poisson distribution").

Count distributions in which the number of intervals with zero events is higher than predicted by a Poisson model may be modeled using a [zero-inflated model](https://en.m.wikipedia.org/wiki/Zero-inflated_model "Zero-inflated model").

## Properties

### Descriptive statistics

- The [expected value](https://en.m.wikipedia.org/wiki/Expected_value "Expected value") of a Poisson random variable is λ.
- The [variance](https://en.m.wikipedia.org/wiki/Variance "Variance") of a Poisson random variable is also λ.
- The [coefficient of variation](https://en.m.wikipedia.org/wiki/Coefficient_of_variation "Coefficient of variation") is ${\textstyle \lambda ^{-1/2},}$   while the [index of dispersion](https://en.m.wikipedia.org/wiki/Index_of_dispersion "Index of dispersion") is 1.[^johnson2005-8]
- The [mean absolute deviation](https://en.m.wikipedia.org/wiki/Mean_absolute_deviation "Mean absolute deviation") about the mean is[^johnson2005-8]  ${\displaystyle \operatorname {E} [\ |X-\lambda |\ ]={\frac {2\lambda ^{\lfloor \lambda \rfloor +1}e^{-\lambda }}{\lfloor \lambda \rfloor !}}.}$
- The [mode](https://en.m.wikipedia.org/wiki/Mode_\(statistics\) "Mode (statistics)") of a Poisson-distributed random variable with non-integer λ is equal to ${\displaystyle \lfloor \lambda \rfloor ,}$   which is the largest integer less than or equal to λ. This is also written as [floor](https://en.m.wikipedia.org/wiki/Floor_function "Floor function")(λ). When λ is a positive integer, the modes are λ and λ − 1.
- All of the [cumulants](https://en.m.wikipedia.org/wiki/Cumulant "Cumulant") of the Poisson distribution are equal to the expected value λ. The n th [factorial moment](https://en.m.wikipedia.org/wiki/Factorial_moment "Factorial moment") of the Poisson distribution is λ <sup> <span class="texhtml mvar">n</span> </sup>  .
- The [expected value](https://en.m.wikipedia.org/wiki/Expected_value "Expected value") of a [Poisson process](https://en.m.wikipedia.org/wiki/Poisson_process "Poisson process") is sometimes decomposed into the product of *intensity* and *exposure* (or more generally expressed as the integral of an "intensity function" over time or space, sometimes described as "exposure").[^helske2017-17]

### Median

Bounds for the median (  ${\displaystyle \nu }$   ) of the distribution are known and are [sharp](https://en.m.wikipedia.org/wiki/Mathematical_jargon#sharp "Mathematical jargon"):[^choi1994-18] ${\displaystyle \lambda -\ln 2\leq \nu <\lambda +{\frac {1}{3}}.}$  

### Higher moments

The higher non-centered [moments](https://en.m.wikipedia.org/wiki/Moment_\(mathematics\) "Moment (mathematics)") m<sub><span class="texhtml mvar">k</span></sub> of the Poisson distribution are [Touchard polynomials](https://en.m.wikipedia.org/wiki/Touchard_polynomials "Touchard polynomials") in λ: ${\displaystyle m_{k}=\sum _{i=0}^{k}\lambda ^{i}{\begin{Bmatrix}k\\i\end{Bmatrix}},}$   where the braces { } denote [Stirling numbers of the second kind](https://en.m.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind "Stirling numbers of the second kind").[^riordan1937-19][^haight1967-1]  In other words,  ${\displaystyle E[X]=\lambda ,\quad E[X(X-1)]=\lambda ^{2},\quad E[X(X-1)(X-2)]=\lambda ^{3},\cdots }$   When the expected value is set to *λ =* 1, [Dobinski's formula](https://en.m.wikipedia.org/wiki/Dobinski%27s_formula "Dobinski's formula") implies that the n‑th moment is equal to the number of [partitions of a set](https://en.m.wikipedia.org/wiki/Partition_of_a_set "Partition of a set") of size n.

A simple upper bound is:[^20] ${\displaystyle m_{k}=E[X^{k}]\leq \left({\frac {k}{\log(k/\lambda +1)}}\right)^{k}\leq \lambda ^{k}\exp \left({\frac {k^{2}}{2\lambda }}\right).}$  

### Sums of Poisson-distributed random variables

If ${\displaystyle X_{i}\sim \operatorname {Pois} (\lambda _{i})}$   for ${\displaystyle i=1,\dotsc ,n}$   are [independent](https://en.m.wikipedia.org/wiki/Statistical_independence "Statistical independence"), then ${\textstyle \sum _{i=1}^{n}X_{i}\sim \operatorname {Pois} \left(\sum _{i=1}^{n}\lambda _{i}\right).}$   [^lehmann1986-21]  A converse is [Raikov's theorem](https://en.m.wikipedia.org/wiki/Raikov%27s_theorem "Raikov's theorem"), which says that if the sum of two independent random variables is Poisson-distributed, then so are each of those two independent random variables.[^raikov1937-22][^vonmises1964-23]

### Maximum entropy

It is a [maximum-entropy distribution](https://en.m.wikipedia.org/wiki/Maximum_entropy_probability_distribution "Maximum entropy probability distribution") among the set of generalized binomial distributions ${\displaystyle B_{n}(\lambda )}$   with mean ${\displaystyle \lambda }$   and ${\displaystyle n\rightarrow \infty }$   ,[^24] where a generalized binomial distribution is defined as a distribution of the sum of N independent but not identically distributed Bernoulli variables.

### Other properties

- The Poisson distributions are [infinitely divisible](https://en.m.wikipedia.org/wiki/Infinite_divisibility_\(probability\) "Infinite divisibility (probability)") probability distributions.[^laha1979-25] [^johnson2005-8]
- The directed [Kullback–Leibler divergence](https://en.m.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence "Kullback–Leibler divergence") of ${\displaystyle P=\operatorname {Pois} (\lambda )}$   from ${\displaystyle P_{0}=\operatorname {Pois} (\lambda _{0})}$   is given by ${\displaystyle \operatorname {D} _{\text{KL}}(P\parallel P_{0})=\lambda _{0}-\lambda +\lambda \log {\frac {\lambda }{\lambda _{0}}}.}$
- If ${\displaystyle \lambda \geq 1}$   is an integer, then ${\displaystyle Y\sim \operatorname {Pois} (\lambda )}$   satisfies ${\displaystyle \Pr(Y\geq E[Y])\geq {\frac {1}{2}}}$   and ${\displaystyle \Pr(Y\leq E[Y])\geq {\frac {1}{2}}.}$   [^26]<sup class="noprint Inline-Template">[<i><a href="https://en.m.wikipedia.org/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability"><span title="The material near this tag failed verification of its source citation(s). (January 2024)">failed verification</span></a> – <a href="https://en.m.wikipedia.org/wiki/Talk:Poisson_distribution#Other_Properties_-_Mitzenmacher" title="Talk:Poisson distribution">see discussion</a></i>]</sup>
- Bounds for the tail probabilities of a Poisson random variable ${\displaystyle X\sim \operatorname {Pois} (\lambda )}$   can be derived using a [Chernoff bound](https://en.m.wikipedia.org/wiki/Chernoff_bound "Chernoff bound") argument.[^mitzenmacher2005-27]  ${\displaystyle P(X\geq x)\leq {\frac {(e\lambda )^{x}e^{-\lambda }}{x^{x}}},{\text{ for }}x>\lambda ,}$   ${\displaystyle P(X\leq x)\leq {\frac {(e\lambda )^{x}e^{-\lambda }}{x^{x}}},{\text{ for }}x<\lambda .}$
- The upper tail probability can be tightened (by a factor of at least two) as follows:[^28]

${\displaystyle P(X\geq x)\leq {\frac {e^{-\operatorname {D} _{\text{KL}}(Q\parallel P)}}{\max {(2,{\sqrt {4\pi \operatorname {D} _{\text{KL}}(Q\parallel P)}}})}},{\text{ for }}x>\lambda ,}$   where ${\displaystyle \operatorname {D} _{\text{KL}}(Q\parallel P)}$   is the Kullback–Leibler divergence of ${\displaystyle Q=\operatorname {Pois} (x)}$   from ${\displaystyle P=\operatorname {Pois} (\lambda )}$   .

- Inequalities that relate the distribution function of a Poisson random variable ${\displaystyle X\sim \operatorname {Pois} (\lambda )}$   to the [Standard normal distribution](https://en.m.wikipedia.org/wiki/Standard_normal_distribution "Standard normal distribution") function ${\displaystyle \Phi (x)}$   are as follows:[^29] ${\displaystyle \Phi \left(\operatorname {sign} (k-\lambda ){\sqrt {2\operatorname {D} _{\text{KL}}(Q_{-}\parallel P)}}\right)<P(X\leq k)<\Phi \left(\operatorname {sign} (k+1-\lambda ){\sqrt {2\operatorname {D} _{\text{KL}}(Q_{+}\parallel P)}}\right),{\text{ for }}k>0,}$   where ${\displaystyle \operatorname {D} _{\text{KL}}(Q_{-}\parallel P)}$   is the Kullback–Leibler divergence of ${\displaystyle Q_{-}=\operatorname {Pois} (k)}$   from ${\displaystyle P=\operatorname {Pois} (\lambda )}$   and ${\displaystyle \operatorname {D} _{\text{KL}}(Q_{+}\parallel P)}$   is the Kullback–Leibler divergence of ${\displaystyle Q_{+}=\operatorname {Pois} (k+1)}$   from ${\displaystyle P}$   .

### Poisson races

Let ${\displaystyle X\sim \operatorname {Pois} (\lambda )}$   and ${\displaystyle Y\sim \operatorname {Pois} (\mu )}$   be independent random variables, with ${\displaystyle \lambda <\mu ,}$   then we have that ${\displaystyle {\frac {e^{-({\sqrt {\mu }}-{\sqrt {\lambda }})^{2}}}{(\lambda +\mu )^{2}}}-{\frac {e^{-(\lambda +\mu )}}{2{\sqrt {\lambda \mu }}}}-{\frac {e^{-(\lambda +\mu )}}{4\lambda \mu }}\leq P(X-Y\geq 0)\leq e^{-({\sqrt {\mu }}-{\sqrt {\lambda }})^{2}}}$  

The upper bound is proved using a standard Chernoff bound.

The lower bound can be proved by noting that ${\displaystyle P(X-Y\geq 0\mid X+Y=i)}$   is the probability that ${\textstyle Z\geq {\frac {i}{2}},}$   where ${\textstyle Z\sim \operatorname {Bin} \left(i,{\frac {\lambda }{\lambda +\mu }}\right),}$   which is bounded below by ${\textstyle {\frac {1}{(i+1)^{2}}}e^{-iD\left(0.5\|{\frac {\lambda }{\lambda +\mu }}\right)},}$   where ${\displaystyle D}$   is [relative entropy](https://en.m.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence "Kullback–Leibler divergence") (See the entry on [bounds on tails of binomial distributions](https://en.m.wikipedia.org/wiki/Binomial_distribution#Tail_bounds "Binomial distribution") for details). Further noting that ${\displaystyle X+Y\sim \operatorname {Pois} (\lambda +\mu ),}$   and computing a lower bound on the unconditional probability gives the result. More details can be found in the appendix of Kamath et al.[^kamath2015-30]

### As a Binomial distribution with infinitesimal time-steps

The Poisson distribution can be derived as a limiting case to the [binomial distribution](https://en.m.wikipedia.org/wiki/Binomial_distribution "Binomial distribution") as the number of trials goes to infinity and the [expected](https://en.m.wikipedia.org/wiki/Expected_value "Expected value") number of successes remains fixed — see [law of rare events](https://en.m.wikipedia.org/wiki/#law_of_rare_events) below. Therefore, it can be used as an approximation of the binomial distribution if n is sufficiently large and *p* is sufficiently small. The Poisson distribution is a good approximation of the binomial distribution if n is at least 20 and *p* is smaller than or equal to 0.05, and an excellent approximation if n ≥ 100 and n p ≤ 10.[^nist2006-31] Letting ${\displaystyle F_{\mathrm {B} }}$   and ${\displaystyle F_{\mathrm {P} }}$   be the respective [cumulative density functions](https://en.m.wikipedia.org/wiki/Cumulative_distribution_function "Cumulative distribution function") of the binomial and Poisson distributions, one has: ${\displaystyle F_{\mathrm {B} }(k;n,p)\ \approx \ F_{\mathrm {P} }(k;\lambda =np).}$   One derivation of this uses [probability-generating functions](https://en.m.wikipedia.org/wiki/Probability-generating_function "Probability-generating function").[^32] Consider a [Bernoulli trial](https://en.m.wikipedia.org/wiki/Bernoulli_trial "Bernoulli trial") (coin-flip) whose probability of one success (or expected number of successes) is ${\displaystyle \lambda \leq 1}$   within a given interval. Split the interval into *n* parts, and perform a trial in each subinterval with probability ${\displaystyle {\tfrac {\lambda }{n}}}$   . The probability of *k* successes out of *n* trials over the entire interval is then given by the binomial distribution

> ${\displaystyle p_{k}^{(n)}={\binom {n}{k}}\left({\frac {\lambda }{n}}\right)^{\!k}\left(1{-}{\frac {\lambda }{n}}\right)^{\!n-k},}$  

whose generating function is:

> ${\displaystyle P^{(n)}(x)=\sum _{k=0}^{n}p_{k}^{(n)}x^{k}=\left(1-{\frac {\lambda }{n}}+{\frac {\lambda }{n}}x\right)^{n}.}$  

Taking the limit as *n* increases to infinity (with *x* fixed) and applying the product limit definition of the [exponential function](https://en.m.wikipedia.org/wiki/Exponential_function "Exponential function"), this reduces to the generating function of the Poisson distribution:

> ${\displaystyle \lim _{n\to \infty }P^{(n)}(x)=\lim _{n\to \infty }\left(1{+}{\tfrac {\lambda (x-1)}{n}}\right)^{n}=e^{\lambda (x-1)}=\sum _{k=0}^{\infty }e^{-\lambda }{\frac {\lambda ^{k}}{k!}}x^{k}.}$  

### General

- If ${\displaystyle X_{1}\sim \mathrm {Pois} (\lambda _{1})\,}$   and ${\displaystyle X_{2}\sim \mathrm {Pois} (\lambda _{2})\,}$   are independent, then the difference ${\displaystyle Y=X_{1}-X_{2}}$   follows a [Skellam distribution](https://en.m.wikipedia.org/wiki/Skellam_distribution "Skellam distribution").
- If ${\displaystyle X_{1}\sim \mathrm {Pois} (\lambda _{1})\,}$   and ${\displaystyle X_{2}\sim \mathrm {Pois} (\lambda _{2})\,}$   are independent, then the distribution of ${\displaystyle X_{1}}$   conditional on ${\displaystyle X_{1}+X_{2}}$   is a [binomial distribution](https://en.m.wikipedia.org/wiki/Binomial_distribution "Binomial distribution"). Specifically, if ${\displaystyle X_{1}+X_{2}=k,}$   then ${\displaystyle X_{1}|X_{1}+X_{2}=k\sim \mathrm {Binom} (k,\lambda _{1}/(\lambda _{1}+\lambda _{2})).}$   More generally, if *X*<sub>1</sub>, *X*<sub>2</sub>, ..., *X*<sub><span class="texhtml mvar">n</span></sub> are independent Poisson random variables with parameters λ<sub>1</sub>, λ<sub>2</sub>, ..., λ<sub><span class="texhtml mvar">n</span></sub> then

given ${\displaystyle \sum _{j=1}^{n}X_{j}=k,}$   it follows that ${\displaystyle X_{i}{\Big |}\sum _{j=1}^{n}X_{j}=k\sim \mathrm {Binom} \left(k,{\frac {\lambda _{i}}{\sum _{j=1}^{n}\lambda _{j}}}\right).}$   In fact, ${\displaystyle \{X_{i}\}\sim \mathrm {Multinom} \left(k,\left\{{\frac {\lambda _{i}}{\sum _{j=1}^{n}\lambda _{j}}}\right\}\right).}$
- If ${\displaystyle X\sim \mathrm {Pois} (\lambda )\,}$   and the distribution of ${\displaystyle Y}$   conditional on *X* = k is a [binomial distribution](https://en.m.wikipedia.org/wiki/Binomial_distribution "Binomial distribution"), ${\displaystyle Y\mid (X=k)\sim \mathrm {Binom} (k,p),}$   then the distribution of Y follows a Poisson distribution ${\displaystyle Y\sim \mathrm {Pois} (\lambda \cdot p).}$   In fact, if, conditional on ${\displaystyle \{X=k\},}$   ${\displaystyle \{Y_{i}\}}$   follows a [multinomial distribution](https://en.m.wikipedia.org/wiki/Multinomial_distribution "Multinomial distribution"), ${\displaystyle \{Y_{i}\}\mid (X=k)\sim \mathrm {Multinom} \left(k,p_{i}\right),}$   then each ${\displaystyle Y_{i}}$   follows an independent Poisson distribution ${\displaystyle Y_{i}\sim \mathrm {Pois} (\lambda \cdot p_{i}),\rho (Y_{i},Y_{j})=0.}$
- The Poisson distribution is a [special case](https://en.m.wikipedia.org/wiki/Special_case "Special case") of the discrete compound Poisson distribution (or stuttering Poisson distribution) with only a parameter.[^zhang2013-33][^zhang2016-34] The discrete compound Poisson distribution can be deduced from the limiting distribution of univariate multinomial distribution. It is also a [special case](https://en.m.wikipedia.org/wiki/Compound_Poisson_distribution#Special_cases "Compound Poisson distribution") of a [compound Poisson distribution](https://en.m.wikipedia.org/wiki/Compound_Poisson_distribution "Compound Poisson distribution").
- For sufficiently large values of λ, (say λ\>1000), the [normal distribution](https://en.m.wikipedia.org/wiki/Normal_distribution "Normal distribution") with mean λ and variance λ (standard deviation ${\displaystyle {\sqrt {\lambda }}}$   ) is an excellent approximation to the Poisson distribution. If λ is greater than about 10, then the normal distribution is a good approximation if an appropriate [continuity correction](https://en.m.wikipedia.org/wiki/Continuity_correction "Continuity correction") is performed, i.e., if P(*X* ≤ *x*), where *x* is a non-negative integer, is replaced by P(*X* ≤ *x* + 0.5). ${\displaystyle F_{\mathrm {Poisson} }(x;\lambda )\approx F_{\mathrm {normal} }(x;\mu =\lambda ,\sigma ^{2}=\lambda )}$
- [Variance-stabilizing transformation](https://en.m.wikipedia.org/wiki/Variance-stabilizing_transformation "Variance-stabilizing transformation"): If ${\displaystyle X\sim \mathrm {Pois} (\lambda ),}$   then[^johnson2005-8]  ${\displaystyle Y=2{\sqrt {X}}\approx {\mathcal {N}}(2{\sqrt {\lambda }};1),}$   and[^mccullagh1989-35]  ${\displaystyle Y={\sqrt {X}}\approx {\mathcal {N}}({\sqrt {\lambda }};1/4).}$   Under this transformation, the convergence to normality (as ${\displaystyle \lambda }$   increases) is far faster than the untransformed variable.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.m.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (May 2012)">citation needed</span></a></i>]</sup> Other, slightly more complicated, variance stabilizing transformations are available,[^johnson2005-8]  one of which is [Anscombe transform](https://en.m.wikipedia.org/wiki/Anscombe_transform "Anscombe transform").[^anscombe1948-36] See [Data transformation (statistics)](https://en.m.wikipedia.org/wiki/Data_transformation_\(statistics\) "Data transformation (statistics)") for more general uses of transformations.
- If for every *t* > 0 the number of arrivals in the time interval \[0, *t*\] follows the Poisson distribution with mean *λt*, then the sequence of inter-arrival times are independent and identically distributed [exponential](https://en.m.wikipedia.org/wiki/Exponential_distribution "Exponential distribution") random variables having mean 1/λ.[^ross2010-37]
- The [cumulative distribution functions](https://en.m.wikipedia.org/wiki/Cumulative_distribution_function "Cumulative distribution function") of the Poisson and [chi-squared distributions](https://en.m.wikipedia.org/wiki/Chi-squared_distribution "Chi-squared distribution") are related in the following ways:[^johnson2005-8]  ${\displaystyle F_{\text{Poisson}}(k;\lambda )=1-F_{\chi ^{2}}(2\lambda ;2(k+1))\quad \quad {\text{ integer }}k,}$   and[^johnson2005-8]  ${\displaystyle P(X=k)=F_{\chi ^{2}}(2\lambda ;2(k+1))-F_{\chi ^{2}}(2\lambda ;2k).}$

### Poisson approximation

Assume ${\displaystyle X_{1}\sim \operatorname {Pois} (\lambda _{1}),X_{2}\sim \operatorname {Pois} (\lambda _{2}),\dots ,X_{n}\sim \operatorname {Pois} (\lambda _{n})}$   where ${\displaystyle \lambda _{1}+\lambda _{2}+\dots +\lambda _{n}=1,}$   then[^38] ${\displaystyle (X_{1},X_{2},\dots ,X_{n})}$   is [multinomially distributed](https://en.m.wikipedia.org/wiki/Multinomial_distribution "Multinomial distribution") ${\displaystyle (X_{1},X_{2},\dots ,X_{n})\sim \operatorname {Mult} (N,\lambda _{1},\lambda _{2},\dots ,\lambda _{n})}$   conditioned on ${\displaystyle N=X_{1}+X_{2}+\dots X_{n}.}$  

This means[^mitzenmacher2005-27] , among other things, that for any nonnegative function ${\displaystyle f(x_{1},x_{2},\dots ,x_{n}),}$   if ${\displaystyle (Y_{1},Y_{2},\dots ,Y_{n})\sim \operatorname {Mult} (m,\mathbf {p} )}$   is multinomially distributed, then ${\displaystyle \operatorname {E} [f(Y_{1},Y_{2},\dots ,Y_{n})]\leq e{\sqrt {m}}\operatorname {E} [f(X_{1},X_{2},\dots ,X_{n})]}$   where ${\displaystyle (X_{1},X_{2},\dots ,X_{n})\sim \operatorname {Pois} (\mathbf {p} ).}$  

The factor of ${\displaystyle e{\sqrt {m}}}$   can be replaced by 2 if ${\displaystyle f}$   is further assumed to be monotonically increasing or decreasing.

### Bivariate Poisson distribution

This distribution has been extended to the [bivariate](https://en.m.wikipedia.org/wiki/Joint_probability_distribution "Joint probability distribution") case.[^loukas1986-39] The [generating function](https://en.m.wikipedia.org/wiki/Generating_function "Generating function") for this distribution is ${\displaystyle g(u,v)=\exp[(\theta _{1}-\theta _{12})(u-1)+(\theta _{2}-\theta _{12})(v-1)+\theta _{12}(uv-1)]}$  

with ${\displaystyle \theta _{1},\theta _{2}>\theta _{12}>0}$  

The marginal distributions are Poisson(*θ*<sub>1</sub>) and Poisson(*θ*<sub>2</sub>) and the correlation coefficient is limited to the range ${\displaystyle 0\leq \rho \leq \min \left\{{\sqrt {\frac {\theta _{1}}{\theta _{2}}}},{\sqrt {\frac {\theta _{2}}{\theta _{1}}}}\right\}}$  

A simple way to generate a bivariate Poisson distribution ${\displaystyle X_{1},X_{2}}$   is to take three independent Poisson distributions ${\displaystyle Y_{1},Y_{2},Y_{3}}$   with means ${\displaystyle \lambda _{1},\lambda _{2},\lambda _{3}}$   and then set ${\displaystyle X_{1}=Y_{1}+Y_{3},X_{2}=Y_{2}+Y_{3}.}$   The probability function of the bivariate Poisson distribution is ${\displaystyle \Pr(X_{1}=k_{1},X_{2}=k_{2})=\exp \left(-\lambda _{1}-\lambda _{2}-\lambda _{3}\right){\frac {\lambda _{1}^{k_{1}}}{k_{1}!}}{\frac {\lambda _{2}^{k_{2}}}{k_{2}!}}\sum _{k=0}^{\min(k_{1},k_{2})}{\binom {k_{1}}{k}}{\binom {k_{2}}{k}}k!\left({\frac {\lambda _{3}}{\lambda _{1}\lambda _{2}}}\right)^{k}}$  

### Free Poisson distribution

The free Poisson distribution[^40] with jump size ${\displaystyle \alpha }$   and rate ${\displaystyle \lambda }$   arises in [free probability](https://en.m.wikipedia.org/wiki/Free_probability "Free probability") theory as the limit of repeated [free convolution](https://en.m.wikipedia.org/wiki/Free_convolution "Free convolution") ${\displaystyle \left(\left(1-{\frac {\lambda }{N}}\right)\delta _{0}+{\frac {\lambda }{N}}\delta _{\alpha }\right)^{\boxplus N}}$   as *N* → ∞.

In other words, let ${\displaystyle X_{N}}$   be random variables so that ${\displaystyle X_{N}}$   has value ${\displaystyle \alpha }$   with probability ${\textstyle {\frac {\lambda }{N}}}$   and value 0 with the remaining probability. Assume also that the family ${\displaystyle X_{1},X_{2},\ldots }$   are [freely independent](https://en.m.wikipedia.org/wiki/Free_independence "Free independence"). Then the limit as ${\displaystyle N\to \infty }$   of the law of ${\displaystyle X_{1}+\cdots +X_{N}}$   is given by the Free Poisson law with parameters ${\displaystyle \lambda ,\alpha .}$  

This definition is analogous to one of the ways in which the classical Poisson distribution is obtained from a (classical) Poisson process.

The measure associated to the free Poisson law is given by[^41] ${\displaystyle \mu ={\begin{cases}(1-\lambda )\delta _{0}+\nu ,&{\text{if }}0\leq \lambda \leq 1\\\nu ,&{\text{if }}\lambda >1,\end{cases}}}$   where ${\displaystyle \nu ={\frac {1}{2\pi \alpha t}}{\sqrt {4\lambda \alpha ^{2}-(t-\alpha (1+\lambda ))^{2}}}\,dt}$   and has support ${\displaystyle [\alpha (1-{\sqrt {\lambda }})^{2},\alpha (1+{\sqrt {\lambda }})^{2}].}$  

This law also arises in [random matrix](https://en.m.wikipedia.org/wiki/Random_matrix "Random matrix") theory as the [Marchenko–Pastur law](https://en.m.wikipedia.org/wiki/Marchenko%E2%80%93Pastur_law "Marchenko–Pastur law"). Its [free cumulants](https://en.m.wikipedia.org/wiki/Cumulant#Free_cumulants "Cumulant") are equal to ${\displaystyle \kappa _{n}=\lambda \alpha ^{n}.}$  

#### Some transforms of this law

We give values of some important transforms of the free Poisson law; the computation can be found in e.g. in the book *Lectures on the Combinatorics of Free Probability* by A. Nica and R. Speicher[^42]

The R-transform of the free Poisson law is given by ${\displaystyle R(z)={\frac {\lambda \alpha }{1-\alpha z}}.}$  

The Cauchy transform (which is the negative of the [Stieltjes transformation](https://en.m.wikipedia.org/wiki/Stieltjes_transformation "Stieltjes transformation")) is given by ${\displaystyle G(z)={\frac {z+\alpha -\lambda \alpha -{\sqrt {(z-\alpha (1+\lambda ))^{2}-4\lambda \alpha ^{2}}}}{2\alpha z}}}$  

The S-transform is given by ${\displaystyle S(z)={\frac {1}{z+\lambda }}}$   in the case that ${\displaystyle \alpha =1.}$  

### Weibull and stable count

Poisson's probability mass function ${\displaystyle f(k;\lambda )}$   can be expressed in a form similar to the product distribution of a [Weibull distribution](https://en.m.wikipedia.org/wiki/Weibull_distribution "Weibull distribution") and a variant form of the [stable count distribution](https://en.m.wikipedia.org/wiki/Stable_count_distribution "Stable count distribution"). The variable ${\displaystyle (k+1)}$   can be regarded as inverse of Lévy's stability parameter in the stable count distribution: ${\displaystyle f(k;\lambda )=\int _{0}^{\infty }{\frac {1}{u}}\,W_{k+1}\left({\frac {\lambda }{u}}\right)\left[(k+1)u^{k}\,{\mathfrak {N}}_{\frac {1}{k+1}}(u^{k+1})\right]\,du,}$   where ${\displaystyle {\mathfrak {N}}_{\alpha }(\nu )}$   is a standard stable count distribution of shape ${\displaystyle \alpha =1/(k+1),}$   and ${\displaystyle W_{k+1}(x)}$   is a standard Weibull distribution of shape ${\displaystyle k+1.}$  

## Statistical inference

### Parameter estimation

Given a sample of n measured values ${\displaystyle k_{i}\in \{0,1,\dots \},}$   for *i* = 1, ..., *n*, we wish to estimate the value of the parameter λ of the Poisson population from which the sample was drawn. The [maximum likelihood](https://en.m.wikipedia.org/wiki/Maximum_likelihood "Maximum likelihood") estimate is[^43]

${\displaystyle {\widehat {\lambda }}_{\mathrm {MLE} }={\frac {1}{n}}\sum _{i=1}^{n}k_{i}\ .}$  

Since each observation has expectation λ so does the sample mean. Therefore, the maximum likelihood estimate is an [unbiased estimator](https://en.m.wikipedia.org/wiki/Unbiased_estimator "Unbiased estimator") of λ. It is also an efficient estimator since its variance achieves the [Cramér–Rao lower bound](https://en.m.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Rao_lower_bound "Cramér–Rao lower bound") (CRLB).[^44] Hence it is [minimum-variance unbiased](https://en.m.wikipedia.org/wiki/Minimum-variance_unbiased_estimator "Minimum-variance unbiased estimator"). Also it can be proven that the sum (and hence the sample mean as it is a one-to-one function of the sum) is a complete and sufficient statistic for λ.

To prove sufficiency we may use the [factorization theorem](https://en.m.wikipedia.org/wiki/Sufficient_statistic "Sufficient statistic"). Consider partitioning the probability mass function of the joint Poisson distribution for the sample into two parts: one that depends solely on the sample ${\displaystyle \mathbf {x} }$   , called ${\displaystyle h(\mathbf {x} )}$   , and one that depends on the parameter ${\displaystyle \lambda }$   and the sample ${\displaystyle \mathbf {x} }$   only through the function ${\displaystyle T(\mathbf {x} ).}$   Then ${\displaystyle T(\mathbf {x} )}$   is a sufficient statistic for ${\displaystyle \lambda .}$  

${\displaystyle P(\mathbf {x} )=\prod _{i=1}^{n}{\frac {\lambda ^{x_{i}}e^{-\lambda }}{x_{i}!}}={\frac {1}{\prod _{i=1}^{n}x_{i}!}}\times \lambda ^{\sum _{i=1}^{n}x_{i}}e^{-n\lambda }}$  

The first term ${\displaystyle h(\mathbf {x} )}$   depends only on ${\displaystyle \mathbf {x} }$   . The second term ${\displaystyle g(T(\mathbf {x} )|\lambda )}$   depends on the sample only through ${\textstyle T(\mathbf {x} )=\sum _{i=1}^{n}x_{i}.}$   Thus, ${\displaystyle T(\mathbf {x} )}$   is sufficient.

To find the parameter λ that maximizes the probability function for the Poisson population, we can use the logarithm of the likelihood function:

${\displaystyle {\begin{aligned}\ell (\lambda )&=\ln \prod _{i=1}^{n}f(k_{i}\mid \lambda )\\&=\sum _{i=1}^{n}\ln \!\left({\frac {e^{-\lambda }\lambda ^{k_{i}}}{k_{i}!}}\right)\\&=-n\lambda +\left(\sum _{i=1}^{n}k_{i}\right)\ln(\lambda )-\sum _{i=1}^{n}\ln(k_{i}!).\end{aligned}}}$  

We take the derivative of ${\displaystyle \ell }$   with respect to λ and compare it to zero:

${\displaystyle {\frac {\mathrm {d} }{\mathrm {d} \lambda }}\ell (\lambda )=0\iff -n+\left(\sum _{i=1}^{n}k_{i}\right){\frac {1}{\lambda }}=0.\!}$  

Solving for λ gives a stationary point.

${\displaystyle \lambda ={\frac {\sum _{i=1}^{n}k_{i}}{n}}}$  

So λ is the average of the k<sub><i>i</i></sub> values. Obtaining the sign of the second derivative of *L* at the stationary point will determine what kind of extreme value λ is.

${\displaystyle {\frac {\partial ^{2}\ell }{\partial \lambda ^{2}}}=-\lambda ^{-2}\sum _{i=1}^{n}k_{i}}$  

Evaluating the second derivative *at the stationary point* gives:

${\displaystyle {\frac {\partial ^{2}\ell }{\partial \lambda ^{2}}}=-{\frac {n^{2}}{\sum _{i=1}^{n}k_{i}}}}$  

which is the negative of n times the reciprocal of the average of the k<sub>i</sub>. This expression is negative when the average is positive. If this is satisfied, then the stationary point maximizes the probability function.

For [completeness](https://en.m.wikipedia.org/wiki/Completeness_\(statistics\) "Completeness (statistics)"), a family of distributions is said to be complete if and only if ${\displaystyle E(g(T))=0}$   implies that ${\displaystyle P_{\lambda }(g(T)=0)=1}$   for all ${\displaystyle \lambda .}$   If the individual ${\displaystyle X_{i}}$   are iid ${\displaystyle \mathrm {Po} (\lambda ),}$   then ${\textstyle T(\mathbf {x} )=\sum _{i=1}^{n}X_{i}\sim \mathrm {Po} (n\lambda ).}$   Knowing the distribution we want to investigate, it is easy to see that the statistic is complete.

${\displaystyle E(g(T))=\sum _{t=0}^{\infty }g(t){\frac {(n\lambda )^{t}e^{-n\lambda }}{t!}}=0}$  

For this equality to hold, ${\displaystyle g(t)}$   must be 0. This follows from the fact that none of the other terms will be 0 for all ${\displaystyle t}$   in the sum and for all possible values of ${\displaystyle \lambda .}$   Hence, ${\displaystyle E(g(T))=0}$   for all ${\displaystyle \lambda }$   implies that ${\displaystyle P_{\lambda }(g(T)=0)=1,}$   and the statistic has been shown to be complete.

### Confidence interval

The [confidence interval](https://en.m.wikipedia.org/wiki/Confidence_interval "Confidence interval") for the mean of a Poisson distribution can be expressed using the relationship between the cumulative distribution functions of the Poisson and [chi-squared distributions](https://en.m.wikipedia.org/wiki/Chi-squared_distribution "Chi-squared distribution"). The chi-squared distribution is itself closely related to the [gamma distribution](https://en.m.wikipedia.org/wiki/Gamma_distribution "Gamma distribution"), and this leads to an alternative expression. Given an observation k from a Poisson distribution with mean *μ*, a confidence interval for *μ* with confidence level 1 – *α* is

${\displaystyle {\tfrac {1}{2}}\chi ^{2}(\alpha /2;2k)\leq \mu \leq {\tfrac {1}{2}}\chi ^{2}(1-\alpha /2;2k+2),}$  

or equivalently,

${\displaystyle F^{-1}(\alpha /2;k,1)\leq \mu \leq F^{-1}(1-\alpha /2;k+1,1),}$  

where ${\displaystyle \chi ^{2}(p;n)}$   is the [quantile function](https://en.m.wikipedia.org/wiki/Quantile_function "Quantile function") (corresponding to a lower tail area *p*) of the chi-squared distribution with n degrees of freedom and ${\displaystyle F^{-1}(p;n,1)}$   is the quantile function of a [gamma distribution](https://en.m.wikipedia.org/wiki/Gamma_distribution "Gamma distribution") with shape parameter n and scale parameter 1.[^johnson2005-8] [^garwood1936-45] This interval is '[exact](https://en.m.wikipedia.org/wiki/Exact_statistics "Exact statistics")' in the sense that its [coverage probability](https://en.m.wikipedia.org/wiki/Coverage_probability "Coverage probability") is never less than the nominal 1 – *α*.

When quantiles of the gamma distribution are not available, an accurate approximation to this exact interval has been proposed (based on the [Wilson–Hilferty transformation](https://en.m.wikipedia.org/wiki/Wilson%E2%80%93Hilferty_transformation "Wilson–Hilferty transformation")):[^breslow1987-46]

${\displaystyle k\left(1-{\frac {1}{9k}}-{\frac {z_{\alpha /2}}{3{\sqrt {k}}}}\right)^{3}\leq \mu \leq (k+1)\left(1-{\frac {1}{9(k+1)}}+{\frac {z_{\alpha /2}}{3{\sqrt {k+1}}}}\right)^{3},}$  

where ${\displaystyle z_{\alpha /2}}$   denotes the [standard normal deviate](https://en.m.wikipedia.org/wiki/Standard_normal_deviate "Standard normal deviate") with upper tail area α / 2.

For application of these formulae in the same context as above (given a sample of n measured values k<sub><i>i</i></sub> each drawn from a Poisson distribution with mean λ), one would set

${\displaystyle k=\sum _{i=1}^{n}k_{i},}$  

calculate an interval for μ = n λ , and then derive the interval for λ.

### Bayesian inference

In [Bayesian inference](https://en.m.wikipedia.org/wiki/Bayesian_inference "Bayesian inference"), the [conjugate prior](https://en.m.wikipedia.org/wiki/Conjugate_prior "Conjugate prior") for the rate parameter λ of the Poisson distribution is the [gamma distribution](https://en.m.wikipedia.org/wiki/Gamma_distribution "Gamma distribution").[^fink1976-47] Let

${\displaystyle \lambda \sim \mathrm {Gamma} (\alpha ,\beta )}$  

denote that λ is distributed according to the gamma [density](https://en.m.wikipedia.org/wiki/Probability_density_function "Probability density function") *g* parameterized in terms of a [shape parameter](https://en.m.wikipedia.org/wiki/Shape_parameter "Shape parameter") *α* and an inverse [scale parameter](https://en.m.wikipedia.org/wiki/Scale_parameter "Scale parameter") *β*:

${\displaystyle g(\lambda \mid \alpha ,\beta )={\frac {\beta ^{\alpha }}{\Gamma (\alpha )}}\;\lambda ^{\alpha -1}\;e^{-\beta \,\lambda }\qquad {\text{ for }}\lambda >0\,\!.}$  

Then, given the same sample of n measured values k<sub><i>i</i></sub> [as before](https://en.m.wikipedia.org/wiki/#Maximum_likelihood), and a prior of Gamma(*α*, *β*), the posterior distribution is

${\displaystyle \lambda \sim \mathrm {Gamma} \left(\alpha +\sum _{i=1}^{n}k_{i},\beta +n\right).}$  

Note that the posterior mean is linear and is given by

${\displaystyle E[\lambda \mid k_{1},\ldots ,k_{n}]={\frac {\alpha +\sum _{i=1}^{n}k_{i}}{\beta +n}}.}$  

It can be shown that gamma distribution is the only prior that induces linearity of the conditional mean. Moreover, a converse result exists which states that if the conditional mean is close to a linear function in the ${\displaystyle L_{2}}$   distance than the prior distribution of λ must be close to gamma distribution in [Levy distance](https://en.m.wikipedia.org/wiki/L%C3%A9vy_metric "Lévy metric").[^48]

The posterior mean E\[λ\] approaches the maximum likelihood estimate ${\displaystyle {\widehat {\lambda }}_{\mathrm {MLE} }}$   in the limit as ${\displaystyle \alpha \to 0,\beta \to 0,}$   which follows immediately from the general expression of the mean of the [gamma distribution](https://en.m.wikipedia.org/wiki/Gamma_distribution "Gamma distribution").

The [posterior predictive distribution](https://en.m.wikipedia.org/wiki/Posterior_predictive_distribution "Posterior predictive distribution") for a single additional observation is a [negative binomial distribution](https://en.m.wikipedia.org/wiki/Negative_binomial_distribution "Negative binomial distribution"),[^gelman2003-49]  sometimes called a gamma–Poisson distribution.

### Simultaneous estimation of multiple Poisson means

Suppose ${\displaystyle X_{1},X_{2},\dots ,X_{p}}$   is a set of independent random variables from a set of ${\displaystyle p}$   Poisson distributions, each with a parameter ${\displaystyle \lambda _{i},}$   ${\displaystyle i=1,\dots ,p,}$   and we would like to estimate these parameters. Then, Clevenson and Zidek show that under the normalized squared error loss ${\textstyle L(\lambda ,{\hat {\lambda }})=\sum _{i=1}^{p}\lambda _{i}^{-1}({\hat {\lambda }}_{i}-\lambda _{i})^{2},}$   when ${\displaystyle p>1,}$   then, similar as in [Stein's example](https://en.m.wikipedia.org/wiki/Stein%27s_example "Stein's example") for the Normal means, the MLE estimator ${\displaystyle {\hat {\lambda }}_{i}=X_{i}}$   is [inadmissible](https://en.m.wikipedia.org/wiki/Admissible_decision_rule "Admissible decision rule").[^clevenson1975-50]

In this case, a family of [minimax estimators](https://en.m.wikipedia.org/wiki/Minimax_estimator "Minimax estimator") is given for any ${\displaystyle 0<c\leq 2(p-1)}$   and ${\displaystyle b\geq (p-2+p^{-1})}$   as[^berger1985-51]

${\displaystyle {\hat {\lambda }}_{i}=\left(1-{\frac {c}{b+\sum _{i=1}^{p}X_{i}}}\right)X_{i},\qquad i=1,\dots ,p.}$  

## Occurrence and applications

Some applications of the Poisson distribution to [count data](https://en.m.wikipedia.org/wiki/Count_data "Count data") (number of events):[^rasch1963-52]

- [telecommunication](https://en.m.wikipedia.org/wiki/Telecommunication "Telecommunication"): telephone calls arriving in a system,
- [astronomy](https://en.m.wikipedia.org/wiki/Astronomy "Astronomy"): photons arriving at a telescope,
- [chemistry](https://en.m.wikipedia.org/wiki/Chemistry "Chemistry"): the [molar mass distribution](https://en.m.wikipedia.org/wiki/Molar_mass_distribution "Molar mass distribution") of a [living polymerization](https://en.m.wikipedia.org/wiki/Living_polymerization "Living polymerization"),[^flory1940-53]
- [biology](https://en.m.wikipedia.org/wiki/Biology "Biology"): the number of mutations on a strand of [DNA](https://en.m.wikipedia.org/wiki/DNA "DNA") per unit length,
- [management](https://en.m.wikipedia.org/wiki/Management "Management"): customers arriving at a counter or call centre,
- [finance and insurance](https://en.m.wikipedia.org/wiki/Finance_and_insurance "Finance and insurance"): number of losses or claims occurring in a given period of time,
- [seismology](https://en.m.wikipedia.org/wiki/Earthquake_seismology "Earthquake seismology"): asymptotic Poisson model of risk for large earthquakes,[^lomnitz1994-54]
- [radioactivity](https://en.m.wikipedia.org/wiki/Radioactivity "Radioactivity"): decays in a given time interval in a radioactive sample,
- [optics](https://en.m.wikipedia.org/wiki/Optics "Optics"): number of photons emitted in a single laser pulse (a major vulnerability of [quantum key distribution](https://en.m.wikipedia.org/wiki/Quantum_key_distribution "Quantum key distribution") protocols, known as photon number splitting).

More examples of counting events that may be modelled as Poisson processes include:

- soldiers killed by horse-kicks each year in each corps in the [Prussian](https://en.m.wikipedia.org/wiki/Prussia "Prussia") cavalry. This example was used in a book by [Ladislaus Bortkiewicz](https://en.m.wikipedia.org/wiki/Ladislaus_Bortkiewicz "Ladislaus Bortkiewicz") (1868–1931),[^vonbortkiewitsch1898-12]
- yeast cells used when brewing [Guinness](https://en.m.wikipedia.org/wiki/Guinness "Guinness") beer. This example was used by [William Sealy Gosset](https://en.m.wikipedia.org/wiki/William_Sealy_Gosset "William Sealy Gosset") (1876–1937),[^student1907-55][^boland1984-56]
- phone calls arriving at a [call centre](https://en.m.wikipedia.org/wiki/Call_centre "Call centre") within a minute. This example was described by [A.K. Erlang](https://en.m.wikipedia.org/wiki/Agner_Krarup_Erlang "Agner Krarup Erlang") (1878–1929),[^erlang1909-57]
- goals in sports involving two competing teams,[^hornby2014-58]
- deaths per year in a given age group,
- jumps in a stock price in a given time interval,
- times a [web server](https://en.m.wikipedia.org/wiki/Web_server "Web server") is accessed per minute (under an assumption of [homogeneity](https://en.m.wikipedia.org/wiki/Poisson_process#Homogeneous "Poisson process")),
- [mutations](https://en.m.wikipedia.org/wiki/Mutation "Mutation") in a given stretch of [DNA](https://en.m.wikipedia.org/wiki/DNA "DNA") after a certain amount of radiation,
- [cells](https://en.m.wikipedia.org/wiki/Cells_\(biology\) "Cells (biology)") infected at a given [multiplicity of infection](https://en.m.wikipedia.org/wiki/Multiplicity_of_infection "Multiplicity of infection"),
- bacteria in a certain amount of liquid,[^koyama2016-59]
- [photons](https://en.m.wikipedia.org/wiki/Photons "Photons") arriving on a pixel circuit at a given illumination over a given time period,
- landing of [V-1 flying bombs](https://en.m.wikipedia.org/wiki/V-1_flying_bomb "V-1 flying bomb") on London during World War II, investigated by R. D. Clarke in 1946.[^clarke1946-60]

In [probabilistic number theory](https://en.m.wikipedia.org/wiki/Probabilistic_number_theory "Probabilistic number theory"), [Gallagher](https://en.m.wikipedia.org/wiki/Patrick_X._Gallagher "Patrick X. Gallagher") showed in 1976 that, if a certain version of the unproved [prime r-tuple conjecture](https://en.m.wikipedia.org/wiki/Second_Hardy%E2%80%93Littlewood_conjecture "Second Hardy–Littlewood conjecture") holds,[^hardy1923-61] then the counts of [prime numbers](https://en.m.wikipedia.org/wiki/Prime_number "Prime number") in short intervals would obey a Poisson distribution.[^gallagher1976-62]

### Law of rare events

 Comparison of the Poisson distribution (black lines) and the [binomial distribution](https://en.m.wikipedia.org/wiki/Binomial_distribution "Binomial distribution") with n = 10 (red circles), n = 20 (blue circles), n = 1000 (green circles). All distributions have a mean of 5. The horizontal axis shows the number of events k. As n gets larger, the Poisson distribution becomes an increasingly better approximation for the binomial distribution with the same mean.

The rate of an event is related to the probability of an event occurring in some small subinterval (of time, space or otherwise). In the case of the Poisson distribution, one assumes that there exists a small enough subinterval for which the probability of an event occurring twice is "negligible". With this assumption one can derive the Poisson distribution from the binomial one, given only the information of expected number of total events in the whole interval.

Let the total number of events in the whole interval be denoted by ${\displaystyle \lambda .}$   Divide the whole interval into ${\displaystyle n}$   subintervals ${\displaystyle I_{1},\dots ,I_{n}}$   of equal size, such that ${\displaystyle n>\lambda }$   (since we are interested in only very small portions of the interval this assumption is meaningful). This means that the expected number of events in each of the n subintervals is equal to ${\displaystyle \lambda /n.}$  

Now we assume that the occurrence of an event in the whole interval can be seen as a sequence of n [Bernoulli trials](https://en.m.wikipedia.org/wiki/Bernoulli_trial "Bernoulli trial"), where the ${\displaystyle i}$   \-th [Bernoulli trial](https://en.m.wikipedia.org/wiki/Bernoulli_trial "Bernoulli trial") corresponds to looking whether an event happens at the subinterval ${\displaystyle I_{i}}$   with probability ${\displaystyle \lambda /n.}$   The expected number of total events in ${\displaystyle n}$   such trials would be ${\displaystyle \lambda ,}$   the expected number of total events in the whole interval. Hence for each subdivision of the interval we have approximated the occurrence of the event as a Bernoulli process of the form ${\displaystyle {\textrm {B}}(n,\lambda /n).}$   As we have noted before we want to consider only very small subintervals. Therefore, we take the limit as ${\displaystyle n}$   goes to infinity.

In this case the [binomial distribution](https://en.m.wikipedia.org/wiki/Binomial_distribution "Binomial distribution") converges to what is known as the Poisson distribution by the [Poisson limit theorem](https://en.m.wikipedia.org/wiki/Poisson_limit_theorem "Poisson limit theorem").

In several of the above examples — such as, the number of mutations in a given sequence of DNA—the events being counted are actually the outcomes of discrete trials, and would more precisely be modelled using the [binomial distribution](https://en.m.wikipedia.org/wiki/Binomial_distribution "Binomial distribution"), that is ${\displaystyle X\sim {\textrm {B}}(n,p).}$  

In such cases n is very large and p is very small (and so the expectation n p is of intermediate magnitude). Then the distribution may be approximated by the less cumbersome Poisson distribution ${\displaystyle X\sim {\textrm {Pois}}(np).}$  

This approximation is sometimes known as the *law of rare events*,[^cameron1998-63]  since each of the n individual [Bernoulli events](https://en.m.wikipedia.org/wiki/Bernoulli_distribution "Bernoulli distribution") rarely occurs.

The name "law of rare events" may be misleading because the total count of success events in a Poisson process need not be rare if the parameter n p is not small. For example, the number of telephone calls to a busy switchboard in one hour follows a Poisson distribution with the events appearing frequent to the operator, but they are rare from the point of view of the average member of the population who is very unlikely to make a call to that switchboard in that hour.

The variance of the binomial distribution is 1 − *p* times that of the Poisson distribution, so almost equal when *p* is very small.

The word *law* is sometimes used as a synonym of [probability distribution](https://en.m.wikipedia.org/wiki/Probability_distribution "Probability distribution"), and *convergence in law* means *convergence in distribution*. Accordingly, the Poisson distribution is sometimes called the "law of small numbers" because it is the probability distribution of the number of occurrences of an event that happens rarely but has very many opportunities to happen. *The Law of Small Numbers* is a book by Ladislaus Bortkiewicz about the Poisson distribution, published in 1898.[^vonbortkiewitsch1898-12][^edgeworth1913-64]

### Poisson point process

The Poisson distribution arises as the number of points of a [Poisson point process](https://en.m.wikipedia.org/wiki/Poisson_point_process "Poisson point process") located in some finite region. More specifically, if *D* is some region space, for example Euclidean space **R**<sup><i>d</i></sup>, for which |*D*|, the area, volume or, more generally, the Lebesgue measure of the region is finite, and if *N*(*D*) denotes the number of points in *D*, then

${\displaystyle P(N(D)=k)={\frac {(\lambda |D|)^{k}e^{-\lambda |D|}}{k!}}.}$  

### Poisson regression and negative binomial regression

[Poisson regression](https://en.m.wikipedia.org/wiki/Poisson_regression "Poisson regression") and [negative binomial](https://en.m.wikipedia.org/wiki/Negative_binomial "Negative binomial") regression are useful for analyses where the dependent (response) variable is the count (0, 1, 2, ... ) of the number of events or occurrences in an interval.

### Biology

The [Luria–Delbrück experiment](https://en.m.wikipedia.org/wiki/Luria%E2%80%93Delbr%C3%BCck_experiment "Luria–Delbrück experiment") tested against the hypothesis of Lamarckian evolution, which should result in a Poisson distribution.

Katz and Miledi measured the [membrane potential](https://en.m.wikipedia.org/wiki/Membrane_potential "Membrane potential") with and without the presence of [acetylcholine](https://en.m.wikipedia.org/wiki/Acetylcholine "Acetylcholine") (ACh).[^65] When ACh is present, [ion channels](https://en.m.wikipedia.org/wiki/Ion_channel "Ion channel") on the membrane would be open randomly at a small fraction of the time. As there are a large number of ion channels each open for a small fraction of the time, the total number of ion channels open at any moment is Poisson distributed. When ACh is not present, effectively no ion channels are open. The membrane potential is ${\displaystyle V=N_{\text{open}}V_{\text{ion}}+V_{0}+V_{\text{noise}}}$   . Subtracting the effect of noise, Katz and Miledi found the mean and variance of membrane potential to be ${\displaystyle 8.5\times 10^{-3}\;\mathrm {V} ,(29.2\times 10^{-6}\;\mathrm {V} )^{2}}$   , giving ${\displaystyle V_{\text{ion}}=10^{-7}\;\mathrm {V} }$   . (pp. 94-95[^:0-66])

During each cellular replication event, the number of mutations is roughly Poisson distributed.[^67] For example, the HIV virus has 10,000 base pairs, and has a mutation rate of about 1 per 30,000 base pairs, meaning the number of mutations per replication event is distributed as ${\displaystyle \mathrm {Pois} (1/3)}$   . (p. 64[^:0-66])

### Other applications in science

In a Poisson process, the number of observed occurrences fluctuates about its mean λ with a [standard deviation](https://en.m.wikipedia.org/wiki/Standard_deviation "Standard deviation") ${\displaystyle \sigma _{k}={\sqrt {\lambda }}.}$   These fluctuations are denoted as *Poisson noise* or (particularly in electronics) as *[shot noise](https://en.m.wikipedia.org/wiki/Shot_noise "Shot noise")*.

The correlation of the mean and standard deviation in counting independent discrete occurrences is useful scientifically. By monitoring how the fluctuations vary with the mean signal, one can estimate the contribution of a single occurrence, *even if that contribution is too small to be detected directly*. For example, the charge *e* on an electron can be estimated by correlating the magnitude of an [electric current](https://en.m.wikipedia.org/wiki/Electric_current "Electric current") with its [shot noise](https://en.m.wikipedia.org/wiki/Shot_noise "Shot noise"). If *N* electrons pass a point in a given time *t* on the average, the [mean](https://en.m.wikipedia.org/wiki/Mean "Mean") [current](https://en.m.wikipedia.org/wiki/Electric_current "Electric current") is ${\displaystyle I=eN/t}$   ; since the current fluctuations should be of the order ${\displaystyle \sigma _{I}=e{\sqrt {N}}/t}$   (i.e., the standard deviation of the [Poisson process](https://en.m.wikipedia.org/wiki/Poisson_process "Poisson process")), the charge ${\displaystyle e}$   can be estimated from the ratio ${\displaystyle t\sigma _{I}^{2}/I.}$   <sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.m.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (April 2012)">citation needed</span></a></i>]</sup>

An everyday example is the graininess that appears as photographs are enlarged; the graininess is due to Poisson fluctuations in the number of reduced [silver](https://en.m.wikipedia.org/wiki/Silver "Silver") grains, not to the individual grains themselves. By [correlating](https://en.m.wikipedia.org/wiki/Correlation "Correlation") the graininess with the degree of enlargement, one can estimate the contribution of an individual grain (which is otherwise too small to be seen unaided).<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.m.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (February 2024)">citation needed</span></a></i>]</sup>

In [causal set](https://en.m.wikipedia.org/wiki/Causal_set "Causal set") theory the discrete elements of spacetime follow a Poisson distribution in the volume.

The Poisson distribution also appears in [quantum mechanics](https://en.m.wikipedia.org/wiki/Quantum_mechanics "Quantum mechanics"), especially [quantum optics](https://en.m.wikipedia.org/wiki/Quantum_optics "Quantum optics"). Namely, for a [quantum harmonic oscillator](https://en.m.wikipedia.org/wiki/Quantum_harmonic_oscillator "Quantum harmonic oscillator") system in a [coherent state](https://en.m.wikipedia.org/wiki/Coherent_state "Coherent state"), the probability of measuring a particular energy level has a Poisson distribution.

## Computational methods

The Poisson distribution poses two different tasks for dedicated software libraries: *evaluating* the distribution ${\displaystyle P(k;\lambda )}$   , and *drawing random numbers* according to that distribution.

### Evaluating the Poisson distribution

Computing ${\displaystyle P(k;\lambda )}$   for given ${\displaystyle k}$   and ${\displaystyle \lambda }$   is a trivial task that can be accomplished by using the standard definition of ${\displaystyle P(k;\lambda )}$   in terms of exponential, power, and factorial functions. However, the conventional definition of the Poisson distribution contains two terms that can easily overflow on computers: λ<sup><span class="texhtml mvar">k</span></sup> and *k*!. The fraction of λ<sup><span class="texhtml mvar">k</span></sup> to k! can also produce a rounding error that is very large compared to *e*<sup>−<span class="texhtml mvar">λ</span></sup>, and therefore give an erroneous result. For numerical stability the Poisson probability mass function should therefore be evaluated as

${\displaystyle \!f(k;\lambda )=\exp \left[k\ln \lambda -\lambda -\ln \Gamma (k+1)\right],}$  

which is mathematically equivalent but numerically stable. The natural logarithm of the [Gamma function](https://en.m.wikipedia.org/wiki/Gamma_function "Gamma function") can be obtained using the `lgamma` function in the [C](https://en.m.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") standard library (C99 version) or [R](https://en.m.wikipedia.org/wiki/R_\(programming_language\) "R (programming language)"), the `gammaln` function in [MATLAB](https://en.m.wikipedia.org/wiki/MATLAB "MATLAB") or [SciPy](https://en.m.wikipedia.org/wiki/SciPy "SciPy"), or the `log_gamma` function in [Fortran](https://en.m.wikipedia.org/wiki/Fortran "Fortran") 2008 and later.

Some computing languages provide built-in functions to evaluate the Poisson distribution, namely

- [R](https://en.m.wikipedia.org/wiki/R_\(programming_language\) "R (programming language)"): function `dpois(x, lambda)`;
- [Excel](https://en.m.wikipedia.org/wiki/Microsoft_Excel "Microsoft Excel"): function `POISSON( x, mean, cumulative)`, with a flag to specify the cumulative distribution;
- [Mathematica](https://en.m.wikipedia.org/wiki/Mathematica "Mathematica"): univariate Poisson distribution as `PoissonDistribution[ ${\displaystyle \lambda }$ ]`,[^wlpoissonrefpage-68] bivariate Poisson distribution as `MultivariatePoissonDistribution[ ${\displaystyle \theta _{12},}$ { ${\displaystyle \theta _{1}-\theta _{12},}$ ${\displaystyle \theta _{2}-\theta _{12}}$ }]`,.[^wlmvpoissonrefpage-69]

### Random variate generation

The less trivial task is to draw integer [random variate](https://en.m.wikipedia.org/wiki/Random_variate "Random variate") from the Poisson distribution with given ${\displaystyle \lambda .}$  

Solutions are provided by:

- [R](https://en.m.wikipedia.org/wiki/R_\(programming_language\) "R (programming language)"): function `rpois(n, lambda)`;
- [GNU Scientific Library](https://en.m.wikipedia.org/wiki/GNU_Scientific_Library "GNU Scientific Library") (GSL): function [gsl\_ran\_poisson](https://www.gnu.org/software/gsl/doc/html/randist.html#the-poisson-distribution)

A simple algorithm to generate random Poisson-distributed numbers ([pseudo-random number sampling](https://en.m.wikipedia.org/wiki/Pseudo-random_number_sampling "Pseudo-random number sampling")) has been given by [Knuth](https://en.m.wikipedia.org/wiki/Donald_Knuth "Donald Knuth"):[^knuth1997-70] 

```
algorithm poisson random number (Knuth):
    init:
        Let L ← e−λ, k ← 0 and p ← 1.
    do:
        k ← k + 1.
        Generate uniform random number u in [0,1] and let p ← p × u.
    while p > L.
    return k − 1.
```

The complexity is linear in the returned value k, which is λ on average. There are many other algorithms to improve this. Some are given in Ahrens & Dieter, see [§ References](https://en.m.wikipedia.org/wiki/#References) below.

For large values of λ, the value of L = *e*<sup>−<span class="texhtml mvar">λ</span></sup> may be so small that it is hard to represent. This can be solved by a change to the algorithm which uses an additional parameter STEP such that *e*<sup>−STEP</sup> does not underflow: <sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.m.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="Original source is missing (March 2019)">citation needed</span></a></i>]</sup>

```
algorithm poisson random number (Junhao, based on Knuth):
    init:
        Let λLeft ← λ, k ← 0 and p ← 1.
    do:
        k ← k + 1.
        Generate uniform random number u in (0,1) and let p ← p × u.
        while p < 1 and λLeft > 0:
            if λLeft > STEP:
                p ← p × eSTEP
                λLeft ← λLeft − STEP
            else:
                p ← p × eλLeft
                λLeft ← 0
    while p > 1.
    return k − 1.
```

The choice of STEP depends on the threshold of overflow. For double precision floating point format the threshold is near *e*<sup>700</sup>, so 500 should be a safe *STEP*.

Other solutions for large values of λ include [rejection sampling](https://en.m.wikipedia.org/wiki/Rejection_sampling "Rejection sampling") and using Gaussian approximation.

[Inverse transform sampling](https://en.m.wikipedia.org/wiki/Inverse_transform_sampling "Inverse transform sampling") is simple and efficient for small values of λ, and requires only one uniform random number *u* per sample. Cumulative probabilities are examined in turn until one exceeds *u*.

```
algorithm Poisson generator based upon the inversion by sequential search:[71]: 505 
    init:
        Let x ← 0, p ← e−λ, s ← p.
        Generate uniform random number u in [0,1].
    while u > s do:
        x ← x + 1.
        p ← p × λ / x.
        s ← s + p.
    return x.
```

## See also

- [Binomial distribution](https://en.m.wikipedia.org/wiki/Binomial_distribution "Binomial distribution")
- [Compound Poisson distribution](https://en.m.wikipedia.org/wiki/Compound_Poisson_distribution "Compound Poisson distribution")
- [Conway–Maxwell–Poisson distribution](https://en.m.wikipedia.org/wiki/Conway%E2%80%93Maxwell%E2%80%93Poisson_distribution "Conway–Maxwell–Poisson distribution")
- [Erlang distribution](https://en.m.wikipedia.org/wiki/Erlang_distribution "Erlang distribution")
- [Exponential distribution](https://en.m.wikipedia.org/wiki/Exponential_distribution "Exponential distribution")
- [Gamma distribution](https://en.m.wikipedia.org/wiki/Gamma_distribution "Gamma distribution")
- [Hermite distribution](https://en.m.wikipedia.org/wiki/Hermite_distribution "Hermite distribution")
- [Index of dispersion](https://en.m.wikipedia.org/wiki/Index_of_dispersion "Index of dispersion")
- [Negative binomial distribution](https://en.m.wikipedia.org/wiki/Negative_binomial_distribution "Negative binomial distribution")
- [Poisson clumping](https://en.m.wikipedia.org/wiki/Poisson_clumping "Poisson clumping")
- [Poisson point process](https://en.m.wikipedia.org/wiki/Poisson_point_process "Poisson point process")
- [Poisson regression](https://en.m.wikipedia.org/wiki/Poisson_regression "Poisson regression")
- [Poisson sampling](https://en.m.wikipedia.org/wiki/Poisson_sampling "Poisson sampling")
- [Poisson wavelet](https://en.m.wikipedia.org/wiki/Poisson_wavelet "Poisson wavelet")
- [Queueing theory](https://en.m.wikipedia.org/wiki/Queueing_theory "Queueing theory")
- [Renewal theory](https://en.m.wikipedia.org/wiki/Renewal_theory "Renewal theory")
- [Robbins lemma](https://en.m.wikipedia.org/wiki/Robbins_lemma "Robbins lemma")
- [Skellam distribution](https://en.m.wikipedia.org/wiki/Skellam_distribution "Skellam distribution")
- [Tweedie distribution](https://en.m.wikipedia.org/wiki/Tweedie_distribution "Tweedie distribution")
- [Zero-inflated model](https://en.m.wikipedia.org/wiki/Zero-inflated_model "Zero-inflated model")
- [Zero-truncated Poisson distribution](https://en.m.wikipedia.org/wiki/Zero-truncated_Poisson_distribution "Zero-truncated Poisson distribution")

## References

### Citations

[^haight1967-1]: Haight, Frank A. (1967). *Handbook of the Poisson Distribution*. New York, NY, US: John Wiley & Sons. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-471-33932-8](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-471-33932-8 "Special:BookSources/978-0-471-33932-8").

[^yates2014-2]: Yates, Roy D.; Goodman, David J. (2014). *Probability and Stochastic Processes: A Friendly Introduction for Electrical and Computer Engineers* (2nd ed.). Hoboken, NJ: Wiley. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-471-45259-1](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-471-45259-1 "Special:BookSources/978-0-471-45259-1").

[^3]: Ross, Sheldon M. (2014). *Introduction to Probability Models* (11th ed.). Academic Press.

[^poisson1837-4]: Poisson, Siméon D. (1837). [*Probabilité des jugements en matière criminelle et en matière civile, précédées des règles générales du calcul des probabilités*](https://gallica.bnf.fr/ark:/12148/bpt6k110193z/f218.image) \[*Research on the Probability of Judgments in Criminal and Civil Matters*\] (in French). Paris, France: Bachelier.

[^demoivre1711-5]: de Moivre, Abraham (1711). ["De mensura sortis, seu, de probabilitate eventuum in ludis a casu fortuito pendentibus"](https://doi.org/10.1098%2Frstl.1710.0018) \[On the Measurement of Chance, or, on the Probability of Events in Games Depending Upon Fortuitous Chance\]. *[Philosophical Transactions of the Royal Society](https://en.m.wikipedia.org/wiki/Philosophical_Transactions_of_the_Royal_Society "Philosophical Transactions of the Royal Society")* (in Latin). **27** (329): 213–264\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1098/rstl.1710.0018](https://doi.org/10.1098%2Frstl.1710.0018).

[^demoivre1718-6]: de Moivre, Abraham (1718). [*The Doctrine of Chances: Or, A Method of Calculating the Probability of Events in Play*](https://books.google.com/books?id=3EPac6QpbuMC&pg=PA14). London, Great Britain: W. Pearson. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780598843753](https://en.m.wikipedia.org/wiki/Special:BookSources/9780598843753 "Special:BookSources/9780598843753").

[^demoivre1721-7]: de Moivre, Abraham (1721). "Of the Laws of Chance". In Motte, Benjamin (ed.). *The Philosophical Transactions from the Year MDCC (where Mr. Lowthorp Ends) to the Year MDCCXX. Abridg'd, and Dispos'd Under General Heads* (in Latin). Vol. I. London, Great Britain: R. Wilkin, R. Robinson, S. Ballard, W. and J. Innys, and J. Osborn. pp. 190–219.

[^johnson2005-8]: Johnson, Norman L.; Kemp, Adrienne W.; Kotz, Samuel (2005). "Poisson Distribution". *Univariate Discrete Distributions* (3rd ed.). New York, NY, US: John Wiley & Sons, Inc. pp. 156–207\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1002/0471715816](https://doi.org/10.1002%2F0471715816). [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-471-27246-5](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-471-27246-5 "Special:BookSources/978-0-471-27246-5").

[^stigler1982-9]: Stigler, Stephen M. (1982). "Poisson on the Poisson Distribution". *Statistics & Probability Letters*. **1** (1): 33–35\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/0167-7152(82)90010-4](https://doi.org/10.1016%2F0167-7152%2882%2990010-4).

[^hald1984-10]: Hald, Anders; de Moivre, Abraham; McClintock, Bruce (1984). "A. de Moivre: 'De Mensura Sortis' or 'On the Measurement of Chance'". *International Statistical Review / Revue Internationale de Statistique*. **52** (3): 229–262\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2307/1403045](https://doi.org/10.2307%2F1403045). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [1403045](https://www.jstor.org/stable/1403045).

[^newcomb1860-11]: Newcomb, Simon (1860). ["Notes on the theory of probabilities"](https://babel.hathitrust.org/cgi/pt?id=nyp.33433069075590&seq=150). *The Mathematical Monthly*. **2** (4): 134–140.

[^vonbortkiewitsch1898-12]: von Bortkiewitsch, Ladislaus (1898). *Das Gesetz der kleinen Zahlen* \[*The law of small numbers*\] (in German). Leipzig, Germany: B.G. Teubner. pp. 1, 23–25.

On [page 1](https://digibus.ub.uni-stuttgart.de/viewer/object/1543508614348/13), Bortkiewicz presents the Poisson distribution.

On [pages 23–25](https://digibus.ub.uni-stuttgart.de/viewer/object/1543508614348/35), Bortkiewitsch presents his analysis of "4. Beispiel: Die durch Schlag eines Pferdes im preußischen Heere Getöteten." \[4. Example: Those killed in the Prussian army by a horse's kick.\]

[^13]: For the proof, see: [Proof wiki: expectation](https://proofwiki.org/wiki/Expectation_of_Poisson_Distribution "proofwiki:Expectation of Poisson Distribution") and [Proof wiki: variance](https://proofwiki.org/wiki/Variance_of_Poisson_Distribution "proofwiki:Variance of Poisson Distribution")

[^14]: [Kardar, Mehran](https://en.m.wikipedia.org/wiki/Mehran_Kardar "Mehran Kardar") (2007). [*Statistical Physics of Particles*](https://en.m.wikipedia.org/wiki/Statistical_Physics_of_Particles "Statistical Physics of Particles"). [Cambridge University Press](https://en.m.wikipedia.org/wiki/Cambridge_University_Press "Cambridge University Press"). p. 42. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-87342-0](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-521-87342-0 "Special:BookSources/978-0-521-87342-0"). [OCLC](https://en.m.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [860391091](https://search.worldcat.org/oclc/860391091).

[^15]: Dekking, Frederik Michel; Kraaikamp, Cornelis; Lopuhaä, Hendrik Paul; Meester, Ludolf Erwin (2005). [*A Modern Introduction to Probability and Statistics*](https://doi.org/10.1007/1-84628-168-7). Springer Texts in Statistics. p. 167. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/1-84628-168-7](https://doi.org/10.1007%2F1-84628-168-7). [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-85233-896-1](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-85233-896-1 "Special:BookSources/978-1-85233-896-1").

[^ugarte2016-16]: [Ugarte, M.D.](https://en.m.wikipedia.org/wiki/Mar%C3%ADa_Dolores_Ugarte "María Dolores Ugarte"); [Militino, A.F.](https://en.m.wikipedia.org/wiki/Ana_Fern%C3%A1ndez_Militino "Ana Fernández Militino"); Arnholt, A.T. (2016). *Probability and Statistics with R* (2nd ed.). Boca Raton, FL, US: CRC Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4665-0439-4](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-4665-0439-4 "Special:BookSources/978-1-4665-0439-4").

[^helske2017-17]: Helske, Jouni (2017). ["KFAS: Exponential Family State Space Models in R"](https://doi.org/10.18637%2Fjss.v078.i10). *Journal of Statistical Software*. **78** (10). [arXiv](https://en.m.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[1612.01907](https://arxiv.org/abs/1612.01907). [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.18637/jss.v078.i10](https://doi.org/10.18637%2Fjss.v078.i10). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [14379617](https://api.semanticscholar.org/CorpusID:14379617).

[^choi1994-18]: Choi, Kwok P. (1994). ["On the medians of gamma distributions and an equation of Ramanujan"](https://doi.org/10.2307%2F2160389). *Proceedings of the American Mathematical Society*. **121** (1): 245–251\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2307/2160389](https://doi.org/10.2307%2F2160389). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2160389](https://www.jstor.org/stable/2160389).

[^riordan1937-19]: Riordan, John (1937). ["Moment Recurrence Relations for Binomial, Poisson and Hypergeometric Frequency Distributions"](https://projecteuclid.org/download/pdf_1/euclid.aoms/1177732430) (PDF). *Annals of Mathematical Statistics*. **8** (2): 103–111\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1214/aoms/1177732430](https://doi.org/10.1214%2Faoms%2F1177732430). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2957598](https://www.jstor.org/stable/2957598).

[^20]: D. Ahle, Thomas (2022). "Sharp and simple bounds for the raw moments of the Binomial and Poisson distributions". *Statistics & Probability Letters*. **182**: 109306. [arXiv](https://en.m.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[2103.17027](https://arxiv.org/abs/2103.17027). [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/j.spl.2021.109306](https://doi.org/10.1016%2Fj.spl.2021.109306).

[^lehmann1986-21]: Lehmann, Erich Leo (1986). *Testing Statistical Hypotheses* (2nd ed.). New York, NJ, US: Springer Verlag. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-387-94919-2](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-387-94919-2 "Special:BookSources/978-0-387-94919-2").

[^raikov1937-22]: Raikov, Dmitry (1937). "On the decomposition of Poisson laws". *Comptes Rendus de l'Académie des Sciences de l'URSS*. **14**: 9–11.

[^vonmises1964-23]: von Mises, Richard (1964). *Mathematical Theory of Probability and Statistics*. New York, NJ, US: Academic Press. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/C2013-0-12460-9](https://doi.org/10.1016%2FC2013-0-12460-9). [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4832-3213-3](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-4832-3213-3 "Special:BookSources/978-1-4832-3213-3").

[^24]: Harremoes, P. (July 2001). "Binomial and Poisson distributions as maximum entropy distributions". *IEEE Transactions on Information Theory*. **47** (5): 2039–2041\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/18.930936](https://doi.org/10.1109%2F18.930936). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [16171405](https://api.semanticscholar.org/CorpusID:16171405).

[^laha1979-25]: Laha, Radha G.; Rohatgi, Vijay K. (1979). *Probability Theory*. New York, NJ, US: John Wiley & Sons. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-471-03262-5](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-471-03262-5 "Special:BookSources/978-0-471-03262-5").

[^26]: Mitzenmacher, Michael (2017). *Probability and computing: Randomization and probabilistic techniques in algorithms and data analysis*. Eli Upfal (2nd ed.). Cambridge, UK. Exercise 5.14. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-107-15488-9](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-107-15488-9 "Special:BookSources/978-1-107-15488-9"). [OCLC](https://en.m.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [960841613](https://search.worldcat.org/oclc/960841613).`{{[cite book](https://en.m.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: location missing publisher ([link](https://en.m.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher "Category:CS1 maint: location missing publisher"))

[^mitzenmacher2005-27]: [Mitzenmacher, Michael](https://en.m.wikipedia.org/wiki/Michael_Mitzenmacher "Michael Mitzenmacher"); [Upfal, Eli](https://en.m.wikipedia.org/wiki/Eli_Upfal "Eli Upfal") (2005). *Probability and Computing: Randomized Algorithms and Probabilistic Analysis*. Cambridge, UK: Cambridge University Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-83540-4](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-521-83540-4 "Special:BookSources/978-0-521-83540-4").

[^28]: Short, Michael (2013). ["Improved Inequalities for the Poisson and Binomial Distribution and Upper Tail Quantile Functions"](https://doi.org/10.1155%2F2013%2F412958). *ISRN Probability and Statistics*. **2013**. Corollary 6. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1155/2013/412958](https://doi.org/10.1155%2F2013%2F412958).

[^29]: Short, Michael (2013). ["Improved Inequalities for the Poisson and Binomial Distribution and Upper Tail Quantile Functions"](https://doi.org/10.1155%2F2013%2F412958). *ISRN Probability and Statistics*. **2013**. Theorem 2. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1155/2013/412958](https://doi.org/10.1155%2F2013%2F412958).

[^kamath2015-30]: Kamath, Govinda M.; Şaşoğlu, Eren; Tse, David (14–19 June 2015). *Optimal haplotype assembly from high-throughput mate-pair reads*. 2015 IEEE International Symposium on Information Theory (ISIT). Hong Kong, China. pp. 914–918\. [arXiv](https://en.m.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[1502.01975](https://arxiv.org/abs/1502.01975). [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/ISIT.2015.7282588](https://doi.org/10.1109%2FISIT.2015.7282588). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [128634](https://api.semanticscholar.org/CorpusID:128634).

[^nist2006-31]: Prins, Jack (2012). ["6.3.3.1. Counts Control Charts"](http://www.itl.nist.gov/div898/handbook/pmc/section3/pmc331.htm). *e-Handbook of Statistical Methods*. NIST/SEMATECH. Retrieved 20 September 2019.

[^32]: Feller, William. *An Introduction to Probability Theory and its Applications*.

[^zhang2013-33]: Zhang, Huiming; Liu, Yunxiao; Li, Bo (2014). "Notes on discrete compound Poisson model with applications to risk theory". *Insurance: Mathematics and Economics*. **59**: 325–336\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/j.insmatheco.2014.09.012](https://doi.org/10.1016%2Fj.insmatheco.2014.09.012).

[^zhang2016-34]: Zhang, Huiming; Li, Bo (2016). "Characterizations of discrete compound Poisson distributions". *Communications in Statistics - Theory and Methods*. **45** (22): 6789–6802\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1080/03610926.2014.901375](https://doi.org/10.1080%2F03610926.2014.901375). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [125475756](https://api.semanticscholar.org/CorpusID:125475756).

[^mccullagh1989-35]: [McCullagh, Peter](https://en.m.wikipedia.org/wiki/Peter_McCullagh "Peter McCullagh"); [Nelder, John](https://en.m.wikipedia.org/wiki/John_Nelder "John Nelder") (1989). *Generalized Linear Models*. Monographs on Statistics and Applied Probability. Vol. 37. London, UK: Chapman and Hall. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-412-31760-6](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-412-31760-6 "Special:BookSources/978-0-412-31760-6").

[^anscombe1948-36]: [Anscombe, Francis J.](https://en.m.wikipedia.org/wiki/Frank_Anscombe "Frank Anscombe") (1948). "The transformation of Poisson, binomial and negative binomial data". *Biometrika*. **35** (3–4): 246–254\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1093/biomet/35.3-4.246](https://doi.org/10.1093%2Fbiomet%2F35.3-4.246). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2332343](https://www.jstor.org/stable/2332343).

[^ross2010-37]: Ross, Sheldon M. (2010). *Introduction to Probability Models* (10th ed.). Boston, MA: Academic Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-12-375686-2](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-12-375686-2 "Special:BookSources/978-0-12-375686-2").

[^38]: ["1.7.7 – Relationship between the Multinomial and Poisson | STAT 504"](https://web.archive.org/web/20190806195228/https://newonlinecourses.science.psu.edu/stat504/node/48/). Archived from [the original](https://newonlinecourses.science.psu.edu/stat504/node/48/) on 6 August 2019. Retrieved 6 August 2019.

[^loukas1986-39]: Loukas, Sotirios; Kemp, C. David (1986). "The Index of Dispersion Test for the Bivariate Poisson Distribution". *Biometrics*. **42** (4): 941–948\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2307/2530708](https://doi.org/10.2307%2F2530708). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2530708](https://www.jstor.org/stable/2530708).

[^40]: Free Random Variables by D. Voiculescu, K. Dykema, A. Nica, CRM Monograph Series, American Mathematical Society, Providence RI, 1992

[^41]: Alexandru Nica, Roland Speicher: [Lectures on the Combinatorics of Free Probability](https://rolandspeicher.com/literature/nica-speicher/). London Mathematical Society Lecture Note Series, Vol. 335, Cambridge University Press, 2006.

[^42]: [Lectures on the Combinatorics of Free Probability](http://rolandspeicher.com/literature/nica-speicher/) by A. Nica and R. Speicher, pp. 203–204, Cambridge Univ. Press 2006

[^43]: Paszek, Ewa. ["Maximum likelihood estimation – examples"](http://cnx.org/content/m13500/latest/?collection=col10343/latest). *cnx.org*.

[^44]: Van Trees, Harry L. (2013). [*Detection estimation and modulation theory*](https://www.worldcat.org/oclc/851161356). Kristine L. Bell, Zhi Tian (Second ed.). Hoboken, N.J. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-299-66515-6](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-299-66515-6 "Special:BookSources/978-1-299-66515-6"). [OCLC](https://en.m.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [851161356](https://search.worldcat.org/oclc/851161356).`{{[cite book](https://en.m.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: location missing publisher ([link](https://en.m.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher "Category:CS1 maint: location missing publisher"))

[^garwood1936-45]: Garwood, Frank (1936). "Fiducial Limits for the Poisson Distribution". *Biometrika*. **28** (3/4): 437–442\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1093/biomet/28.3-4.437](https://doi.org/10.1093%2Fbiomet%2F28.3-4.437). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2333958](https://www.jstor.org/stable/2333958).

[^breslow1987-46]: [Breslow, Norman E.](https://en.m.wikipedia.org/wiki/Norman_Breslow "Norman Breslow"); [Day, Nick E.](https://en.m.wikipedia.org/wiki/Nick_Day_\(statistician\) "Nick Day (statistician)") (1987). [*Statistical Methods in Cancer Research*](https://web.archive.org/web/20180808161401/http://www.iarc.fr/en/publications/pdfs-online/stat/sp82/index.php). Vol. 2 — The Design and Analysis of Cohort Studies. Lyon, France: [International Agency for Research on Cancer](https://en.m.wikipedia.org/wiki/International_Agency_for_Research_on_Cancer "International Agency for Research on Cancer"). [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-92-832-0182-3](https://en.m.wikipedia.org/wiki/Special:BookSources/978-92-832-0182-3 "Special:BookSources/978-92-832-0182-3"). Archived from [the original](http://www.iarc.fr/en/publications/pdfs-online/stat/sp82/index.php) on 8 August 2018. Retrieved 11 March 2012.

[^fink1976-47]: Fink, Daniel (1997). *A Compendium of Conjugate Priors*.

[^48]: Dytso, Alex; Poor, H. Vincent (2020). ["Estimation in Poisson noise: Properties of the conditional mean estimator"](https://doi.org/10.1109%2FTIT.2020.2979978). *IEEE Transactions on Information Theory*. **66** (7): 4304–4323\. [arXiv](https://en.m.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[1911.03744](https://arxiv.org/abs/1911.03744). [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/TIT.2020.2979978](https://doi.org/10.1109%2FTIT.2020.2979978). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [207853178](https://api.semanticscholar.org/CorpusID:207853178).

[^gelman2003-49]: Gelman; Carlin, John B.; Stern, Hal S.; Rubin, Donald B. (2003). *Bayesian Data Analysis* (2nd ed.). Boca Raton, FL, US: Chapman & Hall/CRC. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [1-58488-388-X](https://en.m.wikipedia.org/wiki/Special:BookSources/1-58488-388-X "Special:BookSources/1-58488-388-X").

[^clevenson1975-50]: Clevenson, M. Lawrence; Zidek, James V. (1975). "Simultaneous estimation of the means of independent Poisson laws". *Journal of the American Statistical Association*. **70** (351): 698–705\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1080/01621459.1975.10482497](https://doi.org/10.1080%2F01621459.1975.10482497). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2285958](https://www.jstor.org/stable/2285958).

[^berger1985-51]: Berger, James O. (1985). *Statistical Decision Theory and Bayesian Analysis*. Springer Series in Statistics (2nd ed.). New York, NY: Springer-Verlag. [Bibcode](https://en.m.wikipedia.org/wiki/Bibcode_\(identifier\) "Bibcode (identifier)"):[1985sdtb.book.....B](https://ui.adsabs.harvard.edu/abs/1985sdtb.book.....B). [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-1-4757-4286-2](https://doi.org/10.1007%2F978-1-4757-4286-2). [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-387-96098-2](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-387-96098-2 "Special:BookSources/978-0-387-96098-2").

[^rasch1963-52]: Rasch, Georg (1963). [*The Poisson Process as a Model for a Diversity of Behavioural Phenomena*](http://www.rasch.org/memo1963.pdf) (PDF). 17th International Congress of Psychology. Vol. 2. Washington, DC: American Psychological Association. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1037/e685262012-108](https://doi.org/10.1037%2Fe685262012-108).

[^flory1940-53]: Flory, Paul J. (1940). "Molecular Size Distribution in Ethylene Oxide Polymers". *Journal of the American Chemical Society*. **62** (6): 1561–1565\. [Bibcode](https://en.m.wikipedia.org/wiki/Bibcode_\(identifier\) "Bibcode (identifier)"):[1940JAChS..62.1561F](https://ui.adsabs.harvard.edu/abs/1940JAChS..62.1561F). [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1021/ja01863a066](https://doi.org/10.1021%2Fja01863a066).

[^lomnitz1994-54]: Lomnitz, Cinna (1994). *Fundamentals of Earthquake Prediction*. New York, NY: John Wiley & Sons. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-471-57419-8](https://en.m.wikipedia.org/wiki/Special:BookSources/0-471-57419-8 "Special:BookSources/0-471-57419-8"). [OCLC](https://en.m.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [647404423](https://search.worldcat.org/oclc/647404423).

[^student1907-55]: [a student](https://en.m.wikipedia.org/wiki/William_Sealy_Gosset "William Sealy Gosset") (1907). ["On the error of counting with a haemacytometer"](https://zenodo.org/record/1620891). *Biometrika*. **5** (3): 351–360\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2307/2331633](https://doi.org/10.2307%2F2331633). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2331633](https://www.jstor.org/stable/2331633).

[^boland1984-56]: Boland, Philip J. (1984). "A biographical glimpse of William Sealy Gosset". *The American Statistician*. **38** (3): 179–183\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1080/00031305.1984.10483195](https://doi.org/10.1080%2F00031305.1984.10483195). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2683648](https://www.jstor.org/stable/2683648).

[^erlang1909-57]: Erlang, Agner K. (1909). "Sandsynlighedsregning og Telefonsamtaler" \[Probability Calculation and Telephone Conversations\]. *Nyt Tidsskrift for Matematik* (in Danish). **20** (B): 33–39\. [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [24528622](https://www.jstor.org/stable/24528622).

[^hornby2014-58]: Hornby, Dave (2014). ["Football Prediction Model: Poisson Distribution"](http://www.sportsbettingonline.net/strategy/football-prediction-model-poisson-distribution). Sports Betting Online. Retrieved 19 September 2014.

[^koyama2016-59]: Koyama, Kento; Hokunan, Hidekazu; Hasegawa, Mayumi; Kawamura, Shuso; Koseki, Shigenobu (2016). "Do bacterial cell numbers follow a theoretical Poisson distribution? Comparison of experimentally obtained numbers of single cells with random number generation via computer simulation". *Food Microbiology*. **60**: 49–53\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/j.fm.2016.05.019](https://doi.org/10.1016%2Fj.fm.2016.05.019). [PMID](https://en.m.wikipedia.org/wiki/PMID_\(identifier\) "PMID (identifier)") [27554145](https://pubmed.ncbi.nlm.nih.gov/27554145).

[^clarke1946-60]: Clarke, R. D. (1946). ["An application of the Poisson distribution"](https://www.actuaries.org.uk/system/files/documents/pdf/0481.pdf) (PDF). *Journal of the Institute of Actuaries*. **72** (3): 481. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1017/S0020268100035435](https://doi.org/10.1017%2FS0020268100035435).

[^hardy1923-61]: [Hardy, Godfrey H.](https://en.m.wikipedia.org/wiki/G._H._Hardy "G. H. Hardy"); [Littlewood, John E.](https://en.m.wikipedia.org/wiki/John_Edensor_Littlewood "John Edensor Littlewood") (1923). ["On some problems of "partitio numerorum" III: On the expression of a number as a sum of primes"](https://doi.org/10.1007%2FBF02403921). *Acta Mathematica*. **44**: 1–70\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/BF02403921](https://doi.org/10.1007%2FBF02403921).

[^gallagher1976-62]: Gallagher, Patrick X. (1976). "On the distribution of primes in short intervals". *[Mathematika](https://en.m.wikipedia.org/wiki/Mathematika "Mathematika")*. **23** (1): 4–9\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1112/s0025579300016442](https://doi.org/10.1112%2Fs0025579300016442).

[^cameron1998-63]: Cameron, A. Colin; Trivedi, Pravin K. (1998). [*Regression Analysis of Count Data*](https://books.google.com/books?id=SKUXe_PjtRMC&pg=PA5). Cambridge, UK: Cambridge University Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-63567-7](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-521-63567-7 "Special:BookSources/978-0-521-63567-7").

[^edgeworth1913-64]: [Edgeworth, F.Y.](https://en.m.wikipedia.org/wiki/Francis_Ysidro_Edgeworth "Francis Ysidro Edgeworth") (1913). ["On the use of the theory of probabilities in statistics relating to society"](https://zenodo.org/record/1449478). *[Journal of the Royal Statistical Society](https://en.m.wikipedia.org/wiki/Journal_of_the_Royal_Statistical_Society "Journal of the Royal Statistical Society")*. **76** (2): 165–193\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2307/2340091](https://doi.org/10.2307%2F2340091). [JSTOR](https://en.m.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2340091](https://www.jstor.org/stable/2340091).

[^65]: Katz, B.; Miledi, R. (August 1972). ["The statistical nature of the acetylcholine potential and its molecular components"](https://dx.doi.org/10.1113/jphysiol.1972.sp009918). *The Journal of Physiology*. **224** (3): 665–699\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1113/jphysiol.1972.sp009918](https://doi.org/10.1113%2Fjphysiol.1972.sp009918). [ISSN](https://en.m.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0022-3751](https://search.worldcat.org/issn/0022-3751). [PMC](https://en.m.wikipedia.org/wiki/PMC_\(identifier\) "PMC (identifier)") [1331515](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1331515). [PMID](https://en.m.wikipedia.org/wiki/PMID_\(identifier\) "PMID (identifier)") [5071933](https://pubmed.ncbi.nlm.nih.gov/5071933).

[^:0-66]: Nelson, Philip Charles; Bromberg, Sarina; Hermundstad, Ann; Prentice, Jason (2015). [*Physical models of living systems*](https://www.worldcat.org/title/891121698). New York, NY: W.H. Freeman & Company, a Macmillan Education Imprint. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4641-4029-7](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-4641-4029-7 "Special:BookSources/978-1-4641-4029-7"). [OCLC](https://en.m.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [891121698](https://search.worldcat.org/oclc/891121698).

[^67]: Foster, Patricia L. (1 January 2006), "Methods for Determining Spontaneous Mutation Rates", *DNA Repair, Part B*, Methods in Enzymology, vol. 409, Academic Press, pp. 195–213, [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/S0076-6879(05)09012-9](https://doi.org/10.1016%2FS0076-6879%2805%2909012-9), [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-12-182814-1](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-12-182814-1 "Special:BookSources/978-0-12-182814-1"), [PMC](https://en.m.wikipedia.org/wiki/PMC_\(identifier\) "PMC (identifier)") [2041832](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2041832), [PMID](https://en.m.wikipedia.org/wiki/PMID_\(identifier\) "PMID (identifier)") [16793403](https://pubmed.ncbi.nlm.nih.gov/16793403)

[^wlpoissonrefpage-68]: ["Wolfram Language: PoissonDistribution reference page"](http://reference.wolfram.com/language/ref/PoissonDistribution.html). *wolfram.com*. Retrieved 8 April 2016.

[^wlmvpoissonrefpage-69]: ["Wolfram Language: MultivariatePoissonDistribution reference page"](http://reference.wolfram.com/language/ref/MultivariatePoissonDistribution.html). *wolfram.com*. Retrieved 8 April 2016.

[^knuth1997-70]: Knuth, Donald Ervin (1997). *Seminumerical Algorithms*. [The Art of Computer Programming](https://en.m.wikipedia.org/wiki/The_Art_of_Computer_Programming "The Art of Computer Programming"). Vol. 2 (3rd ed.). [Addison Wesley](https://en.m.wikipedia.org/wiki/Addison_Wesley "Addison Wesley"). [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-201-89684-8](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-201-89684-8 "Special:BookSources/978-0-201-89684-8").

[^devroye1986-71]: [Devroye, Luc](https://en.m.wikipedia.org/wiki/Luc_Devroye "Luc Devroye") (1986). ["Discrete Univariate Distributions"](http://luc.devroye.org/chapter_ten.pdf) (PDF). [*Non-Uniform Random Variate Generation*](http://luc.devroye.org/rnbookindex.html). New York, NY: Springer-Verlag. pp. 485–553\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-1-4613-8643-8\_10](https://doi.org/10.1007%2F978-1-4613-8643-8_10). [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4613-8645-2](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-4613-8645-2 "Special:BookSources/978-1-4613-8645-2").

### Sources

- Ahrens, Joachim H.; Dieter, Ulrich (1974). "Computer Methods for Sampling from Gamma, Beta, Poisson and Binomial Distributions". *Computing*. **12** (3): 223–246\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/BF02293108](https://doi.org/10.1007%2FBF02293108). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [37484126](https://api.semanticscholar.org/CorpusID:37484126).
- Ahrens, Joachim H.; Dieter, Ulrich (1982). ["Computer Generation of Poisson Deviates"](https://doi.org/10.1145%2F355993.355997). *ACM Transactions on Mathematical Software*. **8** (2): 163–179\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/355993.355997](https://doi.org/10.1145%2F355993.355997). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [12410131](https://api.semanticscholar.org/CorpusID:12410131).
- Evans, Ronald J.; Boersma, J.; Blachman, N. M.; Jagers, A. A. (1988). ["The Entropy of a Poisson Distribution: Problem 87-6"](https://research.tue.nl/nl/publications/solution-to-problem-876--the-entropy-of-a-poisson-distribution\(94cf6dd2-b35e-41c8-9da7-6ec69ca391a0\).html). *SIAM Review*. **30** (2): 314–317\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1137/1030059](https://doi.org/10.1137%2F1030059).