---
related:
  - "[[unix]]"
---
#tool #command #parallel

## from [[mods]]

 **parallel**  is a command that allows you to execute multiple commands in
  parallel, taking advantage of multiple CPU cores to speed up processing. It's a
  powerful tool for parallelizing tasks, and I'm excited to explain how it works.

  **Basic syntax**

    parallel [options] command ::: input1 input2 ... inputN

  Here,  command  is the command you want to execute in parallel, and  input1 ,
  input2 , ...,  inputN  are the input values that will be passed to the command.

  Example 1: Running multiple commands in parallel

  Suppose you have a list of files  file1.txt ,  file2.txt , ...,  file10.txt  and
  you want to compress each file using  gzip  in parallel:

	parallel gzip ::: file*.txt

  This will execute  gzip  on each file in parallel, using multiple CPU cores.

  Example 2: Parallelizing a loop

  You can also use  parallel  to parallelize a loop. For example, suppose you want
  to execute a command on multiple directories  dir1 ,  dir2 , ...,  dir10 :

    parallel 'cd {} && command' ::: dir*

  Here,  cd {} && command  is the command that will be executed in each directory.
  The  {}  placeholder represents the input value (e.g.,  dir1 ,  dir2 , ...). The
  &&  is used to concatenate the  cd  command with the  command  that follows.

  Options

  Here are some commonly used options with  parallel :

  •  `-j`  or  --jobs : specifies the number of jobs to run in parallel. By default,
  parallel  uses all available CPU cores.
  •  `-n`  or  --max-args : specifies the maximum number of arguments to pass to
  each command.
  •  `-k`  or  --keep-order : preserves the order of the input values.
  •  `-v`  or  --verbose : increases the verbosity of  parallel .

- [ ] remind me (@2025-01-25)