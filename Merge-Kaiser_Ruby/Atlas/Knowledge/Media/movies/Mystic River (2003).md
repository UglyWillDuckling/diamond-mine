---
type: movie
subType: ""
title: Mystic River
englishTitle: Mystic River
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0327056/
id: tt0327056
plot: The tragic murder of a 19-year-old girl reunites three childhood friends still living in Boston--the victim's gangster father, a detective, and the disturbed man they both suspect of killing her.
genres:
  - Crime
  - Drama
  - Mystery
director:
  - Clint Eastwood
  - "[[Clint Eastwood]]"
writer:
  - Brian Helgeland
  - Dennis Lehane
studio:
  - N/A
duration: 138 min
onlineRating: 7.9
actors:
  - Sean Penn
  - Tim Robbins
  - Kevin Bacon
image: https://m.media-amazon.com/images/M/MV5BMTIzNDUyMjA4MV5BMl5BanBnXkFtZTYwNDc4ODM3._V1_SX300.jpg
released: true
streamingServices:
premiere: 15.10.2003
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
plan-to-watch: true
---

`$= '![Image|360](' + dv.current().image + ')'`

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

The tragic murder of a 19-year-old girl reunites three childhood friends still living in [[Boston]]--the victim's gangster father, a detective, and the disturbed man they both suspect of killing her.