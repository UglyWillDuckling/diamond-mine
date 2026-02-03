---
category:
  - "[[Film]]"
  - "[[Science Fiction]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Blade Runner
year: "1982"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0083658/
id: tt0083658
plot: A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.
genres:
  - Action
  - Drama
  - Sci-Fi
director:
  - Ridley Scott
onlineRating: 8.1
actors:
  - Harrison Ford
  - Rutger Hauer
  - Sean Young
image: https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/25/1982
watched: true
lastWatched: ""
personalRating: 8.8
personal favorite: true
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
