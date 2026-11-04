---

type: movie
subType: ""
title: Men in Black
year: "1997"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0119654/
id: tt0119654
plot: James, an NYC cop, is hired by Agent K of a secret government agency that monitors extraterrestrial life on Earth. Together, they must recover an item that has been stolen by an intergalactic villain.
genres:
  - Action
  - Adventure
  - Comedy
director:
  - Barry Sonnenfeld
onlineRating: 7.3
actors:
  - Tommy Lee Jones
  - Will Smith
  - Linda Fiorentino
image: https://m.media-amazon.com/images/M/MV5BZmQ0YTdhYzEtMjIxZC00MGFiLTlmNjktZmFlOWE2M2QxOTRhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/02/1997
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
---

`$= '![Image|200](' + dv.current().image + ')'`

> [!NOTE] Title
> Contents

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