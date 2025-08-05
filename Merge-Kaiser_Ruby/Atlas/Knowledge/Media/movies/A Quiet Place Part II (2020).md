---

type: movie
subType: ""
title: A Quiet Place Part II
year: "2020"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8332922/
id: tt8332922
plot: Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.
genres:
  - Drama
  - Horror
  - Sci-Fi
director:
  - John Krasinski
onlineRating: 7.2
actors:
  - Emily Blunt
  - Millicent Simmonds
  - Cillian Murphy
image: https://m.media-amazon.com/images/M/MV5BNjRiYjk4ZmItNGQ5NS00MmRhLTk4Y2EtMGQ1MTYxZWJhYjU0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05/28/2021
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
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