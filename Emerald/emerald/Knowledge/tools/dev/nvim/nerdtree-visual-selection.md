#visual-selection
[[nerdtree]]

https://github.com/PhilRunninger/nerdtree-visual-selection

## Mappings

Where applicable, those key mappings match up with NERDTree `settings`. If not defined in your `.vimrc`, their default values are used. The mappings are as follows:

| NERDTree variable          | default        | Purpose                                                                                                                                            |
| -------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| NERDTreeMapActivateNode    | <kbd>o</kbd>   | Open selected files.                                                                                                                               |
| NERDTreeMapOpenSplit       | <kbd>i</kbd>   | Open selected files in horizontal splits.                                                                                                          |
| NERDTreeMapOpenVSplit      | <kbd>s</kbd>   | Open selected files in vertical splits.                                                                                                            |
| NERDTreeMapOpenInTab       | <kbd>t</kbd>   | Open selected files in tabs.                                                                                                                       |
| *n/a*                      | <kbd>d</kbd>   | Delete selected files from disk. If open in Vim, they remain open.                                                                                 |
| *n/a*                      | <kbd>m</kbd>   | Move the selected files to another directory. If open in Vim, the buffer still points to its old location.                                         |
| *n/a*                      | <kbd>c</kbd>   | Copy selected files to another directory.                                                                                                          |
| *n/a*                      | <kbd>a</kbd>   | Append selected files to the arglist. If a directory is selected, it is ignored. Only files will be added.                                         |
| *n/a*                      | <kbd>A</kbd>   | Set the arglist to only selected file. This overwrites the previeous arglist. If a directory is selected, it is ignored. Only files will be added. |
| NERDTreeMapJumpRoot        | <kbd>P</kbd>   | Jump to the tree root.                                                                                                                             |
| NERDTreeMapJumpParent      | <kbd>p</kbd>   | Jump to the parent node of the cursor node.                                                                                                        |
| NERDTreeMapJumpFirstChild  | <kbd>K</kbd>   | Jump to the first child of the cursor node's parent.                                                                                               |
| NERDTreeMapJumpLastChild   | <kbd>J</kbd>   | Jump to the last child of the cursor node's parent.                                                                                                |
| NERDTreeMapJumpPrevSibling | <kbd>c-k</kbd> | Jump to the previous sibling of the cursor node.                                                                                                   |
| NERDTreeMapJumpNextSibling | <kbd>c-j</kbd> | Jump to the next sibling of the cursor node.                                                                                                       |
