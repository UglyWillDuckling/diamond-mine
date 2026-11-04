---
type: movie
subType: ""
title: Booksmart
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1489887/
id: tt1489887
plot: On the eve of their high-school graduation, two academic superstars and best friends realize they should have worked less and played more. Determined not to fall short of their peers, the girls try to cram four years of fun into o...
genres:
  - Comedy
director:
  - Olivia Wilde
onlineRating: 7.1
actors:
  - Kaitlyn Dever
  - Beanie Feldstein
  - Jessica Williams
image: https://m.media-amazon.com/images/M/MV5BMjEzMjcxNjA2Nl5BMl5BanBnXkFtZTgwMjAxMDM2NzM@._V1_SX300.jpg
released: true
premiere: 05/24/2019
watched: false
lastWatched: ""
personalRating: 7.4
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