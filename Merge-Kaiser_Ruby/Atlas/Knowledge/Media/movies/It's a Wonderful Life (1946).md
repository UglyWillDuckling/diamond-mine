---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: It's a Wonderful Life
year: "1946"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0038650/
id: tt0038650
plot: An angel is sent from Heaven to help a desperately frustrated businessman see the value of his own life.
genres:
  - Drama
  - Family
  - Fantasy
director:
  - Frank Capra
onlineRating: 8.6
actors:
  - James Stewart
  - Donna Reed
  - Lionel Barrymore
image: https://m.media-amazon.com/images/M/MV5BMDM4OWFhYjEtNTE5Yy00NjcyLTg5N2UtZDQwNDZlYjlmNDU5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 01/07/1947
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
  - flm/christmas
selected: false
movie_status:
  - plan_to_watch
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
