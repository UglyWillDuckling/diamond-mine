---
type: movie
subType: ""
title: Hot Fuzz
year: "2007"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0425112/
id: tt0425112
plot: An overachieving London police sergeant is transferred to a village where the easygoing officers object to his fervor for regulations, all while a string of grisly murders strikes the town.
genres:
  - Action
  - Comedy
  - Mystery
director:
  - "[[Edgar Wright]]"
onlineRating: 7.8
actors:
  - Simon Pegg
  - Nick Frost
  - Martin Freeman
image: https://m.media-amazon.com/images/M/MV5BYjFkZTkzZTQtNjM1ZS00M2EyLWE3MTAtMmY5Yzk0NTc0NDc3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 20.04.2007
watched: true
lastWatched: ""
personalRating: 0
plan-to-watch: true
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