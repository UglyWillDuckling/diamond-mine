---
type: movie
subType: ""
title: A Clockwork Orange
year: "1971"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0066921/
id: tt0066921
plot: Alex DeLarge and his droogs barbarize a decaying near-future.
genres:
  - Crime
  - Sci-Fi
director:
  - "[[Stanley Cubrick]]"
onlineRating: 8.2
actors:
  - Malcolm McDowell
  - Patrick Magee
  - Michael Bates
image: https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg
released: true
premiere: 02.02.1972
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
plan-to-watch: true
interest: 8
---

`$= '![Image|360](' + dv.current().image + ')'`

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