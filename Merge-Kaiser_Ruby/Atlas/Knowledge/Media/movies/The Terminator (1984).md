---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: The Terminator
year: "1984"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0088247/
id: tt0088247
plot: A cyborg assassin from the future attempts to find and kill a young woman who is destined to give birth to a warrior that will lead a resistance to save humankind from extinction.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - James Cameron
onlineRating: 8.1
actors:
  - Arnold Schwarzenegger
  - Linda Hamilton
  - Michael Biehn
image: https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10/26/1984
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
