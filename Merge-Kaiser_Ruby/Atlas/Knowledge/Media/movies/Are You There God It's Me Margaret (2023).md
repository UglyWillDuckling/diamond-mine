---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Are You There God? It's Me, Margaret.
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt9185206/
id: tt9185206
plot: Eleven-year-old Margaret moves from the city to the suburbs and starts to contemplate everything about life, friendship and adolescence. She relies on her mother, Barbara, who offers loving support, and her grandmother, Sylvia.
genres:
  - Comedy
  - Drama
  - Family
director:
  - Kelly Fremon Craig
onlineRating: 7.3
actors:
  - Abby Ryder Fortson
  - Rachel McAdams
  - Kathy Bates
image: https://m.media-amazon.com/images/M/MV5BMTY5ZTY1MTQtOGNjOC00ZDRkLWEyNGItNGEyYjJiMzM0MWEwXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 04/28/2023
watched: true
lastWatched: ""
personalRating: 7.7
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
