---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: The Matrix Revolutions
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0242653/
id: tt0242653
plot: The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.
genres:
  - Action
  - Sci-Fi
director:
  - Lana Wachowski
  - Lilly Wachowski
onlineRating: 6.7
actors:
  - Keanu Reeves
  - Laurence Fishburne
  - Carrie-Anne Moss
image: https://m.media-amazon.com/images/M/MV5BMmNmMTEzODQtNmExMS00OGUxLWFkNTItMTM3NzBlNDk0YWU5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/05/2003
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
