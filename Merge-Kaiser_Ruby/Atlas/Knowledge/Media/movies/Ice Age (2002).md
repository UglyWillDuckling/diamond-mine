---
category:
  - "[[Film]]"
  - "[[Animation]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Ice Age
year: "2002"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0268380/
id: tt0268380
plot: Manny the mammoth, Sid the loquacious sloth, and Diego the sabre-toothed tiger go on a comical quest to return a human baby back to his father, across a world on the brink of an ice age.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Chris Wedge
  - Carlos Saldanha
onlineRating: 7.5
actors:
  - Ray Romano
  - John Leguizamo
  - Denis Leary
image: https://m.media-amazon.com/images/M/MV5BMDBlYzU2OGMtOGJjNi00ZGZjLWIwNjMtYzdiZjkwYWNjZDljXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03/15/2002
watched: true
lastWatched: ""
personalRating: 7.8
tags:
  - film/animated
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
