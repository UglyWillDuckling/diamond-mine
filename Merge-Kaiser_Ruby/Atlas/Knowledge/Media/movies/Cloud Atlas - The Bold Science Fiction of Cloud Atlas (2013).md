---
type: movie
title: "Cloud Atlas: The Bold Science Fiction of Cloud Atlas"
englishTitle: "Cloud Atlas: The Bold Science Fiction of Cloud Atlas"
year: "2013"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt4046644/
id: tt4046644
plot: N/A
genres:
  - Documentary
  - Short
director:
  - Josh Oreck
onlineRating: 8.2
actors:
  - N/A
image: https://m.media-amazon.com/images/M/MV5BMGU0ZDMzYzMtNTFlMi00ZmE1LWIxNWYtYjhmM2Q5NTRmYTI0XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 14.05.2013
watched: true
lastWatched: ""
personalRating: 7
tags:
  - mediaDB/tv/movie
  - film
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