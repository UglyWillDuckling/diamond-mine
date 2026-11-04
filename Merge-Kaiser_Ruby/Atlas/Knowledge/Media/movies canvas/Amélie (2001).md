---
type: movie
subType: ""
title: Amélie
year: "2001"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0211915/
id: tt0211915
plot: Despite being caught in her imaginative world, young waitress Amelie decides to help people find happiness. Her quest to spread joy leads her on a journey during which she finds true love.
genres:
  - Comedy
  - Romance
director:
  - Jean-Pierre Jeunet
onlineRating: 8.3
actors:
  - Audrey Tautou
  - Mathieu Kassovitz
  - Rufus
image: https://m.media-amazon.com/images/M/MV5BOTNmYzY0MWQtZGZmNy00Y2Y4LWFmMDQtMTZjYTdiYzEwZGQ2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 02/08/2002
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