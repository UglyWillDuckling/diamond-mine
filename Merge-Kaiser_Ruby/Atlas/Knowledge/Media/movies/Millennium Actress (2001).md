---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Millennium Actress
year: "2001"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0291350/
id: tt0291350
plot: A TV interviewer and his cameraman meet a former actress and travel through her memories and career.
genres:
  - Animation
  - Drama
  - Fantasy
director:
  - Satoshi Kon
onlineRating: 7.8
actors:
  - Miyoko Shôji
  - Shôzô Îzuka
  - Mami Koyama
image: https://m.media-amazon.com/images/M/MV5BZjcwZDFlMTgtN2Q1Ny00MTgxLTk5OGItNTllMDg3MjE0NjZlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 14.09.2002
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
