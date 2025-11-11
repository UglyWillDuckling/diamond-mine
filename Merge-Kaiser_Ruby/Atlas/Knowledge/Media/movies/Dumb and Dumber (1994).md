---
type: movie
subType: ""
title: Dumb and Dumber
year: "1994"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0109686/
id: tt0109686
plot: After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.
genres:
  - Comedy
director:
  - Peter Farrelly
  - Bobby Farrelly
onlineRating: 7.3
actors:
  - Jim Carrey
  - Jeff Daniels
  - Lauren Holly
  - "[[Jim Carrey]]"
  - "[[Jeff Daniels]]"
image: https://m.media-amazon.com/images/M/MV5BNGQxZDA1MmMtYWQ1Ni00NTJmLTljMjgtZWVmODllODVhMzgyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/16/1994
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
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