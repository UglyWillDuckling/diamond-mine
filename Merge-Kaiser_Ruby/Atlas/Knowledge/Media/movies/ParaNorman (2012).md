---
category:
  - "[[Film]]"
  - "[[Animation]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: ParaNorman
year: "2012"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1623288/
id: tt1623288
plot: A misunderstood boy takes on ghosts, zombies and grown-ups to save his town from a centuries-old curse.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Chris Butler
  - Sam Fell
onlineRating: 7
actors:
  - Kodi Smit-McPhee
  - Tucker Albrizzi
  - Anna Kendrick
image: https://m.media-amazon.com/images/M/MV5BZTI0MjA3M2ItY2QzMS00MzZiLWE5YTAtM2ZlODk1MjBhNjA0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 08/17/2012
watched: true
lastWatched: ""
personalRating: 7.5
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
