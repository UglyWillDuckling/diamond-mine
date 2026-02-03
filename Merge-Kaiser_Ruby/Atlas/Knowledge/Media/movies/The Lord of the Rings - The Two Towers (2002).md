---
category:
  - "[[Film]]"
  - "[[Fiction]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "The Lord of the Rings: The Two Towers"
year: "2002"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0167261/
id: tt0167261
plot: While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.
genres:
  - Adventure
  - Drama
  - Fantasy
director:
  - Peter Jackson
onlineRating: 8.8
actors:
  - Elijah Wood
  - Ian McKellen
  - Viggo Mortensen
image: https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/18/2002
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film/comfort
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

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
