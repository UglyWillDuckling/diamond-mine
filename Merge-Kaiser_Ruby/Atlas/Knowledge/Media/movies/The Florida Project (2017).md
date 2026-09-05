---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: The Florida Project
year: "2017"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt5649144/
id: tt5649144
plot: A single mother and the manager of a roadside motel do their utmost to maintain the innocence of a six-year-old girl's life.
genres:
  - Drama
director:
  - Sean Baker
onlineRating: 7.6
actors:
  - Brooklynn Prince
  - Bria Vinaite
  - "[[Willem Dafoe]]"
image: https://m.media-amazon.com/images/M/MV5BNDBhM2MxYjAtMWFiYy00MWMwLThkMDYtN2M1ZWY3NjkxNGExXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10.11.2017
watched: false
lastWatched: ""
personalRating: 0
tags:
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
