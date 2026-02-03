---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Edward Scissorhands
year: "1990"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0099487/
id: tt0099487
plot: The solitary life of an artificial man with scissors for hands is upended when he is taken in by a suburban family.
genres:
  - Drama
  - Fantasy
  - Romance
director:
  - "[[Tim Burton]]"
onlineRating: 7.8
actors:
  - Johnny Depp
  - Winona Ryder
  - Dianne Wiest
image: https://m.media-amazon.com/images/M/MV5BODJhODczYjUtYzdkMy00Yjc4LTllNWMtZTQ3MDZlYWZjYWEzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/14/1990
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
