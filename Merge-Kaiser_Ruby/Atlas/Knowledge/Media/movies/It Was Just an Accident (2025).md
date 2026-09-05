---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: It Was Just an Accident
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt36491653/
id: tt36491653
plot: N/A
genres:
  - Documentary
director:
  - "[[Jafar Panahi]]"
onlineRating: .nan
actors:
  - Madjid Panahi
image: https://m.media-amazon.com/images/M/MV5BODM2NTUxOGMtM2ZkYS00MjM3LTkzYzEtZjdkNmQ1ZTBhMWY3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: unknown
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
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
