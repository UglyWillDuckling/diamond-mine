---
category:
  - "[[Film]]"
  - "[[Animation]]"
plan-to-watch:
type: movie
subType: ""
title: The Cat Returns
year: "2002"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0347618/
id: tt0347618
plot: After helping a cat, a seventeen-year-old girl finds herself involuntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Hiroyuki Morita
onlineRating: 7.1
actors:
  - Chizuru Ikewaki
  - Yoshihiko Hakamada
  - Aki Maeda
image: https://m.media-amazon.com/images/M/MV5BZDNlNTlmMzAtZTc5MS00Y2QyLTkwN2EtNjQzMWQxMmNjYzc3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/13/2005
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`

![[~/×/bdd9fc3a3c44388c4bd8d5e1a1acea31_MD5.jpg|400]]