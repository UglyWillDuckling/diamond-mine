---
category:
  - "[[Film]]"
  - "[[Animation]]"
type: movie
subType: ""
title: Akira
year: "1988"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0094625/
id: tt0094625
plot: A secret military project endangers Neo-Tokyo when it turns a teenage biker gang member into a rampaging psychic psychopath who can only be stopped by his best friend.
genres:
  - Animation
  - Action
  - Drama
director:
  - "[[Katsuhiro Ôtomo]]"
onlineRating: 8
actors:
  - Mitsuo Iwata
  - Nozomu Sasaki
  - Mami Koyama
image: https://m.media-amazon.com/images/M/MV5BYWUxMGRhZDQtMTBmMi00N2IxLWE5NmYtMDMyMWExODAwNWYzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/16/1988
watched: true
lastWatched: ""
personalRating: 8.9
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
