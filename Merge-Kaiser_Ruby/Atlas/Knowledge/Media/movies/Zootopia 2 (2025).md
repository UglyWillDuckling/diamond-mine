---
category:
  - "[[Film]]"
plan-to-watch: false
interest: 7.9
type: movie
subType: ""
title: Zootopia 2
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt26443597/
id: tt26443597
plot: Brave rabbit cop Judy Hopps and her friend, the fox Nick Wilde, team up again to crack a new case, the most perilous and intricate of their careers.
genres:
  - Animation
  - Action
  - Adventure
director:
  - Jared Bush
  - Byron Howard
onlineRating: 7.6
actors:
  - Ginnifer Goodwin
  - Jason Bateman
  - Ke Huy Quan
image: https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/26/2025
watched: true
lastWatched: ""
personalRating: 7.4
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
