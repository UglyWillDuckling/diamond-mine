---
type: movie
subType: ""
title: "Gremlins 2: The New Batch"
year: "1990"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0099700/
id: tt0099700
plot: The Gremlins are back, and this time, they've taken control of a New York City media mogul's high-tech skyscraper.
genres:
  - Comedy
  - Fantasy
  - Horror
director:
  - Joe Dante
onlineRating: 6.4
actors:
  - Zach Galligan
  - Phoebe Cates
  - Howie Mandel
image: https://m.media-amazon.com/images/M/MV5BZWI2ZTI2ZjAtOWYyZS00ZmY2LWE4ZDYtNTdmNWMwZTFjNzZhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/15/1990
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film/comfort
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