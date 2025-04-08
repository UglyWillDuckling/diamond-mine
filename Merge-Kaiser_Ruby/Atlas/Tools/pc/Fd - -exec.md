#howto/fd
about:: [[fd]]

	#howot
  -x, --exec command
              Execute command for each search result in parallel (use --threads=1 for sequential command execution).

              Note that all subsequent positional arguments are considered to be arguments to the command - not to fd.  It is therefore recommended to place the -x/--exec option last.  Alter‐
              natively,  you  can supply a ';' argument to end the argument list and continue with more fd options.  Most shells require ';' to be escaped: '\;'.  This option can be specified
              multiple times, in which case all commands are run for each file found, in the order they are provided. In that case, you must supply a ';' argument for all but  the  last  com‐
              mands.

              If parallelism is enabled, the order commands will be executed in is non-deterministic. And even with --threads=1, the order is determined by the operating system and may not be
              what you expect. Thus, it is recommended that you don't rely on any ordering of the results.

              Before  executing  the command, any placeholder patterns in the command are replaced with the corresponding values for the current file. The same placeholders are used as in the
              "--format" option.

              If no placeholder is present, an implicit "{}" at the end is assumed.

Examples:
	- find all *.zip files and unzip them:

		fd -e zip -x unzip

	- find *.h and *.cpp files and run "clang-format -i .." for each of them:
		fd -e h -e cpp -x clang-format -i

	- Convert all *.jpg files to *.png files:
	
			fd -e jpg -x convert {} {.}.png

# Placeholder syntax

The syntax for generating commands is similar to that of GNU Parallel [^1]:

{}: A placeholder token that will be replaced with the path of the search result (documents/images/party.jpg)
{.}: Like {}, but without the file extension (documents/images/party)

{/}: A placeholder that will be replaced by the **basename** of the search result (party.jpg)
{//}: The **parent**(directory) of the discovered path (documents/images)
{/.}: The **basename**, with the extension removed (party)

==If you do not include a placeholder, fd automatically adds a {} at the end.==

[^1]: [[parallel command]]