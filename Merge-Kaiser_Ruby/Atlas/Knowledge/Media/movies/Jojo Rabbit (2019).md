---
type: movie
subType: ""
title: Jojo Rabbit
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt2584384/
id: tt2584384
plot: A young German boy in the Hitler Youth, whose hero and imaginary friend is the country's dictator, is shocked to discover that his mother is hiding a Jewish girl in their home.
genres:
  - Comedy
  - Drama
  - War
director:
  - Taika Waititi
onlineRating: 7.9
actors:
  - Roman Griffin Davis
  - Thomasin McKenzie
  - Scarlett Johansson
image: https://m.media-amazon.com/images/M/MV5BYmFmNmUyMjYtZTFjNS00OWQyLThhZmMtMGZkYTQ3YjY0ZDQ1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/08/2019
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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