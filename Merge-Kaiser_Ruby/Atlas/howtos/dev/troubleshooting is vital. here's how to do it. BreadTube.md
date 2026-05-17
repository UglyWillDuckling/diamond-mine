---
source: https://m.youtube.com/watch?v=VX45nw2OFxo
created: 2026-04-06
interest: 7.8
plan-to-watch: true
processed: false
topics:
  - "[[linux]]"
  - "[[Software TroubleShooting]]"
tags:
  - video
creator:
  - "[[BreadTube]]"
---

![](https://m.youtube.com/watch?v=VX45nw2OFxo)


[[Bread's list of common Arch problems + solutions]]
___


# Identify detailed, exact symptoms

- narrow the scope of your problem
- determine & organize precise issues
	- get specific!
	- forums example (2 important things)

- logical order of causation
	- foo happens
	- then bar
	- only afterwards, baz doesn't work! aha!

- how to red error messages
	- 

# 2 Gather context and info to isolate and diagnose

- hardware or software?

- Has it ever worked? Have you ...
	- changed **configuration**?
	- modified a **system file**?
	- installed new hardware or software?
	- experienced **correlated issues**?
	- performed **updates**?

- System wide or user specific?
	- create a new user[^1]

- Change only **ONE** thing at a time!
	- take notes 🗒 on everything that you've changed

# Implement the correct solution

- check pertinent logs and config
	- [[systemd]]: [[journalctl]] -xe

- research!
	- wikis, forums
	- search [^2]
	- keep a log of:
		- all issues related to the problem
		- troubleshooting steps you've done
		- what you've isolated out
		- all potential solutions
	- all else fails? Ask for help!

- find a solution - not a workaround

___
[^1]: [[useradd]]
[^2]: [[How to Properly Use a Search Engine]]