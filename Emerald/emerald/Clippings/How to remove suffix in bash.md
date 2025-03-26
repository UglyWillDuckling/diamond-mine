---
tags:
  - howto
---
  - [x] remind me (@[[2025-03-25]])
  ___
  
  To remove a suffix from a filename in bash, you can use the following
  command:

```sh
for file in *.suffix; do mv "$file" "${file%.suffix}"; done
```

  Replace  .suffix  with the suffix you want to remove. This command loops
  through all the files in the current directory that have the specified
  suffix, and renames each file by removing the suffix.

  For example, if you want to remove the  .bak  suffix from all files in the
  current directory, you can run:

    for file in *.bak; do mv "$file" "${file%.bak}"; done

  This command will rename all files with the  .bak  suffix to remove that
  suffix from the name, e.g.  file.bak  will be renamed to  file .
