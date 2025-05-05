---
type: movie
title: Tales from Earthsea
englishTitle: Tales from Earthsea
year: "2006"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0495596/
id: tt0495596
plot: In a mythical land, a man and a young boy investigate a series of unusual occurrences.
genres:
  - Animation
  - Adventure
  - Fantasy
director:
  - Gorô Miyazaki
writer:
  - Ursula K. Le Guin
  - Hayao Miyazaki
  - Gorô Miyazaki
studio:
  - N/A
duration: 115 min
onlineRating: 6.3
actors:
  - Timothy Dalton
  - Willem Dafoe
  - Mariska Hargitay
image: https://m.media-amazon.com/images/M/MV5BMmI0OWI1OGEtM2Y5Zi00MWViLWE5ZjctMDNlNGE1OWJiZTU1XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 07/29/2006
watched: true
lastWatched: 2025-04-22
personalRating: 4
tags:
  - mediaDB/tv/movie
---
`$= '![Image|200](' + dv.current().image + ')'`
# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.span(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched`);
} else {
	dv.span(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
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
**Premiered**: `$= dv.current().premiere`
