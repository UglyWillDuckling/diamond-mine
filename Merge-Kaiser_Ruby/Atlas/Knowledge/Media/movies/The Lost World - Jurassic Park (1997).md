---

type: movie
subType: ""
title: "The Lost World: Jurassic Park"
year: "1997"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0119567/
id: tt0119567
plot: A research team is sent to the Jurassic Park Site B island to study the dinosaurs there, while an InGen team approaches with another agenda.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - Steven Spielberg
onlineRating: 6.6
actors:
  - Jeff Goldblum
  - Julianne Moore
  - Pete Postlethwaite
image: https://m.media-amazon.com/images/M/MV5BMGI3NDg5N2ItZGIyZi00ZWNkLWFlODUtZDA1Y2Q1M2U4NGM2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 22.05.1997
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

**Premiered**: `$= dv.current().premiere`