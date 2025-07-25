---
type: movie
subType: ""
title: Minority Report
year: "2002"
director:
  - "[[Steven Spielberg]]"
source: https://www.imdb.com/title/tt0181689/
plot: John works with the PreCrime police which stop crimes before they take place, with the help of three 'PreCogs' who can foresee crimes. Events ensue when John finds himself framed for a future murder.
genres:
  - Action
  - Crime
  - Mystery
onlineRating: 7.6
actors:
  - Colin Farrell
  - Samantha Morton
  - "[[Tom Cruise]]"
image: https://m.media-amazon.com/images/M/MV5BYTdmNzM3YzItZTRkYS00MTY5LTg4ZmItNjFmNTk2N2Q2NmNlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/21/2002
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
interest: 6.5
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
if (!dv.current().released) {
	dv.span('**Not released** The movie is not yet released.')
}
```

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`