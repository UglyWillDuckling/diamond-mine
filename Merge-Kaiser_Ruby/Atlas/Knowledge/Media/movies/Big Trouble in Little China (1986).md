---
category:
  - "[[Film]]"
  - "[[Comedy]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Big Trouble in Little China
year: "1986"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0090728/
id: tt0090728
plot: A rough-and-tumble trucker and his sidekick face off with an ancient sorcerer in a supernatural battle beneath Chinatown.
genres:
  - Action
  - Adventure
  - Comedy
director:
  - John Carpenter
onlineRating: 7.2
actors:
  - Kurt Russell
  - Kim Cattrall
  - Dennis Dun
image: https://m.media-amazon.com/images/M/MV5BYWNjZDQyMjUtZDEzZC00OThhLTg1NWItOTQ1MWI3ODBlODcyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/02/1986
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film/comedy
---

`$= '![Image|200](' + dv.current().image + ')'`

# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched \n last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
}
```

```dataviewjs
if (dv.current()['plan-to-watch']) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Premiered**: `$= dv.current().premiere`
