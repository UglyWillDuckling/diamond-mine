---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Dirty Dancing
year: "1987"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0092890/
id: tt0092890
image: https://m.media-amazon.com/images/M/MV5BZmIwZjA1NzUtNTA0OS00OWMyLWE5MzctM2RjOWYxZjQyZDdmXkEyXkFqcGc@._V1_SX600.jpg
japaneseTitle: ""
plot: Spending the summer at a Catskills resort with her family, Frances "Baby" Houseman falls in love with the camp's dance instructor, Johnny Castle.
genres:
  - Drama
  - Music
  - Romance
director:
  - Emile Ardolino
onlineRating: 7.1
actors:
  - Patrick Swayze
  - Jennifer Grey
  - Jerry Orbach
released: true
country:
  - United States
boxOffice: $64,577,242
ageRating: PG-13
premiere: 08/21/1987
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
