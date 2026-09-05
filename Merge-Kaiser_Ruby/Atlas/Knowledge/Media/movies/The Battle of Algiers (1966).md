---
category:
  - "[[Film]]"
interest: 7.7
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: The Battle of Algiers
year: "1966"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0058946/
id: tt0058946
plot: In the 1950s, fear and violence escalate as the people of Algiers fight for independence from the French government.
genres:
  - Drama
  - War
director:
  - Gillo Pontecorvo
onlineRating: 8.1
actors:
  - Brahim Hadjadj
  - Jean Martin
  - Yacef Saadi
image: https://m.media-amazon.com/images/M/MV5BMTY2Mjk0OGEtYTM3Yy00ZWZiLWFhNjAtNGExMjEzNGVmMDMxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 20.09.1967
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
selected: false
movie_status:
  - plan_to_watch
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
