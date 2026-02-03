---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: My Father's Shadow
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt35695538/
id: tt35695538
plot: Two young brothers explore Lagos with their estranged father during the 1993 Nigerian election crisis, witnessing both the city's magnitude and their father's daily struggles as political unrest threatens their journey home.
genres:
  - Drama
director:
  - "[[Akinola Davies]]"
onlineRating: .nan
actors:
  - Sope Dirisu
  - Efon Wini
image: https://m.media-amazon.com/images/M/MV5BZDBjMmRkNDMtMjdkMi00MzkzLWEzYWEtYjVhMjcwMmM5ZTRiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: unknown
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
