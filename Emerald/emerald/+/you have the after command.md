#active #note #reminder

You have the `after` function alrady setup.

```bash
after () {
	after="$1" 
	shift
	echo "$@" | at now + "$after"
}
```

- [x] remind me in a week (@[[Atlas/Knowledge/daily_notes/2025/January/2025-02-07]] 10:54)
- [x] bi-weekly (@[[2025-02-21]])
- [x] monthly (@[[2025-03-21]])
- [x] after command monthly (@[[2025-04-11]])
