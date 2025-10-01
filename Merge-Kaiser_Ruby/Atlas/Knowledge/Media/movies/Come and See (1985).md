---
type: movie
subType: ""
title: Come and See
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0091251/
id: tt0091251
plot: After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.
genres:
  - Drama
  - Thriller
  - War
director:
  - Elem Klimov
onlineRating: 8.3
actors:
  - Aleksey Kravchenko
  - Olga Mironova
  - Liubomiras Laucevicius
image: https://m.media-amazon.com/images/M/MV5BNDlkZmVkZDAtZGFmMS00OWIzLWJkY2YtNWE5NjNhNjhiZGE3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03.09.1985
watched: false
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