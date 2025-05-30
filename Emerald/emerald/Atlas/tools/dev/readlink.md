#tool #command #unix  

   readlink  is a command in Unix/Linux operating systems used to print the
  resolved pathname of a symbolic link (also known as a [[symlink]]).

  Symbolic links are special kinds of files that serve as pointers to other
  files or directories. They are often used to provide an alternate name or
  location for a file or directory, or to create a shortcut to a frequently
  accessed location.

  When you run the  readlink  command followed by the name of a symbolic link,
  it prints the path of the file or directory that the link points to. For
  example, if you have a symlink named  link-to-file  that points to
  /home/user/Documents/myfile.txt , running  readlink link-to-file  will print
  /home/user/Documents/myfile.txt .

  If the argument to  readlink  is not a symbolic link, the command will print
  an error message. You can use the  -f  option to make  readlink  follow all
  symbolic links in a path and print the final destination, or the  -e  option
  to print the final destination if it is a regular file or an existing
