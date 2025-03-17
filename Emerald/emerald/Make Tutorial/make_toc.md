GNU Make - Table of Contents

# GNU Make

## A Program for Directing Recompilation

## Edition 0.47, for `make` Version 3.72 Beta.

## November 1994

Richard M. Stallman and Roland McGrath

-   [Overview of `make`](make_1.md#SEC1){#SEC1}
    -   [How to Read This Manual](make_1.md#SEC2){#SEC2}
    -   [Problems and Bugs](make_1.md#SEC3){#SEC3}
-   [An Introduction to Makefiles](make_2.md#SEC4){#SEC4}
    -   [What a Rule Looks Like](make_2.md#SEC5){#SEC5}
    -   [A Simple Makefile](make_2.md#SEC6){#SEC6}
    -   [How `make` Processes a Makefile](make_2.md#SEC7){#SEC7}
    -   [Variables Make Makefiles Simpler](make_2.md#SEC8){#SEC8}
    -   [Letting `make` Deduce the Commands](make_2.md#SEC9){#SEC9}
    -   [Another Style of Makefile](make_2.md#SEC10){#SEC10}
    -   [Rules for Cleaning the Directory](make_2.md#SEC11){#SEC11}
-   [Writing Makefiles](make_3.md#SEC12){#SEC12}
    -   [What Makefiles Contain](make_3.md#SEC13){#SEC13}
    -   [What Name to Give Your Makefile](make_3.md#SEC14){#SEC14}
    -   [Including Other Makefiles](make_3.md#SEC15){#SEC15}
    -   [The Variable `MAKEFILES`](make_3.md#SEC16){#SEC16}
    -   [How Makefiles Are Remade](make_3.md#SEC17){#SEC17}
    -   [Overriding Part of Another Makefile](make_3.md#SEC18){#SEC18}
-   [Writing Rules](make_4.md#SEC19){#SEC19}
    -   [Rule Syntax](make_4.md#SEC20){#SEC20}
    -   [Using Wildcard Characters in File
        Names](make_4.md#SEC21){#SEC21}
        -   [Wildcard Examples](make_4.md#SEC22){#SEC22}
        -   [Pitfalls of Using Wildcards](make_4.md#SEC23){#SEC23}
        -   [The Function `wildcard`](make_4.md#SEC24){#SEC24}
    -   [Searching Directories for
        Dependencies](make_4.md#SEC25){#SEC25}
        -   [`VPATH`: Search Path for All
            Dependencies](make_4.md#SEC26){#SEC26}
        -   [The `vpath` Directive](make_4.md#SEC27){#SEC27}
        -   [Writing Shell Commands with Directory
            Search](make_4.md#SEC28){#SEC28}
        -   [Directory Search and Implicit
            Rules](make_4.md#SEC29){#SEC29}
        -   [Directory Search for Link
            Libraries](make_4.md#SEC30){#SEC30}
    -   [Phony Targets](make_4.md#SEC31){#SEC31}
    -   [Rules without Commands or
        Dependencies](make_4.md#SEC32){#SEC32}
    -   [Empty Target Files to Record Events](make_4.md#SEC33){#SEC33}
    -   [Special Built-in Target Names](make_4.md#SEC34){#SEC34}
    -   [Multiple Targets in a Rule](make_4.md#SEC35){#SEC35}
    -   [Multiple Rules for One Target](make_4.md#SEC36){#SEC36}
    -   [Static Pattern Rules](make_4.md#SEC37){#SEC37}
        -   [Syntax of Static Pattern Rules](make_4.md#SEC38){#SEC38}
        -   [Static Pattern Rules versus Implicit
            Rules](make_4.md#SEC39){#SEC39}
    -   [Double-Colon Rules](make_4.md#SEC40){#SEC40}
    -   [Generating Dependencies
        Automatically](make_4.md#SEC41){#SEC41}
-   [Writing the Commands in Rules](make_5.md#SEC42){#SEC42}
    -   [Command Echoing](make_5.md#SEC43){#SEC43}
    -   [Command Execution](make_5.md#SEC44){#SEC44}
    -   [Parallel Execution](make_5.md#SEC45){#SEC45}
    -   [Errors in Commands](make_5.md#SEC46){#SEC46}
    -   [Interrupting or Killing `make`](make_5.md#SEC47){#SEC47}
    -   [Recursive Use of `make`](make_5.md#SEC48){#SEC48}
        -   [How the `MAKE` Variable Works](make_5.md#SEC49){#SEC49}
        -   [Communicating Variables to a
            Sub-`make`](make_5.md#SEC50){#SEC50}
        -   [Communicating Options to a
            Sub-`make`](make_5.md#SEC51){#SEC51}
        -   [The `` `--print-directory' ``{.sample}
            Option](make_5.md#SEC52){#SEC52}
    -   [Defining Canned Command Sequences](make_5.md#SEC53){#SEC53}
    -   [Using Empty Commands](make_5.md#SEC54){#SEC54}
-   [How to Use Variables](make_6.md#SEC55){#SEC55}
    -   [Basics of Variable References](make_6.md#SEC56){#SEC56}
    -   [The Two Flavors of Variables](make_6.md#SEC57){#SEC57}
    -   [Advanced Features for Reference to
        Variables](make_6.md#SEC58){#SEC58}
        -   [Substitution References](make_6.md#SEC59){#SEC59}
        -   [Computed Variable Names](make_6.md#SEC60){#SEC60}
    -   [How Variables Get Their Values](make_6.md#SEC61){#SEC61}
    -   [Setting Variables](make_6.md#SEC62){#SEC62}
    -   [Appending More Text to Variables](make_6.md#SEC63){#SEC63}
    -   [The `override` Directive](make_6.md#SEC64){#SEC64}
    -   [Defining Variables Verbatim](make_6.md#SEC65){#SEC65}
    -   [Variables from the Environment](make_6.md#SEC66){#SEC66}
-   [Conditional Parts of Makefiles](make_7.md#SEC67){#SEC67}
    -   [Example of a Conditional](make_7.md#SEC68){#SEC68}
    -   [Syntax of Conditionals](make_7.md#SEC69){#SEC69}
    -   [Conditionals that Test Flags](make_7.md#SEC70){#SEC70}
-   [Functions for Transforming Text](make_8.md#SEC71){#SEC71}
    -   [Function Call Syntax](make_8.md#SEC72){#SEC72}
    -   [Functions for String Substitution and
        Analysis](make_8.md#SEC73){#SEC73}
    -   [Functions for File Names](make_8.md#SEC74){#SEC74}
    -   [The `foreach` Function](make_8.md#SEC75){#SEC75}
    -   [The `origin` Function](make_8.md#SEC76){#SEC76}
    -   [The `shell` Function](make_8.md#SEC77){#SEC77}
-   [How to Run `make`](make_9.md#SEC78){#SEC78}
    -   [Arguments to Specify the Makefile](make_9.md#SEC79){#SEC79}
    -   [Arguments to Specify the Goals](make_9.md#SEC80){#SEC80}
    -   [Instead of Executing the Commands](make_9.md#SEC81){#SEC81}
    -   [Avoiding Recompilation of Some
        Files](make_9.md#SEC82){#SEC82}
    -   [Overriding Variables](make_9.md#SEC83){#SEC83}
    -   [Testing the Compilation of a
        Program](make_9.md#SEC84){#SEC84}
    -   [Summary of Options](make_9.md#SEC85){#SEC85}
-   [Using Implicit Rules](make_10.md#SEC86){#SEC86}
    -   [Using Implicit Rules](make_10.md#SEC87){#SEC87}
    -   [Catalogue of Implicit Rules](make_10.md#SEC88){#SEC88}
    -   [Variables Used by Implicit Rules](make_10.md#SEC89){#SEC89}
    -   [Chains of Implicit Rules](make_10.md#SEC90){#SEC90}
    -   [Defining and Redefining Pattern
        Rules](make_10.md#SEC91){#SEC91}
        -   [Introduction to Pattern Rules](make_10.md#SEC92){#SEC92}
        -   [Pattern Rule Examples](make_10.md#SEC93){#SEC93}
        -   [Automatic Variables](make_10.md#SEC94){#SEC94}
        -   [How Patterns Match](make_10.md#SEC95){#SEC95}
        -   [Match-Anything Pattern Rules](make_10.md#SEC96){#SEC96}
        -   [Canceling Implicit Rules](make_10.md#SEC97){#SEC97}
    -   [Defining Last-Resort Default Rules](make_10.md#SEC98){#SEC98}
    -   [Old-Fashioned Suffix Rules](make_10.md#SEC99){#SEC99}
    -   [Implicit Rule Search Algorithm](make_10.md#SEC100){#SEC100}
-   [Using `make` to Update Archive Files](make_11.md#SEC101){#SEC101}
    -   [Archive Members as Targets](make_11.md#SEC102){#SEC102}
    -   [Implicit Rule for Archive Member
        Targets](make_11.md#SEC103){#SEC103}
        -   [Updating Archive Symbol
            Directories](make_11.md#SEC104){#SEC104}
    -   [Dangers When Using Archives](make_11.md#SEC105){#SEC105}
    -   [Suffix Rules for Archive Files](make_11.md#SEC106){#SEC106}
-   [Features of GNU `make`](make_12.md#SEC107){#SEC107}
-   [Incompatibilities and Missing
    Features](make_13.md#SEC108){#SEC108}
-   [Makefile Conventions](make_14.md#SEC109){#SEC109}
    -   [General Conventions for
        Makefiles](make_14.md#SEC110){#SEC110}
    -   [Utilities in Makefiles](make_14.md#SEC111){#SEC111}
    -   [Standard Targets for Users](make_14.md#SEC112){#SEC112}
    -   [Variables for Specifying
        Commands](make_14.md#SEC113){#SEC113}
    -   [Variables for Installation
        Directories](make_14.md#SEC114){#SEC114}
-   [Quick Reference](make_15.md#SEC115){#SEC115}
-   [Complex Makefile Example](make_16.md#SEC116){#SEC116}
-   [Index of Concepts](make_17.md#SEC117){#SEC117}
-   [Index of Functions, Variables, &
    Directives](make_18.md#SEC118){#SEC118}
