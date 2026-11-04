---
type: movie
subType: ""
title: Matilda
year: "1996"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0117008/
id: tt0117008
plot: A girl gifted with a keen intellect and psychic powers uses both to get even with her callous family and free her kindly schoolteacher from the tyrannical grip of a sadistic headmistress.
genres:
  - Comedy
  - Family
  - Fantasy
director:
  - Danny DeVito
onlineRating: 7
actors:
  - Danny DeVito
  - Rhea Perlman
  - Mara Wilson
image: https://m.media-amazon.com/images/M/MV5BYWE3ZDMzMmEtODgwNi00NzMxLThkYWItMTAzMWUyMzI1NDQ1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 08/02/1996
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