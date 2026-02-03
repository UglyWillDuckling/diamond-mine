---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: About Time
year: "2013"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt2194499/
id: tt2194499
plot: At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.
genres:
  - Comedy
  - Drama
  - Fantasy
director:
  - Richard Curtis
onlineRating: 7.8
actors:
  - Domhnall Gleeson
  - Rachel McAdams
  - Bill Nighy
image: https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_SX300.jpg
released: true
premiere: 11/08/2013
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
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
