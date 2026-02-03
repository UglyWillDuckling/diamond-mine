---
type: movie
subType: Animated
title: The Snow Queen
year: "1957"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0050987/
id: tt0050987
plot: A young girl embarks on a perilous journey to rescue her friend, who has been taken captive by the Snow Queen and turned cruel by enchanted ice splinters.
genres:
  - Animation
  - Adventure
  - Family
director:
  - Lev Atamanov
onlineRating: 7.5
actors:
  - Vladimir Gribkov
  - Yanina Zheymo
  - Anna Komolova
image: https://m.media-amazon.com/images/M/MV5BMTliZTZhMDQtOGU0NC00OWIxLWI5MjgtMzE5NDdjYWUyOTIzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 20.11.1959
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
category:
  - "[[Film]]"
  - "[[Animation]]"
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

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Genres**:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```

```dataviewjs
if (!dv.current().released) {
	dv.span('**Not released** The movie is not yet released.')
}
```

**Premiered**: `$= dv.current().premiere`