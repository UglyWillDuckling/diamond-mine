 #tool #feature 

 part_of:: [[vim]] [[nvim]]
 related:: [[The quickfix and location lists in Vim]]
 
  To open the quickfix window in Vim, you can use the command:

    :copen

  This will open the quickfix window at the bottom of the screen, displaying
  any error messages or locations. If the quickfix window is already open,
  this command will just move the cursor to it.

  If you want to open the quickfix window in a vertical split, you can use the
  command:

    :vert copen

- `:copen` - Open the quickfix list window.
- `:ccl` or `:cclose` - Close the quickfix list window.
- `:cnext` or `:cn` - Go to the next item on the list.
- `:cprev` or `:cp` - Go to the previous item on the list.
- `:cfirst` - Go to the first item on the list.
- `:clast` - Go to the last item on the list.
- `:cc <n>` - Go to the *n<sup>th</sup>* item.

### keys

**from [[vim-unimpared]]**
- `]q` next item, `[q` previous
- `[Q` start, `]Q` end

- [x] **remind** me (@[[Knowledge/daily_notes/2025/January/2025-02-07]] 09:51)
- [ ] remind me (@[[2025-03-11]])
