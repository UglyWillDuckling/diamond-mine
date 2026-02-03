---
type: series
subType: ""
title: City the Animation
englishTitle: City the Animation
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt33472011/
id: tt33472011
plot: This town, is not just a normal town. There's laughter, love and emotional moments. An unpredictable ordinary life presented by the residents. Exciting stuffs come one after another. Welcome to CITY.
genres:
  - Animation
  - Comedy
writer:
  - Keiichi Arawi
episodes: 0
onlineRating: 7.8
actors:
  - Azusa Tadokoro
  - Kiyomitsu Mizuuchi
  - Makoto Kaneko
image: https://m.media-amazon.com/images/M/MV5BYmNiZjhmMmEtNDE5Zi00MWYwLWExYjEtNzEyZWQ5OTRkNWMyXkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 07.07.2025
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 0
tags:
  - tv-series
plan-to-watch: true
---

`$= '![Image|200](' + dv.current().image + ')'`

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
let text = '';

if (!dv.current().released) {
	text += '**Not released**\n';
	if (dv.current().airedFrom) {
		text += 'The series will release on ' + dv.current().release_date + '.';
	} else {
		text += 'The series is not released yet.';
	}
	
} else if (dv.current().airing) {
	text += '**Not finished**\n';
	text += 'The series is not fully released yet.';
}

if (text) {
	dv.paragraph(text);
}
```

**Online Rating**: `$= dv.current().onlineRating`
**Episodes**: `$= dv.current().episodes`
**Duration**:  `$= dv.current().duration`
**Aired from**: `$= dv.current().airedFrom`
**Aired until**: `$= dv.current().airedTo`