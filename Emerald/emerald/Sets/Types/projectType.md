---
type: project
subtype:
project_status: backlog
start_date: 2025-06-05
due_date: 2025-06-30
end_date:
areas:
ready:
active:
done:
complexity: 5
estimate: 5
interest: 5
progress: 0
state: begin
tags:
  - project
---
## props

- state: piece of txt representing the current state
- ready - is the project ready for work? ☑
- active - actively working on this one? ☑
- areas: which areas does it touch: `note: missing list items`
- progress: number 1-100
- estimate: 1-20
- complexity: 1-10
- interest: `general` prop, range: 1-10
- statuses `note: missing items`
	- backlog

## status

start: `=this.start_date`
due on: `=this.due_date`

ready: `$= dv.current().ready ? "yes" : "no"`
active: `$= dv.current().active ? "yes" : "no"`
state: `=this.state`

==**progress**: `=this.progress`/100==

## active tasks

`to do`
