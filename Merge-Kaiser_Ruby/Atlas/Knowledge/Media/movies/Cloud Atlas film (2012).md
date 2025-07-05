---
title: Cloud Atlas
englishTitle: Cloud Atlas
year: "2012"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1371111/
plot: As souls are born and reborn, they renew their connections to one another throughout the ages.
genres:
  - Drama
  - Mystery
  - Sci-Fi
director:
  - Tom Tykwer
  - Lana Wachowski
  - Lilly Wachowski
writer:
  - David Mitchell
  - Lana Wachowski
  - Tom Tykwer
duration: 172 min
onlineRating: 7.4
actors:
  - Tom Hanks
  - Halle Berry
  - Hugh Grant
image: https://m.media-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg
released: true
premiere: 26.10.2012
watched: true
lastWatched: 2025-04-20
personalRating: 7.5
type: movie
tags:
  - film
---
`$= '![Image|360](' + dv.current().image + ')'`
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

**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`

____

`$= dv.current().plot`
