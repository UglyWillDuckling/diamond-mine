---
type: movie
subType: ""
title: Lost in Translation
englishTitle: Lost in Translation
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0335266/
id: tt0335266
plot: A fading movie star falls for a lonely young woman in Tokyo.
genres:
  - Comedy
  - Drama
director:
  - Sofia Coppola
writer:
  - Sofia Coppola
duration: 102 min
onlineRating: 7.7
actors:
  - Bill Murray
  - Scarlett Johansson
  - Giovanni Ribisi
image: https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_SX300.jpg
released: true
premiere: 10/03/2003
watched: true
lastWatched: ""
personalRating: 0
tags:
  - film
  - 2000s
---

`$= '![Image|360](' + dv.current().image + ')'`

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
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`