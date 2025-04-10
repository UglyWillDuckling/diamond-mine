## Automatic vars

 1.  $@ : The name of the target                                      
  2.  $< : The name of the first prerequisite.                                
  3.  $^ : The names of all the prerequisites, separated by a space.          
  4.  $? : The names of all the prerequisites that are newer than the target. 
  5.  $* : The stem of the target. If the target is  foo.o , then  $*  expands
  to  foo .                                                                   
  6.  $% : The suffix of the target. If the target is  foo.o , then  $%       
  expands to  .o .                                                            
  7.  $& : The entire recipe.                                                 
  8.  $^M : A transformed version of  $^ , in which each prerequisite has had 
  $(MACROS)  substituted for all occurrences of  @ .                          
  ---
  
  These **`automatic variables`** allow you to write more concise and flexible      
  **Makefile rules**. For example, instead of hardcoding the name of a source file
  in a rule, you can use  ==`$<`==  to refer to the first prerequisite. 
  Similarly, instead of manually listing all the object files in a link rule, you can use  `$^`  to generate the list **automatically**.
  