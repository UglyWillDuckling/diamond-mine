---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Time of the Gypsies
year: "1988"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0097223/
id: tt0097223
plot: In this luminous tale set in the area around Sarajevo and in Italy, Perhan, an engaging young Romany (gypsy) with telekinetic powers, is seduced by the quick-cash world of petty crime, which threatens to destroy him and those he l...
genres:
  - Comedy
  - Crime
  - Drama
director:
  - Emir Kusturica
onlineRating: 8.1
actors:
  - Davor Dujmovic
  - Bora Todorovic
  - Ljubica Adzovic
image: https://m.media-amazon.com/images/M/MV5BOTRkOTAzMzQtN2JjYi00YmQzLTg1YTYtMzk0ZWQ5N2Q3MDIzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09.02.1990
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
