---
title: GNU Parallel- GNU Project - Free Software Foundation
source: https://www.gnu.org/software/parallel/
author: 
published: 
created: 2025-01-24
description: 
tags:
  - clippings
  - tool
  - command-line
related:
  - "[[unix]]"
  - "[[Linux]]"
---
### docs
```dataview
LIST
FROM #gnu-parallel AND #docs 
```
### description

GNU **parallel** is a shell tool for executing jobs in parallel using one or more computers. A job can be a single command or a small script that has to be run for each of the lines in the input. The typical input is a list of files, a list of hosts, a list of users, a list of URLs, or a list of tables. A job can also be a command that reads from a pipe. GNU **parallel** can then split the input and pipe it into commands in parallel.

![GNU Parallel](https://www.gnu.org/software/parallel/logo-gray+black300.png "GNU Parallel")

For people who live life in the parallel lane

If you use xargs and tee today you will find GNU **parallel** very easy to use as GNU **parallel** is written to have the same options as xargs. If you write loops in shell, you will find GNU **parallel** may be able to replace most of the loops and make them run faster by running several jobs in parallel.

GNU **parallel** makes sure output from the commands is the same output as you would get had you run the commands sequentially. This makes it possible to use output from GNU **parallel** as input for other programs.

For each line of input GNU **parallel** will execute *command* with the line as arguments. If no *command* is given, the line of input is executed. Several lines will be run in parallel. GNU **parallel** can often be used as a substitute for **xargs** or **cat | bash**.

### Documentation

A lot of work has been put into making documentation for GNU **parallel**. GNU **parallel** includes the 4 types of documentation: Tutorial, How-To, Reference and Design Discussion.

#### Tutorial

If you prefer reading a book buy **GNU Parallel 2018** at [https://www.lulu.com/shop/ole-tange/gnu-parallel-2018/paperback/product-23558902.html](https://www.lulu.com/shop/ole-tange/gnu-parallel-2018/paperback/product-23558902.html) or download it at: [https://doi.org/10.5281/zenodo.1146014](https://doi.org/10.5281/zenodo.1146014) ([source](https://gitlab.com/ole.tange/gnu-parallel-book)) Read at least chapter 1+2. It should take you less than 20 minutes.

Otherwise start by watching the intro videos for a quick introduction: [http://www.youtube.com/playlist?list=PL284C9FF2488BC6D1](http://www.youtube.com/playlist?list=PL284C9FF2488BC6D1)

If you want to dive deeper: spend a couple of hours walking through the tutorial (man parallel\_tutorial, [HTML](https://www.gnu.org/software/parallel/parallel_tutorial.html), [PDF](https://www.gnu.org/software/parallel/parallel_tutorial.pdf)). Your command line will love you for it.

#### How-To

You can find a lot of **EXAMPLE**s of use in man parallel\_examples ([HTML](https://www.gnu.org/software/parallel/parallel_examples.html), [PDF](https://www.gnu.org/software/parallel/parallel_examples.pdf)). That will give you an idea of what GNU **parallel** is capable of, and you may find a solution you can simply adapt to your situation.

#### Reference

If you need a one page printable cheat sheet you can find it on: [https://www.gnu.org/software/parallel/parallel\_cheat.pdf](https://www.gnu.org/software/parallel/parallel_cheat.pdf)

parallel --help shows you the most commonly used options.

The man page is the reference for all options (man parallel, [HTML](https://www.gnu.org/software/parallel/man.html), [PDF](https://www.gnu.org/software/parallel/parallel.pdf)). The options map is a map showing which options other options relate to (/usr/share/.../parallel\_options\_map.pdf, [PDF](https://www.gnu.org/software/parallel/parallel_options_map.pdf)).

There are separate man pages for:

- env\_parallel (man env\_parallel, [HTML](https://www.gnu.org/software/parallel/env_parallel.html), [PDF](https://www.gnu.org/software/parallel/env_parallel.pdf)),
- sem (man sem, [HTML](https://www.gnu.org/software/parallel/sem.html), [PDF](https://www.gnu.org/software/parallel/sem.pdf)),
- parcat (man parcat, [HTML](https://www.gnu.org/software/parallel/parcat.html), [PDF](https://www.gnu.org/software/parallel/parcat.pdf)),
- parset (man parset, [HTML](https://www.gnu.org/software/parallel/parset.html), [PDF](https://www.gnu.org/software/parallel/parset.pdf)),
- parsort (man parsort, [HTML](https://www.gnu.org/software/parallel/parsort.html), [PDF](https://www.gnu.org/software/parallel/parsort.pdf)),
- GNU sql (man sql, [HTML](https://www.gnu.org/software/parallel/sql.html), [PDF](https://www.gnu.org/software/parallel/sql.pdf)), and
- GNU niceload (man niceload, [HTML](https://www.gnu.org/software/parallel/niceload.html), [PDF](https://www.gnu.org/software/parallel/niceload.pdf)).

For alternatives to GNU **parallel**, see man parallel\_alternatives ([HTML](https://www.gnu.org/software/parallel/parallel_alternatives.html), [PDF](https://www.gnu.org/software/parallel/parallel_alternatives.pdf)).

#### Design discussion

If you want to know the design decisions behind GNU **parallel**, see: man parallel\_design ([HTML](https://www.gnu.org/software/parallel/parallel_design.html), [PDF](https://www.gnu.org/software/parallel/parallel_design.pdf)). This is also a good intro if you intend to change GNU **parallel**.

You may also want to learn about the [history of GNU **parallel**](https://www.gnu.org/software/parallel/history.html).

Over the years GNU **parallel** has gotten more safety features (e.g. no silent data loss if the disk runs full in the middle of a job). These features cost performance. [This graph shows the relative performance between each version](https://www.gnu.org/software/parallel/parallel-process-time-3000-1000.pdf).

### Citation

When using GNU **parallel** for a publication please cite as per parallel --citation. Read the background for the citation in [The GNU Parallel Citation FAQ](https://git.savannah.gnu.org/cgit/parallel.git/tree/doc/citation-notice-faq.txt).

### 10 year anniversary and 20th birthday

On 2020-04-22 GNU **parallel** has been an official GNU tool for 10 years. Read more about [the anniversary](https://www.gnu.org/software/parallel/10-years-anniversary.html).

GNU **parallel**'s 20th birthday is on 2022-01-06. Read more about [the birthday](https://www.gnu.org/software/parallel/20th-birthday.html).

### Mailing lists and social media

GNU **parallel** has two mailing lists:

- <[parallel@gnu.org](https://www.gnu.org/software/parallel/)\> for discussing uses of GNU **parallel**. Subscribe on the [web interface](https://lists.gnu.org/mailman/listinfo/parallel).
- <[bug-parallel@gnu.org](https://www.gnu.org/software/parallel/)\> ([web interface](https://lists.gnu.org/mailman/listinfo/bug-parallel)) for discussing development and enhancement requests, as well as bug reports.

Your bug report should always include:

- The output of parallel --version. If you are not running the latest released version, you should specify why you believe the problem is not fixed in that version.
- A complete example that others can run, which shows the problem. A combination of `seq`, `cat`, `echo`, and `sleep` can reproduce most errors. If your example requires large files, see if you can make them with something like seq 1000000 > file.

Mastodon: [@GNU\_Parallel@hostux.social](https://hostux.social/@GNU_Parallel)  
LBRY: [lbry://@GnuParallel:4](https://odysee.com/@GnuParallel:4)

Announcements about GNU **parallel** and most other GNU software are made on <[info-gnu@gnu.org](https://www.gnu.org/software/parallel/)\> ([web interface](https://lists.gnu.org/mailman/listinfo/info-gnu)).

### Getting involved

Development of GNU **parallel**, and GNU in general, is a volunteer effort, and you can contribute. For information, please read [How to help GNU](https://www.gnu.org/help/). If you'd like to get involved, it's a good idea to join the discussion mailing list (see above).

Test releases

Trying the latest test release (when available) is always appreciated. Test releases of GNU **parallel** can be found on the GNU "alpha" server  ([HTTPS](https://alpha.gnu.org/gnu/parallel/),  [HTTP](http://alpha.gnu.org/gnu/parallel/),  [FTP](https://alpha.gnu.org/gnu/parallel/)) and its [mirrors](https://www.gnu.org/prep/ftp.html).

Development

For development sources, bug and patch trackers, and other information, please see the [GNU **parallel** project page](https://savannah.gnu.org/projects/parallel/) at [savannah.gnu.org](https://savannah.gnu.org/).

Maintainer

GNU **parallel** is currently maintained by [[Ole Tange]]. Please use the mailing lists for contact.

### Merchandise

You can show your support for GNU **parallel** using [our merchandise](https://gnuparallel.threadless.com/designs/gnu-parallel).

