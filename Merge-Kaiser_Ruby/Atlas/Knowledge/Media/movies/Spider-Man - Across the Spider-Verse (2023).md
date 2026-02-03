---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Spider-Man: Across the Spider-Verse"
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt9362722/
id: tt9362722
plot: Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions. But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.
genres:
  - Animation
  - Action
  - Adventure
director:
  - Joaquim Dos Santos
  - Kemp Powers
  - Justin K. Thompson
onlineRating: 8.5
actors:
  - Shameik Moore
  - Hailee Steinfeld
  - Brian Tyree Henry
image: https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/02/2023
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
