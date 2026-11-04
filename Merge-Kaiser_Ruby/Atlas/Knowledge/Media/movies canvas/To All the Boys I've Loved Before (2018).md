---
type: movie
subType: ""
title: To All the Boys I've Loved Before
year: "2018"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt3846674/
id: tt3846674
plot: A teenage girl's secret love letters are exposed and wreak havoc on her love life.
genres:
  - Comedy
  - Drama
  - Romance
director:
  - Susan Johnson
onlineRating: 7
actors:
  - Lana Condor
  - Noah Centineo
  - Janel Parrish
image: https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_SX300.jpg
released: true
premiere: 08/17/2018
watched: true
lastWatched: ""
personalRating: 8
tags:
  - film
  - film/comfort
  - film/comedy
  - film/romance
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