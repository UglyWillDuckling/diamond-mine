---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: The Platform
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8228288/
id: tt8228288
plot: In a prison where inmates are fed on a descending platform, those on the upper levels take more than their fair share while those below are left to starve on scraps and one man decides to change the system.
genres:
  - Horror
  - Mystery
  - Sci-Fi
director:
  - Galder Gaztelu-Urrutia
onlineRating: 7
actors:
  - Ivan Massagué
  - Zorion Eguileor
  - Antonia San Juan
image: https://m.media-amazon.com/images/M/MV5BYjUyZjNmYmMtNjA1My00ZWMyLTliZGQtODgzZjIxM2Y4NGI1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 20.03.2020
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
