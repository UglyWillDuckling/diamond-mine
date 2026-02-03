---
category:
  - "[[Film]]"
  - "[[Science Fiction]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Interstellar
year: "2014"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0816692/
id: tt0816692
plot: When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.
genres:
  - Adventure
  - Drama
  - Sci-Fi
director:
  - Christopher Nolan
onlineRating: 8.7
actors:
  - Matthew McConaughey
  - Anne Hathaway
  - Jessica Chastain
image: https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/07/2014
watched: false
lastWatched: ""
personalRating: 7.7
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
