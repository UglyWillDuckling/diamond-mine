---
type: movie
subType: ""
title: Hunt for the Wilderpeople
year: "2016"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt4698684/
id: tt4698684
plot: A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.
genres:
  - Adventure
  - Comedy
  - Drama
director:
  - Taika Waititi
onlineRating: 7.8
actors:
  - Sam Neill
  - Julian Dennison
  - Rima Te Wiata
image: https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SX300.jpg
released: true
premiere: 07/01/2016
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
  - film/comfort
category:
  - "[[Film]]"
  - "[[Comfort]]"
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

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Genres**:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```

```dataviewjs
if (!dv.current().released) {
	dv.span('**Not released** The movie is not yet released.')
}
```

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`