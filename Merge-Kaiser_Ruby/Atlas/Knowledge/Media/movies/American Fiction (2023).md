---
type: movie
subType: ""
title: American Fiction
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt23561236/
id: tt23561236
plot: A novelist who's fed up with the establishment profiting from Black entertainment uses a pen name to write a book that propels him into the heart of the hypocrisy and madness he claims to disdain.
genres:
  - Comedy
  - Drama
director:
  - Cord Jefferson
onlineRating: 7.5
actors:
  - Jeffrey Wright
  - Skyler Wright
  - John Ales
image: https://m.media-amazon.com/images/M/MV5BM2I4ZTZhOTMtZDQ0Ni00MzI5LWE2YjktNzc0NjdkOGJiZjYzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/22/2023
watched: true
lastWatched: ""
personalRating: 8.6
category:
  - "[[Film]]"
tags:
  - film/drama
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
