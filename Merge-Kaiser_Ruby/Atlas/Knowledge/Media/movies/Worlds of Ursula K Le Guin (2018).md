---
category:
  - "[[Film]]"
  - "[[Documentary]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Worlds of Ursula K. Le Guin
year: "2018"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt10022158/
id: tt10022158
plot: Decades before Hogwarts, Ursula K. Le Guin invited young readers to wizard school in her classic Earthsea fantasy series, and dazzled the science fiction world with masterworks like The Left Hand of Darkness and The Dispossessed. ...
genres:
  - Documentary
director:
  - Arwen Curry
onlineRating: 7.4
actors:
  - Michael Chabon
  - Margaret Atwood
  - Neil Gaiman
image: https://m.media-amazon.com/images/M/MV5BNTIzYjY1NTYtYTgxZC00ZDM5LThkM2UtNzI0MmRjMmM4NDQ5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/01/2018
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
