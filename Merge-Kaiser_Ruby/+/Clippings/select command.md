---
source: https://www.tutorialspoint.com/unix/select-loop.htm
author: 
published: 
created: 2025-03-05
tags:
  - command/cli
---
The **select** loop provides an easy way to create a numbered menu from which users can select options. It is useful when you need to ask the user to choose one or more items from a list of choices.

## Syntax

```bash
select var in word1 word2 ... wordN
do
   Statement(s) to be executed for every word.
done
```

Here *var* is the name of a variable and **word1** to **wordN** are sequences of characters separated by spaces (words). Each time the **for** loop executes, the value of the variable var is set to the next word in the list of words, **word1** to **wordN**.

For every selection, a set of commands will be executed within the loop. This loop was introduced in **ksh** and has been adapted into bash. It is not available in **sh**.

## Example

Here is a simple example to let the user select a drink of choice −

```sh
#!/bin/ksh

select DRINK in tea cofee water juice appe all none
do
   case $DRINK in
      tea|cofee|water|all) 
         echo "Go to canteen"
         ;;
      juice|appe)
         echo "Available at home"
      ;;
      none) 
         break 
      ;;
      *) echo "ERROR: Invalid selection" 
      ;;
   esac
done
```

The menu presented by the select loop looks like the following −

```
./test.sh
1) tea
2) cofee
3) water
4) juice
5) appe
6) all
7) none
#? juice
Available at home
#? none
```

You can change the prompt displayed by the select loop by altering the variable PS3 as follows −

```
$PS3 = "Please make a selection => " ; export PS3
./test.sh
1) tea
2) cofee
3) water
4) juice
5) appe
6) all
7) none
Please make a selection => juice
Available at home
Please make a selection => none
```

unix-shell-loops.htm