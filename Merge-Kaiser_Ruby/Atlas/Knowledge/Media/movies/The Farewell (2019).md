---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: The Farewell
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8637428/
id: tt8637428
plot: A Chinese family discovers their grandmother has only a short while left to live and decide to keep her in the dark, scheduling a wedding to gather before she dies.
genres:
  - Comedy
  - Drama
director:
  - Lulu Wang
onlineRating: 7.5
actors:
  - Shuzhen Zhao
  - Awkwafina
  - X Mayo
image: https://m.media-amazon.com/images/M/MV5BYjdlZDI1OWYtZWU4MC00NDhkLThmOWEtMTZiODFhZThkMjA4XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09.08.2019
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
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
