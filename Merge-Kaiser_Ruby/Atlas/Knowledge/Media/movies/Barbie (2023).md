---
category:
  - "[[Film]]"
plan-to-watch: false
type: movie
subType: ""
title: Barbie
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1517268/
id: tt1517268
plot: Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the outside world, they soon discover the joys and perils of living among regular humans.
genres:
  - Adventure
  - Comedy
  - Fantasy
director:
  - "[[Greta Gerwig]]"
onlineRating: 6.8
actors:
  - "[[Margot Robbie]]"
  - Issa Rae
  - Kate McKinnon
image: https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/21/2023
watched: true
lastWatched: ""
personalRating: 8.1
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

___
Barbie is the latest film coming from Greta Gerwig. It it is a deep dive into the world of barbie, but even more so, our world. It examines in depth the stories we tell in order to convince ourselves and the world around us that everything is ok.