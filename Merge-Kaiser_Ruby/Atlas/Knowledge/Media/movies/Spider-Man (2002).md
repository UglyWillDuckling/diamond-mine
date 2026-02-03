---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Spider-Man
year: "2002"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0145487/
id: tt0145487
plot: After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - "[[Sam Raimi]]"
onlineRating: 7.4
actors:
  - Tobey Maguire
  - Kirsten Dunst
  - Willem Dafoe
image: https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05/03/2002
watched: true
lastWatched: ""
personalRating: 8
tags:
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
