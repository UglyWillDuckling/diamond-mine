---
author:
  - "[[Ole Tange]]"
created: 2025-05-30
published: 2010-06-22
source: "https://www.youtube.com/watch?v=OpaiGYxkSuQ&list=PL284C9FF2488BC6D1&index=2"
tags:
---
![](https://www.youtube.com/watch?v=OpaiGYxkSuQ)  

- [ ] #task take a look at [[GNU Parallel]] video tutorila 📅 2025-06-30
	- [ ] series - [[Part 1 GNU Parallel script processing and execution]]
___
[[GNU Parallel]] is a shell tool for executing jobs in parallel locally or using remote machines. A job is typically a single command or a small script that has to be run for each of the lines in the input. The typical input is a list of files, a list of hosts, a list of users, a list of URLs, or a list of tables.  
  
If you use xargs today you will find GNU parallel very easy to use as GNU parallel is written to have the same options as xargs. If you write loops in shell, you will find GNU parallel may be able to replace most of the loops and make them run faster by running several jobs in parallel. If you use ppss or pexec you will find GNU parallel will often make the command easier to read.  
  
GNU parallel makes sure output from the commands is the same output as you would get had you run the commands sequentially. This makes it possible to use output from GNU parallel as input for other programs.  
  
For each line of input GNU parallel will execute command with the line as arguments. If no command is given, the line of input is executed. Several lines will be run in parallel. GNU parallel can often be used as a substitute for xargs or cat | bash.