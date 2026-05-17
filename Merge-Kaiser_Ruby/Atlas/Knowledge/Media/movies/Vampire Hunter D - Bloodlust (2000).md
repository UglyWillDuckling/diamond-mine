---

category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: "Vampire Hunter D: Bloodlust"
year: "2000"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0216651/
id: tt0216651
plot: In the year 12,090 AD, the dhampir hunter "D" is hired to rescue Charlotte Elbourne from the vampire nobleman Meier Link.
genres:
  - Animation
  - Action
  - Drama
director:
  - Yoshiaki Kawajiri
onlineRating: 7.7
actors:
  - Andrew Philpot
  - John Rafter Lee
  - Pamela Adlon
image: https://m.media-amazon.com/images/M/MV5BNzU1YTAxYzEtMDZjYy00YmI3LWI0YzEtYjZmYmNkMjY3MDU5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 28.09.2001
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
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
