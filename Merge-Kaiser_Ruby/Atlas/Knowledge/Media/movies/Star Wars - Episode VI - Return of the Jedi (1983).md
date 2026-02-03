---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Star Wars: Episode VI - Return of the Jedi"
year: "1983"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0086190/
id: tt0086190
plot: After rescuing Han Solo from Jabba the Hutt, the Rebel Alliance attempts to destroy the second Death Star while Luke struggles to help Darth Vader back from the dark side.
genres:
  - Action
  - Adventure
  - Fantasy
director:
  - Richard Marquand
onlineRating: 8.3
actors:
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
image: https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05/25/1983
watched: false
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
