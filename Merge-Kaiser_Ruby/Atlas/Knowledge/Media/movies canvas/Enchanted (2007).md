---
type: movie
subType: ""
title: Enchanted
year: "2007"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0461770/
id: tt0461770
plot: A young maiden in a land called Andalasia, who is prepared to be wed, is sent away to New York City by an evil Queen, where she falls in love with a lawyer.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Kevin Lima
onlineRating: 7.1
actors:
  - Amy Adams
  - Susan Sarandon
  - James Marsden
image: https://m.media-amazon.com/images/M/MV5BMjE4NDQ2Mjc0OF5BMl5BanBnXkFtZTcwNzQ2NDE1MQ@@._V1_SX300.jpg
released: true
premiere: 11/21/2007
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film/comfort
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