---
type: movie
subType: ""
title: The Mask
year: "1994"
premiere:
url: https://www.imdb.com/title/tt0110475/
plot: Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.
genres:
  - Comedy
  - Crime
  - Fantasy
director:
  - "[[Chuck Russell]]"
onlineRating: 7
actors:
  - Peter Riegert
  - "[[Jim Carrey]]"
  - "[[Cameron Diaz]]"
image: https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_SX300.jpg
released: true
watched: true
lastWatched: ""
personalRating: 7.5
tags:
  - film
---

`$= '![Image|200](' + dv.current().image + ')'`

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