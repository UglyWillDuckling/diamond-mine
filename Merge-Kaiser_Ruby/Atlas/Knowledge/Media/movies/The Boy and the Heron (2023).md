---
category:
  - "[[Film]]"
plan-to-watch: false
type: movie
title: The Boy and the Heron
year: "2023"
url: https://www.imdb.com/title/tt6587046/
plot: In the wake of his mother's death and his father's remarriage, a headstrong boy ventures into a dreamlike world shared by the living and the dead in search of his missing stepmother.
genres:
  - Animation
  - Adventure
  - Drama
director:
  - "[[Hayao Miyazaki]]"
onlineRating: 7.4
actors:
  - Soma Santoki
  - Masaki Suda
  - Kô Shibasaki
image: https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_SX300.jpg
premiere: 12/08/2023
released: true
watched: true
lastWatched: 2026-04-01
personalRating: 8.4
status: Watching
reminds me of:
  - "[[A Wizard of Earthsea]]"
tags:
  - film/animated
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
