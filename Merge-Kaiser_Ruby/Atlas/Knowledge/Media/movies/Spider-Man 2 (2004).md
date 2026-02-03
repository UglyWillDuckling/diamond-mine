---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Spider-Man 2
year: "2004"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0316654/
id: tt0316654
plot: Peter Parker is beset with troubles in his failing personal life as he battles a former brilliant scientist named Otto Octavius.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - Sam Raimi
onlineRating: 7.5
actors:
  - Tobey Maguire
  - Kirsten Dunst
  - Alfred Molina
image: https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/30/2004
watched: false
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
