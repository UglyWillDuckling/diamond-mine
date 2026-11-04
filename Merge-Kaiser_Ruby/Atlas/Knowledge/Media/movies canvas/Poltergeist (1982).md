---
type: movie
subType: ""
title: Poltergeist
year: "1982"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0084516/
id: tt0084516
plot: A family's home becomes the center of paranormal activity that opens a doorway to the "other side." With help, they must cross over to get their daughter back.
genres:
  - Horror
  - Thriller
director:
  - Tobe Hooper
onlineRating: 7.3
actors:
  - JoBeth Williams
  - Heather O'Rourke
  - Craig T. Nelson
image: https://m.media-amazon.com/images/M/MV5BNzY4MGZkYjgtYTQ2YS00YTlhLWEyMjAtMjZhYzczNTRlM2ZmXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/04/1982
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
---

`$= '![Image|200](' + dv.current().image + ')'`

# `$= dv.cur


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