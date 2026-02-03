---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Toy Story 2
year: "1999"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0120363/
id: tt0120363
plot: When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - John Lasseter
  - Ash Brannon
  - Lee Unkrich
onlineRating: 7.9
actors:
  - Tom Hanks
  - Tim Allen
  - Joan Cusack
image: https://m.media-amazon.com/images/M/MV5BNzVmODlhMDEtY2YxZi00OTVjLTlkNTktN2Q2OTRlM2I4M2FhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/24/1999
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
