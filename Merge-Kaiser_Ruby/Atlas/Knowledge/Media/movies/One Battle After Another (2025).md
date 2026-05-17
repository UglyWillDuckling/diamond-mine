---
category:
  - "[[Film]]"
interest: 7.6
plan-to-watch: false
personal favorite: true
type: movie
subType: ""
title: One Battle After Another
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt30144839/
id: tt30144839
plot: When their evil enemy resurfaces after 16 years, a group of ex-revolutionaries reunite to rescue the daughter of one of their own.
genres:
  - Action
  - Crime
  - Drama
director:
  - Paul Thomas Anderson
onlineRating: 7.9
actors:
  - Leonardo DiCaprio
  - Sean Penn
  - Benicio Del Toro
image: https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 26.09.2025
watched: false
lastWatched: ""
personalRating: 7.9
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
