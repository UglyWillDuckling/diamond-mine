Method 1: Use the  ignorecase  option

You can set the  ignorecase  option in your Vim configuration file ( ~/.vimrc
on Unix-like systems or  ~/_vimrc  on Windows) by adding the following line:

`set ignorecase`

This will make Vim's search case-insensitive.

Method 2: Use the  \c  flag in your search pattern

You can add the  \c  flag at the end of your search pattern to make it case-
insensitive. For example:

/search_pattern\c

This will search for  search_pattern  regardless of case.

Method 3: Use the  smartcase  option

If you want Vim to automatically switch to case-insensitive search when you
enter
a search pattern in lowercase, and switch back to case-sensitive search when you
enter a search pattern in uppercase, you can set the  smartcase  option:

`set smartcase`
