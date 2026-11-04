---
type: movie
subType: ""
title: The Hangover
year: "2009"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1119646/
id: tt1119646
plot: Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. They must make their way around the city in order to find their friend in time for his wedding.
genres:
  - Comedy
director:
  - Todd Phillips
onlineRating: 7.7
actors:
  - Zach Galifianakis
  - Bradley Cooper
  - Justin Bartha
  - "[[Zach Galifianakis]]"
  - "[[Bradley Cooper]]"
  - "[[Alan Tudyk]]"
image: https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/05/2009
watched: true
lastWatched: ""
personalRating: 0
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