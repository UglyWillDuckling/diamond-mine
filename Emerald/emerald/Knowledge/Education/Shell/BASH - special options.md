#bash
#shell
#options
## intro

As you recall, the dollar sign is a special character in the Bourne shell. Normally, it's used to identify variables. If the variable starts with a letter, it's a normal variable. If it starts with a number, it's a positional parameter, used to pass parameters to a shell script. Earlier, I've discussed the

```js
$*, $@, $#, $$, and $!
```

special variables. But there is <mark style="background: #FFB86CA6;">another class of variables</mark>, or perhaps the proper term is [[flag]]'s or `options`. 
**They are not read**. That is, you don't use them in strings, tests, filenames, or anything like this. These variables are `boolean` variables, and are <mark style="background: #ABF7F7A6;">internal</mark> to the shell. That is, they are **either true or false**. You cannot assign arbitrary values to them using the "=" character. Instead, you use the `set` command. Also, you can set them and remove them, but you cannot read them. At least, not like other variables. You read them by examining the "$-" variable, which shows you which ones are set.

## X - Bourne Shell echo flag

If you are having trouble understanding how a shell script works, you could modify the script, adding echo commands so you can see what is happening. Another solution is to execute the script with the "x" flag. There are three ways to set this flag. The first, and perhaps easiest, is to specify the option when executing the script: To demonstrate, assume the file script is:

    #!/bin/sh
    a=$1
    echo a is $a

Then if you type

    sh -x script abc

the script will print out

    a=abc
    + echo a is abc
    a is abc

Notice that built-in commands are displayed, while external commands are displayed with a "+" before each line. If you have several commands separated by a semicolon, each part would be displayed on its own line.

The "x" variable shows you each line before it executes it. The second way to turn on this variable is to modify the first line of the script, i.e.:

    #!/bin/sh -x

As you can see, the first way is convenient if you want to run the script once with the variable set, while the second is useful if you plan to repeat this several times in a row. A large and complex script, however, is difficult to debug when there are hundreds of lines to watch. The solution is to turn the variable on and off as needed, inside the script. The command

    set -x

turns it on, while

    set +x

turns the flag off again. You can, therefore, turn the "echo before execute" flag on or off when convenient.

## V - Bourne Shell verbose flag
#verbose

A similar flag is the "v," or **verbose** flag. It is also useful in [[debugging]] scripts. The difference is this: The "v" flag echoes the line as it is **read**, while the "x" flag causes each command to be echoed as it is **executed**. Let's examine this in more detail. Given the script:

    #!/bin/sh
    # comment
    a=${1:-`whoami`};b=${2:-`hostname`}
    echo user $a is using computer $b

typing "sh -x script" causes:

    + whoami
    a=barnett
    + hostname
    b=grymoire
    + echo user barnett is using computer grymoire
    user barnett is using computer grymoire

However, "sh -v script" reports

    #!/bin/sh
    # comment
    a=${1:-`whoami`};b=${2:-`hostname`}
    echo user $a is using computer $b
    user barnett is using computer grymoire

As you can see, **the comments are echoed with the verbose flag**. Also, **each line is echoed before the variables and the commands in backquotes are evaluated.** Also note the "x" command echoes the assignment to variables a and b on two lines, while the verbose flag echoed one line. Perhaps the best way to understand the difference is that <mark style="background: #FFF3A3A6;">the verbose flag echoes the line before the shell does anything with it, while the "x" flag causes the shell to echo each command.</mark> Think of it as a case of **Before** and **After**.

> [!study] difference between `x` and `v`
> the `verbose` flag echoes the line before the shell does anything with it, while the `x` flag causes the shell to echo each command.

## Combining flags

You can combine the flags if you wish. Execute a script with

    sh -x -v script

or more briefly

    sh -xv script

Inside, you can use any of these commands

    set -x -v
    set -xv
    set +x +v
    set +xv

The first line of a script has an `exception`. You can use the format

    #!/bin/sh -xv

but the following <mark style="background: #FF5582A6;">will not work</mark>:

    #!/bin/sh -x -v

