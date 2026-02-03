---
type: movie
subType: ""
title: Mr. Bug Goes to Town
year: "1941"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0033727/
id: tt0033727
plot: The happy tranquility of Buggsville is shattered when the populace learns that a colossal skyscraper is to be built over their tiny town.
genres:
  - Animation
  - Comedy
  - Family
director:
  - "[[Dave Fleischer]]"
onlineRating: 6.9
actors:
  - Kenny Gardner
  - Jack Mercer
  - Tedd Pierce
image: https://substackcdn.com/image/fetch/$s_!0Qb8!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa47e548a-5c4a-4da7-9530-f4db53bb625d_550x398.gif
released: true
premiere: 12/05/1941
watched: false
lastWatched: ""
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

**Type**: `$= dv.current().type`
**Premiered**: `$= dv.current().premiere`