---
source: "https://en.wikipedia.org/wiki/Three-valued_logic"
author:
  - 
published: 2003-06-20
created: 2025-06-20
tags:
---
In [logic](https://en.wikipedia.org/wiki/Logic "Logic"), a **three-valued logic** (also **trinary logic**, **trivalent**, **ternary**, or **trilean**,[^1] sometimes abbreviated **3VL**) is any of several [many-valued logic](https://en.wikipedia.org/wiki/Many-valued_logic "Many-valued logic") systems in which there are three [truth values](https://en.wikipedia.org/wiki/Truth_value "Truth value") indicating *true*, *false*, and some third value. This is contrasted with the more commonly known [bivalent](https://en.wikipedia.org/wiki/Principle_of_bivalence "Principle of bivalence") logics (such as classical sentential or [Boolean logic](https://en.wikipedia.org/wiki/Boolean_logic "Boolean logic")) which provide only for *true* and *false*.

[Emil Leon Post](https://en.wikipedia.org/wiki/Emil_Leon_Post "Emil Leon Post") is credited with first introducing additional logical truth degrees in his 1921 theory of elementary propositions.[^2] The conceptual form and basic ideas of three-valued logic were initially published by [Jan Łukasiewicz](https://en.wikipedia.org/wiki/Jan_%C5%81ukasiewicz "Jan Łukasiewicz") and [Clarence Irving Lewis](https://en.wikipedia.org/wiki/Clarence_Irving_Lewis "Clarence Irving Lewis"). These were then re-formulated by [Grigore Constantin Moisil](https://en.wikipedia.org/wiki/Grigore_Constantin_Moisil "Grigore Constantin Moisil") in an axiomatic algebraic form, and also extended to *n* -valued logics in 1945.

## Pre-discovery

Around 1910, [Charles Sanders Peirce](https://en.wikipedia.org/wiki/Charles_Sanders_Peirce "Charles Sanders Peirce") defined a [many-valued logic system](https://en.wikipedia.org/wiki/Many-valued_logic "Many-valued logic"). He never published it. In fact, he did not even number the three pages of notes where he defined his three-valued operators.[^3] Peirce soundly rejected the idea all propositions must be either true or false; boundary-propositions, he writes, are "at the limit between P and not P." [^4] However, as confident as he was that "Triadic Logic is universally true," [^5] he also jotted down that "All this is mighty close to nonsense." [^6] Only in 1966, when Max Fisch and Atwell Turquette began publishing what they rediscovered in his unpublished manuscripts, did Peirce's triadic ideas become widely known.[^7]

## Motivation

Broadly speaking, the primary motivation for research of three valued logic is to represent the truth value of a statement that cannot be represented as true or false.[^8] Łukasiewicz initially developed three-valued logic for the [problem of future contingents](https://en.wikipedia.org/wiki/Problem_of_future_contingents "Problem of future contingents") to represent the truth value of statements about the undetermined future.[^9] [^10] [^11] [Bruno de Finetti](https://en.wikipedia.org/wiki/Bruno_de_Finetti "Bruno de Finetti") used a third value to represent when "a given individual does not know the \[correct\] response, at least at a given moment." [^12] [^8] [Hilary Putnam](https://en.wikipedia.org/wiki/Hilary_Putnam "Hilary Putnam") used it to represent values that cannot physically be decided:[^13]

> For example, if we have verified (by using a speedometer) that the velocity of a motor car is such and such, it might be impossible in such a world to verify or falsify certain statements concerning its position at that moment. If we know by reference to a physical law together with certain observational data that a statement as to the position of a motor car can never be falsified or verified, then there may be some point to not regarding the statement as true or false, but regarding it as "middle". It is only because, in macrocosmic experience, everything that we regard as an empirically meaningful statement seems to be at least potentially verifiable or falsifiable that we prefer the convention according to which we say that every such statement is either true or false, but in many cases we don't know which.

Similarly, [Stephen Cole Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene "Stephen Cole Kleene") used a third value to represent [predicates](https://en.wikipedia.org/wiki/Predicate_\(mathematical_logic\) "Predicate (mathematical logic)") that are "undecidable by \[any\] algorithms whether true or false" [^14] [^8]

As with bivalent logic, truth values in ternary logic may be represented numerically using various representations of the [ternary numeral system](https://en.wikipedia.org/wiki/Ternary_numeral_system "Ternary numeral system"). A few of the more common examples are:

- in [balanced ternary](https://en.wikipedia.org/wiki/Balanced_ternary "Balanced ternary"), each digit has one of 3 values: −1, 0, or +1; these values may also be simplified to −, 0, +, respectively;[^15]
- in the [redundant binary representation](https://en.wikipedia.org/wiki/Redundant_binary_representation "Redundant binary representation"), each digit can have a value of −1, 0, 0/1 (the value 0/1 has two different representations);
- in the [ternary numeral system](https://en.wikipedia.org/wiki/Ternary_numeral_system "Ternary numeral system"), each [digit](https://en.wikipedia.org/wiki/Numerical_digit "Numerical digit") is a *[trit](https://en.wikipedia.org/wiki/Trit_\(computing\) "Trit (computing)")* (trinary digit) having a value of: 0, 1, or 2;
- in the [skew binary number system](https://en.wikipedia.org/wiki/Skew_binary_number_system "Skew binary number system"), only the least-significant non-zero digit can have a value of 2, and the remaining digits have a value of 0 or 1;
- 1 for *true*, 2 for *false*, and 0 for *unknown*, *unknowable* / *[undecidable](https://en.wikipedia.org/wiki/Undecidable_problem "Undecidable problem")*, *irrelevant*, or *both*;[^16]
- 0 for *false*, 1 for *true*, and a third non-integer "maybe" symbol such as?, #, ⁠ 1 2 ⁠,[^17] or xy.

Inside a [ternary computer](https://en.wikipedia.org/wiki/Ternary_computer "Ternary computer"), ternary values are represented by [ternary signals](https://en.wikipedia.org/wiki/Ternary_signal "Ternary signal").

This article mainly illustrates a system of ternary [propositional logic](https://en.wikipedia.org/wiki/Propositional_logic "Propositional logic") using the truth values {false, unknown, true}, and extends conventional Boolean [connectives](https://en.wikipedia.org/wiki/Connectives "Connectives") to a trivalent context.

## Logics

[Boolean logic](https://en.wikipedia.org/wiki/Boolean_logic "Boolean logic") allows 2 <sup>2</sup> = 4 [unary operators](https://en.wikipedia.org/wiki/Unary_operator "Unary operator"); the addition of a third value in ternary logic leads to a total of 3 <sup>3</sup> = 27 distinct operators on a single input value. (This may be made clear by considering all possible truth tables for an arbitrary unary operator. Given 2 possible values TF of the single Boolean input, there are four different patterns of output TT, TF, FT, FF resulting from the following unary operators acting on each value: always T, Identity, NOT, always F. Given three possible values of a ternary variable, each times three possible results of a unary operation, there are 27 different output patterns: TTT, TTU, TTF, TUT, TUU, TUF, TFT, TFU, TFF, UTT, UTU, UTF, UUT, UUU, UUF, UFT, UFU, UFF, FTT, FTU, FTF, FUT, FUU, FUF, FFT, FFU, and FFF.) Similarly, where Boolean logic has 2 <sup>2×2</sup> = 16 distinct binary operators (operators with 2 inputs) possible, ternary logic has 3 <sup>3×3</sup> = 19,683 such operators. Where the nontrival Boolean operators can be named ([AND](https://en.wikipedia.org/wiki/And_\(logic\) "And (logic)"), [NAND](https://en.wikipedia.org/wiki/Logical_NAND "Logical NAND"), [OR](https://en.wikipedia.org/wiki/Or_\(logic\) "Or (logic)"), [NOR](https://en.wikipedia.org/wiki/Logical_NOR "Logical NOR"), [XOR](https://en.wikipedia.org/wiki/XOR "XOR"), [XNOR](https://en.wikipedia.org/wiki/XNOR "XNOR") ([equivalence](https://en.wikipedia.org/wiki/Material_equivalence "Material equivalence")), and 4 variants of [implication](https://en.wikipedia.org/wiki/Material_conditional "Material conditional") or inequality), with six trivial operators considering 0 or 1 inputs only, it is unreasonable to attempt to name all but a small fraction of the possible ternary operators.[^18] Just as in bivalent logic, where not all operators are given names and subsets of [functionally complete](https://en.wikipedia.org/wiki/Functionally_complete "Functionally complete") operators are used, there may be functionally complete sets of ternary-valued operators.

Below is a set of [truth tables](https://en.wikipedia.org/wiki/Truth_table "Truth table") showing the logic operations for [Stephen Cole Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene "Stephen Cole Kleene") 's "strong logic of indeterminacy" and [Graham Priest](https://en.wikipedia.org/wiki/Graham_Priest "Graham Priest") 's "logic of paradox".

<table align="center"><tbody><tr><td colspan="4">(F, false; U, unknown; T, true)</td></tr><tr><td><table><caption>NOT(A)</caption><tbody><tr><th width="25">A</th><th width="25">¬A</th></tr><tr><th>F</th><td>T</td></tr><tr><th>U</th><td>U</td></tr><tr><th>T</th><td>F</td></tr></tbody></table></td><td><table><caption>AND(A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A ∧ B</th><th colspan="3">B</th></tr><tr><th width="25">F</th><th width="25">U</th><th width="25">T</th></tr><tr><th rowspan="3" width="25">A</th><th width="25">F</th><td>F</td><td>F</td><td>F</td></tr><tr><th>U</th><td>F</td><td>U</td><td>U</td></tr><tr><th>T</th><td>F</td><td>U</td><td>T</td></tr></tbody></table></td><td><table><caption>OR(A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A ∨ B</th><th colspan="3">B</th></tr><tr><th width="25">F</th><th width="25">U</th><th width="25">T</th></tr><tr><th rowspan="3" width="25">A</th><th width="25">F</th><td>F</td><td>U</td><td>T</td></tr><tr><th>U</th><td>U</td><td>U</td><td>T</td></tr><tr><th>T</th><td>T</td><td>T</td><td>T</td></tr></tbody></table></td><td><table><caption>XOR(A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A ⊕ B</th><th colspan="3">B</th></tr><tr><th width="25">F</th><th width="25">U</th><th width="25">T</th></tr><tr><th rowspan="3" width="25">A</th><th width="25">F</th><td>F</td><td>U</td><td>T</td></tr><tr><th>U</th><td>U</td><td>U</td><td>U</td></tr><tr><th>T</th><td>T</td><td>U</td><td>F</td></tr></tbody></table></td></tr></tbody></table>

<table align="center"><tbody><tr><td colspan="4">(−1, false; 0, unknown; +1, true)</td></tr><tr><td><table><caption>NEG(A)</caption><tbody><tr><th width="25">A</th><th width="25">¬A</th></tr><tr><th>−1</th><td>+1</td></tr><tr><th>0</th><td>0</td></tr><tr><th>+1</th><td>−1</td></tr></tbody></table></td><td><table><caption>MIN(A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A ∧ B</th><th colspan="3">B</th></tr><tr><th width="25">−1</th><th width="25">0</th><th width="25">+1</th></tr><tr><th rowspan="3" width="25">A</th><th width="25">−1</th><td>−1</td><td>−1</td><td>−1</td></tr><tr><th>0</th><td>−1</td><td>0</td><td>0</td></tr><tr><th>+1</th><td>−1</td><td>0</td><td>+1</td></tr></tbody></table></td><td><table><caption>MAX(A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A ∨ B</th><th colspan="3">B</th></tr><tr><th width="25">−1</th><th width="25">0</th><th width="25">+1</th></tr><tr><th rowspan="3" width="25">A</th><th width="25">−1</th><td>−1</td><td>0</td><td>+1</td></tr><tr><th>0</th><td>0</td><td>0</td><td>+1</td></tr><tr><th>+1</th><td>+1</td><td>+1</td><td>+1</td></tr></tbody></table></td><td><table><caption>MIN(MAX(A, B), NEG(MIN(A, B)))</caption><tbody><tr><th rowspan="2" colspan="2">A ⊕ B</th><th colspan="3">B</th></tr><tr><th width="25">−1</th><th width="25">0</th><th width="25">+1</th></tr><tr><th rowspan="3" width="25">A</th><th width="25">−1</th><td>−1</td><td>0</td><td>+1</td></tr><tr><th>0</th><td>0</td><td>0</td><td>0</td></tr><tr><th>+1</th><td>+1</td><td>0</td><td>−1</td></tr></tbody></table></td></tr></tbody></table>

If the truth values 1, 0, and −1 are interpreted as integers, these operations may be expressed with the ordinary operations of arithmetic (where *x* + *y* uses addition, *xy* uses multiplication, and *x <sup>2</sup>* uses exponentiation), or by the minimum/maximum functions:

${\displaystyle {\begin{aligned}x\wedge y&={\frac {1}{2}}(x+y-x^{2}-y^{2}+xy+x^{2}y^{2})=\min(x,y)\\x\vee y&={\frac {1}{2}}(x+y+x^{2}+y^{2}-xy-x^{2}y^{2})=\max(x,y)\\\neg x&=-x\end{aligned}}}$

In these truth tables, the *unknown* state can be thought of as neither true nor false in Kleene logic, or thought of as both true and false in Priest logic. The difference lies in the definition of tautologies. Where Kleene logic's only designated truth value is T, Priest logic's designated truth values are both T and U. In Kleene logic, the knowledge of whether any particular *unknown* state secretly represents *true* or *false* at any moment in time is not available. However, certain logical operations can yield an unambiguous result, even if they involve an *unknown* operand. For example, because *true* OR *true* equals *true*, and *true* OR *false* also equals *true*, then *true* OR *unknown* equals *true* as well. In this example, because either bivalent state could be underlying the *unknown* state, and either state also yields the same result, *true* results in all three cases.

If numeric values, e.g. [balanced ternary](https://en.wikipedia.org/wiki/Balanced_ternary "Balanced ternary") values, are assigned to *false*, *unknown* and *true* such that *false* is less than *unknown* and *unknown* is less than *true*, then A AND B AND C... = MIN(A, B, C...) and A OR B OR C... = MAX(A, B, C...).

Material implication for Kleene logic can be defined as:

${\displaystyle A\rightarrow B\ {\overset {\underset {\mathrm {def} }{}}{=}}\ {\mbox{OR}}(\ {\mbox{NOT}}(A),\ B)}$ , and its truth table is

<table align="center"><tbody><tr><td><table><caption>IMP <sub>K</sub> (A, B), OR(¬A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A → B</th><th colspan="3">B</th></tr><tr><th width="25">F</th><th width="25">U</th><th width="25">T</th></tr><tr><th rowspan="3">A</th><th>F</th><td>T</td><td>T</td><td>T</td></tr><tr><th>U</th><td>U</td><td>U</td><td>T</td></tr><tr><th width="25">T</th><td>F</td><td>U</td><td>T</td></tr></tbody></table></td><td><table><caption>IMP <sub>K</sub> (A, B), MAX(−A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A → B</th><th colspan="3">B</th></tr><tr><th width="25">−1</th><th width="25">0</th><th width="25">+1</th></tr><tr><th rowspan="3">A</th><th>−1</th><td>+1</td><td>+1</td><td>+1</td></tr><tr><th>0</th><td>0</td><td>0</td><td>+1</td></tr><tr><th width="25">+1</th><td>−1</td><td>0</td><td>+1</td></tr></tbody></table></td></tr></tbody></table>

which differs from that for Łukasiewicz logic (described below).

Kleene logic has no tautologies (valid formulas) because whenever all of the atomic components of a well-formed formula are assigned the value Unknown, the formula itself must also have the value Unknown. (And the only *designated* truth value for Kleene logic is True.) However, the lack of valid formulas does not mean that it lacks valid arguments and/or inference rules. An argument is semantically valid in Kleene logic if, whenever (for any interpretation/model) all of its premises are True, the conclusion must also be True. (The [Logic of Paradox](https://en.wikipedia.org/wiki/Paraconsistent_logic "Paraconsistent logic") (LP) has the same truth tables as Kleene logic, but it has two *designated* truth values instead of one; these are: True and Both (the analogue of Unknown), so that LP does have tautologies but it has fewer valid inference rules).[^19]

### Łukasiewicz logic

The Łukasiewicz Ł3 has the same tables for AND, OR, and NOT as the Kleene logic given above, but differs in its definition of implication in that "unknown implies unknown" is **true**. This section follows the presentation from Malinowski's chapter of the *Handbook of the History of Logic*, vol 8.[^20]

Material implication for Łukasiewicz logic truth table is

<table align="center"><tbody><tr><td><table><caption>IMP <sub>Ł</sub> (A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A → B</th><th colspan="3">B</th></tr><tr><th width="25">F</th><th width="25">U</th><th width="25">T</th></tr><tr><th rowspan="3">A</th><th>F</th><td>T</td><td>T</td><td>T</td></tr><tr><th>U</th><td>U</td><td>T</td><td>T</td></tr><tr><th width="25">T</th><td>F</td><td>U</td><td>T</td></tr></tbody></table></td><td><table><caption>IMP <sub>Ł</sub> (A, B), MIN(1, 1−A+B)</caption><tbody><tr><th rowspan="2" colspan="2">A → B</th><th colspan="3">B</th></tr><tr><th width="25">−1</th><th width="25">0</th><th width="25">+1</th></tr><tr><th rowspan="3">A</th><th>−1</th><td>+1</td><td>+1</td><td>+1</td></tr><tr><th>0</th><td>0</td><td>+1</td><td>+1</td></tr><tr><th width="25">+1</th><td>−1</td><td>0</td><td>+1</td></tr></tbody></table></td></tr></tbody></table>

In fact, using Łukasiewicz's implication and negation, the other usual connectives may be derived as:

- *A* ∨ *B* = (*A* → *B*) → *B*
- *A* ∧ *B* = ¬(¬ *A* ∨ ¬ *B*)
- *A* ⇔ *B* = (*A* → *B*) ∧ (*B* → *A*)

It is also possible to derive a few other useful unary operators (first derived by Tarski in 1921):

- **M** *A* = ¬ *A* → *A*
- **L** *A* = ¬ **M** ¬ *A*
- **I** *A* = **M** *A* ∧ ¬ **L** *A*

They have the following truth tables:

| \| A \| M *A* \| \| --- \| --- \| \| F \| F \| \| U \| T \| \| T \| T \| | \| A \| L *A* \| \| --- \| --- \| \| F \| F \| \| U \| F \| \| T \| T \| | \| A \| I *A* \| \| --- \| --- \| \| F \| F \| \| U \| T \| \| T \| F \| |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

M is read as "it is not false that..." or in the (unsuccessful) Tarski–Łukasiewicz attempt to axiomatize [modal logic](https://en.wikipedia.org/wiki/Modal_logic "Modal logic") using a three-valued logic, "it is possible that..." L is read "it is true that..." or "it is necessary that..." Finally I is read "it is unknown that..." or "it is contingent that..."

In Łukasiewicz's Ł3 the [designated value](https://en.wikipedia.org/w/index.php?title=Designated_value&action=edit&redlink=1 "Designated value (page does not exist)") is True, meaning that only a proposition having this value everywhere is considered a [tautology](https://en.wikipedia.org/wiki/Tautology_\(logic\) "Tautology (logic)"). For example, *A* → *A* and *A* ↔ *A* are tautologies in Ł3 and also in classical logic. Not all tautologies of classical logic lift to Ł3 "as is". For example, the [law of excluded middle](https://en.wikipedia.org/wiki/Law_of_excluded_middle "Law of excluded middle"), *A* ∨ ¬ *A*, and the [law of non-contradiction](https://en.wikipedia.org/wiki/Law_of_non-contradiction "Law of non-contradiction"), ¬(*A* ∧ ¬ *A*) are not tautologies in Ł3. However, using the operator **I** defined above, it is possible to state tautologies that are their analogues:

- *A* ∨ **I** *A* ∨ ¬ *A* ([law of excluded fourth](https://en.wikipedia.org/wiki/Law_of_excluded_fourth "Law of excluded fourth"))
- ¬(*A* ∧ ¬ **I** *A* ∧ ¬ *A*) ([extended contradiction principle](https://en.wikipedia.org/w/index.php?title=Extended_contradiction_principle&action=edit&redlink=1 "Extended contradiction principle (page does not exist)")).

### RM3 logic

The truth table for the material implication of R-mingle 3 (RM3) is

<table align="center"><tbody><tr><td><table><caption>IMP <sub>RM3</sub> (A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A → B</th><th colspan="3">B</th></tr><tr><th width="25">F</th><th width="25">U</th><th width="25">T</th></tr><tr><th rowspan="3">A</th><th>F</th><td>T</td><td>T</td><td>T</td></tr><tr><th>U</th><td>F</td><td>U</td><td>T</td></tr><tr><th width="25">T</th><td>F</td><td>F</td><td>T</td></tr></tbody></table></td></tr></tbody></table>

A defining characteristic of RM3 is the lack of the axiom of Weakening:

- (*A* → (*B* → *A*))

which, by adjointness, is equivalent to the projection from the product:

- (*A* ⊗ *B*) → *A*

RM3 is a non-cartesian symmetric monoidal closed category; the product, which is left-adjoint to the implication, lacks valid projections, and has *U* as the monoid identity. This logic is equivalent to an ["ideal" paraconsistent logic](https://en.wikipedia.org/wiki/Paraconsistent_logic#An_ideal_three-valued_paraconsistent_logic "Paraconsistent logic") which also obeys the contrapositive.

### HT logic

The logic of here and there (**HT**, also referred as Smetanov logic **SmT** or as [Gödel](https://en.wikipedia.org/wiki/G%C3%B6del "Gödel") G3 logic), introduced by [Heyting](https://en.wikipedia.org/wiki/Heyting "Heyting") in 1930 [^21] as a model for studying [intuitionistic logic](https://en.wikipedia.org/wiki/Intuitionistic_logic "Intuitionistic logic"), is a three-valued [intermediate logic](https://en.wikipedia.org/wiki/Intermediate_logic "Intermediate logic") where the third truth value NF (not false) has the semantics of a proposition that can be intuitionistically proven to not be false, but does not have an intuitionistic proof of correctness.

<table align="center"><tbody><tr><td colspan="3">(F, false; NF, not false; T, true)</td></tr><tr><td><table><caption>NOT <sub>HT</sub> (A)</caption><tbody><tr><th width="25">A</th><th width="25">¬A</th></tr><tr><th>F</th><td>T</td></tr><tr><th>NF</th><td>F</td></tr><tr><th>T</th><td>F</td></tr></tbody></table></td></tr></tbody></table>

<table align="center"><tbody><tr><td><table><caption>IMP <sub>HT</sub> (A, B)</caption><tbody><tr><th rowspan="2" colspan="2">A → B</th><th colspan="3">B</th></tr><tr><th width="25">F</th><th width="25">NF</th><th width="25">T</th></tr><tr><th rowspan="3">A</th><th>F</th><td>T</td><td>T</td><td>T</td></tr><tr><th>NF</th><td>F</td><td>T</td><td>T</td></tr><tr><th width="25">T</th><td>F</td><td>NF</td><td>T</td></tr></tbody></table></td></tr></tbody></table>

It may be defined either by appending one of the two equivalent axioms (¬ *q* → *p*) → (((*p* → *q*) → *p*) → *p*) or equivalently *p* ∨(¬ *q*)∨(*p* → *q*) to the axioms of [intuitionistic logic](https://en.wikipedia.org/wiki/Intuitionistic_logic "Intuitionistic logic"), or by explicit truth tables for its operations. In particular, conjunction and disjunction are the same as for Kleene's and Łukasiewicz's logic, while the negation is different.

HT logic is the unique [coatom](https://en.wikipedia.org/wiki/Atom_\(order_theory\) "Atom (order theory)") in the lattice of intermediate logics. In this sense it may be viewed as the "second strongest" intermediate logic after classical logic.

### Bochvar logic

This logic is also known as a weak form of Kleene's three-valued logic.

Ternary Post Logic, a particular instance of the more General family of [Post Logics](https://en.wikipedia.org/wiki/Many-valued_logic#Post_logics_Pm "Many-valued logic"), is a three-valued logic which uses a cyclic negation operation, defined as:

| \| A \| ¬A \| \| --- \| --- \| \| 0 \| 1 \| \| 1/2 \| 0 \| \| 1 \| 1/2 \| |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Along with minimum and maximum functions to define conjunction and disjunction connectives, respectively:

<table align="center"><tbody><tr><td><table><caption>MIN(A, B)</caption><tbody><tr><th colspan="2" rowspan="2">A ∧ B</th><th colspan="3">B</th></tr><tr><th width="25">0</th><th width="25">1/2</th><th width="25">1</th></tr><tr><th rowspan="3" width="25">A</th><th width="25">0</th><td>0</td><td>0</td><td>0</td></tr><tr><th>1/2</th><td>0</td><td>1/2</td><td>1/2</td></tr><tr><th>1</th><td>0</td><td>1/2</td><td>1</td></tr></tbody></table></td><td><table><caption>MAX(A, B)</caption><tbody><tr><th colspan="2" rowspan="2">A ∨ B</th><th colspan="3">B</th></tr><tr><th width="25">0</th><th width="25">1/2</th><th width="25">1</th></tr><tr><th rowspan="3" width="25">A</th><th width="25">0</th><td>0</td><td>1/2</td><td>1</td></tr><tr><th>1/2</th><td>1/2</td><td>1/2</td><td>1</td></tr><tr><th>1</th><td>1</td><td>1</td><td>1</td></tr></tbody></table></td></tr></tbody></table>

These functions may also be expressed with arithmetic expressions. Given the set of truth values is ${\displaystyle \{0,{\frac {1}{2}},1\}}$ they are:

${\displaystyle {\begin{aligned}{\neg }x&:={\frac {1}{2}}(6x^{2}-7x+2):=(1,0,{\frac {1}{2}})\\x\wedge y&:=4y^{2}x^{2}-4yx^{2}-4y^{2}x+5yx:=\min(x,y)\\[6pt]x\vee y&:=-4y^{2}x^{2}+4yx^{2}+4y^{2}x-5yx+x+y:=\max(x,y)\end{aligned}}}$

Unlike the previous system of three-valued logics, Post's 3-valued logic is functionally complete using only the NEG operation and at least one of MIN or MAX operations. This means that any function ${\displaystyle \{0,{\frac {1}{2}},1\}^{n}\rightarrow \{0,{\frac {1}{2}},1\}:n\in \mathbb {N^{+}} }$ can be expressed as a composition of using only the three functions defined above (or any two, as long as one of them is negation).

### Modular algebras

Some 3VL [modulars arithmetics](https://en.wikipedia.org/wiki/Modular_arithmetic "Modular arithmetic") have been introduced more recently, motivated by circuit problems rather than philosophical issues:[^22]

- Cohn algebra
- Pradhan algebra
- Dubrova [^23] and Muzio algebra

## Applications

### SQL

The database query language [SQL](https://en.wikipedia.org/wiki/SQL "SQL") implements ternary logic as a means of handling comparisons with [NULL](https://en.wikipedia.org/wiki/Null_\(SQL\) "Null (SQL)") field content. SQL uses a common fragment of the Kleene K3 logic, restricted to AND, OR, and NOT tables.

## See also

- [Binary logic (disambiguation)](https://en.wikipedia.org/wiki/Binary_logic_\(disambiguation\) "Binary logic (disambiguation)")
- [Boolean algebra (structure)](https://en.wikipedia.org/wiki/Boolean_algebra_\(structure\) "Boolean algebra (structure)")
- [Boolean function](https://en.wikipedia.org/wiki/Boolean_function "Boolean function")
- [Digital circuit](https://en.wikipedia.org/wiki/Digital_circuit "Digital circuit")
- [Four-valued logic](https://en.wikipedia.org/wiki/Four-valued_logic "Four-valued logic")
- [Homogeneity (linguistics)](https://en.wikipedia.org/wiki/Homogeneity_\(linguistics\) "Homogeneity (linguistics)")
- [Paraconsistent logic § An ideal three-valued paraconsistent logic](https://en.wikipedia.org/wiki/Paraconsistent_logic#An_ideal_three-valued_paraconsistent_logic "Paraconsistent logic")
- [Setun](https://en.wikipedia.org/wiki/Setun "Setun") – an experimental Russian computer which was based on ternary logic
- [Strawson entailment](https://en.wikipedia.org/wiki/Strawson_entailment "Strawson entailment")
- [Ternary numeral system](https://en.wikipedia.org/wiki/Ternary_numeral_system "Ternary numeral system") (and [Balanced ternary](https://en.wikipedia.org/wiki/Balanced_ternary "Balanced ternary"))
- [Three-state logic](https://en.wikipedia.org/wiki/Three-state_logic "Three-state logic") ([tri-state buffer](https://en.wikipedia.org/wiki/Tri-state_buffer "Tri-state buffer"))
- [The World of Null-A](https://en.wikipedia.org/wiki/The_World_of_Null-A "The World of Null-A")

## References

## Further reading

- Bergmann, Merrie (2008). [*An Introduction to Many-Valued and Fuzzy Logic: Semantics, Algebras, and Derivation Systems*](http://www.cambridge.org/us/academic/subjects/philosophy/logic/introduction-many-valued-and-fuzzy-logic-semantics-algebras-and-derivation-systems?format=PB). Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-88128-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-88128-9 "Special:BookSources/978-0-521-88128-9"). Retrieved 24 August 2013., chapters 5-9
- Mundici, D. The C\*-Algebras of Three-Valued Logic. Logic Colloquium '88, Proceedings of the Colloquium held in Padova 61–77 (1989). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/s0049-237x(08)70262-3](https://doi.org/10.1016%2Fs0049-237x%2808%2970262-3)
- Reichenbach, Hans (1944). *Philosophic Foundations of Quantum Mechanics*. University of California Press. Dover 1998: [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-486-40459-5](https://en.wikipedia.org/wiki/Special:BookSources/0-486-40459-5 "Special:BookSources/0-486-40459-5")

[^1]: ["Trilean (Stanford JavaNLP API)"](https://nlp.stanford.edu/nlp/javadoc/javanlp/edu/stanford/nlp/util/Trilean.html). *Stanford University*. Stanford NLP Group. [Archived](https://web.archive.org/web/20230503011712/https://nlp.stanford.edu/nlp/javadoc/javanlp/edu/stanford/nlp/util/Trilean.html) from the original on May 3, 2023.

[^2]: Post, Emil L. (1921). ["Introduction to a General Theory of Elementary Propositions"](https://doi.org/10.2307%2F2370324). *American Journal of Mathematics*. **43** (3): 163– 185. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2307/2370324](https://doi.org/10.2307%2F2370324). [hdl](https://en.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[2027/uiuo.ark:/13960/t9j450f7q](https://hdl.handle.net/2027%2Fuiuo.ark%3A%2F13960%2Ft9j450f7q). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0002-9327](https://search.worldcat.org/issn/0002-9327). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_\(identifier\) "JSTOR (identifier)") [2370324](https://www.jstor.org/stable/2370324).

[^3]: ["Peirce's Deductive Logic > Peirce's Three-Valued Logic (Stanford Encyclopedia of Philosophy/Summer 2020 Edition)"](https://plato.stanford.edu/archIves/sum2020/entries/peirce-logic/three-valued-logic.html). *plato.stanford.edu*. Retrieved 2024-05-15.

[^4]: Lane, R. (2001). ["Triadic Logic"](http://www.commens.org/encyclopedia/article/lane-robert-triadic-logic). *Commens*. [Archived](https://web.archive.org/web/20231206040847/http://commens.org/encyclopedia/article/lane-robert-triadic-logic) from the original on Dec 6, 2023.

[^5]: Peirce, Charles S. (1839–1914). ["Logic: autograph manuscript notebook, November 12, 1865-November 1, 1909"](https://iiif.lib.harvard.edu/manifests/view/drs:15255301$645i). *hollisarchives.lib.harvard.edu/repositories/24/digital\_objects/63983*. Houghton Library, Harvard University. Retrieved May 15, 2023. Triadic Logic is universally true. But Dyadic Logic is not aboslutely false

[^6]: Peirce, Charles S. (1839–1914). ["Logic: autograph manuscript notebook, November 12, 1865-November 1, 1909"](https://iiif.lib.harvard.edu/manifests/view/drs:15255301$638i). *hollisarchives.lib.harvard.edu/repositories/24/digital\_objects/63983*. Houghton Library, Harvard University. Retrieved May 15, 2023.

[^7]: Lane, Robert. ["Triadic Logic"](http://www.digitalpeirce.fee.unicamp.br/lane/p-trilan.htm). *www.digitalpeirce.fee.unicamp.br*. Retrieved 2020-07-30.

[^8]: Cobreros, Pablo; Égré, Paul; Ripley, David; Rooij, Robert van (2 January 2014). "Foreword: Three-valued logics and their applications". *Journal of Applied Non-Classical Logics*. **24** (1– 2): 1– 11. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1080/11663081.2014.909631](https://doi.org/10.1080%2F11663081.2014.909631).

[^9]: Prior, A. N. (1953). ["Three-Valued Logic and Future Contingents"](https://www.jstor.org/stable/2217099). *The Philosophical Quarterly*. **3** (13): 317– 326. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2307/2217099](https://doi.org/10.2307%2F2217099). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0031-8094](https://search.worldcat.org/issn/0031-8094).

[^10]: Taylor, Richard (1957). ["The Problem of Future Contingencies"](https://www.jstor.org/stable/2182851). *The Philosophical Review*. **66** (1): 1– 28. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2307/2182851](https://doi.org/10.2307%2F2182851). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0031-8108](https://search.worldcat.org/issn/0031-8108).

[^11]: Rybaříková, Zuzana (1 May 2021). "Łukasiewicz, determinism, and the four-valued system of logic". *Semiotica*. **2021** (240): 129– 143. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1515/sem-2019-0115](https://doi.org/10.1515%2Fsem-2019-0115).

[^12]: de Finetti, Bruno (1 January 1995). "The logic of probability (translated)". *Philosophical Studies*. **77** (1): 181– 190. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/BF00996317](https://doi.org/10.1007%2FBF00996317). But there is a second possible way to conceive of many-valued logics: that while a proposition, in itself, can have only two values, true or false, that is to say two responses, yes or no, it may happen that a given individual does not know the \[correct\] response, at least at a given moment; therefore, for the individual there is a third attitude possible toward a proposition. This third attitude does not correspond to a distinct third value of yes or of no, but simply to a doubt between yes or no

[^13]: Putnam, Hilary (1 October 1957). "Three-valued logic". *Philosophical Studies*. **8** (5): 73– 80. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/BF02304905](https://doi.org/10.1007%2FBF02304905). However, it is not the case that 'middle' means "neither verified nor falsified at the present time". As we have seen, 'verified' and 'falsified' are epistemic predicates--that is to say, they are relative to the evidence at a particular time--whereas 'middle,' like 'true' and 'false' is not relative to the evidence.

[^14]: Kleene, Stephen Cole (1952). *Introduction to metamathematics*. North-Holland Publishing Co., Amsterdam, and P. Noordhoff, Groningen. p. 336. The strong 3-valued logic can be applied to completely defined predicates Q(x) and R(x), from which composite predicates are formed using ̅, V, &, ->, ≡ in the usual 2-valued meanings, thus, (iii) Suppose that there are fixed algorithms which decide the truth or falsity of Q(x) and of R(x), each on a subset of the natural numbers (as occurs e.g. after completing the definitions of any two partial recursive predicates classically). Let t, f, u mean 'decidable by the algorithms (i.e. by use of only such information about Q(x) and R(x) as can be obtained by the algorithms) to be true', 'decidable by the algorithms to be false', 'undecidable by the algorithms whether true or false'. (iv) Assume a fixed state of knowledge about Q(x) and R(x) (as occurs e.g. after pursuing algorithms for each of them up to a given stage). Let t, f, u mean 'known to be true', 'known to be false', 'unknown whether true or false'.

[^15]: [Knuth, Donald E.](https://en.wikipedia.org/wiki/Donald_Knuth "Donald Knuth") (1981). *The Art of Computer Programming Vol. 2*. Reading, Mass.: Addison-Wesley Publishing Company. p. 190.

[^16]: [Hayes, Brian](https://en.wikipedia.org/wiki/Brian_Hayes_\(scientist\) "Brian Hayes (scientist)") (November–December 2001). ["Third base"](http://bit-player.org/wp-content/extras/bph-publications/AmSci-2001-11-Hayes-ternary.pdf) (PDF). *[American Scientist](https://en.wikipedia.org/wiki/American_Scientist "American Scientist")*. **89** (6). [Sigma Xi](https://en.wikipedia.org/wiki/Sigma_Xi "Sigma Xi"), the Scientific Research Society: 490– 494. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1511/2001.40.3268](https://doi.org/10.1511%2F2001.40.3268). [Archived](https://web.archive.org/web/20191030114823/http://bit-player.org/wp-content/extras/bph-publications/AmSci-2001-11-Hayes-ternary.pdf) (PDF) from the original on 2019-10-30. Retrieved 2020-04-12.

[^17]: Nelson, David (2008). [*The Penguin Dictionary of Mathematics. Fourth Edition*](https://books.google.com/books?id=ud3sEeVdTIwC&pg=PT1113). London, England: Penguin Books. Entry for 'three-valued logic'. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780141920870](https://en.wikipedia.org/wiki/Special:BookSources/9780141920870 "Special:BookSources/9780141920870").

[^18]: Douglas W. Jones, [Standard Ternary Logic](http://homepage.cs.uiowa.edu/~jones/ternary/logic.shtml), Feb. 11, 2013.

[^19]: ["Beyond Propositional Logic"](http://www.uky.edu/~look/Phi520-Lecture7.pdf)

[^20]: Grzegorz Malinowski, " [Many-valued Logic and its Philosophy](https://books.google.com/books?id=3TNj1ZkP3qEC&dq=%22Many-valued+Logic+and+its+Philosophy%22&pg=PA13) " in Dov M. Gabbay, John Woods (eds.) *Handbook of the History of Logic Volume 8. The Many Valued and Nonmonotonic Turn in Logic*, Elsevier, 2009

[^21]: Heyting (1930). "Die formalen Regeln der intuitionistischen Logik". *Sitz. Berlin*. 42– 56.

[^22]: Miller, D. Michael; Thornton, Mitchell A. (2008). *Multiple valued logic: concepts and representations*. Synthesis lectures on digital circuits and systems. Vol. 12. Morgan & Claypool Publishers. pp. 41– 42. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-59829-190-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59829-190-2 "Special:BookSources/978-1-59829-190-2").

[^23]: Dubrova, Elena (2002). [Multiple-Valued Logic Synthesis and Optimization](http://dl.acm.org/citation.cfm?id=566849), in Hassoun S. and Sasao T., editors, *Logic Synthesis and Verification*, Kluwer Academic Publishers, pp. 89-114