---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Mercury Rising
year: "1998"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0120749/
id: tt0120749
plot: Shadowy elements in the NSA target a nine-year old autistic savant for death when he is able to decipher a top secret code.
genres:
  - Action
  - Crime
  - Drama
director:
  - Harold Becker
onlineRating: 6.1
actors:
  - Bruce Willis
  - Miko Hughes
  - Alec Baldwin
image: https://m.media-amazon.com/images/M/MV5BZGIzM2NmZWMtYjY5My00NzNmLTkxMjUtYWZkYzBmYmVhNGU5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03.04.1998
watched: false
lastWatched: ""
personalRating: 0
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
