---
category:
  - "[[Film]]"
  - "[[Animation]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: The Nightmare Before Christmas
year: "1993"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0107688/
id: tt0107688
plot: Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.
genres:
  - Animation
  - Adventure
  - Family
director:
  - Henry Selick
onlineRating: 7.9
actors:
  - Danny Elfman
  - Chris Sarandon
  - Catherine O'Hara
image: https://m.media-amazon.com/images/M/MV5BNmYxOTAzZWYtOGI3Yi00ODc3LTk5ZjYtZTY0MzVkZTg3YmRiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10/29/1993
watched: true
lastWatched: ""
personalRating: 0
tags:
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
