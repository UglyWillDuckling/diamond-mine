---
category:
  - "[[Film]]"
type: movie
subType: ""
title: Killers of the Flower Moon
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt5537002/
id: tt5537002
plot: When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.
genres:
  - Crime
  - Drama
  - History
director:
  - Martin Scorsese
onlineRating: 7.5
actors:
  - Leonardo DiCaprio
  - Robert De Niro
  - Lily Gladstone
image: https://m.media-amazon.com/images/M/MV5BZWY5ZDVjNTUtODI5Yy00MjFhLWEyM2EtYzZjM2VjZTI0MTBjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10/20/2023
watched: true
lastWatched: ""
personalRating: 9
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
