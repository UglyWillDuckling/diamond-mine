---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Good Morning
year: "1959"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0053134/
id: tt0053134
plot: Two boys begin a silence strike to press their parents into buying them a television set.
genres:
  - Comedy
  - Drama
  - Family
director:
  - Yasujirô Ozu
onlineRating: 7.8
actors:
  - Keiji Sada
  - Yoshiko Kuga
  - Chishû Ryû
image: https://m.media-amazon.com/images/M/MV5BZTEwZjUwMjctMmNkMi00YTQxLWFlOTUtZDBhYjVjOTZhMmE4XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 01.02.1962
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
