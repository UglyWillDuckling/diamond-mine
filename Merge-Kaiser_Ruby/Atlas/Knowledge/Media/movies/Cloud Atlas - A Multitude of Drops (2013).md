---
type: movie
title: "Cloud Atlas: A Multitude of Drops"
englishTitle: "Cloud Atlas: A Multitude of Drops"
year: "2013"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt4046780/
id: tt4046780
plot: N/A
genres:
  - Documentary
  - Short
director:
  - Josh Oreck
writer:
  - N/A
studio:
  - N/A
duration: 7 min
onlineRating: .nan
actors:
  - N/A
image: https://m.media-amazon.com/images/M/MV5BN2I5ODcxMGItYzE4Mi00NTU4LTgxODMtOWFlODc2MTljODk1XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 14.05.2013
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`