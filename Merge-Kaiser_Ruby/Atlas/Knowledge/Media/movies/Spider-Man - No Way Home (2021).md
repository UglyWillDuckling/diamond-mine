---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Spider-Man: No Way Home"
year: "2021"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt10872600/
id: tt10872600
plot: With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.
genres:
  - Action
  - Adventure
  - Fantasy
director:
  - Jon Watts
onlineRating: 8.2
actors:
  - Tom Holland
  - Zendaya
  - Benedict Cumberbatch
image: https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/17/2021
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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
