 #git #howto 

part_of:: [[git]]
 
 If you want to use multiple Git configuration files in your home directory,
  you can create additional files with a .gitconfig extension and place them
  in your home directory or a subdirectory. To specify which configuration
  files to use for a particular repository, you can use the  includeif
  directive in your global Git configuration file.

For example, let's say you want to use a separate configuration file for your work repositories. 
You can create a file named  **~/.gitconfig_work**  with  the desired 
settings and include it in your global Git configuration file
like this:

    [includeIf "gitdir:~/work/**"]
        path = ~/.gitconfig_work

  This will include the  ~/.gitconfig_work  file for any repository located in
  the  ~/work  directory or its subdirectories.

Note that the order of precedence for included configuration files is
  determined by the order in which they *are* **included** in the global
  configuration file. If there are conflicting settings between included
  configuration files, **the last-included file will take precedence.**

- [x] remind me (@[[2025-02-05]] 10:21)
- [ ] weekly (@[[2025-02-19]])