---
type: movie
subType:
title: "Mad Max: Fury Road"
englishTitle: "Mad Max: Fury Road"
year: "2015"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1392190/
id: tt1392190
plot: In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - George Miller
writer:
  - George Miller
  - Brendan McCarthy
  - Nick Lathouris
studio:
  - N/A
duration: 120 min
onlineRating: 8.1
actors:
  - Tom Hardy
  - Charlize Theron
  - Nicholas Hoult
image: https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
premiere: 05/15/2015
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
plan-to-watch: false
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
**Producer**: `$= dv.current().producer`