#active #note #reminder

You have the `after` function alrady setup.

```bash
after () {
	after="$1" 
	shift
	echo "$@" | at now + "$after"
}
```

- [x] remind me in a week (@[[2025-02-07]] 10:54)
- [ ] bi-weekly (@[[2025-02-21]])