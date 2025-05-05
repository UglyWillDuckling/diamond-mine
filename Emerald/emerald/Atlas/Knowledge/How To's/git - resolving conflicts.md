---
tags:
  - howto/git
---
#howto/git 

- [ ] remind me weekly (@[[2025-05-06]])
___
#  in a conflicted state

## accept theirs

If you're already in conflicted state, and you want to just accept all of theirs:

	git checkout --theirs 
	git add .

> ==If you want to do the opposite:==
## accept ours

	git checkout --ours .
	git add .



