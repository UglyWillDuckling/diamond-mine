---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Ocean Waves
year: "1993"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0108432/
id: tt0108432
plot: As a young man returns home after his first year away at college he recalls his senior year of high school and the iron-willed, big city girl that turned his world upside down.
genres:
  - Animation
  - Drama
  - Romance
director:
  - Tomomi Mochizuki
onlineRating: 6.6
actors:
  - Nobuo Tobita
  - Yoko Sakamoto
  - Toshihiko Seki
image: https://m.media-amazon.com/images/M/MV5BYmI5Nzk4ZGMtNWY2ZS00MzBiLWFkMmMtYjI3ZjYxM2NiNzRlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/13/1994
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
