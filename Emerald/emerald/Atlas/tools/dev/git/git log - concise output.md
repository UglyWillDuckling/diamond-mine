---
quality: 7
value: 6
interest: 8
about:
  - "[[git format]]"
tags:
  - howto/git
  - git/formatting
---
- [x] remind me [[git log - concise output]] (@[[2025-07-15]])
- [ ] reminder me 2 [[git log - concise output]] (@[[2025-07-31]])
___

You can use the following Git command to display a concise log output with
  author and date:

	   git log --format="%h %ad %s (%an)" --date=short

  Here's a **breakdown** of the options:

  •  --format="%h %ad %s (%an)"
    •  %h : Abbreviated commit hash
    •  %ad : Author date ( ISO 8601 format)
    •  %s : Commit subject (first line of the commit message)
    •  (%an) : Author name (in parentheses)
  •  --date=short : Displays the date in a short format (e.g.,  2022-07-25 )

  This will output something like:

    abc1234 2022-07-25 Fix typo (John Doe)
    def5678 2022-07-20 Add new feature (Jane Smith)
    ghi9012 2022-07-15 Update docs (Jim Brown)

  If you prefer a more compact output, you can use  --oneline  instead of  --
  format :

    git log --oneline --format="%h %ad %s (%an)" --date=short

## with color 🏳‍🌈

```
git log --format="%C(yellow)%h%C(reset) %Cgreen%ad%C(reset) %C(blue)%an%C(reset) %s" --date=short
```

## git config

```shell
  short = log --color=always --format='%C(auto) %h %s'
  inline = log --format=format:'%C(yellow)%h%C(reset) %Cgreen%ad%C(reset) %C(blue)%an%C(reset) %s' --date=short --abbrev-commit
```
