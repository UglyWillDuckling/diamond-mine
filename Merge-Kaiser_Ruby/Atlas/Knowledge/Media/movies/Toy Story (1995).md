---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Toy Story
year: "1995"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0114709/
id: tt0114709
plot: A cowboy doll is profoundly jealous when a new spaceman action figure supplants him as the top toy in a boy's bedroom. When circumstances separate them from their owner, the duo have to put aside their differences to return to him.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - John Lasseter
onlineRating: 8.3
actors:
  - Tom Hanks
  - Tim Allen
  - Don Rickles
image: https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/22/1995
watched: true
lastWatched: ""
personalRating: 0
tags:
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

- `note: note` kada stigne DVD + CRT tv + DVD player ili sicno
