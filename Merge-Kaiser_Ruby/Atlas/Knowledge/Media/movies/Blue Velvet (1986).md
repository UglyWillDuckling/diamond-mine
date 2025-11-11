---
type: movie
subType: ""
title: Blue Velvet
year: "1986"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0090756/
id: tt0090756
plot: The discovery of a severed human ear found in a field leads a young man on an investigation related to a beautiful, mysterious nightclub singer and a group of psychopathic criminals who have kidnapped her child.
genres:
  - Crime
  - Drama
  - Mystery
director:
  - David Lynch
onlineRating: 7.7
actors:
  - Isabella Rossellini
  - Kyle MacLachlan
  - Dennis Hopper
image: https://m.media-amazon.com/images/M/MV5BNzkwZGUyYjQtM2QyOC00MTBjLWE0NGYtMTZmOGM5MjI0Mzg0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 23.10.1986
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch:
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