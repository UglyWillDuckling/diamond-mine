---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: From Up on Poppy Hill
year: "2011"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1798188/
id: tt1798188
plot: A group of Yokohama teens look to save their school's clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.
genres:
  - Animation
  - Comedy
  - Drama
director:
  - "[[Gorô Miyazaki]]"
onlineRating: 7.4
actors:
  - Sarah Bolger
  - Chris Noth
  - Anton Yelchin
image: https://m.media-amazon.com/images/M/MV5BMWVjMWRhMzYtOGRmMi00ODExLTk2M2YtZDhjNGY5OWQ5NDY4XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 16.07.2011
watched: false
lastWatched: ""
personalRating: 0
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

```dataviewjs
if (dv.current()['plan-to-watch']) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Premiered**: `$= dv.current().premiere`
