---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Close-Up
year: "1990"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0100234/
id: tt0100234
plot: The true story of Hossain Sabzian, a cinephile who impersonated the director Mohsen Makhmalbaf to convince a family they would star in his so-called new film.
genres:
  - Biography
  - Crime
  - Drama
director:
  - Abbas Kiarostami
onlineRating: 8.2
actors:
  - Hossain Sabzian
  - Mohsen Makhmalbaf
  - Abolfazl Ahankhah
image: https://m.media-amazon.com/images/M/MV5BOTNlNWFiNTAtZTMxYS00NzgxLTlmOGYtZjY4NWVlNDlmZDJlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10/30/1991
watched: false
lastWatched: ""
personalRating: 0
tags:
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
