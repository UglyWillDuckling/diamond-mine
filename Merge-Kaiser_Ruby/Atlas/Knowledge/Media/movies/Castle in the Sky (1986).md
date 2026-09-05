---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Castle in the Sky
year: "1986"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0092067/
id: tt0092067
plot: Pazu's life changes when he meets Sheeta, a girl whom pirates are chasing for her crystal amulet, which has the potential to locate Laputa, a legendary castle floating in the sky.
genres:
  - Animation
  - Adventure
  - Family
director:
  - Hayao Miyazaki
onlineRating: 8
actors:
  - Mayumi Tanaka
  - Keiko Yokozawa
  - Kotoe Hatsui
image: https://m.media-amazon.com/images/M/MV5BZjcyMjg2MzktNjg4YS00MjQzLTg0YWQtMjUyZDk2Y2Y0YzZjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/19/1991
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
selected: false
movie_status:
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
