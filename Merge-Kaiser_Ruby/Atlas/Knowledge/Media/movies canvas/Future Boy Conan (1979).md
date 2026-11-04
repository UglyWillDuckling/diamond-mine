---
type: movie
subType: ""
title: Conan, the Boy in Future
year: "1979"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8942902/
id: tt8942902
plot: In the aftermath of a war fought by magnetic weapons which caused massive earthquakes, a young and spunky boy named Conan gets involved in a grand adventure. A condensed version of the TV series.
genres:
  - Animation
  - Adventure
  - Drama
director:
  - Hayao Miyazaki
  - Hajime Satô
onlineRating: 5.8
actors:
  - Masatô Ibu
  - Takuzô Kamiyama
  - Iemasa Kayumi
image: https://m.media-amazon.com/images/M/MV5BYjM2YmUzMjEtOTgyMy00NWFmLWJjZWUtNGI4MTRmOTZhODRhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10/15/1979
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film/animated
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