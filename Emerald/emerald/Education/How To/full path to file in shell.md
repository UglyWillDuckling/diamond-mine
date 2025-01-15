---
related:
  - "[[unix]]"
  - "[[shell]]"
  - "[[bash]]"
tags:
  - note
  - howto
  - howto/shell
---
```bash
readlink -f
```
 
 To get the full path to a file in bash, you can use the  [[readlink]]  command
  with the  -f  option. Here's an example:

	file_path=$(readlink -f /path/to/file)
    echo $file_path
    /full/path/to/file

In this example, /path/to/file is the relative or absolute path to the file you want to resolve. The readlink command with the -f option will follow all symbolic links and return the absolute path to the final file. The result is stored in the variable file_path , which can be used in further commands or scripts.
