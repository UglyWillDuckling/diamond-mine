---
category:
  - "[[Film]]"
  - "[[Science Fiction]]"
plan-to-watch:
type: movie
subType: ""
title: "Dune: Part Two"
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt15239678/
id: tt15239678
plot: Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible fu...
genres:
  - Action
  - Adventure
  - Drama
director:
  - Denis Villeneuve
onlineRating: 8.4
actors:
  - Timothée Chalamet
  - Zendaya
  - Rebecca Ferguson
image: https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03/01/2024
watched: true
lastWatched: ""
personalRating: 7.3
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
