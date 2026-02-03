---
category:
  - "[[Film]]"
  - "[[Fiction]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "The Lord of the Rings: The Return of the King"
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0167260/
id: tt0167260
plot: Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.
genres:
  - Adventure
  - Drama
  - Fantasy
director:
  - Peter Jackson
onlineRating: 9
actors:
  - Elijah Wood
  - Viggo Mortensen
  - Ian McKellen
image: https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/17/2003
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
