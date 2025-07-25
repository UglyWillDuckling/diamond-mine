---
type: movie
subType: ""
title: Mad Max Beyond Thunderdome
englishTitle: Mad Max Beyond Thunderdome
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0089530/
id: tt0089530
plot: After being exiled from the most advanced town in post-apocalyptic Australia, a drifter travels with a group of abandoned children to rebel against the town's queen.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - George Miller
  - George Ogilvie
writer:
  - Terry Hayes
  - George Miller
  - Byron Kennedy
studio:
  - N/A
duration: 107 min
onlineRating: 6.2
actors:
  - Mel Gibson
  - Tina Turner
  - Bruce Spence
image: https://m.media-amazon.com/images/M/MV5BMTNkOGZjMGMtNDI4Zi00ZDBjLWJhY2UtMzA2YWI1ZGI5OWVhXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: []
premiere: 07/10/1985
watched: true
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
plan-to-watch: false
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
**Producer**: `$= dv.current().producer`