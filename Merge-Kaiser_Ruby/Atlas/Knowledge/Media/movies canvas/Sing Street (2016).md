---
type: movie
subType: ""
title: Sing Street
year: "2016"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt3544112/
id: tt3544112
plot: A young lad notices a beautiful girl who begins to occupy his thoughts. While struggling with poverty, personal relationships and life's woes, he starts a band, hoping to catch her attention.
genres:
  - Comedy
  - Drama
  - Music
director:
  - John Carney
onlineRating: 7.9
actors:
  - Ferdia Walsh-Peelo
  - Aidan Gillen
  - Maria Doyle Kennedy
image: https://m.media-amazon.com/images/M/MV5BMjEzODA3MDcxMl5BMl5BanBnXkFtZTgwODgxNDk3NzE@._V1_SX300.jpg
released: true
premiere: 03/17/2016
watched: true
lastWatched: ""
personalRating: 8
tags:
  - film
  - film/comfort
  - film/comedy
---


> [!info] Cover
> Contents
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