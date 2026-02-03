---
category:
  - "[[Film]]"
  - "[[Comedy]]"
  - "[[Zombie Movie]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Shaun of the Dead
year: "2004"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0365748/
id: tt0365748
plot: The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.
genres:
  - Comedy
  - Horror
director:
  - "[[Edgar Wright]]"
onlineRating: 7.8
actors:
  - Simon Pegg
  - Kate Ashfield
  - Nick Frost
image: https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09/24/2004
watched: true
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
