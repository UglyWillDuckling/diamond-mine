---
type: movie
subType: ""
title: The Secret of NIMH
year: "1982"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0084649/
id: tt0084649
plot: To save her ill son, a field mouse must seek the aid of a colony of rats, with whom she has a deeper link than she suspected.
genres:
  - Animation
  - Adventure
  - Drama
director:
  - Don Bluth
onlineRating: 7.5
actors:
  - Elizabeth Hartman
  - Derek Jacobi
  - Dom DeLuise
image: https://m.media-amazon.com/images/M/MV5BODAxNzMwYTktZjAyMi00NmNhLWJjMzAtMjkzZjRkYjY2Nzk2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 16.07.1982
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
interest: 7.45
selected: false
movie_status:
  - plan_to_watch
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