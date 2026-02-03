---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: The Breakfast Club
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0088847/
id: tt0088847
plot: Five high school students meet in Saturday detention and discover how they have a great deal more in common than they thought.
genres:
  - Comedy
  - Drama
director:
  - John Hughes
onlineRating: 7.8
actors:
  - Emilio Estevez
  - Judd Nelson
  - Molly Ringwald
image: https://m.media-amazon.com/images/M/MV5BZTZiMGU1MWMtNjk0Yi00ZjNjLTljMDEtMDhkNGE2OWY3YzZiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 02/15/1985
watched: true
lastWatched: ""
personalRating: 7.8
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