**UNIX** systems **only pass the first argument to the interpreter**. In the example above, the shell never sees the "-v" option.

## U - unset variables

Another useful flag for debugging is the `u` flag. Previously, I mentioned how the variable form "${x:?}" reports an error if the variable is null or not set. Well, instead of changing every variable to this form, just use the "-u" flag, which will report an error for any unset variable.

## N - Bourne Shell non-execute flag

A simple way to check a complex shell script is the "-n" option. If set, the shell **will read the script, and parse the commands, but not execute them**. If you wanted to check for `syntax` errors, but not execute the script, use this command.

> [!bookmark] will not execute the commands

## E - Bourne Shell exit flag
#exit-status

- $ 0 status is `normal`
- ! positive status is an `error`
- @ variable `$?`
- $ `e` forces an immediate exit
- you can `bracket` an expression in order to disable the flag for a certain code section
	```bash
	set +e
	grep ...
	set -e
	```

I haven't discussed the `exit status` much. Every external program or shell script exits with a `status`. **A zero status is normal**. Any positive value is usually an error. I normally check the status when I need to, and ignore it when I don't care. You can ignore errors by simply not looking at the error status, which is the "$?" variable I mentioned last time. (If the program prints error messages, you have to `redirect` the messages elsewhere). Still, you may have a case where the script isn't working the way you expect. 
The `-e` option can be used for this: **if any error occurs, the shell script will immediately exit**. 
This would be very important if you wanted to modify some information, but only if no errors have happened. You wouldn't want to corrupt some important database, would you? Suppose the following script is executed:

    #!/bin/sh
    word=$1
    grep $word my_file >/tmp/count
    count=`wc -l </tmp/count`
    echo I found $count words in my_file

The script searches for a pattern inside a file, and prints out how many times the pattern is found. The grep program, however, <mark style="background: #D2B3FFA6;">exits with an error status if no words are found</mark>. **If the `e` option is set, the shell terminates before executing the count program**. If you were concerned about errors, you could set the "e" option at the beginning of the script. If you find out later that you want to ignore the error, <mark style="background: #FFB86CA6;">bracket it with instructions to disable the option</mark>:

    set +e # ignore errors
    grep $word my_file >/tmp/count
    set -e

## A - Bourne Shell mark for export flag

Previously, I mentioned you had to explicitly `export` a variable to place it in the `environment`, so other programs can find it. That is, if you execute these commands

    a=newvalue
    newscript

<mark style="background: #BBFABBA6;">The script newscript will now know the value of variable "a."</mark>

in the environment with

    export a

A second way to do this is to assign the variable right before executing the script:

    a=newvalue newscript

This is an unusual form, and not often used. There is no semicolon on the line. If there was a semicolon between the assignment and myscript, the variable "a" would not be made an [[environment variable]].

Another way to do this is to set the "a" option:

    set -a

<mark style="background: #FFB8EBA6;">If set, all variables that are modified or created will be exported. </mark>
This could be very useful if you split one large script into two smaller scripts, and want to **make sure all variables defined on one script are known to the other**.

## Bourne Shell hyphen option

I should mention that you can set options as well as positional parameters on the same set command. That is, you can type

    set -xvua a b c

There is another special option, that isn't really an option. Instead, it solves a special problem. Suppose you want one of these parameters to start with a hyphen? That is, suppose you have the following script, called myscript:

    #!/bin/sh
    # remember the old parameters
    old=$@
    set a b c
    # $1, $2, $3 are changed.
    # now - put them back
    set $old

Looks simple. But what happens if you execute this script with the following arguments:

    myscript -d abc

Can you see what will happen? You will get an error, when the system reports

    -d: bad option(s)

The set command thinks the "-d" argument is a shell option. The solution is to set the special hyphen-hyphen flag. This tells the shell that the rest of the arguments are not options, but positional parameters:

    #!/bin/sh
    # remember the old parameters
    old=$@
    set a b c
    # $1, $2, $3 are changed.
    # now - put them back, NOTE the change
    set -- $old