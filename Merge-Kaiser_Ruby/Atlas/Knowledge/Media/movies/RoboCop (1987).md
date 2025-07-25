---
type: movie
subType: ""
title: RoboCop
year: "1987"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0093870/
id: tt0093870
plot: In a dystopian, crime-ridden Detroit, Michigan, young police officer Alex Murphy is brutally murdered by a ruthless gang, only to be resurrected by a powerful corporation as the cyborg RoboCop, who soon seeks revenge on his killers.
genres:
  - Action
  - Crime
  - Sci-Fi
director:
  - Paul Verhoeven
onlineRating: 7.6
actors:
  - Peter Weller
  - Nancy Allen
  - Dan O'Herlihy
image: https://m.media-amazon.com/images/M/MV5BZWM1YzRhODktZDE1MC00NzBlLTk0NGMtOGNhZDQyMmJiZGFiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/17/1987
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
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