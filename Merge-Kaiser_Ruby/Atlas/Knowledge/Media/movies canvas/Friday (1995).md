---
type: movie
subType: ""
title: Friday
year: "1995"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0113118/
id: tt0113118
plot: It's Friday, and Craig and Smokey must come up with $200 they owe a local bully or there won't be a Saturday.
genres:
  - Comedy
  - Drama
director:
  - F. Gary Gray
onlineRating: 7.2
actors:
  - Ice Cube
  - Chris Tucker
  - Nia Long
image: https://m.media-amazon.com/images/M/MV5BMWI3MmM2MTItN2MxZS00Y2NhLWE5ZWEtMzU3YWNiNmU3NmFmXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 04/26/1995
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