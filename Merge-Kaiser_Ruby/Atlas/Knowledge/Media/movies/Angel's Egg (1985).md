---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Angel's Egg
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0208502/
id: tt0208502
plot: A mysterious young girl wanders a desolate, otherworldly landscape, carrying a large egg.
genres:
  - Animation
  - Drama
  - Fantasy
  - Horror
  - Mystery
  - Sci-Fi
director:
  - Mamoru Oshii
onlineRating: 7.7
actors:
  - Mako Hyôdô
  - Jinpachi Nezu
  - Kei'ichi Noda
image: https://m.media-amazon.com/images/M/MV5BMWM2N2RjOTAtYzRkNi00NDY5LWFhODAtZWEwYjdiM2FlMjljXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg
released: true
premiere: 22.12.1985
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
