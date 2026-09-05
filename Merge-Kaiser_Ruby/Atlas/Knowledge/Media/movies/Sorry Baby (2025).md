---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Sorry, Baby
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt32843349/
id: tt32843349
plot: After a tragic event, a woman finds herself alone while everyone else continues with their lives as if nothing had happened.
genres:
  - Comedy
  - Drama
director:
  - Eva Victor
onlineRating: 7.1
actors:
  - Eva Victor
  - Naomi Ackie
  - Louis Cancelmi
image: https://m.media-amazon.com/images/M/MV5BMzJhZWNiMTktNjdiMi00ZTFkLTg5OTAtYzdiZjZjNDBlMmFhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/25/2025
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
selected: false
movie_status:
  - plan_to_watch
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
