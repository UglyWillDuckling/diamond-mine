---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Spider-Man: Homecoming"
year: "2017"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt2250912/
id: tt2250912
plot: Peter Parker tries to stop Adrian 'The Vulture' Toomes from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - Jon Watts
onlineRating: 7.4
actors:
  - Tom Holland
  - Michael Keaton
  - Robert Downey Jr.
image: https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_SX300.jpg
released: true
premiere: 07/07/2017
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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
