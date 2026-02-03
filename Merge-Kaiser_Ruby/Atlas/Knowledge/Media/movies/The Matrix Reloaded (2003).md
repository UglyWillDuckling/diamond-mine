---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: The Matrix Reloaded
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0234215/
id: tt0234215
plot: Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.
genres:
  - Action
  - Sci-Fi
director:
  - Lana Wachowski
  - Lilly Wachowski
onlineRating: 7.2
actors:
  - Keanu Reeves
  - Laurence Fishburne
  - Carrie-Anne Moss
image: https://m.media-amazon.com/images/M/MV5BNjAxYjkxNjktYTU0YS00NjFhLWIyMDEtMzEzMTJjMzRkMzQ1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05/15/2003
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
