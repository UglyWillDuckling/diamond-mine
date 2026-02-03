---
type: movie
subType: ""
title: Pitch Perfect
year: "2012"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1981677/
id: tt1981677
plot: Beca, a freshman at Barden University, is cajoled into joining The Bellas, her school's all-girls singing group. Injecting some much needed energy into their repertoire, The Bellas take on their male rivals in a campus competition.
genres:
  - Comedy
  - Music
  - Romance
director:
  - Jason Moore
onlineRating: 7.1
actors:
  - Anna Kendrick
  - Brittany Snow
  - Rebel Wilson
image: https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_SX300.jpg
released: true
premiere: 10/05/2012
watched: true
lastWatched: ""
personalRating: 0
tags:
  - film/comedy
  - film/comfort
plan-to-watch: true
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