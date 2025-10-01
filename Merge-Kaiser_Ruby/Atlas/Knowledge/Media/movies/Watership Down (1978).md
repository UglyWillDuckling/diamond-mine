---
type: movie
subType: ""
title: Watership Down
year: "1978"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0078480/
id: tt0078480
plot: Hoping to escape destruction by human developers and save their community, a colony of rabbits, led by Hazel and Fiver, seek out a safe place to set up a new warren.
genres:
  - Animation
  - Adventure
  - Drama
director:
  - Martin Rosen
  - John Hubley
onlineRating: 7.5
actors:
  - John Hurt
  - Richard Briers
  - Ralph Richardson
image: https://m.media-amazon.com/images/M/MV5BMTM5MTYzMTItYjJhZi00ZDQxLWI3NzYtMjQ2ZWVlYjVlMjMzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 01.11.1978
watched: false
lastWatched: ""
personalRating: 0
tags:
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