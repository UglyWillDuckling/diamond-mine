---
type: movie
title: The Big Lebowski
year: "1998"
url: https://www.imdb.com/title/tt0118715/
plot: Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.
genres:
  - Comedy
  - Crime
director:
  - Joel Coen
  - Ethan Coen
  - "[[Ethan Coen]]"
  - "[[Joel Coen]]]"
actors:
  - Jeff Bridges
  - John Goodman
  - Julianne Moore
  - "[[Jeff Bridges]]"
image: https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_SX300.jpg
onlineRating: 8.1
released: true
premiere: 03/06/1998
watched: false
lastWatched: ""
personalRating: 0
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