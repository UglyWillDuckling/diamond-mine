---
type: movie
subType: ""
title: Hellraiser
year: "1987"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0093177/
id: tt0093177
plot: A woman discovers the newly resurrected, partially formed, body of her brother-in-law and lover. She starts killing for him to revitalize his body and escape the demonic beings that are pursuing him after he escaped their underworld.
genres:
  - Horror
  - Thriller
director:
  - "[[Clive Barker]]"
onlineRating: 6.9
actors:
  - Andrew Robinson
  - Clare Higgins
  - Ashley Laurence
image: https://m.media-amazon.com/images/M/MV5BZGI4MzkzNzQtYjA3MC00ZjE1LWI0NWUtMDdjNWQ3OTgxZTkwXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09/18/1987
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