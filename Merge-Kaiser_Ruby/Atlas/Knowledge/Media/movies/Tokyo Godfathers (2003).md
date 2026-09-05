---
category:
  - "[[Film]]"
  - "[[Animation]]"
  - "[[Anime]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Tokyo Godfathers
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0388473/
id: tt0388473
plot: On Christmas Eve, three homeless people living on the streets of Tokyo discover a newborn baby among the trash and set out to find its parents.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Satoshi Kon
  - Shôgo Furuya
onlineRating: 7.8
actors:
  - Tôru Emori
  - Yoshiaki Umegaki
  - Aya Okamoto
image: https://m.media-amazon.com/images/M/MV5BNmEzNDcwYzQtMzM0Zi00YWYxLTkzOWEtY2Y0ZTJiNDVjM2NkXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/08/2003
watched: true
lastWatched: ""
personalRating: 8.7
tags:
  - film/animated
  - film/christmas
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
