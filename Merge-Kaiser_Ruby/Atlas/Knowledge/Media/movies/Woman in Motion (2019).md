---
category:
  - "[[Film]]"
type: movie
subType: ""
title: Woman in Motion
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt4512946/
id: tt4512946
plot: Nichelle Nichols' daunting task to launch a national blitz for NASA, recruiting 8,000 of the nation's best and brightest, including the trailblazing astronauts who became the first Black, Asian and Latino men and women to fly in s...
genres:
  - Documentary
  - Biography
director:
  - Todd Thompson
onlineRating: 8.7
actors:
  - Nichelle Nichols
  - George Takei
  - Walter Koenig
image: https://m.media-amazon.com/images/M/MV5BZTg3MTdmNWYtOWEyZC00NjI3LThhYzUtODZiOGYzYjA0ZDJmXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 02/16/2021
lastWatched: ""
watched: true
personalRating: 8.3
plan-to-watch: false
tags:
  - film
  - film/doc
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
