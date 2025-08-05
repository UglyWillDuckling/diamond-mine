---
type: movie
subType: ""
title: Catch Me If You Can
year: "2002"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0264464/
id: tt0264464
plot: Barely 17 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.
genres:
  - Biography
  - Crime
  - Drama
director:
  - "[[Steven Spielberg]]"
onlineRating: 8.1
actors:
  - Leonardo DiCaprio
  - Tom Hanks
  - Christopher Walken
  - "[[Leonardo DiCaprio]]"
  - "[[Tom Hanks]]"
image: https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg
released: true
premiere: 12/25/2002
watched: true
lastWatched: ""
personalRating: 9
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