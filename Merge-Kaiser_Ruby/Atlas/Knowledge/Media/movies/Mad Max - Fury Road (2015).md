---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: true
type: movie
subType: ""
title: "Mad Max: Fury Road"
year: "2015"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1392190/
id: tt1392190
plot: In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - George Miller
onlineRating: 8.1
actors:
  - Tom Hardy
  - Charlize Theron
  - Nicholas Hoult
image: https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 15.05.2015
watched: true
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
