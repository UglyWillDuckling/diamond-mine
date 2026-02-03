---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Starship Troopers
year: "1997"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0120201/
id: tt0120201
plot: Humans, in a fascist militaristic future, wage war with giant alien bugs.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - "[[Paul Verhoeven]]"
onlineRating: 7.3
actors:
  - Casper Van Dien
  - Denise Richards
  - Dina Meyer
image: https://m.media-amazon.com/images/M/MV5BZTNiOGM1ZWUtZTZjZC00OWJmLWE2YzUtZjQ4ODZjZmVlMDU3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/07/1997
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
