---
type: movie
subType: ""
title: The World's End
year: "2013"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1213663/
id: tt1213663
plot: Five friends who reunite in an attempt to top their epic pub crawl from twenty years earlier unwittingly become humanity's only hope for survival.
genres:
  - Action
  - Comedy
  - Sci-Fi
director:
  - Edgar Wright
onlineRating: 6.9
actors:
  - Simon Pegg
  - Nick Frost
  - Martin Freeman
image: https://m.media-amazon.com/images/M/MV5BNzA1MTk1MzY0OV5BMl5BanBnXkFtZTgwNjkzNTUwMDE@._V1_SX300.jpg
released: true
premiere: 08/23/2013
watched: true
lastWatched: ""
personalRating: 8.1
tags:
  - film/comfort
  - film/comedy
plan-to-watch: true
interest: 7.9
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