---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Rise of the Planet of the Apes
year: "2011"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1318514/
id: tt1318514
plot: A substance designed to help the brain repair itself gives advanced intelligence to a chimpanzee who leads an ape uprising.
genres:
  - Action
  - Drama
  - Sci-Fi
director:
  - Rupert Wyatt
onlineRating: 7.6
actors:
  - James Franco
  - Andy Serkis
  - Freida Pinto
image: https://m.media-amazon.com/images/M/MV5BMjllODU1NDItODU1Ni00N2Y2LTg4Y2ItOTJjMTczZDliN2FhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05.08.2011
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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
