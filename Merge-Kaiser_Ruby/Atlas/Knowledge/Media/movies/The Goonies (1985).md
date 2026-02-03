---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: The Goonies
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0089218/
id: tt0089218
plot: A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.
genres:
  - Adventure
  - Comedy
  - Family
director:
  - Richard Donner
onlineRating: 7.7
actors:
  - Sean Astin
  - Josh Brolin
  - Jeff Cohen
image: https://m.media-amazon.com/images/M/MV5BMjE1OWU4ODEtZmEzMC00NTcwLWFlMWUtYjhlNzExOTIxYzVlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/07/1985
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
  - film/comfort
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
