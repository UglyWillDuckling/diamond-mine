---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: The Shawshank Redemption
year: "1994"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0111161/
id: tt0111161
plot: A banker Andy Duffrane convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.
genres:
  - Drama
director:
  - Frank Darabont
onlineRating: 9.3
actors:
  - Tim Robbins
  - Morgan Freeman
  - Bob Gunton
image: https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 14.10.1994
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

[[Andy Duffrane]]