- [x] remind me [[git custom aliases]] (@[[2025-08-14]])
___

A list of useful aliases made by me.

## formatting

`git inline`

```sh
  inline = log --format=format:'%C(yellow)%h%C(reset) %Cgreen%ad%C(reset) %C(blue)%an%C(reset) %s' --date=short --abbrev-commit
```

`git short`

```sh
  short = log --color=always --format='%C(auto) %h %s'
```

## time filters

```sh
thisday = l --since=0.day
thisweek = l --since=1.week
thismonth = l --since=1.month
thisyear = l --since=1.year

week-s = thisweek --oneline
month = thismonth
month-s = thismonth --oneline

recent = r --all --no-merges --since="2.weeks"
```

## commit filtering

	pickaxe = git log --pickaxe-all --pickaxe-regex -S

## blame

	blamew = blame -w
	blamec = blame -w -C -C -C
