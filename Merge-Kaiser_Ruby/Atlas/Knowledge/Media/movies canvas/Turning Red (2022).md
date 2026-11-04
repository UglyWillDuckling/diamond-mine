---
category:
  - "[[Film]]"
  - "[[Animation]]"
type: movie
subType: ""
title: Turning Red
year: "2022"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8097030/
id: tt8097030
plot: A thirteen-year-old girl named Mei Lee is torn between staying her mother's dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets overly excited Mei transforms into a giant re...
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Domee Shi
onlineRating: 6.9
actors:
  - Rosalie Chiang
  - Sandra Oh
  - Ava Morse
image: https://m.media-amazon.com/images/M/MV5BODY2NjExYmUtZTQ4NS00NzM2LWE2NWYtZWY2NGIyOTBmNzI3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03/11/2022
watched: true
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
