---
type: movie
subType: ""
title: Talk to Me
year: "2022"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt10638522/
id: tt10638522
plot: When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.
genres:
  - Horror
  - Thriller
director:
  - "[[Danny Philippou]]"
  - Michael Philippou
onlineRating: 7.1
actors:
  - Ari McCarthy
  - Hamish Phillips
  - Kit Erhart-Bruce
image: https://m.media-amazon.com/images/M/MV5BY2I2NzJmY2YtYTM3Ni00ZGJhLThkZTItODFhMzhlZjZkMDQ5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/28/2023
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