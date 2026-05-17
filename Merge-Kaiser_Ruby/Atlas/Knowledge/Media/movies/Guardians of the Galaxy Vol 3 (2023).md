---
category:
  - "[[Film]]"
interest:
type: movie
subType: ""
title: Guardians of the Galaxy Vol. 3
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt6791350/
id: tt6791350
plot: Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.
genres:
  - Action
  - Adventure
  - Comedy
director:
  - "[[James Gunn]]"
onlineRating: 7.9
actors:
  - Chris Pratt
  - Chukwudi Iwuji
  - Bradley Cooper
image: https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05/05/2023
watched: true
lastWatched: ""
personalRating: 8.3
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
