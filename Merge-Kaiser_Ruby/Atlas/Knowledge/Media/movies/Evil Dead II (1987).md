---
type: movie
subType: ""
title: Evil Dead II
year: "1987"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0092991/
id: tt0092991
plot: Ash Williams, the lone survivor of an earlier onslaught of flesh-possessing spirits, holes up in a cabin with a group of strangers while the demons continue their attack.
genres:
  - Comedy
  - Horror
director:
  - "[[Sam Raimi]]"
onlineRating: 7.7
actors:
  - Bruce Campbell
  - Sarah Berry
  - Dan Hicks
image: https://m.media-amazon.com/images/M/MV5BMGMxMWVhMzAtYWRlOS00YzY1LTlkYTQtYjU5ZDM4MGI1YWFjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03/13/1987
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
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