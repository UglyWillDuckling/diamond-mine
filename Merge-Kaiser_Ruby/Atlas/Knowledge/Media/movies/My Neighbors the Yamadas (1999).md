---
category:
  - "[[Film]]"
  - "[[Anime]]"
  - "[[Animation]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: My Neighbors the Yamadas
year: "1999"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0206013/
id: tt0206013
plot: The life and misadventures of a family in contemporary Japan.
genres:
  - Animation
  - Comedy
  - Family
director:
  - Isao Takahata
onlineRating: 7.1
actors:
  - Yukiji Asaoka
  - Tôru Masuoka
  - Masako Araki
image: https://m.media-amazon.com/images/M/MV5BMjI5N2I4YmYtOWUwNS00M2RmLWE0ZWItYzdiNDllMmUwMjY3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/22/2000
watched: false
lastWatched: ""
personalRating: 8.3
tags:
  - film/animated
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
