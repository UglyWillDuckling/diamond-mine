---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Star Wars: Episode V - The Empire Strikes Back"
year: "1980"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0080684/
id: tt0080684
plot: After the Empire overpowers the Rebel Alliance, Luke Skywalker begins training with Jedi Master Yoda, while Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.
genres:
  - Action
  - Adventure
  - Fantasy
director:
  - Irvin Kershner
onlineRating: 8.7
actors:
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
image: https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/18/1980
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
