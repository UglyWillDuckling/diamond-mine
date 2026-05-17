---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: true
type: movie
subType: ""
title: How to Train Your Dragon
year: "2010"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0892769/
id: tt0892769
plot: A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.
genres:
  - Animation
  - Action
  - Adventure
director:
  - Dean DeBlois
  - Chris Sanders
onlineRating: 8.1
actors:
  - Jay Baruchel
  - Gerard Butler
  - Christopher Mintz-Plasse
image: https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg
released: true
premiere: 26.03.2010
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
