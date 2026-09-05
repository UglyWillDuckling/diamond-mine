---
category:
  - "[[Film]]"
interest: 7.7
plan-to-watch: true
personal favorite: true
type: movie
subType: ""
title: Whisper of the Heart
year: "1995"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0113824/
id: tt0113824
plot: A love story between a girl who loves reading books and a boy who has previously checked out all of the library books she chooses.
genres:
  - Animation
  - Drama
  - Family
director:
  - Yoshifumi Kondô
onlineRating: 7.8
actors:
  - Yoko Honna
  - Issei Takahashi
  - Takashi Tachibana
image: https://m.media-amazon.com/images/M/MV5BZWVlOGNlYjgtYWE4Yi00MjdiLWE1MTEtZTRmNzI1ODk5NzMzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 13.12.1996
watched: false
lastWatched: 2026-03-22
personalRating: 10
tags:
  - film/comfort
selected: false
movie_status:
  - plan_to_watch
---

`$= '![Image|200](' + dv.current().image + ')'`[[Plaćen Celtic coin račun]]

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
